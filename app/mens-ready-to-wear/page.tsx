"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Filter } from "lucide-react";
import ProductCard from "@/components/site/ProductCard";
import DesignYourOwnCapsule from "@/components/site/DesignYourOwnCapsule";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { mensReadyToWearProducts } from "@/lib/mens-ready-to-wear-products";

export default function MensReadyToWear() {
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center bg-background">
        <div className="flex flex-col-reverse lg:flex-row max-w-7xl w-full items-center">
          <div className="flex flex-col justify-center px-8 py-16 lg:px-12 lg:py-0 flex-1 text-center lg:text-left">
            <p className="text-sm mb-2 text-muted-foreground tracking-[0.3em] uppercase">
              Back to Home
            </p>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-4 tracking-wide text-foreground">
              MEN'S COLLECTION
            </h1>
            <h2 className="text-2xl font-medium text-foreground/90 mb-4">
              Refined Masculinity. Effortless Style.
            </h2>
            <p className="text-base font-light text-muted-foreground max-w-lg mb-4">
              Thoughtfully crafted menswear that embodies confidence and
              sophistication, designed for the modern gentleman who appreciates
              quality and attention to detail.
            </p>

            <h3 className="mt-6 text-lg font-semibold">THE VISION</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Strength in Simplicity. Power in Purpose.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Andy's approach to menswear is rooted in the belief that true
              style emerges from authenticity. Each piece is designed to enhance
              the man who wears it, not overshadow him.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              From boardroom presentations to weekend escapes, these carefully
              curated pieces form the foundation of a wardrobe that works as
              hard as you do.
            </p>
            <blockquote className="mt-4 italic text-sm text-foreground/80">
              "Great style isn't about following trends—it's about knowing
              yourself." — Andy
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 w-max mx-auto lg:mx-0 mt-8">
              <a href="#collection" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary">
                Shop the Collection
              </a>
              <Link href="/mens-ready-to-wear/lookbook" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm border border-border text-foreground hover:bg-card transition-all duration-300">
                View Lookbook
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[50vh] sm:h-[55vh] lg:h-[85vh] relative overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fb8a6edc5a9ee4e18beffdaeffb193bcf?format=webp&width=1600"
              alt="Men's collection — refined"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/6 to-transparent" />
          </div>
        </div>
      </section>

      {/* Filters & Sort Bar */}
      <section className="border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm text-sm hover:bg-secondary transition-colors"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>
              <span className="text-sm text-muted-foreground">
                {mensReadyToWearProducts.length} products
              </span>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-muted-foreground">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-border rounded-sm text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    Size
                  </h3>
                  <div className="space-y-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <label key={size} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-border"
                        />
                        <span className="text-sm text-muted-foreground">
                          {size}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Shirts",
                      "Sweaters",
                      "Trousers",
                      "Blazers",
                      "Outerwear",
                    ].map((type) => (
                      <label key={type} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-border"
                        />
                        <span className="text-sm text-muted-foreground">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    Price
                  </h3>
                  <div className="space-y-2">
                    {["Under $200", "$200-$300", "$300-$400", "Over $400"].map(
                      (price) => (
                        <label key={price} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="rounded border-border"
                          />
                          <span className="text-sm text-muted-foreground">
                            {price}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    Color
                  </h3>
                  <div className="space-y-2">
                    {["Black", "White", "Navy", "Grey", "Charcoal"].map(
                      (color) => (
                        <label key={color} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="rounded border-border"
                          />
                          <span className="text-sm text-muted-foreground">
                            {color}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section id="collection" className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mensReadyToWearProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Your Own Capsule */}
      <DesignYourOwnCapsule category="mens-ready-to-wear" />

      {/* Trust Signals */}
      <TrustSignals />

      {/* Newsletter CTA */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
