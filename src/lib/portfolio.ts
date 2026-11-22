export const TODO = "Resume content pending / FROM RESUME";

export const TABS = [
  { id: "overview", label: "Overview" },
  { id: "impact", label: "Identity Impact" },
  { id: "experience", label: "Experience" },
  { id: "learning", label: "Learning" },
  { id: "practice", label: "Practice" },
  { id: "contact", label: "Contact" },
] as const;

export type TabId = (typeof TABS)[number]["id"];

export type LaneTone = "join" | "move" | "review" | "leave" | "accent";

export const PROFILE = {
  name: "Rajashekara Basavaraju",
  shortName: "Raj",
  initials: "RB",
  eyebrow: "Identity portfolio",
  role: "Senior SailPoint ISC Engineer | Identity Governance & Zero Trust",
  location: "Atlanta, GA",
  positioning:
    "Senior SailPoint Identity Security Cloud (ISC) engineer with 18+ years of IT experience and 10+ years of hands-on IAM across SailPoint ISC and IdentityIQ (IIQ) at GDIT supporting the CDC.GOV – World Trade Center Health Program.",
  summary:
    "Designs and implements cloud-native identity governance: authoritative-source and application onboarding, Joiner-Mover-Leaver lifecycle states, automated provisioning/deprovisioning, RBAC/ABAC access modeling, access certifications, and Segregation of Duties policies across Microsoft Entra ID, Active Directory, Workday, and Salesforce in a Microsoft Azure environment. Builds on earlier IAM, access-governance, and RSA Adaptive Authentication work in AWS-hosted banking environments at BBVA Compass and M&T Bank. Integrates applications using SCIM 2.0, REST APIs, and JDBC; automates identity workflows with ISC workflows, transforms, rules, event triggers, and webhooks; and applies Zero Trust identity principles, AI-assisted access review, and governed non-human identities. Supports compliance and audit activities aligned to NIST and PCI DSS.",
  email: "cy.rs@yahoo.com",
  phone: "+1-716-471-7777",
  linkedin: "https://www.linkedin.com/in/iam-raj-iga-sme",
  photoCandidates: [`${import.meta.env.BASE_URL}assets/profile.svg`],
  tags: [
    "SailPoint ISC & IIQ",
    "Lifecycle & Provisioning",
    "SCIM / REST APIs",
    "Entra ID & Active Directory",
    "RBAC & Certifications",
    "Zero Trust",
    "18+ years IT",
  ],
} as const;

export const EXPLORE = [
  {
    tab: "impact" as TabId,
    tone: "join" as LaneTone,
    title: "Identity Impact",
    copy: "Cloud-native identity governance with SailPoint ISC at GDIT – CDC.gov, Zero Trust identity, and non-human identity governance.",
    cta: "View impact",
    target: "impact-title",
  },
  {
    tab: "experience" as TabId,
    tone: "review" as LaneTone,
    title: "Experience",
    copy: "GDIT – CDC.gov (WTCHP), BBVA Compass Bank, M&T Bank, Fifth Third Bank, JPMorgan.",
    cta: "View roles",
    target: "roles-title",
  },
  {
    tab: "learning" as TabId,
    tone: "accent" as LaneTone,
    title: "Learning",
    copy: "CIAM – Certified Identity and Access Manager (IMI). Cybersecurity Specialist GRC/PCI-DSS. SAFe POPM. B.Sc. Computer Science, University of Mysore, 2004.",
    cta: "View credentials",
    target: "learning-title",
  },
  {
    tab: "practice" as TabId,
    tone: "join" as LaneTone,
    title: "Practice",
    copy: "IGA/SailPoint, lifecycle, access model, AI & NHI, integrations, cloud, automation, Zero Trust, and compliance.",
    cta: "View skills",
    target: "practice-title",
  },
  {
    tab: "contact" as TabId,
    tone: "leave" as LaneTone,
    title: "Contact",
    copy: "Atlanta, GA. Email, phone, LinkedIn.",
    cta: "Contact",
    target: "contact-title",
  },
] as const;

export const STORIES = [
  {
    id: "story-isc",
    tone: "accent" as LaneTone,
    title: "SailPoint ISC at CDC",
    lede: "Hands-on technical owner for SailPoint ISC at CDC, building on prior IdentityIQ (IIQ) experience.",
    body: "Designs and implements cloud-native identity governance covering identity lifecycle, access governance, and provisioning within the project's Microsoft Azure environment; accountable for configuration quality, validation, and production outcomes.",
    points: [
      "Identity profiles, account schemas, correlation, lifecycle states, and Joiner-Mover-Leaver workflows",
      "Onboarding Microsoft Entra ID, Active Directory, Workday, Salesforce, SCIM 2.0, JDBC, and REST/Web Services sources",
      "Entitlements, access profiles, roles, RBAC/ABAC, and least-privilege birthright design",
      "Access certifications, SoD policies, governance groups, access requests and approvals",
    ],
    ctaTab: "experience" as TabId,
    ctaTarget: "role-gdit",
    cta: "View GDIT – CDC.gov",
  },
  {
    id: "story-automation",
    tone: "join" as LaneTone,
    title: "Integrations & Automation",
    lede: "Moves identity and entitlement data between authoritative sources, SailPoint, and target applications.",
    body: "Engineers integrations with REST APIs, SCIM 2.0, JDBC, JSON/JSONPath, event triggers, and webhooks, and builds SailPoint ISC/IIQ Workflows, Transforms, Rules, and Forms that reduce manual identity operations.",
    points: ["REST APIs & SCIM 2.0", "JDBC", "JSON / JSONPath", "Workflows, transforms, rules, forms", "Event triggers & webhooks"],
    ctaTab: "practice" as TabId,
    ctaTarget: "skill-engineering",
    cta: "View skills",
  },
  {
    id: "story-zero-trust",
    tone: "move" as LaneTone,
    title: "Zero Trust, AI & Non-Human Identity",
    lede: "Least-privilege, risk-driven access controls consistent with Zero Trust principles.",
    body: "Uses SailPoint ISC AI-driven governance (access recommendations, role insights, outlier identification) to prioritize certification reviews, and governs non-human identities: service and application accounts, API/integration credentials, and emerging AI agents.",
    points: [
      "Risk-based authentication and MFA (Okta SSO/MFA; prior RSA Adaptive Authentication)",
      "AI-assisted access review and outlier identification",
      "NHI ownership, certification, and lifecycle (provisioning, credential rotation, decommissioning)",
    ],
    ctaTab: "practice" as TabId,
    ctaTarget: "skill-ai-nhi",
    cta: "View capabilities",
  },
  {
    id: "story-compliance",
    tone: "review" as LaneTone,
    title: "18+ years of governance & compliance",
    lede: "From enterprise provisioning at JPMorgan to access governance and risk-based authentication in banking.",
    body: "Aligns access certifications, SoD policies, and system/application account controls to NIST and PCI DSS (Req. 7 and 8) and produces certification results as audit evidence.",
    points: ["NIST", "PCI DSS", "Access reviews", "Audit evidence", "Governance, Risk & Compliance"],
    ctaTab: "practice" as TabId,
    ctaTarget: "skill-governance",
    cta: "View capabilities",
  },
] as const;

export const ROLES = [
  {
    id: "role-gdit",
    kicker: "Atlanta, GA",
    title: "Senior IAM Engineer / SailPoint ISC SME",
    place: "GDIT – CDC.gov (WTCHP World Trade Center Health Program)",
    dates: "Sept 2015–Present",
    pills: ["SailPoint ISC", "SailPoint IIQ", "Microsoft Azure", "Entra ID", "Zero Trust"] as const,
    highlights: [
      "Serve as hands-on technical owner for SailPoint ISC at CDC, designing and implementing cloud-native identity governance covering identity lifecycle, access governance, and provisioning, building on prior IdentityIQ (IIQ) experience; accountable for configuration quality, validation, and production outcomes.",
      "Configure identity profiles, account schemas, correlation and manager-correlation logic, lifecycle states, and Joiner-Mover-Leaver workflows with automated provisioning and deprovisioning to maintain accurate identity and account relationships across connected systems.",
      "Onboard and configure authoritative and non-authoritative sources and enterprise application integrations, including Microsoft Entra ID, Active Directory, Workday, Salesforce, SCIM 2.0, JDBC, and REST/Web Services connectors, consolidating identity and account data into a single, accurate identity record.",
      "Engineer system and application integrations using REST APIs, SCIM 2.0, JDBC, JSON/JSONPath, event triggers, and webhooks to move identity and entitlement data between authoritative sources, SailPoint, and target applications.",
      "Support identity modernization by delivering cloud-native SailPoint ISC governance within the project's Microsoft Azure environment, covering Entra ID-based identities, cloud-hosted applications, and cloud service and application accounts.",
      "Design and administer the access model using entitlements, access profiles, roles, RBAC, and ABAC, including least-privilege birthright design, to deliver fine-grained, request-based access and reduce entitlement sprawl.",
      "Implement IGA policies and configure access certifications, access reviews, Segregation of Duties policies, governance groups, remediation, access-request and approval processes, password-management scenarios, reminders, and escalation policies.",
      "Automate identity workflows by building and troubleshooting SailPoint ISC/IIQ Workflows, Transforms, Rules, Forms, and event-driven automation that extend onboarding, provisioning, and lifecycle behavior.",
      "Align SailPoint identity governance with the authentication layer (Okta SSO/MFA as a supporting platform, plus prior RSA Adaptive Authentication delivery) so access decisions reflect risk; secure REST API access with scoped, least-privilege credentials.",
      "Apply least-privilege, risk-driven access controls consistent with Zero Trust principles, using SailPoint ISC AI-driven governance (access recommendations, role insights, outlier identification) to prioritize certification reviews.",
      "Govern non-human identities (NHI), including service and application accounts in Azure and emerging AI agents and API/integration credentials: classify accounts, assign owners, apply governance groups and periodic certifications, and manage lifecycle.",
      "Support compliance and audit activities by aligning access certifications, SoD policies, and system/application account controls to NIST and PCI DSS (Req. 7 and 8) and producing certification results as audit evidence.",
      "Support the IAM platform in production: triage incidents and access requests, use SQL and backend data analysis to reconcile discrepancies and identify root causes, validate changes end to end before release, and track work in Jira.",
      "Translate business and technical requirements from application owners, security stakeholders, developers, and business teams into scalable SailPoint ISC configurations, and explain design decisions and tradeoffs to technical and non-technical stakeholders.",
    ],
  },
  {
    id: "role-bbva",
    kicker: "Birmingham, AL",
    title: "IAM Governance & Compliance Lead / Salesforce CRM & Siebel",
    place: "BBVA Compass Bank",
    dates: "March 2014–Sept 2015",
    pills: ["Salesforce CRM", "Siebel", "AWS", "RBAC"] as const,
    highlights: [
      "Led access-governance reviews validating user access against enterprise security policies and control requirements across large-scale banking applications, including Salesforce CRM and Siebel, applying least-privilege and RBAC principles.",
      "Partnered with application owners and business stakeholders to identify inappropriate or unnecessary permissions and coordinate remediation through closure.",
      "Ensured application access stayed aligned with IAM/security policies and compliance requirements for sensitive financial systems.",
      "Extended access-governance and access-review activities to applications and workloads running in AWS environments, validating user and privileged access (users, roles, and permissions).",
      "Coordinated access certification and review activities across multiple applications, tracked findings, and followed up with application owners on remediation.",
      "Prepared and maintained audit evidence showing execution and effectiveness of identity and access controls and supported IAM-related risk and compliance assessments.",
      "Used access-data analysis and validation techniques to investigate discrepancies and support governance and control decisions.",
    ],
  },
  {
    id: "role-mt",
    kicker: "Buffalo, NY",
    title: "Security Lead – Identity & Access / RSA Adaptive Authentication",
    place: "M&T Bank",
    dates: "May 2013–Feb 2014",
    pills: ["RSA Adaptive Authentication", "AWS"] as const,
    highlights: [
      "Supported implementation and validation of RSA Adaptive Authentication as an added risk-based security layer for customer-facing banking applications.",
      "Validated authentication and access-control workflows across online/mobile and desktop banking channels, confirming the right controls triggered for defined scenarios.",
      "Validated authentication and access controls for banking applications deployed in AWS environments, confirming risk-based controls and access permissions behaved correctly across cloud-hosted components.",
      "Developed and executed security validation scenarios covering authentication, user access, business rules, exception conditions, and end-to-end control behavior.",
      "Investigated authentication failures and access-related issues with application and security teams; used SQL and backend data validation to verify system behavior.",
      "Supported security-control documentation and evidence for compliance and audit requirements.",
    ],
  },
  {
    id: "role-fifth",
    kicker: "Bangalore, India",
    title: "Lead System Risk & Compliance Specialist / Retail and Mobile Banking",
    place: "Fifth Third Bank",
    dates: "Oct 2010–April 2013",
    pills: ["Risk & Compliance", "Retail & Mobile Banking"] as const,
    highlights: [
      "Led system risk and compliance activities focused on authentication, access-control mechanisms, and security requirements across enterprise banking applications.",
      "Assessed application behavior against defined security and business controls and identified access-control and compliance gaps requiring remediation.",
      "Collaborated with technical, business, and security stakeholders to define access-control coverage, investigate control failures, and drive corrective actions.",
      "Developed and maintained security/compliance documentation and supported evidence collection for control reviews and audits.",
      "Applied structured testing and validation to confirm authentication and authorization controls operated as intended.",
    ],
  },
  {
    id: "role-jpm",
    kicker: "Bangalore, India",
    title: "IAM Security Access Controller",
    place: "JPMorgan",
    dates: "May 2005–Sept 2010",
    pills: ["IAM", "AACT", "IBM/Lotus", "JML", "RBAC"] as const,
    highlights: [
      "Performed enterprise identity provisioning and access administration, creating user accounts and assigning birthright access based on business and security requirements.",
      "Processed application-access requests through the AACT access-request tool, validating requested access and provisioning users to enterprise applications.",
      "Managed user access across multiple connected applications within an IBM/Lotus-based enterprise identity environment.",
      "Supported Joiner-Mover-Leaver activities, including account creation, access modification, and access removal across the user lifecycle.",
      "Performed access reconciliation to identify discrepancies between requested, provisioned, and existing access; applied role-based access principles to maintain baseline and application-specific permissions.",
    ],
  },
] as const;

export const CERTIFICATIONS = [
  "CIAM – Certified Identity and Access Manager, Identity Management Institute (IMI) · Nov 2026, valid through Nov 2028",
  "Cybersecurity Specialist – GRC / PCI-DSS, Baxter Clewis Training Academy",
  "SAFe Certified Product Owner / Product Manager",
] as const;

export const EDUCATION = ["Bachelor of Science in Computer Science, University of Mysore, 2004"] as const;

export const SKILLS = [
  {
    id: "skill-sailpoint",
    title: "IGA / SailPoint",
    items: ["SailPoint ISC", "SailPoint IIQ", "IGA", "Access Governance", "Access Certifications", "Segregation of Duties", "Identity Modernization"],
  },
  {
    id: "skill-lifecycle",
    title: "Identity Lifecycle",
    items: ["Joiner-Mover-Leaver", "Identity Profiles", "Lifecycle States", "Birthright Access", "Provisioning / Deprovisioning", "Access Requests & Approvals", "Password Management"],
  },
  {
    id: "skill-access-model",
    title: "Access Model",
    items: ["Entitlements", "Access Profiles", "Roles", "RBAC", "ABAC", "Role Mining & Engineering", "Least Privilege", "Fine-Grained Access Control", "Governance Groups"],
  },
  {
    id: "skill-ai-nhi",
    title: "AI in IAM & Non-Human Identity",
    items: ["AI-assisted access governance", "Access recommendations", "Role discovery", "Outlier identification", "Service / machine accounts", "API keys & tokens", "Bots & AI agents", "Non-human account certification"],
  },
  {
    id: "skill-directories",
    title: "Integrations & Connectors",
    items: ["Microsoft Entra ID", "Active Directory", "Workday", "Salesforce", "SCIM 2.0", "JDBC", "REST / Web Services", "Application Onboarding", "Source Schemas", "Correlation"],
  },
  {
    id: "skill-cloud",
    title: "Cloud Environments",
    items: ["Microsoft Azure (CDC / GDIT)", "Microsoft Entra ID", "AWS (BBVA Compass, M&T Bank)"],
  },
  {
    id: "skill-engineering",
    title: "Engineering & Automation",
    items: ["REST APIs", "JSON", "JSONPath", "SailPoint Workflows", "Transforms", "Rules", "Forms", "Event Triggers", "Webhooks"],
  },
  {
    id: "skill-auth",
    title: "Authentication & Zero Trust",
    items: ["RSA Adaptive Authentication", "Okta SSO & MFA", "Least Privilege", "Risk-Based Authentication", "Periodic Access Recertification", "API Security", "Privileged Access Monitoring (PAM)"],
  },
  {
    id: "skill-data",
    title: "Production Support & Data",
    items: ["Incident / Request / Problem Triage", "Root Cause Analysis", "SQL", "Entitlement Data Analysis", "Reconciliation", "Provisioning Validation", "IAM Testing", "Jira"],
  },
  {
    id: "skill-governance",
    title: "Governance & Compliance",
    items: ["Access Reviews", "Security Policy Compliance", "PCI DSS", "NIST Cybersecurity Frameworks", "Audit Evidence", "Governance, Risk & Compliance"],
  },
  {
    id: "skill-delivery",
    title: "Delivery & Methods",
    items: ["Agile / SAFe", "Requirements Gathering", "Runbooks & Operational Documentation", "Cross-Functional Collaboration"],
  },
] as const;

export function isTodo(value: string): boolean {
  return value.includes("FROM RESUME") || value.includes("Resume content pending");
}

export function isTabId(value: string): value is TabId {
  return TABS.some((tab) => tab.id === value);
}

export function tabForTarget(targetId: string): TabId | null {
  if (STORIES.some((story) => story.id === targetId)) return "impact";
  if (ROLES.some((role) => role.id === targetId)) return "experience";
  if (targetId.startsWith("skill-")) return "practice";
  if (targetId === "impact-title") return "impact";
  if (targetId === "roles-title") return "experience";
  if (targetId === "learning-title") return "learning";
  if (targetId === "practice-title") return "practice";
  if (targetId === "contact-title") return "contact";
  if (targetId === "top") return "overview";
  return null;
}
