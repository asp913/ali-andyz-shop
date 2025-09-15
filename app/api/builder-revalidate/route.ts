import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { revalidateTag } from 'next/cache'

const secret = process.env.BUILDER_WEBHOOK_SECRET!

function verifySignature(req: NextRequest, body: string) {
  const sig = req.headers.get('x-builder-signature') || ''
  const hmac = crypto.createHmac('sha256', secret)
  const digest = hmac.digest('hex')
  return (
    sig.length === digest.length &&
    crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(digest))
  )
}

export async function POST(req: NextRequest) {
  const raw = await req.text()
  if (!secret)
    return NextResponse.json({ error: 'Missing secret' }, { status: 500 })
  if (!verifySignature(req, raw))
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })

  // Revalidate Builder-driven content
  revalidateTag('builder:page')
  revalidateTag('builder:capsule')
  revalidateTag('builder:product')

  return NextResponse.json({ revalidated: true })
}

