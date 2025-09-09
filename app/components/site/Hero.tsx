import Link from "next/link";

const ctas = [
  { href: "/womens-activewear", label: "Women's Activewear" },
  { href: "/womens-ready-to-wear", label: "Women's Ready to Wear" },
  { href: "/mens-activewear", label: "Men's Activewear" },
  { href: "/mens-ready-to-wear", label: "Men's Ready to Wear" },
];

export default function Hero() {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch pt-8">
      <div className="bg-brand-sand/50 p-8 sm:p-12 flex flex-col justify-center">
        <p className="uppercase tracking-[0.4em] text-xs text-foreground/60 mb-4">Welcome to</p>
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
          Ali + Andy Z <span className="block font-display italic text-foreground/70">Boutique</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-foreground/70 max-w-xl">
          Where refined aesthetics meet effortless elegance. Discover capsule collections that transcend seasons and speak
          to those who understand that true luxury lies in perfect curation and mindful living.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
          {ctas.map((c) => (
            <Link
              key={c.href}
              href={c.href as any}
              className="inline-flex items-center justify-center px-5 py-3 text-xs tracking-widest uppercase bg-foreground text-primary-foreground hover:opacity-90 transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="relative min-h-[34rem] lg:min-h-[44rem] bg-brand-tan">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fa0571368b4104835887bcada649dfca4?format=webp&width=1600"
          alt="Ali + Andy Z hero editorial"
          className="absolute inset-0 h-full w-full object-contain object-center"
        />
      </div>
    </section>
  );
}