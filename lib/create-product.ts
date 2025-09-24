// lib/create-product.ts
// Utility function to create products programmatically

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

export interface CreateProductData {
  name: string;
  description: string;
  price: number; // in cents
  category: string;
  badge?: string;
  handle: string;
  images: string[];
  options?: string[];
}

export async function createStripeProduct(productData: CreateProductData) {
  try {
    // Create the product
    const product = await stripe.products.create({
      name: productData.name,
      description: productData.description,
      images: productData.images,
      metadata: {
        category: productData.category,
        badge: productData.badge || '',
        handle: productData.handle,
        options: JSON.stringify(productData.options || []),
      },
    });

    // Create the price
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: productData.price,
      currency: 'usd',
    });

    return {
      product,
      price,
      success: true,
    };
  } catch (error) {
    console.error('Error creating Stripe product:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Example usage:
// const result = await createStripeProduct({
//   name: 'New Product',
//   description: 'Product description',
//   price: 9999, // $99.99
//   category: 'womens-ready-to-wear',
//   handle: 'new-product',
//   images: ['https://example.com/image.jpg'],
//   options: ['S', 'M', 'L']
// });
