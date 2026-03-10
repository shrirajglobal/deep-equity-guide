import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuickResearchReport, AssetType } from "@/types/investment";
import { generateQuickReport } from "@/lib/mock-quick-report";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, TrendingUp, BarChart3, Globe, Activity, Eye, CheckCircle, AlertTriangle, MinusCircle } from "lucide-react";

const verdictConfig = {
  Buy: { color: "text-success", bg: "bg-success/10 border-success/30", icon: CheckCircle },
  Hold: { color: "text-chart-4", bg: "bg-chart-4/10 border-chart-4/30", icon: MinusCircle },
  Avoid: { color: "text-destructive", bg: "bg-destructive/10 border-destructive/30", icon: AlertTriangle },
};

const QuickReport = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [report, setReport] = useState<QuickResearchReport | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = sessionStorage.getItem("quickResearchData");
    let assetType: AssetType = "stock";
    if (data) {
      const parsed = JSON.parse(data);
      assetType = parsed.assetType;
    }

    // Simulate loading
    const timer = setTimeout(() => {
      const result = generateQuickReport(decodeURIComponent(name || ""), assetType);
      setReport(result);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [name]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-muted-foreground font-mono">Researching {decodeURIComponent(name || "")}...</p>
        </div>
      </div>
    );
  }

  if (!report) return null;

  const vc = verdictConfig[report.verdict];
  const VerdictIcon = vc.icon;

  const sections = [
    { icon: Eye, label: "Overview", content: report.overview },
    { icon: TrendingUp, label: "Demand Analysis", content: report.demandAnalysis },
    { icon: BarChart3, label: "Fundamental Analysis", content: report.fundamentals },
    { icon: Activity, label: "Technical Analysis", content: report.technicals },
    { icon: Globe, label: "Geopolitical Factors", content: report.geopolitical },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 px-6 py-4 flex items-center gap-3 sticky top-0 bg-background/95 backdrop-blur z-10">
        <Button variant="ghost" size="icon" onClick={() => navigate("/quick-research")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <span className="text-lg font-semibold text-foreground">{report.name}</span>
          <p className="text-xs text-muted-foreground">{report.exchange} · {report.category}</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8 space-y-8">
        {/* Price & Verdict Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Current Price</p>
            <p className="text-3xl font-mono font-bold text-foreground">{report.currentPrice}</p>
          </div>
          <Card className={`border ${vc.bg}`}>
            <CardContent className="p-4 flex items-center gap-3">
              <VerdictIcon className={`h-6 w-6 ${vc.color}`} />
              <div>
                <p className={`text-lg font-bold ${vc.color}`}>{report.verdict}</p>
                <p className="text-xs text-muted-foreground">AI Verdict</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Analysis Sections */}
        {sections.map((section, i) => (
          <div key={section.label}>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                {section.label}
              </h2>
              <p className="font-narrative text-base leading-relaxed text-foreground/90">{section.content}</p>
            </section>
            {i < sections.length - 1 && <Separator className="mt-6" />}
          </div>
        ))}

        <Separator />

        {/* Verdict Rationale */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <VerdictIcon className={`h-5 w-5 ${vc.color}`} />
            Verdict Rationale
          </h2>
          <p className="font-narrative text-base leading-relaxed text-foreground/90">{report.verdictRationale}</p>
        </section>

        <div className="mt-12 p-4 rounded-lg bg-secondary/50 border border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            This report is generated for personal research purposes only. It does not constitute financial advice.
          </p>
        </div>
      </main>
    </div>
  );
};

export default QuickReport;
