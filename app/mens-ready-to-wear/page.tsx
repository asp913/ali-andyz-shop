import { Metadata } from "next";
import ProductCard from "@/components/site/ProductCard";
import { mensReadyToWearProducts } from "@/lib/mens-ready-to-wear-products";

export const metadata: Metadata = {
  title: "Men's Ready to Wear | Ali + Andy Z",
  description: "Capsule collections curated by real people, for real life.",
};

export default function MensReadyToWear() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-wide text-foreground mb-4">
            Men's Ready to Wear
          </h1>
          <p className="text-muted-foreground">
            Capsule collections curated by real people, for real life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mensReadyToWearProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
