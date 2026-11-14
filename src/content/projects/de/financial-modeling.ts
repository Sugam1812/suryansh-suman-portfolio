import type { ProjectContent } from "../../types";

export default {
  title: "Corporate Financial Modeling & Valuation Suite",
  theme: "dark",
  tags: ["valuation", "excel", "powerbi"],
  description:
    "Dynamic 3-statement integrated financial model and discounted cash flow (DCF) valuation suite incorporating scenario analysis, debt amortization schedules, and cost of capital benchmarking.",
  components: [
    {
      type: "text",
      props: {
        title: "Model Architecture",
        text: "Built a fully integrated dynamic financial model linking Income Statement, Balance Sheet, and Cash Flow Statement with circular reference handling via average debt balancing, corkscrew schedules, and working capital forecast modules.",
      },
    },
    {
      type: "list",
      props: {
        title: "Valuation & Analysis Techniques",
        items: [
          "Discounted Cash Flow (DCF) valuation using Unlevered Free Cash Flow (FCFF) and WACC estimation.",
          "Dual terminal value calculations: Gordon Growth Perpetual Model vs EV/EBITDA Exit Multiple.",
          "Sensitivity tables examining valuation impact across varying WACC (9.5% - 13.0%) and Terminal Growth rates (2.0% - 4.5%).",
          "Trading & Transaction Comparables (Comps) analysis benchmarked against public peers.",
          "Working capital cycle optimization and Altman Z-score insolvency vulnerability index.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Financial Decision Support",
        text: "Delivered executive dashboards with Monte Carlo risk simulation, supporting capital allocation, debt-service coverage (DSCR) evaluation, and investor presentation metrics.",
      },
    },
    {
      type: "text",
      props: {
        title: "Career Relevance",
        text: "Demonstrates advanced corporate finance acumen essential for Big 4 Deals Advisory, Corporate Financial Reporting, and Valuations practice.",
      },
    },
  ],
} as const satisfies ProjectContent;
