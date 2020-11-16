---
title: CLI Setup
keywords: omnia3
summary: "How to configure Omnia-CLI to use for local development"
sidebar: omnia3_sidebar
permalink: omnia3_clisetup.html
folder: omnia3
toc: false
---

## 1. Introduction

When behaviours are developed locally, they must be synchronized with Omnia model, using Omnia-CLI.

Omnia-CLI is a command line interface that simplifies the interaction with Omnia API when downloading, uploading and syncronizing models.

Omnia-CLI is already installed on Development container, but it can also be installed on local machines.

## 2. Install

Installation process is described [here](https://github.com/OMNIALowCode/omnia-cli#installation)

To use Omnia-CLI for syncronizing behaviours code with a tenant, a new [Api Client](omnia3_management_introduction.html#4-api-clients) must be created and associated to a tenant.

## 3. Setup

To configure the CLI to communicate with a subscription open a command line and execute the following command:

```
    omnia-cli subscriptions add --name [Name] --endpoint [Endpoint] --client-id [ApiClientId] --client-secret [ApiClientSecret]
```


**Parameters:**

| Parameter | Description |
|-------|--------|
| Name | An unique identifier for the subscription |
| Endpoint | The Omnia subscription endpoint. If interacting with a local installation, insert http://host.docker.internal:5000 |
| ApiClientId | The Api Client Id |
| ApiClientSecret | The Api Client Secret |

**Example:**

```
    omnia-cli subscriptions add --name local --endpoint http://host.docker.internal:5000 --client-id myclientid --client-secret myclientsecret
```