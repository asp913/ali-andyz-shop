"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Filter } from "lucide-react";
import ProductCard from "@/components/site/ProductCard";
import DesignYourOwnCapsule from "@/components/site/DesignYourOwnCapsule";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { mensActivewearProducts } from "@/lib/mens-activewear-products";

export default function MensActivewear() {
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] overflow-hidden flex items-center justify-center bg-background">
        <div className="flex flex-col-reverse lg:flex-row max-w-7xl w-full items-center">
          <div className="flex flex-col justify-center px-8 py-12 lg:px-12 lg:py-0 flex-1 text-center lg:text-left">
            <p className="text-sm mb-4 text-muted-foreground tracking-[0.3em] uppercase">
              Back to Home
            </p>
            <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-4 tracking-wide text-foreground">
              MEN'S ACTIVEWEAR
            </h1>
            <h2 className="text-2xl font-medium text-foreground/90 mb-4">
              Train with Intention. Move with Power.
            </h2>
            <p className="text-base font-light tracking-wide mt-2 mb-4 text-muted-foreground max-w-lg">
              High-performance activewear engineered for the modern athlete who
              demands both functionality and sophisticated design in every
              workout.
            </p>

            <h3 className="mt-6 text-lg font-semibold">
              PERFORMANCE PHILOSOPHY
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Built for Champions. Designed for Life.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Our men's activewear collection is inspired by the mindset of
              elite athletes—the understanding that peak performance requires
              the right tools, the right mindset, and the right support system.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Every fabric choice, every cut, every detail is purposefully
              engineered to enhance your performance while maintaining the
              sophisticated aesthetic that defines the Aly + Andy brand.
            </p>
            <blockquote className="mt-4 italic text-sm text-foreground/80">
              "Excellence isn't a destination—it's a daily practice." — Andy
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 w-max mx-auto lg:mx-0 mt-8">
              <a href="#collection" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary">
                Shop Performance
              </a>
              <Link href="/mens-activewear/lookbook" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm border border-border text-foreground hover:bg-card transition-all duration-300">
                View Lookbook
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[50vh] sm:h-[55vh] lg:h-[75vh] relative overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F8e82cfd54a0a4a5c9a6834c9b9c0a287?format=webp&width=1600"
              alt="Men's activewear duo practicing yoga"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/8 to-transparent" />
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
                {mensActivewearProducts.length} products
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
                    Type
                  </h3>
                  <div className="space-y-2">
                    {["Tops", "Bottoms", "Outerwear", "Compression"].map(
                      (type) => (
                        <label key={type} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="rounded border-border"
                          />
                          <span className="text-sm text-muted-foreground">
                            {type}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    Price
                  </h3>
                  <div className="space-y-2">
                    {["Under $100", "$100-$150", "$150-$200", "Over $200"].map(
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
                    {["Black", "White", "Navy", "Grey", "Olive"].map(
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
            {mensActivewearProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Your Own Capsule */}
      <DesignYourOwnCapsule category="mens-activewear" />

      {/* Trust Signals */}
      <TrustSignals />

      {/* Newsletter CTA */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
