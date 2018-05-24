---
title: OMNIA Data Source Tutorial
keywords: omnia3
summary: "OMNIA Platform 3.0 data source management"
sidebar: omnia3_sidebar
permalink: omnia3_datasourcetutorial.html
folder: omnia3
---

## 1. Introduction

Based on a simple Employee management scenario, this tutorial shows how easy can Omnia use information from different data sources.

On the first tutorial area (CRUD Operations), we are going to evaluate how to interact with an external data source, by reading and manipulating its data. On the second area (External data sources data on Omnia), we are going to focus on the use of data source information on Omnia entities. 

As our custom data source, we are going to use a free API named [ReqRes](https://reqres.in/), that simulates real time CRUD operations, based on a user management scenario

Please notice that, since this is only a simulation, no actual data is manipulated (written, updated or removed) on REQRES system. 


## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant, and are logged in as a user with modeling privileges to this tenant.

If you do not have a tenant yet, please follow the steps of the [Tenant Creation tutorial](http://docs.numbersbelieve.com/omnia3_tenantcreation.html).

## 3. CRUD operations

1. Start by selecting the tenant where you are going to model, and you will be redirected to the modeling area.

    ![Homepage_Dashboard](http://funkyimg.com/i/2DVGv.png)

2. Through the left side menu create a new Data Source by accessing the option Data Sources / Create new on the top right side. Set its Name as "ExternalAPI", behaviour runtime as Internal and its Data access runtime as External.

    ![Modeler_Create_DataSource](https://raw.githubusercontent.com/numbersbelieve/omnia3/master/docs/tutorialPics/modelingTutorial/Modeler-Create-DataSource.PNG)
    
3. Create a new Agent "Employee", and set it as using the external data source "ExternalAPI"

    ![Modeler_Create_DataSource](https://raw.githubusercontent.com/numbersbelieve/omnia3/master/docs/tutorialPics/modelingTutorial/Modeler-Create-Agent-Employee.PNG)

4. On Agent Employee, navigate to tab "Data Behaviours", and define a behaviour to be executed on "Create". This behaviour simulates a POST request to the external Application. Copy and paste the following code:

    ````
    {% raw %}
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
      {% endraw %}
    ````

5. On "Data Behaviours" of Agent Employee, define a behaviour, to be executed on "Delete" (when a Employee is deleted). Copy and paste the following code:


    ````
    {% raw %}
    var client = new System.Net.Http.HttpClient();
    
    string apiEndpoint = $"https://reqres.in/api/users/{identifier}";

    var requestResult = client.DeleteAsync(apiEndpoint).GetAwaiter().GetResult();

    string responseBody = requestResult.Content.ReadAsStringAsync().Result;

    if (!requestResult.IsSuccessStatusCode)
      throw new Exception("Error on removing Employee: " + responseBody);

    return true;
    {% endraw %}
    ````

6. Create a new Data Behaviour for operation "Read", so that data is retrieved when a Employee is edited. Copy and paste the following code:

    ````
   {% raw %}
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
    {% endraw %}
    ````

7. Create a new Data Behaviour for operation "ReadList", so that data is retrieved when Employees list is requested. Copy and paste the following code:

    ````
  {% raw %}
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
      var line = new Dictionary<string, object>()
      {{"_code", employee["id"]}, {"_name", employee["first_name"] + " " + employee["last_name"]}};
      employeesList.Add(line);
    }

    return (responseData.Count, employeesList);
  {% endraw %}
    ````

8. Create a new Data Behaviour for operation "Update", so that data is retrieved when a single Employee is updated. Copy and paste the following code:

    ````
    {% raw %}
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
    {% endraw %}
    ````

9. Build the model

10. On Application area, create a new instance of the ExternalAPI data source, with code "ReqRes"

    ![Application-Create-DataSource](https://raw.githubusercontent.com/numbersbelieve/omnia3/master/docs/tutorialPics/modelingTutorial/Application-Create-DataSource.PNG)
    
11. On left side menu, navigate to Configurations / Employee, and check that the list is filled with data retrieved from the external data source

    ![Application_List_DataSource](https://raw.githubusercontent.com/numbersbelieve/omnia3/master/docs/tutorialPics/modelingTutorial/Application-List-External-DataSource.PNG)
    
    
## 4. External data sources data on Omnia

1. Go to modeling area

2. Create a new GenericEntity "Department"

3. Add a new attribute by clicking on button Add new. Set its Code as DataSource, Type as Data Sources / ExternalAPI

4. Add another attribute that represents the Employee. Set its Code as Employee, Type as Agent / Employee, and ExternalAPI on Uses data source from attribute

5. Build the model

6. On Application area, create a new instance of the Department, and check that, after identifying the data source, Employees from that data source are now available for selection