"use client";

"use client";

import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { initializeCart } from "./lib/cart";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import CartDrawer from "./components/site/CartDrawer";
import initBuilderBuyBridge from "./bridge/initBuilderBuyBridge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initializeCart();
    if (typeof window !== "undefined") {
      initBuilderBuyBridge();
    }
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Header />
            <CartDrawer />
            {children}
            <Footer />
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
