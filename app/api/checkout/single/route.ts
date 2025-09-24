import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('Missing STRIPE_SECRET_KEY');
  }
  return new Stripe(key, { apiVersion: '2024-06-20' });
}

function getSiteUrl(request: NextRequest): string {
  return process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin || 'http://localhost:3000';
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { lineItems, metadata } = await request.json() as {
      lineItems: Stripe.Checkout.SessionCreateParams.LineItem[];
      metadata?: Record<string, string>;
    };
    
    if (!Array.isArray(lineItems) || !lineItems.length) {
      return NextResponse.json({ error: 'Missing line items' }, { status: 400 });
    }
    
    const SITE = getSiteUrl(request);
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      allow_promotion_codes: true,
      shipping_address_collection: { allowed_countries: ['US', 'CA'] },
      metadata,
      success_url: `${SITE}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE}/checkout/cancelled`,
    });
    
    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error('checkoutSingle error', e);
    return NextResponse.json({ error: e?.message || 'Checkout error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed. Use POST.' }, { status: 405 });
}
