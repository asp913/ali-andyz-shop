import { CartItem } from './cart';

export type StripeCartItem = CartItem & {
  stripePriceId?: string;
};

// Enhanced cart functions for Stripe integration
export function createStripeLineItems(cartItems: StripeCartItem[]): Stripe.Checkout.SessionCreateParams.LineItem[] {
  return cartItems.map(item => ({
    price: item.stripePriceId || '',
    quantity: item.quantity || item.qty || 1,
    adjustable_quantity: {
      enabled: true,
      minimum: 1,
      maximum: 10,
    },
  }));
}

// Checkout functions
export async function createCheckoutSession(cartItems: StripeCartItem[], metadata?: Record<string, string>) {
  try {
    const response = await fetch('/api/checkout/single', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lineItems: createStripeLineItems(cartItems),
        metadata,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Checkout failed');
    }

    const { url } = await response.json();
    return url;
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
}

export async function createBundleCheckoutSession(
  capsule: string,
  bundlePrice: number,
  items: Array<{
    handle: string;
    title: string;
    size: string | null;
    priceStripeId: string | null;
    requiredForBundle: boolean;
  }>
) {
  try {
    const response = await fetch('/api/checkout/bundle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        capsule,
        bundlePrice,
        items,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Bundle checkout failed');
    }

    const { url } = await response.json();
    return url;
  } catch (error) {
    console.error('Bundle checkout error:', error);
    throw error;
  }
}

// Utility function to redirect to Stripe Checkout
export function redirectToCheckout(url: string) {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}
