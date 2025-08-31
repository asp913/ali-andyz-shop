import { Product } from "./sample-products";

export const mensActivewearProducts: Product[] = [
  {
    id: "ma-001",
    name: "Performance Tech Tee",
    price: 78,
    image:
      "https://images.pexels.com/photos/6551410/pexels-photo-6551410.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Best Seller",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Moisture-wicking tech fabric with anti-odor treatment. Perfect for high-intensity training.",
    images: [
      "https://images.pexels.com/photos/6551410/pexels-photo-6551410.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "ma-002",
    name: "Elite Training Shorts",
    price: 98,
    image:
      "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Lightweight shorts with four-way stretch and secure zip pockets. Freedom of movement.",
    images: [
      "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "ma-003",
    name: "Compression Long Sleeve",
    price: 108,
    image:
      "https://images.pexels.com/photos/6551375/pexels-photo-6551375.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "New",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Supportive compression base layer for enhanced performance and recovery.",
    images: [
      "https://images.pexels.com/photos/6551375/pexels-photo-6551375.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "ma-004",
    name: "Training Joggers",
    price: 128,
    image:
      "https://images.pexels.com/photos/7772655/pexels-photo-7772655.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Tapered joggers with moisture-wicking fabric and reflective details.",
    images: [
      "https://images.pexels.com/photos/7772655/pexels-photo-7772655.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "ma-005",
    name: "Thermal Zip Hoodie",
    price: 158,
    image:
      "https://images.pexels.com/photos/6551328/pexels-photo-6551328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Insulated zip hoodie for pre and post-workout comfort. Premium thermal regulation.",
    images: [
      "https://images.pexels.com/photos/6551328/pexels-photo-6551328.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "ma-006",
    name: "Recovery Track Jacket",
    price: 188,
    image:
      "https://images.pexels.com/photos/7772664/pexels-photo-7772664.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Performance",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Lightweight track jacket with wind resistance and quick-dry technology.",
    images: [
      "https://images.pexels.com/photos/7772664/pexels-photo-7772664.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
];

export function getMensActivewearProductById(id: string): Product | undefined {
  return mensActivewearProducts.find((p) => p.id === id);
}
