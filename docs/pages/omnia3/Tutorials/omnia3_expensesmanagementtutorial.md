---
title: OMNIA Expenses Management Tutorial
keywords: omnia3
summary: 'Expenses Management Tutorial'
sidebar: omnia3_sidebar
permalink: omnia3_expensemanagementtutorial.html
folder: omnia3
---

## 1. Introduction

Based on a practical example of Expenses reporting, this Management Tutorial highlights the versatility and usability of OMNIA Platform on the daily cycle of businesses and organizations.

## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant, and are logged in as a user with modeling privileges to this tenant.

## 3. Modeling OMNIA Expenses Management

1.  Start by selecting the tenant where you are going to model, and you will be redirected to the modeling area.

    ![Homepage_Dashboard](/images/tutorials/beginner/Modeler-Homepage.PNG)

2.  Through the left side menu, access the option **_Agents / Add new_** on the top right side, and set its _Name_ as **Company**.

    ![Modeler_Create_Agent](/images/tutorials/expensemanagement/Modeler-Add-Agent.PNG)

3.  Return to the **_Agents / Add new_** and set its _Name_ as **Employee**.

4.  Through the left side menu, access the option **_Resources / Add new_** and set its _Name_ as **Expenses**.

5.  Build the model, by accessing the option **_Versioning / Builds / Create new_**.

6.  On the right side of the top bar, click second button and select option **_Application_** to be redirected to application area. Then, on left side menu, click on **_Configurations / Company / Create new_** to create a new Company. Define its _Code_ and _Name_.

    ![Application_Create_Agent](/images/tutorials/expensemanagement/Application-Add-Agent.PNG)

7.  Follow the same process of the previous step to create a new **Employee** and **Expenses**.

8.  Go back to modeling area (through the top bar, by accessing the option **_Modeler_**) and create a new **Commitment** with _Name_ set as **ExpenseRefundRequest**, **Expenses** as the resource to be exchanged, **Employee** as provider agent and **Company** as receiver agent.

    ![Modeler_Create_Commitment](/images/tutorials/expensemanagement/Modeler-Add-Commitment.PNG)

9.  Still on Commitment **_ExpenseRefundRequest_**, create a new **Attribute**, by clicking the button **Add new / Primitive** on the top right side, and setting its _Name_ to **ExpenseAmount**, _Type_ as **_Decimal_**, and as required by checking option _Is required?_. Additionally, set _\_amount_ attribute as read-only.

10. Add a new document (by accessing the option **_Documents / Add new_** button) and set its _Name_ as **ExpenseReport**.

11. On the left side menu, select the option **Generic Entities**. Create a new one, by clicking the button **Add new** on the top right side, and set its _Name_ as **Currency**.

12. Perform a new Build (by accessing the option **_Versioning / Builds / Create new_**).

13. Go back to application area (through the top bar option) and create a new **Currency**. Set its _Code_ as EUR and _name_ as Euro.

    ![Application_Create_Agent](/images/tutorials/expensemanagement/Application-Create-Currency.PNG)

14. Access the option **_Series / ExpenseReportSerie / Add new_** and set its _Code_ as **A**, and _Name_ as **Expenses Report Serie**.

15. Open **_Documents / Expense Report_** and create a document. As you can see, the interface usability can be improved. We will now proceed to simplify it, and add more information.

16. Go back to modeling area (through the top bar option) and edit the **Document / ExpenseReport** document to simplify its interface. Add a new attribute by clicking on button **_Add new / Reference_**. Set its _Name_ as **Company**, its _Type_ as **_Agent / Company_**, and as required by checking option _Is required?_.

17. Click on button **Add new / Collection** to add an **Attribute** to your **Document**. Set its _Name_ as **ExpenseLines**, _Type_ as **_Commitment / ExpenseRefundRequest_**.

    ![Modeler_Add_Commitment_Attribute](/images/tutorials/expensemanagement/Modeler-Add-ExpenseReport-ExpenseRefundRequest.PNG)

    - Add a new **Reference** attribute to your **Document**. Set its _Name_ as **Currency**, _Type_ as **_Generic Entity / Currency_**, and as required by checking option _Is required?_.

    - Add a new **Reference** attribute to your **Document**. Set its _Name_ as **Employee**, _Type_ as **_Agent / Employee_**, and as required by checking option _Is required?_.

    - Add a new **Primitive** attribute to your **Document**. Set its _Name_ as **ExchangeRate**, _Type_ as **_Decimal_**, and as required by checking option _Is required?_.

    - Add a new **Primitive** attribute to your **Document**. Set its _Name_ as **TotalAmount**, _Type_ as **_Decimal_**, as read only by checking option _Is read only_ and as required by checking option _Is required?_.

    - Add a new **Primitive** attribute to your **Document**. Set its _Name_ as **ExpenseDate**, _Type_ as **_Date_**, and as required by checking option _Is required?_.

18. Perform a new Build (by accessing the option **_Versioning / Builds / Create new_**). Access the application and test the new creation of the document.

19. Go back to modeling area (through the top bar option)

20. (**Optional**) Navigate to **Data Source** _System_, and on tab “Behaviour References“ define a reference for .NET assembly System.Net.Http

    ![Modeler_Create_Reference](/images/tutorials/expensemanagement/Modeler-Add-Behaviour-Dependency.PNG)

    Navigate to **Document** _ExpenseReport_ and click on tab _Behaviour Namespace_ to add a reference to namespace System.Net.Http

    ![Modeler_Add_Namespace](/images/tutorials/expensemanagement/Modeler-ExpenseReport-Add-Namespace.PNG)

    Add a new **Action Behaviour**, in order to return automatically your updated _Exchange Rate_, based on an external API . Set _GetRateData_ as Code, and the attribute as _Currency_. Paste the following code:

    ```C#
    var client = new HttpClient() { };

    string apiEndpoint = $"http://data.fixer.io/api/latest?access_key=13854a5cc70cff0901740c1a7ac3c5b3&symbols={Currency}";
    var requestResult = client.GetAsync(apiEndpoint).GetAwaiter().GetResult();

    var responseBody = requestResult.Content.ReadAsStringAsync().Result;
    var rateData = JsonConvert.DeserializeObject<Dictionary<string, object>>(responseBody);

    if (!requestResult.IsSuccessStatusCode)
        throw new Exception("Error on retrieving rate: " + responseBody);

    var value = JsonConvert.DeserializeObject<Dictionary<string, object>>(rateData["rates"].ToString());

    ExchangeRate = Convert.ToDecimal(value[$"{Currency}"].ToString());
    ```

    This example will give the exchange rate between EUR and the currency provided in the attribute Currency. You can try it out with different currencies, such as **GBP** or **USD**.

21. Add a new **Before Collection Entity is Initialized** Behaviour to fill _Provider_ and _Receiver_ attributes by accessing the tab Behaviours and clicking the button **_Add new / Before collection entity is initialized_**. Set _BeforeCollectionEntityInit_ as Name, select **_ExpenseLines_** as collection and paste the following code:

    ```C#
    entry._receiver = Company;
    entry._provider = Employee;
    entry._amount = entry.ExpenseAmount/ExchangeRate;

    TotalAmount += entry._amount;

    ```

22. Go to your **ExpenseReport** Document User Interface by accessing the respective tab, and reorganize it to simplify the interface. Delete the attributes Code, Provider, Receiver and Quantity from the **ExpenseLines** element. At last, delete the Code attribute from Document.

23. Reorganize Rows and Columns, re-establishing the size and position of their attributes:

    - **_Serie_**: Row 1, Column 1 and Size 4;
    - **_Number_**: Row 1, Column 2 and Size 4;
    - **_Date_**: Row 1, Column 3 and Size 4;
    - **_Company_**: Row 2, Column 1 and Size 4;
    - **_Employee_**: Row 2, Column 2 and Size 4;
    - **_Currency_**: Row 2, Column 3 and Size 4;
    - **_ExchangeRate_**: Row 3, Column 1 and Size 2;
    - **_ExpenseDate_**: Row 3, Column 5 and Size 4;
    - **_ExpenseLines_**: Row 4, Column 1 and Size 12. Within the Expense Lines, change the attributes:
      - **_Resource_**: Row 1, Column 1 and Size 2;
      - **_Amount_**: Row 1, Column 11 and Size 2;
    - **_TotalAmount_**: Row 5, Column 11 and Size 2.

24. Perform a new Build (by accessing the option **_Versioning / Builds / Create new_**).

25. Go to application and validate User Interface changes, by creating a new **ExpenseReport** document. The interface should be equal to the one below:

    ![Application_ExpenseReport_Result](/images/tutorials/expensemanagement/Application-ExpenseReport-Result.PNG)

    So, here you have it, a simple and descriptive Expense Report, completely built on **OMNIA Platform 3.0**!
