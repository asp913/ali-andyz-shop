import { notFound } from 'next/navigation';

async function fetchBuilderHtml(path: string): Promise<string | null> {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY || process.env.BUILDER_PUBLIC_KEY;
  if (!apiKey) return null;
  const url = `https://cdn.builder.io/api/v1/html/page?apiKey=${apiKey}&url=${encodeURIComponent(path)}`;
  const res = await fetch(url, { next: { revalidate: 0 } });
  if (!res.ok) return null;
  const html = await res.text();
  if (!html || html.trim().length < 10) return null;
  return html;
}

export const dynamic = 'force-dynamic';

export default async function BuilderPage({ params }: { params: { page?: string[] } }) {
  const path = '/' + (params?.page?.join('/') || '');
  // Avoid taking over the homepage and known top-level routes that already exist
  if (!params?.page || params.page.length === 0) return notFound();

  const html = await fetchBuilderHtml(path);
  if (!html) return notFound();

  return (
    <main className="min-h-screen">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
