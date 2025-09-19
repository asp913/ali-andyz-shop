import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  badge?: string;
  options?: string[];
  inventoryLeft?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [size, setSize] = useState(product.options?.[0] || "One size");
  const [activeIndex, setActiveIndex] = useState(0);

  // images: prefer product.images order (authoritative), fall back to product.image then images
  const images = useMemo(() => {
    // Start with either product.images (authoritative) or fall back to product.image
    const base = product.images && product.images.length ? [...product.images] : [product.image, ...(product.images || [])];

    // If product.image exists in the list, ensure it's the first item (hero)
    const arr = base.filter(Boolean);
    const idx = arr.indexOf(product.image);
    if (idx > 0) {
      arr.splice(idx, 1);
      arr.unshift(product.image);
    }

    return Array.from(new Set(arr));
  }, [product.image, product.images]);

  const thumbnailImages = useMemo(() => {
    // For Riviera capsule, limit thumbnails to the first 2 images to avoid an extra thumbnail
    if (product.name?.toLowerCase().includes('riviera')) {
      return images.slice(0, 2);
    }
    return images;
  }, [images, product.name]);
  const _hideOverlayText = product.image?.includes('169bf3e05efc4cc29198c47014e8a570');

  const buildSrcSet = (u: string) => {
    try {
      const widths = [800, 1200, 1600, 2400, 3200];
      return widths
        .map((w) => {
          const url = new URL(u);
          url.searchParams.set('format', 'webp');
          url.searchParams.set('quality', '90');
          url.searchParams.set('width', String(w));
          return `${url.toString()} ${w}w`;
        })
        .join(', ');
    } catch {
      return undefined;
    }
  };

  return (
    <article className="border border-border rounded-sm overflow-hidden bg-background">
      <div
        className="relative w-full aspect-[4/5] bg-card"
        onMouseEnter={() => images.length > 1 && setActiveIndex(1)}
        onMouseLeave={() => setActiveIndex(0)}
        onTouchStart={() => images.length > 1 && setActiveIndex((i) => (i === 0 ? 1 : 0))}
      >
        {/* stacked images for crossfade */}
        {images.map((src, idx) => (
          <img
            key={src + idx}
            src={src}
            srcSet={buildSrcSet(src)}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            alt={product.name + (idx === 0 ? ' — model' : ` — view ${idx}`)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            decoding="async"
            style={_hideOverlayText ? { objectPosition: 'center 30%' } : undefined}
          />
        ))}

        {product.badge && (
          <div className="absolute top-2 left-2 bg-background/90 px-2 py-1 text-xs border border-border rounded-sm">
            {product.badge}
          </div>
        )}
        {typeof product.inventoryLeft === 'number' && product.inventoryLeft <= 3 && (
          <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 text-xs border border-border rounded-sm">
            Only {product.inventoryLeft} left
          </div>
        )}

        {/* Thumbnails */}
        {thumbnailImages.length > 1 && (
          <div className="absolute left-2 bottom-2 flex gap-2">
            {thumbnailImages.map((src, tIdx) => {
              const idx = images.indexOf(src);
              return (
                <button
                  key={src + '-thumb-' + tIdx}
                  aria-label={`Show image ${idx + 1}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-10 h-10 rounded-sm overflow-hidden border-2 ${activeIndex === idx ? 'border-foreground' : 'border-border'} bg-white/10 p-0`}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={src}
                    srcSet={buildSrcSet(src)}
                    sizes="64px"
                    alt={`thumb-${idx}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-foreground">{product.name}</h3>
          <div className="text-foreground">${product.price}</div>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">{product.options?.length > 1 ? "Select size" : product.options?.[0]}</div>

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
