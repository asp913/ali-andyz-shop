import React from "react";
import TrustSignals from "@/components/site/TrustSignals";
import CapsuleClient from "./CapsuleClient";
import { serializeCapsule } from "@/lib/serialization";
import { fetchStripeProductsServer } from "@/lib/stripe";

// Capsule data (ideally supplied by Builder or API). Stripe checkout URLs are optional — if present the UI will link directly to Stripe.
const CAPSULES: Record<string, any> = {
  "riviera-edit-capsule": {
    handle: "riviera-edit-capsule",
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
        name: "Relaxed T-Shirt",
        price: 29,
        sizeOptions: ["XS", "S", "M", "L", "XL"],
        isIncludedInCapsule: true,
        stripeLinks: {
          XS: null,
          S: null,
          M: null,
          L: null,
          XL: null,
        },
      },
      {
        id: "riv-03",
        productId: "riv-03",
        name: "Wide-Leg Pants",
        price: 89,
        sizeOptions: ["XS", "S", "M", "L", "XL"],
        isIncludedInCapsule: true,
        stripeLinks: {
          XS: null,
          S: null,
          M: null,
          L: null,
          XL: null,
        },
      },
    ],
  },
  "sunset-flow-capsule": {
    handle: "sunset-flow-capsule",
    title: "Sunset Flow",
    tagline: "Capsule or Mix & Match",
    bundlePrice: 119,
    bundleValue: 154,
    bundleSavings: 35,
    priceRange: "$24–$42",
    capsuleDescription:
      "Golden hour vibes in wearable form. Pieces that flow from yoga class to sunset dinner, designed for those magical in-between moments. Flowing silhouettes in warm, sunset tones. Versatile layers perfect for day-to-night.",
    sellingPoints: [
      "Save $35 vs. buying separately",
      "Versatile day-to-night pieces",
      "Golden hour aesthetic",
    ],
    heroImage:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd474d293666041978cf836301c70914a?format=webp&width=800",
    flatLayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fb3b275c6e356437f9e376b3c12f4fa7f?format=webp&width=800",
    bundleStripeUrl: null,
    pieces: [
      {
        id: "sunset-01",
        productId: "sunset-01",
        name: "Sunset Flow Top",
        price: 42,
        sizeOptions: ["XS", "S", "M", "L", "XL"],
        isIncludedInCapsule: true,
        stripeLinks: {
          XS: null,
          S: null,
          M: null,
          L: null,
          XL: null,
        },
      },
      {
        id: "sunset-02",
        productId: "sunset-02",
        name: "Sunset Flow Bottom",
        price: 38,
        sizeOptions: ["XS", "S", "M", "L", "XL"],
        isIncludedInCapsule: true,
        stripeLinks: {
          XS: null,
          S: null,
          M: null,
          L: null,
          XL: null,
        },
      },
      {
        id: "sunset-03",
        productId: "sunset-03",
        name: "Sunset Flow Layer",
        price: 24,
        sizeOptions: ["XS", "S", "M", "L", "XL"],
        isIncludedInCapsule: true,
        stripeLinks: {
          XS: null,
          S: null,
          M: null,
          L: null,
          XL: null,
        },
      },
    ],
  },
};

interface CapsulePageProps {
  params: {
    handle: string;
  };
}

async function buildCapsuleFromStripe(handle: string) {
  try {
    // Fetch all products from Stripe
    const response = await fetchStripeProductsServer('all');
    const products = response.products;

    // For now, we'll use the static capsule data as a template
    // but populate the pieces with actual Stripe product data
    const staticCapsule = CAPSULES[handle];
    if (!staticCapsule) return null;

    // Map pieces to actual Stripe products
    const pieces = staticCapsule.pieces.map((piece: any) => {
      const stripeProduct = products.find(p => p.handle === piece.productId || p.id === piece.productId);
      return {
        ...piece,
        // Use Stripe data if available, fallback to static data
        name: stripeProduct?.name || piece.name,
        price: stripeProduct?.price || piece.price,
        image: stripeProduct?.image || piece.image,
        stripePriceId: stripeProduct?.stripePriceId || piece.stripePriceId,
        productId: stripeProduct?.handle || piece.productId,
      };
    });

    return {
      ...staticCapsule,
      pieces,
    };
  } catch (error) {
    console.error('Error building capsule from Stripe:', error);
    return CAPSULES[handle]; // Fallback to static data
  }
}

export default async function CapsulePage({ params }: CapsulePageProps) {
  const handle = params.handle;
  const capsule = await buildCapsuleFromStripe(handle);

  if (!capsule) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Capsule Not Found</h1>
          <p className="text-muted-foreground">
            The capsule you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // Serialize the capsule data to ensure it's safe for client components
  const serializedCapsule = serializeCapsule(capsule);

  return <CapsuleClient capsule={serializedCapsule} />;
}