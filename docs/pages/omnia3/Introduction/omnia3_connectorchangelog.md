---
title: Connector Changelog
keywords: omnia3
summary: "OMNIA Connector Changelog"
sidebar: omnia3_sidebar
permalink: omnia3_connectorchangelog.html
folder: omnia3
toc: false
---

Visit our [Downloads](/omnia3_downloads.html#connector) page to get the latest version.

## [3.3.5](#3.3.5)
Release Date: 2020-07-23

### Bugs:
  - When installed as a Windows Service, connector fails to restart.
  - Logs spread across multiple locations.


## [3.3.2](#3.3.2)
Release Date: 2020-06-16

### Bugs:
  - `_Context.Operation.IsNew` is false at Before Save when creating a new document


## [3.3.1](#3.3.1)
Release Date: 2020-05-27

### Implemented enhancements: 
  - Concurrent request processing

    **In case you need to process one request at a time or the target system can't handle concurrency, make sure you use a [lock](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/lock-statement) around your code.**
    

### Bugs: 
  - Timeout when debugging cloud behaviours
  
  
## [3.3.0](#3.3.0)
Release Date: 2020-05-19

### Implemented enhancements: 
 - Upgrade to .NET Core 3.1 runtime

    This version has stability and performance improvements.

    For development/debug using Visual Studio, .NET Core 3.1 SDK must be installed.


**This version contains breaking changes.**
**Compatible with OMNIA Platform 3.3.**

## [3.2.3](#3.2.3)
Release Date: 2020-03-04


### Bugs:
 - Entities of external data sources are kept on browser cache and do not reflect changes

## [3.2.2](#3.2.2)
Release Date: 2020-03-02


### Bugs:
 - Changes on collections (add and remove lines) triggered by a onChangeBehaviour are not applied correctly
 - OnChange behaviours on collections are not always executed on edits


## [3.2.1](#3.2.1)
Release Date: 2020-01-31

**This version contains breaking changes.**
**Compatible with OMNIA Platform 3.2.**

### Implemented enhancements: 
 - [Compatibility with new Build Folder organization](/omnia3_modeler_developingbehaviours.html)
 

## [1.1.1](#1.1.1)
Release Date: 2019-11-22

**This version contains breaking changes**
Upgrade to this version to use the platform with a version higher than 3.1.0

### Implemented enhancements: 
 - Compliance with [RFC6749](https://tools.ietf.org/html/rfc6749#section-2.3.1)

## [1.0.192](#1.0.192)
Release Date: 2019-09-12

### Implemented enhancements: 
 - State Machines

## [1.0.191](#1.0.191)
Release Date: 2019-09-05

### Bugs: 
 - Error when debugging System behaviours or when an exception is throwed after an API request

## [1.0.187](#1.0.187)
Release Date: 2019-07-18

### Implemented enhancements: 
 - Caching in c# behaviours [(see here)](https://docs.omnialowcode.com/omnia3_modeler_behaviours.html#8-caching-in-behaviours)

## [1.0.184](#1.0.184)
Release Date: 2019-07-05

### Bugs: 
 - Can't compile behaviours when a File dependency, depends on an obfuscated dll.

## [1.0.182](#1.0.182)
Release Date: 2019-06-12

### Bugs: 
 - Add the missing reference to Microsoft.CSharp.dll in Visual Studio downloaded project. 

## [1.0.181](#1.0.181)
Release Date: 2019-06-06

### Implemented enhancements:
- Expand environment variables in file paths when looking for file dependencies

## [1.0.175](#1.0.175)
Release Date: 2019-05-07

### Bugs:

- Prevent concurrency issues on build download and compile

## [1.0.173](#1.0.173)
Release Date: 2019-05-02

### Implemented enhancements:

- Support Code/Expression Dependencies

## [1.0.172](#1.0.172)
Release Date: 2019-04-15

### Implemented enhancements:

- Attached mode to support Debug of Internal runtime behaviours

## [1.0.146](#1.0.146)
Release Date: 2019-03-28

### Implemented enhancements:

- Compile behaviours to .net 4.7.2 framework

## [1.0.135](#1.0.135)
Release Date: 2019-02-25

### Implemented enhancements:

- Enable Debugging experience through the Behaviour Server

## [1.0.120](#1.0.120)
Release Date: 2019-02-20

### Implemented enhancements:

  - Load .net System references without requiring the modeler to define them in the Data Source (Breaking change - Is required to remove .net System dependencies from the Data Source that is executing in the connector)

## [1.0.115](#1.0.115)
Release Date: 2019-02-19

### Implemented enhancements:

 - Connection stability improvements

