import { Metadata } from "next";
import Link from "next/link";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { fetchStripeProductsServer } from "@/lib/stripe";
import WomensActivewearClient from "./WomensActivewearClient";

export const metadata: Metadata = {
  title: "Women's Activewear | Ali + Andy Z",
  description: "Shop premium women's activewear at Ali + Andy Z. High-quality athletic wear designed for comfort and style. Free shipping on orders over $100.",
  keywords: "womens activewear, athletic wear, workout clothes, yoga wear, fitness apparel, Ali + Andy Z",
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
    canonical: '/womens-activewear',
  },
  openGraph: {
    title: "Women's Activewear | Ali + Andy Z",
    description: "Shop premium women's activewear at Ali + Andy Z. High-quality athletic wear designed for comfort and style.",
    url: '/womens-activewear',
    siteName: 'Ali + Andy Z',
    images: [
      {
        url: 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7dc6421f0d6144a29d16812342ff4701?format=webp&width=1200',
        width: 1200,
        height: 630,
        alt: "Women's Activewear Collection",
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Women's Activewear | Ali + Andy Z",
    description: "Shop premium women's activewear at Ali + Andy Z. High-quality athletic wear designed for comfort and style.",
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
};

export default async function WomensActivewear() {
  // Fetch products dynamically from Stripe
  let products: any[] = [];
  let hasError = false;

  try {
    const response = await fetchStripeProductsServer('womens-activewear');
    products = response.products;
  } catch (error) {
    console.error('Error fetching women\'s activewear products:', error);
    hasError = true;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-card">
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7c72cba2bec84afeb23488db6ae39c36?format=webp&width=1600"
            alt="Two people practicing yoga at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            Performance Meets
            <br />
            Feminine Power.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light opacity-95">
            Activewear that honors your strength and celebrates your grace.
            Designed for women who move through life with confidence and
            intention.
          </p>
        </div>
      </section>

      {/* Founder Journey */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              The Founder's Journey
            </h2>
            <h3 className="text-base text-muted-foreground mb-4">
              From Sacred Practice to Performance Design
            </h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Aly's activewear vision was born from decades of creating
              trauma-informed yoga programs across top universities and her
              profound spiritual journey, including a life-changing ascension
              with the Dalai Lama. Her belief? True performance emerges from
              harmony between body, mind, and spirit. Each design reflects this,
              where every seam, fabric, and silhouette supports the sacred act
              of mindful movement.
            </p>
            <blockquote className="mt-6 italic text-sm text-muted-foreground">
              "When you move with intention, your clothing should support that
              intention." — Aly
            </blockquote>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-max">
              <a href="#collection" className="py-2.5 px-5 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary">Shop Performance</a>
              <Link href="/womens-activewear/lookbook" className="py-2.5 px-5 text-sm tracking-[0.1em] uppercase rounded-sm border border-border text-foreground hover:bg-card transition-all duration-300">View Lookbook</Link>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="w-full h-64 md:h-80 lg:h-96 rounded-sm overflow-hidden bg-card">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7c72cba2bec84afeb23488db6ae39c36?format=webp&width=1200"
                alt="Founder practicing mindful movement"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mindful Movement Intro */}
      <section className="py-12 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-medium mb-3">Mindful Movement</h3>
          <p className="text-muted-foreground">
            Experience the perfect harmony of luxury and performance in every
            piece, designed for your wellness journey.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <WomensActivewearClient products={products} hasError={hasError} />

      {/* Trust Signals */}
      <TrustSignals />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
