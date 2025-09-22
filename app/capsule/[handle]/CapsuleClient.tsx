"use client";

import React, { useEffect, useState } from "react";
import TrustSignals from "@/components/site/TrustSignals";
import { Product } from "@/lib/stripe";

interface CapsuleClientProps {
  capsule: {
    handle: string;
    title: string;
    tagline: string;
    bundlePrice: number;
    bundleValue: number;
    bundleSavings: number;
    priceRange: string;
    capsuleDescription: string;
    sellingPoints: string[];
    heroImage: string;
    flatLayImage: string;
    bundleStripeUrl: string | null;
    pieces: Array<{
      id: string;
      productId: string;
      name: string;
      price: number;
      sizeOptions: string[];
      isIncludedInCapsule: boolean;
      stripeLinks: Record<string, string | null>;
    }>;
  };
}

function SizeButton({ label, href }: { label: string; href: string | null }) {
  if (href) {
    return (
      <a
        href={href}
        className="px-3 py-1 text-xs border border-border rounded-sm hover:bg-secondary transition-colors"
      >
        {label}
      </a>
    );
  }
  return (
    <button
      disabled
      className="px-3 py-1 text-xs border border-border rounded-sm text-muted-foreground cursor-not-allowed"
    >
      {label}
    </button>
  );
}

export default function CapsuleClient({ capsule }: CapsuleClientProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/stripe/products?category=all');
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.info("CapsuleClient render", { 
      handle: capsule.handle, 
      capsuleLength: capsule?.pieces?.length 
    });
  }, [capsule]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden">
          <img
            src={capsule.heroImage}
            alt={capsule.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-light mb-4">{capsule.title}</h1>
            <p className="text-xl md:text-2xl font-light">{capsule.tagline}</p>
          </div>
        </div>
      </section>

      {/* Bundle Info */}
      <section className="px-6 py-12 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-3xl font-light mb-2">
              Bundle ${capsule.bundlePrice} · Value ${capsule.bundleValue} · Save ${capsule.bundleSavings}
            </div>
            <div className="text-lg text-muted-foreground mb-4">
              Price range: {capsule.priceRange}
            </div>
            <p className="text-lg max-w-2xl mx-auto">{capsule.capsuleDescription}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {capsule.sellingPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-medium">{point}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {capsule.bundleStripeUrl ? (
              <a
                href={capsule.bundleStripeUrl}
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
              >
                Get the Full Capsule - ${capsule.bundlePrice}
              </a>
            ) : (
              <button
                disabled
                className="inline-block px-8 py-3 bg-muted text-muted-foreground rounded-sm cursor-not-allowed"
              >
                Bundle Coming Soon
              </button>
            )}
            <div className="text-sm text-muted-foreground">
              <p>Choose your vibe: get the full capsule for effortless head-to-toe styling, or shop pieces individually to mix into your wardrobe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flat Lay */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <img
            src={capsule.flatLayImage}
            alt={`${capsule.title} flat lay`}
            className="w-full rounded-sm"
            loading="lazy"
          />
        </div>
      </section>

      {/* Shop individually */}
      <section id="shop-individually" className="px-6 py-12 bg-card">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-light mb-6">Shop Individually</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capsule.pieces.map((piece) => {
              const product = piece.productId ? products.find(p => p.handle === piece.productId || p.id === piece.productId) : undefined;
              const image = product?.image ?? capsule.heroImage;
              const title = product?.name ?? piece.name;
              const price = product?.price ?? piece.price;
              const options = product?.options ?? piece.sizeOptions ?? [];

              return (
                <div key={piece.id} className="border p-4 rounded-sm flex flex-col h-full">
                  <div className="rounded-sm overflow-hidden bg-background mb-3">
                    <a href={product ? `/product/${product.id}` : undefined}>
                      <img src={image} alt={title} className="w-full h-44 object-cover" loading="lazy" />
                    </a>
                  </div>

                  <div className="flex-1">
                    <a href={product ? `/product/${product.id}` : undefined} className="font-medium hover:underline block">{title}</a>
                    <div className="text-sm text-muted-foreground mb-4">${price}{options?.includes('One Size') ? ' · One size' : ''}</div>

                    <div className="size-buttons flex flex-wrap gap-2">
                      {options.map((s: string) => (
                        <SizeButton key={s} label={s} href={piece.stripeLinks?.[s] ?? null} />
                      ))}
                    </div>

                    <div className="mt-4 text-xs text-muted-foreground">Easy returns within 30 days.</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust */}
      <TrustSignals />
    </div>
  );
}
