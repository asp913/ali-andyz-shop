import React from "react";
import Link from "next/link";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { fetchStripeProductsServer } from "@/lib/stripe";
import MensReadyToWearClient from "./MensReadyToWearClient";

export default async function MensReadyToWear() {
  // Fetch products dynamically from Stripe
  let products = [];
  let hasError = false;
  
  try {
    const response = await fetchStripeProductsServer('mens-ready-to-wear');
    products = response.products;
  } catch (error) {
    console.error('Error fetching men\'s ready-to-wear products:', error);
    hasError = true;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center bg-background">
        <div className="flex flex-col-reverse lg:flex-row max-w-7xl w-full items-center">
          <div className="flex flex-col justify-center px-8 py-16 lg:px-12 lg:py-0 flex-1 text-center lg:text-left">
            <p className="text-sm mb-2 text-muted-foreground tracking-[0.3em] uppercase">
              Back to Home
            </p>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-4 tracking-wide text-foreground">
              MEN'S COLLECTION
            </h1>
            <h2 className="text-2xl font-medium text-foreground/90 mb-4">
              Refined Masculinity. Effortless Style.
            </h2>
            <p className="text-base font-light text-muted-foreground max-w-lg mb-4">
              Thoughtfully crafted menswear that embodies confidence and
              sophistication, designed for the modern gentleman who appreciates
              quality and attention to detail.
            </p>

            <h3 className="mt-6 text-lg font-semibold">THE VISION</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Strength in Simplicity. Power in Purpose.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Andy's approach to menswear is rooted in the belief that true
              style emerges from authenticity. Each piece is designed to enhance
              the man who wears it, not overshadow him.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              From boardroom presentations to weekend escapes, these carefully
              curated pieces form the foundation of a wardrobe that works as
              hard as you do.
            </p>
            <blockquote className="mt-4 italic text-sm text-foreground/80">
              "Great style isn't about following trends—it's about knowing
              yourself." — Andy
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 w-max mx-auto lg:mx-0 mt-8">
              <a href="#collection" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary">
                Shop the Collection
              </a>
              <a href="/mens-ready-to-wear/lookbook" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm border border-border text-foreground hover:bg-card transition-all duration-300">
                View Lookbook
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[50vh] sm:h-[55vh] lg:h-[85vh] relative overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fb8a6edc5a9ee4e18beffdaeffb193bcf?format=webp&width=1600"
              alt="Men's collection — refined"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/6 to-transparent" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <MensReadyToWearClient products={products} hasError={hasError} />

      {/* Trust Signals */}
      <TrustSignals />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}