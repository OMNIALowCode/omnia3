---
title: Best Practices
keywords: lowcode web app development best practices
summary: "All the best modeling practices of web app development with the OMNIA Platform."
sidebar: omnia3_sidebar
permalink: omnia3_modeler_bestpractices.html
folder: omnia3
---


## 1. Introduction

Here you'll find a list of recommendations that you should follow when modelling an application using OMNIA. It's a group of best practices based on our experience collected from application development.


## 2. Best Practices

### Descriptive naming

Use meaningful names for modelled artifacts. The name should tell you why it exists and what it does.

### Use ETag when consuming the API

OMNIA Web API uses Optimistic Concurrency handling. To take advantage of if it, you should handle the [ETag HTTP Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag).
Read here to know more: [Perform conditional operations using the Web API](https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/webapi/perform-conditional-operations-using-web-api).

### Filter behaviour execution to the desired Action

Behaviours can be executed in the sequence of multiple actions. For example, an After Save can be triggered by a Create, Update or Delete. If you want to only execute the code in a given action you should apply a condition at the beginning of the behaviour.

**Example to only execute the code if the operation is Create or Update:**

```
    if (_Context.Operation.Action != Action.EntityCreate &&
        _Context.Operation.Action != Action.EntityUpdate)
    return await Task.FromResult(AfterSaveMessage.Empty);
    
    (...)
```

### Integration: idempotent requests

Networks are unreliable, so when integrating multiple systems, it's a best practice to ensure that the requests are idempotent. A request is idempotent if it can be called multiple times without producing additional side-effects after the first call.

To know more about idempotency:

 - https://stripe.com/en-pt/blog/idempotency
 - https://docs.microsoft.com/en-us/azure/architecture/microservices/design/api-design#idempotent-operations


### Application Behaviours security

The authorization to execute a given application behaviour should be implemented in the Application Behaviour.
Information like the current Role or Username can be accessed from the `Context`.

### Round Calculated decimal attributes 

Decimal attributes that are calculated on C# behaviours should be rounded to match the number of decimal cases defined on UI.


```
    this.Average = Decimal.Round(this.Amount / this.Quantity, 2);
```

### C# - Use async/await when is possible

When working with c# Tasks using ".GetAwaiter().GetResult()", ".Result" or ".Wait()" to get the result can cause [deadlocks or thread pool starvation](https://gsferreira.com/archive/2020/08/avoid-getawaiter-getresult-at-all-cost/). So, it's recommended to use async/await all way down.

In cases like Initialize behaviours or Action/Change behaviours, you can't use async/await. In these cases, you should extract async methods to Code Dependencies and use "GetAwaiter().GetResult()" just once to wait for that Code Dependency.





