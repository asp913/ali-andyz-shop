import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('Missing STRIPE_SECRET_KEY');
  }
  return new Stripe(key, { apiVersion: '2025-08-27.basil' });
}

function getSiteUrl(request: NextRequest): string {
  return process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin || 'http://localhost:3000';
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { capsule, bundlePrice, items } = await request.json() as {
      capsule: string;
      bundlePrice: number;
      items: Array<{ handle: string; title: string; size: string | null; priceStripeId: string | null; requiredForBundle: boolean }>;
    };
    
    const BUNDLE_PRICE_ID = process.env.STRIPE_BUNDLE_PRICE_ID || '';

    let line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    if (BUNDLE_PRICE_ID) {
      line_items = [{ price: BUNDLE_PRICE_ID, quantity: 1 }];
    } else {
      const missing = (items || [])
        .filter((i) => i.requiredForBundle && !i.priceStripeId)
        .map((i) => i.title);
      if (missing.length) {
        return NextResponse.json({ error: `Missing Stripe price for: ${missing.join(', ')}` }, { status: 400 });
      }
      line_items = (items || [])
        .filter((i) => i.requiredForBundle && i.priceStripeId)
        .map((i) => ({ price: i.priceStripeId as string, quantity: 1 }));
    }

    if (!line_items.length) {
      return NextResponse.json({ error: 'No bundle line items' }, { status: 400 });
    }

    const SITE = getSiteUrl(request);
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      allow_promotion_codes: true,
      shipping_address_collection: { allowed_countries: ['US', 'CA'] },
      metadata: {
        capsule,
        kind: 'bundle',
        sizes: (items || []).map((i) => `${i.handle}:${i.size || 'NA'}`).join('|'),
        bundlePrice: String(bundlePrice ?? ''),
      },
      success_url: `${SITE}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE}/checkout/cancelled`,
    });
    
    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error('checkoutBundle error', e);
    return NextResponse.json({ error: e?.message || 'Bundle checkout error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed. Use POST.' }, { status: 405 });
}
