---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 SMLAuthorizationPolicy"
sidebar: omnia3_sidebar
permalink: omnia3_languages_SMLAuthorizationPolicy.html
folder: omnia3
---

# AuthorizationPolicy
Authorization Policy is a group of Permissions for that are required in a given context.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the policy (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the policy purpose. |
| Permissions | AuthorizationPolicyPermission | Composite | 0..* | List of permissions. |
| Policies | AuthorizationPolicy | Composite | 0..* | Child authorization policies. |


