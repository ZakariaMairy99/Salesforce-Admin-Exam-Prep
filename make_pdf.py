from reportlab.lib.pagesizes import LETTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
import re

# The full text of the NEW questions (1-65)
questions_text = """
### Question 1
Cloud Kicks needs to be able to show different picklist values for sales and marketing users.

**Which two options will meet this requirement? Choose 2 answers**

- A. Two page layouts, one record type, two picklists
- B. One page layout, two record types, one picklist
- C. One record type, two profiles, one picklist
- D. Two permission sets, one record type, one picklist

---

### Question 2
Which two solutions could an administrator find on the AppExchange to enhance their organization?

**Choose 2 answers**

- A. Communities
- B. Consultants
- C. Customers
- D. Components

---

### Question 3
Users at Cloud Kicks want to be able to create a task that will repeat every two weeks.

**What should an administrator do to meet this requirement?**

- A. Workflow rule to create recurring tasks
- B. Turn on Recurring Activities
- C. Flow to create recurring tasks
- D. Enable Creation of Recurring Tasks

---

### Question 4
When a Cloud Kicks opportunity closes, the company would like to automatically create a renewal opportunity.

**What automation option should an administrator use to accomplish this request?**

- A. Validation rule
- B. Flow Builder
- C. Approval process
- D. Opportunity sharing rule

---

### Question 5
Northern Trail Outfitters has a custom quick action on Account that creates a new Case.

**How should an administrator make the quick action available on the Salesforce mobile app?**

- A. Create a custom Lightning App with the action.
- B. Include the action in the Salesforce Mobile Navigation menu.
- C. Add the Salesforce Mobile and Lightning Experience action to the page layout.
- D. Modify compact Case page layout to include the action.

---

### Question 6
Universal Containers wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find deal records via a search.

**What option should the administrator adjust to fully restrict access?**

- A. Record settings and search index
- B. Page layouts and field-level security
- C. Permissions and tab visibility
- D. App permissions and search terms

---

### Question 7
Cloud Kicks wants its reports to show a Fiscal Year that starts on February 1 and has 12 months.

**How should the administrator address this requirement?**

- A. Set the Fiscal Year to Custom and the duration to 4 quarters.
- B. Set the Fiscal Year to Custom and the starting month as February.
- C. Set the Fiscal Year to Standard and the duration to 12 months.
- D. Set the Fiscal Year to Standard and the starting month as February.

---

### Question 9
The VP of sales at Cloud Kicks is receiving an error message that prevents them from saving an opportunity. The administrator attempted the same edit without receiving an error.

**How can the administrator validate the error the user is receiving?**

- A. Log in as the user.
- B. Review the sharing model.
- C. View the setup audit trail.
- D. Edit the page layout.

---

### Question 10
Support agents at Cloud Kicks are spending too much time finding resources to solve customer cases. The agents need a more efficient way to find documentation and similar cases from the Case page layout.

**How should an administrator meet this requirement?**

- A. Configure Knowledge with articles and data categories.
- B. Create a custom object to capture popular Case resolutions.
- C. Use an interview flow to capture Case details.
- D. Direct users to Global Search to look for similar cases.

---

### Question 11
AW Computing wants to prevent users from updating the Account Annual Revenue field to be a negative value or an amount more than $100 billion.

**How should an administrator accomplish this request?**

- A. Enable Account Revenue limits in Setup, with 0 as the minimum and 100 billion as the maximum.
- B. Create a validation rule that displays an error if Account Revenue is below 0 or greater than 100 billion.
- C. Make the Account Revenue field required on the page layout.
- D. Build a scheduled report displaying Accounts with Account Revenue that is negative or greater than 100 billion.

---

### Question 12
Sales reps at Northern Trail Outfitters have asked for a way to change the Probability field value of their Opportunities.

**What should an administrator suggest to meet this request?**

- A. Configure Forecasting support.
- B. Create a custom field on Opportunity.
- C. Define a new Stage picklist value.
- D. Make the field editable on page layouts.

---

### Question 13
What are three characteristics of a master-detail relationship?

**Choose 3 answers**

- A. The owner field on the detail records is the owner of the master record.
- B. Each object can have up to five master detail relationships.
- C. Roll-up summaries are supported in master-detail relationships.
- D. The master object can be a standard or custom object.
- E. Permissions for the detail record are set independently of the master.

---

### Question 14
Northern Trail Outfitters has hired interns to enter Leads into Salesforce and has requested a way to identify these new records from existing Leads.

**What approach should an administrator take to meet this requirement?**

- A. Define a record type and assign it to the Interns.
- B. Create a separate Lead Lightning App.
- C. Update the active Lead Assignment Rules.
- D. Set up Web-to-Lead for the Interns' use.

---

### Question 15
What should an administrator use as an identifier when importing and updating records from a separate financial system?

- A. Rich Text field
- B. External ID
- C. Record ID
- D. Auto-Number field

---

### Question 16
The marketing director at Northern Trail Outfitters has requested that the Budget field is populated in order for the Lead Status field to be marked as qualified.

**What tool should the administrator use to fulfill this request?**

- A. Validation Rule
- B. Lead Conversion
- C. Workflow Rule
- D. Require Field

---

### Question 17
The administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is "Search Engine", the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not "Search Engine", this picklist should be hidden.

**How should the administrator complete this requirement?**

- A. Use an assignment element, one for when Lead Source is "Search Engine" and one for everything else.
- B. Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is "Search Engine".
- C. Assign a decision element to direct the user to a second screen to hold Specific Search Engine only when Lead Source is "Search Engine".
- D. Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is "Search Engine".

---

### Question 18
A user at Cloud Kicks is having issues logging in to Salesforce. The user asks the administrator to reset their password.

**Which two options should the administrator consider when resetting the user's password? Choose 2 answers**

- A. Resetting the password will change the user's password policy.
- B. After resetting a password, the user may be required to activate their device to successfully log in to Salesforce.
- C. Resetting a locked-out user's password automatically unlocks the user's account.
- D. Single sign-on users can reset their own passwords using the forgot password link.

---

### Question 19
The Human Resources department at Northern Trail Outfitters wants employees to provide feedback about their managers using a custom object in Salesforce. It is important that managers are unable to see the feedback records from their staff.

**How should an administrator configure the custom object to meet this requirement?**

- A. Uncheck Grant Access Using Hierarchies.
- B. Define a criteria-based sharing rule.
- C. Set the Default External Access to Private.
- D. Configure an owner-based sharing rule.

---

### Question 20
Cloud Kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple designs for one product across various stages.

**Which two steps should the administrator configure to meet this requirement? Choose 2 answers**

- A. Add a custom master-detail field for shoe designs on the Design object.
- B. Configure a custom lookup field for shoe designs on the Product object.
- C. Use the standard object for designs.
- D. Create a custom object for shoe designs.

---

### Question 21
An administrator at DreamHouse Realty wants an easier way to assign cases based on agent capacity and skill set.

**Which feature should the administrator enable to meet this requirement?**

- A. Escalation Rules
- B. Knowledge Management
- C. Territory Management
- D. Omni-Channel

---

### Question 22
The administrator at Cloud Kicks updated the custom object Event to include a lookup field to the primary contact for the event. When running an event report, they want to reference fields from the associated contact record.

**What should the administrator do to pull contact fields into the custom report?**

- A. Edit the custom Event report type and add fields related via lookup.
- B. Use a dashboard with filters to show Event and contact data as requested.
- C. Create a new report type with Event as the primary object and Contact as a related object.
- D. Configure formula fields on Event to populate contact information.

---

### Question 23
An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records.

**What should the administrator do to meet this requirement?**

- A. Assign the standard System Administrator profile to the analytics user.
- B. Create and assign a custom profile with Delete access removed for each object.
- C. Give the user View All access and assign them to the highest role in the role hierarchy.
- D. Create and assign a permission set that includes Read, Create, and Edit access.

---

### Question 24
An administrator at Cloud Kicks has a flow in production that is supposed to create new records. However, no new records are being created.

**What could the issue be?**

- A. The flow trigger is missing.
- B. The flow is read only.
- C. The flow URL is deactivated.
- D. The flow is inactive.

---

### Question 25
When a sales rep clicks a button on an opportunity, a simple discount calculator screen should be launched.

**Which automation tool should an administrator use to build this discount calculator screen?**

- A. Flow Builder
- B. Platform Event
- C. Workflow Rule
- D. Process Builder

---

### Question 26
Executives at Cloud Kicks have reported that their dashboards are showing inaccurate data. The administrator has discovered that users have been changing the source reports.

**Which two actions should the administrator take to preserve the integrity of the source reports? Choose 2 answers**

- A. Change the dashboard to be a dynamic dashboard.
- B. Move the dashboard reports to the view-only folder.
- C. Create a new report folder with viewer access.
- D. Move the dashboard to the user's private folder.

---

### Question 27
An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network.

**What are two considerations for this configuration? Choose 2 answers**

- A. IP address restrictions are set on the profile or the org.
- B. Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.
- C. Restrict U2F Security Keys on the user's profile to enforce login hours.
- D. Assign single sign-on to a permission set to allow users to log in when outside the network.

---

### Question 28
The events manager at DreamHouse Realty has a hot lead from a successful open house that needs to become a Contact with an associated Opportunity.

**How should this be accomplished from the Campaign keeping the associated Campaign Member history?**

- A. Delete the lead and create a new Contact and Opportunity.
- B. Clone the lead and convert the cloned record to a Contact.
- C. Convert the lead from the Campaign Member Detail page.
- D. Add a Contact from the Campaign Member Detail page.

---

### Question 29
Universal Containers has two sales teams, sales team A and sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role.

**How should the administrator share records owned by sales team A with sales team B?**

- A. Criteria-based sharing
- B. Hierarchical sharing
- C. Use manual sharing
- D. Owner-based sharing

---

### Question 30
The CTO of AW Computing has defined a new policy for cases to improve customer satisfaction. All cases submitted with a Case Reason of Installation must be acknowledged immediately via email and assigned to the appropriate agents. Any cases that are still in the New status after 4 hours must be escalated to support management.

**What case management tools need to be utilized for this requirement?**

- A. Auto-response rules, Queues, Macros
- B. Auto-response rules, Queues, Escalation Rules
- C. Auto-response rules, Macros, Entitlements
- D. Auto-response rules, Entitlements, Escalation Rules

---

### Question 31
At Universal Containers, there is a custom field on the Lead named Product Category. Management wants this information to be part of the Opportunity upon lead conversion.

**What action should the administrator take to satisfy the request?**

- A. Configure the product categories picklist field on the product.
- B. Create a custom field on the Opportunity and map the two fields.
- C. Create a workflow to update Opportunity fields based on the lead.
- D. Map the lead custom field to the product's product category field.

---

### Question 32
The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their website. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose.

**How should an administrator configure this requirement?**

- A. Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry.
- B. Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry.
- C. Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule.
- D. Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule.

---

### Question 33
Universal Containers introduced a new product and wants to track all associated cases that get logged. They are looking for an automated solution that would give the product's two lead engineers read/write access to all new cases that reference the new product.

**What should an administrator do to satisfy this requirement?**

- A. Create a user-based sharing rule and an ad-hoc case team.
- B. Create a queue and a criteria-based sharing rule.
- C. Create an auto-response rule and a public group.
- D. Create a predefined case team and an assignment rule.

---

### Question 34
At Cloud Kicks, sales reps use discounts on the opportunity record to help win sales on particular products. When an opportunity is won, they then have to manually apply the discount to the related opportunity products. The sales manager has asked if there is a way to automate this time-consuming task.

**What should the administrator use to deliver this requirement?**

- A. Approval Process
- B. Flow Builder
- C. Formula Field
- D. Prebuilt Macro

---

### Question 35
Cloud Kicks has a custom object called Shipments. The company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain.

**What type of relationship should the administrator make between Shipments and Accounts?**

- A. Shipments should have a master detail to Accounts.
- B. Accounts should have a lookup to Shipments.
- C. Shipments should have a lookup to Account.
- D. Accounts should have a master detail to Shipments.

---

### Question 36
An administrator has been asked to change the data type of an auto number to a text field.

**What should the administrator be aware of before changing the field?**

- A. Existing field values will be converted.
- B. Existing field values will remain unchanged.
- C. Existing Auto Number field to Text is prevented.
- D. Existing field values will be deleted.

---

### Question 37
The administrator at Ursa Major Solar has been asked to change the Work Item and Project custom object relationship from a master-detail to a lookup.

**Which scenario could prevent the administrator from fulfilling this requirement?**

- A. Roll-up summary fields exist on the master object.
- B. The lookup field in all the records contains a value.
- C. The lookup field is required for saving records.
- D. A Junction object is required to support the lookup.

---

### Question 38
Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled in on every Invoice record.

**How should an administrator ensure this requirement?**

- A. Create a Process Builder to set the field.
- B. Make the field universally required.
- C. Define an approval process for the field.
- D. Require the field on the record type.

---

### Question 39
What are three settings an administrator should configure to make it easy for approvers to respond to approval requests?

**Choose 3 answers**

- A. Create a flow to automatically approve all records.
- B. Specify initial submission actions within the approval process.
- C. Update the organization's Chatter settings to allow approvals.
- D. Add the Items to Approve component to the approvers' home page.
- E. Enable the organization's email approval response setting.

---

### Question 40
Cloud Kicks (CK) is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account.

**How should the administrator recommend automating this business process?**

- A. Configure a scheduled flow in Flow Builder.
- B. Create a workflow rule with an outbound message.
- C. Set up a scheduled process in Process Builder.
- D. Use a process to update the account when it is edited.

---

### Question 41
The call center manager at Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status, and owner.

**What should an administrator add to the dashboard to fulfill the request?**

- A. Bucket Column
- B. Dashboard Filter
- C. Combination Chart
- D. Dashboard Component

---

### Question 42
Cloud Kicks generates leads for its different product categories (shoes, apparel, and accessories) through many different sources. While some lead sources are used for all three categories, other lead sources are specific to a single category. The VP of marketing requests that only the proper lead sources be displayed based on the product category chosen.

**How should the administrator configure Salesforce to meet this requirement?**

- A. Create business processes and record types for each of the three product categories.
- B. Create a single business process, then create record types for each product category.
- C. Create a dependency between the Product Category field and Lead Source field.
- D. Create a page layout for each category and filter the Lead Source field based on category.

---

### Question 43
An administrator at Cloud Kicks needs to export a file of closed won opportunities from the last 90 days. The file should include the Opportunity Name, ID, Close Date, and Amount.

**How should the administrator export this file?**

- A. Data Loader
- B. Data Export Wizard
- C. Data Import Wizard
- D. Data Export Service

---

### Question 44
Ursa Major Solar has service level agreements (SLA) that are routed to support queues. Cases that meet the 24 hour SLA need to be automatically re-assigned to the next tier queue.

**Which feature should be used to fulfill this requirement?**

- A. Einstein Case Routing
- B. Case assignment rule
- C. Auto-response rule
- D. Case escalation rule

---

### Question 45
An administrator is building a Lightning app and sees a message that a My Domain must be set up first.

**What should the administrator take into consideration when enabling My Domain?**

- A. The login for all internal and external users changes to the My Domain login.
- B. Single sign-on must be disabled prior to implementing My Domain.
- C. A deployed My Domain is irreversible and renaming is unavailable.
- D. The URL instance for a My Domain stays the same for every release.

---

### Question 46
AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record.

**What should AWC use to track Contacts?**

- A. Create a junction object to track many-to-many relationship.
- B. Enable Contacts to multiple Accounts.
- C. Use partner community to track the Contacts.
- D. Create a new Contact record for each agency.

---

### Question 47
The administrator at Cloud Kicks has been asked to change the company's Shoe Style field to prevent users from selecting more than one style on a record.

**Which two steps should an administrator do to accomplish this? Choose 2 answers**

- A. Change the field type from a multi-select picklist field to a picklist field.
- B. Select the "Choose only one value" checkbox on the picklist field.
- C. Reactivate the appropriate Shoe Style values after the field type changes.
- D. Back-up the Shoe Style values in existing records.

---

### Question 48
Universal Containers is trying to improve the user experience when searching for the right status on a case. The company currently has one support process that is used for all record types on cases. The support process has 10 status values. Service reps say they never need more than five depending on what kind of case they are working on.

**How should the administrator improve on the current implementation?**

- A. Review which status choices are needed for each record type and create support processes for each that is necessary.
- B. Edit the status choices directly on the record type.
- C. Reduce the number of case status values to five.
- D. Create a Screen Flow that shows only the correct values for status and surface the flow in the utility bar of the console.

---

### Question 49
An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in variables for use later in the flow.

**What flow element should the administrator add?**

- A. Assignment
- B. Update Records
- C. Get Records
- D. Create Records

---

### Question 50
An administrator at DreamHouse Realty needs to create customized pages for the Salesforce mobile app.

**Which two types of pages could an administrator build and customize using the Lightning App Builder? Choose 2 answers**

- A. Record page
- B. Dashboard page
- C. User page
- D. App page

---

### Question 51
Users have noticed that when they click on a report in a dashboard to view the report details, the values in the report are different from the values displayed on the dashboard.

**What are the two reasons this is likely to occur? Choose 2 answers**

- A. The running dashboard user and viewer have different permissions.
- B. The dashboard needs to be refreshed.
- C. The current user does not have access to the report folder.
- D. The report needs to be refreshed.

---

### Question 52
Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options.

**What should an administrator configure to meet these requirements?**

- A. Validation rules that ensure that users are entering accurate sales stage information.
- B. Public groups to limit record types and sales processes for opportunities.
- C. Separate record types and sales processes for the different types of opportunities.
- D. Different page layouts that control the picklist values for the opportunity types.

---

### Question 53
The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response include the top five troubleshooting tips that could help solve the customer's issue.

**What should the administrator suggest to meet these requirements?**

- A. Assignment Rules
- B. Email Alerts
- C. Auto-Response Rules
- D. Knowledge Articles

---

### Question 54
Cloud Kicks wants users to only be able to choose Opportunity stage closed won if the Lead source has been selected.

**How should the administrator accomplish this goal?**

- A. Configure a validation rule requiring Lead source when the stage is set to closed won.
- B. Change the Opportunity stage field to read only on the page layout.
- C. Modify the Opportunity stage a dependent picklist to the Lead source field.
- D. Make Lead source a dependent picklist to the Opportunity stage field.

---

### Question 55
Cloud Kicks (CK) needs a new sales application. The administrator thinks there is an application package on the AppExchange and wants to begin testing it in a sandbox to see if it addresses CK's needs.

**What are two considerations when installing a managed package in a sandbox? Choose 2 answers**

- A. The installation link has to be modified to test.salesforce.com.
- B. Any metadata changes to the package have to be replicated in production.
- C. The package will be removed any time the sandbox is refreshed.
- D. Install for Admins Only will be the only Install option available.

---

### Question 56
Universal Containers wants to provide reseller partners with discounted prices on the products they purchase.

**How should an administrator configure this requirement?**

- A. Create a separate PriceBook for reseller partners.
- B. Build separate reseller partner products.
- C. Add a Partner_Discount_c field to the Opportunity.
- D. Use a different Opportunity record type.

---

### Question 57
The sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing.

**Which two features should the administrator configure? Choose 2 answers**

- A. Opportunity List View
- B. Sales Quotas
- C. Forecasting
- D. Opportunity Stages

---

### Question 58
The administrator at Cloud Kicks has a custom picklist field on Lead, which is missing on the Contact when leads are converted.

**Which two items should the administrator do to make sure these values are populated? Choose 2 answers**

- A. Update the picklist value with a validation rule.
- B. Set the picklist field to be required on the Lead object.
- C. Map the picklist field on the Lead to the Contact.
- D. Create a custom picklist field on Contact.

---

### Question 59
Sales users at Universal Containers are reporting that it is taking a long time to edit opportunity records. Normally, the only field they are editing is the Stage field.

**Which two options should the administrator recommend to help simplify the process? Choose 2 answers**

- A. Create a simplified Opportunity page layout.
- B. Use a Kanban list view for Opportunity.
- C. Configure an autolaunched flow for Opportunity editing.
- D. Add a Path for stage to the opportunity record page.

---

### Question 60
Ursa Major Solar offers amazing experiences for all of its employees. The employee engagement committee wants to post updates while restricting other employees from posting.

**What should the administrator create to meet this request?**

- A. Chatter Stream
- B. Chatter Broadcast Group
- C. Chatter Unlisted Group
- D. Chatter Recommendations

---

### Question 61
An administrator supporting a global team of Salesforce users has been asked to configure company settings.

**Which two options should the administrator configure? Choose 2 answers**

- A. Password Policy
- B. Default Language
- C. Currency Locale
- D. Login Hours

---

### Question 62
Ursa Major Solar wants to assist users with a guided expense report process to simplify submissions, routing, and authorizations.

**Which two tools should an administrator use to build this solution? Choose 2 answers**

- A. Quick Action
- B. Approval Process
- C. Flow Builder
- D. Validation Rule

---

### Question 63
The client services and customer support teams share the same profile but have different permission sets. The custom object Retention related list needs to be restricted to the client services team on the Lightning record page layout.

**What should the administrator use to fulfill this request?**

- A. Sharing Settings
- B. Page Layout Assignment
- C. Component Visibility
- D. Record Type Assignment

---

### Question 64
Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce.

**Which field type should an administrator use to capture coordinates?**

- A. Custom address
- B. External lookup
- C. Geofence
- D. Geolocation

---

### Question 65
Universal Containers requires that when an opportunity is closed won, all other open opportunities on the same account must be marked as closed lost.

**Which automation solution should an administrator use to implement this request?**

- A. Quick Action
- B. Outbound Message
- C. Workflow Rule
- D. Flow Builder
"""

def generate_pdf(text, filename):
    doc = SimpleDocTemplate(filename, pagesize=LETTER)
    styles = getSampleStyleSheet()
    
    # Custom Styles
    title_style = ParagraphStyle(
        'Title',
        parent=styles['Heading1'],
        alignment=1, # Center
        spaceAfter=20
    )
    
    question_style = ParagraphStyle(
        'Question',
        parent=styles['Heading3'],
        fontSize=11,
        spaceAfter=10,
        spaceBefore=15
    )
    
    body_style = ParagraphStyle(
        'Body',
        parent=styles['BodyText'],
        fontSize=10,
        spaceAfter=5
    )
    
    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['BodyText'],
        fontSize=10,
        leftIndent=20,
        spaceAfter=2
    )

    story = []
    
    # Title
    story.append(Paragraph("Salesforce Certified Administrator Practice Questions (1-65)", title_style))
    story.append(Spacer(1, 12))
    
    # Split by the separator
    parts = text.split("---")
    
    for part in parts:
        lines = part.strip().split('\n')
        
        current_header = ""
        current_question_text = []
        options = []
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
                
            # Header
            if line.startswith("### Question"):
                current_header = line.replace("###", "").strip()
                continue
                
            # Options (lines starting with -)
            if line.startswith("- "):
                options.append(line[2:])
                continue
                
            # Regular text (Question body or instruction)
            # Replace bold markdown with HTML tags for reportlab
            formatted_line = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', line)
            current_question_text.append(formatted_line)

        # Build story elements for this block
        if current_header:
            story.append(Paragraph(current_header, question_style))
        
        if current_question_text:
            full_q_text = "<br/>".join(current_question_text)
            story.append(Paragraph(full_q_text, body_style))
            
        if options:
            story.append(Spacer(1, 5))
            for opt in options:
                story.append(Paragraph(f"• {opt}", bullet_style))
        
        story.append(Spacer(1, 10))

    doc.build(story)
    return filename

# Generate
# Make sure to run this in a folder where you have write permission
generate_pdf(questions_text, "Admin Practice Exam 3.pdf")