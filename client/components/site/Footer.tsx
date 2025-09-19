export default function Footer() {
  return (
    <footer className="border-t border-border bg-[hsl(var(--background))]">
      <div className="container mx-auto py-10 text-sm text-foreground/70 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Aly + Andy Z Boutique</p>
        <p className="text-center md:text-right">Curated ready-to-wear and activewear for refined minimalists.</p>
      </div>
    </footer>
  );
}
