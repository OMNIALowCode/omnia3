---
title: Data Visualization
keywords: data visualization query list charts
summary: "Here's all you need to know regarding the queries, lists and (javascript) charts that make up the set of data visualization tools that OMNIA provides."
sidebar: omnia3_sidebar
permalink: omnia3_modeler_datavisualization.html
folder: omnia3
---

## 1. Introduction

The platform provides a series of options to help perform analysis on the information produced by the users.

These tools allow for modelers to determine how users are going to be able to see and interact with their data.

There are three different modelable entities that will be used for this purpose, **Queries**, **Lists**, and **Dashboards**.

## 2. Queries

**_Data Analytics / Queries_**

A **query**, in OMNIA, represents a way to define a series of properties whose values you want to obtain, from an entity or a series of entities. If you have ever worked with a query-based languages such as SQL, you will be familiar with this concept - in fact, the queries we model in OMNIA are later turned into SQL, in the [build](omnia3_modeler_lifecycle) process.

A query is automatically created when an entity is created. This automatic query will obtain a series of system attributes, by default.

### How to create a new query?

Selecting the option _Add new_ in the list of queries, you need to fill the following information:

- **Name**: The name of the query (needs to be unique);
- **Description**: The textual explanation of the query's purpose (can be used as development documentation);
- **Type**: The type of the entity this query targets;

### How to add properties to a query?

Selecting the option _Add new_ when editing a query, you need to fill the following information:

- **Alias**: The Alias of the property, i.e. the name you want to see it show up with;
- **Path**: The Path to that property. If the attribute belongs to the entity, it can be selected. Else:
  - If you want to get properties from a collection inside the entity, use '>', i.e. `OrderLines>_amount`;
  - If you want to get properties from a reference inside the entity, use '.', i.e. `VATSummary._amount`;

### How to create an advanced query?

The platform allows you to write your own query using SQL. This feature enables you to execute your own SQL in over the database.

_The SQL will be used to generate a View in the PostgreSQL database, so the query needs to be compliant with the pgSQL Views syntax._

_Note: The query will be executed with Read Only privileges over the application data of that Tenant._

To do that, edit a query and, in **More options**, select **Show advanced editor** and you will see a text box to write in your SQL statement.

_**Naming conventions**_

Each entity you add to the model have a SQL view to allow you to easily access the data. Also, each attribute whose _Maximum number of records_ is more than 1, will have a different SQL view.

So, the name of the SQL views respects the following rules:

- SQL views of entities (the name of the entity with the _vw\__ prefix): **vw_MyEntityName**
- SQL views of attributes with _Maximum number of records_ > 1: **vw_MyEntityName_MyAttributeName**
  - To join this views with the parent entity, you can use the column _identifier_ from both views.

Each SQL view will be composed with as many columns as attributes of the entity. The column name is the same as the attribute name.

_**Examples**_

_Get the records from an entity_

```SQL
    SELECT document._code, document._date, document.Customer FROM vw_MyDocument document
```

_Get the records from a collection attribute_

```SQL
    SELECT document._code, lines._resource, lines._amount
    FROM vw_MyDocument document
    JOIN vw_MyDocument_Lines lines on lines.identifier = document.identifier
```

_Get a sum of the value of an attribute_

```SQL
    SELECT document._code, lines._resource, SUM(lines._amount) as total
    FROM vw_MyDocument document
    JOIN vw_MyDocument_Lines lines on lines.identifier = document.identifier
    GROUP BY document._code, lines._resource
```

### Filtering data with the current user

You can access a SQL parameter (**@\_username**) with the current username. You can use that to filter data.

```SQL
    SELECT document._code, document._date, document.Customer FROM vw_MyDocument document
    WHERE document.authorUsername = @_username
```

### Filtering data with the user roles

You can access a SQL parameter (**@\_userRoles**) with the roles of the current user.
The parameter has the multiple roles comma separated.
If you want to validate if the user has one specific role, you can use the _user_is_in_role_ function.

```SQL
    SELECT document._code, document._date, document.Customer FROM vw_MyDocument document
    WHERE user_is_in_role(@_userRoles, 'Approver')
```

### Filtering data with the user language

You can access a SQL parameter (**@\_userLanguage**) with the active language of the current user.

### Access to created date and updated date

You can access a to the created date using *_created_at* and updated date using *_updated_at*.
These columns are only available on root entity views.

### Recommendations

- When joining two views, use the _identifier_ instead of the _\_code_ for performance improvements.

```SQL
    SELECT document._code, lines._resource, lines._amount, employee._name
    FROM vw_MyDocument document
    JOIN vw_MyDocument_Lines lines on lines.identifier = document.identifier
    LEFT JOIN vw_Employee employee on employee.identifier = document.employee
```

- When concatenating columns, the result must be converted to **citext** so that the filters are evaluated in a **case insensitive** way.

```SQL
    SELECT document._code, lines._resource, lines._amount, (employee._code || ' ' || employee._name)::citext employee
    FROM vw_MyDocument document
    JOIN vw_MyDocument_Lines lines on lines.identifier = document.identifier
    LEFT JOIN vw_Employee employee on employee.identifier = document.employee
```

## 3. Lists

**_Data Analytics / Lists_**

In order to use the queries, we will need a place to show them. **Lists** are one of those places.

A list is little more than a way to see a query displayed in the web app: you select a query, (part or all of) its columns, and how to display those columns.

A list is automatically generated when a new entity is created. It is based on the automatically generated query.

### How to create a list?

A list can be created automatically, based on a query, or manually.

To automatically create a new list based on a query, you must edit the query, and on top right _More Options_ button, click on _Generate List_. A list will be automatically generated and can be edited later.

To create a list manually, select the option _Add new_ when in the list of Lists, and fill in the following information:

- **Name**: the name of the list (needs to be unique);
- **Description**: the textual explanation of the list's purpose (can be used as development documentation);
- **Query**: select a previously created query to use;
- **Label**: what label should be displayed for the list;
- **Help Text**: Auxiliary texts that explain the list's purpose to the users.

### How to edit the columns in a list?

When the list is created manually, after its creation it will be empty, and you must select which columns from the query you want to show.

By editing a list in the menu, and selecting the option _Add new_, you can add the following information:

- **Query property**: The property of the query this column will represent. In case of advanced queries you will define the column alias;
- **Label**: What the label of the column will say;
- **Help Text**: Auxiliary text that explains this column to users;
- **Format as**: Which formatting strategy should this column have. Similar to spreadsheet applications, i.e. a result of "5" can be shown normally, or formatted as a decimal.

## 4. Dashboards

**_Data Analytics / Dashboards_**

A dashboard is a collection of lists organized in a particular order.

When a new entity is created, a dashboard is automatically generated. This dashboard is shown when user lists the entities, and contains only one element, the automatically generated list.

### How to create a dashboard?

Select the option _Add new_ when in the list of Dashboards, and fill in the following information:

- **Name**: the name of the dashboard (needs to be unique);
- **Description**: the textual explanation of the dashboard's purpose (can be used as development documentation);
- **Label**: what label should be displayed for the dashboard;
- **Help Text**: Auxiliary texts that explain the dashboard's purpose to the users.

**Special case:** A dashboard with a code of **Home** will be automatically displayed in the homepage of the application.

### What elements can be added to dashboards?

Dashboards can have the following elements:

- **List**: a list previously modeled;
- **Calendar**: a calendar view of the records. Calendars can be mapped to a list or its data can be obtained through behaviours ([see here](omnia3_application_notifications_and_operations.html));
- **WebComponent**: a webcomponent previously modeled;
- **Container**: used for organization of other dashboard elements;
- **Input**: an input of any of the supported types (e.g.: text, date, reference to an entity, ...);

### How to add elements to a dashboard?

Select the option _Add new_ when editing a dashboard, and fill in the following information:

- **Name**: the name of the element (needs to be unique);
- **Description**: the textual explanation of the element's purpose (can be used as development documentation);
- **List**: which list should be displayed in this dashboard element;
- **Label**: what label should be displayed for the element;
- **Help Text**: Auxiliary texts that explain the element's purpose to the users.
- **Row**: the layout row in which the element will be placed;
- **Column**: the layout column in which the element will be placed;
- **Size**: the element size on a scale of 1 (the smaller size) to 12 (the bigger size). Click [here](omnia3_modeler_userinterface.html#lists-and-grid-columns), to know more about elements size and columns;

Other information might be necessary when adding inputs:

- **Type**: when input represents an Enumeration or Reference, indicate its base type;
- **Is list of records?**: indicate if the input allows multiple values;
- **Minimum/Maximum number of records**: indicate the minimum and maximum number of records allowed;
- **Uses data source from attribute**: (on Reference inputs of external data source entities) Indicate another dashboard input where the datasource data is set;

    Note: Data source data can also be set on UI behaviours. Example:

    ```Javascript
    this._metadata.elements.myInput.attributes.dataSource = "YourDataSource";
```

## 5. User Interface Behaviours

**_Dashboard / User Interface Behaviours_**

In order to extend your application user interface you can add new behaviours to your dashboard' user interface.

Click [here](omnia3_modeler_uibehaviours.html), to know more about user interface behaviours.

### How to define the auto refresh interval of the dashboard?

In this sample, the auto refresh interval is setted to 30 seconds:

```JavaScript
    this._metadata.attributes.autoRefreshInterval = 30;
```

_Note: The unit of measure of autoRefreshInterval property's value is the second._
