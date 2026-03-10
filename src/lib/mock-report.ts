import { InvestmentFormData, ResearchReport, StockRecommendation, MutualFundRecommendation, CommodityRecommendation } from "@/types/investment";

const STOCK_DB: StockRecommendation[] = [
  {
    name: "Tata Consultancy Services",
    sector: "IT",
    cmp: "₹3,850",
    target: "₹4,400",
    rationale: "Market leader with consistent revenue growth driven by digital transformation demand globally.",
    demandAnalysis: "Enterprise cloud migration and AI integration driving sustained demand. Order book remains robust.",
    fundamentals: "PE: 28.5, ROE: 47%, Debt/Equity: 0.04. Best-in-class margins at 25%+.",
    technicals: "Trading above 200-DMA. RSI at 58 — neutral zone. Support at ₹3,700.",
    geopolitical: "Benefiting from US/EU outsourcing trends. Currency hedging mitigates INR volatility.",
  },
  {
    name: "HDFC Bank",
    sector: "Banking",
    cmp: "₹1,680",
    target: "₹1,950",
    rationale: "Strongest asset quality among Indian banks with expanding retail loan book.",
    demandAnalysis: "Credit growth at 18% YoY. Digital banking penetration creating new revenue streams.",
    fundamentals: "PE: 19.2, ROE: 16.8%, NPA: 1.2%. Consistent dividend payer.",
    technicals: "Breakout above ₹1,650 resistance. MACD bullish crossover on weekly chart.",
    geopolitical: "RBI's stable rate environment supports NIM. Merger synergies fully realized.",
  },
  {
    name: "Bharti Airtel",
    sector: "Telecom",
    cmp: "₹1,520",
    target: "₹1,800",
    rationale: "Duopoly market structure ensures pricing power. 5G rollout unlocking enterprise revenue.",
    demandAnalysis: "Data consumption growing 25% annually. ARPU trajectory firmly upward.",
    fundamentals: "PE: 35, ROE: 15.2%, improving FCF. Africa operations provide diversification.",
    technicals: "Strong uptrend. 50-DMA acting as dynamic support. RSI 62.",
    geopolitical: "Government's Digital India push supports telecom infrastructure investment.",
  },
  {
    name: "Larsen & Toubro",
    sector: "Infrastructure",
    cmp: "₹3,400",
    target: "₹3,900",
    rationale: "Largest beneficiary of India's infrastructure capex cycle with ₹4L+ crore order book.",
    demandAnalysis: "Government infrastructure spending at all-time highs. Defence orders accelerating.",
    fundamentals: "PE: 32, ROE: 14.5%. Order book provides 3-year revenue visibility.",
    technicals: "Consolidating near highs. Volume accumulation pattern. Support at ₹3,200.",
    geopolitical: "Make in India and defence indigenization directly benefit L&T's engineering capabilities.",
  },
  {
    name: "Sun Pharmaceutical",
    sector: "Pharma",
    cmp: "₹1,750",
    target: "₹2,050",
    rationale: "Specialty pharma pipeline in US market creating high-margin growth engine.",
    demandAnalysis: "Generic drug demand stable. Specialty products (Ilumya, Winlevi) gaining market share.",
    fundamentals: "PE: 38, ROE: 12.8%. R&D spending at 7% of revenue driving future pipeline.",
    technicals: "All-time high breakout. Strong momentum. Support at ₹1,650.",
    geopolitical: "FDA compliance improving. US healthcare policy stable for generics pricing.",
  },
];

const MF_DB: MutualFundRecommendation[] = [
  {
    name: "Parag Parikh Flexi Cap Fund",
    category: "Flexi Cap",
    aum: "₹58,000 Cr",
    expenseRatio: "0.63%",
    returns: "3Y: 18.2%, 5Y: 22.1%",
    overlapNote: "Minimal overlap with other recommended funds. Unique international allocation (Google, Alphabet, Microsoft).",
    sipOrLumpsum: "SIP recommended for ₹2L+; lumpsum suitable in market corrections.",
    rationale: "Diversified across market caps and geographies. Conservative stock selection with valuation discipline.",
  },
  {
    name: "ICICI Prudential Bluechip Fund",
    category: "Large Cap",
    aum: "₹52,000 Cr",
    expenseRatio: "0.87%",
    returns: "3Y: 16.5%, 5Y: 17.8%",
    overlapNote: "~15% portfolio overlap with PPFAS (HDFC Bank, ICICI Bank common holdings).",
    sipOrLumpsum: "SIP ideal for long-term wealth creation. Stable anchor for portfolio.",
    rationale: "Consistent top-quartile performer. Well-diversified large cap exposure with low volatility.",
  },
  {
    name: "Nippon India Small Cap Fund",
    category: "Small Cap",
    aum: "₹45,000 Cr",
    expenseRatio: "0.72%",
    returns: "3Y: 28.5%, 5Y: 30.2%",
    overlapNote: "Zero overlap with large cap funds. Provides complementary small cap exposure.",
    sipOrLumpsum: "Strictly SIP only. Lumpsum not recommended due to high volatility in small caps.",
    rationale: "Best risk-adjusted returns in category. Fund manager's stock-picking in emerging companies is exceptional.",
  },
  {
    name: "HDFC Mid-Cap Opportunities Fund",
    category: "Mid Cap",
    aum: "₹62,000 Cr",
    expenseRatio: "0.78%",
    returns: "3Y: 22.1%, 5Y: 24.5%",
    overlapNote: "~8% overlap with small cap fund in transitioning mid-to-small cap stocks.",
    sipOrLumpsum: "SIP preferred. Can consider staggered lumpsum on 10%+ market correction.",
    rationale: "India's mid cap space benefits most from domestic consumption growth. Fund has sector-diversified approach.",
  },
];

const COMMODITY_DB: CommodityRecommendation[] = [
  {
    name: "Gold",
    category: "metals",
    exchange: "MCX",
    cmp: "₹62,500/10g",
    target: "₹68,000/10g",
    rationale: "Safe haven asset with strong uptrend amid global uncertainty. Central banks globally increasing gold reserves.",
    demandAnalysis: "Wedding/festive season demand strong. Investment demand surging via ETFs and sovereign gold bonds.",
    fundamentals: "Gold-to-S&P ratio improving. Real interest rates negative globally — bullish for gold.",
    technicals: "Trading above all key moving averages. RSI 65. Support at ₹60,000. Breakout confirmed above ₹61,500.",
    geopolitical: "US-China tensions, Middle East conflict, and de-dollarization trend driving institutional buying.",
  },
  {
    name: "Silver",
    category: "metals",
    exchange: "MCX",
    cmp: "₹75,800/kg",
    target: "₹85,000/kg",
    rationale: "Dual play — industrial metal + precious metal. EV and solar panel demand creating structural floor.",
    demandAnalysis: "Industrial demand from EV batteries and solar cells growing 15% annually. Supply deficit widening.",
    fundamentals: "Gold-Silver ratio at 80 — historically overvalued, suggesting silver outperformance ahead.",
    technicals: "Cup and handle pattern on weekly chart. Support at ₹72,000. Momentum building.",
    geopolitical: "Green energy transition policies globally creating sustained industrial demand.",
  },
  {
    name: "Crude Oil",
    category: "energy",
    exchange: "MCX",
    cmp: "₹6,200/barrel",
    target: "₹6,800/barrel",
    rationale: "OPEC+ production cuts supporting prices. Global demand recovery post-slowdown.",
    demandAnalysis: "China reopening boosting demand. India's consumption at record highs.",
    fundamentals: "Inventory draws consistent. OPEC+ compliance high. Spare capacity limited.",
    technicals: "Basing pattern near ₹6,000 support. MACD turning positive. RSI recovering from oversold.",
    geopolitical: "Middle East tensions and Russia sanctions keeping supply risks elevated.",
  },
  {
    name: "Natural Gas",
    category: "energy",
    exchange: "MCX",
    cmp: "₹230/mmBtu",
    target: "₹280/mmBtu",
    rationale: "Transition fuel gaining importance. LNG infrastructure build-out creating demand floor.",
    demandAnalysis: "Power sector switching from coal to gas. City gas distribution expansion in India.",
    fundamentals: "Storage levels below 5-year average. Production growth plateauing in US.",
    technicals: "Double bottom formation at ₹200. Breakout above ₹240 would confirm bullish reversal.",
    geopolitical: "European energy security concerns driving LNG import diversification.",
  },
  {
    name: "USD/INR",
    category: "currency",
    exchange: "MCX-SX",
    cmp: "₹83.50",
    target: "₹85.00",
    rationale: "RBI managing gradual depreciation. Current account deficit and FII flows key drivers.",
    demandAnalysis: "Import demand for crude oil and electronics keeping USD demand high.",
    fundamentals: "Real effective exchange rate (REER) suggests INR slightly overvalued. Gradual depreciation expected.",
    technicals: "Channel pattern between ₹82.50-₹84.00. Breakout above ₹84 signals move to ₹85+.",
    geopolitical: "Fed rate trajectory and India's forex reserves ($620B) providing stability.",
  },
  {
    name: "Wheat",
    category: "food-grains",
    exchange: "NCDEX",
    cmp: "₹2,450/quintal",
    target: "₹2,700/quintal",
    rationale: "Monsoon uncertainties and government procurement policies creating upside potential.",
    demandAnalysis: "Population growth and food security concerns keeping demand structurally high.",
    fundamentals: "MSP increases annual. Buffer stock levels adequate but below optimal.",
    technicals: "Seasonal bottom forming. Historical pattern shows rally from March-June.",
    geopolitical: "Global wheat supply disrupted by Black Sea conflict. India's export ban keeping domestic supply stable.",
  },
  {
    name: "Soybean",
    category: "food-grains",
    exchange: "NCDEX",
    cmp: "₹4,800/quintal",
    target: "₹5,400/quintal",
    rationale: "Crushing demand for soy oil and meal robust. Acreage uncertainty adding supply risk premium.",
    demandAnalysis: "Animal feed industry growing 8% annually. Soy oil demand for cooking at all-time high.",
    fundamentals: "Global soybean stocks-to-use ratio tightening. Brazil/Argentina crop outlook mixed.",
    technicals: "Support at ₹4,500 holding well. RSI neutral at 52. Accumulation zone.",
    geopolitical: "US-China trade dynamics and South American weather patterns key watchpoints.",
  },
  {
    name: "Cotton",
    category: "others",
    exchange: "MCX",
    cmp: "₹56,000/bale",
    target: "₹62,000/bale",
    rationale: "Textile export recovery and domestic consumption driving demand. Acreage shift to other crops limiting supply.",
    demandAnalysis: "Textile sector recovery post-pandemic. Government's PLI scheme for textiles boosting demand.",
    fundamentals: "Global cotton stocks declining. India is 2nd largest producer but domestic consumption absorbing supply.",
    technicals: "Basing above ₹54,000. Volume pick-up suggesting accumulation. Seasonal rally expected.",
    geopolitical: "China's textile policy and Bangladesh garment industry demand impacting global trade flows.",
  },
];

export function generateMockReport(formData: InvestmentFormData): ResearchReport {
  const showEquities = formData.instrument === "equities" || formData.instrument === "both-equity-mf" || formData.instrument === "all";
  const showMF = formData.instrument === "mutual-funds" || formData.instrument === "both-equity-mf" || formData.instrument === "all";
  const showCommodities = formData.instrument === "commodities" || formData.instrument === "all";

  let equityPct = 0, mfPct = 0, debtPct = 0, goldPct = 0, commodityPct = 0;

  if (formData.risk === "aggressive") {
    equityPct = showEquities ? 45 : 0;
    mfPct = showMF ? 25 : 0;
    commodityPct = showCommodities ? 15 : 0;
    debtPct = 10;
    goldPct = 5;
  } else if (formData.risk === "moderate") {
    equityPct = showEquities ? 35 : 0;
    mfPct = showMF ? 25 : 0;
    commodityPct = showCommodities ? 15 : 0;
    debtPct = 15;
    goldPct = 10;
  } else {
    equityPct = showEquities ? 15 : 0;
    mfPct = showMF ? 30 : 0;
    commodityPct = showCommodities ? 15 : 0;
    debtPct = 30;
    goldPct = 10;
  }

  // Redistribute if instrument types are excluded
  const totalExcluded = (!showEquities ? equityPct : 0) + (!showMF ? mfPct : 0) + (!showCommodities ? commodityPct : 0);
  if (totalExcluded > 0) {
    const activeCount = [showEquities, showMF, showCommodities].filter(Boolean).length;
    const redistribution = activeCount > 0 ? totalExcluded / activeCount : 0;
    if (!showEquities) equityPct = 0; else equityPct += redistribution;
    if (!showMF) mfPct = 0; else mfPct += redistribution;
    if (!showCommodities) commodityPct = 0; else commodityPct += redistribution;
  }

  // Determine count
  const autoStockCount = formData.risk === "aggressive" ? 4 : 3;
  const autoMFCount = formData.risk === "aggressive" ? 4 : 3;
  const autoCommodityCount = formData.risk === "aggressive" ? 4 : 3;
  const userCount = formData.scriptCount === "auto" ? null : parseInt(formData.scriptCount);

  // Pick stocks based on sector preference
  let stocks = STOCK_DB;
  if (formData.sectors.length > 0) {
    const sectorFiltered = STOCK_DB.filter((s) =>
      formData.sectors.some((sec) => s.sector.toLowerCase().includes(sec.toLowerCase()))
    );
    stocks = sectorFiltered.length >= 2 ? sectorFiltered : STOCK_DB;
  }
  const selectedStocks = stocks.slice(0, userCount ?? autoStockCount);
  const selectedMFs = MF_DB.slice(0, userCount ?? autoMFCount);

  // Pick commodities based on category preference
  let commodities = COMMODITY_DB;
  if (formData.commodityCategories && formData.commodityCategories.length > 0) {
    const catFiltered = COMMODITY_DB.filter((c) =>
      formData.commodityCategories.includes(c.category)
    );
    commodities = catFiltered.length >= 2 ? catFiltered : COMMODITY_DB;
  }
  const selectedCommodities = commodities.slice(0, userCount ?? autoCommodityCount);

  const riskLabel = formData.risk.charAt(0).toUpperCase() + formData.risk.slice(1);
  const tenureLabel =
    formData.tenure === "short" ? "1-3 year" :
    formData.tenure === "medium" ? "3-7 year" :
    formData.tenure === "long" ? "7-15 year" : "15+ year";

  const parts: string[] = [];
  if (showEquities) parts.push(`${selectedStocks.length} equity scripts`);
  if (showMF) parts.push(`${selectedMFs.length} mutual funds`);
  if (showCommodities) parts.push(`${selectedCommodities.length} commodity contracts`);

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    formData,
    executiveSummary: `This research report is tailored for a ${riskLabel} investor with a ${tenureLabel} horizon and an investment corpus of ₹${formData.amount}. The analysis incorporates fundamental strength, market demand dynamics, technical positioning, and current geopolitical factors. The asset allocation prioritizes ${formData.risk === "aggressive" ? "growth with calculated risk exposure" : formData.risk === "moderate" ? "balanced growth with downside protection" : "capital preservation with steady income generation"}. ${parts.join(" and ")} have been carefully selected — enough for meaningful diversification without diluting conviction.`,
    assetAllocation: {
      equity: Math.round(equityPct),
      mutualFunds: Math.round(mfPct),
      debt: Math.round(debtPct),
      gold: Math.round(goldPct),
      commodities: Math.round(commodityPct),
    },
    equityRecommendations: showEquities ? selectedStocks : [],
    mutualFundRecommendations: showMF ? selectedMFs : [],
    commodityRecommendations: showCommodities ? selectedCommodities : [],
    riskFactors: [
      "Global interest rate changes could impact equity valuations and fund NAVs.",
      "Geopolitical tensions (Middle East, US-China) may cause short-term volatility.",
      "Sector concentration risk if preference sectors face regulatory headwinds.",
      "Currency fluctuation risk for funds with international exposure.",
      "Liquidity risk in small/mid cap segments during market stress periods.",
      ...(showCommodities ? [
        "Commodity prices are highly sensitive to global supply chain disruptions.",
        "Weather patterns and monsoon performance directly impact agri-commodity prices.",
        "Regulatory changes (export bans, import duties) can cause sharp commodity price swings.",
      ] : []),
    ],
    diversificationNote: `This portfolio recommends ${parts.join(" and ")} — deliberately limited to maintain conviction while ensuring adequate diversification. Over-diversification dilutes returns and makes monitoring impractical. Each selection serves a distinct purpose in the portfolio with minimal overlap.`,
  };
}
