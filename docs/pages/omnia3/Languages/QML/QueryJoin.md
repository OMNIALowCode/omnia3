---
title: OMNIA 3
keywords: omnia3
summary: "OMNIA 3 QMLQueryJoin"
sidebar: omnia3_sidebar
permalink: omnia3_languages_QMLQueryJoin.html
folder: omnia3
---

# QueryJoin
Defines the relation between to tables.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the entity (unique identifier). |
| Table | QueryTable | Composite | 1..1 | Table with of the Definition to join with. |
| JoinType | QueryJoinType | None | 1..1 | Type of join/relation. |
| Predicate | QueryJoinPredicate | Composite | 1..1 | Relationship condition. |

## Operations

| Name | Type | Description |
| --------- | --------- | --------- |
| SetName | Initialize |  |

