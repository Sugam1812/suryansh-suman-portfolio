import type { ProjectContent } from "../../types";

export default {
  title: "Internal Financial Controls (IFC / ICFR) & RACM",
  theme: "dark",
  tags: ["controls", "internal_audit", "audit", "excel"],
  description:
    "Design and audit testing of an Internal Financial Controls over Financial Reporting (ICFR) framework based on COSO, covering Procure-to-Pay (P2P), Order-to-Cash (O2C), and Record-to-Report (R2R) cycles.",
  components: [
    {
      type: "text",
      props: {
        title: "Framework & Architecture",
        text: "Under Section 134(5)(e) and 143(3)(i) of the Companies Act 2013, Indian companies and statutory auditors must evaluate the adequacy and operating effectiveness of Internal Financial Controls. This project delivered an end-to-end Risk & Control Matrix (RACM) for a mid-scale enterprise.",
      },
    },
    {
      type: "list",
      props: {
        title: "Process Walkthroughs & Control Objectives",
        items: [
          "Procure-to-Pay (P2P): 3-way matching validation (Purchase Order vs Goods Receipt Note vs Vendor Invoice).",
          "Order-to-Cash (O2C): Credit limit authorization, automated discount approvals, and trade receivables aging review.",
          "Record-to-Report (R2R): Period-end closing checklist, balance sheet substantiation, and inter-company reconciliations.",
          "Segregation of Duties (SoD): Matrix analysis between ERP user roles to eliminate incompatible system permissions.",
          "Design of Test of Controls (ToC): Sample size determination based on frequency (annual, quarterly, monthly, daily).",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Deficiency Remediation",
        text: "Categorized findings into Control Deficiencies, Significant Deficiencies, and Material Weaknesses, presenting a remediation roadmap that automated 14 manual supervisory approvals.",
      },
    },
    {
      type: "text",
      props: {
        title: "Key Takeaway",
        text: "Demonstrates practical mastery over internal audit principles, corporate risk mitigation, and compliance with statutory internal control mandates.",
      },
    },
  ],
} as const satisfies ProjectContent;
