---
title: OMNIA 3 Languages Introduction and MEF
keywords: omnia3
summary: "OMNIA 3 Languages Introduction and MEF"
sidebar: omnia3_sidebar
permalink: omnia3_languages_introduction.html
folder: omnia3
---


## 1. Introduction

The OMNIA platform was designed based on the theoretical principles of language design and model-driven engineering, following similar principles to the Object Management Group's standard of [Meta-Object Facility (MOF)](http://www.omg.org/mof/) and its related languages such as the [Eclipse Modeling Framework (EMF)](http://www.eclipse.org/modeling/emf/) and the [Unified Modeling Language (UML)](http://www.uml.org/).

Here we explain what the different languages that exist in the platform are, as well as introducing our analogue to MOF, the **Meta-Entity Framework (MEF)**.

## 2. Meta-Entity Framework
MEF is the type system that all the languages on the platform use. If we were to identify the different layers of an OMNIA application, we could say that the **application** itself is layer 0 (M0), the **model** of that application is layer 1 (M1), and the languages of the platform (the meta-meta model) are layer 2 (M2). MEF is a layer above those languages, M3.

![Meta-modeling structure with examples](images\languages\metamodeling.png)

An alternative way to describe MEF would be saying that it is a **Domain-Specific Language** used to define **metamodels** in OMNIA.

## 2.1. MEF Objects

This section describes extensively all of the objects of MEF.

### 2.1.1. Classifier

A **Classifier** is the base object type for all M3-level classes.

Property | Type | Cardinality | Description
---------|----------|---------|---------
 Name | Text | 1..1 | The name of the entity represented by this classifier.

### 2.1.2. Type

 A **Type** is a classifier that defines an object type. There are three different kinds of Type: Class, Enumeration and Primitive.

Property | Type | Cardinality |  Description
---------|----------|---------|---------
 Kind | Enumeration | 1..1 | The kind of this type: Class, Enumeration or Primitive.

### 2.1.2.1. Data Type

The **Data Type** is a subset of the Type. It has the same properties as it, but only contains the Enumeration and Primitive.

### 2.1.3 Class
 
 The **Class** is the object type that is most frequent in the below layers. It defines a series of Properties and Operations, which can be understood as similar to Attributes and Methods in Object-Oriented Programming (OOP) classes.

Property | Type | Cardinality |  Description
---------|----------|---------|---------
 InstanceOf | Text | 1..1 | The kind of this type: Class, Enumeration or Primitive.
 Properties | Property | 1..* | The list of all the properties of this class.
 Operations | Operation | 1..* | The list of all the operations of this class.

### 2.1.4. Enumeration

 The **Enumeration** is the object type that represents a fixed list of possible values.

Property | Type | Cardinality |  Description
---------|----------|---------|---------
 Values | Text | 1..N | List of all the possible values for the enumeration.
 
### 2.1.5. Primitive

The **Primitive** represents a _basic_ data type in our languages. It is where we define mappings between language concepts (such as _Text_) and primitive types (such as _string_) in the programming language used to implement MEF.

It has the same properties as DataType.

#### 2.1.5.1 List of Primitives
- Boolean (i.e. bool in C#)
- Date (i.e. DateTime in C#)
- Decimal (i.e. decimal in C#)
- Integer (i.e. int in C#)
- Text (i.e. string in C#)
- Uuid (i.e. Guid in C#)

### 2.1.6. Property

The **Property** is, as mentioned above, a similar concept to an Attribute in OOP, representing a strongly-typed value of a **Class**.

Property | Type | Cardinality |  Description
---------|----------|---------|---------
 Name | Text | 1..1 | Name of this property.
 Multiplicity | Multiplicity | 1..1 | Multiplicity of this property, i.e. the number of values its PropertyType will accept.
 PropertyType | Type | 1..1 | Base type of this property - whether this will be a list or not, or nullable, depends on multiplicity.
 AggregationKind | Aggregation Kind | 1..1 | Aggregation kind of this property's type.
 IsIdentifier | Boolean | 1..1 | Whether or not this property represents a _**unique**_ identifier for the Class it's in. A class must have one and only one identifier.
 IsDerived | Boolean | 1..1 | Whether or not this property is _calculated_ by an expression.
 Expression | Text | 0..1 | If the property is derived, this is the expression that calculates it.

### 2.1.6. Aggregation Kind

An Aggregation Kind is used to describe a relationship between a Class and another Class. There are three types of aggregation:
- **Composite**: The relationship is _assymetric_: if a property is Composite, it means the other class will exist only in the context of this class, as an instance.
- **Shared**: The relationship is a _reference_: we store only a copy of the **identifier** to the other class.
- **None**: A _non-aggregate_ relationship is a looser form of binding. In the context of MEF, used exclusively for references to Data Types (Enumerations and Primitives).

### 2.1.7. Multiplicity

Multiplicity refers to the upper and lower bounds on the number of values accepted for a given property. 

Property | Type | Cardinality |  Description
---------|----------|---------|---------
Lower | Integer | 1..1 | The lower bound on the number of accepted values. If **0**, this property will be **optional**.
Upper | Integer | 1..1 | The upper bound on the number of accepted values. If **> 1**, this property represents a list of values. Cannot be higher than _Lower_.

### 2.1.7. Operation

The **Operation** is, as mentioned above, analogous to a method in OOP, representing an execution of user-modeled code at a given time.

Property | Type | Cardinality |  Description
---------|----------|---------|---------
 Name | Text | 1..1 | Name of this operation.
 Event | Event | 1..1 | Event to which this operation is associated.
 Expression | Text | 1..1 | The expression that represents the _body_ of the operation.

### 2.1.8. Event

The **Event** is what identifies when an Operation will execute.

Property | Type | Cardinality |  Description
---------|----------|---------|---------
Type | Event Type | 1..1 | The type of event this event is in, i.e., when it executes.
Property | Property | 0..1 | If the event type requires a property (i.e. if happens on change of one), which property is it.

#### 2.1.8.1. Event Type
- Initialize: On creation of a class.
- BeforeChange: Before changing any property in a class.
- Change: When changing a specific property of a class.
- AfterChange: After changing any property in a class.
- Finalize: When explicitly finishing to change a class (saving).
