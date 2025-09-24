import React from "react";
import Link from "next/link";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { fetchStripeProductsServer } from "@/lib/stripe";
import MensActivewearClient from "./MensActivewearClient";

export default async function MensActivewear() {
  // Fetch products dynamically from Stripe
  let products = [];
  let hasError = false;
  
  try {
    const response = await fetchStripeProductsServer('mens-activewear');
    products = response.products;
  } catch (error) {
    console.error('Error fetching men\'s activewear products:', error);
    hasError = true;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] overflow-hidden flex items-center justify-center bg-background">
        <div className="flex flex-col-reverse lg:flex-row max-w-7xl w-full items-center">
          <div className="flex flex-col justify-center px-8 py-12 lg:px-12 lg:py-0 flex-1 text-center lg:text-left">
            <p className="text-sm mb-4 text-muted-foreground tracking-[0.3em] uppercase">
              Back to Home
            </p>
            <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-4 tracking-wide text-foreground">
              MEN'S ACTIVEWEAR
            </h1>
            <h2 className="text-2xl font-medium text-foreground/90 mb-4">
              Train with Intention. Move with Power.
            </h2>
            <p className="text-base font-light tracking-wide mt-2 mb-4 text-muted-foreground max-w-lg">
              High-performance activewear engineered for the modern athlete who
              demands both functionality and sophisticated design in every
              workout.
            </p>

            <h3 className="mt-6 text-lg font-semibold">
              PERFORMANCE PHILOSOPHY
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Built for Champions. Designed for Life.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Our men's activewear collection is inspired by the mindset of
              elite athletes—the understanding that peak performance requires
              the right tools, the right mindset, and the right support system.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Every fabric choice, every cut, every detail is purposefully
              engineered to enhance your performance while maintaining the
              sophisticated aesthetic that defines the Aly + Andy brand.
            </p>
            <blockquote className="mt-4 italic text-sm text-foreground/80">
              "Excellence isn't a destination—it's a daily practice." — Andy
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 w-max mx-auto lg:mx-0 mt-8">
              <a href="#collection" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary">
                Shop Performance
              </a>
              <Link href="/mens-activewear/lookbook" className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm border border-border text-foreground hover:bg-card transition-all duration-300">
                View Lookbook
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[50vh] sm:h-[55vh] lg:h-[75vh] relative overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F8e82cfd54a0a4a5c9a6834c9b9c0a287?format=webp&width=1600"
              alt="Men's activewear duo practicing yoga"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/8 to-transparent" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <MensActivewearClient products={products} hasError={hasError} />

      {/* Trust Signals */}
      <TrustSignals />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}