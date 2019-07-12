---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 SMLAuthorizationPolicyPermission"
sidebar: omnia3_sidebar
permalink: omnia3_languages_SMLAuthorizationPolicyPermission.html
folder: omnia3
---

# AuthorizationPolicyPermission
Permission and the Roles that have that permission.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..* | The name of the permission (unique identifier). |
| Description | Text | None | 0..* | The textual explanation of the permission purpose. |
| Roles | Text | Shared | 0..2147483647 | List of roles that have the permission. |

