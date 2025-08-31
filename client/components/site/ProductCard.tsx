import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  options?: string[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [size, setSize] = useState(product.options?.[0] || "One size");

  return (
    <article className="border border-border rounded-sm overflow-hidden bg-background">
      <div className="relative w-full aspect-[4/5] bg-card">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        {product.badge && (
          <div className="absolute top-2 left-2 bg-background/85 backdrop-blur px-2 py-1 text-xs border border-border rounded-sm">
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-foreground">{product.name}</h3>
          <div className="text-foreground">${product.price}</div>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          {product.options?.length > 1 ? "Select size" : product.options?.[0]}
        </div>

        {product.options?.length > 1 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {product.options.map((opt) => (
              <button
                key={opt}
                onClick={() => setSize(opt)}
                className={`px-2 py-1 border rounded-sm text-xs ${
                  size === opt ? "bg-card border-foreground" : "border-border hover:bg-card"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        <div className="mt-3 flex gap-2">
          <Button
            className="rounded-sm"
            onClick={() => {
              document.dispatchEvent(
                new CustomEvent("capsule:addToCart", {
                  detail: {
                    variantId: `${product.id}:${size}`,
                    qty: 1,
                    name: product.name,
                    price: product.price,
                    size,
                  },
                })
              );
              alert(`${product.name} (${size}) added to cart`);
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="rounded-sm"
            onClick={() => (window.location.href = `/product/${product.id}`)}
          >
            View
          </Button>
        </div>
      </div>
    </article>
  );
}
