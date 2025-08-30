import { Link, useLocation } from "react-router-dom";

export default function CollectionPlaceholder() {
  const { pathname } = useLocation();
  const title = pathname
    .replace(/\//g, " ")
    .trim()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-4 text-foreground/70 max-w-2xl">
        This collection page is ready for products and filters. Tell me what data source you want to use and we'll connect
        it, or provide a Figma and we'll build the full browsing experience.
      </p>
      <div className="mt-8">
        <Link to="/" className="underline hover:no-underline">Back to home</Link>
      </div>
    </main>
  );
}
