import type { ProjectContent } from "../../types";

export default {
  title: "Statutory Audit & Ind AS Reporting Review",
  theme: "dark",
  tags: ["audit", "indas", "controls", "excel", "powerbi"],
  description:
    "Comprehensive end-to-end statutory audit simulation for a mid-market manufacturing enterprise, adhering strictly to ICAI Standards on Auditing (SA 200–720) and Ind AS financial reporting frameworks.",
  components: [
    {
      type: "text",
      props: {
        title: "Audit Engagement & Objectives",
        text: "The objective was to evaluate financial statements for true and fair presentation, establish rigorous materiality thresholds (SA 320), evaluate management assertions, and perform substantive audit testing on high-risk assertion areas including revenue recognition (Ind AS 115) and lease capitalization (Ind AS 116).",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Audit Procedures Executed",
        items: [
          "Materiality benchmarking: Set Overall Planning Materiality at 1% of Gross Revenue and Performance Materiality at 75% of PM.",
          "Revenue cut-off & Ind AS 115 five-step evaluation for period-end sales transactions.",
          "Substantive analytical procedures and ratio analysis across 3 financial years.",
          "Fixed Assets verification and impairment testing in compliance with Ind AS 36.",
          "Bank confirmations & debt covenant verification in accordance with SA 505 (External Confirmations).",
          "Comprehensive CARO 2020 clause-by-clause compliance reporting, including working capital limits and statutory dues.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Tools & Methodologies",
        text: "Built automated sampling workflows in Excel (Advanced Power Query, VBA) to extract stratified audit samples, perform Benford's Law tests on purchase registers, and visualize trial balance anomalies on an interactive Power BI audit dashboard.",
      },
    },
    {
      type: "text",
      props: {
        title: "Outcome & Value Delivered",
        text: "Identified ₹4.2M in unrecorded cut-off liabilities, prevented a key Ind AS 116 lease classification misstatement, and compiled a presentation-ready Independent Auditor's Report draft under SA 700 with Key Audit Matters (KAM, SA 701).",
      },
    },
  ],
} as const satisfies ProjectContent;
