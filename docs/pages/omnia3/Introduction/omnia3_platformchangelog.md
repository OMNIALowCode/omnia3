---
title: Platform Changelog
keywords: omnia3
summary: "OMNIA Platform Changelog"
sidebar: omnia3_sidebar
permalink: omnia3_platformchangelog.html
folder: omnia3
---

Visit our [Downloads](/omnia3_downloads.html#platform) page to get the latest version.

## [3.0.244](#3.0.244)
Release Date: 2019-05-07

### Fixed Bugs: 
 - GetEntity Accelerator: Default data source instancing for external data source entities
 - Required OMNIA \_code validation rules for external data source entities 
 - After Save retries with wrong build version

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
