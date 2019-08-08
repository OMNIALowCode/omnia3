---
title: State Machines
keywords: omnia3
summary: "State Machines"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_statemachines.html
folder: omnia3
---

## 1. Introduction

OMNIA Platform enables you to model a [finite-state machine (FSM)](https://en.wikipedia.org/wiki/Finite-state_machine) to describe the states and transitions that occur during the entity lifetime.

The State Machine can change from one state to another in response to some external inputs. The change from one state to another is called a transition. A State Machine is defined by a list of its states and transitions.

## 2. Model State Machines
By choosing *__State Machines__* in the sidebar, you will have access to the _State Machines'_ management screen, in which will be presented the existing data of the model.

### How to create a State Machine?
Select the option _Add new_ and define the following properties:
* __Related to__: the entity that will be managed using the State Machine;
* __Description__: a textual explanation of this State Machine(can be used as development documentation).

After creating a new state machine, will be automatically created two states: _Initial_ (the State Machine's initial state) and _Completed_. Also, a new [_Enumeration_](omnia3_modeler_enumerations.html) will be created containing the existing states (this enumeration will be updated evertyme a state is added or removed).

### How to create a State?
__*State Machine / States*__

Accessing to the details of a _State Machine_ you can add a new state. To do that, in the _States_ list, select the option _Add new_ and define the following properties:
* __Name:__ the name of the state (needs to be unique inside the state machine);
* __Description:__: the textual explanation of the state's purpose (can be used as development documentation);
* __Is the initial state?:__ if the state is the initial one or not;
* __Assign to (C# expression)__: a C# expression to define to whom will be assigned the record when it is in this state.

### How to define the initial state?
__*State Machine / States / State*__

In the details page of a _State Machine_, selecting one of the existing states is possible to change the _State Machine's_ initial state.

In the State's details page, select the option _Edit State_ and mark the property _Is the initial state?_.

Since a _State Machine_ can only have one, and only one, initial state, after marking a state as initial, the previous initial state will be unmarked. If you try to remove the initial state will get an error remembering you that you need one initial state.

### How to create a Transition?

### How to condition transitions?

### How to create a Decision?

### How to assign the entity to someone in a given state?

### How to manage State and Decision Labels


## 3. State Machine Entity Behaviours

### Project structure

In the behaviours project, you will find in the Entity folder a file with the name _"{Entity}.StateMachine.cs"_ (example: _Customer.StateMachine.cs_).
The state machine definition is in this C# class, side by side with the entity Operations class.

In the _StateMachine.cs_ file you will find the following methods:

 - **EvaluateStateTransitions:** Used by the platform to decide the next state. This method can't be changed and is a representation of the modeled State Machine.
 - **EvaluateStateTransition_{State}_{TransitionName}:** Transition boolean expression method to decide if the transition should take place. The data from the current entity can be accessed since this is a method of the class.
 - **AssignTo_{State}:** Assign expression method to decide the value of the _\_assing_ attribute when the entity enters in a given state. The data from the current entity can be accessed since this is a method of the class.

### The state machine in the context of the entity lifecycle

The evaluation of the State Machine happens immediately before the Platform invokes the Before Save behaviours.

### Accessing to user Decision

In the context of entity behaviours, the modeler can access to the Decision taken through the Context using `_Context.Operation.Decision`. Example:

```c#
if("Accept".Equals(_Context.Operation.Decision))
{
    ...
}
```

## 4. State Machine UI Behaviours

When a user selects a decision, the _Save_ action is performed. When the _BeforeSave_ behaviour is executed it is possible to use the user's decision in the JavaScript code.

### Accessing to user Decision
Accessing the context, it's possible to know the decision the user has selected.

In the following sample is shown how to use the decision value in a condition.

```JavaScript
if(this._context.operation.decision === 'Accept'){
    ...
}
```
