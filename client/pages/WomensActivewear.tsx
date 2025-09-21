import React, { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/site/ProductCard";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";

import { sampleProducts } from "@/lib/sample-products";

export default function WomensActivewear() {
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-card">
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7c72cba2bec84afeb23488db6ae39c36?format=webp&width=1600"
            alt="Two people practicing yoga at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            Performance Meets
            <br />
            Feminine Power.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light opacity-95">
            Activewear that honors your strength and celebrates your grace.
            Designed for women who move through life with confidence and
            intention.
          </p>
        </div>
      </section>

      {/* Founder Journey */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              The Founder's Journey
            </h2>
            <h3 className="text-base text-muted-foreground mb-4">
              From Sacred Practice to Performance Design
            </h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Aly's activewear vision was born from decades of creating
              trauma-informed yoga programs across top universities and her
              profound spiritual journey, including a life-changing ascension
              with the Dalai Lama. Her belief? True performance emerges from
              harmony between body, mind, and spirit. Each design reflects this,
              where every seam, fabric, and silhouette supports the sacred act
              of mindful movement.
            </p>
            <blockquote className="mt-6 italic text-sm text-muted-foreground">
              "When you move with intention, your clothing should support that
              intention." — Aly
            </blockquote>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-max">
              <a href="#collection" className="py-2.5 px-5 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary">Shop Performance</a>
              <Link to="/womens-activewear/lookbook" className="py-2.5 px-5 text-sm tracking-[0.1em] uppercase rounded-sm border border-border text-foreground hover:bg-card transition-all duration-300">View Lookbook</Link>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="w-full h-64 md:h-80 lg:h-96 rounded-sm overflow-hidden bg-card">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7c72cba2bec84afeb23488db6ae39c36?format=webp&width=1200"
                alt="Founder practicing mindful movement"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mindful Movement Intro */}
      <section className="py-12 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-medium mb-3">Mindful Movement</h3>
          <p className="text-muted-foreground">
            Experience the perfect harmony of luxury and performance in every
            piece, designed for your wellness journey.
          </p>
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
                {sampleProducts.length} products
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

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    Size
                  </h3>
                  <div className="space-y-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
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
                    {["Tops", "Bottoms", "Outerwear", "Sports Bras"].map(
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
                    {["Under $50", "$50-$100", "$100-$150", "Over $150"].map(
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
                    {["Black", "White", "Navy", "Olive", "Grey"].map(
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
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Newsletter CTA */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
