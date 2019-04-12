---
title: Modeling Entities
keywords: omnia3
summary: "Modeling Entities"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_entities.html
folder: omnia3
---


## 1. Introduction

In OMNIA Platform you can add your own entities, and each one is based on an OMNIA concept.

In each entity, it's possible to define the attributes, the behaviours and the user interface,

## 2. Model Entities

All entities are modeled on a base concept, from the following: __Agents, Commitments, Documents, Events, Generic entities, Resources or Series__.

The base type adds some specifications to the modeled entity, such as:

* **Commitments/Events**: entities that act as sub-entities of another entity. Cannot be created individually
* **Generic Entities**: can act as *non-root*. These entities will act as sub-entities of another entity, and cannot be managed individually
* **Series**: act as numerators for documents. Series are generated automatically when a new document is created

### How to add a new entity?

First, the base concept must be selected on the modeling area menu. Then, select the option _Add new_ and define the following properties:

* **Name**: the name of the entity (needs to be unique within the model);
* **Description**: the textual explanation of the entities' purpose (can be used as development documentation);
* **Uses a custom data source?**: indicates if the attribute is entirely managed on OMNIA, or resides on an external data source;

On Commitments or Events, the following properties are required:

* **You want to exchange the resource**: the __resource__ to be used as the transaction resource;
* **It will be provided by the agent**: the __agent__ to be used as the transaction provider agent;
* **And received by the agent**: the __agent__ to be used as the transaction receiver agent;

On Generic Entities, the following property is available:

 **Is a root entity?**: indicates if the entity acts only as a sub-entity;


## 3. Attributes
__*Entity / Attributes*__

The attributes allow you to define the structure of your entity. Each one will represent a property in the data you can read or write.

### How to add a new attribute?
Selecting the option _Add new_ you need to first select one of three types of attribute:
* **Primitive**: A primitive type such as a text field or an integer;
* **Reference**: A reference to another entity on the platform;
* **Collection**: Another entity that will act as a 'sub-entity' of this one. Must be of a compatible type: Events or Commitments in a Document, and Generic Entities (only those marked as non-root) in any entity type.

Afterwards, you must fill the following information (not all the fields apply to all attribute types):
* **Name**: the name of the attribute (needs to be unique inside the entity);
* **Description**: the textual explanation of the attribute's purpose (can be used as development documentation);
* **Type**: the attribute's data type. Possible values depend on whether we are in a Primitive, a Reference or a Collection;
* **Is required?**: indicates if the attribute is required or not (not applicable to _Commitments_ or _Events_);
* **Is read only?**: indicates if the attribute's value can be changed by the user's input (not applicable to _Commitments_ or _Events_);
* **Is a list of records?**: indicates whether or not this attribute will receive multiple values at once.
* **Minimum number of records**: the minimum number of records to the collection;
* **Maximum number of records**: the maximum number of records to the collection;
* **Uses data source from attribute**: in Reference fields, indicates the field used to identify what data source instance to look for the Reference in (optional).

### How to set an attribute as required?
In the attributes list, select the attribute you want to change and check the ***Is required?*** property.

### How to set an attribute as read only?
In the attributes list, select the attribute you want to change and check the ***Is read only?*** property.

### How to remove an attribute?
Picking the attribute you want to remove, select the option **Delete** and confirm your option in the confirmation window.

## 4. Behaviours
__*Entity / Behaviours*__

In order to extend your application you can add new behaviours to your entities.

Click [here](omnia3_modeler_behaviours.html), to know more about behaviours.

### How to add a new behaviour?
Selecting the option **Add new** you need to choose the behaviour's type you want to add. After that, you need to fill the following information:

* **Code**: the code of the behaviour (needs to be unique inside the entity);
* **Description**: the textual explanation of the behaviour (can be used as development documentation);
* **Attribute**: in a formula behaviour represents the calculated attribute and in an action behaviour the attribute which triggers the behaviour (the remaining behaviour types doesn't have this property);
* **Code**: the _C#_ code to execute;

### What is an Accelerator?
 
The accelerator feature is a simple yet powerful tool that enables you to easily generate code for a multitude of actions. There are, currently, three entity behaviour accelerators available:
 
   **1. Get Entity**
   This accelerator allows you to connect pre-existing attributes in a very simple manner, bridging the gap between them and allowing you assign an entity value to a different attribute, regardless of its context.
   Example: Get the UnitPrice of a Product (Resource) and output it to a purchase order document element.

   **2. Execute Query**
   This accelerator was built to enable you to execute queries and manipulate its output data in a different context that its initial.
   Example: Get all available products of a specific supplier, filter them by price range, and output that information directly on a document.

   **3. Execute Application Behaviour**
   With this accelerator, you'll be able to easily execute Application Behaviours and its output data, regardless of context.
   Example: You have an Application Behaviour that calculates currency rates, based on online values. Call and execute that behaviour from any entity. 

### How to edit the execution code of a behaviour?
In the behaviours list, select the behaviour you want to change and, in the code editor, write the new code you want to execute.

### How to remove a behaviour?
Picking the behaviour you want to remove, select the option _Delete_ and confirm your option in the confirmation window.

## 5. User Interface
__*Entity / User Interface*__

In **OMNIA Platform** you can customize how the fields are shown in the form to create or edit of your entity.

Automatically, the platform adds and removes user interface elements when a new attribute is added or an existing one is deleted from an entity.

The form layout is organized with _Rows_ and _Columns_. Each row is divided horizontally in 12 columns.

### How to add a new element?
By selecting the option _Add new element_ you will be able to add new elements to the layout, after filling the following information:

* **Name**: the entity attribute this element will represent in the layout (will allow you to read and write in this attribute);
* **Label**: the caption of the element;
* **Help text**: the detailed description of the element;
* **Row**: the layout row in which the element will be placed;
* **Column**: the layout column in which the element will be placed;
* **Size**: the size of the element on a scale of 1 (the smaller size) to 12 (the bigger size);
* **Is the element hidden?**: the visibility of the element (hidden or visible);
* **Minimal visible screen size**: the visibility of the element, related to the user's device screen size (at sizes smaller than the one selected, the element will be hidden);

### How to add a new container element?
By selecting the option _Add new container_ you will be able to add new containers to your layout, after filling the following information:

* **Name**: the element's unique identifier attribute;
* **Label**: the caption of the element;
* **Help text**: the detailed description of the element;
* **Row**: the layout row in which the element will be placed;
* **Column**: the layout column in which the element will be placed;
* **Size**: the size of the element on a scale of 1 (the smaller size) to 12 (the bigger size);
* **Is the element hidden?**: the visibility of the element (hidden or visible);
* **Minimal visible screen size**: the visibility of the element, related to the user's device screen size (at sizes smaller than the one selected, the element will be hidden);

### How to add a new calendar element?
By selecting the option _Add new calendar_ you will be able to add new calendars to your layout, after filling the following information:

* **Name**: the element's unique identifier attribute;
* **Mapping**: the element, of type colection, that will be used as a data source;
(In case of a single date event, use the Date Mapping option, if you require a date interval, use Start and Finish Date Mapping instead)
* **Date Mapping**: the coleciton element that will represent the calendar's event date;
* **Start Date Mapping**: start date of the date mapping;
* **Finish Date Mapping**: end date of the date mapping;
* **Title Mapping**: the element that will be used to define the title property;
* **Category Mapping**: the element that will be used to define the category property;
* **Label**: the caption of the element;
* **Help text**: the detailed description of the element;
* **Row**: the layout row in which the element will be placed;
* **Column**: the layout column in which the element will be placed;
* **Size**: the size of the element on a scale of 1 (the smaller size) to 12 (the bigger size);
* **Is the element hidden?**: the visibility of the element (hidden or visible);
* **Minimal visible screen size**: the visibility of the element, related to the user's device screen size (at sizes smaller than the one selected, the element will be hidden);


### How to change the positioning of an element?
In the User Interface tab, select the element you want to change and, in the _Row_ and/or _Column_ fields, set the new positioning values.

### How to change the size of an element?
In the User Interface tab, select the element you want to change and, in the _Size_ field, select the new size.

### How to remove an element?
Picking the element you want to remove, select the option _Delete_ and confirm your option in the confirmation window.

## 6. User Interface Behaviours
__*Entity / User Interface Behaviours*__

In order to extend your application user interface you can add new behaviours to your entities' user interface.

Click [here](omnia3_modeler_uibehaviours.html), to know more about user interface behaviours.

### How to hide an element?

In this sample, base element *_code* is set as hidden:

```JavaScript
    this._metadata.elements._code.isHidden = true;
```

### How make an element read-only?

In this sample, base element *_code* is set as read only:

```JavaScript
    this._metadata.elements._code.attributes.isReadOnly = true;
```

### How to change the size of an element?

In this sample, custom element *supplier* size is changed:

```JavaScript
    this._metadata.elements.supplier.size = 1;
```

### How to set an element value?

In this sample, custom element *supplier* value is changed:

```JavaScript
    this.supplier = "S001";
```

### How to add or remove a message?

In this sample, is removed and added (based on a condition) a message to the base element *_code*:

```JavaScript
    this._metadata.elements._code.removeMessage('validation');
    if(this._code === '')
        this._metadata.elements._code.addMessage('My error message', 'error', 'validation');
    else
        this._metadata.elements._code.addMessage('My success message', 'success', 'validation');
```

### How to manage the state of the add and remove options in an editable list?

In this sample, the options to remove or add records of custom element *collection* are changed based on a condition:

```JavaScript
    // Disable options
    this._metadata.elements.collection.attributes.addEntry = "disabled";
    this._metadata.elements.collection.attributes.removeEntry = "disabled";
    
    // Hide options
    this._metadata.elements.collection.attributes.addEntry = "hidden";
    this._metadata.elements.collection.attributes.removeEntry = "hidden";
        
    // Enable and show options
    this._metadata.elements.collection.attributes.addEntry = "enabled";
    this._metadata.elements.collection.attributes.removeEntry = "enabled";
```

### How to move an element to the details area of a grid?

This feature only applies to the inner elements of a collection element.
In this sample, the element *notes* (which is an inner element of *collection*) is placed in the details area:

```JavaScript
    this._metadata.elements.collection.elements.notes.attributes.isDetails = true;
```

### How to redirect to another application page?

In this sample, the user will be redirected to another page of the application, using an existing function of the Form/Dashboard *context*:

```JavaScript
    // The application will be redirected to the dashboard of the entity Employee
    this._context.redirectToApplicationAddress('Employee');
```

### How to have asynchronous behaviours?

In this sample, the behaviour returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), that will allow the behaviour to execute asynchronously:

```JavaScript
    return new Promise(
        (resolve) => {
            // your code here
            resolve();
        }
    );
```
### **Shared Attributes**
### How to change the shared attribute's lookup list?

In this sample, the lookup list of the attribute *employee* is changed to a custom list:

```JavaScript
    this._metadata.elements.employee.attributes.list = 'MyCustomEmployeeList';
```

### How to filter a shared attribute's lookup list?

In this sample, the lookup list of the attribute *employee* is filtered using the data (in the case, the value of *company*) of the current entity:

```JavaScript
    this._metadata.elements.employee.attributes.listParameters = {
        company: this.company
    };
```

### **Calendar**
### How to execute an action when the view is changed?

In this sample, a function is added to the calendar metadata, in order to be executed every time the calendar's view is changed:

```JavaScript
    this._metadata.elements.calendar.onDataRangeChange = (startDate, finishDate, view) => {
        // your code here
    }
```

### How to set the categories of a calendar?
To each category is possible to define the name (used as the unique identifier), a title and a color. Is also possible to set the category as inactive by default.

In this sample, the categories of the element *calendar* are setted:

```JavaScript
    this._metadata.elements.calendar.attributes.categories = [
        { name: 'Category01', title: 'Le 1st category', color: '#d90dea', startAsInactive: true },
        { name: 'A', title: 'Le "A" category', color: '#259fb4', startAsInactive: false }
    ]
```

### How to execute an action when a category is toggled?

In this sample, a function is added to the calendar metadata, in order to be executed every time a category is activated or deactivated:

```JavaScript
    this._metadata.elements.calendar.onCategoryToggle = (category, isActive) => {
        // your code here
    }
```
