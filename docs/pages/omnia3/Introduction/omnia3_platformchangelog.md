---
title: Platform Changelog
keywords: omnia3
summary: "OMNIA Platform Changelog"
sidebar: omnia3_sidebar
permalink: omnia3_platformchangelog.html
folder: omnia3
---

Visit our [Downloads](/omnia3_downloads.html#platform) page to get the latest version.

## [3.0.X](#3.0.X)
Release Date: 2019-08-X

### Implemented enhancements: 
 - State Machines
 - Quick link to Clean & Build in the top bar
 - Format columns as Enumeration in lists
 - Entity History - Timeline visualization

### Breaking change: 
  - API Application History methods deprecated:
    - /application/history
    - /application/history/{definition}/{code}

## [3.0.296](#3.0.296)
Release Date: 2019-08-01

### Bugs: 
 - Can't remove Generic Entities non-root
 - Incorrect label in the breadcrumb when accessing a Dashboard
 
## [3.0.295](#3.0.295)
Release Date: 2019-07-30

### Implemented enhancements: 
 - Allow setting initial dates and views in calendars [(see here)](https://docs.omnialowcode.com/omnia3_modeler_entities_ui.html#how-to-change-the-initial-date-of-a-calendar)
 
### Bugs: 
 - The "Remember me" option when the user signs in, isn't respected.
 - User can't see a tenant when his email is added to that tenant using a different casing.
 - Can't edit elements inside a container

## [3.0.286](#3.0.286)
Release Date: 2019-07-23

### Implemented enhancements: 
 - Optimize load time when the user access the WebApp or hits the refresh button
 - Performance improvement - Use browser cache to load application metadata
 
### Bugs: 
 - Breadcrumb entries not translated
 - All the roles available in the @\_userRoles parameter in advanced queries even when the user filters to one active role
 - Error when the user quickly remove multiple lines from a collection
 - Date Attributes: When dates are inserted manually, they are being replaced for 01/01/0001
 - Management: when production tenant is edited, the VAT Number is always empty
 - Modeler: Export Model option on Edge returns a txt file

## [3.0.283](#3.0.283)
Release Date: 2019-07-18

### Implemented enhancements: 
 - Caching in c# behaviours [(see here)](https://docs.omnialowcode.com/omnia3_modeler_behaviours.html#8-caching-in-behaviours)

## [3.0.275](#3.0.275)
Release Date: 2019-07-10

### Implemented enhancements: 
 - Enumerations [(see here)](https://docs.omnialowcode.com/omnia3_modeler_enumerations.html)

## [3.0.274](#3.0.274)
Release Date: 2019-07-05

### Bugs: 
 - Can't compile behaviours when a File dependency, depends on an obfuscated dll.

## [3.0.273](#3.0.273)
Release Date: 2019-07-02

### Bugs: 
 - Error when changing language after interacting with menu
 
## [3.0.272](#3.0.272)
Release Date: 2019-06-28

### Bugs: 
 - Occasionally menu isn't filtered out with privileges.
 - When a Menu has subfolders, the top level menu folder is visible even there's no access to subentries.

## [3.0.271](#3.0.271)
Release Date: 2019-06-27

### Bugs: 
 - Date fields hidden inside grids
 - Cannot create new queries for entities of type Data Source

### Implemented enhancements:
 - Allow to dismiss all notifications with one click
 - Disable add and remove buttons in grids when a request is processing
 - Set focus on WebComponent element after the API response
 - Model Menu: WYSIWYG modeling experience
 - Display option to change Data Source when the current isn't connected
 

## [3.0.265](#3.0.265)
Release Date: 2019-06-12

### Bugs: 
 - Add the missing reference to Microsoft.CSharp.dll in Visual Studio downloaded project. 

### Implemented enhancements:
 - Forms: Allow to configure the precision of decimal elements [(see here)](https://docs.omnialowcode.com/omnia3_modeler_entities_ui.html#how-to-change-the-number-of-decimal-places-of-the-element)
 - Dashboard: Add periodic auto-refresh [(see here)](https://docs.omnialowcode.com/omnia3_modeler_datavisualization.html#how-to-define-the-auto-refresh-interval-of-the-dashboard)

## [3.0.261](#3.0.261)
Release Date: 2019-06-06

### Bugs: 
 - Fix: Case sensitive search when filtering a list with an equals operator

### Implemented enhancements:
 - Expand environment variables in file paths when looking for file dependencies
 - Allow to add containers to dashboards

## [3.0.257](#3.0.257)
Release Date: 2019-06-04

### Bugs: 
 - Add missing translations 
 - WebComponents with mapping - Display the errors related to the mapped element

### Implemented enhancements:
 - Refresh button in Dashboards

## [3.0.250](#3.0.250)
Release Date: 2019-05-28

### Bugs: 
 - Client can't execute Application Behaviour with external runtime location when the DataSource has Internal Behaviours runtime.

## [3.0.247](#3.0.247)
Release Date: 2019-05-23

### Bugs: 
 - Security fix

## [3.0.245](#3.0.245)
Release Date: 2019-05-23

### Bugs: 
 - Fix: When the user accesses to application using a link is redirected to homepage

### Implemented enhancements:
 - Platform Languages - Custom platform languages
 - Platform Languages - Translate exceptions / feedback messages
 - Manangement: When creating a new language, use en-US as template
 - The API response when the prefer header is minimal, will return the "identifier" property instead of "code". Please review your client to use the "identifier" or do the request with the "representation" prefer header. (API BREAKING CHANGE)

## [3.0.244](#3.0.244)
Release Date: 2019-05-07

### Bugs: 
 - GetEntity Accelerator: Don't use the default data source instance when the Entity is from a data source other then the System.
 - Ignore OMNIA \_code validation rules for entities in external data sources
 - Execute After Save retries with the current active build version

### Implemented enhancements:
 - Enable password definition form the administration user during the Platform Setup
 - Calendar mapping - Select list columns when mapping to a list

## [3.0.242](#3.0.242)
Release Date: 2019-05-02

### Implemented enhancements:
 - Code/Expression Dependencies

## [3.0.241](#3.0.241)
Release Date: 2019-04-24

### Bugs: 
 - White space in the login page background image when using zoom out
 - Use system directory slash to normalize paths on server setup
 - Cached HTML resources when the version is upgraded - Review HTML headers to force WebApp to reload every time

### Implemented enhancements:
 - Redirect homepage when the user changes the role
 - Support upload of files with non unicode characters in the name
 - Consider the error messages added using extensibility to invalidate the form
 
 
## [3.0.240](#3.0.240)
Release Date: 2019-04-22

### Bugs: 
 - Redis Cache stability issues
 - Fix: Can't GET an entity from an external data source when then behaviour runtime is internal.

### Implemented enhancements:
 - Add option to remove languages in modeler portal

## [3.0.238](#3.0.238)
Release Date: 2019-04-16

### Bugs: 
 - Error when loading dashboards with calendars mapped to lists

## [3.0.237](#3.0.237)
Release Date: 2019-04-15

### Bugs: 
 - Don't mark WebComponents as optinal fields where placed in grids

### Implemented enhancements:

 - Debug internal rutime behaviours (Breaking change - Required to update connector to 1.0.172 or higher and re-build model)
 - Display the data source name instead of code
 - Accelerator GetEntity: Get data source info to generate the data source parameter value
 - Modeler: Show row number when modeling the User Interface
 - Modeler: Suggest the Behaviours name
 - Add "Add validation message" Accelerator
 - Modeler: Allow to download last build directly from top bar


## [3.0.216](#3.0.216)
Release Date: 2019-04-11

### Bugs: 
 - Show the correct message when a WebComponent fails to load
 - Show errors in calendars
 - Modeler: Allow to filter lookup fields
 - Don't show "Go to Tenants management" option to non-admin users
 - Translate filters section
 - Translate calendar entry form
 - VisibleFromScreenSizes: Fix dropdown options values
 
### Implemented enhancements:
 - WebApp: Send language in API client
 - WebApp: Add ExecuteQuery Accelerator
 - Generate code to get the Document's serie on Initialize
 - Add Accelerator: ExecuteApplicationBehaviour
 - Add JS Accelerators
 - Remove the Serie data when removing a document

## [3.0.200](#3.0.200)
Release Date: 2019-04-01

### Bugs: 
 - Error Building a model after removing an entity

## [3.0.199](#3.0.199)
Release Date: 2019-03-28

### Bugs: 
 - Error creating Application Behaviours in DataSource "System" - Missing Runtime Location

### Implemented enhancements:

 - Roles based privilege management for Tenant Application Policy
 - Modeler: Allow to export and import templates
 - Create security permissions on Build instead of when the entity is created
 - Behaviours Accelerator - C# Get Entity behaviours

## [3.0.192](#3.0.192)
Release Date: 2019-03-22

### Bugs: 
 - Month Calendar: Fix error where the same day was rendered multiple times

### Implemented enhancements:

 - Database connection management improvements
 - Incremental builds

## [3.0.187](#3.0.187)
Release Date: 2019-03-13

### Implemented enhancements:

 - C# Behaviours: Collect all .net System dependencies without required definition
 - Allow anonymous access to the System Version

## [3.0.185](#3.0.185)
Release Date: 2019-02-25

### Implemented enhancements:

 - Enable Debugging experience through the Behaviour Server
 - WebApp Menu: Allow to have nested folders
 - Allow to model the same dependency for internal and external runtimes 

## [3.0.181](#3.0.181)
Release Date: 2019-02-20

### Implemented enhancements:

 - Enable case insensitive filters in the Application area
 - Load System references without requiring the modeler to define them in the Data Source (Breaking change - Is required to remove System dependencies from the System Data Source)
  

## [3.0.179](#3.0.179)
Release Date: 2019-02-19

### Bugs:
 - Can't export CSV from a list of an external Data Source that uses the Connector

### Implemented enhancements:

 - Auto select the data source when there is one available

## [3.0.174](#3.0.174)
Release Date: 2019-02-06

### Bugs:
 - Can't control calendar form metadata: Review calendar form opening to wait for all components to load
 - Date selectors aren't opening near to the inputs
 - Allow to set details WebComponts as read-only
 

### Implemented enhancements:

 - Support a Data Sources with multiple runtimes (Breaking change - Required to update connector to 1.0.108 or higher and re-build model)
 - Behaviours - Add to the namespace the name of the Data Source and of the runtime location
 - Access to the user language in queries: @\_userLanguage parameter


## [3.0.170](#3.0.170)
Release Date: 2019-02-04

### Bugs:
 - Review grid column's size calculation to fix multi-browser issues
 - Validation: Ignore non-required attributes without value
 - Users removal from Authorization Roles
 - Queries - Filter non-text columns

### Implemented enhancements:

 - Generate a .csproj per data source and allow to download it
 - Move behaviour compilation output to bin folder
 - Lists: Allow to use ranges to filter numeric and date columns
 - TopBar: Restrict the available space to show the tenant name
 - Scheduler: block days that are out of the start and finish dates
 - Call onDataRangeChange event when the date range or the view is changed
 - Add Week calendar


## [3.0.153](#3.0.153)
Release Date: 2019-01-29

### Bugs:
 - UI Reference Selector - use camel case getting selected data
 - Limit the User's access to all areas based on permissions
 - WebComponents in Lists: set the width property in the list header
 - Review grid column's size calculation to fix multi-browser issues

### Implemented enhancements:

 - Commulative Roles
 - Add JSON editor to ApplicationMenu
 - Users with only 1 tenant: Don't show the tenant selection page
 - Allow to define sensitive data attributes
 - WebApp: Allow to export list data as CSV in application area
 - Access to user language in Behaviours
 - Grids: Show full text on mouse over (only to text fields)
 - Remove version from behaviours Namespace
 - Generate a .csproj per data source and allow to download it


## [3.0.119](#3.0.119)
Release Date: 2019-01-02
 
### Implemented enhancements:

 - Display cell text in a list cell on mouse over
 - Preserve user session when the application reboot
 - Apply a default filter in lists to only return active entities, when the inactive column exists in the query result
 - Auto-select the role when there is only one


## [3.0.113](#3.0.113)
Release Date: 2018-12-26

### Bugs:
 
 - Fix sidebar translations in top entries
 - Allow to select the WebComponent mapping when the list is inside a container
 - Don't block save button while the temporary is being updated
 
### Implemented enhancements:

 - Allow to redirect to application address using JS extensibility
 - Allow to control the List "Add new" button state
 - Allow to call a function when the calendar form opens
 - Render Calendars in Dashboards


## [3.0.93](#3.0.93)
Release Date: 2018-12-12

### Bugs:
 
 - Trigger C# On Change behaviours on edit
 
### Implemented enhancements:

 - Allow to control the state of form footer options (using UI extensibility)
 - Allow to pass list and list parameters to queries in UI Shared Reference attributes
 - Date elements: Add a button to clear the value in optional fields


## [3.0.90](#3.0.90)
Release Date: 2018-12-10

### Bugs:
 
 - 403 Error when using the lookup in a Calendar modal


## [3.0.89](#3.0.89)
Release Date: 2018-12-10

### Implemented enhancements:

 - Calendar: Add "See all" option when there are too many entries in one day
 - Send list filters & sort conditions to external data sources data behaviours
 
### Bugs:
 
 - Translate column names in List filters
 - Exceptions throwed at Before Save in UI Behaviours aren't visible
 - Review list columns to don't break when the text is too big


## [3.0.85](#3.0.85)
Release Date: 2018-11-30

### Implemented enhancements:

 - Calendar element
 - UI Behaviours - Support async behaviours
 - Access to translations in UI behaviours
 
### Bugs:
 
 - Don't allow to write in the readonly numeric fields
 - Review list columns to don't break when the text is too big


## [3.0.83](#3.0.83)
Release Date: 2018-11-08

### Implemented enhancements:

 - Support visibility based on screen sizes
  
   - Mobile
   - Tablet
   - Desktop
   - Widescreen
 
 - Add context to menu when a folder is open
 - Horizontal Scrollable lists
