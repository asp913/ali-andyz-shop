import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('Missing STRIPE_SECRET_KEY');
  }
  return new Stripe(key, { apiVersion: '2024-06-20' });
}

export async function GET(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { searchParams } = request.nextUrl;
    const category = searchParams.get('category') || 'all';
    const limit = parseInt(searchParams.get('limit') || '50');
    const active = searchParams.get('active') !== 'false';

    // Build query parameters
    const params: Stripe.ProductListParams = {
      limit,
      active,
      expand: ['data.default_price'],
    };

    // Get all products first, then filter by category
    const products = await stripe.products.list(params);

    // Transform Stripe products to our format
    const transformedProducts = products.data.map((product) => {
      const price = product.default_price as Stripe.Price | null;
      
      return {
        id: product.id,
        name: product.name,
        description: product.description || '',
        price: price ? (price.unit_amount || 0) / 100 : 0, // Convert from cents
        image: product.images?.[0] || '',
        images: product.images || [],
        badge: product.metadata?.badge || '',
        options: product.metadata?.options ? JSON.parse(product.metadata.options) : [],
        handle: product.metadata?.handle || product.id,
        stripePriceId: price?.id || '',
        category: product.metadata?.category || 'general',
        productType: product.metadata?.productType || 'general',
        active: product.active,
        created: product.created,
        updated: product.updated,
      };
    });

    // Filter by category if not 'all', and only show capsules on category pages
    const filteredProducts = category === 'all' 
      ? transformedProducts.filter(product => product.productType === 'capsule')
      : transformedProducts.filter(product => 
          product.category === category && 
          product.productType === 'capsule'
        );

    return NextResponse.json({
      products: filteredProducts,
      hasMore: products.has_more,
    });
  } catch (error: any) {
    console.error('Error fetching Stripe products:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
