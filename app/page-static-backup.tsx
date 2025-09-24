import Link from "next/link";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Hero Section */}
      <section className="min-h-[85vh] overflow-hidden flex items-center justify-center bg-background">
        <div className="flex flex-col-reverse lg:flex-row max-w-7xl w-full items-center">
          <div className="flex flex-col justify-center px-8 py-16 lg:px-12 lg:py-0 flex-1 text-center lg:text-left">
            <div className="text-sm mb-4 text-muted-foreground tracking-[0.3em] uppercase">Aly + Andy Z</div>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-4 tracking-wide text-foreground">
              Capsule uniforms for intentional living.
            </h1>
            <p className="text-lg font-light tracking-wide mt-6 mb-8 text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Clarity. Creativity. Mindfulness. Our Aly / Dali / Lami philosophy transforms getting dressed into a practice of balance. Each edition blends ready‑to‑wear and activewear into a wardrobe that moves effortlessly between studio, street, travel, and retreat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-max mx-auto lg:mx-0">
              <Link
                href="/womens-activewear"
                className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary"
              >
                Women's Activewear
              </Link>
              <Link
                href="/womens-ready-to-wear"
                className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary"
              >
                Women's Ready-to-Wear
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-max mt-4 mx-auto lg:mx-0">
              <Link
                href="/mens-activewear"
                className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary"
              >
                Men's Activewear
              </Link>
              <Link
                href="/mens-ready-to-wear"
                className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary"
              >
                Men's Ready-to-Wear
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[50vh] sm:h-[55vh] lg:h-[85vh] relative overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd99ca277a4a044bfbe6fb8efd2902e3f?format=webp&width=800"
              alt="Aly + Andy Z — couple look"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-8 bg-card">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide mb-4">Mindful Movement. Timeless Style.</h2>
            <p className="text-base font-light text-muted-foreground mb-6">Aly + Andy Z is not fast fashion. We create capsule collections — small‑batch, seasonless, versatile pieces designed for modern lives lived with intention.</p>
            <ul className="space-y-3 text-lg font-light text-muted-foreground">
              <li><strong className="text-foreground">Aly = Clarity.</strong> Minimal silhouettes, grounding tones, precision tailoring.</li>
              <li><strong className="text-foreground">Dali = Creativity.</strong> Playful accents, sculptural textures, art‑inspired expression.</li>
              <li><strong className="text-foreground">Lami = Mindfulness.</strong> Flowing fabrics, quiet luxury, ease of travel and retreat.</li>
            </ul>
            <p className="text-base text-muted-foreground mt-6">Together, they form our philosophy: clarity, creativity, and mindfulness woven into every edition.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative w-full aspect-square rounded-sm overflow-hidden">
                <img src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F42258aa582284482912ce600a327a8b9?format=webp&width=800" alt="Studio to street" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden">
                <img src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fa51a1398432a488683bed352903277b4?format=webp&width=800" alt="City travel" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
            <div className="mt-8">
              <div className="relative w-full aspect-[2/3] rounded-sm overflow-hidden">
                <img src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fa2b9c00553c942f5aa42304607a06c83?format=webp&width=800" alt="Resort retreat" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide mb-2">Move With Heart</h2>
          <p className="text-lg font-light text-muted-foreground max-w-3xl mx-auto">Through Aly's personal friendship with a monk in Manali, Himachal Pradesh, we help provide food, education, and a safe home for Tibetan refugee children.</p>
          <p className="text-base text-muted-foreground">Your style becomes their support.</p>
          <Link href="/our-impact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm uppercase tracking-wider text-sm mt-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">Learn More About Our Impact →</Link>
        </div>
      </section>

      {/* Lifestyle Worlds */}
      <section className="py-16 px-8 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div className="border border-border rounded-sm p-6">
            <h3 className="text-lg font-medium text-foreground mb-2">Studio → Street</h3>
            <p className="text-muted-foreground">Performance activewear that moves with you, from class to café.</p>
          </div>
          <div className="border border-border rounded-sm p-6">
            <h3 className="text-lg font-medium text-foreground mb-2">City → Travel</h3>
            <p className="text-muted-foreground">Tailored essentials that work in motion and at arrival.</p>
          </div>
          <div className="border border-border rounded-sm p-6">
            <h3 className="text-lg font-medium text-foreground mb-2">Resort → Retreat</h3>
            <p className="text-muted-foreground">Soft, elevated layers designed for mindfulness and restoration.</p>
          </div>
          <p className="md:col-span-3 text-sm text-muted-foreground">Each capsule transcends seasons. Each piece is designed to live many lives.</p>
        </div>
      </section>


      {/* Trust Signals (Luxury Reframe) */}
      <section className="py-16 px-8 bg-card">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          <div className="border border-border rounded-sm p-6"><div className="text-sm font-semibold text-foreground">Authenticity Guarantee</div><div className="text-muted-foreground">Every piece is curated and verified in‑house.</div></div>
          <div className="border border-border rounded-sm p-6"><div className="text-sm font-semibold text-foreground">Global Shipping</div><div className="text-muted-foreground">From New York & Los Angeles to the world.</div></div>
          <div className="border border-border rounded-sm p-6"><div className="text-sm font-semibold text-foreground">Growing Collective</div><div className="text-muted-foreground">Worn by capsule collectors and tastemakers.</div></div>
        </div>
      </section>

      {/* Join the Collective */}
      <section className="bg-card py-20 px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide">Never Miss a Capsule.</h2>
          <p className="text-lg text-muted-foreground">Join an exclusive circle for early access to editions, editorial stories, and private cultural events.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 px-6 py-4 border border-border rounded-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:ring-1 focus:ring-ring transition-all" />
            <button className="px-8 py-4 rounded-sm uppercase tracking-wider text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">Join Now</button>
          </div>
          <p className="text-sm text-muted-foreground">Aly + Andy Z is not mass fashion. It's a philosophy, a practice, a uniform for intentional living. Welcome to the collective.</p>
        </div>
      </section>

      <CTASection />
      <ContactSection />
    </main>
  );
}