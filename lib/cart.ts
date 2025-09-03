/ lib/cart.ts
export type CartItem = {
  id: string;           // ✅ required (used in addToCart/findIndex)
  name: string;
  price: number;        // unit price
  quantity: number;     // item count
  image?: string;
  variantId?: string;
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
  return readCart().reduce((sum, i) => sum + (i.quantity || 0), 0);
}

export function getCartTotal(): number {
  return readCart().reduce((sum, i) => sum + i.price * i.quantity, 0);
}

type AddInput = Omit<CartItem, "quantity"> & { quantity?: number };

export function addToCart(item: AddInput) {
  const qty = Math.max(1, item.quantity ?? 1);
  const items = readCart();
  const idx = items.findIndex(
    (i) => i.id === item.id && i.variantId === item.variantId
  );
  if (idx >= 0) {
    const prev = Number(items[idx].quantity ?? 0);
    items[idx].quantity = prev + qty;
  } else {
    items.push({ ...item, quantity: qty } as CartItem);
  }
  writeCart(items);
}

// Optional helpers:
// export function removeFromCart(id: string, variantId?: string) {
//   writeCart(readCart().filter(i => !(i.id === id && i.variantId === variantId)));
// }
// export function clearCart() { writeCart([]); }
