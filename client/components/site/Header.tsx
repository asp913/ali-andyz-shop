import { Link, NavLink } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";

const nav = [
  { to: "/womens-activewear", label: "Women's Activewear" },
  { to: "/womens-ready-to-wear", label: "Women's Ready to Wear" },
  { to: "/mens-activewear", label: "Men's Activewear" },
  { to: "/mens-ready-to-wear", label: "Men's Ready to Wear" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[hsl(var(--background))]/80 backdrop-blur border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="inline-flex items-end gap-2">
            <span className="text-xs tracking-[0.3em] uppercase text-foreground/70">Welcome to</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `whitespace-nowrap tracking-wide ${
                  isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label="Wishlist" className="p-2 rounded-full hover:bg-secondary">
              <Heart className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-secondary">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="py-2">
          <Link to="/" className="block">
            <div className="inline-flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight">Ali + Andy Z</span>
              <span className="font-display italic text-2xl text-foreground/70">Boutique</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
