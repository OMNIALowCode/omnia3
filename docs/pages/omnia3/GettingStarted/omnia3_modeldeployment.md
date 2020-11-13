---
title: Model Deployment
keywords: omnia3
summary: "How to manage models between a local environment and a cloud installation"
sidebar: omnia3_sidebar
permalink: omnia3_modeldeployment.html
folder: omnia3
toc: false
---

## 1. Introduction

When using a local environment to develop Omnia behaviours, it is suggested to use Omnia-CLI to download the model to a development environment and upload to another environment (local or cloud).

## 2. Download a model

Download model behaviours to a local environment using the following command:

```
    omnia-cli model export --subscription [Subscription] --tenant [Tenant] --environment [Environment] --path [Path]
```

**Parameters**

| Parameter | Description |
|-------|--------|
| Subscription | The name of the configured subscription |
| Tenant | The code of the tenant to be downloaded |
| Environment | (Optional) The tenant environment. If not inserted, PRD is assumed |
| Path | (Optional) The path where the model will be downloaded to. If not inserted, the current path is assumed |

**Example:**

```
    omnia-cli model export --subscription local --tenant mytenant --environment PRD 
```



## 3. Upload a model

Upload a model *.zip* file to an environment (local or cloud) using the following command:

```
    omnia-cli model import --subscription [Subscription] --tenant [Tenant] --environment [Environment] --path [Path] --build
```

If *--build* parameter is included, the model will be built after the upload.

**Parameters**

| Parameter | Description |
|-------|--------|
| Subscription | The name of the configured subscription |
| Tenant | The code of the tenant to be updated |
| Environment | (Optional) The tenant environment. If not inserted, PRD is assumed |
| Path | (Optional) The path of the model behaviours code. If not inserted, the current path is assumed |

**Example:**

```
    omnia-cli model import --subscription local --tenant mytenant --environment PRD --path ../Behaviours/Internal/System --build 
```