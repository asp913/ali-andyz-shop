"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import TrustSignals from "@/components/site/TrustSignals";
import { getProductById } from "@/lib/sample-products";

// Capsule data (ideally supplied by Builder or API). Stripe checkout URLs are optional — if present the UI will link directly to Stripe.
const CAPSULES: Record<string, any> = {
  riviera: {
    handle: "riviera",
    title: "Riviera Edit",
    tagline: "Capsule or Mix & Match",
    bundlePrice: 179,
    bundleValue: 308,
    bundleSavings: 129,
    priceRange: "$20–$129",
    capsuleDescription:
      "Choose your vibe: get the full capsule for effortless head-to-toe styling, or shop pieces individually to mix into your wardrobe. Every piece carries coastal polish with relaxed streetwear ease.",
    sellingPoints: [
      "Save $129 vs. buying separately",
      "Curated to coordinate—zero guesswork",
      "Everyday comfort with capsule-level polish",
    ],
    heroImage:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7dc6421f0d6144a29d16812342ff4701?format=webp&width=800",
    flatLayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F1c73d368cd9b43d8b071eb556329b0bf?format=webp&width=800",
    // Stripe bundle checkout URL (set in CMS or environment). If omitted, primary CTA will be disabled.
    bundleStripeUrl: null,
    pieces: [
      {
        id: "riv-01",
        productId: "riv-01",
        name: "Lightweight Long Coat",
        price: 69,
        sizeOptions: ["XS", "S", "M", "L", "XL"],
        isIncludedInCapsule: true,
        // stripeLinks mapping size -> checkout url (optional)
        stripeLinks: {
          XS: null,
          S: null,
          M: null,
          L: null,
          XL: null,
        },
      },
      {
        id: "riv-02",
        productId: "riv-02",
        name: "Cropped Top",
        price: 22,
        sizeOptions: ["XS", "S", "M", "L"],
        isIncludedInCapsule: true,
        stripeLinks: { XS: null, S: null, M: null, L: null },
      },
      {
        id: "riv-03",
        productId: "riv-03",
        name: "Cargo Pants",
        price: 39,
        sizeOptions: ["S", "M", "L"],
        isIncludedInCapsule: true,
        stripeLinks: { S: null, M: null, L: null },
      },
      {
        id: "riv-04",
        productId: "riv-04",
        name: "Cap",
        price: 20,
        sizeOptions: ["One Size"],
        isIncludedInCapsule: true,
        stripeLinks: { "One Size": null },
      },
      {
        id: "riv-05",
        productId: "riv-05",
        name: "Silver Accent Sneakers",
        price: 129,
        sizeOptions: ["6", "7", "8", "9"],
        isIncludedInCapsule: true,
        stripeLinks: { "6": null, "7": null, "8": null, "9": null },
      },
      {
        id: "riv-06",
        productId: "riv-06",
        name: "Utility Bag",
        price: 29,
        sizeOptions: ["One Size"],
        isIncludedInCapsule: true,
        stripeLinks: { "One Size": null },
      },
    ],
  },
};

function SizeButton({ label, href }: { label: string; href: string | null }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-border px-3 py-2 rounded-sm text-sm hover:bg-muted transition"
      >
        {label}
      </a>
    );
  }

  return (
    <button className="inline-block border border-border px-3 py-2 rounded-sm text-sm text-muted-foreground cursor-not-allowed" disabled>
      {label}
    </button>
  );
}

export default function CapsulePage() {
  const params = useParams();
  const handle = params.handle as string;
  const capsule = (handle && CAPSULES[handle]) || CAPSULES["riviera"];

  useEffect(() => {
    console.info("CapsulePage render", { handle, capsuleLength: capsule?.pieces?.length });
  }, [handle, capsule]);

  if (!capsule) {
    return (
      <main className="container mx-auto py-16">
        <h1 className="text-2xl font-semibold">Capsule not found</h1>
        <p className="mt-4">We couldn't find that capsule. Check the URL or create one in Builder CMS.</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="px-6 py-12 bg-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-light mb-2">{capsule.title} — {capsule.tagline}</h1>
            <div className="text-lg text-muted-foreground mb-4">Secure checkout via Stripe</div>

            <div className="text-xl font-light mb-4">
              Bundle ${capsule.bundlePrice} · Value ${capsule.bundleValue} · Save ${capsule.bundleSavings}
            </div>

            <p className="max-w-2xl text-muted-foreground mb-6">{capsule.capsuleDescription}</p>

            <div className="flex items-center gap-4">
              {capsule.bundleStripeUrl ? (
                <a
                  href={capsule.bundleStripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-foreground text-background px-5 py-3 rounded-sm font-medium"
                >
                  Add Full Capsule — ${capsule.bundlePrice}
                </a>
              ) : (
                <button className="inline-block bg-muted text-muted-foreground px-5 py-3 rounded-sm font-medium cursor-not-allowed" disabled>
                  Add Full Capsule — ${capsule.bundlePrice}
                </button>
              )}

              <a href="#shop-individually" className="underline text-sm">Shop Individually</a>
            </div>
            <div className="mt-2 text-xs text-foreground">Only 3 left</div>
            <div className="mt-1 text-xs text-muted-foreground">Curated in small runs. Please allow ~21 days for delivery.</div>
          </div>

          <div className="rounded-sm overflow-hidden bg-card">
            <img src={capsule.heroImage} alt={capsule.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Flat lay + includes */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-sm overflow-hidden bg-card">
            <img src={capsule.flatLayImage} alt={`${capsule.title} flat lay`} className="w-full h-full object-cover" loading="lazy" />
          </div>

          <div>
            <h3 className="text-2xl font-light mb-4">Includes</h3>
            <ul className="space-y-3 text-lg">
              {capsule.pieces.map((p: any) => {
                const product = p.productId ? getProductById(p.productId) : undefined;
                const title = product?.name ?? p.name;
                const price = product?.price ?? p.price;
                return (
                  <li key={p.id} className="flex justify-between items-center">
                    <span>{title}</span>
                    <span className="text-muted-foreground">${price}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 text-sm text-muted-foreground">
              <p>Choose your size to checkout instantly. Each size button links to a secure Stripe checkout session.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop individually */}
      <section id="shop-individually" className="px-6 py-12 bg-card">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-light mb-6">Shop Individually</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capsule.pieces.map((piece: any) => {
              const product = piece.productId ? getProductById(piece.productId) : undefined;
              const image = product?.image ?? capsule.heroImage;
              const title = product?.name ?? piece.name;
              const price = product?.price ?? piece.price;
              const options = product?.options ?? piece.sizeOptions ?? [];

              return (
                <div key={piece.id} className="border p-4 rounded-sm flex flex-col h-full">
                  <div className="rounded-sm overflow-hidden bg-background mb-3">
                    <a href={product ? `/product/${product.id}` : undefined}>
                      <img src={image} alt={title} className="w-full h-44 object-cover" loading="lazy" />
                    </a>
                  </div>

                  <div className="flex-1">
                    <a href={product ? `/product/${product.id}` : undefined} className="font-medium hover:underline block">{title}</a>
                    <div className="text-sm text-muted-foreground mb-4">${price}{options?.includes('One Size') ? ' · One size' : ''}</div>

                    <div className="size-buttons flex flex-wrap gap-2">
                      {options.map((s: string) => (
                        <SizeButton key={s} label={s} href={piece.stripeLinks?.[s] ?? null} />
                      ))}
                    </div>

                    <div className="mt-4 text-xs text-muted-foreground">Easy returns within 30 days.</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust */}
      <TrustSignals />
    </div>
  );
}
