import { Product } from "./sample-products";

export const womensActivewearProducts: Product[] = [
  {
    id: "wa-001",
    name: "High-Performance Sports Bra",
    price: 68,
    image:
      "https://images.pexels.com/photos/6551410/pexels-photo-6551410.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Best Seller",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Maximum support sports bra with moisture-wicking fabric and seamless construction.",
    images: [
      "https://images.pexels.com/photos/6551410/pexels-photo-6551410.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "wa-002",
    name: "Yoga Leggings",
    price: 88,
    image:
      "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "High-waisted leggings with four-way stretch and squat-proof fabric.",
    images: [
      "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "wa-003",
    name: "Training Tank Top",
    price: 58,
    image:
      "https://images.pexels.com/photos/6551375/pexels-photo-6551375.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "New",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Breathable tank top with built-in bra and racerback design.",
    images: [
      "https://images.pexels.com/photos/6551375/pexels-photo-6551375.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "wa-004",
    name: "Athletic Shorts",
    price: 78,
    image:
      "https://images.pexels.com/photos/7772655/pexels-photo-7772655.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Quick-dry shorts with built-in briefs and side pockets.",
    images: [
      "https://images.pexels.com/photos/7772655/pexels-photo-7772655.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "wa-005",
    name: "Performance Hoodie",
    price: 128,
    image:
      "https://images.pexels.com/photos/6551328/pexels-photo-6551328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Lightweight hoodie with thumbholes and moisture-wicking technology.",
    images: [
      "https://images.pexels.com/photos/6551328/pexels-photo-6551328.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "wa-006",
    name: "Running Jacket",
    price: 148,
    image:
      "https://images.pexels.com/photos/7772664/pexels-photo-7772664.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Performance",
    options: ["XS", "S", "M", "L", "XL"],
    description:
      "Wind-resistant running jacket with reflective details and zip pockets.",
    images: [
      "https://images.pexels.com/photos/7772664/pexels-photo-7772664.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
];

export function getWomensActivewearProductById(id: string): Product | undefined {
  return womensActivewearProducts.find((p) => p.id === id);
}
