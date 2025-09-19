export {
  getCartItems,
  getCartItemCount,
  getCartTotal,
  addToCart,
  type CartItem
} from '../../lib/cart';

export function initializeCart() {
  // Initialize cart in localStorage if not already present
  if (typeof window !== 'undefined' && !localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
}
