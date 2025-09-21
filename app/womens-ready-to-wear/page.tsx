import React from "react";
import Link from "next/link";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { fetchStripeProductsServer } from "@/lib/stripe";
import WomensReadyToWearClient from "./WomensReadyToWearClient";

export default async function WomensReadyToWear() {
  // Fetch products dynamically from Stripe
  let products = [];
  let hasError = false;
  
  try {
    const response = await fetchStripeProductsServer('womens-ready-to-wear');
    products = response.products;
  } catch (error) {
    console.error('Error fetching women\'s ready-to-wear products:', error);
    hasError = true;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-card py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <p className="text-sm tracking-wider uppercase text-foreground/70 mb-2">
              Back to Home
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              WOMEN'S COLLECTION
            </h2>
            <h3 className="text-2xl font-light text-foreground/90 mb-4">
              Timeless Elegance. Modern Sophistication.
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              Curated ready-to-wear pieces that effortlessly transition from
              boardroom to bistro, designed for the contemporary woman who
              values both style and substance.
            </p>

            <h4 className="mt-6 text-lg font-medium">THE PHILOSOPHY</h4>
            <h5 className="text-base font-semibold text-foreground/90">
              Elegance Redefined. Confidence Cultivated.
            </h5>
            <p className="text-sm text-muted-foreground mt-2">
              Our women's ready-to-wear collection celebrates the multifaceted
              nature of modern femininity. Each piece is designed to empower and
              inspire, bridging the gap between timeless elegance and
              contemporary edge.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              From boardroom meetings to evening soirées, these carefully
              curated designs adapt to your lifestyle while maintaining an
              unwavering commitment to sophistication and quality.
            </p>
            <blockquote className="mt-4 italic text-sm text-foreground/80">
              "True style is about expressing your authentic self with
              confidence." — Aly
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 w-max mx-auto md:mx-0 mt-8">
              <a href="#collection" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary">
                Shop the Collection
              </a>
              <Link href="/womens-ready-to-wear/lookbook" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm border border-border text-foreground hover:bg-card transition-all duration-300">
                View Lookbook
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="rounded-sm overflow-hidden bg-card">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fc9101c7c477c4f21ade2a9a927bd0b95?format=webp&width=1600"
                alt="Women's Ready to Wear — collection"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drop One – Promo */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Drop One – Endless August
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resort-ready silhouettes at boutique prices. Curated pieces from
            Madison Ave, St. Tropez and New Delhi.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <WomensReadyToWearClient products={products} hasError={hasError} />

      {/* Trust Signals */}
      <TrustSignals />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}