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
  } else {
    cartItems.push(item);
  }
  
  // Trigger cart update event
  document.dispatchEvent(new CustomEvent('cart:updated', {
    detail: { items: cartItems, total: getCartTotal() }
  }));
  
  console.log('Cart updated:', cartItems);
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
