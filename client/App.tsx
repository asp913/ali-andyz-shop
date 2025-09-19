import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { initializeCart } from "./lib/cart";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import CollectionPlaceholder from "./pages/CollectionPlaceholder";
import CapsulePage from "./pages/CapsulePage";
import Impact from "./pages/Impact";
import WomensActivewear from "./pages/WomensActivewear";
import WomensActivewearLookbook from "./pages/WomensActivewearLookbook";
import WomensReadyToWear from "./pages/WomensReadyToWear";
import WomensRTWLookbook from "./pages/WomensRTWLookbook";
import MensActivewear from "./pages/MensActivewear";
import MensActivewearLookbook from "./pages/MensActivewearLookbook";
import MensReadyToWear from "./pages/MensReadyToWear";
import MensRTWLookbook from "./pages/MensRTWLookbook";
import ProductPage from "./pages/Product";
import SizeGuide from "./pages/SizeGuide";
import BookSession from "./pages/BookSession";
import CartDrawer from "./components/site/CartDrawer";
import initBuilderBuyBridge from "./bridge/initBuilderBuyBridge";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initializeCart();
    if (typeof window !== 'undefined') {
      initBuilderBuyBridge();
    }
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/womens-activewear" element={<WomensActivewear />} />
          <Route path="/womens-activewear/lookbook" element={<WomensActivewearLookbook />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/womens-ready-to-wear" element={<WomensReadyToWear />} />
          <Route path="/womens-ready-to-wear/lookbook" element={<WomensRTWLookbook />} />
          <Route path="/mens-activewear" element={<MensActivewear />} />
          <Route path="/mens-activewear/lookbook" element={<MensActivewearLookbook />} />
          <Route path="/mens-ready-to-wear" element={<MensReadyToWear />} />
          <Route path="/mens-ready-to-wear/lookbook" element={<MensRTWLookbook />} />
          <Route path="/our-impact" element={<Impact />} />
          <Route path="/capsule/:handle" element={<CapsulePage />} />
          <Route path="/book-session" element={<BookSession />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

const rootEl = document.getElementById("root");
if (rootEl) {
  // store the root on window to avoid calling createRoot multiple times
  // across fast-refresh / HMR or when other scripts re-run this module
  // @ts-ignore
  const __win: any = window;
  if (!__win.__client_root) {
    __win.__client_root = createRoot(rootEl);
  }
  __win.__client_root.render(<App />);
}
