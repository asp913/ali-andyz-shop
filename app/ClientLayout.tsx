"use client";

import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { initializeCart } from "@/lib/cart";
import Header from "./components/site/HeaderStatic";
import Footer from "./components/site/Footer";
import CartDrawer from "./components/site/CartDrawer";
import initBuilderBuyBridge from "./bridge/initBuilderBuyBridge";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  // Create QueryClient inside component to avoid hydration issues
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        refetchOnWindowFocus: false,
      },
    },
  }));

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
        <div style={{ backgroundColor: 'yellow', padding: '10px', border: '2px solid red' }}>
          <div>DEBUG: ClientLayout is rendering</div>
          <Header />
        </div>
        <CartDrawer />
        {children}
        <Footer />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
