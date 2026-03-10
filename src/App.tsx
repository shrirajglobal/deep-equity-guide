import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Research from "./pages/Research";
import Analysis from "./pages/Analysis";
import Report from "./pages/Report";
import Reports from "./pages/Reports";
import QuickResearch from "./pages/QuickResearch";
import QuickReport from "./pages/QuickReport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<Research />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/report/:id" element={<Report />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/quick-research" element={<QuickResearch />} />
          <Route path="/quick-report/:name" element={<QuickReport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
