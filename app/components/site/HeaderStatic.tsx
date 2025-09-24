import Link from "next/link";

const nav = [
  { href: "/womens-activewear", label: "Women's Activewear" },
  { href: "/womens-ready-to-wear", label: "Women's Ready to Wear" },
  { href: "/mens-activewear", label: "Men's Activewear" },
  { href: "/mens-ready-to-wear", label: "Men's Ready to Wear" },
];

export default function HeaderStatic() {
  console.log('HeaderStatic component is rendering');
  
  return (
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 40, 
      backgroundColor: '#ff0000', 
      borderBottom: '3px solid #000000',
      padding: '0.75rem 0',
      minHeight: '80px'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="inline-flex items-end gap-2">
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500">Welcome to</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap tracking-wide text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label="Wishlist" className="p-2 rounded-full hover:bg-gray-100">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-gray-100">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </button>
          </div>
        </div>
        <div className="py-2">
          <Link href="/" className="block">
            <div className="inline-flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Aly + Andy Z</span>
              <span className="font-serif italic text-2xl text-gray-600">Boutique</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
