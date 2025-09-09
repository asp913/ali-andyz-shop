import { Product } from "./sample-products";

export const readyToWearProducts: Product[] = [
  {
    id: "rtw-001",
    name: "Essential Cashmere Blend Sweater",
    price: 198,
    image:
      "https://images.pexels.com/photos/7679663/pexels-photo-7679663.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Best Seller",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Luxuriously soft cashmere blend in a timeless silhouette. Perfect for layering or wearing solo.",
    images: [
      "https://images.pexels.com/photos/7679663/pexels-photo-7679663.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "rtw-002",
    name: "Refined Midi Dress",
    price: 248,
    image:
      "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Effortlessly elegant midi dress crafted from sustainable viscose with a flattering silhouette.",
    images: [
      "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "rtw-003",
    name: "Minimalist Blazer",
    price: 298,
    image:
      "https://images.pexels.com/photos/6069895/pexels-photo-6069895.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "New",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Clean-lined blazer in premium wool blend. Structured yet comfortable for day-to-night versatility.",
    images: [
      "https://images.pexels.com/photos/6069895/pexels-photo-6069895.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "rtw-004",
    name: "Silk Camisole",
    price: 128,
    image:
      "https://images.pexels.com/photos/5325838/pexels-photo-5325838.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Pure mulberry silk camisole with delicate adjustable straps. A wardrobe essential.",
    images: [
      "https://images.pexels.com/photos/5325838/pexels-photo-5325838.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "rtw-005",
    name: "Wide-Leg Trouser",
    price: 198,
    image:
      "https://images.pexels.com/photos/5828461/pexels-photo-5828461.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "High-waisted wide-leg trousers in premium crepe. Sophisticated silhouette for effortless elegance.",
    images: [
      "https://images.pexels.com/photos/5828461/pexels-photo-5828461.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "rtw-006",
    name: "Cashmere Wrap Coat",
    price: 448,
    image:
      "https://images.pexels.com/photos/7679632/pexels-photo-7679632.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Luxury",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Sumptuous cashmere wrap coat with self-tie belt. The ultimate in refined outerwear.",
    images: [
      "https://images.pexels.com/photos/7679632/pexels-photo-7679632.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
];

export function getReadyToWearProductById(id: string): Product | undefined {
  return readyToWearProducts.find((p) => p.id === id);
}
