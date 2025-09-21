import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCartItems, getCartTotal, getCartItemCount, addToCart, type CartItem } from "@/lib/cart";
import CheckoutButton from "@/components/checkout/CheckoutButton";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // Initialize cart state after hydration
  useEffect(() => {
    setItems(getCartItems());
    setTotal(getCartTotal());
    setCount(getCartItemCount());
  }, []);

  useEffect(() => {
    const onUpdated = (e: any) => {
      setItems(e.detail.items);
      setTotal(e.detail.total);
      setCount(e.detail.items.reduce((c: number, it: CartItem) => c + (it.qty || it.quantity || 0), 0));
      setOpen(true);
    };
    const onToggle = () => setOpen((v) => !v);

    document.addEventListener("cart:updated", onUpdated as EventListener);
    document.addEventListener("cart:toggle", onToggle as EventListener);
    return () => {
      document.removeEventListener("cart:updated", onUpdated as EventListener);
      document.removeEventListener("cart:toggle", onToggle as EventListener);
    };
  }, []);

  const adjustQty = (variantId: string, delta: number) => {
    const target = items.find((i) => i.variantId === variantId);
    if (!target) return;
    
    // Use the delta directly - addToCart will handle adding it to existing quantity
    addToCart({ 
      id: target.id,
      variantId: target.variantId,
      name: target.name,
      price: target.price,
      size: target.size,
      qty: delta 
    });
  };

  return (
    <>
      {/* Badge for mobile quick view (optional visual) */}
      <div className="sr-only" aria-live="polite">{count} items in cart</div>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-background border-l border-border shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="text-sm tracking-[0.2em] uppercase">Your Cart ({count})</div>
              <button aria-label="Close cart" onClick={() => setOpen(false)} className="p-2 rounded-sm hover:bg-card">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="text-muted-foreground">Your cart is empty.</div>
              ) : (
                items.map((it) => (
                  <div key={it.variantId} className="flex items-start gap-3 border-b border-border pb-4">
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{it.name}</div>
                      <div className="text-sm text-muted-foreground">Size: {it.size}</div>
                      <div className="mt-1 text-sm">${it.price}</div>
                      <div className="mt-2 inline-flex items-center gap-2">
                        <button
                          className="px-2 py-1 border border-border rounded-sm text-sm"
                          onClick={() => it.variantId && adjustQty(it.variantId, -1)}
                          aria-label={`Decrease quantity of ${it.name}`}
                        >
                          -
                        </button>
                        <span className="min-w-[2ch] text-center">{it.qty || it.quantity || 0}</span>
                        <button
                          className="px-2 py-1 border border-border rounded-sm text-sm"
                          onClick={() => it.variantId && adjustQty(it.variantId, 1)}
                          aria-label={`Increase quantity of ${it.name}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="border-t border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-muted-foreground">Subtotal</div>
                <div className="text-base font-medium">${total.toFixed(2)}</div>
              </div>
              <CheckoutButton className="w-full rounded-sm">
                Checkout
              </CheckoutButton>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
