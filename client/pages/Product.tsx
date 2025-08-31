import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { getProductById } from "@/lib/sample-products";
import { Button } from "@/components/ui/button";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = useMemo(() => (id ? getProductById(id) : undefined), [id]);
  const [size, setSize] = useState(product?.options?.[0] || "One size");

  if (!product) {
    return (
      <main className="container mx-auto px-8 py-16">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p className="mt-2 text-muted-foreground">The item you’re looking for doesn’t exist.</p>
        <div className="mt-6">
          <Link to="/" className="underline hover:no-underline">Back to home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="py-10 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-card">
              <img src={product.images?.[0] || product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide">{product.name}</h1>
            <div className="mt-2 text-xl">${product.price}</div>
            {product.badge && (
              <div className="mt-3 inline-block border border-border px-2 py-1 text-xs rounded-sm">{product.badge}</div>
            )}

            <div className="mt-6 space-y-3 text-muted-foreground">
              <p>{product.description}</p>
            </div>

            <div className="mt-6">
              <div className="text-sm text-muted-foreground">
                {product.options?.length ? "Select size" : ""}
              </div>
              {product.options?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSize(opt)}
                      className={`px-3 py-2 border rounded-sm text-sm ${
                        size === opt ? "bg-card border-foreground" : "border-border hover:bg-card"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="mt-6 flex gap-3">
              <Button
                className="rounded-sm"
                onClick={() => {
                  document.dispatchEvent(
                    new CustomEvent("capsule:addToCart", {
                      detail: {
                        variantId: `${product.id}:${size}`,
                        qty: 1,
                        name: product.name,
                        price: product.price,
                        size,
                      },
                    })
                  );
                }}
              >
                Add to Cart
              </Button>
              <Button variant="outline" className="rounded-sm" asChild>
                <a href="/womens-activewear">Continue Shopping</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />
      <CTASection />
      <ContactSection />
    </main>
  );
}
