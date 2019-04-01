---
title: Primavera (ERP) Connector Tutorial
keywords: omnia3
summary: "OMNIA Low-Code Development Platform - ERP (Primavera) as Data Source"
sidebar: omnia3_sidebar
permalink: omnia3_primaveraconnectortutorial.html
folder: omnia3
---

## 1. Introduction

Based on a simple Employee management scenario, this tutorial shows a real scenario of how easily OMNIA can use information from an external data source, using the Omnia connector to access data located on-premises. 

This tutorial is an advanced implementation of the [data sources tutorial](omnia3_datasourcetutorial.html) in order to understand how data sources work, please read [this section of the documentation](omnia3_modeler_datasources.html).

On the CRUD Operations tutorial area, we are going to evaluate how to interact with an external data source, by reading and manipulating its data.

As our custom data source, we are going to use the [PRIMAVERA ERP V9](https://pt.primaverabss.com).

## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant ([click here to see how](omnia3_tenantcreation.html)), and are logged in as a user with modeling privileges to this tenant. You must also have access to the management area to manage the connectors.

This tutorial also requires an access to [Primavera ERP](https://pt.primaverabss.com), on version 9. 

## 3. Create a new connector

1. Start by accessing the management area, by clicking the option "Go to Tenants management".

2. Through the left side menu, create a new connector by accessing the option ***Connectors / Add new***. Set its Code and Name as "TutorialConnector"

3. Select the connector, and a modal with connector data should be shown.

4. Now we are going to grant the connector access privileges for the tenant. Access the option ***Security / Roles***, and select Administration role for the tenant (the tenant code with prefix "Administration")

5. Click the button ***Add new*** to grant the connector user access to the tenant. The user can be retrieved on step 3, property "Client Username"

6. Now use these configurations to configure a connector in the machine with the Primavera ERP, following the [installation guide](omnia3_connector_install.html) and [configuration guide](omnia3_connector_configuration.html).

7. Start the configured connector.

## 4. CRUD operations

1. Access Omnia homepage, select the tenant where you are going to model and you will be redirected to the modeling area.

2. Through the left side menu, create a new Data Source by accessing the option ***Data Sources / Add new*** on the top right side. Set its Name as "*Primavera*", Behaviour Runtime and Data Access Runtime as *"External"*.

    ![Modeler create DataSource](/images/tutorials/primaveraconnector/Modeler-Create-DataSource.PNG)

3. Navigate to tab *Behaviour Dependencies*, and define a reference for Primavera assemblies:

    1. Interop.StdBE900.dll
    2. Interop.RhpBE900.dll
    3. Interop.IRhpBS900.dll
    4. Interop.ErpBS900.dll

    ![Modeler add reference](/images/tutorials/primaveraconnector/Modeler-Primavera-Add-Dependency.PNG)
    
4. Create a new Agent with name *"Employee"*, and set it as using the external data source *"Primavera"* that you created earlier.

    ![Modeler create Agent](/images/tutorials/primaveraconnector/Modeler-Create-Agent.PNG)

5. Navigate to tab *Behaviour Namespaces* and reference the following namespaces:

    1. Interop.StdBE900.dll
    2. Interop.RhpBE900.dll
    3. Interop.IRhpBS900.dll
    4. Interop.ErpBS900.dll
    
    ![Modeler Add Namespace](/images/tutorials/primaveraconnector/Modeler-Employee-Add-ERP-Namespace.PNG)

6. Navigate to tab *"[Data Behaviours](omnia3_modeler_datasources.html)"*, and define a behaviour to be executed on *"ReadList"*. This behaviour will be used for Query and List requests for this entity.

    Copy and paste the following code (*Remember to **change** the **```"USER"```** and **```"PASS"```** fields to your actual username and password.*):

    ```C#
    List<IDictionary<string, object>> employeesList = new List<IDictionary<string, object>>();
    ErpBS qbsERP = new ErpBS();
    
    qbsERP.AbreEmpresaTrabalho(EnumTipoPlataforma.tpEmpresarial, "DEMO", "USER", "PASS");
    
    StdBELista queryResults = qbsERP.Consulta($"SELECT Employees.EmployeesCount, Codigo, Nome FROM Funcionarios CROSS JOIN (SELECT Count(*) AS EmployeesCount FROM  Funcionarios) AS Employees ORDER BY Codigo OFFSET {(page - 1)*pageSize} ROWS FETCH NEXT {pageSize} ROWS ONLY");
    
    int numberOfRecords = Convert.ToInt32(queryResults.Valor("EmployeesCount").ToString());
    while (!queryResults.NoFim())
    {
    
        var employee = new Dictionary<string, object>() {
            { "_code", queryResults.Valor("Codigo").ToString()},
            { "_name", queryResults.Valor("Nome").ToString()}
        };
    
        employeesList.Add(employee);
        queryResults.Seguinte();
    }
    
    qbsERP.FechaEmpresaTrabalho();
    
    return (numberOfRecords, employeesList);
    ```

7. Create a new Data Behaviour for the operation *"Read"*, so that data is retrieved when an Employee is edited on OMNIA.

    Copy and paste the following code (*Remember to **change** the **```"USER"```** and **```"PASS"```** fields to your actual username and password.*):

    ```C#
    EmployeeDto dto = new EmployeeDto();
    ErpBS qbsERP = new ErpBS();
    
    qbsERP.AbreEmpresaTrabalho(EnumTipoPlataforma.tpEmpresarial, "DEMO", "USER", "PASS");
    StdBELista queryResults = qbsERP.Consulta($"SELECT Codigo, Nome, Email, Telefone FROM Funcionarios WHERE Codigo = '{identifier}'");
    
    if (!queryResults.Vazia())
    {
        dto._code = queryResults.Valor("Codigo").ToString();
        dto._name = queryResults.Valor("Nome").ToString()
    }
    else
    {
        throw new Exception($"Could not retrieve Employee with code '{identifier}'");
    }
    qbsERP.FechaEmpresaTrabalho();
    return dto;
    ```

8. On *"Data Behaviours"* of Agent Employee, define a behaviour, to be executed on *"Update"* (when an Employee is updated on OMNIA).

    Copy and paste the following code (*Remember to **change** the **```"USER"```** and **```"PASS"```** fields to your actual username and password.*):

    ```C#
    ErpBS bsERP = new ErpBS();
    bsERP.AbreEmpresaTrabalho(EnumTipoPlataforma.tpEmpresarial, "DEMO", "USER", "PASS");
    
    RhpBEFuncionario funcionario = bsERP.RecursosHumanos.Funcionarios.Edita(dto._code);
    
    funcionario.set_Nome(dto._name);
    
    bsERP.RecursosHumanos.Funcionarios.Actualiza(funcionario);
    
    bsERP.FechaEmpresaTrabalho();
    
    return dto;
    ```

9. Build & Deploy model

10. Go to the Application area.

11. Create a new instance of the Primavera data source, with code *"DEMO"* and with the Code of the Connector that you have created.

12. On left side menu, navigate to *Configurations / Employee*, identify the Primavera data source instance (DEMO) and check that the list is filled with data retrieved from Primavera.

13. Now you can List and Update Employees directly on your on-premise system, providing your connector is correctly configured and running.
