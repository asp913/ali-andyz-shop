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

  const sortedProducts = useMemo(() => {
    let sorted = [...products];
    
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for "featured"
        break;
    }
    
    return sorted;
  }, [products, sortBy]);

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
              {products.length} products
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
