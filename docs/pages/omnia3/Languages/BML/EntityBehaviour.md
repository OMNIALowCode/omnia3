---
title: OMNIA 3
keywords: omnia3
summary: "OMNIA 3 BMLEntityBehaviour"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLEntityBehaviour.html
folder: omnia3
---

# EntityBehaviour
Behaviour representing how the entity behaves in a specific moment and is expressed in C#.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the entity (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the entities' purpose. |
| Attribute | Text | None | 0..1 | The attribute the behaviour is related to. |
| Type | EntityBehaviourType | None | 1..1 | The execution moment of the behaviour. |
| Expression | Text | None | 1..1 | The C# code that will be executed. |


