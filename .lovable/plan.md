

# Plan: Fix Quick Research Data + CRO Improvements

## Problem
Assets not in `MOCK_DATA` (like Jeera, Silver, Cotton, etc.) get fallback content with `₹—` price and generic "Hold" verdict. Only 3 assets (TCS, Gold, Wheat) have real data.

## Solution

### 1. Expand `MOCK_DATA` in `src/lib/mock-quick-report.ts`
Add detailed mock entries for **all 24 commodities** from the `COMMODITIES` list plus common stocks and mutual funds. Each entry will have realistic current prices, specific verdicts (Buy/Hold/Avoid), and tailored analysis content.

New entries include: Silver, Copper, Aluminium, Zinc, Lead, Nickel, Crude Oil, Natural Gas, Mentha Oil, USD/INR, EUR/INR, GBP/INR, JPY/INR, Soybean, Chana, Mustard Seed, Cotton, Guar Seed, Castor Seed, Turmeric, Jeera, Coriander, plus popular stocks (Reliance, Infosys, HDFC Bank) and mutual funds (Nippon Small Cap, Parag Parikh Flexi Cap).

### 2. Smart matching in `generateQuickReport`
Improve the matching logic to also check against the `COMMODITIES` array from types — if a user types a name that exists there, auto-populate exchange and category from that data even if no detailed mock entry exists.

### 3. CRO Improvements across the app

**Landing Page (`Index.tsx`):**
- Add social proof line ("Trusted by 10,000+ investors" or similar)
- Add a "Try it now" example prompt below the CTA (e.g., "Try: Gold, TCS, Jeera") to reduce friction
- Stronger value proposition copy

**Quick Research Page (`QuickResearch.tsx`):**
- Add popular/trending asset chips below the search input (Gold, TCS, Crude Oil, Jeera, etc.) — clicking one auto-fills the search
- Add brief trust indicators ("5-pillar analysis in 10 seconds")

**Quick Report Page (`QuickReport.tsx`):**
- Add a "Research Another Asset" CTA at the bottom of the report
- Add share/copy button in header
- Add a key metrics summary card (quick-glance stats before the full analysis)
- Smooth scroll-to-section navigation

**Research Form (`Research.tsx`):**
- Add progress indicator showing form completion
- Add "Popular Configurations" presets (Conservative, Balanced, Aggressive) for one-click form fill

## Files to Edit
- `src/lib/mock-quick-report.ts` — expand MOCK_DATA, improve matching
- `src/pages/Index.tsx` — social proof, example prompts
- `src/pages/QuickResearch.tsx` — trending chips, trust indicators
- `src/pages/QuickReport.tsx` — bottom CTA, key metrics card
- `src/pages/Research.tsx` — progress indicator, presets

