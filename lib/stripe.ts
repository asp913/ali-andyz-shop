import Stripe from 'stripe';

export type StripeProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  badge?: string;
  options: string[];
  handle: string;
  stripePriceId: string;
  category: string;
  active: boolean;
  created: number;
  updated: number;
};

export type StripeProductsResponse = {
  products: StripeProduct[];
  hasMore: boolean;
};

// Server-side function to fetch products directly from Stripe
export async function fetchStripeProductsServer(category: string = 'all'): Promise<StripeProductsResponse> {
  try {
    const stripe = getStripe();
    
    // Build query parameters
    const params: Stripe.ProductListParams = {
      limit: 50,
      active: true,
      expand: ['data.default_price'],
    };

    // Get all products first, then filter by category
    const products = await stripe.products.list(params);

    // Transform Stripe products to our format
    const transformedProducts = products.data.map((product) => {
      const price = product.default_price as Stripe.Price | null;
      return transformStripeProduct(product, price);
    });

    // Filter by category if not 'all'
    const filteredProducts = category === 'all' 
      ? transformedProducts 
      : transformedProducts.filter(product => product.category === category);

    return {
      products: filteredProducts,
      hasMore: products.has_more,
    };
  } catch (error) {
    console.error('Error fetching Stripe products:', error);
    return { products: [], hasMore: false };
  }
}

// Client-side function to fetch products from our API
export async function fetchStripeProducts(category: string = 'all'): Promise<StripeProductsResponse> {
  try {
    // During build time, we can't make API calls, so return empty array
    if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
      console.log('Build time detected, returning empty products array');
      return { products: [], hasMore: false };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/stripe/products?category=${category}&limit=50`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Stripe products:', error);
    return { products: [], hasMore: false };
  }
}

// Server-side function to get Stripe instance
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('Missing STRIPE_SECRET_KEY');
  }
  return new Stripe(key, { apiVersion: '2024-06-20' });
}

// Transform Stripe product to our format
export function transformStripeProduct(product: Stripe.Product, price?: Stripe.Price): StripeProduct {
  return {
    id: product.id,
    name: product.name,
    description: product.description || '',
    price: price ? (price.unit_amount || 0) / 100 : 0,
    image: product.images?.[0] || '',
    images: product.images || [],
    badge: product.metadata?.badge || '',
    options: product.metadata?.options ? JSON.parse(product.metadata.options) : [],
    handle: product.metadata?.handle || product.id,
    stripePriceId: price?.id || '',
    category: product.metadata?.category || 'general',
    active: product.active,
    created: product.created,
    updated: product.updated,
  };
}
