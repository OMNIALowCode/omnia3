---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 QMLQueryTable"
sidebar: omnia3_sidebar
permalink: omnia3_languages_QMLQueryTable.html
folder: omnia3
---

# QueryTable
Table to query.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Definition | Text | None | 1..* | Name of the Entity Definition. |
| Alias | Text | None | 0..* | Alias to the table selected. |
| Properties | QueryProperty | Composite | 0..2147483647 | Properties of the Table. |
| OrderedProperties | QueryOrderedProperty | Composite | 0..2147483647 | Properties to order. |
| Filter | QueryFilter | Composite | 0..* | Condition to apply. |


