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
    description: "SA 200–720 Prüfung, Wesentlichkeit & CARO 2020 Compliance",
  },
  {
    title: "Forensic Audit & Journal Entry Testing",
    slug: "forensic-audit",
    thumbnail: thumbnailForensicAudit,
    description: "Benfords Gesetz, Anomalie-Erkennung & Betrugsprüfung nach SA 240",
  },
  {
    title: "Interne Kontrollsysteme (IFC / ICFR)",
    slug: "internal-controls",
    thumbnail: thumbnailInternalControls,
    description: "COSO Risikokontrollmatrix (RACM) für P2P-, O2C- und R2R-Prozesse",
  },
  {
    title: "GST Abstimmung & Steueroptimierung",
    slug: "tax-gst-compliance",
    thumbnail: thumbnailTaxGstCompliance,
    description: "Automatisierter GSTR-2B Abgleich & Steuerabzugskonformität",
  },
  {
    title: "Finanzmodellierung & Unternehmensbewertung",
    slug: "financial-modeling",
    thumbnail: thumbnailFinancialModeling,
    description: "Dynamische 3-Statement Modelle, DCF-Bewertung & Sensitivitätsanalysen",
  },
] as const satisfies ProjectPreview[];
