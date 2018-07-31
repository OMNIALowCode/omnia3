---
title: Behaviours
keywords: omnia3
summary: "Behaviours"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_behaviours.html
folder: omnia3
---


## 1. Introduction

In the **OMNIA Platform**, the primary way to customize the way the application works is by using Behaviours. 

Behaviours are code that allow you to **extend** the way the application processes user input.

There are three kinds of business logic behaviours, that are applied at an API level (i.e. whether you use the OMNIA platform directly via its API or via our web app), all written in C#: 
- **entity behaviours**, which extend the behaviour of the instances of that entity (for example, default values or specific validations); 
- **data behaviours**, which only exist for entities with an external data source, and replace the platform's create/read/update/delete (CRUD) code with user-written code to perform those operations on the external data source;
- **application behaviours**, which are similar to methods in object-oriented programming, and are used in the other behaviours. 

This document explains the Entity behaviours (here normally mentioned as 'behaviours' only) and application behaviours; for more information on data behaviours please see [this page](omnia3_modeler_datasources.html).

There are also user interface-specific behaviours, which have a similar logic to C# behaviours. They are written in JavaScript, and are described in [this page](omnia3_modeler_uibehaviours.html).

 A behaviour is defined by:
- its **type**, or the moment in which it will execute;
- (optionally) its **attribute**, or which attribute of the model it is dependent on;
- its **expression**, the aforementioned C# code.

Behaviours are executed by the API of the platform - creating, updating or saving an entity will execute the appropriate behaviours.

![The behaviours' execution path](images\modeler\BehavioursCommunication.png)

During the behaviour lifecycle, the platform stores the current state of the document in a cache, allowing for fast response times.

## 2. Types of Behaviours

There are currently five different execution moments for behaviours, which follow a logical flow:
- **Initialize**: Executes when an entity is created;
- **Before Change**: Executes immediately before an update is received for that entity;
- **Formula**: Executes during updates, requires an attribute, and **calculates** the value of that attribute. Must return a value of the correct type;
- **Action**: Executes during updates, requires an attribute, and, given the new and old values of that attribute, performs an operation;
- **After Change**: Executes immediately after the update with the user's changes is done;
- **Before Save**: Executes when an entity is saved.

Other than these, there is a special entity behaviour that executes afterwards:
- **After Save**: Executes after an entity is saved, asynchronously, by being put in an **outbox** and processed separately. 

    After Save behaviours are _async_, and have a custom return type, which will be used like:
    ```csharp
    return new AfterSaveMessage("Integration was successful, but could not send email to all users. Please check if their emails are valid.", AfterSaveMessageType.Warning);
    ```

    There are two helpers in AfterSaveMessage, .Empty and .Default, which you should use when you aren't interested in the contents of the message. Empty shows no notification; default shows a success notification/operation.
    
    Valid AfterSaveMessageTypes are **Information**, **Success**, **Warning**, **Error** and **SuccessNoNotification**. Error will mark the after save as having failed, SuccessNoNotification sends no notification to the end-user, while the other three are used only to customize the look of the notification they send.
    
    **Note**: After Save behaviours are not called immediately after saving, but go into a queue. More information [here](omnia3_application_notifications_and_operations.html). _**No changes to the status of the entity will be saved! If you want to change an entity on an After Save, you must do it via our API.**_

![The behaviour execution lifecycle](images\modeler\BehaviourLifecycle.png)

## 3. Usage

There are many possible usage scenarios for these behaviours, as C# coding will allow you to execute whatever you want. This section gives some guiding examples.

### 3.1. Usage of the behaviours in the platform languages

Internally, in the development of the platform, these behaviours are used with the same structure. For example, when you create an Agent, you will see that, even though you didn't specify any attributes, a set of default attributes are present. This creation is handled by an **Initialize** behaviour. They also can't be deleted; this is ensured by having a **Before Save** behaviour that ensures that an exception is thrown if the user attempts to remove any _system_ attribute.

A similar **Initialize** logic is used to ensure default values in documents: for example, the initial date is set to today's date instead of 01/01/0001, the C# default for that date.

### 3.2. Usage Scenarios

Following from the scenarios described in 3.1., you may have realized some possible scenarios that behaviours can help in. Our [tutorials](omnia3_beginnertutorial.html) also have a series of different examples. 

Here are some usage suggestions for each type of behaviour - though, of course, the only limit is your imagination!

- **Initialize**: 
    - Default values for fields;
- **Before Change**: 
    - Performing operations that depend on the previous state of the document; 
- **Formula**: 
    - Summary/total fields;
    - Auxiliary fields (i.e. displaying an amount of days based on two dates);
- **Action**: 
    - Looking up data from an external API;
    - Changing information in the lines of a grid based on a change in the header;
    - Performing validations on an attribute;
- **After Change**: 
    - Performing calculations that require information from commitments/events in the header;
    - Performing document-wide validations;
    - Calculating summary lines;
- **Before Save**:
    - Performing final document-wide validations;
    - Integrating with external APIs;
- **After Save**:
    - Performing integrations with external systems that depend on the OMNIA-side document already being saved.
    - Triggering e-mail notifications.

 Keep in mind that all Omnia entities are independent, and therefore an entity behaviour should not depend on another entity. 
 As an example, a Commitment behaviour code should not be dependent of a specific Document, because a Commitment can be available on more than one Document. On these scenarios, the behaviour should be defined on the Document.

## 4. Referencing external libraries in Behaviours

The way to use references to .NET assemblies is explained in a [separate article](omnia3_modeler_references.html), as it is shared for both Entity and Data Behaviours.

## 5. Application Behaviours

Application behaviours are created in the Modeler's **Extensibility** area. Their main difference compared to the other behaviours is that they are available on a per-data source basis; i.e. instead of picking an Attribute and Type, you define the data source where it will be available.

Every system that has application behaviours will have them under the base namespace of that tenant, for example, ``` Omnia.Behaviours.Tenant001.v1_0_5.Application```, with a partial class logic: every application behaviour is in its own file, but they are all in the same class. If you want to use an application behaviour with the code ```ValidateAPIAccess``` in the **System** data source's **Initialize** behaviour, you will do so by writing ```SystemApplicationBehaviours.ValidateAPIAccess()``` in your code.

The application behaviours are ```static```. They all receive an (optional) ```IDictionary<string,object> args```, which can be used to send any necessary information when calling them from other places, and also must return a dictionary.

## 6. Developing and testing behaviours

The way to develop and test behaviours is explained in a [separate article](omnia3_modeler_developingbehaviours.html), as it is shared for both Entity and Data Behaviours.
