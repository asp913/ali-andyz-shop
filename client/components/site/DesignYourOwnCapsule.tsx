import React from "react";
"use client";

import { Button } from "@/components/ui/button";

interface DesignYourOwnCapsuleProps {
  category: "womens-activewear" | "mens-activewear" | "womens-ready-to-wear" | "mens-ready-to-wear";
}

const capsuleContent = {
  "womens-activewear": {
    title: "Design Your Own Capsule",
    subhead: "Build your active set your way.",
    blurb: "Pick your favorites from this collection. 4–5 items = 15% off · 6+ = 20% off at checkout.",
    buttonText: "Start Your Capsule",
    buttonLink: "#", // TODO: Replace with Stripe Payment Link for Women's Activewear
    image: "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7c72cba2bec84afeb23488db6ae39c36?format=webp&width=800",
    altText: "Collage of women's activewear pieces for custom capsule"
  },
  "mens-activewear": {
    title: "Design Your Own Capsule",
    subhead: "Performance, your rules.",
    blurb: "Choose your essentials. 4–5 items = 15% off · 6+ = 20% off at checkout.",
    buttonText: "Start Your Capsule",
    buttonLink: "#", // TODO: Replace with Stripe Payment Link for Men's Activewear
    image: "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F8e82cfd54a0a4a5c9a6834c9b9c0a287?format=webp&width=800",
    altText: "Collage of men's activewear pieces"
  },
  "womens-ready-to-wear": {
    title: "Design Your Own Capsule",
    subhead: "Curate your RTW edit.",
    blurb: "Mix silhouettes and textures you love. 4–5 items = 15% off · 6+ = 20% off at checkout.",
    buttonText: "Start Your Capsule",
    buttonLink: "#", // TODO: Replace with Stripe Payment Link for Women's RTW
    image: "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fc9101c7c477c4f21ade2a9a927bd0b95?format=webp&width=800",
    altText: "Collage of women's ready-to-wear pieces"
  },
  "mens-ready-to-wear": {
    title: "Design Your Own Capsule",
    subhead: "Your daily uniform—custom.",
    blurb: "Build your capsule from this collection. 4–5 items = 15% off · 6+ = 20% off at checkout.",
    buttonText: "Start Your Capsule",
    buttonLink: "#", // TODO: Replace with Stripe Payment Link for Men's RTW
    image: "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fb8a6edc5a9ee4e18beffdaeffb193bcf?format=webp&width=800",
    altText: "Collage of men's ready-to-wear pieces"
  }
};

export default function DesignYourOwnCapsule({ category }: DesignYourOwnCapsuleProps) {
  const content = capsuleContent[category];

  return (
    <section className="py-12 px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="border border-border rounded-sm overflow-hidden bg-background">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-[4/5] md:aspect-auto">
              <img
                src={content.image}
                alt={content.altText}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-3">
                {content.title}
              </h2>
              <h3 className="text-lg text-foreground/90 mb-4">
                {content.subhead}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {content.blurb}
              </p>
              <Button 
                className="w-fit rounded-sm"
                onClick={() => window.open(content.buttonLink, '_blank')}
              >
                {content.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
