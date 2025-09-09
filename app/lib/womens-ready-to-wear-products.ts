import { Product } from "./sample-products";

export const womensReadyToWearProducts: Product[] = [
  {
    id: "wr-001",
    name: "Elegant Blouse",
    price: 128,
    image:
      "https://images.pexels.com/photos/6551410/pexels-photo-6551410.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Best Seller",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Silk-blend blouse with delicate details and timeless silhouette.",
    images: [
      "https://images.pexels.com/photos/6551410/pexels-photo-6551410.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "wr-002",
    name: "Tailored Trousers",
    price: 158,
    image:
      "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "High-waisted trousers with clean lines and premium fabric.",
    images: [
      "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "wr-003",
    name: "Cashmere Sweater",
    price: 198,
    image:
      "https://images.pexels.com/photos/6551375/pexels-photo-6551375.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Luxury",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Luxurious cashmere sweater with modern fit and soft hand feel.",
    images: [
      "https://images.pexels.com/photos/6551375/pexels-photo-6551375.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "wr-004",
    name: "Midi Dress",
    price: 178,
    image:
      "https://images.pexels.com/photos/7772655/pexels-photo-7772655.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Elegant midi dress with flattering silhouette and premium fabric.",
    images: [
      "https://images.pexels.com/photos/7772655/pexels-photo-7772655.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "wr-005",
    name: "Wool Coat",
    price: 298,
    image:
      "https://images.pexels.com/photos/6551328/pexels-photo-6551328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Classic wool coat with modern tailoring and timeless appeal.",
    images: [
      "https://images.pexels.com/photos/6551328/pexels-photo-6551328.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "wr-006",
    name: "Silk Scarf",
    price: 88,
    image:
      "https://images.pexels.com/photos/7772664/pexels-photo-7772664.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Accessory",
    options: ["One Size"],
    description:
      "Luxurious silk scarf with hand-painted design and versatile styling.",
    images: [
      "https://images.pexels.com/photos/7772664/pexels-photo-7772664.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
];

export function getWomensReadyToWearProductById(id: string): Product | undefined {
  return womensReadyToWearProducts.find((p) => p.id === id);
}
