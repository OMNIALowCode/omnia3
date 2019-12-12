---
title: Platform Changelog
keywords: omnia3
summary: "OMNIA Platform Changelog"
sidebar: omnia3_sidebar
permalink: omnia3_platformchangelog.html
folder: omnia3
---

Visit our [Downloads](/omnia3_downloads.html#platform) page to get the latest version.

## [3.1.20](#3.1.20)
Release Date: 2019-12-03

### Bugs:
 - iPad: List columns are overlapping with each other
 - Calendar: On scheduler year view, first record is not being calculated correctly
 - Attributes: Required error is not shown if the attribute is not visible
 - Mobile: View history option behaviour is not clear after click
 - Mobile: "New application version" message is under the menu button
 - Entity state disappears with user interaction

## [3.1.6](#3.1.6)
Release Date: 2019-11-26

### Bugs:
 - Authentication Providers - When the Name of an OpenIdConnect provider is changed, the user can't associate to account
 - Lists are generated with too many attributes


## [3.1.4](#3.1.4)
Release Date: 2019-11-22

**This version contains breaking changes**

### Implemented enhancements: 
 - Feature: Enable or disable User/Password authentication [(see here)](/omnia3_management_features.html)
 - Quick access to Tenant from Management Tenant list
 - New User's profile page
 - App Behavious and Web Components: Don't close modal when ESC key is pressed
 - Allow restarting the System
 - API Client - Security improvement - One time only access to Secrets
 
   After creating a new API Client, the Client ID and Client Secret will be shown to you. Save these values, mainly the Client Secret, since will not be possible to consult it again [(see here)](/omnia3_management_introduction.html).
   **If you need to access an old secret, you will need to regenerate it.**
   
 
 - Authentication Providers [(see here)](/omnia3_management_authentication_providers.html)

      To support Authentication Providers was needed to be compliant with [RFC6749](https://tools.ietf.org/html/rfc6749#section-2.3.1). With the upgrade, client secrets with a "+" sign will fail to authenticate causing a client validation fails. This can happen with API Clients and Connectors.
      
      This change means that you will need to upgrade the Connector, review API Clients to encode the Secret or regenerate your Secret. 

      More information here:

      - [https://tools.ietf.org/html/rfc6749#section-2.3.1](https://tools.ietf.org/html/rfc6749#section-2.3.1)
       
      - [https://github.com/IdentityServer/IdentityServer4/issues/2236](https://github.com/IdentityServer/IdentityServer4/issues/2236)
       
      - [https://github.com/IdentityServer/IdentityServer4/pull/2052/files](https://github.com/IdentityServer/IdentityServer4/pull/2052/files)

      
### Bugs:
 - Quantity isn't respected when creating a document by API
 - Create a tenant with a numeric Code
 - Web App: Messages are not shown on date attributes
 - When a collection is required and no entries are added, no error is shown when saving
 - Line breaking in the Web App error popup is not working correctly
 - Error messages in Operation Details don't have line breaks if the message is too large
 - Cannot select a role when associating to policy

------

## [3.0.355](#3.0.355)
Release Date: 2019-10-30

### Implemented enhancements: 
 - UX Improvement: Dotted border between Lookup button and input

### Bugs:
 - List Export: Data export with invalid encoding
 - Mobile/Grids: Missing translation when there are no grid lines and on grid operations
 - State Machine: when Patching a document via API, changes are identified on attributes unchanged
 - Quantity isn't respected when creating a document by API

## [3.0.345](#3.0.345)
Release Date: 2019-10-22

### Implemented enhancements: 
 - Nested Collections [(see here)](/omnia3_modeler_entities.html#4-nested-collections)
 - Present error messsages on the context of the Grid Line
 - New navigation flow for Grids in Mobile devices

### Bugs:
 - Double click on reference fields to add a new Line

## [3.0.326](#3.0.326)
Release Date: 2019-10-10

### Implemented enhancements: 
 - Modeler - OMNIA Blog feed in the modeler homepage
 - Modeler - Update entities with JSON

## [3.0.325](#3.0.325)
Release Date: 2019-10-04
 
### Bugs:
 - Ignore \_assign property when validating the changed attributes
 - History - Error when collection elements are removed
 - Can't save entities after a new state machine has been added to the definition
 - Text Templates: empty result preview when template uses translations that doesn't exists
 - List \_code hyperlink does not work if same list was opened on modal

## [3.0.321](#3.0.321)
Release Date: 2019-09-30

### Implemented enhancements: 
 - Text Templates [(see here)](/omnia3_modeler_texttemplates.html)
 - Email Notifications API Endpoint [(see here)](/omnia3_modeler_emailnotifications.html)
 - Keep label aligned when the label is empty or whitespace
 - Ignore \_state property when validating the changed attributes
 
### Bugs:
 - History button available on non-System entities
 - Page reload address when a new version is available - don't keep url arguments

## [3.0.319](#3.0.319)
Release Date: 2019-09-23

### Bugs: 
 - Entity Behaviours Name - maximum size too short

## [3.0.318](#3.0.318)
Release Date: 2019-09-17

### Bugs: 
 - 401 after an hour without reloading the page

## [3.0.317](#3.0.317)
Release Date: 2019-09-17

### Bugs: 
 - Can't remove entities without state machine
 - History for a given entity is showing the history for removed entities with the same identifier

## [3.0.310](#3.0.310)
Release Date: 2019-09-12

### Implemented enhancements: 
 - State Machines - Don't allow to change an attribute if is not enabled in the current state
 - Improve UX for Enable Attributes and Operations
 - Have access to decision & comment on After Save 
 - State Machines for entities in an External Data Source
 - Notify the user that a new version of the tenant model is available

### Bugs: 
 - Decision Comments - Label isn't translated
 - Can't see columns in Form grids when the element size is 0

## [3.0.309](#3.0.309)
Release Date: 2019-09-06

### Bugs: 
 - ListParameters aren't applyed to the query when a lookup page change (navigation)

## [3.0.307](#3.0.307)
Release Date: 2019-09-02

### Implemented enhancements: 
 - State Machines [(see here)](/omnia3_modeler_statemachines.html)
 - Quick link to Clean & Build in the top bar
 - Format columns as Enumeration in lists
 - Entity History - Timeline visualization
 - Limit the name max size of Model entities
 - Ignore Name when updating an entity with JSON using the Modeler WebApp
 - Labels partially hidden, when the text is too big to prevent the UI from breaking
 - Remove WebApp JS Code transpilation to ES6
 - WebApp: Memory cache metadata API calls to improve performance

### Bugs: 
 - OnChange UIBehaviours for Enum attributes are not included on generated JS
 - WebComponent Mapping to non-existing elements in collections causes an infinite PATCH
 - Data Source name is case sensitive when invoking an Application Behaviour in the connector using code
 - It's possible to define formula behaviours for documents attribute _code
 - Error "ExecutesInConnector is required" for Data Source System when importing a model

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

### Fixed Bugs: 
 - White space in the login page background image when using zoom out
 - Use system directory slash to normalize paths on server setup
 - Cached HTML resources when the platform version is upgraded - Review HTML headers forcing WebApp to reload every time

### Implemented enhancements:
 - Redirect homepage when the user changes the role
 - Support upload of files with non unicode characters in the name
 - Consider the error messages added using extensibility to invalidate the form
 
 
## [3.0.240](#3.0.240)
Release Date: 2019-04-22

### Fixed Bugs: 
 - Redis Cache stability issues
 - Error while using GET Entity from an external data source for internal behaviour runtime

### Implemented enhancements:
 - Add option to remove languages in modeler portal

## [3.0.238](#3.0.238)
Release Date: 2019-04-16

### Fixed Bugs: 
 - Error loading dashboards that contain calendars mapped to lists 

## [3.0.237](#3.0.237)
Release Date: 2019-04-15

### Fixed Bugs: 
 - Optional tag attached to Web Component displays properly

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

### Fixed Bugs: 
 - WebComponent loading showing wrong error message
 - Show errors in calendars
 - Modeler: Allow to filter lookup fields
 - "Go to Tenants management" now hidden for non-admin users
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

### Fixed Bugs: 
 - Model building error after entity removal

## [3.0.199](#3.0.199)
Release Date: 2019-03-28

### Fixed Bugs: 
 - Error creating Application Behaviours in System DataSource - Missing Runtime Location

### Implemented enhancements:

 - Roles based privilege management for Tenant Application Policy
 - Modeler: Allow to export and import templates
 - Create security permissions on Build instead of when the entity is created
 - Behaviours Accelerator - C# Get Entity behaviours

## [3.0.192](#3.0.192)
Release Date: 2019-03-22

### Fixed Bugs: 
 - Month Calendar: Same day rendering multiple times

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

### Fixed Bugs:
 - CSV export from list of external Connector Data Source

### Implemented enhancements:

 - Auto select the data source when there is one available

## [3.0.174](#3.0.174)
Release Date: 2019-02-06

### Fixed Bugs:
 - Can't control calendar form metadata: Review calendar form opening to wait for all components to load
 - Date selectors aren't opening near to the inputs
 - Allow to set details WebComponts as read-only
 

### Implemented enhancements:

 - Support a Data Sources with multiple runtimes (Breaking change - Required to update connector to 1.0.108 or higher and re-build model)
 - Behaviours - Add to the namespace the name of the Data Source and of the runtime location
 - Access to the user language in queries: @\_userLanguage parameter


## [3.0.170](#3.0.170)
Release Date: 2019-02-04

### Fixed Bugs:
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

### Fixed Bugs:
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

### Fixed Bugs:
 
 - Sidebar translations of top entries
 - WebComponent mapping selection, inside a container
 - Save button disabeling by temporary updated
 
### Implemented enhancements:

 - Allow to redirect to application address using JS extensibility
 - Allow to control the List "Add new" button state
 - Allow to call a function when the calendar form opens
 - Render Calendars in Dashboards


## [3.0.93](#3.0.93)
Release Date: 2018-12-12

### Fixed Bugs:
 
 - On Change C# behaviours triggered on edit
 
### Implemented enhancements:

 - Allow to control the state of form footer options (using UI extensibility)
 - Allow to pass list and list parameters to queries in UI Shared Reference attributes
 - Date elements: Add a button to clear the value in optional fields


## [3.0.90](#3.0.90)
Release Date: 2018-12-10

### Fixed Bugs:
 
 - 403 Error when using Calendar modal lookup


## [3.0.89](#3.0.89)
Release Date: 2018-12-10

### Implemented enhancements:

 - Calendar: Add "See all" option when there are too many entries in one day
 - Send list filters & sort conditions to external data sources data behaviours
 
### Fixed Bugs:
 
 - Column name translations in List filters working as intended 
 - "Before Save" Excepetions in UI Behaviours are now visible
 - List column break reviewed for large text inputs


## [3.0.85](#3.0.85)
Release Date: 2018-11-30

### Implemented enhancements:

 - Calendar element
 - UI Behaviours - Support async behaviours
 - Access to translations in UI behaviours
 
### Fixed Bugs:
 
 - Read only numeric fields input disabeling
 - List column break reviewed for large text inputs


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
