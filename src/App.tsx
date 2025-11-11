import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InsideOcean from "./pages/InsideOcean";
import ChemicalOcean from "./pages/ChemicalOcean";
import HumansOcean from "./pages/HumansOcean";
import Future from "./pages/Future";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const useHashRouter =
    import.meta.env.MODE === "production" ||
    (typeof window !== "undefined" && window.location.hostname.endsWith("github.io"));

  const appRoutes = (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/inside-ocean" element={<InsideOcean />} />
      <Route path="/chemical-ocean" element={<ChemicalOcean />} />
      <Route path="/humans-ocean" element={<HumansOcean />} />
      <Route path="/future" element={<Future />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {useHashRouter ? (
          <HashRouter>{appRoutes}</HashRouter>
        ) : (
          <BrowserRouter basename={import.meta.env.BASE_URL}>{appRoutes}</BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
