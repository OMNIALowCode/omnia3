---
title: API Error Codes
keywords: omnia3, api
summary: "OMNIA Platform's API error codes list"
sidebar: omnia3_sidebar
permalink: omnia3_api_errors.html
folder: omnia3
---

The following errors may be returned by the operations of the OMNIA Platform's API.

| Error code | HTTP status code | Error message |
| ---------|------------|------------|
| BehaviourFailed | 400 | Behaviour execution failed. |
| ConnectorBehaviourFailed | 400 | Behaviour execution failed while running in Connector. |
| ConnectorNotFound | 503 | Connector can't be reached. |
| ConnectorTimeout | 503 | Connector didn't respond in the expected time. |
| EntityAlreadyExists | 409 | An entity with the same identifier already exists. |
| EntityHasBeenChanged | 412 | The entity isn't in the expected version. |
| EntityHasNoSensitiveDataToDestroy | 400 | Can't execute the Destroy Sensitive Data operation because there's no Sensitive attributes. |
| EntityNotFound | 404 | Entity can't be found. |
| InternalError | 500 | Internal system error. |
| InvalidInput | 400 | Invalid request input data. |
| TenantNotFound | 404 | Tenant/Environment can't be found. |
| ValidationFailed | 400 | Request validation failed. This error can have details in the "errors" properties. Error descriptions in the section "Validation Failed - Errors" |



### Validation Failed - Errors

| Error code | Error message |
| ---------|------------|
| CannotBeRemoved | Entity can't be removed. |
| Duplicated | Duplicated element. |
| InvalidIdentifier | Identifier (code or name) with invalid format. |
| LowerLimitNotRespected | Minimal number of elements in collection not respected. |
| NotFound | Entity/Reference cannot be found. |
| RequiredValue | Attribute value is required. |
| TypeMismatch | Attribute value doesn't match the attribute type. |
| UpperLimitNotRespected | Maximum number of elements in collection not respected. |
| CreateRootUnsupported | Cannot create an instance separately, as it is marked as non-root and must be used in the context of another entity. |
| CreateSystemDataSourceUnsupported | It's not possible to add records to 'System' Data Source. |
| ValueCannotBeChanged | Attribute value cannot be changed. |
| InvalidModelConfiguration | Invalid model definition. |
| InvalidTenantConfiguration | Invalid tenant definition. |

