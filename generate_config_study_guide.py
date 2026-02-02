from reportlab.lib.pagesizes import LETTER
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

def create_study_guide_pdf():
    doc = SimpleDocTemplate("Salesforce_Admin_Configuration_Setup.pdf", pagesize=LETTER,
                            rightMargin=72, leftMargin=72, topMargin=72, bottomMargin=72)
    
    styles = getSampleStyleSheet()
    
    # Custom Styles
    styles.add(ParagraphStyle(name='MainTitle', parent=styles['Heading1'], alignment=TA_CENTER, fontSize=24, spaceAfter=20, textColor=colors.HexColor('#005fb2')))
    styles.add(ParagraphStyle(name='SectionHeader', parent=styles['Heading2'], fontSize=16, spaceBefore=15, spaceAfter=10, textColor=colors.HexColor('#005fb2')))
    styles.add(ParagraphStyle(name='SubHeader', parent=styles['Heading3'], fontSize=14, spaceBefore=10, spaceAfter=6, textColor=colors.HexColor('#444444')))
    styles.add(ParagraphStyle(name='NormalText', parent=styles['Normal'], fontSize=11, leading=14, spaceAfter=6))
    styles.add(ParagraphStyle(name='BulletPoint', parent=styles['Normal'], fontSize=11, leading=14, leftIndent=20, splitLongWords=1, spaceAfter=4, bulletIndent=10))
    styles.add(ParagraphStyle(name='ExamTip', parent=styles['Normal'], fontSize=11, leading=14, backColor=colors.HexColor('#e6f3ff'), borderColor=colors.HexColor('#005fb2'), borderWidth=1, borderPadding=5, spaceBefore=10, spaceAfter=10, textColor=colors.black))

    story = []

    # Title
    story.append(Paragraph("Salesforce Admin Exam: Configuration & Setup", styles['MainTitle']))
    story.append(Paragraph("Comprehensive Study Guide (15% of Exam)", styles['NormalText']))
    story.append(Spacer(1, 12))
    story.append(Paragraph("This guide covers Security (External & Internal), Visibility, and Setup.", styles['NormalText']))
    story.append(Spacer(1, 20))

    # Part 1
    story.append(Paragraph("Part 1: External Security (Getting In)", styles['SectionHeader']))
    story.append(Paragraph("Focus: How do we control access to the org from the outside?", styles['NormalText']))
    
    story.append(Paragraph("1. Password Policies", styles['SubHeader']))
    story.append(Paragraph("• Defines password complexity, history, and expiration (e.g., 90 days).", styles['BulletPoint']))
    story.append(Paragraph("• <b>Exam Rule:</b> Profile-level policies <u>override</u> Org-wide policies.", styles['ExamTip']))

    story.append(Paragraph("2. IP Restrictions (The 'Where?')", styles['SubHeader']))
    
    # IP Table
    ip_data = [
        ['Feature', 'Location', 'Effect if OUTSIDE range'],
        ['Trusted IP Ranges', 'Setup > Network Access', 'Challenge (MFA/Code).\nUser CAN log in after verification.'],
        ['Login IP Ranges', 'Profile > Login IP Ranges', 'Access Denied.\nUser BLOCKED completely.']
    ]
    ip_table = Table(ip_data, colWidths=[120, 150, 180])
    ip_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#005fb2')),
        ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0,0), (-1,0), 12),
        ('BACKGROUND', (0,1), (-1,-1), colors.HexColor('#f0f0f0')),
        ('GRID', (0,0), (-1,-1), 1, colors.white),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(ip_table)
    story.append(Spacer(1, 10))

    story.append(Paragraph("3. Login Hours (The 'When?')", styles['SubHeader']))
    story.append(Paragraph("• Restricts when users with a specific Profile can log in.", styles['NormalText']))
    story.append(Paragraph("• <b>Exam Scenario:</b> If a session extends past the allowed Login Hour, the system <b>terminates the session</b> immediately. Work cannot be saved.", styles['ExamTip']))

    story.append(Spacer(1, 12))
    
    # Part 2
    story.append(Paragraph("Part 2: Internal Security (Who Sees What)", styles['SectionHeader']))
    story.append(Paragraph("Think of security as a funnel. Start restrictive, then open up access.", styles['NormalText']))

    story.append(Paragraph("Layer 1: Profiles vs. Permission Sets", styles['SubHeader']))
    story.append(Paragraph("• <b>Profile (Baseline):</b> Every user has ONE. Defines what they <i>cannot</i> do.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Permission Set (Extender):</b> User can have MANY. Grants <i>extra</i> permissions.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Rule:</b> Permission Sets can never remove access given by a Profile.", styles['ExamTip']))

    story.append(Paragraph("Layer 2: Organization-Wide Defaults (OWD)", styles['SubHeader']))
    story.append(Paragraph("<b>Private:</b> See only own records.", styles['BulletPoint']))
    story.append(Paragraph("<b>Public Read Only:</b> See all, edit own.", styles['BulletPoint']))
    story.append(Paragraph("<b>Public Read/Write:</b> See and edit all.", styles['BulletPoint']))

    story.append(Paragraph("Layer 3 & 4: Role Hierarchy & Sharing Rules", styles['SubHeader']))
    story.append(Paragraph("• <b>Role Hierarchy:</b> Opens access vertically (Manager sees Subordinate's data).", styles['BulletPoint']))
    story.append(Paragraph("• <b>Sharing Rules:</b> Opens access horizontally (Group A shares with Group B).", styles['BulletPoint']))
    
    story.append(Paragraph("Layer 5: Field Level Security (FLS) vs. Page Layout", styles['SubHeader']))
    story.append(Paragraph("• <b>FLS:</b> Controls data visibility (API, Reports, Search).", styles['BulletPoint']))
    story.append(Paragraph("• <b>Page Layout:</b> Controls UI visibility only.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Gotcha:</b> FLS overrides Page Layout. If FLS is Hidden, the field is invisible everywhere.", styles['ExamTip']))

    story.append(PageBreak())

    # Part 3
    story.append(Paragraph("Part 3: Visibility & End-User Changes", styles['SectionHeader']))

    story.append(Paragraph("1. List Views", styles['SubHeader']))
    story.append(Paragraph("• Need <i>'Create and Customize List Views'</i> permission to create.", styles['BulletPoint']))
    story.append(Paragraph("• Need <b>'Manage Public List Views'</b> permission to make a view visible to 'All Users'.", styles['ExamTip']))

    story.append(Paragraph("2. App Navigation (The Pencil Icon)", styles['SubHeader']))
    story.append(Paragraph("• <b>Users CAN:</b> Reorder tabs, add items, rename items they created.", styles['BulletPoint']))
    story.append(Paragraph("• <b>Users CANNOT:</b> Remove/Rename standard Admin-assigned tabs.", styles['BulletPoint']))
    story.append(Paragraph("• Admin can disable this personalization in App Manager.", styles['BulletPoint']))

    story.append(Spacer(1, 12))

    # Part 4
    story.append(Paragraph("Part 4: Troubleshooting & Auditing", styles['SectionHeader']))
    
    story.append(Paragraph("1. Setup Audit Trail", styles['SubHeader']))
    story.append(Paragraph("• Tracks Admin config changes.", styles['BulletPoint']))
    story.append(Paragraph("• History: Last <b>20 changes</b> (UI) or <b>6 months</b> (CSV download).", styles['BulletPoint']))

    story.append(Paragraph("2. Login History", styles['SubHeader']))
    story.append(Paragraph("• Use to debug login failures.", styles['BulletPoint']))
    story.append(Paragraph("• Common Errors: Invalid Password, Restricted IP (Profile), Restricted Time.", styles['BulletPoint']))

    story.append(Spacer(1, 20))
    
    # Checklist
    story.append(Paragraph("Quick Exam Checklist", styles['SectionHeader']))
    checklist_data = [
        ['Issue', 'First Check'],
        ['Forgot Password?', 'Check Login History'],
        ['Can\'t see a record?', 'OWD -> Role -> Sharing Rules'],
        ['Can\'t see a field?', 'Field Level Security (FLS)'],
        ['Can\'t log in from home?', 'Profile Login IP Ranges'],
    ]
    check_table = Table(checklist_data, colWidths=[200, 250])
    check_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#005fb2')),
        ('TEXTCOLOR', (0,0), (-1,0), colors.white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0,0), (-1,0), 8),
        ('GRID', (0,0), (-1,-1), 1, colors.HexColor('#eaeaea')),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(check_table)

    story.append(Spacer(1, 30))
    story.append(Paragraph("Good luck with your exam preparation!", styles['NormalText']))

    # Build
    doc.build(story)
    print("PDF Generated: Salesforce_Admin_Configuration_Setup.pdf")

if __name__ == "__main__":
    create_study_guide_pdf()
