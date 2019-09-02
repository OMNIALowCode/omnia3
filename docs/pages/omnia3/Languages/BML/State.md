---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 BMLState"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLState.html
folder: omnia3
---

# State
Definition of an entity possible state.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the entity (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the entities' purpose. |
| IsInitial | Boolean | None | 1..1 |  |
| DisableOperations | Boolean | None | 1..1 |  |
| DisableAttributes | Boolean | None | 1..1 |  |
| AssignToExpression | Text | None | 0..1 |  |
| Transitions | StateTransition | Composite | 0..* |  |
| Decisions | StateDecision | Composite | 0..* |  |
| EnabledOperations | StateEnabledOperation | Composite | 0..* |  |
| EnabledAttributes | StateEnabledAttribute | Composite | 0..* |  |
| Behaviours | StateBehaviour | Composite | 0..* |  |


