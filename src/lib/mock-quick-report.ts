import { AssetType, QuickResearchReport } from "@/types/investment";

const MOCK_DATA: Record<string, Partial<QuickResearchReport>> = {
  tcs: {
    name: "Tata Consultancy Services",
    exchange: "NSE/BSE",
    currentPrice: "₹3,850",
    category: "IT Services — Large Cap",
    overview: "India's largest IT services company by market cap. Global leader in digital transformation, cloud services, and enterprise solutions with 600,000+ employees across 46 countries.",
    demandAnalysis: "Enterprise cloud migration accelerating post-AI revolution. Generative AI consulting creating new revenue streams. Order book at all-time high with $35B+ TCV. North America and Europe remain key markets with 85%+ revenue contribution.",
    fundamentals: "PE: 28.5x (industry avg 25x). ROE: 47% — best in class. Debt/Equity: 0.04. Operating margin: 25.2%. Consistent dividend yield of 1.3%. Revenue CAGR 12% over 5 years. Free cash flow conversion >90%.",
    technicals: "Trading above 200-DMA (₹3,600). RSI: 58 (neutral). Support: ₹3,700, Resistance: ₹4,050. MACD in positive territory. Volume trend neutral. Fibonacci retracement suggests ₹3,650 as strong support.",
    geopolitical: "Benefiting from US/EU outsourcing trends amid cost pressures. H-1B visa policy changes monitored but offset by local hiring strategy. INR depreciation provides earnings tailwind. US recession risk is key watchpoint.",
    verdict: "Buy",
    verdictRationale: "Premium valuation justified by best-in-class execution, margins, and return ratios. AI-led demand cycle provides multi-year growth visibility. Ideal core holding for any long-term portfolio.",
  },
  gold: {
    name: "Gold",
    exchange: "MCX",
    currentPrice: "₹62,500/10g",
    category: "Precious Metal",
    overview: "The world's primary safe-haven asset. Traded on MCX in India with high liquidity. Used as inflation hedge, portfolio diversifier, and store of value across civilizations.",
    demandAnalysis: "Central banks globally bought 1,100+ tonnes in 2024 — highest in decades. India's wedding/festive demand remains structurally strong. Gold ETF inflows surging. Digital gold platforms expanding retail access.",
    fundamentals: "Gold-to-S&P500 ratio improving. Real interest rates negative in most developed economies — bullish for gold. Mining costs rising, creating price floor. Supply growth limited to 1-2% annually.",
    technicals: "All-time highs. Trading above all moving averages. RSI: 65 (approaching overbought but strong trend). Support: ₹60,000. Resistance: ₹65,000. Parabolic SAR bullish. Weekly MACD strong positive.",
    geopolitical: "De-dollarization trend by BRICS nations. US debt ceiling concerns. Middle East and Ukraine conflicts. Fed rate cut expectations boosting gold appeal. US election year historically bullish for gold.",
    verdict: "Buy",
    verdictRationale: "Structural bull market driven by central bank buying and geopolitical uncertainty. Every portfolio should have 5-15% gold allocation. Current pullbacks are buying opportunities. Prefer SGBs for tax efficiency or MCX futures for trading.",
  },
  wheat: {
    name: "Wheat",
    exchange: "NCDEX",
    currentPrice: "₹2,450/quintal",
    category: "Food Grain — Agricultural Commodity",
    overview: "India's second most important cereal crop after rice. Traded on NCDEX. Government procurement through FCI sets price floor via Minimum Support Price (MSP). India is the 2nd largest wheat producer globally.",
    demandAnalysis: "Population growth ensures steady consumption demand. Food processing industry expanding. Government's free ration scheme (PMGKAY) creating additional procurement demand. Per capita wheat consumption stable at ~50kg/year.",
    fundamentals: "MSP for 2024-25: ₹2,275/quintal. Market prices trading above MSP — bullish signal. Buffer stock at 25 million tonnes (below 3-year average). Production estimated at 112 million tonnes. Import duty at 40% protecting domestic prices.",
    technicals: "Seasonal bottom formation in March-April. Support: ₹2,300 (near MSP). Resistance: ₹2,600. Volume increasing at support levels — accumulation phase. Historical pattern shows 10-15% rally from March to June.",
    geopolitical: "Black Sea wheat corridor instability. Climate change affecting global yields. India's wheat export ban (since May 2022) keeping domestic prices in check but global prices elevated. El Niño impact on rabi crop being monitored.",
    verdict: "Hold",
    verdictRationale: "Seasonal buying opportunity in Q1. Government policies provide downside protection via MSP. Limited upside beyond ₹2,700 due to export restrictions. Suitable for short-term trading during seasonal patterns. Not recommended for long-term investment.",
  },
};

export function generateQuickReport(name: string, assetType: AssetType): QuickResearchReport {
  const key = name.toLowerCase().trim();
  const match = Object.entries(MOCK_DATA).find(([k]) => key.includes(k) || k.includes(key));

  if (match) {
    return {
      assetType,
      ...match[1],
    } as QuickResearchReport;
  }

  // Generic fallback
  const exchangeMap: Record<AssetType, string> = {
    stock: "NSE/BSE",
    "mutual-fund": "AMFI",
    commodity: "MCX/NCDEX",
  };

  const categoryMap: Record<AssetType, string> = {
    stock: "Equity",
    "mutual-fund": "Mutual Fund",
    commodity: "Commodity",
  };

  return {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    assetType,
    exchange: exchangeMap[assetType],
    currentPrice: "₹—",
    category: categoryMap[assetType],
    overview: `${name} is a ${assetType === "mutual-fund" ? "mutual fund scheme" : assetType === "commodity" ? "commodity" : "publicly listed equity"} available for investment in Indian markets. Detailed real-time analysis requires AI integration which will be available in the next version.`,
    demandAnalysis: "Demand analysis requires real-time data feeds. Connect AI to get comprehensive demand outlook based on current market conditions, industry trends, and consumption patterns.",
    fundamentals: "Fundamental analysis will include PE ratio, ROE, debt levels, revenue growth, and peer comparison once AI integration is enabled.",
    technicals: "Technical analysis covering support/resistance levels, moving averages, RSI, MACD, and volume patterns will be available with real-time market data integration.",
    geopolitical: "Geopolitical impact assessment covering trade policies, regulatory changes, and macro-economic factors will be generated by AI once connected.",
    verdict: "Hold",
    verdictRationale: "A comprehensive verdict requires real-time fundamental, technical, and geopolitical analysis. Enable AI integration for actionable Buy/Hold/Avoid recommendations with detailed reasoning.",
  };
}
