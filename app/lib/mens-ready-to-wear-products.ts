import { Product } from "./sample-products";

export const mensReadyToWearProducts: Product[] = [
  {
    id: "mrt-001",
    name: "Essential Oxford Shirt",
    price: 148,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F6c566af9ff0a4408b20b60199fdb31bf?format=webp&width=1200",
    badge: "Best Seller",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Classic oxford shirt in premium cotton. Versatile enough for work or weekend.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F6c566af9ff0a4408b20b60199fdb31bf?format=webp&width=1600",
    ],
  },
  {
    id: "mrt-002",
    name: "Merino Wool Sweater",
    price: 198,
    image:
      "https://images.pexels.com/photos/8462879/pexels-photo-8462879.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Luxurious merino wool sweater with a modern fit. Perfect for layering or wearing solo.",
    images: [
      "https://images.pexels.com/photos/8462879/pexels-photo-8462879.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "mrt-003",
    name: "Tailored Chino Trouser",
    price: 168,
    image:
      "https://images.pexels.com/photos/7679659/pexels-photo-7679659.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "New",
    options: ["30", "32", "34", "36", "38", "40"],
    description:
      "Modern chino trousers in premium cotton twill. Tailored fit with clean lines.",
    images: [
      "https://images.pexels.com/photos/7679659/pexels-photo-7679659.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "mrt-004",
    name: "Wool Blend Blazer",
    price: 348,
    image:
      "https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=1200",
    options: ["36", "38", "40", "42", "44", "46"],
    description:
      "Sophisticated blazer in wool blend. Unstructured design for contemporary elegance.",
    images: [
      "https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "mrt-005",
    name: "Cashmere Crew Neck",
    price: 248,
    image:
      "https://images.pexels.com/photos/7679648/pexels-photo-7679648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Luxury",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Pure cashmere crew neck sweater. Timeless comfort in the finest natural fiber.",
    images: [
      "https://images.pexels.com/photos/7679648/pexels-photo-7679648.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "mrt-006",
    name: "Italian Wool Overcoat",
    price: 498,
    image:
      "https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Premium",
    options: ["36", "38", "40", "42", "44", "46"],
    description:
      "Luxurious Italian wool overcoat with classic tailoring. Investment piece for discerning wardrobes.",
    images: [
      "https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
];

export function getMensReadyToWearProductById(id: string): Product | undefined {
  return mensReadyToWearProducts.find((p) => p.id === id);
}
