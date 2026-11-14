export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "python"
  | "ai"
  | "llm"
  | "agents"
  | "mql5"
  | "pinescript"
  | "quant"
  | "backtesting"
  | "ml"
  | "automation"
  | "sql"
  | "powerbi"
  | "mcp"
  | "vue"
  | "typescript"
  | "audit"
  | "internal_audit"
  | "indas"
  | "ifrs"
  | "forensics"
  | "gst"
  | "taxation"
  | "excel"
  | "controls"
  | "tally"
  | "valuation";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  python: "Python",
  ai: "AI",
  llm: "LLM",
  agents: "AI Agents",
  mql5: "MQL5",
  pinescript: "Pine Script",
  quant: "Quant",
  backtesting: "Backtesting",
  ml: "Machine Learning",
  automation: "Automation",
  sql: "SQL",
  powerbi: "Power BI",
  mcp: "MCP",
  vue: "Vue",
  typescript: "TypeScript",
  audit: "Statutory Audit",
  internal_audit: "Internal Audit",
  indas: "Ind AS",
  ifrs: "IFRS",
  forensics: "Forensic Audit",
  gst: "GST & Indirect Tax",
  taxation: "Direct Tax",
  excel: "Advanced Excel",
  controls: "Internal Controls (IFC)",
  tally: "Tally Prime ERP",
  valuation: "Financial Modeling",
} as const satisfies Record<TagVariant, string>;
