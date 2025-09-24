'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createCheckoutSession, redirectToCheckout, type StripeCartItem } from '@/lib/cart-stripe';
import { getCartItems } from '@/lib/cart';
import { Loader2 } from 'lucide-react';

interface CheckoutButtonProps {
  className?: string;
  children?: React.ReactNode;
  metadata?: Record<string, string>;
}

export default function CheckoutButton({ 
  className, 
  children = "Checkout", 
  metadata 
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      
      // Get cart items
      const cartItems = getCartItems() as StripeCartItem[];
      
      if (cartItems.length === 0) {
        alert('Your cart is empty');
        return;
      }

      // Validate that all items have Stripe price IDs
      const itemsWithoutPriceId = cartItems.filter(item => !item.stripePriceId);
      if (itemsWithoutPriceId.length > 0) {
        console.error('Some items missing Stripe price ID:', itemsWithoutPriceId);
        alert('Some items are not available for checkout. Please refresh the page and try again.');
        return;
      }

      // Create checkout session
      const checkoutUrl = await createCheckoutSession(cartItems, metadata);
      
      // Redirect to Stripe Checkout
      redirectToCheckout(checkoutUrl);
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Checkout failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      className={className}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
