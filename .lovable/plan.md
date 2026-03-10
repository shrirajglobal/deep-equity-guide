

# Plan: Add Commodities Support + Single-Asset Deep Research

## Two New Features

### Feature 1: Expand Instrument Types to Include Commodities
Add MCX/NCDEX commodities (metals, currencies, food grains, energy) as research-eligible instruments alongside equities and mutual funds.

**Changes to `src/types/investment.ts`:**
- Expand `InstrumentType` to include `"commodities"` (so options become: equities, mutual-funds, commodities, both-equity-mf, all)
- Add a `CommodityCategory` type: `"metals" | "energy" | "currency" | "food-grains" | "others"`
- Add `COMMODITIES` constant listing items per category (Gold, Silver, Copper, Crude Oil, Natural Gas, USD/INR, EUR/INR, Wheat, Soybean, Cotton, etc.)
- Add `CommodityRecommendation` interface with fields: name, category, exchange (MCX/NCDEX), cmp, target, rationale, demandAnalysis, fundamentals, technicals, geopolitical
- Update `InvestmentFormData` to include `commodityCategories: CommodityCategory[]`
- Update `ResearchReport` to include `commodityRecommendations: CommodityRecommendation[]` and add `commodities` percentage to `assetAllocation`

**Changes to `src/pages/Research.tsx`:**
- Update `INSTRUMENT_OPTIONS` to: Equities, Mutual Funds, Commodities, Equities + MF, All
- Add a commodity category multi-select section (shown when commodities is selected) with pills for Metals, Energy, Currency, Food Grains, Others

**Changes to `src/lib/mock-report.ts`:**
- Add `COMMODITY_DB` with mock commodity recommendations (Gold, Silver, Crude Oil, Wheat, USD/INR, etc.)
- Update `generateMockReport` to include commodity allocation and recommendations based on instrument selection

**Changes to `src/pages/Report.tsx`:**
- Add commodity recommendations section with cards showing exchange, CMP, target, and the four analysis pillars (demand, fundamentals, technicals, geopolitical)
- Update `AllocationBar` to include commodities segment

### Feature 2: Single-Asset Deep Research Page
A new page where the user types a name (stock, fund, commodity, metal, food grain) and gets a full deep-research report on that single asset.

**New file: `src/pages/QuickResearch.tsx`:**
- Simple UI: a search input field with placeholder "e.g. TCS, Gold, Nippon Small Cap Fund, Wheat..."
- An asset type selector: Stock, Mutual Fund, Commodity (to guide the report format)
- "Research" button that navigates to a single-asset report

**New file: `src/pages/QuickReport.tsx`:**
- Displays a comprehensive single-asset report with:
  - **Overview**: Name, exchange, current price, category
  - **Demand Analysis**: Product/market demand outlook
  - **Fundamental Analysis**: Key metrics relevant to asset type
  - **Technical Analysis**: Support, resistance, indicators
  - **Geopolitical Factors**: Relevant macro/geo events
  - **Verdict**: Buy/Hold/Avoid with reasoning
- Uses mock data for now (will use AI later)

**Changes to `src/App.tsx`:**
- Add routes: `/quick-research` and `/quick-report/:name`

**Changes to `src/pages/Index.tsx`:**
- Add a second CTA button: "Research a Specific Asset" alongside the existing "Start New Research"

**New file: `src/lib/mock-quick-report.ts`:**
- Mock generator that returns a single-asset deep research report based on the asset name and type

## Summary of Files to Create/Edit
- **Edit**: `src/types/investment.ts`, `src/pages/Research.tsx`, `src/lib/mock-report.ts`, `src/pages/Report.tsx`, `src/App.tsx`, `src/pages/Index.tsx`
- **Create**: `src/pages/QuickResearch.tsx`, `src/pages/QuickReport.tsx`, `src/lib/mock-quick-report.ts`

