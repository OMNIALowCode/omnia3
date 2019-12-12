---
title: OMNIA 3 Connector Client
keywords: omnia3
summary: "OMNIA 3 Connector Client"
sidebar: omnia3_sidebar
permalink: omnia3_connector_client.html
folder: omnia3
---

## 1. What is the connector client
In every behaviour, a ```ConnectorClient``` class is included. This class is what allows users to, in their modeled behaviours, communicate with a connector. This is what allows, for example, to perform operations on multiple on-premise systems at the same time.

## 2. Using the connector client

First, you must create a **ConnectorContext** object. The connector context has the following parameters:
- **Tenant**: The target tenant.
- **Environment**: The target environment of the model to execute the behaviour on.
- **Version**: The version of the model to execute the behaviour on.
- **Access Token**: The OAuth access token to pass to the connector.
- **Base Endpoint**: URL of the subscription it's running on.

All of these parameters can be filled in from the context object that already exists in the behaviours.

You will also need to build a **ConnectorMessage** object, to determine what we want to execute. This object has the following parameters:
- **Type**: The Type of the behaviour you want to execute: application, data or entity.
- **Name**: What the behaviour's target is. In most cases, the identifier of the entity you are targeting. For application behaviours, its behaviour code.
- **OperationType**: Within the previous type, what specific execution moment it is. For more details on the available operations, see point 3 of this document.
- **Data**: A dictionary containing any arguments you need to pass to the behaviour. For more details on what this object takes, see point 3 of this document.

An example of filling in these parameters would be, in a scenario where you want to, on a BeforeSave entity behaviour, execute an application behaviour called GetTheWeather on an external data source of type WeatherServer with the identifier Server1:

```csharp
var context = new ConnectorContext(_Context.Tenant.Code, _Context.Tenant.EnvironmentCode,
    _Context.Tenant.Version, _Context.Authentication.AccessToken, _Context.Tenant.BaseEndpoint);
var client = new ConnectorClient(context);
var message = new ConnectorMessage(MessageType.Application, "GetTheWeather", OperationType.Execute);
message.Data = new Dictionary<string,object>(){
    {"dataSource", "Server1"},
    {"dataSourceType", "WeatherServer"}
};
```

After creating these objects, and knowing the username of the connector you want to execute on, it's as simple as:
```csharp
var connectorUsername = "fakeUsername@connectors";
var client = new ConnectorClient(connectorContext);
var response = client.ExecuteAsync(connectorUsername, connectorMessage);
```
And you will receive a dictionary with whatever the response was from the connector method you invoked.

All of these hardcoded strings can, of course, be parametrized from values in the model, depending on your execution scenario. For example, if you're developing a template to be reused in multiple scenarios, the best practise would be to get them from the entity where the behaviour is executing.

## 3. Connector message types
Each Type and Operation Type combination has a series of specific parameters that are described in this section.

### 3.1. Application Behaviours
There is only one **operation type** that can be used in an application behaviour, and that is Execute.

#### 3.1.1. Execute
The Data object receives the following parameters:
- **dataSourceType**: The data source type of the behaviour.
- **dataSource**: The data source instance to execute the behaviour on.
- **data**: The arguments, if any, the method will receive.

### 3.2. Data Behaviours
With the behaviour type Data, all five data behaviour types are different available operations: Create, Delete, Read, ReadList, and Update.

#### 3.2.1. Create
The Data object receives the following parameters:
- **name**: The definition (for example, 'Employee') of the entity we want to create.
- **identifier**: The identifier of the entity to create.
- **version**: The version of the entity we expect to create/update it against.
- **data**: The body sent to the Create behaviour.
- **dataSourceType**: The data source type of the entity.
- **dataSource**: The data source instance to execute the behaviour on.

#### 3.2.2. Update
The Data object receives the following parameters:
- **name**: The definition (for example, 'Employee') of the entity we want to update.
- **identifier**: The identifier of the entity to update.
- **version**: The version of the entity we expect to create/update it against.
- **data**: The body sent to the Update behaviour.
- **dataSourceType**: The data source type of the entity.
- **dataSource**: The data source instance to execute the behaviour on.

#### 3.2.3. Delete
The Data object receives the following parameters:
- **name**: The definition (for example, 'Employee') of the entity we want to delete.
- **identifier**: The identifier of the entity to delete.
- **dataSourceType**: The data source type of the entity.
- **dataSource**: The data source instance to execute the behaviour on.

#### 3.2.4. Read
The Data object receives the following parameters:
- **name**: The definition (for example, 'Employee') of the entity we want to read.
- **identifier**: The identifier of the entity to read.
- **dataSourceType**: The data source type of the entity.
- **dataSource**: The data source instance to execute the behaviour on.

#### 3.2.5. ReadList
The Data object receives the following parameters:
- **page**: The targeted page to read, using the platform's pagination logic.
- **pageSize**: The size of the pages for this request.
- **dataSourceType**: The data source type of the entity.
- **dataSource**: The data source instance to execute the behaviour on.
- **query**: (Optional) Identify a query of the platform that the ReadList behaviour should receive.

### 3.3. Entity Behaviours
With the behaviour type Application, there are two methods that manipulate definitive entities (Create, Update), and a method to execute AfterSave behaviours (AfterSave). There are also methods for the Temporaries logic (CreateTemporary, Read, and UpdateTemporary), but they are not recommended to be used via the connector client.

#### 3.3.1. Create
The Data object receives the following parameters:
- **name**: The definition (for example, 'Employee') of the entity we want to create.
- **data**: The body sent to the Create behaviour.
- **dataSourceType**: The data source type of the entity.
- **dataSource**: The data source instance to execute the behaviour on.

#### 3.3.2. Update
The Data object receives the following parameters:
- **name**: The definition (for example, 'Employee') of the entity we want to update.
- **data**: The state of the entity before calling the Update behaviour.
- **patch**: A JSONPatch object indicating the changes to make to the entity.
- **dataSourceType**: The data source type of the entity.
- **dataSource**: The data source instance to execute the behaviour on.

#### 3.3.3. AfterSave
The Data object receives the following parameters:
- **name**: The definition (for example, 'Employee') of the entity we want to update.
- **data**: The state of the entity before calling the AfterSave behaviour.
- **dataSourceType**: The data source type of the entity.
- **dataSource**: The data source instance to execute the behaviour on.
