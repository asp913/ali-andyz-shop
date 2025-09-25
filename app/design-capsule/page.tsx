import { Metadata } from "next";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DesignYourOwnCapsule from "@/components/site/DesignYourOwnCapsule";

export const metadata: Metadata = {
  title: "Design Your Own Capsule | Ali + Andy Z",
  description: "Create a custom capsule wardrobe with our curated pieces.",
};

export default function DesignCapsulePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-light text-foreground tracking-wide">
              Design Your Own Capsule
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create a personalized capsule wardrobe with our carefully curated pieces. 
              Mix and match to express your unique style.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <DesignYourOwnCapsule category="womens-activewear" />
            <DesignYourOwnCapsule category="womens-ready-to-wear" />
            <DesignYourOwnCapsule category="mens-activewear" />
            <DesignYourOwnCapsule category="mens-ready-to-wear" />
          </div>

          <div className="pt-8">
            <Button variant="outline" className="rounded-sm" asChild>
              <Link href="/">Explore All Collections</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
