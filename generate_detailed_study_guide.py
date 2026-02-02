from reportlab.lib.pagesizes import LETTER
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

def create_detailed_study_guide_pdf():
    doc = SimpleDocTemplate("Salesforce_Admin_Config_Detailed.pdf", pagesize=LETTER,
                            rightMargin=72, leftMargin=72, topMargin=72, bottomMargin=72)
    
    styles = getSampleStyleSheet()
    
    # Custom Styles
    styles.add(ParagraphStyle(name='MainTitle', parent=styles['Heading1'], alignment=TA_CENTER, fontSize=24, spaceAfter=20, textColor=colors.HexColor('#005fb2')))
    styles.add(ParagraphStyle(name='SubTitle', parent=styles['Heading2'], alignment=TA_CENTER, fontSize=18, spaceAfter=30, textColor=colors.HexColor('#444444')))
    
    styles.add(ParagraphStyle(name='SectionHeader', parent=styles['Heading2'], fontSize=16, spaceBefore=20, spaceAfter=12, textColor=colors.HexColor('#005fb2'), borderPadding=5, borderWidth=0, borderColor=colors.white))
    styles.add(ParagraphStyle(name='TopicHeader', parent=styles['Heading3'], fontSize=14, spaceBefore=12, spaceAfter=6, textColor=colors.HexColor('#2c3e50')))
    
    styles.add(ParagraphStyle(name='NormalText', parent=styles['Normal'], fontSize=10, leading=14, spaceAfter=6))
    styles.add(ParagraphStyle(name='BoldText', parent=styles['Normal'], fontSize=10, leading=14, spaceAfter=6, fontName='Helvetica-Bold'))
    styles.add(ParagraphStyle(name='BulletPoint', parent=styles['Normal'], fontSize=10, leading=14, leftIndent=15, splitLongWords=1, spaceAfter=2, bulletIndent=5))
    
    styles.add(ParagraphStyle(name='ExamTip', parent=styles['Normal'], fontSize=10, leading=13, backColor=colors.HexColor('#fff3cd'), borderColor=colors.HexColor('#ffeeba'), borderWidth=1, borderPadding=8, spaceBefore=8, spaceAfter=8, textColor=colors.HexColor('#333333')))
    styles.add(ParagraphStyle(name='Mantra', parent=styles['Normal'], fontSize=11, leading=14, backColor=colors.HexColor('#e2e3e5'), borderColor=colors.HexColor('#d6d8db'), borderWidth=1, borderPadding=5, spaceBefore=5, spaceAfter=10, alignment=TA_CENTER, fontName='Helvetica-Oblique'))

    story = []

    # --- Header ---
    story.append(Paragraph("Salesforce Admin Certification Study Guide", styles['MainTitle']))
    story.append(Paragraph("Configuration and Setup: 15%", styles['SubTitle']))
    story.append(Spacer(1, 10))

    # --- EXTERNAL SECURITY ---
    story.append(Paragraph("🔐 EXTERNAL SECURITY", styles['SectionHeader']))
    
    story.append(Paragraph("Password Policies", styles['TopicHeader']))
    story.append(Paragraph("<b>Organization-Wide Password Policies:</b> (Setup → Security Controls → Password Policies)", styles['NormalText']))
    story.append(Paragraph("• <b>Password Length:</b> Minimum 8 chars recommended", styles['BulletPoint']))
    story.append(Paragraph("• <b>Complexity:</b> Alpha, numeric, uppercase, lowercase, special chars", styles['BulletPoint']))
    story.append(Paragraph("• <b>Expiration:</b> 30, 60, 90 days, 1 year, or Never", styles['BulletPoint']))
    story.append(Paragraph("• <b>History:</b> Remembers 3-24 previous passwords (prevent reuse)", styles['BulletPoint']))
    story.append(Paragraph("• <b>Lockout:</b> Duration after failed attempts (15 mins - indefinite)", styles['BulletPoint']))
    
    story.append(Paragraph("<b>Profile-Level Policies:</b> Override org-wide settings. specific to profile. More restrictive settings can be applied here.", styles['NormalText']))
    
    story.append(Paragraph("<b>Exam Tips:</b><br/>• Profile settings OVERRIDE organization settings.<br/>• Users with 'Password Never Expires' permission are exempt.<br/>• When you expire all passwords, users must reset on next login.", styles['ExamTip']))

    story.append(Paragraph("IP Restrictions", styles['TopicHeader']))
    data_ip = [
        ['Feature', 'Trusted IP Ranges', 'Login IP Ranges'],
        ['Level', 'Organization (Network Access)', 'Profile'],
        ['Effect (Outside Range)', '<b>Challenge</b> (Verification Code)', '<b>Access Denied</b> (Block)'],
        ['Purpose', 'Convenience (Skip MFA/Code)', 'Security (Restrict Access)']
    ]
    t_ip = Table(data_ip, colWidths=[100, 160, 160])
    t_ip.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#005fb2')),
        ('TEXTCOLOR', (0,0), (-1,0), colors.white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0,0), (-1,0), 6),
        ('GRID', (0,0), (-1,-1), 1, colors.HexColor('#dddddd')),
        ('BACKGROUND', (0,1), (-1,-1), colors.HexColor('#f9f9f9')),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 6)
    ]))
    story.append(t_ip)
    story.append(Spacer(1, 5))
    story.append(Paragraph("<b>Exam Scenario:</b> Which allows login but asks for code? <i>Trusted IP Ranges</i>. Which blocks login? <i>Login IP Ranges</i>.", styles['ExamTip']))

    story.append(Paragraph("Network and Login Settings", styles['TopicHeader']))
    story.append(Paragraph("<b>Login Hours (Profile-Level):</b> Restricts WHEN users can log in.", styles['NormalText']))
    story.append(Paragraph("• If user is logged in & hours end: They can VIEW current page but CANNOT save/act.", styles['BulletPoint']))
    story.append(Spacer(1,5))
    story.append(Paragraph("<b>Session Settings:</b>", styles['NormalText']))
    story.append(Paragraph("• Timeout: 15 mins to 24 hours. (Profile overrides Org).", styles['BulletPoint']))
    story.append(Paragraph("• Best Practice: 2 hours or less, Force logout on timeout.", styles['BulletPoint']))


    story.append(PageBreak())

    # --- INTERNAL SECURITY ---
    story.append(Paragraph("🔒 INTERNAL SECURITY", styles['SectionHeader']))

    story.append(Paragraph("Profiles", styles['TopicHeader']))
    story.append(Paragraph("Mantra: \"Profiles DO\" (control what users can DO)", styles['Mantra']))
    story.append(Paragraph("Controls: CRED Permissions, Objects, Fields, Page Layouts, Record Types, Login Hours/IPs.", styles['NormalText']))
    story.append(Paragraph("• Every user needs exactly ONE profile.", styles['BulletPoint']))
    story.append(Paragraph("• Profiles define BASELINE permissions. They can ONLY restrict, not expand beyond license.", styles['BulletPoint']))

    story.append(Paragraph("Permission Sets", styles['TopicHeader']))
    story.append(Paragraph("• <b>Purpose:</b> Add permissions BEYOND profile.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Key:</b> Users can have MULTIPLE. Additive ONLY.", styles['BulletPoint']))
    story.append(Paragraph("• Use for temporary or specialized access (e.g., Import Leads for one user).", styles['BulletPoint']))

    story.append(Paragraph("Roles and Role Hierarchy", styles['TopicHeader']))
    story.append(Paragraph("Mantra: \"Roles SEE\" (control what users can SEE)", styles['Mantra']))
    story.append(Paragraph("• Opens access VERTICALLY. Manager sees Subordinate's records.", styles['NormalText']))
    story.append(Paragraph("• Peers at the same level CANNOT see each other's data via Role Hierarchy.", styles['NormalText']))
    story.append(Paragraph("• <b>Grant Access Using Hierarchies:</b> Checkbox on OWD. If unchecked, hierarchy doesn't apply (Standard objects always True).", styles['NormalText']))

    story.append(Paragraph("Organization-Wide Defaults (OWD)", styles['TopicHeader']))
    story.append(Paragraph("<b>The FOUNDATION of Record-Level Security.</b> Set to MOST RESTRICTIVE.", styles['BoldText']))
    story.append(Paragraph("1. <b>Private:</b> Only owner & hierarchy see record.", styles['BulletPoint']))
    story.append(Paragraph("2. <b>Public Read Only:</b> All see, only owner edits.", styles['BulletPoint']))
    story.append(Paragraph("3. <b>Public Read/Write:</b> All see and edit.", styles['BulletPoint']))
    story.append(Paragraph("• OWD is the baseline. Sharing Rules/Roles can only GRANT MORE access.", styles['ExamTip']))

    story.append(Paragraph("Sharing Rules & Manual Sharing", styles['TopicHeader']))
    story.append(Paragraph("<b>Sharing Rules:</b> Lateral/Horizontal sharing.", styles['NormalText']))
    story.append(Paragraph("• <b>Ownership-based:</b> Share records owned by Sales with Marketing.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Criteria-based:</b> Share records where State='CA' with West Coast Team.", styles['BulletPoint']))
    story.append(Paragraph("<b>Manual Sharing:</b> One-off sharing by owner/admin for exceptions.", styles['NormalText']))

    story.append(Paragraph("Field-Level Security (FLS)", styles['TopicHeader']))
    story.append(Paragraph("Controls visibility of specific fields (e.g. Salary).", styles['NormalText']))
    story.append(Paragraph("• <b>Visible:</b> User sees field.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Read-Only:</b> User sees but cannot edit.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Exam Key:</b> FLS overrides Page Layouts. If FLS says Hidden, it's hidden everywhere (API, Reports, etc).", styles['ExamTip']))

    story.append(PageBreak())

    # --- VISIBILITY & ACCESS ---
    story.append(Paragraph("📋 VISIBILITY & ACCESS", styles['SectionHeader']))

    story.append(Paragraph("Record Types vs Page Layouts", styles['TopicHeader']))
    data_vis = [
        ['Record Types Control', 'Page Layouts Control'],
        ['• Picklist Values\n• Business Processes (Stages)\n• Page Layout Assignment', '• Field Placement/Order\n• Required/Read-Only (UI Only)\n• Related Lists/Buttons']
    ]
    t_vis = Table(data_vis, colWidths=[230, 230])
    t_vis.setStyle(TableStyle([
        ('GRID', (0,0), (-1,-1), 1, colors.grey),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 8)
    ]))
    story.append(t_vis)

    story.append(Paragraph("<b>Scenario:</b> Sales team needs different stages for 'Enterprise' vs 'SMB' deals? <br/><b>Answer:</b> Create 2 Record Types.", styles['ExamTip']))

    # --- ORG INFORMATION ---
    story.append(Paragraph("📊 ORG INFORMATION & SETTINGS", styles['SectionHeader']))
    
    story.append(Paragraph("Company Information", styles['TopicHeader']))
    story.append(Paragraph("• <b>Org ID:</b> Unique 15-char ID. Required for Support.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Licenses:</b> View User (CRM), Feature (Marketing), & Permission Set licenses.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Fiscal Year:</b> Standard or Custom. Custom is irreversible.", styles['BulletPoint']))
    
    story.append(Paragraph("Business Hours & Locale", styles['TopicHeader']))
    story.append(Paragraph("• <b>Business Hours:</b> Affects Case Escalation & Entitlements.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Locale Settings:</b> Language, Timezone, Currency format.", styles['BulletPoint']))
    story.append(Paragraph("• User Personal settings override Org Default settings.", styles['NormalText']))

    # --- END USER CHANGES ---
    story.append(Paragraph("🛠️ END-USER CHANGES", styles['SectionHeader']))
    story.append(Paragraph("<b>Users CAN change:</b> Name, Phone, Email, Timezone, Password, Language.", styles['NormalText']))
    story.append(Paragraph("<b>Users CANNOT change:</b> Profile, Role, License.", styles['NormalText']))
    story.append(Paragraph("<b>App Navigation:</b> Users can reorder tabs and add items (if allowed). Cannot rename standard tabs.", styles['NormalText']))

    story.append(PageBreak())

    # --- TROUBLESHOOTING ---
    story.append(Paragraph("🔍 TROUBLESHOOTING & AUDITING", styles['SectionHeader']))
    
    story.append(Paragraph("Setup Audit Trail", styles['TopicHeader']))
    story.append(Paragraph("• Tracks configuration changes (metadata).", styles['NormalText']))
    story.append(Paragraph("• <b>History:</b> Last 20 changes in UI. Last <b>180 days (6 months)</b> via CSV download.", styles['BulletPoint']))
    
    story.append(Paragraph("Login History", styles['TopicHeader']))
    story.append(Paragraph("• Tracks Method, Status, IP, Time of login.", styles['NormalText']))
    story.append(Paragraph("• Use to troubleshoot 'Restricted IP' errors or 'Invalid Password'.", styles['BulletPoint']))

    # --- STRATEGY ---
    story.append(Paragraph("🎯 EXAM STRATEGY & KEY CONCEPTS", styles['SectionHeader']))
    
    story.append(Paragraph("Critical Distinctions", styles['TopicHeader']))
    story.append(Paragraph("1. <b>Trusted IP</b> (Skip MFA) vs <b>Login IP</b> (Block Access).", styles['BulletPoint']))
    story.append(Paragraph("2. <b>Profile</b> (One per user) vs <b>Permission Set</b> (Many per user).", styles['BulletPoint']))
    story.append(Paragraph("3. <b>OWD</b> (Restrictive Baseline) vs <b>Sharing Rules</b> (Open Access).", styles['BulletPoint']))

    story.append(Paragraph("Common Scenarios", styles['TopicHeader']))
    story.append(Paragraph("• <i>User logins from home blocked?</i> -> Check **Login IP Ranges**.", styles['BulletPoint']))
    story.append(Paragraph("• <i>Manager needs to see team's data?</i> -> Use **Role Hierarchy**.", styles['BulletPoint']))
    story.append(Paragraph("• <i>HR needs to see Salary, Sales shouldn't?</i> -> Use **Field Level Security**.", styles['BulletPoint']))
    story.append(Paragraph("• <i>Who changed that setting last week?</i> -> Check **Setup Audit Trail**.", styles['BulletPoint']))

    story.append(Spacer(1, 10))
    story.append(Paragraph("<b>Summary Checklist</b>", styles['TopicHeader']))
    story.append(Paragraph("[ ] Diff btwn Trusted IP & Login IP?", styles['BulletPoint']))
    story.append(Paragraph("[ ] How Role Hierarchy works?", styles['BulletPoint']))
    story.append(Paragraph("[ ] Download limit for Audit Trail? (6 months)", styles['BulletPoint']))
    story.append(Paragraph("[ ] FLS vs Page Layout precedence?", styles['BulletPoint']))
    story.append(Paragraph("[ ] Profile Pwd Policy > Org Pwd Policy?", styles['BulletPoint']))

    story.append(Spacer(1, 20))
    story.append(Paragraph("Good luck on your exam! 🎓", styles['MainTitle']))


    doc.build(story)
    print("PDF Generated: Salesforce_Admin_Config_Detailed.pdf")

if __name__ == "__main__":
    create_detailed_study_guide_pdf()
