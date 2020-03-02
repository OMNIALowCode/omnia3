---
title: Native and External API Tutorial
keywords: omnia3
summary: "Learn all about native and external API communications, queries, lists and dashboards"
sidebar: omnia3_sidebar
permalink: omnia3_advancedtutorial.html
folder: omnia3
---

## 1. Introduction

Now that you have completed our [beginner tutorial](omnia3_beginnertutorial.html), whose result is a functional order management application, we'll now focus on advanced behaviour modeling, using native and external APIs, and an introduction to data analysis elements **Lists**, **Queries** and **Dashboards**.

In **3. Advanced Behaviours** area, we will explore how to comunicate with **OMNIA's native API**, in order to improve the user experience, and an **External API**. As a external API, [Discogs](https://www.discogs.com/developers/) was chosen for this example.

In point **4. Data analysis**, we will explore how to model new lists and how to create dashboards on OMNIA.

## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant and are logged in as a user with modeling privileges to this tenant.

It is necessary to have completed the steps in the  [Beginner tutorial](omnia3_beginnertutorial.html), as this tutorial builds upon it.

## 3. Advanced Behaviours

### Native API
 
1. Go to the **Modeler** and edit the previously modeled document *PurchaseOrder*. Create a new  **Attribute**  by clicking the button  ***Add new / Primitive***  on the top right side, and setting its  **Name** and **Type**  to  **SupplierName** and ***Text***, respectively. Set the attribute as **Read Only**.

    ![Modeler_Create_Document_Attribute](/images/tutorials/advanced/nativeAPITutorial-1.jpg)

2. Create a new ***Action Behaviour***  to fill the new attribute (on the *PurchaseOrder* document, go to tab **Entity Behaviours** and click on ***Add new / (Action / Change)***). Now let's use one of our development "Acelerators" to get our ***SupplierName*** from the **Agent**s attribute "**_name**". 
Set its name **GetSupplierName**, and **Supplier** as the attribute that triggers the behaviour:

    ![Acelerator_SelectionScreen](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/advanced/acelerators-selection.jpg)

    ![Acelerator_FilledFields](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/advanced/acelerators-getEntity-example.jpg)
 
 The output of the ***Get Entity C#*** acelerator should be as follow:

    ```C#
    if(string.IsNullOrEmpty(this.Supplier?.ToString()))
        return;

    // In order to prevent to invoke the API if the values were sent by the user
    if(
        this._Dto.HasPropertyChanged(nameof(this.SupplierName))  
     )
        return;

    var httpClient = this._Context.CreateApplicationHttpClient();
    var requestResult = httpClient.GetAsync($"Supplier/Default/{this.Supplier}").GetAwaiter().GetResult();

    if (!requestResult.IsSuccessStatusCode)
    throw new Exception($"Can't retrieve the entity '{this.Supplier}'");

    var entity = requestResult.Content.ReadAsAsync<SupplierDto>().GetAwaiter().GetResult();

    this.SupplierName = entity._name; 
    ```

3. Build & Deploy model

4. Go to **Application** area, and create a new **PurchaseOrder** document. Observe that, when **Supplier** is identified, the **SupplierName** is automatically retrieved.

### External API

1. Go to the **Modeler** and click on option **Data sources / System** to add references to this data source. Click on button **Add new > File Dependency** to add a new  **Behaviour Dependency**  for .NET assembly System.Net.Http

    ![Modeler Add_Dependency](/images/tutorials/advanced/Modeler-Add-Behaviour-Dependency.png)

2. Edit the previously modeled resource *Product*. Create a new  **Attribute**  by clicking the button  **Add new / Primitive**  on the top right side, and setting its  **Name** and **Type**  to  **Artist** and ***Text***, respectively. Set the attribute as **Read Only**.

3. Navigate to tab **Behaviour Namespaces** and add namespace System.Net.Http

    ![Modeler Add_Namespace](/images/tutorials/advanced/Modeler-Add-Behaviour-Namespace.png)

4. Create a new **Action Behaviour** to fill the new attribute (go to tab ***Entity Behaviours*** and click on ***Add new / Action***). Set ***GetRecordData*** as **Name**, ***_code*** as the attribute that triggers the behaviour, and paste the following code:

    ```C#
    var client = new HttpClient() {DefaultRequestHeaders = {}};
    client.DefaultRequestHeaders.Add("User-Agent", "OMNIA");

    string apiEndpoint = $"https://api.discogs.com/masters/{_code}";
    var requestResult = client.GetAsync(apiEndpoint).GetAwaiter().GetResult();

    string responseBody = requestResult.Content.ReadAsStringAsync().Result;

    Dictionary<string, object> responseDictionary = JsonConvert.DeserializeObject<Dictionary<string, object>>(responseBody);

    if (!requestResult.IsSuccessStatusCode)
    throw new Exception("Error on retrieving data from Discogs API: " + responseDictionary["message"].ToString() + " " + apiEndpoint);

    _name = responseDictionary["title"].ToString();

    if (responseDictionary.ContainsKey("artists")) {
        Newtonsoft.Json.Linq.JArray artists = (Newtonsoft.Json.Linq.JArray)responseDictionary["artists"];
                
        if (artists != null && artists.Count > 0) {
            Artist = artists[0]["name"].ToString();
        }
    }
    ```

5. Build & Deploy model

6. Go to **Application** area, and create a new **Product** resource. Observe that, when **Code** is identified (e.g. try with value 8540), the **Name** and **Artist** is automatically retrieved.

    ![Application_Create_Resource](/images/tutorials/advanced/Application-Create-Product.PNG)

## 4. Data Analysis

### Queries and Lists

1. On your **Modeler** area, go to ***Data analytics / Queries*** and click on button ***Add New*** to create a new query. Set **ProductsArtists_Query** as *Name* and ***Resource / Product*** as *Type*.

    ![Modeler_Create_Query](/images/tutorials/advanced/Modeler-Create-Query.PNG)

2. Now open your query and click on **Add New** to add columns to it. Add a column with Alias **Code** and Path **_code**.
    
3. Repeat previous step to add columns with alias **Name** and **Artist**, whose Path is **_name** and **artist**, respectively.

4. On top right side, click on button ***More options / Generate list*** to create a new list based on the given query.

    ![Modeler_Generate_List](/images/tutorials/advanced/Modeler-Generate-List.PNG)


### Dashboards

1. On your **Modeler** area, go to ***Data Analytics / Dashboards*** and click on button **Add New** to create a new dashboard. Set **Home** as Name, so that the dashboard is visible on application's homepage.

    ![Modeler_Create_Dashboard](/images/tutorials/advanced/Modeler-Create-Dashboard.PNG)

2. Click on button **Add List** to add lists to Dashboard. Set **ProductsList** as Name, **Products List** as Label, select **ProductsArtists_QueryList** (created previously) and position it in the first **Row** and **Column**, with **Size** six.

    ![Modeler_Add_List_Dashboard](/images/tutorials/advanced/Modeler-Add-List-Dashboard.png)

3. **Build & Deploy** the model.

4. Go to the application and check the homepage dashboard. Data for the products you have created will be visible.
