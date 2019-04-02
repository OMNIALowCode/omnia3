---
title: Connector Tutorial
keywords: omnia3
summary: "OMNIA Low-Code Development Platform - CSV File as Data Source"
sidebar: omnia3_sidebar
permalink: omnia3_connectortutorial.html
folder: omnia3
---

## 1. Introduction

Based on a simple Contact management scenario, this tutorial shows a case of how easily OMNIA can use information from an external data source, using the Omnia connector to access data located on-premises. 

This tutorial is an advanced implementation of the [data sources tutorial](omnia3_datasourcetutorial.html). In order to understand how data sources work, please read [this section of the documentation](omnia3_modeler_datasources.html).

For this CRUD Operations tutorial, we are going to show how to interact with an external data source, by reading and manipulating its data.

As our custom data source, we are going to use a CSV file with a list of Contacts.

## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant ([click here to see how](omnia3_tenantcreation.html)), and are logged in as a user with modeling privileges to this tenant. You must also have access to the management area to manage the connectors.

Please download this [Contacts.csv](/docs/tutorialPics/modelingTutorial/Contacts.csv), we'll be using it as a data source in this tutorial. 


## 3. Create a new connector

1. Start by accessing the management area, by clicking the option "Go to Tenants management".

2. Through the left side menu, create a new connector by accessing the option ***Connectors / Add new***. Set its Code and Name as "CSVConnector"

3. Select the connector, and a modal with connector data should be shown.

4. Now we are going to grant the connector access privileges for the tenant. Access the option ***Security / Roles***, and select Administration role for the tenant (the tenant code with prefix "Administration")

5. Click the button ***Add new*** to grant the connector user access to the tenant. The user can be retrieved on step 3, property "Client Username"

6. Now use these configurations to configure a connector on your local machine (or a Windows VM), following the [installation guide](omnia3_connector_install.html) and [configuration guide](omnia3_connector_configuration.html).

7. Start the configured connector.

## 4. CRUD operations

1. Access OMNIA homepage, select the tenant where you are going to model and you will be redirected to the modeling area.

2. Through the left side menu, create a new Data Source by accessing the option ***Data Sources / Add new*** on the top right side. Set its Name as "*CSVSource*", Behaviour Runtime and Data Access Runtime as *"External"*.

    ![Modeler create DataSource](/images/tutorials/connector/Modeler-Create-DataSource.PNG)

3. Create a new Agent with name *"Contact"*, and set it as using the external data source *"CSVSource"* that you created earlier.

    ![Modeler create Agent](/images/tutorials/connector/Modeler-Create-Agent.PNG)

4. On Agent *"Contact"*, create the following **Primitive** attributes:

    - BirthDate (Type: Date)

	![Modeler create BirthDate_attribute](/images/tutorials/connector/Modeler-Create-Attribute-BirthDate.PNG)

    - PhoneNo (Type: Text)

	![Modeler create PhoneNo_attribute](/images/tutorials/connector/Modeler-Create-Attribute-PhoneNo.PNG)

5. Navigate to tab *"[Data Behaviours](omnia3_modeler_datasources.html)"*, and define a behaviour to be executed on *"ReadList"*. This behaviour will be used for Query and List requests for this entity.

    Remember to **change** the variable **```filePath```** and **```csvSplitChar```** with your csv file full path and the character configured as the CSV column delimiter.

    Copy and paste the following code:
    ```C#
    List<IDictionary<string, object>> listData = new List<IDictionary<string, object>>();
    
    string filePath = @"C:\temp\Contacts.csv";
    char csvSplitChar = ';';
    
    int numberOfRecords = 0;
    using (var reader = new System.IO.StreamReader(filePath))
    {
        while (!reader.EndOfStream)
        {
            var line = reader.ReadLine();
            var values = line.Split(csvSplitChar);
            Dictionary<string, object> contactData = new Dictionary<string, object>();
            if (values.Length > 1)
            {
                contactData.Add("_code", values[0]);
                contactData.Add("_name", values[1]);
                numberOfRecords++;
                listData.Add(contactData);
            }
        }
    }
    
    return (numberOfRecords, listData);
    ```

6. Create a new Data Behaviour for the operation *"Read"*, so that data is retrieved when a Contact is edited on OMNIA.

    Remember to **change** the variable **```filePath```** and **```csvSplitChar```**  with your csv file full path and the character configured as the CSV column delimiter.

    Copy and paste the following code:

    ```C#
    string filePath = @"C:\temp\Contacts.csv";
    char csvSplitChar = ';';
    
    ContactDto contact = new ContactDto();
    using (var reader = new System.IO.StreamReader(filePath))
    {
 	    while (!reader.EndOfStream)
 	    {
            var line = reader.ReadLine();
            var values = line.Split(csvSplitChar);
            var valuesLen = values.Length;
            if (values[0].Equals(identifier, System.StringComparison.InvariantCultureIgnoreCase)) {
                           
                contact._code = values[0];
                contact._name = values[1];
                if (valuesLen > 2)
                {
                    DateTime birthDate;
                    if (DateTime.TryParse(values[2], out birthDate)) {
                        contact.BirthDate = birthDate;
                    }
                }
            if (valuesLen > 3)
                contact.PhoneNo = values[3];
            }
        }
    }
    
    return contact;
    ```

7. On *"Data Behaviours"* of Agent Contact, define a behaviour, to be executed on *"Update"* (when a Contact is updated on OMNIA). 

    Remember to **change** the variable **```filePath```** and **```csvSplitChar```**  with your csv file full path and the character configured as the CSV column delimiter.

    Copy and paste the following code:

    ```C#
    ContactDto contact = new ContactDto();
    string fileContent = "";
    string filePath = @"C:\temp\Contacts.csv";
    char csvSplitChar = ';';
    string contactDetails = $"{dto._code}{csvSplitChar}{dto._name}{csvSplitChar}{dto.BirthDate}{csvSplitChar}{dto.PhoneNo}";
    
    using (var reader = new System.IO.StreamReader(filePath))
    {
 	    while (!reader.EndOfStream)
        {
            var line = reader.ReadLine();
            var values = line.Split(csvSplitChar);
            var valuesLen = values.Length;
            if (!values[0].Equals(identifier, System.StringComparison.InvariantCultureIgnoreCase)) {
                fileContent+= "\n"+line;						
            }else{
			    fileContent+= "\n"+contactDetails;
		    }
        }								
    }
    			
    System.IO.File.WriteAllText(filePath, fileContent);
    			
    return contact;
    ```

8. On *"Data Behaviours"* of Agent Contact, define a behaviour, to be executed on *"Create"* (when a Contact is updated on OMNIA). 

    Remember to **change** the variable **```filePath```** and **```csvSplitChar```**  with your csv file full path and the character configured as the CSV column delimiter.

    Copy and paste the following code:

    ```C#
    string filePath = @"C:\temp\Contacts.csv";
    char csvSplitChar = ';';
    string contactDetails = $"\n{dto._code}{csvSplitChar}{dto._name}{csvSplitChar}{dto.BirthDate}{csvSplitChar}{dto.PhoneNo}";

    if (System.IO.File.Exists(filePath))
    {
        System.IO.File.AppendAllText(filePath, contactDetails);
    }

    return dto;
    ```
    
9. On *"Data Behaviours"* of Agent Contact, define a behaviour, to be executed on *"Delete"* (when a Contact is deleted on OMNIA). 

    Remember to **change** the variable **```filePath```** and **```csvSplitChar```**  with your csv file full path and the character configured as the CSV column delimiter.

    Copy and paste the following code:

    ```C#
    ContactDto contact = new ContactDto();
    string fileContent = "";
    string filePath = @"C:\temp\Contacts.csv";
    char csvSplitChar = ';';
    
    using (var reader = new System.IO.StreamReader(filePath))
    {
 	    while (!reader.EndOfStream)
        {
            var line = reader.ReadLine();
            var values = line.Split(csvSplitChar);
            var valuesLen = values.Length;
            if (!values[0].Equals(identifier, System.StringComparison.InvariantCultureIgnoreCase)) {
                fileContent+= "\n"+line;						
            }
        }								
    }
    			
    System.IO.File.WriteAllText(filePath, fileContent);
    			
    return true;
    ```

10. Build & Deploy model

11. Go to the Application area.

12. Create a new instance of the CSVSource data source, with code *"LOCAL"* and with the Code of the Connector (CSVConnector) that you have created.

13. On left side menu, navigate to *Configurations / Contact*, identify the CSVSource data source instance (LOCAL) and check that the list is filled with data retrieved from CSVSource.

14. Now you can List and Update Contacts directly on your on-premise system, providing your connector is correctly configured and running.
