---
title: OMNIA 3
keywords: omnia3
summary: "OMNIA 3 SMLAuthorizationRole"
sidebar: omnia3_sidebar
permalink: omnia3_languages_SMLAuthorizationRole.html
folder: omnia3
---

# AuthorizationRole
Authorization Role.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the role (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the entities’ purpose. |
| Subjects | AuthorizationRoleSubject | Composite | 0..* | List of subjects (users) that have the role assigned. |


