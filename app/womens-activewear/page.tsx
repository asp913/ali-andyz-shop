import { Metadata } from "next";
import ProductCard from "@/components/site/ProductCard";
import { womensActivewearProducts } from "@/lib/womens-activewear-products";

export const metadata: Metadata = {
  title: "Women's Activewear | Ali + Andy Z",
  description: "Elevated activewear essentials designed for studio, street, and travel.",
};

export default function WomensActivewear() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-wide text-foreground mb-4">
            Women's Activewear
          </h1>
          <p className="text-muted-foreground">
            Where performance meets purpose. Elevated essentials designed for studio, street, and travel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {womensActivewearProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
