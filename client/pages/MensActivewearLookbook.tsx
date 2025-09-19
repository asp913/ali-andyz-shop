import { Link } from "react-router-dom";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { mensActivewearProducts } from "@/lib/mens-activewear-products";

export default function MensActivewearLookbook() {
  const gallery = mensActivewearProducts.slice(0, 4);
  const heroImage = "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F8e82cfd54a0a4a5c9a6834c9b9c0a287?format=webp&width=2000";
  const lifestyleA = "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F20022d62b84f4f488e54b7428e05641c?format=webp&width=800";
  const lifestyleB = "https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F3b3cf89cd5194c6d9509e4157566e8ac?format=webp&width=800";

  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 pt-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground">Men’s Activewear Lookbook</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">Editorial looks styled from our men’s active capsules. Shop the full kit or mix individual pieces.</p>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 py-8">
        <div className="max-w-6xl mx-auto rounded-sm overflow-hidden relative bg-card">
          {heroImage ? (
            <img src={heroImage} alt="Men’s Activewear editorial hero" className="w-full h-[70vh] md:h-[82vh] lg:h-[90vh] object-cover" style={{ objectPosition: 'center 45%' }} loading="lazy" />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-10 text-background">
            <div className="text-lg md:text-xl">Power • Focus • Movement</div>
            <Link to="/mens-activewear#collection" className="mt-3 inline-block bg-background text-foreground px-4 py-2 rounded-sm text-sm">Shop Performance →</Link>
          </div>
        </div>
      </section>

      {/* Looks Grid */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {gallery.map((p) => (
            <div key={p.id} className="group rounded-sm overflow-hidden border border-border bg-card">
              <div className="relative">
                <img src={(p.images?.[1] || p.images?.[0] || p.image)} alt={p.name} className="w-full h-96 md:h-[30rem] lg:h-[36rem] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground truncate pr-3">{p.name}</div>
                <Link to={`/product/${p.id}`} className="text-sm underline whitespace-nowrap">Shop This Look →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="relative rounded-sm overflow-hidden bg-card">
            {lifestyleA ? (
              <img src={lifestyleA} alt="Lifestyle detail — training focus" className="w-full h-96 md:h-[30rem] lg:h-[36rem] object-cover" loading="lazy" />
            ) : null}
            <div className="absolute bottom-3 left-3 right-3 text-background">
              <div className="inline-block bg-black/50 px-3 py-1 rounded-sm text-sm">Layer. Train. Travel.</div>
            </div>
          </div>
          <div className="relative rounded-sm overflow-hidden bg-card">
            {lifestyleB ? (
              <img src={lifestyleB} alt="Lifestyle detail — performance texture" className="w-full h-96 md:h-[30rem] lg:h-[36rem] object-cover" loading="lazy" />
            ) : null}
          </div>
        </div>
      </section>

      <TrustSignals />
      <CTASection />
      <ContactSection />
    </main>
  );
}
