import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const heroUrl = 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fcdf1740507804103b17945139ee0c313?format=webp&width=2000';
const reportUrl = 'https://cdn.builder.io/o/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F4a3d59ab29334d48a9a01fd3a64b8cab?alt=media&token=8880a48b-3859-406c-8ffe-8a3fad6b2823&apiKey=514b6cfd929047f0b5e645c455c5c65f';

const Impact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section
        className="relative h-[60vh] lg:h-[70vh] w-full"
        style={{ backgroundImage: `url(${heroUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-end pb-10">
          <div className="text-white">
            <div className="text-xs tracking-widest uppercase opacity-90 mb-2">Our Impact</div>
            <h1 className="text-4xl lg:text-6xl font-light">Shop With Purpose. Move With Heart.</h1>
            <p className="mt-4 max-w-2xl text-white/90">
              Every purchase creates ripples of change for children at Bön Children's Home in Himachal Pradesh, India.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/womens-ready-to-wear"><Button variant="default">Shop Women&apos;s</Button></Link>
              <Link to="/mens-ready-to-wear"><Button variant="secondary" className="bg-white/90 text-black hover:bg-white">Shop Men&apos;s</Button></Link>
            </div>
          </div>
        </div>
      </section>
      {/* BODY */}
      <section className="px-6 py-16 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-light text-foreground">Bön Children&apos;s Home</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A sanctuary in the Himalayan foothills providing shelter, education, and care for 280 Tibetan refugee children and orphans.
          </p>
          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-sm border border-border p-6 text-center">
              <div className="text-4xl font-light text-foreground">280</div>
              <div className="text-sm text-muted-foreground mt-1">Children Supported</div>
            </div>
            <div className="rounded-sm border border-border p-6 text-center">
              <div className="text-4xl font-light text-foreground">100%</div>
              <div className="text-sm text-muted-foreground mt-1">School Attendance</div>
            </div>
            <div className="rounded-sm border border-border p-6 text-center">
              <div className="text-4xl font-light text-foreground">1</div>
              <div className="text-sm text-muted-foreground mt-1">Safe Home Filled with Love</div>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <section className="px-6 py-16 bg-card mt-12">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-6">How Your Purchase Creates Change</h3>

              <div className="grid gap-8 items-start md:grid-cols-2">
                <div className="text-lg font-light text-muted-foreground leading-relaxed space-y-4">
                  <p><strong className="text-foreground">You Shop</strong> — Choose from our capsule collections.</p>
                  <p><strong className="text-foreground">We Give</strong> — A portion of proceeds goes directly to Bön Children's Home.</p>
                  <p><strong className="text-foreground">Lives Change</strong> — Children receive food, education, shelter, and community.</p>

                  <blockquote className="mt-6 italic text-lg text-muted-foreground">&quot;If you want others to be happy, practice compassion. If you want to be happy, practice compassion.&quot;
                    <span className="block mt-3 not-italic text-sm text-muted-foreground">— His Holiness the Dalai Lama</span>
                  </blockquote>

                  <div className="mt-8">
                    <h4 className="text-xl font-light text-foreground mb-2">Why It Matters</h4>
                    <p className="text-lg text-muted-foreground">When you choose <strong className="text-foreground">Aly &amp; Andy Z</strong>, you&apos;re not only investing in beautifully designed pieces — you&apos;re investing in a more compassionate world.</p>
                    <Link to="/" className="inline-flex items-center justify-center px-6 py-3 rounded-sm uppercase tracking-wider text-sm mt-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">Explore Capsules With Purpose →</Link>
                  </div>
                </div>

                <div className="rounded-sm overflow-hidden bg-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F2f5fba531405410d9049e3a55e3ad743?format=webp&width=800"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F2f5fba531405410d9049e3a55e3ad743?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F2f5fba531405410d9049e3a55e3ad743?format=webp&width=1600 1600w"
                    sizes="(max-width: 640px) 100vw, 420px"
                    alt="Dalai Lama"
                    className="w-full h-64 md:h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default Impact;
