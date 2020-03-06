---
title: State Machine Tutorial
keywords: omnia3
summary: "Learn to create and apply state machines to an entity"
sidebar: omnia3_sidebar
permalink: omnia3_statemachine.html
folder: omnia3
---


## 1. Introduction

Now that you have completed the Beginner Tutorial, whose result is a functional order management application, this State Machines Tutorial will focus on the addition of Document states to our application's Purchase Order Document.

In this example, we’ll add three new states to our document, "Initial", "Review", "Approved" and "Denied". When a user submits a document it will adopt the "Review" state. If accepted, the document will move to the "Approved" state, if rejected, it will move to the "Rejected" state. 

To know more about how State Machines work, see our State Machine page.


## 2. Prerequisites

This tutorial assumes that you have created a OMNIA tenant, and are logged in as a user with modeling privileges to this tenant.

It is necessary to have completed the steps in the  [Beginner tutorial](https://docs.omnialowcode.com/omnia3_beginnertutorial.html), as this tutorial builds upon it.

## 3. State Machine

1. Go to the modeling area and access the option ***State Machines / Add New***

1.1. Click on the "Related to" field and select the option ***Document / Purchase Order***.
	![CreateStateMachine](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/create-state-machine.png)
	![NewStateMachine](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/new-state-machine.png)

1.2. Open the new "PurchaseOrderStateMachine" by clicking on it and use the "Add New" button to add the new "Review" state.
	![AddNewState](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/add-new-state.png)
	

1.3. Repeat the process to create the "Approved" and "Rejected" states, but in these states activate the options "Disable all attributes" and "Disable all operations":
	![AddNewStateApproved](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/add-new-state-approved.png)
	![AddNewStateRejected](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/add-new-state-rejected.png)

1.4. Let's remove the "Completed" state, since we're not going to use it, by simply accessing it and using the "Delete" option:
	![DeleteCompleted](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/delete-completed.png)

1.5. Now let's add the decisions that will trigger our document's state transitions:

1.5.1. Open the "Review" state (it will open on the "Decisions" tab by default), "Add New", fill its name as "Approve" and save it.
	![AddApprovedDecision](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/add-approved-decision.png)

1.5.2. Add another decision to the "Review" state, but this time name it "Reject" and make the decision commentary required:
	![AddRejectedDecision](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/add-rejected-decision.png)

1.6. Now let's finalize our state machine by adding Transitions:

1.6.1. Go back to your state machine, open the "Initial" state, go to the tab "Transitions" and "Add New":
	![InitialToReviewTransition](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/add-InitialToReview-transition.png)

1.6.2. Now go to the "Review" state, access the "Transitions" tab and let's add two new transitions:
	
- ReviewToApproved
	![ReviewToApproved](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/add-ReviewToApproved-transition.png)
	
- ReviewToRejected
	![ReviewToRejected](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/add-ReviewToRejected-transition.png)

This is what your State Machine should look like:
	![AddApprovedDecision](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/Finished-State-Machine.png)

1.7. Build and Deploy your model and visit your application

1.7.1. Create a new Purchase Order Document and submit it
	![AddNewDocument](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/add-new-document.png)

1.7.2. Now open that same document and approve it.
	![OpenReviewDocument](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/open-review-document.png)

This should be the look of your approved document:
	![AcceptedDocument](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/accepted-document.png)

1.7.3. Let's create another document, but this time reject it, instead of accepting it, and add the rejection commentary:
	![AddComentary](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/add-comentary.png)

1.7.4. Now open the rejected document and use the option "More Options" > "Show History". You should now see the comentary that rejected the document.
	![OpenHistoryTab](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/tutorials/statemachine/open-history-tab.png)

That's it, we've just created a new State Machine and added it to our Purchase Order Management.