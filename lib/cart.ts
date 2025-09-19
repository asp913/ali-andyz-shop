// lib/cart.ts
export type CartItem = {
  id: string;           // required (used in addToCart/findIndex)
  name: string;
  price: number;        // unit price
  quantity: number;     // primary count
  qty?: number;         // legacy alias used by some UI
  image?: string;
  variantId?: string;
  size?: string;
};

const STORAGE_KEY = "cart";
let memoryCart: CartItem[] = []; // SSR/Node fallback

function isBrowser() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

function readCart(): CartItem[] {
  if (isBrowser()) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  }
  return memoryCart;
}

function writeCart(items: CartItem[]) {
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } else {
    memoryCart = items;
  }
}

export function getCartItems(): CartItem[] {
  return readCart();
}

export function getCartItemCount(): number {
  return readCart().reduce((sum, i) => sum + (i.quantity ?? i.qty ?? 0), 0);
}

export function getCartTotal(): number {
  return readCart().reduce((sum, i) => sum + i.price * (i.quantity ?? i.qty ?? 0), 0);
}

// Accept deltas: positive adds, negative removes
type AddInput = Omit<CartItem, "quantity" | "qty"> & { quantity?: number; qty?: number };

export function addToCart(item: AddInput) {
  const deltaRaw = item.quantity ?? item.qty ?? 1;
  const delta = Number.isFinite(Number(deltaRaw)) ? Number(deltaRaw) : 1;

  const items = readCart();
  const idx = items.findIndex((i) => i.variantId === item.variantId);

  if (idx >= 0) {
    const prev = Number(items[idx].quantity ?? items[idx].qty ?? 0);
    const next = prev + delta;
    if (next <= 0) {
      items.splice(idx, 1); // remove
    } else {
      items[idx].quantity = next;
      if (items[idx].qty != null) items[idx].qty = next; // keep legacy in sync
    }
  } else {
    if (delta > 0) {
      items.push({ ...item, quantity: delta, qty: item.qty } as CartItem);
    }
  }

  writeCart(items);
  
  // Dispatch cart updated event
  if (typeof window !== 'undefined') {
    document.dispatchEvent(new CustomEvent('cart:updated', {
      detail: { items: readCart(), total: getCartTotal() }
    }));
  }
}

// Optional helpers:
// export function removeFromCart(id: string, variantId?: string) {
//   writeCart(readCart().filter(i => !(i.id === id && i.variantId === variantId)));
// }
// export function clearCart() { writeCart([]); }
