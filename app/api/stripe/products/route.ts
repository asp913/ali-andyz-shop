import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('Missing STRIPE_SECRET_KEY');
  }
  return new Stripe(key, { apiVersion: '2025-08-27.basil' });
}

export async function GET(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { searchParams } = request.nextUrl;
    const category = searchParams.get('category') || 'all';
    const limit = parseInt(searchParams.get('limit') || '100');
    const active = searchParams.get('active') !== 'false';

    // Build query parameters
    const params: Stripe.ProductListParams = {
      limit,
      active,
      expand: ['data.default_price'],
    };

    // Get all products using pagination, then filter by category
    let allProducts = [];
    let hasMore = true;
    let startingAfter = undefined;

    while (hasMore) {
      const paginatedParams = { ...params };
      if (startingAfter) {
        paginatedParams.starting_after = startingAfter;
      }

      const products = await stripe.products.list(paginatedParams);
      allProducts = allProducts.concat(products.data);
      hasMore = products.has_more;
      
      if (hasMore && products.data.length > 0) {
        startingAfter = products.data[products.data.length - 1].id;
      }
    }

    const products = { data: allProducts, has_more: false };

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
      timestamp: new Date().toISOString(),
      totalProducts: filteredProducts.length
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error: any) {
    console.error('Error fetching Stripe products:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
