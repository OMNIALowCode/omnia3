---
title: How to use the API
keywords: omnia3, api
summary: "How to use the OMNIA Platform's API, using Swagger"
sidebar: omnia3_sidebar
permalink: omnia3_api_swagger.html
folder: omnia3
---

## 1. Introduction
In the third release of the OMNIA Platform, the API and its usage were two of our main concerns. This version provides a clear API that has all of the functionality and doesn't require the clients to implement logic.

The OMNIA API was implemented together respecting the [OpenAPI Specification](https://swagger.io/specification/). This means that, with the use of OpenAPI file generated with [Swagger](https://swagger.io/docs/specification/about/), it is possible to:
- Generate API clients for whichever languages users want to use to develop software that requires our API;
- Generate interactive documentation automatically, using Swagger UI.

## 2. Using Swagger UI

By accessing the Swagger UI page hosted at /api/docs/ (i.e. if your subscription of the platform is installed at omnia.example.com, omnia.example.com/api/docs/), you will see all of the possible options for interacting with the platform via the API.

We are actively working on enriching this API documentation with more and  better examples of the information to be sent in different scenarios.

Usage guidelines:
- Authorization is required to access almost every method in our API. Swagger UI provides an Authorize button that allows you to perform an authorization operation.
- To use a method, after selecting it and seeing the documentation, you can click the **Try it out** button and Swagger will open a series of fields you can type your information into, and an **Execute** button.
- All updates to existing resources use the HTTP PATCH method and implement the [JSONPatch](http://jsonpatch.com/) standard.

  In order to calculate the patch between the current state and the state you want it to be in, there are a number of tools, such as [JSON Patch Builder Online](https://json-patch-builder-online.github.io/).

## 3. Consuming the API with an API Client
 It's possible to use whatever language you want to access the OMNIA API, allowing you to use the API the way you need to.

Our API requires authorization, so the first you need to do is register an API client in the platform ([see here how](omnia3_management_introduction.html#4-api-clients)).

We choose [OAuth 2.0](https://www.oauth.com/) as our authorization protocol. OAuth 2.0 is the industry-standard protocol for authorization and securing access to APIs with focus on client developer simplicity.

After the register, using the generated _Client ID_ and _Client Secret_, you are able to request an [access token](https://www.oauth.com/oauth2-servers/access-tokens/) to gain access to the API, through the OAuth 2.0 [Client Credentials](https://tools.ietf.org/html/rfc6749#section-1.3.4) flow, and start using the API.

### 3.1 Request an access token using C\#

Requesting an access token can be easy using [IdentityModel](https://www.nuget.org/packages/identitymodel/) an OpenID Connect & OAuth 2.0 client library.


```C#
using IdentityModel.Client;


var endpoint = "[Identity Endpoint]";
var clientId = "[Client ID]";
var clientSecret = "[Client Secret]";

using (var httpClient = new HttpClient())
{
    var discover = await httpClient.GetDiscoveryDocumentAsync(endpoint);

    if (discover.IsError)
    {
        throw new Exception(discover.Error);
    }

    //request token
    using (var tokenHttpClient = new HttpClient() { BaseAddress = new Uri(discover.TokenEndpoint) })
    {
        var tokenClient = new TokenClient(tokenHttpClient, new TokenClientOptions() { ClientId = clientId, ClientSecret = clientSecret });
        var tokenResponse = await tokenClient.RequestClientCredentialsTokenAsync("api");

        if (tokenResponse.IsError)
        {
            throw new Exception(tokenResponse.Error);
        }

        return tokenResponse.AccessToken;
    }
}

```

As you can see in the previous example, when a token is requested, the scope must be sent. Currently, OMNIA platform supports only one scope, named *api*. This is the scope required to access OMNIA API.

### 3.2 Using HttpClient to send request to the API

Using the built-in .NET HttpClient, you can use the requested token to perform requests to our API.


#### Call the API

```C#
using System.Collections.Generic;
using System.Net.Http;

var authHeaderValue = new AuthenticationHeaderValue("Bearer", "[Access Token]");
var client = new HttpClient() { DefaultRequestHeaders = { Authorization = authHeaderValue } };

var requestResponse = await client.GetAsync("[API Endpoint]}");
if (requestResponse.IsSuccessStatusCode)
{
    var responseBody = await requestResponse.Content.ReadAsStringAsync();
	var response = JsonConvert.DeserializeObject<Dictionary<string, object>>(responseBody);
}
```
