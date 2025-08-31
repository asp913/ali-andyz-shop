import React, { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";
import ProductCard from "@/components/site/ProductCard";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";

// Sample product data - replace with real data from your source
const sampleProducts = [
  {
    id: "wa-001",
    name: "Essential Ribbed Tank",
    price: 68,
    image: "https://images.pexels.com/photos/7679450/pexels-photo-7679450.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Best Seller",
    options: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "wa-002", 
    name: "Mindful Movement Leggings",
    price: 98,
    image: "https://images.pexels.com/photos/4327024/pexels-photo-4327024.jpeg?auto=compress&cs=tinysrgb&w=800",
    options: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "wa-003",
    name: "Studio Flow Sports Bra",
    price: 58,
    image: "https://images.pexels.com/photos/4498614/pexels-photo-4498614.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "New",
    options: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "wa-004",
    name: "Zen Zip-Up Hoodie",
    price: 128,
    image: "https://images.pexels.com/photos/7822865/pexels-photo-7822865.jpeg?auto=compress&cs=tinysrgb&w=800",
    options: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "wa-005",
    name: "Balance Cropped Jacket",
    price: 158,
    image: "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=800",
    options: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "wa-006",
    name: "Serene Seamless Shorts",
    price: 78,
    image: "https://images.pexels.com/photos/6311407/pexels-photo-6311407.jpeg?auto=compress&cs=tinysrgb&w=800",
    options: ["XS", "S", "M", "L", "XL"]
  }
];

export default function WomensActivewear() {
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-card py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-foreground tracking-wide mb-4">
            Women's Activewear
          </h1>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
            Elevated essentials designed for studio, street, and travel. Where performance meets purpose in every stitch.
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
                  <h3 className="text-sm font-medium text-foreground mb-2">Type</h3>
                  <div className="space-y-2">
                    {["Tops", "Bottoms", "Outerwear", "Sports Bras"].map((type) => (
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
                    {["Under $50", "$50-$100", "$100-$150", "Over $150"].map((price) => (
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
                    {["Black", "White", "Navy", "Olive", "Grey"].map((color) => (
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
