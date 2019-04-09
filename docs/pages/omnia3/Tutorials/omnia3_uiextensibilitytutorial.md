---
title: User Interface (UI) Extensibility Tutorial
keywords: omnia3
summary: "OMNIA Low-Code Development Platform - UI Extensibility Tutorial"
sidebar: omnia3_sidebar
permalink: omnia3_uiextensibilitytutorial.html
folder: omnia3
---


## 1. Introduction

Now that you have completed the [Beginner Tutorial](https://docs.omnialowcode.com/omnia3_beginnertutorial.html), whose result is a functional order management application, this UI Extensibility Tutorial will focus on the execution of behaviours on the user interface (client browser).

## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant, and are logged in as a user with modeling privileges to this tenant.

It is necessary to have completed the steps in the  [Beginner tutorial](https://docs.omnialowcode.com/omnia3_beginnertutorial.html), as this tutorial builds upon it.

## 3. UI Extensibility

1. Access OMNIA homepage, select the tenant where you have developed the beginner tutorial, and go to the modeling area.

2. Through the left side menu, edit *PurchaseOrder* document by accessing the option ***Documents / PurchaseOrder***

3. To Add the following attributes by clicking on button **Add new / Primitive**: 

    - *Name*: **PaymentTerm**, *Type*: ***Integer***
    - *Name*: **IsDelivered**, *Type*: ***Boolean***
    - *Name*: **Received**, *Type*: ***Boolean***
    - *Name*: **DeliveryAddress**, *Type*: ***Text***
    
    These attributes allow the user to identify, when inserting a new *PurchaseOrder*, the *Payment Term* agreed with the Supplier, and if the goods are going to be delivered to a Company Address. At last, the *Received* attribute allows the user to control the reception of the requested goods.
    
4. Navigate to tab **User Interface**, and set attribute *DeliveryAddress* as *Hidden*
    
5. Build the model. Go to application and check the new attributes
    
6. Go back to modeling area. Navigate to option **Documents / PurchaseOrder / User Interface Behaviours**  and click on top right button *Add new* to add a new behaviour. This behaviour will control *DeliveryAddress* and *Received* attributes visibility and value, depending on *IsDelivered* value. Set its *Name* as **IsDeliveredChange**, *Behaviour Type* as **On change**, element as **IsDelivered** and copy the following JavaScript code as the *Expression*

    ```JavaScript
        if(this.isDelivered === true){
            this._metadata.elements.received.isHidden = false;
            this._metadata.elements.deliveryAddress.isHidden = false;
        }else{
            this._metadata.elements.received.isHidden = true;
            this._metadata.elements.deliveryAddress.isHidden = true;
            this.deliveryAddress = "";
            this.received = false;
        }    
    ```

7. Add another **User Interface Behaviour** by clicking on top right button *Add new*. This behaviour will control *DeliveryAddress* attribute availability and size, depending on *Received* value. Set its *Name* as **ReceivedChange**, *Behaviour Type* as **On change**, *Element* as **Received** and copy the following JavaScript code as the *Expression*

    ```JavaScript
        if(this.received === true){
            this._metadata.elements.deliveryAddress.attributes.isReadOnly = true;
            this._metadata.elements.deliveryAddress.size = 4;
        }else{
            this._metadata.elements.deliveryAddress.attributes.isReadOnly = false;
            this._metadata.elements.deliveryAddress.size = 6;
        }    
    ```

8. Add a **User Interface Behaviour** that will validate if *PaymentTerm* attribute value is bigger than zero. Set its *Name* as **PaymentTermChange**, *Behaviour Type* as **On change**, *Element* as **PaymentTerm** and copy the following JavaScript code as the *Expression*

    ```JavaScript
        this._metadata.elements.paymentTerm.removeMessage('validation');
        if(this.paymentTerm <0)
            this._metadata.elements.paymentTerm.addMessage('Value must be bigger than zero','error',  'validation');
        else
            this._metadata.elements.paymentTerm.addMessage('Payment term is valid','success',  'validation');    
    ```

9. At last, add a **User Interface Behaviour** that will validate if *OrderLines* attribute length is bigger than zero. Set its *Name* as **LineCountWarning**, *Behaviour Type* as **Before save** and copy the following JavaScript code as the *Expression*

    ```JavaScript
        if(this.orderLines.length ==0)
            alert("Warning: The document will be saved without lines. Don't worry, you can add them later.");
    ```

10. Build & Deploy

11. Go to application and validate the new behaviours, by making the following tests

    - Check attribute *IsDelivered*. Attribute *DeliveryAddress* should now be visible
    - Check attribute *Received*. Attribute *DeliveryAddress* must now be read-only and with a different size
    - Fill attribute *PaymentTerm* with a negative or positive value. A different validation message must be shown for each scenario
    - Save a document without any lines. Check that a warning alert is shown.
