---
title: Management
keywords: omnia3
summary: "Summary of the Management area of the platform"
sidebar: omnia3_sidebar
permalink: omnia3_management_introduction.html
folder: omnia3
---


## 1. Introduction

The Management area of the platform is where administrative tasks are performed, such as tenant and security management.

## 2. Tenant Management

A Tenant is the primary organizational level of the platform. You can think of a tenant as an instance of an application for a given company - for example, you might have an AnalogSound_ExpensesManagement and an AnalogSound_Purchases tenant, to separate those two applications. You could also have a CompanyB_ExpensesManagement tenant that represents the same application, but for a different company.

Tenants may be categorized as **production**, in which case they require fiscal information.

By accessing **_Tenants_** in the sidebar, you will have access to the tenant management screen.

Here you can **Add new** tenants, identifying their **Code** (shown in URLs), a human-readable **Name**, and their production information.

Upon creating a tenant, some security information will automatically be created:
- An Administration[TenantCode] role, with your current user added to it;
- A Tenant[TenantCode] policy, with a default permission of "ALL"; with the previous role associated.
- Inside the tenant, the default application roles and policies.

## 3. Roles and Policies

In the management section, it is possible to configure Roles and Policies. For more details on these, please see [the description of how authorization works](omnia3_authorization.html), as well as [the language definitions](omnia3_languages_sml.html).

For users to be able to perform administration operations on a given tenant, they must be in the automatically created Administration[TenantCode] role.

## 4. Connectors
To allow to establish a communication between the OMNIA Platform and a system in another machine, it is required to register a **Connector**.

By accessing **Connectors**, you will have access to the Connectors management screen.

Here you can **Add new** connectors, identifying their Code and Name.

Upon creating a connector, a new API Client and a new User for the connector will be automatically created.

### 4.1. Get the Connector's username
In the **Connectors** list, selecting one of the records will open a new window containing the **Client Username**.

### 4.2. Get the API Client credentials
In the **Connectors** list, selecting one of the records will open a new window containing the required credentials to accessing the OMNIA API: the **Client ID** and the **Client Secret**.