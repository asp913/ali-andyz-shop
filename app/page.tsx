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
            <div className="text-sm mb-4 text-muted-foreground tracking-[0.3em] uppercase">Welcome to</div>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-4 tracking-wide text-foreground">
              Ali + Andy Z<br />
              <span className="font-display italic text-foreground/80">Boutique</span>
            </h1>
            <p className="text-lg font-light tracking-wide mt-6 mb-8 text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Where refined aesthetics meet effortless elegance. Discover capsule collections that transcend seasons and speak
              to those who understand that true luxury lies in perfect curation and mindful living.
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
                Women's Ready to Wear
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
                Men's Ready to Wear
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[50vh] sm:h-[55vh] lg:h-[85vh] relative overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fa0571368b4104835887bcada649dfca4?format=webp&width=1600"
              alt="Ali + Andy Z — couple look"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide mb-4">
                Mindful Movement.<br />Timeless Style.
              </h2>
              <p className="text-base font-light text-muted-foreground mb-8 italic">
                Quality and purpose-driven fashion, thoughtfully priced for the modern wardrobe.
              </p>
              <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Ali Activewear</strong> — Where performance meets purpose. Elevated
                  essentials designed for studio, street, and travel.
                </p>
                <p>
                  <strong className="text-foreground">Ali & Andy</strong> — Capsule collections curated by real people, for
                  real life.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative w-full aspect-square rounded-sm overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F42258aa582284482912ce600a327a8b9?format=webp&width=800"
                    alt="Resort suite lifestyle"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fa51a1398432a488683bed352903277b4?format=webp&width=800"
                    alt="Mindful lounge moments"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8">
                <div className="relative w-full aspect-[2/3] rounded-sm overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fa2b9c00553c942f5aa42304607a06c83?format=webp&width=800"
                    alt="Mindful wellness retreat"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back Section */}
      <section className="py-20 px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide mb-6">
              Giving Back: Every Purchase Makes a Difference
            </h2>
            <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p>
                We proudly support <strong className="text-foreground">Bön Children's Home</strong>, a sanctuary for 280
                Tibetan refugee children and orphans in Himachal Pradesh, India. Your purchases help provide food, education,
                and a loving home to these resilient young souls.
              </p>
              <p className="text-foreground font-normal text-xl">Shop with purpose. Move with heart.</p>
            </div>
            <Link
              href="/our-impact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-sm uppercase tracking-wider text-sm mt-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Learn More About Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Signals with Testimonials */}
      <section className="py-16 px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="sr-only">Trust & Social Proof</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-border rounded-sm p-5">
              <div className="text-sm font-semibold text-foreground">Secure Shopping</div>
              <div className="text-muted-foreground">SSL encrypted checkout</div>
            </div>
            <div className="border border-border rounded-sm p-5">
              <div className="text-sm font-semibold text-foreground">Authenticity Guarantee</div>
              <div className="text-muted-foreground">Every piece verified</div>
            </div>
            <div className="border border-border rounded-sm p-5">
              <div className="text-sm font-semibold text-foreground">50,000+ Happy Customers</div>
              <div className="text-muted-foreground">Worldwide community</div>
            </div>
            <div className="border border-border rounded-sm p-5">
              <div className="text-sm font-semibold text-foreground">Global Shipping</div>
              <div className="text-muted-foreground">Delivery worldwide</div>
            </div>
            <div className="border border-border rounded-sm p-5 lg:col-span-2">
              <div className="text-sm font-semibold text-foreground">4.9/5 from 2,847 reviews</div>
              <div className="text-muted-foreground">Real feedback from our community</div>
            </div>
          </div>

          {/* Featured testimonial */}
          <figure className="mt-10 border border-border rounded-sm p-6 bg-background">
            <blockquote className="text-lg text-foreground leading-relaxed">
              "Absolutely love the unique pieces! Never seen anything like this elsewhere."
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted-foreground">— Sarah M.</figcaption>
          </figure>
        </div>
      </section>

      {/* Enhanced Signup Banner */}
      <section className="bg-card py-20 px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-sm mb-4 text-muted-foreground tracking-[0.3em] uppercase">Join the Collective</h2>
            <h3 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide mb-4">Never Miss a Drop</h3>
            <p className="text-lg text-muted-foreground">
              Join an exclusive circle of those who appreciate thoughtful design and authentic luxury
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-4 border border-border rounded-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:ring-1 focus:ring-ring transition-all"
            />
            <button className="px-8 py-4 rounded-sm uppercase tracking-wider text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
              Join Now
            </button>
          </div>
        </div>
      </section>

      <CTASection />
      <ContactSection />
    </main>
  );
}