---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 BMLDataBehaviour"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLDataBehaviour.html
folder: omnia3
---

# DataBehaviour
Behaviour representing how the entity is stored and retrieved from a Data Source.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..* | The name of the entity (unique identifier). |
| Description | Text | None | 0..* | The textual explanation of the entities' purpose. |
| Type | DataBehaviourType | None | 1..* | The execution moment of the behaviour. |
| Expression | Text | None | 1..* | The C# code that will be executed. |


