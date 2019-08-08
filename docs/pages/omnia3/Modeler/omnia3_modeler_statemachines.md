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

After creating a new state machine, will be automatically created two states: _Initial_ (the State Machine's initial state) and _Completed_. 

Also, a new [_Enumeration_](omnia3_modeler_enumerations.html) will be created containing the existing states (this enumeration will be updated evertyme a state is added or removed). The _Enumeration_ will be named using the _State Machine_ name with the sufix "States" (e.g.: the State Machine to the entity _Customer_ will be named _CustomerStateMachine_ and the Enumeration _CustomerStateMachineStates_).

In the entity to which the State Machine was created, will be added two system attributes: ___state__ (to store the current state of the record) and ___assigned__ (to store to whom is assigned the entity in the current state).

### How to create a State?
__*State Machine / States*__

Accessing to the details of a _State Machine_ you can add a new state. To do that, in the _States_ list, select the option _Add new_ and define the following properties:
* __Name__: the name of the state (needs to be unique inside the state machine);
* __Description__: the textual explanation of the state's purpose (can be used as development documentation);
* __Is the initial state?__: if the state is the initial one or not;
* __Assign to (C# expression)__: a C# expression to define to whom will be assigned the record when it is in this state.

### How to define the initial state?
__*State Machine / States / State*__

In the details page of a _State Machine_, selecting one of the existing states is possible to change the _State Machine's_ initial state.

In the State's details page, select the option _Edit State_ and mark the property _Is the initial state?_.

Since a _State Machine_ can only have one, and only one, initial state, after marking a state as initial, the previous initial state will be unmarked. If you try to remove the initial state will get an error remembering you that you need one initial state.

### How to assign the entity to someone in a given State?
In the details page of a _State Machine_, selecting one of the existing states is possible to change to whom the _State's_ is assigned, using the property __Assign to (C# expression)__.

Everytime the entity enters in the _State_, the C# code expression provided in the _Assign to_ property is evaluated and the result is store in the system attribute ___assigned__.

### How to create a Decision?
__*State Machine / States / State / Decisions*__

A decision allows the users to take an action when the entity is in a specific state.

It's possible to define a set of allowed decisions in each state.
In order to do that, access the details page of a _State Machine_ and select a  state. In the _Decisions_ list, select the option _Add new_ and define the following properties:
* __Name__: the name of the decision (needs to be unique inside the state);
* __Description__: the textual explanation of the decision's purpose (can be used as development documentation);
* __Order__: an integer representing the order of the decision in the state.

_Note_: When a state has decisions, a new [_Enumeration_](omnia3_modeler_enumerations.html) is created to store the state's decisions. Everytime a decision is added or removed, the _Enumeration_ is updated.
The _Enumeration_ will be named using the _State Machine_ name, the _State_ name and the sufix "Decisions" (e.g.: the State Machine to the entity _Customer_ will be named _CustomerStateMachine_ and the Enumeration representing the decision of the state _Initial_ _CustomerStateMachineInitialDecisions_).

### How to create a Transition?
__*State Machine / States / State / Transitions*__

A transition describes a condition, that when is met, moves the entity from the current state to a new one.

It's possible to define a set of transitions in each state.
In order to do that, access the details page of a _State Machine_ and select a  state. In the _Transitions_ list, select the option _Add new_ and define the following properties:
* __Name__: the name of the transition (needs to be unique inside the state);
* __Description__: the textual explanation of the transition's purpose (can be used as development documentation);
* __Go to state__: the state to where the entity will be moved when the transition is successfully evaluated;
* __Evalution type__: the type of the evaluation - Automatic (based on a C# expression) or Decision (based on a user's decision);
* __Based on decision__: the decision used to evaluate if the transition should occur (if a C# expression is provided, the two conditions need to be true to the transition occur) - only available in the _Evaluation type_ "Decision";
* __Evaluate using the C# expression__: The C# expression used to evaluate if the transition should occur;
* __Order__: an integer representing the order of evaluation of the transition in the state.

### How to condition a Transition?
__*State Machine / States / State / Transitions*__

A transition can be conditioned using one of two methods: _Automatic evaluation_ or _Decision evaluation_.

__Automatic evaluation__:
The automatic evaluation only uses the C# code expression to decide if the transition will occur or not.

__Decision evaluation__:
The decision evaluation uses the user's decision and the C# code expression to decide if the transition will occur or not.
If the C# code expression is not provided, only the decision will be take in consideration.

To change the way how to evaluate a Transition, edit a transition (accessing to the state details, in the _Transitions_ list) and change the following properties to correspond to the model needs: __Evaluation type__, __Based on decision__ and __Evaluate using the C# expression__.

### How to manage State and Decision labels?
Each _State Machine_ has an [_Enumeration_](omnia3_modeler_enumerations.html) representing its _States_. 

The same way, each _State_ has an _Enumeration_ representing its _Decisions_.

In order, to change the labels of a _State_ or a _Decision_, it's only neccessary to change the label of the respective _Enumeration_.

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
