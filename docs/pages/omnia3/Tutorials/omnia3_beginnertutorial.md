---
title: Beginner Tutorial
keywords: omnia3
summary: 'Take your first steps with the OMNIA Low-Code Development Platform'
sidebar: omnia3_sidebar
permalink: omnia3_beginnertutorial.html
folder: omnia3
---

## 1. Introduction

OMNIA, a truly **Agile Low-Code Development Platform**, welcomes you aboard to its continuous development process: the Developer Experience.

We do understand all the difficulties of build a **business management application** from the ground up. That's why **OMNIA** takes the pledge to **leverage and accelerate** the entire development process, providing a **simple**, **fast** and **responsive-by-default** platform.

Now is the time to judge our premises. To that end, we've just created a simple and intuitive tutorial based on an Order Management example, guiding you throughout the **short-time period** of deploying all your inputs into a **business application**.

**Start your exercise on OMNIA Low-Code Development Platform!**

## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant, and are logged in as a user with modeling privileges to this tenant.

If you do not have a tenant yet, please follow the steps of the [Tenant Creation tutorial](omnia3_tenantcreation.html).

## 3. Modeling an application

1. Start by selecting the tenant where you are going to model and you will be redirected to the modeling area (if you only have one tenant, redirection will be automatic).

   ![Homepage_Dashboard](/images/tutorials/beginner/Modeler-Homepage.PNG)

2. Through the left side menu, access the option **_Agents / Add New_** on the top right side, and set its _Name_ as **Company**.

   ![Modeler_Create_Agent](/images/tutorials/beginner/Modeler-Create-Agent.PNG)

3. Return to the **_Agents_** list and click on button **_Add new_** to add a new Agent. Set its _Name_ as **Supplier**.

4. Through the left side menu, access the option **_Resources / Add new_** on the top right side, and set its _Name_ as **Product**.

5. "Build & Deploy" your model (top right corner of the modeling area).

6. On the right side of the top bar, click the first button and select the option **_Application_** (Refresh the page so you can see the option). You'll be redirected to the application area.

   ![Modeler_Navigate_Application](/images/tutorials/beginner/Modeler-Navigate-Application.PNG)

7. Create a new **Company**, by selecting the option **_Configurations / Company_** and defining its _Code_ and _Name_.

   ![Application_Create_Company](/images/tutorials/beginner/Application-Create-Company.PNG)

8. Follow the same process of the previous step to create a new **Supplier** and **Product**.

9. Go back to the modeling area (**_Modeler_** - top right corner) and create a new **Commitment** with _Name_ set as **_GoodsPurchaseRequest_**, **Product** as the resource to be exchanged, **Supplier** as provider agent and **Company** as receiver agent.

   ![Modeler_Create_Commitment](/images/tutorials/beginner/BeginnerTutorial-9.jpg)

10. Add a new attribute ([more info here](https://docs.omnialowcode.com/omnia3_modeler_entities.html)) by clicking on button **Add new / Primitive**. Set its _Name_ as **UnitPrice**, _Type_ as **_Decimal_**, and as required by checking option _Is required?_.

    ![Modeler_Create_Attribute](/images/tutorials/beginner/BeginnerTutorial-10.jpg)

11. Edit the attribute **\_amount**, and check option _Is read only?_.

12. Click on tab **_Entity Behaviours_** and on button **Add new > Formula**. Set its _Name_ as **CalculateAmount**, attribute as **\_amount** and set as code to execute `return UnitPrice * _quantity;` (this will set \_amount to formula's result).

13. Add a new document by selecting option **_Documents / Add new_**. Set **PurchaseOrder**, as the document's _Name_;

14. Click on **_Attributes / Add new / Collection_** in **Document**. Set its _Name_ as _OrderLines_, _Type_ as **Commitment > GoodsPurchaseRequest**.

    ![Modeler_Create_Composite_Attribute](/images/tutorials/beginner/Modeler-Create-OrderLines-Attribute.PNG)

15. Build & Deploy model

16. Navigate to **_Application_** through the top bar menu and create a **Serie** for the document you've just created, by selecting the option **Series / PurchaseOrderSeries -> Create New** and filling in the input fields.

17. Click the menu arrow to see the main menu and create a new **PurchaseOrder** by selecting the option **_Documents / PurchaseOrder -> Create New_** and filling in the needed fields.

18. After saving your new document, go back to modeling area (by accessing top bar menu option **_Modeler_**) and edit the **PurchaseOrder** document to simplify its interface. Add a new attribute by clicking the button **Add new / Reference**. Set its _Name_ as **Company**, _Type_ as **_Agent / Company_**, and as required by checking option _Is required?_.

19. Add **_Attribute / Add new / Reference_**. Set its _Name_ as **Supplier**, _Type_ as **_Agent / Supplier_**, and as required by checking option "_Is required?_".

20. Navigate to tab _Entity Behaviours_ and click the button **_Add new / Before collection entity is initialized_** to add a new **Before Collection Entity is Initialized** Behaviour to fill **\_provider** and **\_receiver** attributes. Define **_SetCommitmentAgents_** as Name, select **_OrderLines_** as collection and paste the following code:

    ```C#
        entry._provider = Supplier;
        entry._receiver = Company;
    ```

21. Go to your **_PurchaseOrder_** **Document** User Interface by accessing the respective tab and reorganize them to simplify the interface (click on a element to edit/remove it). Remove the elements **Provider**, **Receiver** and **Code** from **OrderLines** element. At last, remove **Code** element UI from Document.

22. Reorganize Rows and Columns, re-establishing the **size** and **position** of their elements:

- **_Serie_**: Row 1, Column 1 and Size 4;
- **_Number_**: Row 1, Column 5 and Size 4;
- **_Date_**: Row 1, Column 9 and Size 4;
- **_Company_**: Row 2, Column 1 and Size 4;
- **_Supplier_**: Row 2, Column 5 and Size 4.

23. Build & Deploy model

24. Go to application and validate interface changes by creating a new **PurchaseOrder** document. The interface should be equal to the one below:

    ![Application_Final_Interface](/images/tutorials/beginner/Application-View-PurchaseOrder.PNG)


    **Congratulations** on completing your **first steps** with the **OMNIA Low-Code Development Platform** and welcome to the world of **development agility**! Now, it's time to **move** to our next challenge: [**OMNIA's Platform Advanced Tutorial**](omnia3_advancedtutorial.html).
