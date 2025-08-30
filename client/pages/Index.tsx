import { Link } from "react-router-dom";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";

export default function Index() {
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
                to="/womens-activewear"
                className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary"
              >
                Women's Activewear
              </Link>
              <Link
                to="/womens-ready-to-wear"
                className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary"
              >
                Women's Ready to Wear
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-max mt-4 mx-auto lg:mx-0">
              <Link
                to="/mens-activewear"
                className="py-3 px-6 text-sm tracking-[0.1em] uppercase rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border border-primary"
              >
                Men's Activewear
              </Link>
              <Link
                to="/mens-ready-to-wear"
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
                    src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fee7b8ac9c32047f08d3b1dfb992057fb?format=webp&width=800"
                    alt="Resort lifestyle"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7679450/pexels-photo-7679450.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Elegant resort setting"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8">
                <div className="relative w-full aspect-[2/3] rounded-sm overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6311628/pexels-photo-6311628.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Lifestyle editorial"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />
      <CTASection />
      <ContactSection />
    </main>
  );
}
