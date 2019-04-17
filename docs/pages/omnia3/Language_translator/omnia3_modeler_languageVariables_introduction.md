---
title: Languages
keywords: omnia3
summary: "All you need to know about the language mechanism of our development platform"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_languagetranslator.html
folder: omnia3
---


## 1. Introduction

Despite being written in English by default, OMNIA allows you to easily add new languages and upload their respective content in a easy and  scalable way. 

Currently there are two language slots available, one for the English language, and one for the Portuguese (this will soon change to allow for the creation of any number of languages).


## 2. Structure

In order to build a language-flexible, scalable web application, we developed two features to assure that your work will be easily and fully translatable with very little effort. We call them **Language Variables**, and **Dictionaries**.


**Dictionaries** work as language datasets, this means that each language has its unique dictionary, allowing the developer to fill them with data as he sees fit. Dictionaries can contain single words, or multiple word strings.


**Language Variables** operate on the same basic principle of mathematical variables, you place a variable in your UI, and it will be filled with different data according to its users selected language and the data present in the respective language dictionary.


The structure of Language Variables is very simple and does not change, regardless of context, and works as follows:


   **{Texts.Description}** - represents the Language Variable for the term "Description" and will output the respective dictionary registry, according to the user's selected language.


**Examples:**

In the application's English language dictionary the user input the following values:

And does the same with the terms translation on the Portuguese language dictionary:

After the Dictionaries have that variable defined and are assigned a value, the platform will output the value instead of the Language Variable:

Language Variable | English | Portuguese
---------|------------|--------------|
 **{Texts.Description}** | Description | Descrição
 **{Texts.Apples}** | Apples | Maçãs
 **{Texts.CustomerService}** | Customer Service | Atendimento ao Cliente

# Data Upload

As mentioned previously, uploading an entire dictionary data can be achieved in a very simple way, by making use of JSON type files.

By using the "Update with JSON" funcionality, which requires only a JSON file (see example file), the user will be able to translate the entire platform in one single click, provided that Language Variables were used correctly.

### Context structure




 __*Tenant Context*__

Property | Explanation|
---------|------------|
 **code** | The code of the current tenant.
 **environmentCode** | The code of the current environment.
 **version** | The current version of the application.


 __*Operation Context*__

Property | Explanation|
---------|------------|
 **dataSource** | The code of the data source used in the current operation.


 __*Authentication Context*__

Property | Explanation|
---------|------------|
 **username** | The user name of the current user.


## 5. Exchanging data with Web Components

To send data in and out from web components you can use different techniques.
To send data in you can use [parameters](#4-available-parameters).
To send data out and update a given attribute in a form, you need to use a [custom event](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events).
OMNIA is watching for a 'value-updated' event where you can provide a new value to a given attribute.

Example to update the attribute "message" with the value "Hello World":
```
this.dispatchEvent(new CustomEvent('value-updated',
      {
        detail: {
          name: 'message',
          value: 'Hello World'
        }
      }));
```


## 6. Communicate with OMNIA API
If the Web Component needs data from the OMNIA API, you can use a HTTP Client that is already set.

Check the sample below to know how to do it.
```javascript
...
// Get the API Client
const apiClient = _Context.createApiHttpClient();
// Execute a Query, using the context data to compose the request address
apiClient
    .doPost(`/api/v1/${_Context.tenant.code}/${_Context.tenant.environmentCode}/application/Queries/MyQuery/Default`, {})
    .then(response => {
        const value = response.data[0].value;
        this.wrapper.innerHTML = value;
    });
...
```

### 6.1 Available operations

Operation | Explanation|
---------|------------|
doGet(address, preferHeader) | GET request
doPost(address, requestBody, etag, preferHeader) | POST request
doDelete(address, etag) | DELETE request
doPatch(address, requestBody, etag, preferHeader) | PATCH request 

## 7. Samples
Click [here](https://omnialowcode.github.io/omnia3-samples/) to access to our collection of Web Components and find a set of components ready to use in your applications.
