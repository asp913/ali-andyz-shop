import Hero from "@/components/site/Hero";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/womens-ready-to-wear"
            className="group relative aspect-[4/3] overflow-hidden bg-secondary"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fee7b8ac9c32047f08d3b1dfb992057fb?format=webp&width=1200"
              alt="Women's & Men's Ready to Wear"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute left-4 bottom-4">
              <span className="inline-block bg-foreground text-primary-foreground px-4 py-2 text-xs tracking-widest uppercase">
                Women's Ready to Wear
              </span>
            </div>
          </a>
          <a
            href="/womens-activewear"
            className="group relative aspect-[4/3] overflow-hidden bg-secondary"
          >
            <img
              src="https://images.pexels.com/photos/7679450/pexels-photo-7679450.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Women's activewear"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute left-4 bottom-4">
              <span className="inline-block bg-foreground text-primary-foreground px-4 py-2 text-xs tracking-widest uppercase">
                Women's Activewear
              </span>
            </div>
          </a>
          <a href="/mens-ready-to-wear" className="group relative aspect-[4/3] overflow-hidden bg-secondary">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fee7b8ac9c32047f08d3b1dfb992057fb?format=webp&width=1200"
              alt="Men's Ready to Wear"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute left-4 bottom-4">
              <span className="inline-block bg-foreground text-primary-foreground px-4 py-2 text-xs tracking-widest uppercase">
                Men's Ready to Wear
              </span>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
