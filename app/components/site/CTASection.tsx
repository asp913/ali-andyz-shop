"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service (Klaviyo, Mailchimp, etc.)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-20 px-8 bg-brand-sand/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide mb-4">
          Stay Connected
        </h2>
        <p className="text-lg font-light text-muted-foreground mb-8 max-w-2xl mx-auto">
          Be the first to discover new collections, seasonal editorials, and exclusive access to capsule releases.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 text-sm border border-border bg-background rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Button
            type="submit"
            disabled={isSubmitted}
            className="px-6 py-3 text-sm tracking-[0.1em] uppercase rounded-sm"
          >
            {isSubmitted ? "Thank You!" : "Subscribe"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground font-light">
          By subscribing, you agree to receive marketing emails. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
