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

## 2. Model State Machine


### How to create a State Machine?
 
### How to create a State?

### How to define the initial state?

### How to create a Transition?

### How to condition transitions?

### How to assign the entity to someone in a given state?



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

}
```

## 4. State Machine UI Behaviours

### Accessing to user Decision
