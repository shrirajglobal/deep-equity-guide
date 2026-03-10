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

  // Generic fallback with meaningful content
  const exchangeMap: Record<AssetType, string> = {
    stock: "NSE/BSE",
    "mutual-fund": "AMFI",
    commodity: "MCX/NCDEX",
  };

  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  if (assetType === "commodity") {
    return {
      name: displayName,
      assetType,
      exchange: "MCX/NCDEX",
      currentPrice: "₹—",
      category: "Commodity",
      overview: `${displayName} is an actively traded commodity on Indian exchanges. It plays a significant role in India's agricultural and industrial economy. Market participants include hedgers, speculators, and physical traders who rely on exchange-traded contracts for price discovery and risk management.`,
      demandAnalysis: `Domestic demand for ${displayName} remains driven by seasonal consumption patterns, industrial usage, and export dynamics. Supply-side factors including production estimates, weather conditions, and government policies (MSP, export/import duties) significantly influence pricing. Current market sentiment suggests steady demand with seasonal variations expected.`,
      fundamentals: `Key metrics to monitor: production volume trends, inventory/stock levels, import-export data, and government procurement policies. Historically, ${displayName} prices have shown seasonal patterns aligned with harvest cycles and festival demand. Current stocks-to-use ratio and global supply-demand balance are critical pricing factors.`,
      technicals: `${displayName} is trading within its recent range. Key technical levels include support near recent lows and resistance at prior swing highs. Moving averages (20/50/200 DMA) and RSI indicators should be monitored for trend confirmation. Volume patterns suggest current accumulation/distribution phase.`,
      geopolitical: `Global trade policies, weather disruptions (El Niño/La Niña), and government interventions (export bans, duty changes, MSP revisions) are key factors. International price benchmarks and currency movements also influence domestic ${displayName} pricing. Monitor USDA reports and Indian government crop estimates.`,
      verdict: "Hold",
      verdictRationale: `${displayName} presents a neutral outlook at current levels. Enter on dips near support with strict stop-losses. Seasonal patterns and government policy announcements are key catalysts to watch. Suitable for short-to-medium term trading with proper risk management.`,
    };
  }

  if (assetType === "mutual-fund") {
    return {
      name: displayName,
      assetType,
      exchange: "AMFI",
      currentPrice: "NAV: ₹—",
      category: "Mutual Fund",
      overview: `${displayName} is a mutual fund scheme available for investment in India. Mutual funds offer professional portfolio management, diversification, and liquidity to retail investors. Fund performance depends on the fund manager's stock selection, sector allocation, and market timing decisions.`,
      demandAnalysis: `Mutual fund industry AUM in India has been growing steadily, driven by increasing retail participation through SIPs. ${displayName} benefits from the broader trend of financialization of savings in India. Category-level flows and benchmark performance are key demand indicators.`,
      fundamentals: `Key metrics: NAV growth (1Y/3Y/5Y CAGR), expense ratio, AUM size, portfolio turnover, and Sharpe ratio. Compare against category average and benchmark index returns. Fund manager track record and consistency of alpha generation are critical evaluation factors.`,
      technicals: `NAV trend analysis shows the fund's performance relative to its benchmark. Rolling returns analysis across 1Y/3Y/5Y periods helps assess consistency. Maximum drawdown and recovery time indicate downside risk management capability.`,
      geopolitical: `Macro factors including RBI interest rate policy, government fiscal policy, FII/DII flows, and global risk appetite affect fund performance. Sector-specific regulatory changes may impact funds with concentrated sector allocations.`,
      verdict: "Hold",
      verdictRationale: `${displayName} should be evaluated against category peers on risk-adjusted returns (Sharpe, Sortino ratios) and rolling return consistency. SIP route recommended for long-term wealth creation. Review portfolio overlap if holding multiple funds in the same category.`,
    };
  }

  // Stock fallback
  return {
    name: displayName,
    assetType,
    exchange: "NSE/BSE",
    currentPrice: "₹—",
    category: "Equity",
    overview: `${displayName} is a listed equity on Indian stock exchanges. The company operates in the Indian market and is subject to sectoral trends, regulatory developments, and macroeconomic conditions. Investors should evaluate the company's competitive moat, management quality, and growth runway.`,
    demandAnalysis: `Revenue growth trajectory and market share trends indicate the company's competitive positioning. Industry tailwinds, customer concentration risk, and order book visibility (if applicable) are key demand-side factors. Peer comparison on revenue growth rates provides context.`,
    fundamentals: `Key metrics to evaluate: PE ratio vs industry average, ROE/ROCE trends, debt-to-equity ratio, operating margin trajectory, and free cash flow generation. Promoter holding pattern and institutional ownership changes signal market confidence. Dividend history indicates capital allocation discipline.`,
    technicals: `Monitor price action relative to key moving averages (50/200 DMA). RSI, MACD, and volume trends provide momentum signals. Identify support/resistance zones from historical price action. Delivery percentage trends indicate institutional activity.`,
    geopolitical: `Sector-specific regulatory policies, government capex allocation, trade agreements, and global supply chain dynamics affect the stock. Currency movements impact companies with significant export/import exposure. Monitor quarterly results for guidance and management commentary.`,
    verdict: "Hold",
    verdictRationale: `${displayName} requires detailed evaluation of recent quarterly results, management guidance, and peer comparison before taking a directional view. Current recommendation is to hold and monitor key fundamental triggers. Enter fresh positions only at attractive valuations with margin of safety.`,
  };
}
