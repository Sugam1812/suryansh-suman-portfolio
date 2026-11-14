import type { ProjectContent } from "../../types";

export default {
  title: "GST Reconciliation & Direct Tax Optimization Suite",
  theme: "dark",
  tags: ["gst", "taxation", "automation", "excel"],
  description:
    "An automated taxation and compliance reconciliation engine built with Excel Power Query and Python, designed to eliminate Input Tax Credit (ITC) leakage and ensure strict compliance with Section 16(2)(aa) of the CGST Act.",
  components: [
    {
      type: "text",
      props: {
        title: "The Compliance Problem",
        text: "ITC mismatch between Books of Accounts and GSTR-2B leads to severe tax interest, penalties, and working capital blockage. This suite automates high-volume invoice reconciliation across multi-state GST registrations.",
      },
    },
    {
      type: "list",
      props: {
        title: "Automated Compliance Capabilities",
        items: [
          "Fuzzy matching logic handling vendor GSTIN errors, invoice number prefixes, and date discrepancies.",
          "Categorization into Exact Match, Probable Match, Unclaimed ITC (Books only), and Ineligible ITC.",
          "Automated vendor communication drafts for pending invoice uploads in GSTR-1.",
          "TDS/TCS withholding audit verification under Section 194Q and 206C(1H) of the Income Tax Act.",
          "Deferred Tax Asset (DTA) / Deferred Tax Liability (DTL) computation compliant with Ind AS 12.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Financial Impact",
        text: "Unlocked ₹3.8M in trapped Input Tax Credit and identified ₹620k in duplicate vendor billings prior to annual GST audit filing.",
      },
    },
    {
      type: "text",
      props: {
        title: "Professional Proficiency",
        text: "Reflects deep understanding of Indian indirect tax statutes, statutory timelines, and technology-driven tax audit readiness.",
      },
    },
  ],
} as const satisfies ProjectContent;
