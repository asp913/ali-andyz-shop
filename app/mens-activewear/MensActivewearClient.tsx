"use client";

import React, { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
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

interface MensActivewearClientProps {
  products: Product[];
  hasError?: boolean;
}

export default function MensActivewearClient({ products, hasError = false }: MensActivewearClientProps) {
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  
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

  const sortedProducts = useMemo(() => {
    let filtered = [...products];
    
    // Apply filters
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.options?.some(option => selectedSizes.includes(option))
      );
    }
    
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(product => {
        const productName = product.name.toLowerCase();
        return selectedTypes.some(type => 
          productName.includes(type.toLowerCase())
        );
      });
    }
    
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => {
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
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for "featured"
        break;
    }
    
    return filtered;
  }, [products, sortBy, selectedSizes, selectedTypes, selectedColors, selectedPriceRange]);

  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <span className="text-sm text-muted-foreground">
              {sortedProducts.length} of {products.length} products
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-border rounded-sm bg-background text-foreground"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mb-8 p-6 border border-border rounded-sm bg-card">
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
                  {["Tops", "Bottoms", "Outerwear", "Shorts"].map(
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
                  Color
                </h3>
                <div className="space-y-2">
                  {["Black", "White", "Navy", "Gray", "Green"].map(
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
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {hasError ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Error loading products. Please try again later.</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found.</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
