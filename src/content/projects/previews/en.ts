import thumbnailStatutoryAudit from "../../../assets/thumbnails/statutory-audit.svg";
import thumbnailForensicAudit from "../../../assets/thumbnails/forensic-audit.svg";
import thumbnailInternalControls from "../../../assets/thumbnails/internal-controls.svg";
import thumbnailTaxGstCompliance from "../../../assets/thumbnails/tax-gst-compliance.svg";
import thumbnailFinancialModeling from "../../../assets/thumbnails/financial-modeling.svg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Statutory Audit & Ind AS Reporting",
    slug: "statutory-audit",
    thumbnail: thumbnailStatutoryAudit,
    description: "SA 200–720 execution, materiality benchmark & CARO 2020 compliance review",
  },
  {
    title: "Forensic Audit & Journal Entry Testing",
    slug: "forensic-audit",
    thumbnail: thumbnailForensicAudit,
    description: "Benford's Law anomaly detection & general ledger fraud risk procedures (SA 240)",
  },
  {
    title: "Internal Financial Controls (IFC / ICFR)",
    slug: "internal-controls",
    thumbnail: thumbnailInternalControls,
    description: "COSO-based Risk & Control Matrix (RACM) across P2P, O2C, and R2R cycles",
  },
  {
    title: "GST Reconciliation & Tax Optimization",
    slug: "tax-gst-compliance",
    thumbnail: thumbnailTaxGstCompliance,
    description: "Automated GSTR-2B vs Purchase Register matching & TDS 194Q compliance engine",
  },
  {
    title: "Financial Modeling & Valuation Suite",
    slug: "financial-modeling",
    thumbnail: thumbnailFinancialModeling,
    description: "Dynamic 3-statement projections, DCF valuation, and capital budgeting models",
  },
] as const satisfies ProjectPreview[];
