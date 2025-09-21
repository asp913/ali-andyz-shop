import type { Metadata } from 'next'
import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import ClientLayout from "./ClientLayout";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: 'Ali + Andy Z | Premium Fashion & Activewear',
    template: '%s | Ali + Andy Z'
  },
  description: 'Shop premium fashion and activewear at Ali + Andy Z. High-quality clothing designed for comfort, style, and performance. Free shipping on orders over $100.',
  keywords: [
    'fashion',
    'activewear',
    'ready-to-wear',
    'premium clothing',
    'women\'s fashion',
    'men\'s fashion',
    'athletic wear',
    'yoga wear',
    'Ali + Andy Z'
  ],
  authors: [{ name: 'Ali + Andy Z' }],
  creator: 'Ali + Andy Z',
  publisher: 'Ali + Andy Z',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Ali + Andy Z',
    title: 'Ali + Andy Z | Premium Fashion & Activewear',
    description: 'Shop premium fashion and activewear at Ali + Andy Z. High-quality clothing designed for comfort, style, and performance.',
    images: [
      {
        url: 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7dc6421f0d6144a29d16812342ff4701?format=webp&width=1200',
        width: 1200,
        height: 630,
        alt: 'Ali + Andy Z - Premium Fashion & Activewear',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali + Andy Z | Premium Fashion & Activewear',
    description: 'Shop premium fashion and activewear at Ali + Andy Z. High-quality clothing designed for comfort, style, and performance.',
    images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7dc6421f0d6144a29d16812342ff4701?format=webp&width=1200'],
    creator: '@aliandyz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'fashion',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
