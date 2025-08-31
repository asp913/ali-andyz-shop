// Cart utility functions and event handlers

export interface CartItem {
  variantId: string;
  qty: number;
  name: string;
  price: number;
  size: string;
}

// Simple cart state (replace with your preferred state management)
let cartItems: CartItem[] = [];

export function addToCart(item: CartItem) {
  const existingIndex = cartItems.findIndex(cartItem => cartItem.variantId === item.variantId);
  if (existingIndex >= 0) {
    cartItems[existingIndex].qty += item.qty;
    if (cartItems[existingIndex].qty <= 0) {
      cartItems.splice(existingIndex, 1);
    }
  } else {
    if (item.qty > 0) cartItems.push(item);
  }

  document.dispatchEvent(new CustomEvent('cart:updated', {
    detail: { items: cartItems, total: getCartTotal() }
  }));
}

export function setItemQty(variantId: string, qty: number) {
  const idx = cartItems.findIndex(c => c.variantId === variantId);
  if (idx >= 0) {
    if (qty <= 0) cartItems.splice(idx, 1); else cartItems[idx].qty = qty;
  }
  document.dispatchEvent(new CustomEvent('cart:updated', {
    detail: { items: cartItems, total: getCartTotal() }
  }));
}

export function removeFromCart(variantId: string) {
  cartItems = cartItems.filter(c => c.variantId !== variantId);
  document.dispatchEvent(new CustomEvent('cart:updated', {
    detail: { items: cartItems, total: getCartTotal() }
  }));
}

export function clearCart() {
  cartItems = [];
  document.dispatchEvent(new CustomEvent('cart:updated', {
    detail: { items: cartItems, total: getCartTotal() }
  }));
}

export function getCartItems(): CartItem[] {
  return cartItems;
}

export function getCartTotal(): number {
  return cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
}

export function getCartItemCount(): number {
  return cartItems.reduce((count, item) => count + item.qty, 0);
}

// Initialize cart event listener
export function initializeCart() {
  document.addEventListener('capsule:addToCart', (e: any) => {
    const { variantId, qty, name, price, size } = e.detail;
    addToCart({ variantId, qty, name, price, size });
  });
}
