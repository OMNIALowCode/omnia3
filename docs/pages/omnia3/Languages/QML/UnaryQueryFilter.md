---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 QMLUnaryQueryFilter"
sidebar: omnia3_sidebar
permalink: omnia3_languages_QMLUnaryQueryFilter.html
folder: omnia3
---

# UnaryQueryFilter
Filter condition that compares a given value with a parameter.
## Properties
Name | Type | Aggregation Kind | Multiplicity | Description
--------- | --------- | --------- | --------- | ---------
Path | Text | None | 1..* | Path to the property to filter.
Operator | QueryComparisonOperator | None | 1..* | Comparison operator to apply to the condition.
Parameter | QueryFilterParameter | Composite | 1..* | Parameter to receive the value to filter by.

