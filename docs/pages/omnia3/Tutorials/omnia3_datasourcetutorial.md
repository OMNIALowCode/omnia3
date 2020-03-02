---
title: Data Source Tutorial
keywords: omnia3
summary: "External API as a Data Source"
sidebar: omnia3_sidebar
permalink: omnia3_datasourcetutorial.html
folder: omnia3
---

## 1. Introduction

As a continuation of our [Application Behaviours Tutorial](omnia3_applicationbehaviourstutorial.html), this tutorial shows how easily OMNIA can use and combine information from different data sources. In order to understand how this works, please read [this section of the documentation](omnia3_modeler_datasources.html).

On the first tutorial area (CRUD Operations), we are going to evaluate how to interact with an external data source, by reading and manipulating its data. On the second area (Add Employee Selection to Purchase Document), we are going to focus on the application of the new developed elements to our existing document, to mimic a real world scenario of attribution of a document to an employee. 

As our custom data source, we are going to use a free API named [ReqRes](https://reqres.in/), that simulates real time CRUD operations, based on a user management scenario.

Please notice that, since this is only a simulation, no actual data is manipulated (written, updated or removed) on REQRES's system. However, the code shown will be easily convertible to real-world scenarios. 


## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant, and are logged in as a user with modeling privileges to this tenant.

If you do not have a tenant yet, please follow the steps of the [Tenant Creation tutorial](omnia3_tenantcreation.html).

## 3. CRUD operations

1. Start by selecting the tenant where you are going to model, and you will be redirected to the modeling area (if you only have one tenant, redirection will be automatic).

    ![Homepage_Dashboard](/images/tutorials/beginner/Modeler-Homepage.PNG)

2. Through the left side menu, create a new Data Source by accessing the option ***Data Sources / Create new*** on the top right side. Set its *Name* as "ExternalAPI", Behaviour Runtime as Internal and its Data Access Runtime as External. Leave it as not requiring a connector.

    ![Modeler_Create_DataSource](/images/tutorials/datasource/Modeler-Create-DataSource.PNG)

3. Navigate to tab **Behaviour Dependencies** and add a new **File Dependency** reference to .NET assembly System.Net.Http

    ![Modeler_Add_Dependency](/images/tutorials/datasource/DataSourceTutorial-3.jpg)

4. Create a new Agent with *Name* "Employee", and set it as using the external data source "ExternalAPI" that you created earlier.

    ![Modeler_Create_Agent](/images/tutorials/datasource/Modeler-Create-Agent-Employee.PNG)

5. Navigate to tab **Behaviour Namespaces** and add a reference to namespace System.Net.Http

    ![Modeler_Add_Namespace](/images/tutorials/datasource/DataSourceTutorial-5.jpg)
    
6. Still on *Agent* **Employee**, navigate to tab "Data Behaviours", and define a behaviour to be executed on "Create". This behaviour will be used to perform a POST request to the external Application when we create an instance of the Employee on the OMNIA platform. Copy and paste the following code:


	```C#

		var client = new System.Net.Http.HttpClient();

		string apiEndpoint = $"https://reqres.in/api/users/";

		var body = new
		{
		code = dto._code,
		name = dto._name
		};

		var jsonBody = JsonConvert.SerializeObject(body);
		var httpContent = new System.Net.Http.StringContent(jsonBody, System.Text.Encoding.UTF8, "application/json");

		var requestResult = client.PostAsync(apiEndpoint, httpContent).GetAwaiter().GetResult();

		string responseBody = requestResult.Content.ReadAsStringAsync().Result;

		if (!requestResult.IsSuccessStatusCode)
		throw new Exception("Error on creating contact: " + responseBody);

		var response = JsonConvert.DeserializeObject<Dictionary<string, object>>(responseBody);

		EmployeeDto employeeResponse = new EmployeeDto();
		employeeResponse._code = response["code"].ToString();
		employeeResponse._name = response["name"].ToString();
		return employeeResponse;

	```


7. On "Data Behaviours" of Agent Employee, define a behaviour, to be executed on "Delete" (when a Employee is deleted on OMNIA). Copy and paste the following code:


	```C#

		var client = new System.Net.Http.HttpClient();

		string apiEndpoint = $"https://reqres.in/api/users/{identifier}";

		var requestResult = client.DeleteAsync(apiEndpoint).GetAwaiter().GetResult();

		string responseBody = requestResult.Content.ReadAsStringAsync().Result;

		if (!requestResult.IsSuccessStatusCode)
			throw new Exception("Error on removing Employee: " + responseBody);

		return true;

	```


8. Create a new Data Behaviour for the operation "Read", so that data is retrieved when a Employee is edited on OMNIA. Copy and paste the following code:


	```C#

		var client = new System.Net.Http.HttpClient();
		string apiEndpoint = $"https://reqres.in/api/users/{identifier}";

		var requestResult = client.GetAsync(apiEndpoint).GetAwaiter().GetResult();

		string responseBody = requestResult.Content.ReadAsStringAsync().Result;
		if (!requestResult.IsSuccessStatusCode)
			throw new Exception("Error on creating contact: " + responseBody);

		var response = JsonConvert.DeserializeObject<Dictionary<string, object>>(responseBody);
		var responseData = JsonConvert.DeserializeObject<Dictionary<string, object>>(response["data"].ToString());

		EmployeeDto employeeResponse = new EmployeeDto();
		employeeResponse._code = responseData["id"].ToString();
		employeeResponse._name = $"{responseData["first_name"].ToString()} {responseData["last_name"].ToString()}";

		return employeeResponse;

	```


9. Create a new Data Behaviour for the operation "ReadList", so that data is retrieved when a list of Employees is requested. Copy and paste the following code:

	```C#

		var client = new System.Net.Http.HttpClient();
		string apiEndpoint = $"https://reqres.in/api/users?page={page}";

		var requestResult = client.GetAsync(apiEndpoint).GetAwaiter().GetResult();

		string responseBody = requestResult.Content.ReadAsStringAsync().Result;

		if (!requestResult.IsSuccessStatusCode)
			throw new Exception("Error on creating contact: " + responseBody);

		var response = JsonConvert.DeserializeObject<Dictionary<string, object>>(responseBody);
		var responseData = JsonConvert.DeserializeObject<List<Dictionary<string, object>>>(response["data"].ToString());

		List<IDictionary<string, object>> employeesList = new List<IDictionary<string, object>>();

		foreach (var employee in responseData)
		{
		  var line = new Dictionary<string, object>(){
			  {"_code", employee["id"]}, {"_name", employee["first_name"] + " " + employee["last_name"]}
		  };
		  employeesList.Add(line);
		}

		return (responseData.Count, employeesList);
	```
NOTE: in this scenario, we are ignoring the query sent by the user when obtaining the list. In real world scenarios, you will want to change the query to the external system and/or the returned response, according to the parameters sent by the user.

10. Create a new Data Behaviour for the operation "Update", so that data is retrieved when an Employee is updated on OMNIA (i.e., edited and saved). Copy and paste the following code:


	```C#

		var client = new System.Net.Http.HttpClient();
		string apiEndpoint = $"https://reqres.in/api/users/{dto._code}";

		var body = new
		{
		code = dto._code,
		name = dto._name
		};

		var jsonBody = JsonConvert.SerializeObject(body);

		var httpContent = new System.Net.Http.StringContent(jsonBody, System.Text.Encoding.UTF8, "application/json");

		var requestResult = client.PutAsync(apiEndpoint, httpContent).GetAwaiter().GetResult();
		string responseBody = requestResult.Content.ReadAsStringAsync().Result;

		if (!requestResult.IsSuccessStatusCode)
			throw new Exception("Error on creating contact: " + responseBody);
		
		var response = JsonConvert.DeserializeObject<Dictionary<string, object>>(responseBody);

		EmployeeDto employeeResponse = new EmployeeDto();
		employeeResponse._code = response["code"].ToString();
		employeeResponse._name = response["name"].ToString();

		return employeeResponse;

	```


11. Build & Deploy model

12. On Application area, create a new instance of the ExternalAPI data source (Configurations > ExternalAPI), with code "ReqRes".

    ![Application-Create-DataSource](/images/tutorials/datasource/Application-Create-DataSource-Instance.PNG)
    
13. On left side menu, navigate to Configurations / Employee, and check that the list is filled with data retrieved from the external data source.

    ![Application_List_DataSource](https://raw.githubusercontent.com/numbersbelieve/omnia3/master/docs/tutorialPics/modelingTutorial/Application-List-External-DataSource.PNG)
    
    
## 4. Add Employee to Purchase Document

1. To add an Employee (Agent) to our Purchase Document and assign a user responsible for it we'll need to go back to the **Modeler** and add three new attributes to our Purchase Order Document. Access the document and create the following attributes:
	
	*Reference Attribute* for External API
	- **Name**: *ExternalAPI*
	- **Type**: *Data Source > External API*
	
	
	*Reference Attribute* for "Employee"
	- **Name**: *Employee*
	- **Type**: *Agent > Employee*
	- **Data Source**: *ExternalAPI*
	
	
	*Primitive Attribute* for Employee Name
	- **Name**: *EmployeeName*
	- **Type**: *Text*
	- **is read only?**: *Yes*
	- **Label**: *Ordered by employee:* (go to "User Interface" tab to change labels)


2. Now let's add an entity behaviour (OnChange - Employee) to our document, so that our employee selection fills the "EmployeeName" field automatically. Select the "Get Entity" acelerator and make sure you have the following configuration:

	![Acelerator_GetEntity_ChangeEmployee](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/datasource/getentityDataSource_onChangeEmployee.jpg)
	- **Entity Behaviour Name**: *"OnChange_Employee"*
	- **Output Acelerator Code**:
	
        ```C#
	   // Code generated by an accelerator (you can change it if you need)
	   // The following code invokes the API to retrieve the data of an entity and set the values in the current entity
	   if(string.IsNullOrEmpty(this.Employee?.ToString()))
    	   return;

	   // In order to prevent to invoke the API if the values were sent by the user
	   if(
    	   this._Dto.HasPropertyChanged(nameof(this.EmployeeName))  
	   )
    	   return;

	   var httpClient = this._Context.CreateApplicationHttpClient();
	   var requestResult = httpClient.GetAsync($"Employee/{this.ExternalAPI}/{this.Employee}").GetAwaiter().GetResult();

	   if (!requestResult.IsSuccessStatusCode)
    	   throw new Exception($"Can't retrieve the entity '{this.Employee}'");

	   var entity = requestResult.Content.ReadAsAsync<EmployeeDto>().GetAwaiter().GetResult();

	   this.EmployeeName = entity._name; 
         ```

3. Build&Deploy and go to your application, create a new Purchase Order Document, select the available External API, and select one of the three available employees. Check that the "Ordered by employee:" field fills automatically, as demonstrated in the image bellow:

	![DataSources_Tutorial_End](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/datasource/dataSources_ending.jpg)

Now that you know how to use Data Sources, we recommend you to take a look at [this tutorial](omnia3_primaveraconnectortutorial.html) where you will learn how to expose an on-premise Data Source to OMNIA.
