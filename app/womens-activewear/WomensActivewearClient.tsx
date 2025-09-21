"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Filter } from "lucide-react";
import ProductCard from "@/components/site/ProductCard";
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  handle?: string;
  category?: string;
  stripePriceId?: string;
  description?: string;
  options?: string[];
  images?: string[];
  badge?: string;
}

interface WomensActivewearClientProps {
  products: Product[];
  hasError: boolean;
}

export default function WomensActivewearClient({ products, hasError }: WomensActivewearClientProps) {
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(products);
  
  // Filter states
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");

  // Filter handler functions
  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const clearAllFilters = () => {
    setSelectedSizes([]);
    setSelectedTypes([]);
    setSelectedColors([]);
    setSelectedPriceRange("all");
  };

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Women's Activewear Collection",
      "description": "Shop premium women's activewear at Ali + Andy Z. High-quality athletic wear designed for comfort and style.",
      "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/womens-activewear`,
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": products.length,
        "itemListElement": products.map((product, index) => ({
          "@type": "Product",
          "position": index + 1,
          "name": product.name,
          "description": product.description,
          "image": product.image,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/product/${product.handle || product.id}`
        }))
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Women's Activewear",
            "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/womens-activewear`
          }
        ]
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [products]);

  // Filter and sort products based on selected options
  useEffect(() => {
    let filtered = [...products];
    
    // Apply filters
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.options?.some(option => selectedSizes.includes(option))
      );
    }
    
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(product => {
        // Simple type detection based on product name
        const productName = product.name.toLowerCase();
        return selectedTypes.some(type => 
          productName.includes(type.toLowerCase())
        );
      });
    }
    
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => {
        // Simple color detection based on product name
        const productName = product.name.toLowerCase();
        return selectedColors.some(color => 
          productName.includes(color.toLowerCase())
        );
      });
    }
    
    // Apply price range filter
    if (selectedPriceRange !== "all") {
      switch (selectedPriceRange) {
        case "under-50":
          filtered = filtered.filter(product => product.price < 50);
          break;
        case "50-100":
          filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);
          break;
        case "100-150":
          filtered = filtered.filter(product => product.price >= 100 && product.price <= 150);
          break;
        case "over-150":
          filtered = filtered.filter(product => product.price > 150);
          break;
      }
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // Assuming newer products have higher IDs or we could add a date field
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        // Keep original order for "featured"
        break;
    }
    
    setSortedProducts(filtered);
  }, [products, sortBy, selectedSizes, selectedTypes, selectedColors, selectedPriceRange]);

  if (hasError) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-8 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Products</h1>
          <p className="text-muted-foreground mb-8">
            We're having trouble loading our products. Please try again later.
          </p>
          <Link 
            href="/" 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
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
                {sortedProducts.length} of {products.length} products
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
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-foreground">Filters</h3>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-muted-foreground hover:text-foreground underline"
                >
                  Clear all
                </button>
              </div>
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
                          checked={selectedSizes.includes(size)}
                          onChange={() => handleSizeChange(size)}
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
                            checked={selectedTypes.includes(type)}
                            onChange={() => handleTypeChange(type)}
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
                    {[
                      { value: "under-50", label: "Under $50" },
                      { value: "50-100", label: "$50-$100" },
                      { value: "100-150", label: "$100-$150" },
                      { value: "over-150", label: "Over $150" },
                    ].map((price) => (
                      <label key={price.value} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="price-range"
                          value={price.value}
                          checked={selectedPriceRange === price.value}
                          onChange={(e) => setSelectedPriceRange(e.target.value)}
                          className="rounded border-border"
                        />
                        <span className="text-sm text-muted-foreground">
                          {price.label}
                        </span>
                      </label>
                    ))}
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
                            checked={selectedColors.includes(color)}
                            onChange={() => handleColorChange(color)}
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
            {products.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="text-muted-foreground">No products found. Please check your Stripe configuration.</div>
              </div>
            ) : (
              sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
