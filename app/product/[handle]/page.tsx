import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProducts } from "@/lib/sample-products";

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = allProducts.find(p => p.handle === params.handle);
  
  if (!product) {
    return {
      title: "Product Not Found | Ali + Andy Z",
    };
  }

  return {
    title: `${product.name} | Ali + Andy Z`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = allProducts.find(p => p.handle === params.handle);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-light tracking-wide text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-light text-foreground">
                ${product.price}
              </p>
            </div>
            <p className="text-muted-foreground">
              {product.description}
            </p>
            <div className="space-y-4">
              <button className="w-full py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
