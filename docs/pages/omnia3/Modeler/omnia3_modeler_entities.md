---
title: Modeling Entities (Structure)
keywords: omnia3
summary: "Modeling Entities (Structure)"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_entities.html
folder: omnia3
---


## 1. Introduction

In OMNIA Platform you can add your own entities, and each one is based on an OMNIA concept.

In each entity, it's possible to define the attributes, the behaviours and the user interface.

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

 * **Is a root entity?**: indicates if the entity acts only as a sub-entity;

 After creating a new entity, will be automatically generated the default **Query**, **List**, **Dashboard** and **Form**. If the entity is a **Document**, a **Serie** will be also generated.

 Each one of these automatically generated artifacts will be named using the entity's name and the artifact type (to the Entity *MyEntity*, the Query will be named *MyEntityQuery*).


## 3. Attributes
__*Entity / Attributes*__

The attributes allow you to define the structure of your entity. Each one will represent a property in the data you can read or write.

### How to add a new attribute?
Selecting the option _Add new_ you need to first select one of four types of attribute:
* **Primitive**: A primitive type such as a text field or an integer;
* **Enumeration**: An enumerated type of the model;
* **Reference**: A reference to another entity on the platform;
* **Collection**: Another entity that will act as a 'sub-entity' of this one. Must be of a compatible type: Events or Commitments in a Document, and Generic Entities (only those marked as non-root) in any entity type.

Afterwards, you must fill the following information (not all the fields apply to all attribute types):
* **Name**: the name of the attribute (needs to be unique inside the entity);
* **Description**: the textual explanation of the attribute's purpose (can be used as development documentation);
* **Type**: the attribute's data type. Possible values depend on whether we are in a Primitive, an Enumeration, a Reference or a Collection;
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

![Accelerator_GetEntity](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/modeler/accelerator.png)

 * **Get Entity**
   This accelerator allows you to connect pre-existing attributes in a very simple manner, bridging the gap between them and allowing you assign an entity value to a different attribute, regardless of its context.
   
   Example: Get the UnitPrice of a Product (Resource) and output it to a purchase order document element.

  * **Execute Query**
   This accelerator was built to enable you to execute queries and manipulate its output data in a different context that its initial.
   Example: Get all available products of a specific supplier, filter them by price range, and output that information directly on a document.

  * **Execute Application Behaviour**
   With this accelerator, you'll be able to easily execute Application Behaviours and its output data, regardless of context.
   Example: You have an Application Behaviour that calculates currency rates, based on online values. Call and execute that behaviour from any entity. 

### How to edit the execution code of a behaviour?
In the behaviours list, select the behaviour you want to change and, in the code editor, write the new code you want to execute.

### How to remove a behaviour?
Picking the behaviour you want to remove, select the option _Delete_ and confirm your option in the confirmation window.

## 5. Security
To ensure the data access security, the platform's runtime will evaluate the current user's permissions to the entity (using the configured Roles and Policies).

If the user is trying to obtain the data of one record (either to consult the data or to edit the record), the platform's runtime will evaluate through the default Query if the user has access to the corresponding record.

To ensure the security mechanism works properly, the following rules should be guaranteed:
* The default Query exists (is created automatically, shouldn't be removed);
* The default query has the **_code** property (is created automatically, shouldn't be removed).
