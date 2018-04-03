---
title: OMNIA Expense Management Tutorial
keywords: omnia3
summary: "Expense Management Tutorial"
sidebar: omnia3_sidebar
permalink: omnia3_expensemanagementtutorial.html
folder: omnia3
---

## 1. Introduction

Based on a practical example of Expenses reporting, this Management Tutorial demonstrates the versatility and usability of OMNIA Platform on the daily cycle of businesses and organizations.


## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant, and are logged in as a user with modeling privileges to this tenant.

## 3. Modeling OMNIA Expense Management

1.  Start by selecting the tenant where you are going to model, and you will be redirected to the modeling area.
    
    ![Homepage_Dashboard](http://funkyimg.com/i/2DVGv.png)
    
2.  Through the left side menu, access the option  **Agents**. Create a new  **Agent**  by clicking the button  **Add new**  on the top right side, and setting its  **Code**  to  **Company**.
    
    ![Modeler_Create_Agent](https://github.com/numbersbelieve/omnia3/raw/master/docs/tutorialPics/modelingTutorial/Modeler-Create-Agent.PNG)
    
3.  Return to the  **Agents**  list and add a new agent by clicking on button  **Add new**  and setting its  _Code_  as  **Employee**.
    
4.  Through the left side menu, access the option  **Resources**. Create a new  **Resource**  by clicking the button  **Add new**  on the top right side, and setting its  **Code**  to  **Expenses**.
    
5.  Access the option  **Versioning > Builds**  and build the tenant by clicking the button  **Create new**.
    
6.  On the left side menu, select option  **Go to > Application**, and create a new  **Company**  by selecting the option  **Configurations > Company**  and defining its  _Code_  and  _Name_.
    
    ![Application_Create_Agent](https://github.com/numbersbelieve/omnia3/raw/master/docs/tutorialPics/modelingTutorial/Application-Create-Agent.PNG)
    
7.  Follow the same process of the previous step to create a new  **Employee**  and  **Expenses**.
    
8.  Go back to modeling area (by accessing the option  **Go to > Modeler**) and create a new  **Commitment**  with  _Code_  set as  **ExpensesRequest**,  **Expenses**  as the resource to be exchanged,  **Employee**  as provider agent and  **Company**  as receiver agent.
  
    ![Modeler_Create_Agent](https://raw.githubusercontent.com/numbersbelieve/omnia3/master/docs/tutorialPics/modelingTutorial/Modeler-Commitment-ExpenseRequest.PNG)