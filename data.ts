import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Global Container's Sales Team has noticed that when exchange rates are updated, opportunity amounts recorded in additional currencies change. How can a Salesforce Administrator avoid having opportunity amounts on closed opportunities change when exchange rates are updated?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Lock the amount on the opportunity record" },
      { id: "B", text: "Enable 'Advanced Currency Management' and set dated exchange rates" },
      { id: "C", text: "Update the exchange rate on a monthly basis" },
      { id: "D", text: "Opportunity amounts will always display with the latest exchange rate" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 2,
    text: "Ethan Hunt is a Salesforce Administrator. During a meeting with the support team, he received a request to delete a number of cases. What would he have communicated regarding the impact of deleting cases?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "All related events, tasks, case comments, attachments, associated solutions, contacts, and accounts are deleted." },
      { id: "B", text: "All related events, tasks, case comments, attachments, and associated solutions are deleted." },
      { id: "C", text: "All related events, tasks, case comments, and attachments are deleted." },
      { id: "D", text: "Cases can never be deleted." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 3,
    text: "A workflow rule is being used to update a parent record using a cross-object field update when the related child record is modified. Which of the following are valid statements regarding the objects that are supported in cross-object field updates?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "All standard objects that are children of standard objects in a master-detail relationship are supported." },
      { id: "B", text: "All standard objects are supported for cross-object field updates from custom objects." },
      { id: "C", text: "Some standard objects are supported for cross-object field updates from custom objects." },
      { id: "D", text: "All custom objects that are children of custom objects in a master-detail relationship are supported." }
    ],
    correctAnswers: ["C", "D"]
  },
  {
    id: 4,
    text: "Which of the following business data can be represented by the Salesforce Case object?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "A marketing project that is tracked and managed in Salesforce" },
      { id: "B", text: "A sales deal that is tracked and managed in Salesforce" },
      { id: "C", text: "Detailed description of a customer issue and resolution of the issue" },
      { id: "D", text: "Description of a customer feedback, problem, or question" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 5,
    text: "The sales users of Cosmic Enterprises offer more incorrect data updates in Salesforce. In addition, inbound integration errors sometimes cause data corruption. The company is looking for a solution that can generate automatic backups and quickly restore data when such data incidents occur. It should support daily incremental backup of custom and standard objects' records. Which Salesforce product should a data architect recommend for this requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Salesforce Backup" },
      { id: "B", text: "Data Cloud" },
      { id: "C", text: "Data Export Service" },
      { id: "D", text: "Data Loader" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 6,
    text: "The CIO of a technology company has directed the Salesforce Administrator to enable single sign-on with delegated authentication for the org. Which of the following are the benefits of delegated authentication?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "It can be configured to use a stronger form of user authentication, such as integration with a secure identity provider" },
      { id: "B", text: "It applies to all users once enabled" },
      { id: "C", text: "It allows the sending of authentication and authorization data between affiliated but unrelated web services" },
      { id: "D", text: "It can make the login page private and accessible only inside a corporate firewall" }
    ],
    correctAnswers: ["A", "D"]
  },
  {
    id: 7,
    text: "Which of the following can be used to add or update Campaign Members from the Campaign record page?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Data Import Wizard" },
      { id: "B", text: "Campaign Update Wizard" },
      { id: "C", text: "Custom Report" },
      { id: "D", text: "Add/Update Members button" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 8,
    text: "Which field type would be appropriate to use for a requirement to record the opening and closing hours for store locations?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Date/Time" },
      { id: "B", text: "Time" },
      { id: "C", text: "Hours" },
      { id: "D", text: "Business Hours" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 9,
    text: "A customer service manager would like to assign cases automatically to the most appropriate agent to handle the request. What feature could be used?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Case Escalation Rules" },
      { id: "B", text: "Case Assignment Rules" },
      { id: "C", text: "Email-to-Case" },
      { id: "D", text: "Web-to-Case" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 10,
    text: "A salesforce consultant working for Cosmic Solutions has configured Gmail Integration to improve the productivity of the sales reps who use Google Calendar to manage events. Information about the events they attend should be stored in Salesforce. Which of the following capabilities are available for manually logging events from Gmail to Salesforce?",
    instruction: "Choose 3 answers.",
    options: [
      { id: "A", text: "Matching contact records are automatically selected if Salesforce is set up for shared activities." },
      { id: "B", text: "Attendees are captured on the Salesforce event record when an event is manually logged." },
      { id: "C", text: "An event can be manually logged to up to 15 internal users at the same time." },
      { id: "D", text: "An event can be manually logged to one lead record." },
      { id: "E", text: "Both recurring and nonrecurring events can be logged manually." }
    ],
    correctAnswers: ["A", "B", "D"]
  },
  {
    id: 11,
    text: "Where can the Salesforce record ID be obtained from.",
    instruction: "Choose 3 answers.",
    options: [
      { id: "A", text: "Record name" },
      { id: "B", text: "Setup" },
      { id: "C", text: "The record URL in the browser" },
      { id: "D", text: "Data Loader export file" },
      { id: "E", text: "Reports" }
    ],
    correctAnswers: ["C", "D", "E"]
  },
  {
    id: 12,
    text: "Hathway Inc. is using Salesforce to support its global marketing operations. The Marketing manager requested their Salesforce administrator to automate the business flow so that marketing users need to get permission from their manager before they convert a Lead. How can the Administrator achieve this?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Create a validation rule to verify the approval from the manager" },
      { id: "B", text: "Create record types and a new page layout on the Lead object" },
      { id: "C", text: "Create an approval process and mark the manager as an approver" },
      { id: "D", text: "Create a task on the Lead record to submit approval requests" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 13,
    text: "A Salesforce administrator in an org with the same or account records needs to implement lookup filters on several fields on the Account object. Which of the following are true regarding lookup filters in Lightning Experience?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Lookup filters are still required in Lightning Experience even if they are specified as optional." },
      { id: "B", text: "Lookup filters are not required in Lightning Experience if they are specified as optional." },
      { id: "C", text: "Lookup filters can reference fields on records related to the target object." },
      { id: "D", text: "Lookup filters cannot reference fields on the target object." }
    ],
    correctAnswers: ["A", "C"]
  },
  {
    id: 14,
    text: "Cosmic Supermarket uses a custom object 'Warehouse' to store information in Salesforce about the company's warehouses. A custom Lightning record page has been created to allow users to view and edit warehouse information. Each warehouse record contains information about multiple warehouse managers and their email addresses. Each warehouse manager is assigned to one or more categories of products. Users who can access a warehouse record should be able to send an email to warehouse managers by specifying one or more product categories. In order to meet this requirement, a Salesforce Administrator is creating a screen flow that can be launched using a quick action on the Lightning page. Which of the following should be considered to ensure that the flow gets the required information from the warehouse record to send the email?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "The Lightning page needs to be edited to enable passing the warehouse record to the flow." },
      { id: "B", text: "An element needs to be added to the flow to get the warehouse record." },
      { id: "C", text: "An Apex action is required in the flow to access the warehouse record." },
      { id: "D", text: "The flow should use a record variable named 'recordId' that is available for input." }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 15,
    text: "A company wants to prevent its employees from having access to Salesforce from their homes. How can this be achieved?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Define Permission Sets" },
      { id: "B", text: "Define Login IP Ranges for all profiles" },
      { id: "C", text: "Define Trusted Login IP ranges" },
      { id: "D", text: "Enable 'Trusted Login Only' setting" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 16,
    text: "Which of the following cannot be created or converted?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Contact" },
      { id: "B", text: "Account" },
      { id: "C", text: "Opportunity" },
      { id: "D", text: "Case" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 17,
    text: "United Technologies is looking to customize internal Salesforce URL to their branding, planning on leveraging Single Sign-On (SSO), as well as developing custom Lightning components. Which of the following is required in order to utilize these features?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Public Sites" },
      { id: "B", text: "Custom URL" },
      { id: "C", text: "My Domain" },
      { id: "D", text: "Custom Sites Domain" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 18,
    text: "Flex Corporation has offices in the US, Europe, and Asia. It has two sales directors: Sales Director - Europe and Sales Director - Global. The Sales Director for Europe should have access to the German, French, and UK accounts which are all under the European region. The Global Sales Director should have access to the HQ, US, and Asia accounts but not the European accounts. How can this be set up?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Deselect 'Grant Access Using Hierarchies' option for the Account object in Sharing Settings" },
      { id: "B", text: "Ensure that the sharing setting of Accounts is set to 'Private'" },
      { id: "C", text: "Create a role hierarchy where the Global Sales Director role is not at the top of the hierarchy or above the Sales Director for Europe" },
      { id: "D", text: "Create a sharing rule on Accounts" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 19,
    text: "Cosmic Fortuna uses an approval process in case more to manage the leave applications of its employees. When a leave request is approved by a manager, the leave details should be submitted to an external system, which is an employee portal used internally in the company. Which of the following actions should be used to achieve this requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Task" },
      { id: "B", text: "Email Alert" },
      { id: "C", text: "Field Update" },
      { id: "D", text: "Outbound Message" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 20,
    text: "A time-dependent workflow rule is used to serve an email alert to the sales team manager when a high-value opportunity is still open 10 days before the specified close date. How can an administrator monitor the execution of this workflow action in Salesforce?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Review the debug logs to see the workflow rule execution." },
      { id: "B", text: "Use Setup Audit Trail to monitor the workflow rule execution." },
      { id: "C", text: "Monitor the 'Time-Based Workflow' queue in Setup." },
      { id: "D", text: "Include the administrator as one of the email recipients." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 21,
    text: "After creating and customizing a record page in the Lightning App Builder, customer service representatives are not able to view the new layout. What could be the issue?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "The record page was not activated" },
      { id: "B", text: "The users do not have the 'Customize Applications' permission" },
      { id: "C", text: "The record page was not assigned to any profiles" },
      { id: "D", text: "The record page is invalid" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 22,
    text: "The Salesforce Administrator of Cosmic Crewing has added the 'Attendees' field to the Event page layout. A sales representative is creating an event in Lightning Experience. Which of the following can the sales rep add as 'Attendees' on the Event page layout?",
    instruction: "Choose 3 answers.",
    options: [
      { id: "A", text: "Business Accounts" },
      { id: "B", text: "Leads" },
      { id: "C", text: "Campaign Members" },
      { id: "D", text: "Contacts" },
      { id: "E", text: "Users" }
    ],
    correctAnswers: ["B", "D", "E"]
  },
  {
    id: 23,
    text: "What are some considerations regarding using leads in Salesforce?",
    instruction: "Choose 3 answers.",
    options: [
      { id: "A", text: "Leads can be imported or created from an automatic process" },
      { id: "B", text: "Leads can be individual consumers" },
      { id: "C", text: "When a lead is created, it can be automatically assigned to a user or a queue" },
      { id: "D", text: "When a lead is qualified, an account, contact, and opportunity are always created" },
      { id: "E", text: "Opportunities must always be created from leads" }
    ],
    correctAnswers: ["A", "B", "C"]
  },
  {
    id: 24,
    text: "The Salesforce administrator has set up login restrictions on the Marketing team profile so that they could access the application between 8:00 AM to 4:00 PM. What will happen if a user logged in at 3:45 PM and continues to work until 4:01 PM?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "The user is logged out upon navigation to a new page or data update operation (create, save, edit, delete)" },
      { id: "B", text: "The user is asked in a popup window if he would like to extend his session" },
      { id: "C", text: "The user is automatically logged out" },
      { id: "D", text: "The user can keep working continuously without any issues" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 25,
    text: "Service Silo recently overhauled their Case record page and have included new fields and buttons. Since only a communique was sent and no classroom training can be conducted because of the current call volume, they want their agents to still be guided with the changes to the Case record page and how to use the new layout. What is the best option to introduce these Case record changes to the agents?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Create in-app guidance that includes instructions for the new Case record page" },
      { id: "B", text: "Create a video that shows the changes to the Case record page and have the agents watch it" },
      { id: "C", text: "Send an email with screenshots that detail the changes to the new Case record page" },
      { id: "D", text: "Create dev.org accounts for the agents and have them practice on the new Case record page there" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 26,
    text: "Cosmic Innovation has recently migrated to Lightning Experience, and the Salesforce Administrator has enabled 'Einstein Activity Capture'. A sales user of Cosmic Innovation has created a task related to a contact record in Salesforce. Where can this task be viewed in Lightning Experience?",
    instruction: "Choose 3 answers.",
    options: [
      { id: "A", text: "In the 'Open Activities' related list of the contact record" },
      { id: "B", text: "In the 'Activity Timeline' of the contact record" },
      { id: "C", text: "In the 'My Tasks' list of the user assigned to the task" },
      { id: "D", text: "In the 'Open Activities' related list of the account record related to the contact" },
      { id: "E", text: "In the 'Activity Timeline' of the account record related to the contact" }
    ],
    correctAnswers: ["B", "C", "E"]
  },
  {
    id: 27,
    text: "A workflow rule is being used to create a task for a sales rep to do a follow-up call when a member of the prequalification team updates the information of a potential client as qualified. The Sales Manager wants an automated solution that creates a record of a custom object for each qualified client. What automation solutions can be used to meet this business requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Create an approval process that creates a new record of the custom object." },
      { id: "B", text: "Install an app from appexchange that creates a new record of the custom object." },
      { id: "C", text: "Create a flow using Flow Builder that creates a new record of the custom object." },
      { id: "D", text: "Create an Apex trigger that creates a new record of the custom object." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 28,
    text: "The marketing team of Cosmic Learning Solutions uses Lightning Experience to manage campaigns in Salesforce. Each campaign has a lifecycle, and a custom picklist field is used by marketing users to specify the stage of a campaign. The Marketing Director would like to add guidance for the users, especially those who are new to the company, by providing stage-specific tips, best practices, and other company information necessary to move a campaign to the next stage. How can a Sales Cloud Consultant meet this requirement?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Create a custom Lightning component that can be added to the Campaign record page." },
      { id: "B", text: "Create a new Path using the custom picklist field for the Campaign object." },
      { id: "C", text: "Use Lightning App Builder to add the Path feature that allows visualizing and tracking the stages of campaigns." },
      { id: "D", text: "Set up Einstein Discovery to provide stage-specific tips on campaign records." }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 29,
    text: "Acme Corporation would like to manage e-mail campaigns, send mass emails, and track responses back in Salesforce. They do not need the complete functionality of Marketing Cloud at this stage. They envision that they need to send about 300,000 emails for a campaign in a month. What should the Salesforce Administrator suggest?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Build custom functionality that tracks the responses" },
      { id: "B", text: "Use the standard campaign functionality" },
      { id: "C", text: "Use a third-party email campaign application and integrate with Salesforce" },
      { id: "D", text: "Use a third-party app from the AppExchange" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 30,
    text: "A new picklist value has been added to a picklist field in a custom object, but it is not visible to a user viewing a particular record as expected. What could be the reason for this?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Access has to be added to the new picklist value for the user's profile" },
      { id: "B", text: "There are record types defined for the object and the picklist value has not been added to the record type of the record the user is viewing" },
      { id: "C", text: "The picklist value has not been made active" },
      { id: "D", text: "There are record types defined for the object and the picklist value has not been added to all record types" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 31,
    text: "There is a request from the sales director to certain records of the 'Delivery' custom object shared with four of the nine sales managers. Only records that have the 'Pending' value on the 'Status' field should be shared with these sales managers. The organization-wide default setting of the custom object is set to 'Private', and the 'Grant Access Using Hierarchies' checkbox is deselected. No other user in the organization should have access to these records if they do not already have access. How can this be achieved?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Manually share the records with a 'Pending' status with the sales managers who should have access." },
      { id: "B", text: "Create a sharing rule for the Delivery object to share records with a 'Pending' status with the role associated with sales managers." },
      { id: "C", text: "Create a sharing rule for the Delivery object to share the records with a 'Pending' status with a public group that contains the sales managers who should have access." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 32,
    text: "What is true regarding the use of an external ID field?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Matching by external ID is available for any object that includes an External ID field and can be imported." },
      { id: "B", text: "Existing records with external IDs that match the values in the import file are detected." },
      { id: "C", text: "Matching by external ID is only available when importing solutions." },
      { id: "D", text: "Matching by external ID is only available for custom objects." }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 33,
    text: "Gary Smith, a top-performing sales representative to close a million-dollar opportunity with a high-value client. The representative wants to be well-prepared for his upcoming meeting with the client. How can a Salesforce administrator empower him with the most up-to-date information about the client?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Enable the News feature so that the sales rep can access the most relevant information related to the client." },
      { id: "B", text: "Send customized outbound messages to the sales rep's mobile device based on the clients associated with upcoming calendar events." },
      { id: "C", text: "Shortly before the scheduled meeting, send the sales rep an email alert with the most relevant and up-to-date information about the client from the client's website, Twitter account, and Google results." },
      { id: "D", text: "Post the most relevant information about the client on Chatter and @mention the sales rep." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 34,
    text: "Emily, the Salesforce Administrator for Slicer Technologies, no longer needs several fields on the Job Application custom object when the application process changed. What is true regarding deleting fields?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "If a field is undeleted, the data is not restored" },
      { id: "B", text: "After a field is deleted, it can be undeleted within 15 days before it is deleted permanently" },
      { id: "C", text: "Deletion of custom fields can be accelerated using hard deletion to free up custom field allocation" },
      { id: "D", text: "It is possible to delete standard and custom fields" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 35,
    text: "After switching to Lightning Experience, the same manager wants the Salesforce administrator to customize the Opportunity page. What actions can be performed to customize a record page in the Lightning App Builder?",
    instruction: "Choose 3 answers.",
    options: [
      { id: "A", text: "Any component can be resized" },
      { id: "B", text: "Components can be reordered" },
      { id: "C", text: "Components can be created" },
      { id: "D", text: "Components can be added" },
      { id: "E", text: "Components can be removed" }
    ],
    correctAnswers: ["B", "D", "E"]
  },
  {
    id: 36,
    text: "Cosmic Solutions often has multiple contacts associated in a case. Which of the following is the most efficient way to show them in a case record?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Using Case Contact Roles" },
      { id: "B", text: "Using Case Contact Relationships" },
      { id: "C", text: "Multiple contacts cannot be assigned to a case" },
      { id: "D", text: "Adding multiple contact lookup fields to a case" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 37,
    text: "Which of the following options is NOT a value criterion for the evaluation of a workflow rule?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "When a record is created" },
      { id: "B", text: "When a record is created and any time it's edited to subsequently meet criteria" },
      { id: "C", text: "When a record is edited to subsequently meet criteria, but not when it is first created" },
      { id: "D", text: "When a record is created and every time it's edited" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 38,
    text: "A user is not able to find an email template when sending an email. What could be the reason for this?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "The email template is not active" },
      { id: "B", text: "The email template is not marked 'Available for Use'" },
      { id: "C", text: "The user does not have read/write access to the Email Template" },
      { id: "D", text: "The user does not have access to the Email Template folder" }
    ],
    correctAnswers: ["B", "D"]
  },
  {
    id: 39,
    text: "Cosmic Solutions would like to understand the relationships between cases and be able to view these relationships. How would they create a relationship between the two cases?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Add each case to the Case Relationships related list." },
      { id: "B", text: "Add one of the cases as a parent of a related case using the Parent Case field." },
      { id: "C", text: "Add one of the cases as a relationship of a related case using the Related Case field." },
      { id: "D", text: "In a list view, select all cases that are related and click the Related button." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 40,
    text: "Sam has created a matching rule on the Contact object to detect duplicates. What is true in this situation?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Duplicate contacts will be blocked or allowed based on the setting in the Duplicate Rule" },
      { id: "B", text: "Only one duplicate rule can be active at one time" },
      { id: "C", text: "Only one field can be used for matching in the matching rule" },
      { id: "D", text: "Nothing will happen unless a duplicate rule is defined that uses the matching rule" }
    ],
    correctAnswers: ["A", "D"]
  },
  {
    id: 41,
    text: "SystemSilo Inc. wants to make sure that case owners of installation cases are assigned to level 3 support reps. Additionally, they also requested that a notification be sent to the manager every time a platinum priority case is unresolved 3 hours after being opened. What can a Salesforce Administrator do to fulfill these requirements?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Add an action to an escalation rule that sends a notification to the manager about unresolved platinum priority cases 3 hours after case creation" },
      { id: "B", text: "Set up a case assignment rule that includes automatically assigning installation cases to a level 3 support rep" },
      { id: "C", text: "Include an action to an escalation rule that changes the case priority field to platinum if an installation case is unresolved 3 hours after being created" },
      { id: "D", text: "Set up a workflow rule that changes the ownership of unresolved platinum priority cases to managers if the case is unresolved 3 hours after being created" }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 42,
    text: "Which of the following can be synced between Salesforce and Microsoft Exchange using Lightning Sync?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Events" },
      { id: "B", text: "Emails" },
      { id: "C", text: "Cases" },
      { id: "D", text: "Contacts" }
    ],
    correctAnswers: ["A", "D"]
  },
  {
    id: 43,
    text: "When an Opportunity Stage is updated to Won; the Sales team would like to ensure that no users except the VP of Sales can delete that Opportunity record from the system. What can the Salesforce Administrator customize to achieve this?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Disable the delete button on the current page layout for other users" },
      { id: "B", text: "Create an assignment rule to assign record deletion for VP of sales" },
      { id: "C", text: "Create a dynamic action with a filter for the Opportunity Stage and role" },
      { id: "D", text: "Create an approval process to lock the record once the Stage field is updated" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 44,
    text: "John modifies a record in Salesforce. This triggers a workflow rule for immediate execution that includes a field update on the current record. After the execution is complete, what user will be listed under the 'Last Modified' field of this record?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "The last user to modify the record prior to John" },
      { id: "B", text: "The default workflow user" },
      { id: "C", text: "John" },
      { id: "D", text: "The designated workflow user" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 45,
    text: "For any customer-centric organization, the opportunity or deal record data are sensitive. A sales manager has requested the Salesforce Administrator to monitor some of the important fields that are getting changed by multiple teams from time to time during the sales lifecycle. Which security option can the Salesforce Administrator choose to achieve this?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Provide the 'View All Data' permission to the sales manager to allow seeing all changes" },
      { id: "B", text: "Provide the 'View All' permission to the sales manager to allow seeing all changes" },
      { id: "C", text: "Enable organization-wide default sharing settings for the opportunity object to set it to the sales manager level" },
      { id: "D", text: "Enable field history tracking for the opportunity object and create a report" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 46,
    text: "Which of the following is true regarding Data Loader?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Data Loader is only available for Windows" },
      { id: "B", text: "Data Loader Command Line Interface (CLI) is only supported in Windows" },
      { id: "C", text: "Data Loader is only available for Mac" },
      { id: "D", text: "Data Loader runs on both Windows and Mac operating systems" }
    ],
    correctAnswers: ["B", "D"]
  },
  {
    id: 47,
    text: "What Salesforce feature makes it easy for sales reps to follow your organization's sales process through visual assistance that provides guidance through each sales stage?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Salesforce Mobile App Sales Chatter Feed" },
      { id: "B", text: "Workflow automation for opportunities" },
      { id: "C", text: "Sales Path" },
      { id: "D", text: "Flows for opportunities" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 48,
    text: "Which statement about Case Assignment is correct?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "The assignee automatically gets an email notification when the case is assigned to them" },
      { id: "B", text: "Multiple assignment rules can be active" },
      { id: "C", text: "A case assignment rule can consist of multiple rule entries" },
      { id: "D", text: "A case can be assigned to a user, queue or role" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 49,
    text: "An invocable method is used to perform a callout that retrieves the latest currency exchange rates from a third-party web service. After a record is created in a screen flow, the invocable method is executed, and the record is then updated with the data returned by the callout. Which of the following is a valid statement regarding the Transaction Control settings of this flow?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "If the method contains the 'callout=true' attribute, the Transaction Control settings will be automatically locked to 'Let the flow decide'." },
      { id: "B", text: "To avoid the uncommitted work pending error, the Transaction Control settings can be set to 'Always start a new transaction'." },
      { id: "C", text: "To avoid the uncommitted work pending error, the Transaction Control settings can be set to 'Always continue in current transaction'." },
      { id: "D", text: "If the method is not defined with a callout=true attribute, the callout will still be successful as long as the setting is set to 'Let the flow decide'." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 50,
    text: "What is true regarding setting up users?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "A user can have multiple roles but only one profile" },
      { id: "B", text: "The username and email address can be different, except when setting up multiple users" },
      { id: "C", text: "The administrator sets a temporary password, and this is automatically emailed to the new users" },
      { id: "D", text: "The profiles that are available depend on the license type selected" }
    ],
    correctAnswers: ["B", "D"]
  },
  {
    id: 51,
    text: "The system administrator of Cosmic Solutions was sent a dashboard that shows high-value accounts. A filter has been defined on the dashboard to allow the current user to select the minimum annual revenue. Users would like quick access to the filtered list of accounts based on the required filter value. For instance, some users want to quickly view accounts with annual revenue greater than or equal to 100,000. To meet this requirement, the administrator has decided to create a custom URL that can be shared with the users. If there's only one dashboard filter, what can be added as a filter parameter to the original dashboard URL to create the custom URL?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "&fv0=100000" },
      { id: "B", text: "&fv1=100000" },
      { id: "C", text: "&f0=100000" },
      { id: "D", text: "&f1=100000" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 52,
    text: "The role of a sales manager of Cosmic Electronics was recently changed due to a transfer. She is now able to access an account record that is not owned by her. The Salesforce Administrator of the company would like to determine whether the role hierarchy is the reason for the record access. Which of the following can be used to quickly determine this?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Sharing Hierarchy button" },
      { id: "B", text: "Sharing settings" },
      { id: "C", text: "Apex sharing reason" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 53,
    text: "In an initial meeting with the purpose of setting up a new Salesforce org, the administrator, Sarah, is asked what Accounts can represent. What would she be correct in stating?",
    instruction: "Choose 3 answers.",
    options: [
      { id: "A", text: "Individual consumers" },
      { id: "B", text: "Companies you do business with" },
      { id: "C", text: "Employees" },
      { id: "D", text: "Leads" },
      { id: "E", text: "Competitors" }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 54,
    text: "Which of the following can be used to associate different campaigns together within a specific marketing program or initiative?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Campaign Status field" },
      { id: "B", text: "View Hierarchy button" },
      { id: "C", text: "Parent Campaign field" },
      { id: "D", text: "Manage Members button" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 55,
    text: "A Salesforce Administrator has defined a new custom object and has identified that it needs to have a many-to-many relationship with 5 different standard objects. What considerations should the Salesforce Administrator keep in mind when designing the solution?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Not feasible, since only up to two master-detail relationships are possible on a custom object" },
      { id: "B", text: "It depends on the remaining custom object quota left in the org" },
      { id: "C", text: "Not feasible, since only up to three master-detail relationships are possible on a custom object" },
      { id: "D", text: "Not feasible, since only two many-to-many relationships are allowed per object" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 56,
    text: "What actions are supported for joined reports in Lightning Experience?",
    instruction: "Choose 3 answers.",
    options: [
      { id: "A", text: "Convert unjoined reports into joined reports" },
      { id: "B", text: "Update and delete records" },
      { id: "C", text: "Rename and reorder blocks" },
      { id: "D", text: "Add up to 10 blocks of report types" },
      { id: "E", text: "Create cross-block summary formulas" }
    ],
    correctAnswers: ["A", "C", "E"]
  },
  {
    id: 57,
    text: "A workflow rule is expected to create a reminder task for the case owner that is due 7 days after the status of the case is updated to 'Working'. However, no reminder task was created when the status of a case was updated accordingly. What might explain this?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "The rule evaluation criteria is set to 'Created, and Any Time it's Edited to Subsequently Meet Criteria'" },
      { id: "B", text: "The rule evaluation criteria is set to 'Every Time a Record is Edited' only" },
      { id: "C", text: "The rule evaluation criteria is set to 'Created, and Every Time it's Edited'" },
      { id: "D", text: "The rule evaluation criteria is set to 'Created' only" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 58,
    text: "Which of the following are required to model a many-to-many relationship between two custom objects?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Hierarchical relationship" },
      { id: "B", text: "Junction object" },
      { id: "C", text: "Master-detail relationship" },
      { id: "D", text: "Lookup Relationship" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 59,
    text: "An account record owned by an inactive user needs to be updated. Who has the ability to update the record?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "System administrators only" },
      { id: "B", text: "Records owned by inactive users cannot be updated; the user must be reactivated first" },
      { id: "C", text: "All active users" },
      { id: "D", text: "System administrators and all users with visibility to the record and create or edit permissions on the account object" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 60,
    text: "The Account object has a one-to-many relationship with which of the following objects?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Price Book Entry" },
      { id: "B", text: "Opportunity" },
      { id: "C", text: "Case" },
      { id: "D", text: "Product" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 61,
    text: "The administrator for Cloud Kicks needs to give access to a new custom object with custom fields to more than one user. Which two options should an administrator use to meet this requirement?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Add to manual sharing list" },
      { id: "B", text: "Assign permission set group to Users" },
      { id: "C", text: "Create a Permission Set" },
      { id: "D", text: "Edit organization-wide defaults" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 62,
    text: "What data loss considerations should an administrator keep in mind when changing a custom field type from Text to Picklist?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "There will be no data loss with use of a global value set." },
      { id: "B", text: "Assignment and escalation rules may be affected." },
      { id: "C", text: "Auto updates will be made to Visualforce references to prevent data loss." },
      { id: "D", text: "Any list view based on the custom field is deleted." }
    ],
    correctAnswers: ["B", "D"]
  },
  {
    id: 63,
    text: "Cloud Kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple designs for one product across various stages. Which two steps should the administrator configure to meet this requirement?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Add a custom master-detail field for shoe designs on the Product object." },
      { id: "B", text: "Create a custom object for shoe designs." },
      { id: "C", text: "Use the standard object for designs." },
      { id: "D", text: "Configure a custom lookup field for shoe designs on the Product object." }
    ],
    correctAnswers: ["B", "D"]
  },
  {
    id: 64,
    text: "The Administrator at Cloud Kicks need to automatically route support cases, regardless of how they are created, to a queue based on case priority. What tool should the administrator use?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Email-to-Case" },
      { id: "B", text: "Assignment Rules" },
      { id: "C", text: "Auto-Response Rules" },
      { id: "D", text: "Web-to-case" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 65,
    text: "The administrator has been asked to automate a simple field update on the account. When a support agent changes the status of the account to 'Audited', they would like the system to automatically update the Audited date field on the account with today's date. Which tool should the administrator use to complete this automation?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Approval process" },
      { id: "B", text: "Formula Field" },
      { id: "C", text: "Flow Builder" },
      { id: "D", text: "Validation Rule" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 66,
    text: "An administrator at Cloud Kicks wants to deactivate a User who has left the company. What are two reasons that would prevent a user from being deactivated?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "The use is part of a territory hierarchy." },
      { id: "B", text: "The User is in a Custom hierarchy field." },
      { id: "C", text: "The User is assigned in workflow email alert." },
      { id: "D", text: "The User is the highest role in the role hierarchy" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 67,
    text: "The VP of sales at Dreamhouse Realty has requested a dashboard to visualize enterprise sales across the different teams. The key place of data is the total of all sales for the year and the progress to the enterprise sales goal. What dashboard component will effectively show this number and the proximity to the total goal as a single value?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Table" },
      { id: "B", text: "Stacked Bar" },
      { id: "C", text: "Donut" },
      { id: "D", text: "Gauge" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 68,
    text: "Northern Trail Outfitters wants emails received from customers to generate cases automatically. How should the administrator ensure that the emails are sent to the correct queue?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Utilize a flow to identify the correct queue and assign the case." },
      { id: "B", text: "Use a custom email services to set the owner of the case upon creation." },
      { id: "C", text: "Create an Escalation Rules to send cases to the correct queue." },
      { id: "D", text: "Configure Email-to-Case so emails are delivered to the correct queue" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 69,
    text: "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records. What should the administrator do to meet this requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Assign the standard System Administrator profile to the analytical user." },
      { id: "B", text: "Give the user View all access and assign them to the highest role in the role hierarchy." },
      { id: "C", text: "Create and assign a custom profile with Delete access removed for each object." },
      { id: "D", text: "Create and assign a permission set that includes Read, Create, and Edit access" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 70,
    text: "CloudKicks (CK) stores information about specific customers in Contacts and information about shoes and accessories in a custom Merchandise object. What should the CK administrator use to represent that Contact can be interested in multiple pieces of Merchandies?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Hierarchy column" },
      { id: "B", text: "Lookup filter" },
      { id: "C", text: "Formula field" },
      { id: "D", text: "Junction object" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 71,
    text: "Sales users at Universal Containers are reporting that it is taking a long time to edit opportunity records. Normally, the only field they are editing is the Stage field. Which two options should the administrator recommend to help simplify the process?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Add a path for stage to the opportunity record page." },
      { id: "B", text: "Use a Kanban list view for Opportunity." },
      { id: "C", text: "Configure an auto launched flow for Opportunity editing." },
      { id: "D", text: "Create a simplified Opportunity page layout." }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 72,
    text: "Ursa Major Solar is noticing a decrease in deals with a cross-sell opportunity type and wants to share all cross-sell opportunities with a team of subject matter experts in their organisation. The company has different roles, and the organisation wide default opportunity is set to private. How should the administrator accomplish this?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Add the subject matter experts to a public group and give them access to records with a criteria based sharing rule." },
      { id: "B", text: "Change the organisation-wide default for opportunity from private to public Read/Write to open up access for subject matter experts." },
      { id: "C", text: "Enable territory management, assign the subject matter experts to the same territory, and give them access to the records with manual sharing." },
      { id: "D", text: "Create a new role for the subject matter experts and give them access to the records with the owner-based sharing rule" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 73,
    text: "An administrator at AW Computing has been asked to help the Support team with report folders. They want a folder called Support Reports and two folders underneath called Helpdesk and R&D. The Support organization uses public groups for Support Agents, R&D, and Managers. Support agents should be able to run Helpdesk reports, but should not be able to view R&D reports. Support managers should be able to view and edit all reports. Which two ways should these folders be shared?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Share the R&D folder with Support Managers with Edit Access." },
      { id: "B", text: "Share the Helpdesk folder with Support Agents with View access." },
      { id: "C", text: "Share the Support Reports folder with Support Managers with Edit Access." },
      { id: "D", text: "Share the Support Reports folder with Support Agents with View Access." }
    ],
    correctAnswers: ["C", "D"]
  },
  {
    id: 74,
    text: "DreamHouse Realty (DHR) wants a templated process with a mortgage calculator that generated leads for loans. DHR needs to complete the project within 30 days and has maxed out its budget for the year. Which AppExchange item should help the administrator to meet the request?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Lightning Data" },
      { id: "B", text: "Lightning Community" },
      { id: "C", text: "Flow Solutions" },
      { id: "D", text: "Bolt Solutions" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 75,
    text: "Ursa Major Solar wants to know which of its marketing efforts are helping the team win Opportunities. What should an administrator configure to provide these insights?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Campaign Hierarchy." },
      { id: "B", text: "Campaign Influence" },
      { id: "C", text: "Map Custom Lead Fields" },
      { id: "D", text: "List Email Activities" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 76,
    text: "Cloud Kicks (CK) has new administrator who is asked to put together a memo detailing salesforce uses to budget for upcoming license purchases. Where Should the administrator go to find out what type of licenses CK Has purchased and how many are available?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Search for licenses types in setup." },
      { id: "B", text: "User Licenses Related List in Company information." },
      { id: "C", text: "User Management settings in setup." },
      { id: "D", text: "Usage based entitlement related list in company information." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 77,
    text: "The CTO of AW Computing has defined a new policy for cases to improve customer satisfaction. All cases submitted with a Case Reason of Installation must be acknowledged immediately via email and assigned to the appropriate agents. Any cases that are still in the New status after 4 hours must be escalated to support management. What case management tools need to be utilized for this requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Auto-response rules, Macros, Entitlements" },
      { id: "B", text: "Auto-response rules, Queues, Macros" },
      { id: "C", text: "Auto-response rules, Queues, Escalation Rules" },
      { id: "D", text: "Auto-response rules, Entitlements, Escalation Rules" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 78,
    text: "The standard Lead Rating field has picklist values of Hot, Warm, and Cold. A list of new leads was imported without errors even though several records had the value of Unrated in the Rating field. How were these records added without error?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "The Restricted picklist checkbox was unchecked." },
      { id: "B", text: "Field-level security was set to Visible for all profiles." },
      { id: "C", text: "A global picklist value set was used to populate the picklist." },
      { id: "D", text: "The Add to All Record Types checkbox was selected." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 79,
    text: "The administrator for AW Computing is working with a user who is having trouble logging in to Salesforce. What should the administrator do to identify why the user is unable to log in?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Review the login history for the user." },
      { id: "B", text: "Check the attempted logins by running the setup audit trail." },
      { id: "C", text: "Pull the password history to ensure the password policy was followed." },
      { id: "D", text: "Reset the security token for the profile." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 80,
    text: "At cloud kicks sales reps use discounts on the opportunity record to help win sales on products. When an opportunity is won, they then have to manually apply the discount to the related opportunity products. The sales manager has asked if there is a way to automate this time consuming task. What should the administrator use to deliver this requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Flow Builder" },
      { id: "B", text: "Approval Process" },
      { id: "C", text: "Prebuild Macro." },
      { id: "D", text: "Formula field" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 81,
    text: "Northern Trail Outfitters wants to track ROI for contacts that are key stakeholders for opportunities. The VP of Sales requested that this information be accessible on the opportunity and available for reporting. Which two options should the administrator configure to meet these requirements?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Customize Campaign Member Role." },
      { id: "B", text: "Add the Campaign Member related list to the Opportunity page layout." },
      { id: "C", text: "Customize Campaign Role." },
      { id: "D", text: "Customize Opportunity Contact Role." },
      { id: "E", text: "Add the Opportunity Contact Role related list to the Opportunity page layout." }
    ],
    correctAnswers: ["C", "D"]
  },
  {
    id: 82,
    text: "The Support team at Ursa Major Solar prefers using split list views on the case homepage. Occasionally, the team views shipments from another support application. What should the administrator configure to allow the team to use the split view?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Filter by a single shipment record type in the list view." },
      { id: "B", text: "Include the Shipments tab on the app's navigation bar." },
      { id: "C", text: "Split views are only available on standard objects." },
      { id: "D", text: "Add the Manage List Views permission for support users." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 83,
    text: "An Administrator supporting global team of salesforce users has been asked to configure the company settings. Which two options should the administrator configure?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Login Hours" },
      { id: "B", text: "Password Policy" },
      { id: "C", text: "Default Language" },
      { id: "D", text: "Currency Local" }
    ],
    correctAnswers: ["C", "D"]
  },
  {
    id: 84,
    text: "An administrator needs to create a one-to-many relationship between two objects with limited access to child records. What type of field should the administrator use?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Roll-up summary" },
      { id: "B", text: "Master-detail field" },
      { id: "C", text: "Cross Object formula" },
      { id: "D", text: "Lookup field" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 85,
    text: "Ursa Major Solar has a path on Case. The company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from reverting the Case back to a previous status. Which feature should an administrator use to fulfill this request?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Predefined Field Values" },
      { id: "B", text: "Global Value Picklists" },
      { id: "C", text: "Dependent Picklists" },
      { id: "D", text: "Validation Rules" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 86,
    text: "Cloud Kicks need to be able to show different picklist values for sales and marketing users. Which two options will meet this requirement?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "One page layout, two record types, one picklist" },
      { id: "B", text: "Two page layouts, one record type, two picklists" },
      { id: "C", text: "Two permission sets, one record type, one picklist" },
      { id: "D", text: "One record type, two profiles, one picklist" }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 87,
    text: "The events manager at dream house realty has a hot lead from a successful open house that needs to become a contact with an associated opportunity. How should this be accomplished from the campaign keeping the associated campaign member history?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Delete the lead and create a new contact and opportunity." },
      { id: "B", text: "Clone the lead and convert the cloned record to a contact." },
      { id: "C", text: "Convert the lead from the campaign member detail page." },
      { id: "D", text: "Add a contact from a campaign member detail page." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 88,
    text: "Customer service accesses articles with the Knowledge Lightning component on the Service Cloud Console. Billing department users would like similar functionality on the case record without using the console. How should the administrator configure this request?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Add the knowledge component to the page layout." },
      { id: "B", text: "Add the Knowledge component list to the page layout." },
      { id: "C", text: "Add the Knowledge related list to the page layout." },
      { id: "D", text: "Add the knowledge related list to the record page" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 89,
    text: "The administrator at Northern Trail Outfitters has been using a spreadsheet to track assigned licenses and permission sets. What feature can be used to track this in Salesforce?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Login History" },
      { id: "B", text: "Lightning Usage App" },
      { id: "C", text: "User Report" },
      { id: "D", text: "Permission Set Groups" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 90,
    text: "What should an administrator use as an identifier when importing and updating records from a separate financial system?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Auto-Number field?" },
      { id: "B", text: "External ID" },
      { id: "C", text: "Rich text field" },
      { id: "D", text: "Record ID" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 91,
    text: "Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working some of UC's Cases. Which two options should the administrator use to help the support team?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Configure a flow to assign the cases to the queue." },
      { id: "B", text: "Use assignment rules to set the queue as the owner of the case." },
      { id: "C", text: "Add Cases to the existing queue as available object." },
      { id: "D", text: "Create a new queue and add Cases as an available object." }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 92,
    text: "The administrator at universal containers has a screen flow that helps users create new leads. When lead source is \"Search Engine\", the administrator needs to require the user to choose a specific a search engine from a picklist. If lead source is not \"Search Engine\", this picklist should be hidden. How should the administrator complete this requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Assign a decision element to direct the user to a second screen to hold specific search engine only when a lead source is \"Search Engine\"." },
      { id: "B", text: "Use an assignment element, one for when lead source is \"Search Engine\" and one for everything else." },
      { id: "C", text: "Create a picklist for specific search engine, and set conditional visibility so that is only shown when lead source is \"Search Engine\"." },
      { id: "D", text: "Configure a picklist for specific search engine, and use a validation rule to conditionally show only when lead source is \"Search Engine\"" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 93,
    text: "Cloud Kicks (CK) needs a new sales application. The administrator there is an application package on the AppExchange and wants to begin testing it in a sandbox to see If it addresses CK's needs. What are two considerations when installing a managed package in a sandbox?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Any metadata changes to the package have to be recreated in production." },
      { id: "B", text: "The installation link has to be modified to test.salesforce.com." },
      { id: "C", text: "Install for Admins Only will be the only Install option available." },
      { id: "D", text: "The package will be removed any time the sandbox is refreshed." }
    ],
    correctAnswers: ["A", "D"]
  },
  {
    id: 94,
    text: "Ursa Major Solar has its business hours set from 9:00 AM to 5:00 PM for the reps that are on pacific time. The reps on Eastern Time need business hours set to start 3 hours earlier to cover for support. How should an administrator solve for this issue?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Set temporary business hours for each time zone." },
      { id: "B", text: "Adjust the current business hours to accommodate the Eastern Time Zone." },
      { id: "C", text: "Create one set of business hours per time zone." },
      { id: "D", text: "Allow the reps to set business hours manually." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 95,
    text: "Cloud Kicks want to have consistency when communication with customers on cases. The company has requested messages to be sent in an email channel with categories to help search for the proper message. Which Solution Should be administrator suggest to meet this requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Prebuilt Quick Texts" },
      { id: "B", text: "Prebuilt Email Templates." },
      { id: "C", text: "Prebuilt Flow Templates." },
      { id: "D", text: "Prebuilt Auto-Responses." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 96,
    text: "Which three aspects of standard fields should an administrator customize?",
    instruction: "Choose 3 answers.",
    options: [
      { id: "A", text: "Picklist Values" },
      { id: "B", text: "Help Text" },
      { id: "C", text: "Field history tracking" },
      { id: "D", text: "Decimal Places" },
      { id: "E", text: "Field name" }
    ],
    correctAnswers: ["A", "B", "C"]
  },
  {
    id: 97,
    text: "Ursa Major Solar offers amazing experiences for all of it employees. The Employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Chatter Stream." },
      { id: "B", text: "Chatter Broadcast Group" },
      { id: "C", text: "Chatter Recommendations." },
      { id: "D", text: "Chatter Unlisted Group" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 98,
    text: "Cloud Kicks (CK) is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account. How should the administrator recommend automating this business process?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Create a workflow rule with an outbound message." },
      { id: "B", text: "Set up a scheduled process in Process Builder." },
      { id: "C", text: "Configure a scheduled flow in flow Builder." },
      { id: "D", text: "Use a process to update the account when it is edited" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 99,
    text: "The Client services and customer support teams share the same profile but have different permission sets. The Custom Object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfil this request?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Sharing settings" },
      { id: "B", text: "Page Layout Assignment" },
      { id: "C", text: "Component Visibility" },
      { id: "D", text: "Record Type Assignment" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 100,
    text: "Dreamhouse Reality just announced its new home concierge offering. This product is unlike anything the company has offered in the past and follows a different business model. What Should the administrator Configure to meet this requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Create a quick action." },
      { id: "B", text: "Create a new approval process." },
      { id: "C", text: "Create a new sales process." },
      { id: "D", text: "Create a new Opportunity product." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 101,
    text: "The Human resources department at Northern Trail outfitters wants employees to provide feedback about the manager using a custom object in Salesforce. It is important that managers are unable to see the feedback records from their staff. How should an administrator configure the custom object to meet this requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Uncheck grant access using Hierarchies." },
      { id: "B", text: "Define a criteria-based sharing rules." },
      { id: "C", text: "Set the default external access to private." },
      { id: "D", text: "Configure an owner-based sharing rules." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 102,
    text: "An administrator at Cloud Kicks has a flow in production that is supposed to create new records. However, no new records are being created. What could the issue be?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "The flow is read only." },
      { id: "B", text: "The flow is inactive." },
      { id: "C", text: "The flow URL is deactivated." },
      { id: "D", text: "The flow trigger is missing." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 103,
    text: "Cloud Kicks has decided to delete a custom field. What will happen to the data in the field when it is deleted?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "The data in the field is stored for 20 days." },
      { id: "B", text: "The data is permanently deleted." },
      { id: "C", text: "The data associated with the field is required." },
      { id: "D", text: "The data is restorable from the recycle bin." }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 104,
    text: "Cloud Kicks has a custom object called Shipments. The Company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain. What type of relationship should the administrator make between Shipments and Account?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Shipments should have a lookup to Account." },
      { id: "B", text: "Accounts should have a lookup to Shipments." },
      { id: "C", text: "Shipments should have a master-detail to Accounts." },
      { id: "D", text: "Accounts should have a master-detail to Shipments." }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 105,
    text: "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet the requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Enable Creation of Recurring Tasks." },
      { id: "B", text: "Flow to create recurring tasks." },
      { id: "C", text: "Workflow rule to create recurring tasks." },
      { id: "D", text: "Turn on Recurring Activities." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 106,
    text: "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Case Scheduled Reports." },
      { id: "B", text: "Case Dashboard Refreshes." },
      { id: "C", text: "Case Escalation Rules." },
      { id: "D", text: "Case Assignment Rules." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 107,
    text: "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options. What should an administrator configure to meet these requirements?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Validation rules that ensure that users are entering accurate sales stage information." },
      { id: "B", text: "Different page layouts that control the picklist values for the opportunity types." },
      { id: "C", text: "Public groups to limit record types and sales processes for opportunities." },
      { id: "D", text: "Separate record types and Sales processes for the different types of opportunities." }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 108,
    text: "The Sales manager at DreamHouse Realty wants the sales users to have a quick way to view and edit the Opportunities in their pipeline expected to close in the next 90 days. What should an administrator do to accomplish this request?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Create a custom report and schedule the sales users to receive it each day as a reminder to update their opportunities." },
      { id: "B", text: "Enable Sales Console and show users how to open a tab for each opportunity in the pipeline that meets the requirements." },
      { id: "C", text: "Create a list view on the Opportunity object and recommend users switch the view to Kanban to edit by drag and drop." },
      { id: "D", text: "Make a new Sales dashboard and add a component that shows all opportunities that meet the requirements." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 109,
    text: "Universal Containers (UC) would like to count the number of open cases associated with each account and update the account with this value every Friday evening. UC has several hundred open cases at any given time. What should the administrator use to complete this request?",
    instruction: "Choose 1 answer.",
    options: [
      { id: "A", text: "Use a record trigger flow." },
      { id: "B", text: "Use a scheduled process builder." },
      { id: "C", text: "Use a Roll-Up summary." },
      { id: "D", text: "Use a scheduled flow" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 110,
    text: "The sales manager at Cloud Kicks wants to set up a business process where opportunity discounts over 30% need to be approved by the VP of sales. Any discounts above 10% need to be approved by the user's manager. The administrator has been tasked with creating an approval process. Which are two considerations the administrator needs to review before setting up this approval process?",
    instruction: "Choose 2 answers.",
    options: [
      { id: "A", text: "Create a custom Discount field on the opportunity to capture the discount amount" },
      { id: "B", text: "Populate the Manager standard field on the sales users' User Detail page." },
      { id: "C", text: "Configure two separate approval processes." },
      { id: "D", text: "Allow the submitter to choose the approver manually" }
    ],
    correctAnswers: ["A", "D"]
  },
  {
    id: 111,
    text: "Cloud Kicks needs to be able to show different picklist values for sales and marketing users. Which two options will meet this requirement?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Two page layouts, one record type, two picklists" },
      { id: "B", text: "One page layout, two record types, one picklist" },
      { id: "C", text: "One record type, two profiles, one picklist" },
      { id: "D", text: "Two permission sets, one record type, one picklist" }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 112,
    text: "Which two solutions could an administrator find on the AppExchange to enhance their organization?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Communities" },
      { id: "B", text: "Consultants" },
      { id: "C", text: "Customers" },
      { id: "D", text: "Components" }
    ],
    correctAnswers: ["B", "D"]
  },
  {
    id: 113,
    text: "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Workflow rule to create recurring tasks" },
      { id: "B", text: "Turn on Recurring Activities" },
      { id: "C", text: "Flow to create recurring tasks" },
      { id: "D", text: "Enable Creation of Recurring Tasks" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 114,
    text: "When a Cloud Kicks opportunity closes, the company would like to automatically create a renewal opportunity. What automation option should an administrator use to accomplish this request?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Validation rule" },
      { id: "B", text: "Flow Builder" },
      { id: "C", text: "Approval process" },
      { id: "D", text: "Opportunity sharing rule" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 115,
    text: "Northern Trail Outfitters has a custom quick action on Account that creates a new Case. How should an administrator make the quick action available on the Salesforce mobile app?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Create a custom Lightning App with the action." },
      { id: "B", text: "Include the action in the Salesforce Mobile Navigation menu." },
      { id: "C", text: "Add the Salesforce Mobile and Lightning Experience action to the page layout." },
      { id: "D", text: "Modify compact Case page layout to include the action." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 116,
    text: "Universal Containers wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find deal records via a search. What option should the administrator adjust to fully restrict access?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Record settings and search index" },
      { id: "B", text: "Page layouts and field-level security" },
      { id: "C", text: "Permissions and tab visibility" },
      { id: "D", text: "App permissions and search terms" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 117,
    text: "Cloud Kicks wants its reports to show a Fiscal Year that starts on February 1 and has 12 months. How should the administrator address this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Set the Fiscal Year to Custom and the duration to 4 quarters." },
      { id: "B", text: "Set the Fiscal Year to Custom and the starting month as February." },
      { id: "C", text: "Set the Fiscal Year to Standard and the duration to 12 months." },
      { id: "D", text: "Set the Fiscal Year to Standard and the starting month as February." }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 118,
    text: "The VP of sales at Cloud Kicks is receiving an error message that prevents them from saving an opportunity. The administrator attempted the same edit without receiving an error. How can the administrator validate the error the user is receiving?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Log in as the user." },
      { id: "B", text: "Review the sharing model." },
      { id: "C", text: "View the setup audit trail." },
      { id: "D", text: "Edit the page layout." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 119,
    text: "Support agents at Cloud Kicks are spending too much time finding resources to solve customer cases. The agents need a more efficient way to find documentation and similar cases from the Case page layout. How should an administrator meet this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Configure Knowledge with articles and data categories." },
      { id: "B", text: "Create a custom object to capture popular Case resolutions." },
      { id: "C", text: "Use an interview flow to capture Case details." },
      { id: "D", text: "Direct users to Global Search to look for similar cases." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 120,
    text: "AW Computing wants to prevent users from updating the Account Annual Revenue field to be a negative value or an amount more than $100 billion. How should an administrator accomplish this request?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Enable Account Revenue limits in Setup, with 0 as the minimum and 100 billion as the maximum." },
      { id: "B", text: "Create a validation rule that displays an error if Account Revenue is below 0 or greater than 100 billion." },
      { id: "C", text: "Make the Account Revenue field required on the page layout." },
      { id: "D", text: "Build a scheduled report displaying Accounts with Account Revenue that is negative or greater than 100 billion." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 121,
    text: "Sales reps at Northern Trail Outfitters have asked for a way to change the Probability field value of their Opportunities. What should an administrator suggest to meet this request?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Configure Forecasting support." },
      { id: "B", text: "Create a custom field on Opportunity." },
      { id: "C", text: "Define a new Stage picklist value." },
      { id: "D", text: "Make the field editable on page layouts." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 122,
    text: "What are three characteristics of a master-detail relationship?",
    instruction: "Choose 3 answers",
    options: [
      { id: "A", text: "The owner field on the detail records is the owner of the master record." },
      { id: "B", text: "Each object can have up to five master detail relationships." },
      { id: "C", text: "Roll-up summaries are supported in master-detail relationships." },
      { id: "D", text: "The master object can be a standard or custom object." },
      { id: "E", text: "Permissions for the detail record are set independently of the master." }
    ],
    correctAnswers: ["A", "C", "D"]
  },
  {
    id: 123,
    text: "Northern Trail Outfitters has hired interns to enter Leads into Salesforce and has requested a way to identify these new records from existing Leads. What approach should an administrator take to meet this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Define a record type and assign it to the Interns." },
      { id: "B", text: "Create a separate Lead Lightning App." },
      { id: "C", text: "Update the active Lead Assignment Rules." },
      { id: "D", text: "Set up Web-to-Lead for the Interns' use." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 124,
    text: "What should an administrator use as an identifier when importing and updating records from a separate financial system?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Rich Text field" },
      { id: "B", text: "External ID" },
      { id: "C", text: "Record ID" },
      { id: "D", text: "Auto-Number field" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 125,
    text: "The marketing director at Northern Trail Outfitters has requested that the Budget field is populated in order for the Lead Status field to be marked as qualified. What tool should the administrator use to fulfill this request?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Validation Rule" },
      { id: "B", text: "Lead Conversion" },
      { id: "C", text: "Workflow Rule" },
      { id: "D", text: "Require Field" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 126,
    text: "The administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is \"Search Engine\", the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not \"Search Engine\", this picklist should be hidden. How should the administrator complete this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Use an assignment element, one for when Lead Source is \"Search Engine\" and one for everything else." },
      { id: "B", text: "Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is \"Search Engine\"." },
      { id: "C", text: "Assign a decision element to direct the user to a second screen to hold Specific Search Engine only when Lead Source is \"Search Engine\"." },
      { id: "D", text: "Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is \"Search Engine\"." }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 127,
    text: "A user at Cloud Kicks is having issues logging in to Salesforce. The user asks the administrator to reset their password. Which two options should the administrator consider when resetting the user's password?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Resetting the password will change the user's password policy." },
      { id: "B", text: "After resetting a password, the user may be required to activate their device to successfully log in to Salesforce." },
      { id: "C", text: "Resetting a locked-out user's password automatically unlocks the user's account." },
      { id: "D", text: "Single sign-on users can reset their own passwords using the forgot password link." }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 128,
    text: "The Human Resources department at Northern Trail Outfitters wants employees to provide feedback about their managers using a custom object in Salesforce. It is important that managers are unable to see the feedback records from their staff. How should an administrator configure the custom object to meet this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Uncheck Grant Access Using Hierarchies." },
      { id: "B", text: "Define a criteria-based sharing rule." },
      { id: "C", text: "Set the Default External Access to Private." },
      { id: "D", text: "Configure an owner-based sharing rule." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 129,
    text: "Cloud Kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple designs for one product across various stages. Which two steps should the administrator configure to meet this requirement?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Add a custom master-detail field for shoe designs on the Design object." },
      { id: "B", text: "Configure a custom lookup field for shoe designs on the Product object." },
      { id: "C", text: "Use the standard object for designs." },
      { id: "D", text: "Create a custom object for shoe designs." }
    ],
    correctAnswers: ["A", "D"]
  },
  {
    id: 130,
    text: "An administrator at DreamHouse Realty wants an easier way to assign cases based on agent capacity and skill set. Which feature should the administrator enable to meet this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Escalation Rules" },
      { id: "B", text: "Knowledge Management" },
      { id: "C", text: "Territory Management" },
      { id: "D", text: "Omni-Channel" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 131,
    text: "The administrator at Cloud Kicks updated the custom object Event to include a lookup field to the primary contact for the event. When running an event report, they want to reference fields from the associated contact record. What should the administrator do to pull contact fields into the custom report?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Edit the custom Event report type and add fields related via lookup." },
      { id: "B", text: "Use a dashboard with filters to show Event and contact data as requested." },
      { id: "C", text: "Create a new report type with Event as the primary object and Contact as a related object." },
      { id: "D", text: "Configure formula fields on Event to populate contact information." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 132,
    text: "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records. What should the administrator do to meet this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Assign the standard System Administrator profile to the analytics user." },
      { id: "B", text: "Create and assign a custom profile with Delete access removed for each object." },
      { id: "C", text: "Give the user View All access and assign them to the highest role in the role hierarchy." },
      { id: "D", text: "Create and assign a permission set that includes Read, Create, and Edit access." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 133,
    text: "An administrator at Cloud Kicks has a flow in production that is supposed to create new records. However, no new records are being created. What could the issue be?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "The flow trigger is missing." },
      { id: "B", text: "The flow is read only." },
      { id: "C", text: "The flow URL is deactivated." },
      { id: "D", text: "The flow is inactive." }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 134,
    text: "When a sales rep clicks a button on an opportunity, a simple discount calculator screen should be launched. Which automation tool should an administrator use to build this discount calculator screen?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Flow Builder" },
      { id: "B", text: "Platform Event" },
      { id: "C", text: "Workflow Rule" },
      { id: "D", text: "Process Builder" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 135,
    text: "Executives at Cloud Kicks have reported that their dashboards are showing inaccurate data. The administrator has discovered that users have been changing the source reports. Which two actions should the administrator take to preserve the integrity of the source reports?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Change the dashboard to be a dynamic dashboard." },
      { id: "B", text: "Move the dashboard reports to the view-only folder." },
      { id: "C", text: "Create a new report folder with viewer access." },
      { id: "D", text: "Move the dashboard to the user's private folder." }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 136,
    text: "An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network. What are two considerations for this configuration?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "IP address restrictions are set on the profile or the org." },
      { id: "B", text: "Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions." },
      { id: "C", text: "Restrict U2F Security Keys on the user's profile to enforce login hours." },
      { id: "D", text: "Assign single sign-on to a permission set to allow users to log in when outside the network." }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 137,
    text: "The events manager at DreamHouse Realty has a hot lead from a successful open house that needs to become a Contact with an associated Opportunity. How should this be accomplished from the Campaign keeping the associated Campaign Member history?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Delete the lead and create a new Contact and Opportunity." },
      { id: "B", text: "Clone the lead and convert the cloned record to a Contact." },
      { id: "C", text: "Convert the lead from the Campaign Member Detail page." },
      { id: "D", text: "Add a Contact from the Campaign Member Detail page." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 138,
    text: "Universal Containers has two sales teams, sales team A and sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How should the administrator share records owned by sales team A with sales team B?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Criteria-based sharing" },
      { id: "B", text: "Hierarchical sharing" },
      { id: "C", text: "Use manual sharing" },
      { id: "D", text: "Owner-based sharing" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 139,
    text: "The CTO of AW Computing has defined a new policy for cases to improve customer satisfaction. All cases submitted with a Case Reason of Installation must be acknowledged immediately via email and assigned to the appropriate agents. Any cases that are still in the New status after 4 hours must be escalated to support management. What case management tools need to be utilized for this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Auto-response rules, Queues, Macros" },
      { id: "B", text: "Auto-response rules, Queues, Escalation Rules" },
      { id: "C", text: "Auto-response rules, Macros, Entitlements" },
      { id: "D", text: "Auto-response rules, Entitlements, Escalation Rules" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 140,
    text: "At Universal Containers, there is a custom field on the Lead named Product Category. Management wants this information to be part of the Opportunity upon lead conversion. What action should the administrator take to satisfy the request?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Configure the product categories picklist field on the product." },
      { id: "B", text: "Create a custom field on the Opportunity and map the two fields." },
      { id: "C", text: "Create a workflow to update Opportunity fields based on the lead." },
      { id: "D", text: "Map the lead custom field to the product's product category field." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 141,
    text: "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their website. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose. How should an administrator configure this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry." },
      { id: "B", text: "Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry." },
      { id: "C", text: "Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule." },
      { id: "D", text: "Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 142,
    text: "Universal Containers introduced a new product and wants to track all associated cases that get logged. They are looking for an automated solution that would give the product's two lead engineers read/write access to all new cases that reference the new product. What should an administrator do to satisfy this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Create a user-based sharing rule and an ad-hoc case team." },
      { id: "B", text: "Create a queue and a criteria-based sharing rule." },
      { id: "C", text: "Create an auto-response rule and a public group." },
      { id: "D", text: "Create a predefined case team and an assignment rule." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 143,
    text: "At Cloud Kicks, sales reps use discounts on the opportunity record to help win sales on particular products. When an opportunity is won, they then have to manually apply the discount to the related opportunity products. The sales manager has asked if there is a way to automate this time-consuming task. What should the administrator use to deliver this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Approval Process" },
      { id: "B", text: "Flow Builder" },
      { id: "C", text: "Formula Field" },
      { id: "D", text: "Prebuilt Macro" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 144,
    text: "Cloud Kicks has a custom object called Shipments. The company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain. What type of relationship should the administrator make between Shipments and Accounts?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Shipments should have a master detail to Accounts." },
      { id: "B", text: "Accounts should have a lookup to Shipments." },
      { id: "C", text: "Shipments should have a lookup to Account." },
      { id: "D", text: "Accounts should have a master detail to Shipments." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 145,
    text: "An administrator has been asked to change the data type of an auto number to a text field. What should the administrator be aware of before changing the field?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Existing field values will be converted." },
      { id: "B", text: "Existing field values will remain unchanged." },
      { id: "C", text: "Existing Auto Number field to Text is prevented." },
      { id: "D", text: "Existing field values will be deleted." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 146,
    text: "The administrator at Ursa Major Solar has been asked to change the Work Item and Project custom object relationship from a master-detail to a lookup. Which scenario could prevent the administrator from fulfilling this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Roll-up summary fields exist on the master object." },
      { id: "B", text: "The lookup field in all the records contains a value." },
      { id: "C", text: "The lookup field is required for saving records." },
      { id: "D", text: "A Junction object is required to support the lookup." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 147,
    text: "Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled in on every Invoice record. How should an administrator ensure this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Create a Process Builder to set the field." },
      { id: "B", text: "Make the field universally required." },
      { id: "C", text: "Define an approval process for the field." },
      { id: "D", text: "Require the field on the record type." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 148,
    text: "What are three settings an administrator should configure to make it easy for approvers to respond to approval requests?",
    instruction: "Choose 3 answers",
    options: [
      { id: "A", text: "Create a flow to automatically approve all records." },
      { id: "B", text: "Specify initial submission actions within the approval process." },
      { id: "C", text: "Update the organization's Chatter settings to allow approvals." },
      { id: "D", text: "Add the Items to Approve component to the approvers' home page." },
      { id: "E", text: "Enable the organization's email approval response setting." }
    ],
    correctAnswers: ["C", "D", "E"]
  },
  {
    id: 149,
    text: "Cloud Kicks (CK) is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account. How should the administrator recommend automating this business process?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Configure a scheduled flow in Flow Builder." },
      { id: "B", text: "Create a workflow rule with an outbound message." },
      { id: "C", text: "Set up a scheduled process in Process Builder." },
      { id: "D", text: "Use a process to update the account when it is edited." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 150,
    text: "The call center manager at Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status, and owner. What should an administrator add to the dashboard to fulfill the request?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Bucket Column" },
      { id: "B", text: "Dashboard Filter" },
      { id: "C", text: "Combination Chart" },
      { id: "D", text: "Dashboard Component" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 151,
    text: "Cloud Kicks generates leads for its different product categories (shoes, apparel, and accessories) through many different sources. While some lead sources are used for all three categories, other lead sources are specific to a single category. The VP of marketing requests that only the proper lead sources be displayed based on the product category chosen. How should the administrator configure Salesforce to meet this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Create business processes and record types for each of the three product categories." },
      { id: "B", text: "Create a single business process, then create record types for each product category." },
      { id: "C", text: "Create a dependency between the Product Category field and Lead Source field." },
      { id: "D", text: "Create a page layout for each category and filter the Lead Source field based on category." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 152,
    text: "An administrator at Cloud Kicks needs to export a file of closed won opportunities from the last 90 days. The file should include the Opportunity Name, ID, Close Date, and Amount. How should the administrator export this file?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Data Loader" },
      { id: "B", text: "Data Export Wizard" },
      { id: "C", text: "Data Import Wizard" },
      { id: "D", text: "Data Export Service" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 153,
    text: "Ursa Major Solar has service level agreements (SLA) that are routed to support queues. Cases that meet the 24 hour SLA need to be automatically re-assigned to the next tier queue. Which feature should be used to fulfill this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Einstein Case Routing" },
      { id: "B", text: "Case assignment rule" },
      { id: "C", text: "Auto-response rule" },
      { id: "D", text: "Case escalation rule" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 154,
    text: "An administrator is building a Lightning app and sees a message that a My Domain must be set up first. What should the administrator take into consideration when enabling My Domain?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "The login for all internal and external users changes to the My Domain login." },
      { id: "B", text: "Single sign-on must be disabled prior to implementing My Domain." },
      { id: "C", text: "A deployed My Domain is irreversible and renaming is unavailable." },
      { id: "D", text: "The URL instance for a My Domain stays the same for every release." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 155,
    text: "AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record. What should AWC use to track Contacts?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Create a junction object to track many-to-many relationship." },
      { id: "B", text: "Enable Contacts to multiple Accounts." },
      { id: "C", text: "Use partner community to track the Contacts." },
      { id: "D", text: "Create a new Contact record for each agency." }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 156,
    text: "The administrator at Cloud Kicks has been asked to change the company's Shoe Style field to prevent users from selecting more than one style on a record. Which two steps should an administrator do to accomplish this?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Change the field type from a multi-select picklist field to a picklist field." },
      { id: "B", text: "Select the \"Choose only one value\" checkbox on the picklist field." },
      { id: "C", text: "Reactivate the appropriate Shoe Style values after the field type changes." },
      { id: "D", text: "Back-up the Shoe Style values in existing records." }
    ],
    correctAnswers: ["A", "D"]
  },
  {
    id: 157,
    text: "Universal Containers is trying to improve the user experience when searching for the right status on a case. The company currently has one support process that is used for all record types on cases. The support process has 10 status values. Service reps say they never need more than five depending on what kind of case they are working on. How should the administrator improve on the current implementation?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Review which status choices are needed for each record type and create support processes for each that is necessary." },
      { id: "B", text: "Edit the status choices directly on the record type." },
      { id: "C", text: "Reduce the number of case status values to five." },
      { id: "D", text: "Create a Screen Flow that shows only the correct values for status and surface the flow in the utility bar of the console." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 158,
    text: "An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in variables for use later in the flow. What flow element should the administrator add?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Assignment" },
      { id: "B", text: "Update Records" },
      { id: "C", text: "Get Records" },
      { id: "D", text: "Create Records" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 159,
    text: "An administrator at DreamHouse Realty needs to create customized pages for the Salesforce mobile app. Which two types of pages could an administrator build and customize using the Lightning App Builder?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Record page" },
      { id: "B", text: "Dashboard page" },
      { id: "C", text: "User page" },
      { id: "D", text: "App page" }
    ],
    correctAnswers: ["A", "D"]
  },
  {
    id: 160,
    text: "Users have noticed that when they click on a report in a dashboard to view the report details, the values in the report are different from the values displayed on the dashboard. What are the two reasons this is likely to occur?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "The running dashboard user and viewer have different permissions." },
      { id: "B", text: "The dashboard needs to be refreshed." },
      { id: "C", text: "The current user does not have access to the report folder." },
      { id: "D", text: "The report needs to be refreshed." }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 161,
    text: "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options. What should an administrator configure to meet these requirements?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Validation rules that ensure that users are entering accurate sales stage information." },
      { id: "B", text: "Public groups to limit record types and sales processes for opportunities." },
      { id: "C", text: "Separate record types and sales processes for the different types of opportunities." },
      { id: "D", text: "Different page layouts that control the picklist values for the opportunity types." }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 162,
    text: "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response include the top five troubleshooting tips that could help solve the customer's issue. What should the administrator suggest to meet these requirements?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Assignment Rules" },
      { id: "B", text: "Email Alerts" },
      { id: "C", text: "Auto-Response Rules" },
      { id: "D", text: "Knowledge Articles" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 163,
    text: "Cloud Kicks wants users to only be able to choose Opportunity stage closed won if the Lead source has been selected. How should the administrator accomplish this goal?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Configure a validation rule requiring Lead source when the stage is set to closed won." },
      { id: "B", text: "Change the Opportunity stage field to read only on the page layout." },
      { id: "C", text: "Modify the Opportunity stage a dependent picklist to the Lead source field." },
      { id: "D", text: "Make Lead source a dependent picklist to the Opportunity stage field." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 164,
    text: "Cloud Kicks (CK) needs a new sales application. The administrator thinks there is an application package on the AppExchange and wants to begin testing it in a sandbox to see if it addresses CK's needs. What are two considerations when installing a managed package in a sandbox?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "The installation link has to be modified to test.salesforce.com." },
      { id: "B", text: "Any metadata changes to the package have to be replicated in production." },
      { id: "C", text: "The package will be removed any time the sandbox is refreshed." },
      { id: "D", text: "Install for Admins Only will be the only Install option available." }
    ],
    correctAnswers: ["A", "C"]
  },
  {
    id: 165,
    text: "Universal Containers wants to provide reseller partners with discounted prices on the products they purchase. How should an administrator configure this requirement?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Create a separate PriceBook for reseller partners." },
      { id: "B", text: "Build separate reseller partner products." },
      { id: "C", text: "Add a Partner_Discount_c field to the Opportunity." },
      { id: "D", text: "Use a different Opportunity record type." }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 166,
    text: "The sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should the administrator configure?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Opportunity List View" },
      { id: "B", text: "Sales Quotas" },
      { id: "C", text: "Forecasting" },
      { id: "D", text: "Opportunity Stages" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 167,
    text: "The administrator at Cloud Kicks has a custom picklist field on Lead, which is missing on the Contact when leads are converted. Which two items should the administrator do to make sure these values are populated?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Update the picklist value with a validation rule." },
      { id: "B", text: "Set the picklist field to be required on the Lead object." },
      { id: "C", text: "Map the picklist field on the Lead to the Contact." },
      { id: "D", text: "Create a custom picklist field on Contact." }
    ],
    correctAnswers: ["C", "D"]
  },
  {
    id: 168,
    text: "Sales users at Universal Containers are reporting that it is taking a long time to edit opportunity records. Normally, the only field they are editing is the Stage field. Which two options should the administrator recommend to help simplify the process?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Create a simplified Opportunity page layout." },
      { id: "B", text: "Use a Kanban list view for Opportunity." },
      { id: "C", text: "Configure an autolaunched flow for Opportunity editing." },
      { id: "D", text: "Add a Path for stage to the opportunity record page." }
    ],
    correctAnswers: ["B", "D"]
  },
  {
    id: 169,
    text: "Ursa Major Solar offers amazing experiences for all of its employees. The employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Chatter Stream" },
      { id: "B", text: "Chatter Broadcast Group" },
      { id: "C", text: "Chatter Unlisted Group" },
      { id: "D", text: "Chatter Recommendations" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 170,
    text: "An administrator supporting a global team of Salesforce users has been asked to configure company settings. Which two options should the administrator configure?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Password Policy" },
      { id: "B", text: "Default Language" },
      { id: "C", text: "Currency Locale" },
      { id: "D", text: "Login Hours" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 171,
    text: "Ursa Major Solar wants to assist users with a guided expense report process to simplify submissions, routing, and authorizations. Which two tools should an administrator use to build this solution?",
    instruction: "Choose 2 answers",
    options: [
      { id: "A", text: "Quick Action" },
      { id: "B", text: "Approval Process" },
      { id: "C", text: "Flow Builder" },
      { id: "D", text: "Validation Rule" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 172,
    text: "The client services and customer support teams share the same profile but have different permission sets. The custom object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfill this request?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Sharing Settings" },
      { id: "B", text: "Page Layout Assignment" },
      { id: "C", text: "Component Visibility" },
      { id: "D", text: "Record Type Assignment" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 173,
    text: "Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce. Which field type should an administrator use to capture coordinates?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Custom address" },
      { id: "B", text: "External lookup" },
      { id: "C", text: "Geofence" },
      { id: "D", text: "Geolocation" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 174,
    text: "Universal Containers requires that when an opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to implement this request?",
    instruction: "Choose 1 answer",
    options: [
      { id: "A", text: "Quick Action" },
      { id: "B", text: "Outbound Message" },
      { id: "C", text: "Workflow Rule" },
      { id: "D", text: "Flow Builder" }
    ],
    correctAnswers: ["D"]
  }
];
