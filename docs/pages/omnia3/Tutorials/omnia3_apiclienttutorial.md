---
title: API Client Tutorial
keywords: omnia3
summary: "OMNIA Low-Code Development Platform - API Clients Management"
sidebar: omnia3_sidebar
permalink: omnia3_apiclienttutorial.html
folder: omnia3
---

## 1. Introduction

Based on a simple Order Management sample application, this tutorial shows how easily OMNIA Platform models can be used through our API, by external applications.

On the first tutorial area we are going to evaluate how an API client is defined on OMNIA Platform, and how it is configured on OMNIAs security system. On the second area we are going to see a simple example of how OMNIA API can be consumed.

As a tool to consume OMNIA API, we are going to use [Postman](https://www.getpostman.com/), a tool that simplifies interaction with APIs. It is worth noting that the API could be consumed as easily with other tools or your own developments using your preferred programming language. [Download Postman](https://www.getpostman.com/downloads/)


## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant, and have completed the beginner tutorial. You must also have access to a user with privileges to Modeling and Management areas

If you do not have a tenant yet, please follow the steps of the [Tenant Creation tutorial](omnia3_tenantcreation.html). If you have a tenant, but have not completed the beginner tutorial, follow the steps on [Beginner tutorial](omnia3_beginnertutorial.html)


## 3. Define an API Client

1. Start by logging in with a user that has access to the manage area, and right side of top navbar, select option  "Management". You will be redirected to the Management area

2. Through the left side menu, create a new API Client by accessing the option ***API Clients / Add new*** on the top right side. Set its Name as "Tutorial API Client"

    ![Management_Create_APIClient](/images/tutorials/apiclient/Management-Create-ApiClient.PNG)
    
3. After creating, select the new API Client on the list, and check that you have now access to a Client Id and Secret to consume OMNIA API. Copy the Client Username to the clipboard

    ![Management_Edit_ApiClient](/images/tutorials/apiclient/Management-Edit-ApiClient.PNG)

4. Now its time to define the access privileges for the API Client. Through the left side menu, access option "Security > Roles". Locate the tenant Administration role (its name is a concatenation of "Administration" and the tenant code).

5. Edit the role, and on tab "Users", click on button "Add new". Paste the Client Username copied on step 3 and click on Save

## 4. Consume OMNIA API 

1. To consume the OMNIA API, open the previously installed Postman application. We are going to start with a POST request, to create a new Company.

2. Set the request type as "POST" and the request url as the base url used to access OMNIA (i.e. https://omnia.example.com/), then add "api/v1/[TenantCode]/prd/Application/Company/default" at the end (in this URL, replace "[TenantCode]" with your actual tenant code that shows up in the platform's URLs).

    ![Postman POST Request](/images/tutorials/apiclient/POSTrequest.jpg)

3. Before creating a request to OMNIA API, configure OAuth 2.0 as the authentication type to be used on requests, and fill the required parameters, as in the following images:

    ![Postman oAuth Config](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/apiclient/oauth-config.png)

    ![Postman_Configure_AccessToken](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/apiclient/newAccessToken.jpg)

    * Grant Type: Set as "Client Credentials"
    * Access token URL: The base url used to access OMNIA, adding "/identity/connect/token" at the end
    * Client ID: client ID generated previously
    * Client Secret: secret generated previously
    * Scope: set as "api"
    * Client Authentication: set as "Send as Basic Auth header"

4. Copy the following Json as the request body:

    ````
{% raw %}
    {
        "_code":"AnalogSound",
        "_name":"Analog Sound Inc."
    }
{% endraw %}
    ````


    ![Postman POST Response](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/apiclient/POSTresponse.jpg)

5. Click on send and check the OMNIA API's response. If request was made successfully, a 201 Created status code is the expected result. Validate the response - it should return a JSON object showing what was created.

    ![Postman 200 Response](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/apiclient/postman-response200.jpg)

6. Now change the request type to GET, and retrieve the Company record saved on the last step by setting the request url as the base url, with "api/v1/[TenantCode]/prd/Application/Company/default/AnalogSound" at the end. Replace "[TenantCode]" with your actual tenant code.

7. Check that the response body has the data previously inserted on the POST request:

    ![Postman_Configure_AccessToken](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/apiclient/postman_GETresponse.jpg)

Now that you have completed our API Client tutorial, feel free to explore our API by testing other requests. Remember that the Modeling area is also available via API, so that you can create and change your models programatically.

Also remember that the platform's API is automatically documented directly on your installation of it. For more information on this, check [this page](omnia3_api_swagger.html).
