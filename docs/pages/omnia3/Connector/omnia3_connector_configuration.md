---
title: OMNIA 3 Connector Configuration
keywords: omnia3
summary: "OMNIA 3 Connector Configuration"
sidebar: omnia3_sidebar
permalink: omnia3_connector_configuration.html
folder: omnia3
---

## 1. Configuring the connector on the platform
In the Management area, it's possible to manage the available Connectors in the subscription.

In order to use the connector, you will first need to register it on the platform in this area. [See here how to do it](omnia3_management_introduction.html#5-connectors).

## 2. Configuring the connector in your application

To communicate with a connector it's neccessary to work with a custom **Data Source** ([see here how to do it](omnia3_modeler_datasources.html)).

### 2.1. How to configure the model
If the Data Source is created with *Data Access runtime* or *Behaviour runtime* properties setted as *External*, it will be possible to execute the operations marked as External in a connector.

To allow that, an attribute with name **_connector** is automatically added to the Data Source, which will determine whether or not that data source instance's operations will execute on a connector.

### 2.2. How to configure the application data
Before executing operations in the connector, it is required to configure to _which_ connector the requests will be made.

Accessing the application, in the menu, select the Data Source you previously created and **Add new** record.

Fill the form with the required information, and in the **Connector** field, write the code of the Connector you want to communicate with.

From now on, as explained above, any entities configured to use this Data Source will send the requests to that connector.
