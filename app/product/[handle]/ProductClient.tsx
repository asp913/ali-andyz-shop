"use client";

import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import BundleSizePicker from "@/components/builder/BundleSizePicker";
import { addToCart } from "@/lib/cart";
import { toast } from "sonner";
import Link from "next/link";

interface ProductClientProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    images?: string[];
    badge?: string;
    options?: string[];
    description?: string;
    handle?: string;
    stripePriceId?: string;
    category?: string;
    productType?: string;
  };
  capsuleDetails?: {
    productId: string;
    name: string;
    description: string;
    images: string[];
    category: string;
    badge?: string;
    options?: { name: string; values: string[] }[];
    productType: 'capsule';
    price: number;
    priceStripeId: string;
    items: Array<{
      handle: string;
      title: string;
      price: number;
      priceStripeId: string;
      sizes: string[];
      inventoryLeft?: number | null;
      requiredForBundle: boolean;
    }>;
    // New Stripe metadata fields
    capsuleTitle?: string;
    capsuleSubtitle?: string;
    bundlePrice?: number;
    bundleValue?: number;
    priceRangeCopy?: string;
    sizeGuideHref?: string;
  } | null;
}

export default function ProductClient({ product, capsuleDetails }: ProductClientProps) {
  // Use product.id directly like the client
  const productId = product.id;
  const [size, setSize] = useState(product?.options?.[0] || "One size");
  
  const [itemSizes, setItemSizes] = useState<Record<string, string>>({});
  const [loadingItems, setLoadingItems] = useState<Record<string, boolean>>({});
  const [capsule, setCapsule] = useState(capsuleDetails);
  const [capsuleLoaded, setCapsuleLoaded] = useState(true);

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description || `Shop ${product.name} at Ali + Andy Z. Premium fashion and activewear.`,
      "image": product.images || [product.image],
      "brand": {
        "@type": "Brand",
        "name": "Ali + Andy Z"
      },
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Ali + Andy Z"
        }
      },
      "category": product.category || "Fashion",
      "sku": product.id,
      "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/product/${product.handle || product.id}`,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
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
  }, [product]);
  
  // Dynamic: Show flat right image if product has multiple images
  const showFlatRight = product.images && product.images.length > 1 && capsule?.items && capsule.items.length > 0;
  
  // Dynamic: Use second image if available, fallback to first image
  const flatRightSrc = product.images?.[1] || product.images?.[0] || product.image;
  
  // Dynamic: Use first image for left side
  const leftImageSrc = product.images?.[0] || product.image;

  const bundleItemsAttr = useMemo(() => (
    capsule ? JSON.stringify(capsule.items.map(i => ({ handle: i.handle, title: i.title, priceId: i.priceStripeId, sizes: i.sizes, required: i.requiredForBundle }))) : '[]'
  ), [capsule]);
  
  // Dynamic upgrade items for specific products
  const motoUpgradeItemsAttr = useMemo(() => {
    if (!capsule || product.handle !== 'wa-004') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: i.handle === 'graphic-silk-feel-square' ? true : i.requiredForBundle,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.handle]);
  
  const airportUpgradeItemsAttr = useMemo(() => {
    if (!capsule || product.handle !== 'wa-008') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: i.handle === 'slim-strap' ? true : i.requiredForBundle,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.handle]);

  function SizeButton({ opt }: { opt: string }) {
    const href = (product as any).stripeLinks?.[opt] ?? null;
    if (href) {
      return (
        <a
          key={opt}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 border rounded-sm text-sm inline-block hover:bg-card"
          onClick={() => setSize(opt)}
        >
          {opt}
        </a>
      );
    }

    return (
      <button
        key={opt}
        onClick={() => setSize(opt)}
        className={`px-3 py-2 border rounded-sm text-sm ${size === opt ? "bg-card border-foreground" : "border-border hover:bg-card"}`}
      >
        {opt}
      </button>
    );
  }

  if (!product) {
    return (
      <main className="container mx-auto px-8 py-16">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p className="mt-2 text-muted-foreground">
          The item you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link href="/" className="underline hover:no-underline">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="py-10 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-card">
              <img
                src={leftImageSrc}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            {showFlatRight ? (
              <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-card">
                <img
                  src={flatRightSrc || ''}
                  alt={`${product.name} flat lay`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <>
                <h1 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide">
                  {product.name}
                </h1>
                <div className="mt-2 text-xl">${product.price}</div>
                {product.badge && (
                  <div className="mt-3 inline-block border border-border px-2 py-1 text-xs rounded-sm">
                    {product.badge}
                  </div>
                )}

                <div className="mt-6 space-y-3 text-muted-foreground">
                  <p>{product.description}</p>
                </div>

                <div className="mt-6">
                  <div className="text-sm text-muted-foreground">
                    {product.options?.length
                      ? "Choose your size to checkout instantly."
                      : ""}
                  </div>
                  {product.options?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.options.map((opt) => (
                        <SizeButton key={opt} opt={opt} />
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 flex gap-3">
                  {((product as any).stripeLinks?.[size] as string) ? (
                    <a
                      href={(product as any).stripeLinks[size]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-foreground text-background px-5 py-3 rounded-sm font-medium"
                    >
                      Buy {size} — ${product.price}
                    </a>
                  ) : (
                    <Button
                      className="rounded-sm"
                      onClick={() => {
                        if (!product.stripePriceId) {
                          alert(`Sorry, ${product.name} is not available for purchase at the moment.`);
                          return;
                        }
                        
                        try {
                          addToCart({
                            id: `${product.handle || product.id}:${size}`,
                            variantId: `${product.handle || product.id}:${size}`,
                            name: product.name,
                            price: product.price,
                            qty: 1,
                            size: size,
                            image: product.images?.[0] || product.image,
                            stripePriceId: product.stripePriceId,
                          });
                          toast.success(`${product.name} (${size}) added to cart!`);
                        } catch (error) {
                          console.error('Error adding item to cart:', error);
                          toast.error(`Failed to add ${product.name} to cart`);
                        }
                      }}
                    >
                      Add to Cart
                    </Button>
                  )}

                  <Button variant="outline" className="rounded-sm" asChild>
                    <a href="/womens-activewear">Continue Shopping</a>
                  </Button>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">Curated in small runs. Please allow ~21 days for delivery.</div>
              </>
            )}
          </div>
        </div>
      </section>

      {capsule && capsule.items && capsule.items.length > 0 && (
        <section className="px-8 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-light text-foreground">
                  {capsule.capsuleTitle || capsule.name}
                </h2>
                {capsule.capsuleSubtitle && (
                  <p className="text-muted-foreground text-lg">{capsule.capsuleSubtitle}</p>
                )}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-sm border border-border p-4">
                    <div className="text-sm text-muted-foreground">Bundle Price</div>
                    <div className="text-xl font-light text-foreground">
                      ${capsule.bundlePrice || capsule.price}
                    </div>
                  </div>
                  <div className="rounded-sm border border-border p-4">
                    <div className="text-sm text-muted-foreground">Bundle Value</div>
                    <div className="text-xl font-light text-foreground">
                      ${capsule.bundleValue || capsule.items.reduce((sum, item) => sum + item.price, 0)}
                    </div>
                  </div>
                </div>
                <div className="mt-2 space-y-2">
                  <BundleSizePicker
                    items={capsule.items.map(item => ({
                      title: item.title,
                      handle: item.handle,
                      sizes: item.sizes,
                      price: item.price,
                      requiredForBundle: item.requiredForBundle,
                      inventoryLeft: item.inventoryLeft ?? undefined,
                      defaultSize: item.sizes[0]
                    }))}
                    bundlePrice={capsule.bundlePrice || capsule.price}
                    title={`Choose sizes for ${capsule.name}`}
                    subtitle="Select a size for each item in your bundle"
                  >
                    <Button className="rounded-sm w-full sm:w-auto">
                      Buy Bundle — ${capsule.bundlePrice || capsule.price}
                    </Button>
                  </BundleSizePicker>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">Curated in small runs. Please allow ~21 days for delivery.</div>
                {capsule.priceRangeCopy ? (
                  <div className="text-sm text-muted-foreground mt-2">{capsule.priceRangeCopy}</div>
                ) : (
                  <div className="text-sm text-muted-foreground mt-2">Price range: ${Math.min(...capsule.items.map(i => i.price))}–${Math.max(...capsule.items.map(i => i.price))}</div>
                )}
                <div>
                  <a href={capsule.sizeGuideHref || (product.category?.includes('mens') ? '/size-guide#men' : '/size-guide#women')} className="underline hover:no-underline text-sm">Size Guide</a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 text-foreground">Items</h3>
                {!capsuleLoaded ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground mx-auto"></div>
                    <p className="mt-2 text-muted-foreground">Loading items...</p>
                  </div>
                ) : !capsule ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No capsule items available at the moment.</p>
                  </div>
                ) : (
                  <ol className="space-y-3 list-decimal pl-5">
                    {capsule.items.map((it, idx) => {
                    const selected = itemSizes[it.handle] ?? (it.sizes?.[0] || 'OneSize');
                    const isDirectLink = typeof it.priceStripeId === 'string' && it.priceStripeId.startsWith('http');
                    return (
                      <li key={it.handle + idx} className="border border-border rounded-sm p-4">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-foreground">{it.title}</div>
                          <div className="text-foreground">${it.price}</div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">sizes: [{it.sizes.join(', ')}]</div>
                        {typeof it.inventoryLeft === 'number' ? (
                          <div className="text-sm text-muted-foreground">inventoryLeft: {it.inventoryLeft}</div>
                        ) : null}
                        <div className="text-xs text-muted-foreground mt-1">requiredForBundle: {it.requiredForBundle ? 'true' : 'false'}</div>
                        <div className="text-xs text-muted-foreground">handle: {it.handle}</div>
                        <div className="mt-3 flex items-center gap-2">
                          {it.sizes.length > 1 ? (
                            <select
                              value={selected}
                              onChange={(e) => setItemSizes((m) => ({ ...m, [it.handle]: e.target.value }))}
                              className="px-2 py-1 border border-border rounded-sm text-sm bg-background"
                              aria-label={`Select size for ${it.title}`}
                              data-size-for={it.handle}
                            >
                              {it.sizes.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          ) : null}

                          <Button
                            className="rounded-sm"
                            disabled={loadingItems[it.handle] || !it.priceStripeId}
                            onClick={() => {
                              if (!it.priceStripeId) {
                                alert(`Sorry, ${it.title} is not available for individual purchase at the moment.`);
                                return;
                              }
                              
                              setLoadingItems(prev => ({ ...prev, [it.handle]: true }));
                              
                              try {
                                addToCart({
                                  id: `${it.handle}:${selected}`,
                                  variantId: `${it.handle}:${selected}`,
                                  name: it.title,
                                  price: it.price,
                                  qty: 1,
                                  size: selected,
                                  image: product.images?.[0] || product.image,
                                  stripePriceId: it.priceStripeId,
                                });
                                toast.success(`${it.title} added to cart!`);
                              } catch (error) {
                                console.error('Error adding item to cart:', error);
                                toast.error(`Failed to add ${it.title} to cart`);
                              } finally {
                                setLoadingItems(prev => ({ ...prev, [it.handle]: false }));
                              }
                            }}
                          >
                            {loadingItems[it.handle] ? 'Adding...' : (!it.priceStripeId ? 'Unavailable' : 'Buy')}
                          </Button>
                        </div>
                      </li>
                    );
                    })}
                  </ol>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <TrustSignals />
      <CTASection />
      <ContactSection />
    </main>
  );
}
