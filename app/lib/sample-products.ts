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
    name: "Essential Ribbed Tank",
    price: 68,
    image:
      "https://images.pexels.com/photos/7679450/pexels-photo-7679450.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Best Seller",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "A breathable, ribbed tank crafted from sustainable fibers for studio-to-street comfort.",
    images: [
      "https://images.pexels.com/photos/7679450/pexels-photo-7679450.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    handle: "essential-ribbed-tank",
  },
  {
    id: "wa-002",
    name: "Mindful Movement Leggings",
    price: 98,
    image:
      "https://images.pexels.com/photos/4327024/pexels-photo-4327024.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "High-waisted leggings with supportive compression and four-way stretch for all-day wear.",
    images: [
      "https://images.pexels.com/photos/4327024/pexels-photo-4327024.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    handle: "mindful-movement-leggings",
  },
  {
    id: "wa-003",
    name: "Studio Flow Sports Bra",
    price: 58,
    image:
      "https://images.pexels.com/photos/4498614/pexels-photo-4498614.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "New",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Medium-support bra with soft-touch fabric and a barely-there feel.",
    images: [
      "https://images.pexels.com/photos/4498614/pexels-photo-4498614.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    handle: "studio-flow-sports-bra",
  },
  {
    id: "wa-004",
    name: "Zen Zip-Up Hoodie",
    price: 128,
    image:
      "https://images.pexels.com/photos/7822865/pexels-photo-7822865.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Cozy, elevated zip hoodie with a relaxed fit and premium brushed interior.",
    images: [
      "https://images.pexels.com/photos/7822865/pexels-photo-7822865.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    handle: "zen-zip-up-hoodie",
  },
  {
    id: "wa-005",
    name: "Balance Cropped Jacket",
    price: 158,
    image:
      "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Structured cropped jacket for polished layers wherever the day takes you.",
    images: [
      "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    handle: "balance-cropped-jacket",
  },
  {
    id: "wa-006",
    name: "Serene Seamless Shorts",
    price: 78,
    image:
      "https://images.pexels.com/photos/6311407/pexels-photo-6311407.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Second-skin seamless shorts designed to move with you—no pinching, ever.",
    images: [
      "https://images.pexels.com/photos/6311407/pexels-photo-6311407.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    handle: "serene-seamless-shorts",
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
