# Suryansh Suman — 3D Waypoint Scrolling Audit & CA Portfolio

An interactive 3D portfolio crafted for **Suryansh Suman** — Commerce scholar and Aspiring Chartered Accountant specializing in **Statutory Audit, Internal Audit, Forensic Accounting, Ind AS / IFRS, and Corporate Governance**.

Built with **Vue 3**, **Three.js**, **GSAP**, and **Lenis** smooth scrolling.

---

## 🌐 Live Links

- **Live Production Site (GitHub Pages):** [https://sugam1812.github.io/suryansh-suman-portfolio/](https://sugam1812.github.io/suryansh-suman-portfolio/)
- **GitHub Repository:** [https://github.com/Sugam1812/suryansh-suman-portfolio](https://github.com/Sugam1812/suryansh-suman-portfolio)

---

## 🎯 Profile & Core Competencies

- **Target Career:** Qualified Chartered Accountant (CA) with Article Assistant / Audit Trainee readiness.
- **Core Specializations:**
  - **Statutory Audit:** In-depth execution of ICAI Standards on Auditing (SA 200–720), Materiality Benchmarking (SA 320), Substantive Analytical Procedures, CARO 2020 Reporting.
  - **Forensic Accounting:** Journal Entry Testing (JET, SA 240), Benford's Law distribution analysis, anomaly detection across 250k+ general ledger records.
  - **Internal Financial Controls (IFC / ICFR):** COSO-based Risk & Control Matrix (RACM) across P2P, O2C, and R2R business cycles; Segregation of Duties (SoD) testing.
  - **Financial Reporting:** Ind AS 115 (Revenue Recognition), Ind AS 116 (Leases), Ind AS 36 (Impairment), Ind AS 12 (Deferred Tax).
  - **Taxation & Compliance:** GST Automated Reconciliation (GSTR-2B vs Purchase Registers, Sec 16(2)(aa)), TDS/TCS under Sec 194Q / 206C(1H).
  - **Audit Technology Stack:** Advanced Microsoft Excel (Power Query, Dynamic Arrays, VBA), Power BI Audit Analytics, SQL, Python for Audit Sampling, Tally Prime ERP.

---

## 💼 Featured Case Studies & Audit Projects

1. **Statutory Audit & Ind AS Reporting Review** (`statutory-audit`)
   - Simulation of end-to-end statutory audit for mid-tier manufacturing enterprise ($50M rev).
   - Materiality computation, Ind AS 115 revenue cut-off testing, and CARO 2020 clause substantiation.
2. **Forensic Audit & Journal Entry Testing (JET)** (`forensic-audit`)
   - Automated anomaly detection flagging round-sum vouchers, off-hour entries, and conflicted vendor-employee records under SA 240.
3. **Internal Financial Controls (IFC/ICFR) & RACM** (`internal-controls`)
   - Comprehensive walkthrough and control testing across Procure-to-Pay, Order-to-Cash, and Record-to-Report cycles.
4. **GST Reconciliation & Tax Optimization Suite** (`tax-gst-compliance`)
   - High-throughput algorithmic matching of GSTR-2B with purchase registers, preventing ITC leakage and tax interest.
5. **Financial Modeling & Corporate Valuation Suite** (`financial-modeling`)
   - Dynamic 3-statement forecast model, DCF valuation (FCFF, WACC sensitivity), and trading peer multiples.

---

## 🖥️ 3D Waypoint Scrolling Architecture

- **Lenis Smooth Scroll:** Provides weighted kinetic scroll interpolation.
- **3D Camera Waypoints:** As the user scrolls, the Three.js camera navigates between interactive scene coordinates (`Hero` ➔ `About` ➔ `Projects` ➔ `Contact`).
- **3D Audit Room Objects:** Features 3D office/room environment, interactive hologram cards, shader materials, and custom Audit/CA roadmap sticky notes (`AUDIT RISK SA 320`, `CONTROLS IFC 99%`, `IND AS 115 VERIFIED`, `CA ROADMAP AUDIT • TAX`).

---

## 🚀 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/Sugam1812/suryansh-suman-portfolio.git
cd suryansh-suman-portfolio

# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Custom Domain Registration (`is-a.dev`)

Configuration files are pre-generated in the `is-a-dev-registration/` directory:
- `is-a-dev-registration/domains/suryansh-suman.json` (for `suryansh-suman.is-a.dev`)
- `is-a-dev-registration/domains/suryanshsuman.json` (for `suryanshsuman.is-a.dev`)

### Quick Steps to Register:
1. Fork [https://github.com/is-a-dev/register](https://github.com/is-a-dev/register) on GitHub.
2. In your fork, create or upload the file `domains/suryansh-suman.json`.
3. Submit a Pull Request to `is-a-dev/register:main`.
4. Once merged, `suryansh-suman.is-a.dev` automatically points to the live portfolio!
