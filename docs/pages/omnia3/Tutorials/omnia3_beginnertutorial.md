---
title: Beginner Tutorial
keywords: omnia3
summary: "Get started with you first steps on OMNIA Low-Code Development Platform"
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

1. Start by selecting the tenant where you are going to model, and you will be redirected to the modeling area.
 
    ![Homepage_Dashboard](/images/tutorials/beginner/Modeler-Homepage.PNG)
 
2. Through the left side menu, access the option ***Agents / Add New*** on the top right side, and setting its *Name* as **Company**.

    ![Modeler_Create_Agent](/images/tutorials/beginner/Modeler-Create-Agent.PNG)

3. Return to the ***Agents*** list and click on button ***Add new*** to add a new Agent. Set its *Name* as **Supplier**.

4. Through the left side menu, access the option ***Resources / Add new*** on the top right side, and setting its *Name* as **Product**.

5. "Build & Deploy" your model (top right corner of the modeling area).

6. On the right side of the top bar, click the first button and select the option ***Application***. You will now be redirected to the application area. 

    ![Modeler_Navigate_Application](/images/tutorials/beginner/Modeler-Navigate-Application.PNG)
    
7. Create a new **Company**, by selecting the option ***Configurations / Company*** and defining its *Code* and *Name*.

    ![Application_Create_Company](/images/tutorials/beginner/Application-Create-Company.PNG)

8.  Follow the same process of the previous step to create a new **Supplier** and **Product**.

9. Go back to the modeling area (***Modeler***) and create a new **Commitment** with *Name* set as ***GoodsPurchaseRequest***, **Product** as the resource to be exchanged, **Supplier** as provider agent and **Company** as receiver agent.

    ![Modeler_Create_Commitment](/images/tutorials/beginner/Modeler-Create-Commitment.PNG)

10. Add a new attribute by clicking on button **Add new / Primitive**. Set its *Name* as **UnitPrice**, *Type* as ***Decimal***, and as required by checking option *Is required?*.

    ![Modeler_Create_Attribute](/images/tutorials/beginner/Modeler-Create-Attribute.PNG)

11. Edit the attribute **_amount**, and check option *Is read only?*.

12. Click on tab ***Entity Behaviours*** and on button **Add new > Formula**. Set its *Name* as **CalculateAmount**, attribute as **_amount** and set as code to execute `return UnitPrice * _quantity;`.

13. Add a new document by selecting option ***Documents / Add new***. Set **PurchaseOrder**, as the document's *Name*;

14. Click on ***Attribute / Add new / Collection*** in **Document**. Set its *Name* as *OrderLines*, *Type* as **Commitment > GoodsPurchaseRequest**.

    ![Modeler_Create_Composite_Attribute](/images/tutorials/beginner/Modeler-Create-OrderLines-Attribute.PNG)

15. Build & Deploy model

16. Navigate to ***Application*** through the top bar menu, and create a **Serie** for the document you just created, by selecting the option **Series / PurchaseOrderSeries -> Create New**.

17. Create a new **PurchaseOrder** by selecting the option ***Documents / PurchaseOrder -> Create New*** and fill the needed fields.

18. After saving your new document, go back to modeling area (by accessing top bar menu option ***Modeler***) and edit the **PurchaseOrder** document to simplify its interface. Add a new attribute by clicking the button **Add new / Reference**. Set its *Name* as **Company**, *Type* as ***Agent / Company***, and as required by checking option *Is required?*.

19. Add ***Attribute / Add new / Reference***. Set its *Name* as **Supplier**, *Type* as ***Agent / Supplier***, and as required by checking option "*Is required?*". 

20. Navigate to tab *Entity Behaviours* and click the button ***Add new / After Change*** to add a new **After Change** Behaviour to fill **_provider** and **_receiver** attributes. Define ***SetCommitmentAgents*** as Name and paste the following code:

    ```C#
        OrderLines.ForEach(line => {
	           line._provider = Supplier;
	           line._receiver = Company;
        });
    ```

21. Go to your ***PurchaseOrder*** **Document** User Interface by accessing the respective tab, and reorganize them to simplify the interface. Remove the elements **Provider**, **Receiver**  and **Code** from **OrderLines** element. At last, remove **Code** element UI from Document.

22. Reorganize Rows and Columns, re-establishing the **size** and **position** of their elements:
  * ***Serie***: Row 1, Column 1 and Size 4; 
  * ***Number***: Row 1, Column 5 and Size 4; 
  * ***Date***: Row 1, Column 9 and Size 4; 
  * ***Company***: Row 2, Column 1 and Size 4;
  * ***Supplier***: Row 2, Column 5 and Size 4.

23. Build & Deploy model

24. Go to application and validate interface changes by creating a new **PurchaseOrder** document. The interface should be equal to the one below:

    ![Application_Final_Interface](/images/tutorials/beginner/Application-View-PurchaseOrder.PNG)


    **Congratulations** on your very **first insight** into OMNIA Low-Code Platform's true **development agility**! Now, it's time to **move** to our next challenge: [**OMNIA's Platform Advanced Tutorial**](omnia3_advancedtutorial.html). 
