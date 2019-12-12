---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 BMLStateBehaviour"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLStateBehaviour.html
folder: omnia3
---

# StateBehaviour
Behaviour representing how the entity should behave during a state change.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the entity (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the entities' purpose. |
| Type | StateBehaviourTypeEnum | None | 1..1 | The execution moment of the behaviour. |
| Expression | Text | None | 1..1 | The C# code that will be executed. |


