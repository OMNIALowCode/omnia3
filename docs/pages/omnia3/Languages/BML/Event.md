---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 BMLEvent"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLEvent.html
folder: omnia3
---

# Event
Transaction of resources between two agents, one in the role of supplier and the other as recipient.
## Properties
Name | Type | Aggregation Kind | Multiplicity | Description
--------- | --------- | --------- | --------- | ---------
Name | Text | None | 1..* | The name of the entity (unique identifier).
Description | Text | None | 0..* | The textual explanation of the entities' purpose.
Attributes | Attribute | Composite | 0..2147483647 | A collection of entries that allows to define entity' structure.
EntityBehaviours | EntityBehaviour | Composite | 0..2147483647 | A collection of entries representing how the entity behaves.
DataBehaviours | DataBehaviour | Composite | 0..2147483647 | A collection of entries representing how the entity' data is stored and retrieved.
BehaviourNamespaces | BehaviourNamespace | Composite | 0..2147483647 | A collection of entries representing the coding namespaces to be included (as usings) on code generated with your data and entity behaviours.
DataSource | DataSource | Shared | 1..* | The Data Source in which the entities are computed and/or persisted.
## Operations
Name | Type | Description
--------- | --------- | ---------
Defaults | Initialize | 
DefaultsFinalize | BeforeSave | 

