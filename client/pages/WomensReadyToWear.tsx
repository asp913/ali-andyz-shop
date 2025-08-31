import React, { useState } from "react";
import { Filter } from "lucide-react";
import ProductCard from "@/components/site/ProductCard";
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
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-foreground tracking-wide mb-4">
            Women's Ready to Wear
          </h1>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
            Timeless pieces crafted for the modern woman. Effortless elegance that transcends seasons and occasions.
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
              <label htmlFor="sort" className="text-sm text-muted-foreground">Sort by:</label>
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
                  <h3 className="text-sm font-medium text-foreground mb-2">Size</h3>
                  <div className="space-y-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <label key={size} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm text-muted-foreground">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">Category</h3>
                  <div className="space-y-2">
                    {["Dresses", "Blazers", "Tops", "Bottoms", "Outerwear"].map((type) => (
                      <label key={type} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm text-muted-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">Price</h3>
                  <div className="space-y-2">
                    {["Under $150", "$150-$250", "$250-$350", "Over $350"].map((price) => (
                      <label key={price} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm text-muted-foreground">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">Color</h3>
                  <div className="space-y-2">
                    {["Black", "White", "Cream", "Navy", "Camel"].map((color) => (
                      <label key={color} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm text-muted-foreground">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {readyToWearProducts.map((product) => (
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
