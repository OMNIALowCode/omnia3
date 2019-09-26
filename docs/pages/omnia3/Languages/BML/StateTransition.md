---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 BMLStateTransition"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLStateTransition.html
folder: omnia3
---

# StateTransition
Possible transition between two states in a State Machine.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the entity (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the entities' purpose. |
| Order | Integer | None | 1..1 | The evaluation order of transitions. |
| To | State | Shared | 1..1 | Target state when the transition happens. |
| Type | StateTransitionType | None | 1..1 | Type of transition. |
| Decision | StateDecision | Shared | 0..1 | User Decision that will trigger the transition in case of decision based transitions. |
| Expression | Text | None | 0..1 | The C# code that will be executed. |


