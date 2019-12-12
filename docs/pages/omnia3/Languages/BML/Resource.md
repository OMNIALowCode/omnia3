---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 BMLResource"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLResource.html
folder: omnia3
---

# Resource
Entity representing assets that can be quantified and with commercial value. Is held by the Agents, who exchange them in financial transactions.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the entity (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the entities' purpose. |
| Attributes | Attribute | Composite | 0..* | A collection of entries that allows to define entity' structure. |
| EntityBehaviours | EntityBehaviour | Composite | 0..* | A collection of entries representing how the entity behaves. |
| DataBehaviours | DataBehaviour | Composite | 0..* | A collection of entries representing how the entity' data is stored and retrieved. |
| BehaviourNamespaces | BehaviourNamespace | Composite | 0..* | A collection of entries representing the coding namespaces to be included (as usings) on code generated with your data and entity behaviours. |
| DataSource | DataSource | Shared | 1..1 | The Data Source in which the entities are computed and/or persisted. |

## Operations

| Name | Type | Description |
| --------- | --------- | --------- |
| Defaults | Initialize |  |
| DefaultsFinalize | BeforeSave |  |

