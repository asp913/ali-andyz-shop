import { Link } from "react-router-dom";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { readyToWearProducts } from "@/lib/ready-to-wear-products";

export default function WomensRTWLookbook() {
  const gallery = (() => {
    const arr = readyToWearProducts.slice(0, 6);
    const a = arr.findIndex((p) => p.id === 'rtw-008'); // Soft Landing
    const b = arr.findIndex((p) => p.id === 'rtw-007'); // Cosmic Elegance
    if (a !== -1 && b !== -1) {
      const tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    }
    return arr.slice(0, 4);
  })();
  const heroImage = "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Ff17ae498594a4a2c88f32d221c0fd76c?format=webp&width=2000&v=1";
  const lifestyleA = "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F625d681b373a412898b8c80737a75714?format=webp&width=800";
  const lifestyleB = "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F2b1dc4cea526400cabad8ac484cf5d82?format=webp&width=800";

  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 pt-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground">Curated Looks for Every Moment</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">Explore our ready-to-wear edits styled together. Each piece is hand-selected to mix effortlessly into your wardrobe.</p>
        </div>
      </section>

      {/* Section 1 – Hero Spread */}
      <section className="px-6 py-8">
        <div className="max-w-6xl mx-auto rounded-sm overflow-hidden relative bg-card">
          {heroImage ? (
            <img src={heroImage} alt="Ready-to-Wear editorial hero" className="w-full h-[70vh] md:h-[82vh] lg:h-[90vh] object-cover" style={{ objectPosition: 'center 40%' }} loading="lazy" />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-10 text-background">
            <div className="text-lg md:text-xl">Ready-to-Wear Edit — Everyday polish with elevated ease</div>
            <Link to="/womens-ready-to-wear" className="mt-3 inline-block bg-background text-foreground px-4 py-2 rounded-sm text-sm">Shop the Collection →</Link>
          </div>
        </div>
      </section>

      {/* Section 2 – Grid Gallery */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {gallery.map((p) => (
            <div key={p.id} className="group rounded-sm overflow-hidden border border-border bg-card">
              <div className="relative">
                <img src={(p.images?.[1] || p.images?.[0] || p.image)} alt={p.name} className="w-full h-96 md:h-[30rem] lg:h-[36rem] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-3 left-3 right-3 text-background opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-sm">The Draped Blazer & Silk Cami</div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground truncate pr-3">{p.name}</div>
                <Link to={`/product/${p.id}`} className="text-sm underline whitespace-nowrap">Shop This Look →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 – Lifestyle Detail */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="relative rounded-sm overflow-hidden bg-card">
            {lifestyleA ? (
              <img src={lifestyleA} alt="Lifestyle detail — texture and movement" className="w-full h-96 md:h-[30rem] lg:h-[36rem] object-cover" loading="lazy" />
            ) : null}
            <div className="absolute bottom-3 left-3 right-3 text-background">
              <div className="inline-block bg-black/50 px-3 py-1 rounded-sm text-sm">Pieces curated to layer, mix, and travel effortlessly.</div>
            </div>
          </div>
          <div className="relative rounded-sm overflow-hidden bg-card">
            {lifestyleB ? (
              <img src={lifestyleB} alt="Lifestyle detail — accessory close-up" className="w-full h-96 md:h-[30rem] lg:h-[36rem] object-cover" loading="lazy" />
            ) : null}
          </div>
        </div>
      </section>

      {/* Section 4 – Callout / CTA */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl md:text-3xl font-light text-foreground">Discover your ready-to-wear essentials.</div>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link to="/womens-ready-to-wear" className="inline-block bg-foreground text-background px-5 py-3 rounded-sm">Shop Ready-to-Wear →</Link>
            <Link to="/book-session" className="inline-block border border-border px-5 py-3 rounded-sm">Book a Styling Session →</Link>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">Limited runs. Each edit is curated for exclusivity.</div>
        </div>
      </section>

      <TrustSignals />
      <CTASection />
      <ContactSection />
    </main>
  );
}
