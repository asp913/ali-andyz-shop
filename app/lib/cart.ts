import {
  getCartItems,
  getCartItemCount,
  getCartTotal,
  addToCart,
  type CartItem
} from '../../lib/cart';

export {
  getCartItems,
  getCartItemCount,
  getCartTotal,
  addToCart,
  type CartItem
};

let cartInitialized = false;

export function initializeCart() {
  // Initialize cart in localStorage if not already present
  if (typeof window !== 'undefined' && !localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  // Set up event listener for add to cart events (only once)
  if (typeof window !== 'undefined' && !cartInitialized) {
    cartInitialized = true;
    document.addEventListener('capsule:addToCart', (e: any) => {
      const { variantId, qty, name, price, size } = e.detail;
      addToCart({ 
        id: variantId, 
        variantId, 
        qty: qty || 1, 
        name, 
        price, 
        size 
      });
    });
  }
}
