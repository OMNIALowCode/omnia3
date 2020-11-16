---
title: Entity Privileges Management
keywords: omnia3
summary: "Privileges"
sidebar: omnia3_sidebar
permalink: omnia3_privilegesmanagement.html
folder: omnia3
---

## 1. Introduction

Within OMNIA, Privileges control the accessbility to the CRUD (Create, Read, Update and Delete) operations of a given entity.


### 1.1 Read

The following combination of privileges is recommended to list an entity:

- [EntityCode]Dashboard_Read:  This privilege grants viewing access to an entity's default dashboard
- [EntityCode]Query_Read: This privilege grants access to execute the default entity query. Access to other entity queries must also be granted is needed
- [EntityCode]_Read: This privilege grants reading access to the entity's data


### 1.2 Create/Update

To create or update an entity Read privileges are required alongside with:

- [EntityCode]_Write: This privilege grants access to create and update entities.


### 1.3 Delete

To delete an entity Read privileges are required alongside with:

- [EntityCode]_Delete: This privilege grants access to read the entity data


### 1.4 Destroy Sensitive Data

To destroy sensitive data of an entity Read privileges are required alongside with:

- [EntityCode]_Destroy: This privilege grants access to destroy the entities' sensitive data
