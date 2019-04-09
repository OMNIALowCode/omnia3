---
title: User Interface (UI) Behaviours Tutorial
keywords: omnia3
summary: "A tutorial exemplifying how you can use UI Behaviours"
sidebar: omnia3_sidebar
permalink: omnia3_uiextensibilitytutorial.html
folder: omnia3
---


## 1. Introduction

Now that you have completed the [Beginner Tutorial](https://docs.omnialowcode.com/omnia3_beginnertutorial.html), whose result is a functional order management application, this UI Extensibility Tutorial will focus on the execution of behaviours on the user interface (client browser).

In this example, we'll add a new boolean attribute to our document, so that we can give the user the option to "Close" a document when its order is fulfilled. After the user declares the order as fulfilled, the entire document becomes "read only" and cannot be changed again.

To know more about how User Interface (UI) Behaviours work, see our [User Inteface Behaviour page](omnia3_modeler_uibehaviours.html).

## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant, and are logged in as a user with modeling privileges to this tenant.

It is necessary to have completed the steps in the  [Beginner tutorial](https://docs.omnialowcode.com/omnia3_beginnertutorial.html), as this tutorial builds upon it.

## 3. UI Extensibility

1. Go to the modeling area and edit your *PurchaseOrder* document by accessing the option ***Documents / PurchaseOrder***

2. Add the following attribute, that will allow the user to identify when an Order is fulfilled, by clicking on button **Add new / Primitive**: 

    - *Name*: **OrderReceived**
    - *Type*: ***Boolean***
    - *Row*: **6**
    - *Column*: **11**
    - *Size*: **2**
    
    
3. Now let's navigate to tab **User Interface Behaviours** and create a new *Initializer* behaviour called *CloseDocument*, label it "Order fulfilled?" and paste the following code:

    ```JavaScript
       function setAllElementsAsReadOnly(elements, data) {
	    for (const element of Object.values(elements)) {
		    element.attributes.isReadOnly = true;

		    if (element.type.toUpperCase() === 'LIST') {
		    	element.attributes.addEntry = "hidden";
		    	element.attributes.removeEntry = "hidden";
		    }
	    }
    }

    function setReadonlyState(metadata, data) {
    	setAllElementsAsReadOnly(metadata.elements, data);

    	for (const entry of data.orderLines) {
	    setAllElementsAsReadOnly(entry._metadata.elements, entry);
    	}
    }

    if(this.orderReceived === true)
    setReadonlyState(this._metadata, this);    
    ```
    
5. Build the model and go to application, create a new Purchase Order Document, and check the "Order fulfilled?" option before submitting it. Now reopen it and verify that all fields are now "read only".

	![PurchaseOrderDocument_readOnly](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/advanced/purchaseDocument_closed.jpg)
