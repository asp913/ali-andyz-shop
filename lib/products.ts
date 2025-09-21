import { StripeProduct, fetchStripeProducts } from './stripe';
import { serializeProduct, serializeProducts } from './serialization';
import { sampleProducts } from './sample-products';
import { readyToWearProducts } from './ready-to-wear-products';
import { mensReadyToWearProducts } from './mens-ready-to-wear-products';
import { mensActivewearProducts } from './mens-activewear-products';

// Cache for products to avoid repeated API calls
let productsCache: StripeProduct[] = [];
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  options?: string[];
  description?: string;
  images?: string[];
  handle?: string;
  stripePriceId?: string;
  category?: string;
};

// Convert StripeProduct to our Product type with proper serialization
function stripeToProduct(stripeProduct: StripeProduct): Product {
  return serializeProduct({
    id: stripeProduct.id,
    name: stripeProduct.name,
    price: stripeProduct.price,
    image: stripeProduct.image,
    badge: stripeProduct.badge,
    options: stripeProduct.options,
    description: stripeProduct.description,
    images: stripeProduct.images,
    handle: stripeProduct.handle,
    stripePriceId: stripeProduct.stripePriceId,
    category: stripeProduct.category,
  });
}

// Get sample products for a category
function getSampleProductsForCategory(category: string): Product[] {
  switch (category) {
    case 'womens-activewear':
      return serializeProducts(sampleProducts.filter(p => p.category === 'womens-activewear'));
    case 'womens-ready-to-wear':
      return serializeProducts(readyToWearProducts);
    case 'mens-ready-to-wear':
      return serializeProducts(mensReadyToWearProducts);
    case 'mens-activewear':
      return serializeProducts(mensActivewearProducts);
    case 'sample':
      return serializeProducts(sampleProducts);
    default:
      return serializeProducts(sampleProducts);
  }
}

// Fetch and cache products
async function getCachedProducts(category: string = 'all'): Promise<Product[]> {
  const now = Date.now();
  
  // Return cached data if still valid
  if (productsCache.length > 0 && (now - cacheTimestamp) < CACHE_DURATION) {
    return productsCache.map(stripeToProduct);
  }

  try {
    // Try to fetch from Stripe API
    const response = await fetchStripeProducts(category);
    productsCache = response.products;
    cacheTimestamp = now;
    return productsCache.map(stripeToProduct);
  } catch (error) {
    console.error('Error fetching products from Stripe, using sample data:', error);
    // Fallback to sample data
    return getSampleProductsForCategory(category);
  }
}

// Public API functions
export async function getAllProducts(): Promise<Product[]> {
  return getCachedProducts('all');
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return getCachedProducts(category);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find(p => p.id === id || p.handle === id);
}

export async function getSampleProducts(): Promise<Product[]> {
  return getCachedProducts('sample');
}

export async function getReadyToWearProducts(): Promise<Product[]> {
  return getCachedProducts('ready-to-wear');
}

export async function getMensReadyToWearProducts(): Promise<Product[]> {
  return getCachedProducts('mens-ready-to-wear');
}

export async function getMensActivewearProducts(): Promise<Product[]> {
  return getCachedProducts('mens-activewear');
}

export async function getWomensActivewearProducts(): Promise<Product[]> {
  return getCachedProducts('womens-activewear');
}

export async function getWomensReadyToWearProducts(): Promise<Product[]> {
  return getCachedProducts('womens-ready-to-wear');
}

// Clear cache (useful for development)
export function clearProductsCache(): void {
  productsCache = [];
  cacheTimestamp = 0;
}
