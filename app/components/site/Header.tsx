"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { getCartItemCount } from "@/lib/cart";

const nav = [
  { href: "/womens-activewear", label: "Women's Activewear" },
  { href: "/womens-ready-to-wear", label: "Women's Ready to Wear" },
  { href: "/mens-activewear", label: "Men's Activewear" },
  { href: "/mens-ready-to-wear", label: "Men's Ready to Wear" },
];

export default function Header() {
  const [count, setCount] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);
  
  // Safely get pathname
  let pathname = '/';
  try {
    pathname = usePathname();
  } catch (error) {
    console.error('Error getting pathname:', error);
  }
  
  // Initialize cart count after hydration
  useEffect(() => {
    setIsClient(true);
    try {
      setCount(getCartItemCount());
    } catch (error) {
      console.error('Error getting cart count:', error);
      setCount(0);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const onUpdated = (e: any) => {
      try {
        const items = e.detail.items as { qty?: number; quantity?: number }[];
        setCount(items.reduce((c, it) => c + (it.qty || it.quantity || 0), 0));
      } catch (error) {
        console.error('Error updating cart count:', error);
        setCount(0);
      }
    };
    document.addEventListener("cart:updated", onUpdated as EventListener);
    return () => document.removeEventListener("cart:updated", onUpdated as EventListener);
  }, [isClient]);
  return (
    <header className="sticky top-0 z-40 bg-[hsl(var(--background))]/80 backdrop-blur border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="inline-flex items-end gap-2">
            <span className="text-xs tracking-[0.3em] uppercase text-foreground/70">Welcome to</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap tracking-wide ${
                  pathname === item.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label="Wishlist" className="p-2 rounded-full hover:bg-secondary">
              <Heart className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-secondary" onClick={() => document.dispatchEvent(new Event("cart:toggle"))}>
              <ShoppingBag className="h-5 w-5" />
              {isClient && count > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] leading-none px-1.5 py-1 rounded-full bg-primary text-primary-foreground border border-border">{count}</span>
              )}
            </button>
          </div>
        </div>
        <div className="py-2">
          <Link href="/" className="block">
            <div className="inline-flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight">Aly + Andy Z</span>
              <span className="font-display italic text-2xl text-foreground/70">Boutique</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
