---
title: Web Components
keywords: omnia3
summary: "Web Components"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_webcomponents.html
folder: omnia3
---

## 1. Introduction
In the **OMNIA Platform**, in addition to being possible to customize how the application works (using the Behaviours), it's possible to define how it looks like.

Using [**Web Components**](https://developer.mozilla.org/en-US/docs/Web/Web_Components), written in Javascript, you can extend the default layout, adding your own elements.

You can add Web Components to a **Form** or to a **Dashboard**.
In both scenarios, you can have two different approaches:
* Standalone Web Component: has all the logic to retrieve and process data;
* Mapped Web Component: has the logic to process the data, which is passed as parameters based on the modeled mapping.

A Web Component is defined by:
* its **custom element name**, or the name of the element that will be created to be attached to the page's DOM;
* its expression, the aforementioned JavaScript code.

Web components are based on existing web standards. You can see the browser compatibility [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements#Browser_compatibility).

## 2. Structure of the Web Component
To create a new Web Component it's necessary to create a [Javascript class](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Classes) that extends [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) and adds to the DOM's custom elements the Web Component.

An excerpt of a Web Component with the minimum configurations would be:

```javascript
class MyComponent extends HTMLElement {  
  constructor() {
   super();
   
    // Using regular Javascript, create the content of the Web Component
    this.wrapper = document.createElement('div');
    this.wrapper.innerHTML = 'My first Web Component in OMNIA Platform!';
  }

  connectedCallback() {
    // Append the elements to the Web Component
    this.appendChild(this.wrapper);
  }
}

// Add to DOM custom elements you Web Component
// The 1st parameter represents the custom element name (must be the same you write when you add the Web Component to the model)
// The 2nd parameter is the class that will be used to represent your component (the class created in this code block)
customElements.define('omnia-component', MyComponent);

```

## 3. Mappings
If it's necessary to use the data of another element (for example, a textarea to display the value of an attribute or a chart to display the data of a list) you need to model the mappings between the element that owns the data and the Web Component.

To do that, when you are adding the Web Component to the page you need:
* If the page is a **Form**, set the mapping with the attribute of the entity;
* If the page is a **Dashboard**, set the mapping with the list that has the required data. *When mapping to a list, the page size will also be imposed. Please make sure that you take the page size in consideration designing the feature.*

After the mapping is configured, the Web Component will receive the data as a parameter. To know how to use it, check the [_Available parameters_](#5-available-parameters) section.

## 4. Available parameters
Each component can receive up to three parameters, depending on the mapping configuration:
* **context**: the current session information (the structure is represented [below](#context-structure));
* **elementMetadata**: the current element metadata;
* **isPreviousValue**: boolean value representing if the _value_ corresponds to the previous value (used only when a Form is in the history mode and the mapping is configured; setted as _true_ if the user chooses to see the previous version value of the element);
* **isReadOnly**: boolean value representing if the WebComponent is in a read-only state (setted as _true_ when a Form is in the history mode, otherwise is _false_);
* **rootMetadata**: the metadata of the current root Element;
* **state**: all the data of the current root Element, in the same structure of the [User Interface Behaviours](omnia3_modeler_uibehaviours.html#4-structure-of-the-class);
* **value**: if the mapping is configured, has the value of the mapped element;
* **valueHasChanged**: boolean value representing if the _value_ has changed since the previous version (used only when a Form is in the history mode and the mapping is configured; setted as _true_ if the _value_ has changed since the previous version).

**_Note: None of these attributes must be used to update the state of the entity. They are only for reading purposes. To interact with the entity data, please see [5. Exchanging data with Web Components](omnia3_modeler_webcomponents.md#5-exchanging-data-with-web-components)_**

### 4.1. Using the parameters
To use the parameters, it's necessary to know when they have his value changed.

The approach we recommend is to use the [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) of the class to catch the updates.

Check the next code block to see how you can do it.

```javascript
class MyComponent extends HTMLElement {  
  constructor() {
   super();
   ...
  }
  
  set value(newValue){
    // When the property value changes, update the Web Component content
    this.wrapper.innerHTML = newValue;
  }
}

...
```

### Context structure

| Property           | Explanation                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| **tenant**         | Information about the tenant the user is working on, using the _TenantContext_ structure.            |
| **operation**      | Information about the operation the user is working on, using the _OperationContext_ structure.      |
| **authentication** | Information about the operation the user is working on, using the _AuthenticationContext_ structure. |


 __*Tenant Context*__

| Property            | Explanation                             |
| ------------------- | --------------------------------------- |
| **code**            | The code of the current tenant.         |
| **environmentCode** | The code of the current environment.    |
| **version**         | The current version of the application. |


 __*Operation Context*__

| Property       | Explanation                                                |
| -------------- | ---------------------------------------------------------- |
| **dataSource** | The code of the data source used in the current operation. |


 __*Authentication Context*__

| Property     | Explanation                        |
| ------------ | ---------------------------------- |
| **username** | The user name of the current user. |


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

| Operation                                         | Explanation    |
| ------------------------------------------------- | -------------- |
| doGet(address, preferHeader)                      | GET request    |
| doPost(address, requestBody, etag, preferHeader)  | POST request   |
| doDelete(address, etag)                           | DELETE request |
| doPatch(address, requestBody, etag, preferHeader) | PATCH request  |

## 7. Samples
Click [here](https://omnialowcode.github.io/omnia3-samples/webcomponents/docs/) to access to our collection of Web Components and find a set of components ready to use in your applications.
