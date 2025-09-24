export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  options?: string[];
  description?: string;
  images?: string[];
  handle?: string;
};

export const sampleProducts: Product[] = [
  {
    id: "wa-001",
    name: "Riviera Edit — Capsule or Mix & Match",
    price: 179,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7dc6421f0d6144a29d16812342ff4701?format=webp&width=800",
    badge: "Capsule",
    options: [],
    description:
      "Bundle $179 · Value $308 · Save $129. Price range $20–$129. Choose your vibe: get the full capsule for effortless head-to-toe styling, or shop pieces individually to mix into your wardrobe. Every piece carries coastal polish with relaxed streetwear ease.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7dc6421f0d6144a29d16812342ff4701?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F890370c8fea645168eaa9647d0e11b31?format=webp&width=800",
    ],
    handle: "riviera-edit-capsule",
  },
  {
    id: "wa-002",
    name: "Sunset Flow — Capsule or Mix & Match",
    price: 119,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd474d293666041978cf836301c70914a?format=webp&width=1600",
    badge: "Capsule",
    options: [],
    description:
      "Sunset Flow — Capsule or Mix & Match. Bundle $119 · Value $154 · Save $35. Price range: $24–$42. Golden hour vibes in wearable form. Pieces that flow from yoga class to sunset dinner, designed for those magical in-between moments. Flowing silhouettes in warm, sunset tones. Versatile layers perfect for day-to-night. Save $35 vs. buying separately. Size Guide · /pages/help",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd474d293666041978cf836301c70914a?format=webp&width=1600",
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fb3b275c6e356437f9e376b3c12f4fa7f?format=webp&width=1600",
    ],
    handle: "sunset-flow-capsule",
  },
  {
    id: "wa-003",
    name: "Studio Flow — Capsule or Mix & Match",
    price: 99,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F73c64ef02c64424f86234be18a9aa5f0?format=webp&width=1600",
    badge: "Capsule",
    options: [],
    description:
      "Studio Flow — Capsule or Mix & Match. Bundle $99 · Value $134 · Save $35. Price range: $19–$39. Move with intention. Get the full capsule for effortless head-to-toe styling, or shop pieces individually to mix into your wardrobe. Grounded sage meets warm neutrals for a calm, studio-to-street vibe.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F73c64ef02c64424f86234be18a9aa5f0?format=webp&width=1600",
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F20ff5e787acf4d259f0b0d78397403e3?format=webp&width=1600",
    ],
    handle: "studio-flow-capsule",
  },
  {
    id: "wa-004",
    name: "Off-Duty Luxe — Moto Edit (updated)",
    price: 79,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Ff0697e6ce2f4413eb9461af368f649ef?format=webp&width=1600",
    badge: "Capsule",
    options: [],
    description:
      "Off-Duty Luxe — Moto Edit. Color story: jet black • mocha • olive • noir/ivory. Texture mix: leather effect + matte stretch + silk-feel. Pieces include Faux Leather Moto Jacket, Cropped Tank, High-Waisted Leggings, and a Graphic Silk-Feel Square. Capsule Total (3 pcs): $97 · Bundle (3 pcs): $79 — Save $18 · Upgrade (4 pcs incl. scarf): $92 — Save $27. Add Capsule — $79 · Upgrade with Scarf — $92.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Ff0697e6ce2f4413eb9461af368f649ef?format=webp&width=1600",
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F561b06bee9f042ff9fd7d35376fb0805?format=webp&width=1600",
    ],
    handle: "off-duty-luxe-moto-edit",
  },
  {
    id: "wa-005",
    name: "Black Tennis — Capsule or Mix & Match",
    price: 189,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fc8239d1dcbf341c28afd04355bb8abe5?format=webp&width=1600",
    badge: "Capsule",
    options: [],
    description:
      "Black Tennis — Capsule or Mix & Match. Bundle $189 · Value $314 · Save $125. Price range: $25–$75. Elevate your game with court-to-club sophistication. Get the full capsule for seamless athletic elegance, or shop pieces individually to build your champion wardrobe. Premium black pieces designed for peak performance and timeless style. Save $75 vs. buying separately. Court-to-club versatility in timeless black. Premium performance fabrics with elegant design.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fc8239d1dcbf341c28afd04355bb8abe5?format=webp&width=1600",
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F0a65243126ac4b3a8cd0de54e115902a?format=webp&width=800",
    ],
    handle: "black-tennis-capsule",
  },
  {
    id: "wa-006",
    name: "The Drift Set — Capsule or Mix & Match",
    price: 159,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F377a16c6b18442b19fe9d0dff83bd015?format=webp&width=1600",
    badge: "Capsule",
    options: [],
    description:
      "The Drift Set — Capsule or Mix & Match. Bundle $159 · Value $218 · Save $59. Price range $28–$65. Choose your vibe: get the full capsule for effortless comfort and style, or shop pieces individually to mix into your wardrobe. Every piece carries luxe comfort with travel-ready versatility.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F377a16c6b18442b19fe9d0dff83bd015?format=webp&width=1600",
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fe33735d1e16448eebb7aa0c04a6cc7a7?format=webp&width=1600",
    ],
    handle: "the-drift-set-capsule",
  },
  {
    id: "wa-007",
    name: "Coastal Ride — Capsule or Mix & Match",
    price: 119,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Ff1489b7630524fc1b86e864da3f9ab8c?format=webp&width=1600",
    badge: "Capsule",
    options: [],
    description:
      "Coastal Ride — Capsule or Mix & Match. Bundle $119 · Value $169 · Save $50. Price range $20–$59. Breezy, movement-ready pieces in ocean neutrals. Throw on the windbreaker and go—from seafront coffee runs to sunset rides. Build the full capsule or mix in your favorites. Free shipping over $100 · 30-day easy returns.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Ff1489b7630524fc1b86e864da3f9ab8c?format=webp&width=1600",
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F75bed15853924ae08bb7a8418fdee852?format=webp&width=1600",
    ],
    handle: "coastal-ride-capsule",
  },
  {
    id: "wa-008",
    name: "Airport Set — Capsule or Mix & Match",
    price: 199,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7a5b1f3a13b940749965b0eb265f3456?format=webp&width=1600",
    badge: "Capsule",
    options: [],
    description:
      "Airport Set — Capsule or Mix & Match. Bundle $199 · Value $290 · Save $91. Upgrade with Strap — $209 · Value $302 · Save $93. Price range: $12–$139. Soft layers, pocketed essentials, and easy security-friendly details. Build the full capsule for a polished travel uniform, or mix pieces into your week.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7a5b1f3a13b940749965b0eb265f3456?format=webp&width=1600",
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F83855c6501054cb78c2cd523e42102c4?format=webp&width=1600",
    ],
    handle: "airport-set-capsule",
  },
];

import { readyToWearProducts } from "./ready-to-wear-products";
import { mensReadyToWearProducts } from "./mens-ready-to-wear-products";
import { mensActivewearProducts } from "./mens-activewear-products";

export const allProducts = [
  ...sampleProducts, 
  ...readyToWearProducts, 
  ...mensReadyToWearProducts, 
  ...mensActivewearProducts
];

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}
