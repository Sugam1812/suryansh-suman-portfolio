import type { ProjectContent } from "../../types";

export default {
  title: "Forensic Audit & Journal Entry Testing (JET)",
  theme: "dark",
  tags: ["forensics", "audit", "sql", "excel", "automation"],
  description:
    "An automated forensic audit framework built to identify financial anomalies, management override of controls, and fraudulent reporting across 250,000+ general ledger entries in alignment with SA 240.",
  components: [
    {
      type: "text",
      props: {
        title: "The Forensic Challenge",
        text: "SA 240 requires auditors to address the risk of management override of controls through Journal Entry Testing (JET). Manual inspection of thousands of ledger postings is error-prone. This project created a systematic, rules-based forensic audit pipeline to surface high-risk manual and unusual entries.",
      },
    },
    {
      type: "list",
      props: {
        title: "Forensic Audit Tests & Algorithms",
        items: [
          "Benford's Law 1st and 2nd digit analysis across high-volume expense accounts.",
          "Identification of unusual timing: weekend, holiday, and off-hour journal entries.",
          "Round-sum and split-transaction detection designed to circumvent threshold approval limits.",
          "Post-closing adjustment and manual voucher screening directly impacting EBITDA.",
          "Conflicted master data checks: matching employee bank accounts with vendor master databases.",
          "Keyword scan in narration fields for sensitive flags ('adjustment', 'override', 'plug', 'provisional').",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Analytical Technology",
        text: "Executed SQL queries and Python data scripts connected to an Excel audit workpaper, cutting anomaly discovery time from days of manual spot-checks to 90 seconds of automated execution.",
      },
    },
    {
      type: "text",
      props: {
        title: "Impact",
        text: "Flagged 18 high-risk manual journal entries that accounted for 84% of an unexpected fourth-quarter gross margin expansion, enabling senior audit leadership to request corroborating third-party evidence.",
      },
    },
  ],
} as const satisfies ProjectContent;
