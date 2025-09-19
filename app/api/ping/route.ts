import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const ping = process.env.PING_MESSAGE ?? "ping";
  return NextResponse.json({ message: ping });
}
