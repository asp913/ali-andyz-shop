import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const key = process.env.NEXT_PUBLIC_BUILDER_API_KEY || process.env.BUILDER_PUBLIC_KEY;
  return NextResponse.json({
    hasKey: Boolean(key),
    keyPrefix: key ? key.slice(0, 6) : null,
    env: process.env.VERCEL_ENV || process.env.NODE_ENV || 'development',
  });
}
