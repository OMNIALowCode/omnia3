---
title: API Clients
keywords: omnia3
summary: "How to manage API Clients"
sidebar: omnia3_sidebar
permalink: omnia3_management_api_clients.html
folder: omnia3
---

## 1. Introduction

The API of the OMNIA Platform can be consumed by external applications. This can be done in the following ways:

- **API Client** - The external app acts as its own user (e.g. you want to develop an app that automatically fetches data from the OMNIA Platform).
- **Web App Client** - The external app allows OMNIA users to authenticate themselves and it consumes the API in the name of the authenticated user (e.g. you want to develop a mobile app so that users can interact with the OMNIA Platform).

To do so, it is required to register an **Api Client**, to interact with our security mechanism (using OAuth).

By accessing **API Clients**, you will have access to the API Clients management screen.

Here you can **Add new** Client and select the Type of the Client (i.e. API or Web App).

### 2. API Clients
To create an API Client it is necessary to identifying its Name.

Upon creating a client, the *Client ID* and *Client Secret* are automatically created.

### 2.1. Get the API Client credentials
After creating a new API Client, the **Client ID** and **Client Secret** will be shown to you. Save these values, mainly the *Client Secret*, since will not be possible to consult it again.

In the **API Clients** list, selecting one of the records will open a new window containing the **Client Username** and the **Client ID**. As said before, the **Client Secret** is only visible right after the API Client's creation.

### 2.2. Regenerate the Client Secret
If you need to regenerate the Client Secret for some reason (e.g. your private secret got shared publically accidentally), select one of the records in the list and, in the details window, select the option **Regenerate secret**.

This action will generate another Client Secret and, from now on, you will need to use the new Secret.

### 3. Web App Clients

An Web App Client is defined by:
* Name: Used to identiy the external application;
* Require Consent: If this option is enabled, users that authenticate themselves through the external app will be prompted (after the first sign-in) to consent and grant to the external app the permissions it needs in order to use the OMNIA Platform API on his behalf. If this option is disabled, after the users first sign-in the OMNIA Platform will automatically grant to the external app the permissions it needs;
* Redirect URIs: The list of URIs (separated by a ",") to where the OMNIA Platform should redirect the users browser after the sign-in. This is the location where the external app is prepared to recieve the access token of the authenticated user.
* Allowed CORS Origins: The list of domains (separated by a ",") from which the external app is authorized to make requests to the OMNIA Platform API;
* Post Logout Redirect URIs: The list of URIs (separated by a ",") to where the OMNIA Platform is allowed to redirect after a user signs out from the external app.

### 3.1. Get the Web App Client credentials
After creating a new Web App Client, the **Client ID** will be shown to you. Use this value to configure your external apps Open ID Connect.