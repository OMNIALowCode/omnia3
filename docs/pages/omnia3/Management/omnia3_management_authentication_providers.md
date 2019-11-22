---
title: Authentication Providers
keywords: omnia3
summary: "How to manage Authentication Providers"
sidebar: omnia3_sidebar
permalink: omnia3_management_authentication_providers.html
folder: omnia3
---


## 1. Introduction

OMNIA let's configure multiple authentication providers, allowing you to deliver a better authentication experience to the end-users.

This feature enables you to provide a single sign-on experience in organizations with AD FS and Authorization with external authorization providers like Google or Microsoft.


## 2. Manage Authentication Providers

By accessing **_Authentication Providers_** in the sidebar, you will have access to the Authentication Providers management screen.

Here you can **Add new** Authentication Provider and select the Type of the Provider.

An Authentication Provider is defined by:
* Name: The unique identifier of the Authentication Provider;
* Label: The label that will be presented to the user when logging in;
* Order: Authentication Providers will be sorted by this order;

After you create or update a new Authentication Provider, you will be advised to **Restart the System, so these changes can take place.**


## 3. Types

The following services are supported:

### 3.1 OpenID Connect

OpenID Connect is a simple identity layer on top of the OAuth 2.0 protocol, which allows computing clients to verify the identity of an end-user based on the authentication performed by an authorization server.

You can use OpenID Connect to integrate with any Authentication Service that supports OpenID Connect, for example:

 - Azure Active Directory (Azure AD)
 - Office 365
 - AD FS

When using OpenID Connect you will need to configure the following parameters that you get from the Authentication Service:
 - Authority
 - Client ID (App ID)
 - Client Secret (App Secret)


### 3.2 Facebook

You will need to configure an Application on Facebook and get the following parameters to configure in OMNIA:
 - Client ID (App ID)
 - Client Secret (App Secret)

The Redirect UI to configure: `"[YOUR OMNIA URL]/identity/signin-facebook"`

You can find useful information here:

 - https://docs.microsoft.com/en-us/azure/app-service/configure-authentication-provider-facebook

### 3.3 GitHub

You will need to configure an Application on GitHub and get the following parameters to configure in OMNIA:
 - Client ID (App ID)
 - Client Secret (App Secret)

The Redirect UI to configure: `"[YOUR OMNIA URL]"`

You can find useful information here:

 - https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/

### 3.4 Google

You will need to configure an Application on Google and get the following parameters to configure in OMNIA:
 - Client ID (App ID)
 - Client Secret (App Secret)

The Redirect UI to configure: `"[YOUR OMNIA URL]/identity/signin-google"`

You can find useful information here:

 - https://developers.google.com/identity/sign-in/web/sign-in

### 3.5 LinkedIn

You will need to configure an Application on LinkedIn and get the following parameters to configure in OMNIA:
 - Client ID (App ID)
 - Client Secret (App Secret)

The Redirect UI to configure: `"[YOUR OMNIA URL]/identity/signin-linkedin"`

You can find useful information here:

 - https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow

### 3.6 Microsoft Account

You will need to configure an Application on Microsoft and get the following parameters to configure in OMNIA:
 - Client ID (App ID)
 - Client Secret (App Secret)

The Redirect UI to configure: `"[YOUR OMNIA URL]/identity/signin-microsoft"`

You can find useful information here:

 - https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-add-identity-providers#create-an-azure-active-directory-application

### 3.7 Twitter

You will need to configure an Application on Twitter and get the following parameters to configure in OMNIA:
 - Client ID (App ID)
 - Client Secret (App Secret)

The Redirect UI to configure: `"[YOUR OMNIA URL]/identity/signin-twitter"`

You can find useful information here:

 - https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens