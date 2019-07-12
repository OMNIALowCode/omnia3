---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 QMLBinaryQueryFilter"
sidebar: omnia3_sidebar
permalink: omnia3_languages_QMLBinaryQueryFilter.html
folder: omnia3
---

# BinaryQueryFilter
Binary condition that is composed by two logical conditions.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Left | QueryFilter | Composite | 1..1 | Left part of the condition. |
| Operator | QueryLogicalOperator | None | 1..1 | Logical operator over the left and right condition result. |
| Right | QueryFilter | Composite | 1..1 | Right part of the condition. |


