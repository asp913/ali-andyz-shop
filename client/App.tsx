import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// ⬇️ BrowserRouter → HashRouter
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { initializeCart } from "./lib/cart";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import CollectionPlaceholder from "./pages/CollectionPlaceholder";
import WomensActivewear from "./pages/WomensActivewear";
import WomensReadyToWear from "./pages/WomensReadyToWear";
import MensActivewear from "./pages/MensActivewear";
import MensReadyToWear from "./pages/MensReadyToWear";
import ProductPage from "./pages/Product";
import CartDrawer from "./components/site/CartDrawer";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initializeCart();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* ⬇️ Wrap with HashRouter */}
        <HashRouter>
          <Header />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/womens-activewear" element={<WomensActivewear />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/womens-ready-to-wear" element={<WomensReadyToWear />} />
            <Route path="/mens-activewear" element={<MensActivewear />} />
            <Route path="/mens-ready-to-wear" element={<MensReadyToWear />} />
            <Route path="/our-impact" element={<CollectionPlaceholder />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
