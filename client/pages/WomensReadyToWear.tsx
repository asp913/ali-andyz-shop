import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";
import ProductCard from "@/components/site/ProductCard";
import DesignYourOwnCapsule from "@/components/site/DesignYourOwnCapsule";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { readyToWearProducts } from "@/lib/ready-to-wear-products";

export default function WomensReadyToWear() {
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-card py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <p className="text-sm tracking-wider uppercase text-foreground/70 mb-2">
              Back to Home
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              WOMEN'S COLLECTION
            </h2>
            <h3 className="text-2xl font-light text-foreground/90 mb-4">
              Timeless Elegance. Modern Sophistication.
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              Curated ready-to-wear pieces that effortlessly transition from
              boardroom to bistro, designed for the contemporary woman who
              values both style and substance.
            </p>

            <h4 className="mt-6 text-lg font-medium">THE PHILOSOPHY</h4>
            <h5 className="text-base font-semibold text-foreground/90">
              Elegance Redefined. Confidence Cultivated.
            </h5>
            <p className="text-sm text-muted-foreground mt-2">
              Our women's ready-to-wear collection celebrates the multifaceted
              nature of modern femininity. Each piece is designed to empower and
              inspire, bridging the gap between timeless elegance and
              contemporary edge.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              From boardroom meetings to evening soirées, these carefully
              curated designs adapt to your lifestyle while maintaining an
              unwavering commitment to sophistication and quality.
            </p>
            <blockquote className="mt-4 italic text-sm text-foreground/80">
              "True style is about expressing your authentic self with
              confidence." — Aly
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 w-max mx-auto md:mx-0 mt-8">
              <a href="#collection" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary">
                Shop the Collection
              </a>
              <Link to="/womens-ready-to-wear/lookbook" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm border border-border text-foreground hover:bg-card transition-all duration-300">
                View Lookbook
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="rounded-sm overflow-hidden bg-card">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fc9101c7c477c4f21ade2a9a927bd0b95?format=webp&width=1600"
                alt="Women's Ready to Wear — collection"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drop One – Promo */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Drop One – Endless August
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resort-ready silhouettes at boutique prices. Curated pieces from
            Madison Ave, St. Tropez and New Delhi.
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
                {readyToWearProducts.length} products
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
                    Category
                  </h3>
                  <div className="space-y-2">
                    {["Dresses", "Blazers", "Tops", "Bottoms", "Outerwear"].map(
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
                    {["Under $150", "$150-$250", "$250-$350", "Over $350"].map(
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
                    {["Black", "White", "Cream", "Navy", "Camel"].map(
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
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">In-Stock</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-muted-foreground">Show only in-stock</span>
                    </label>
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
            {readyToWearProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-4 text-xs text-muted-foreground">Curated in small runs. Please allow ~21 days for delivery.</div>
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
