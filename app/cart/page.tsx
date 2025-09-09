import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Ali + Andy Z",
  description: "Review your selected items and proceed to checkout.",
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-light tracking-wide text-foreground mb-8">
          Shopping Cart
        </h1>
        
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            Your cart is empty
          </p>
          <p className="text-muted-foreground">
            Add some items to get started
          </p>
        </div>
      </div>
    </main>
  );
}
