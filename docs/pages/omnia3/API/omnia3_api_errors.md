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
| ResourceAlreadyExists | 409 | The specified resource already exists. |
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
| ValidationFailed | 400 | Request validation failed. |
