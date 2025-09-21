'use client';

import { XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CheckoutCancelledPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Cancelled</h1>
        <p className="text-gray-600 mb-6">
          Your order was cancelled. No charges have been made to your account.
        </p>
        <div className="space-y-3">
          <Link href="/">
            <Button className="w-full">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="outline" className="w-full">
              Return to Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
