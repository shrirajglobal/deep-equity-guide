export type Tenure = "short" | "medium" | "long" | "ultra-long";
export type RiskAppetite = "defensive" | "moderate" | "aggressive";
export type InstrumentType = "equities" | "mutual-funds" | "commodities" | "both-equity-mf" | "all";
export type MarketCap = "large" | "mid" | "small" | "flexi" | "no-preference";
export type GeoExposure = "india" | "global" | "emerging";
export type TaxRegime = "old" | "new";
export type CommodityCategory = "metals" | "energy" | "currency" | "food-grains" | "others";
export type AssetType = "stock" | "mutual-fund" | "commodity";

export const SECTORS = [
  "IT", "Pharma", "FMCG", "Banking", "Infrastructure",
  "Auto", "Energy", "Metals", "Chemicals", "Real Estate",
  "Telecom", "Defence", "Textiles",
] as const;

export type Sector = (typeof SECTORS)[number];

export const COMMODITY_CATEGORIES: { value: CommodityCategory; label: string }[] = [
  { value: "metals", label: "Metals" },
  { value: "energy", label: "Energy" },
  { value: "currency", label: "Currency" },
  { value: "food-grains", label: "Food Grains" },
  { value: "others", label: "Others" },
];

export const COMMODITIES: { name: string; category: CommodityCategory; exchange: string }[] = [
  { name: "Gold", category: "metals", exchange: "MCX" },
  { name: "Silver", category: "metals", exchange: "MCX" },
  { name: "Copper", category: "metals", exchange: "MCX" },
  { name: "Aluminium", category: "metals", exchange: "MCX" },
  { name: "Zinc", category: "metals", exchange: "MCX" },
  { name: "Lead", category: "metals", exchange: "MCX" },
  { name: "Nickel", category: "metals", exchange: "MCX" },
  { name: "Crude Oil", category: "energy", exchange: "MCX" },
  { name: "Natural Gas", category: "energy", exchange: "MCX" },
  { name: "Mentha Oil", category: "energy", exchange: "MCX" },
  { name: "USD/INR", category: "currency", exchange: "MCX-SX" },
  { name: "EUR/INR", category: "currency", exchange: "MCX-SX" },
  { name: "GBP/INR", category: "currency", exchange: "MCX-SX" },
  { name: "JPY/INR", category: "currency", exchange: "MCX-SX" },
  { name: "Wheat", category: "food-grains", exchange: "NCDEX" },
  { name: "Soybean", category: "food-grains", exchange: "NCDEX" },
  { name: "Chana", category: "food-grains", exchange: "NCDEX" },
  { name: "Mustard Seed", category: "food-grains", exchange: "NCDEX" },
  { name: "Cotton", category: "others", exchange: "MCX" },
  { name: "Guar Seed", category: "others", exchange: "NCDEX" },
  { name: "Castor Seed", category: "others", exchange: "NCDEX" },
  { name: "Turmeric", category: "others", exchange: "NCDEX" },
  { name: "Jeera", category: "others", exchange: "NCDEX" },
  { name: "Coriander", category: "others", exchange: "NCDEX" },
];

export type ScriptCount = "auto" | "3" | "4" | "5" | "6" | "8" | "10";

export interface InvestmentFormData {
  tenure: Tenure;
  amount: string;
  risk: RiskAppetite;
  instrument: InstrumentType;
  sectors: Sector[];
  marketCap: MarketCap;
  geoExposure: GeoExposure;
  existingHoldings: string;
  taxRegime: TaxRegime;
  scriptCount: ScriptCount;
  commodityCategories: CommodityCategory[];
}

export interface StockRecommendation {
  name: string;
  sector: string;
  cmp: string;
  target: string;
  rationale: string;
  demandAnalysis: string;
  fundamentals: string;
  technicals: string;
  geopolitical: string;
}

export interface MutualFundRecommendation {
  name: string;
  category: string;
  aum: string;
  expenseRatio: string;
  returns: string;
  overlapNote: string;
  sipOrLumpsum: string;
  rationale: string;
}

export interface CommodityRecommendation {
  name: string;
  category: CommodityCategory;
  exchange: string;
  cmp: string;
  target: string;
  rationale: string;
  demandAnalysis: string;
  fundamentals: string;
  technicals: string;
  geopolitical: string;
}

export interface ResearchReport {
  id: string;
  createdAt: string;
  formData: InvestmentFormData;
  executiveSummary: string;
  assetAllocation: {
    equity: number;
    mutualFunds: number;
    debt: number;
    gold: number;
    commodities: number;
  };
  equityRecommendations: StockRecommendation[];
  mutualFundRecommendations: MutualFundRecommendation[];
  commodityRecommendations: CommodityRecommendation[];
  riskFactors: string[];
  diversificationNote: string;
}

export interface QuickResearchReport {
  name: string;
  assetType: AssetType;
  exchange: string;
  currentPrice: string;
  category: string;
  overview: string;
  demandAnalysis: string;
  fundamentals: string;
  technicals: string;
  geopolitical: string;
  verdict: "Buy" | "Hold" | "Avoid";
  verdictRationale: string;
}
