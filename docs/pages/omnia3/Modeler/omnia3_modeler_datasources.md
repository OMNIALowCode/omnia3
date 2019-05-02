---
title: Data Sources and Data Behaviours
keywords: omnia3
summary: "How to create custom data sources and use them"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_datasources.html
folder: omnia3
---


## 1. Introduction

The **OMNIA Platform** can use and combine information from different places - for example, obtaining data from an ERP or CRM, or an external API. The way to model this is through **Data Sources**. A Data Source is an entity similar to the others, but it has three additional properties:
- **Behaviour runtime**: Where the [entity's behaviours](omnia3_modeler_behaviours.html) execute. **Internal** means they execute inside the platform, and **External** means they execute on the [connector](omnia3_connector_introduction.html).
- **Data Access runtime**: Where the _data behaviours_ execute, i.e., where the Create, Read, Update and Delete (CRUD) operations execute. **Internal** means they are executed inside the platform and their information is stored on its database, and **External** means they are written by users and execute either on the connector or the platform, depending on the Behaviour runtime and the next option.
- **Will be executed in a connector?**: Whether the behaviours execute on a connector or not. Automatically calculated for most cases, but if your **Behaviours** are internal to the platform and the **Data Access** is external, you may or may not want to execute behaviours on a connector.

## 2. Types of Data Behaviours

There are five different data behaviours:
- **Create**: Code executed when a creation request is sent. Receives a Data Transfer Object (DTO) with the structure of the object to be created, and returns the same DTO.
- **Read**: Obtains an entity's data, in DTO format.
- **ReadList**: Returns a tuple containing the total amount of records for that entity and a Dictionary containing the results of a query on that entity (for example, the second page, with page size 25, of all Articles whose code begins with A00).
- **Update**: Updates an entity, given a DTO. Returns a DTO.
- **Delete**: Deletes an entity, given its identifier.

## 3. Referencing external libraries in Behaviours

The way to use references to .NET assemblies is explained in a [separate article](omnia3_modeler_dependencies.html), as it is shared for both Entity and Data Behaviours.

## 4. Using Application Behaviours

Application behaviours are explained in [the entity behaviours's](omnia3_modeler_behaviours.html) documentation. Their usage is the same in Data behaviours.

## 5. Developing and testing behaviours

The way to develop and test behaviours is explained in a [separate article](omnia3_modeler_developingbehaviours.html), as it is shared for both Entity and Data Behaviours.