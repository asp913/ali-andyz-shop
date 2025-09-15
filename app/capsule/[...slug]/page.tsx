import BuilderRender from "@/components/BuilderRender";

type Params = { slug?: string[] };

export const dynamic = 'force-dynamic'
export const revalidate = 60

export function generateETag() {
  return `"${Date.now()}"`
}

async function fetchBuilderPage(path: string) {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
  if (!apiKey) return null;

  const url = `https://cdn.builder.io/api/v3/content/page?apiKey=${apiKey}&url=${encodeURIComponent(
    path
  )}&_t=${Date.now()}`;
  const res = await fetch(url, { next: { tags: ["builder:page"], revalidate } });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.results?.[0] ?? null;
}

export default async function CapsuleCatchAllPage({ params }: { params: Params }) {
  const slugPath = (params.slug?.join("/") ?? "");
  const path = "/capsule/" + slugPath;
  const content = await fetchBuilderPage(path);

  if (!content) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl">Not found</h1>
        <p className="text-muted-foreground">No Builder content for: {path}</p>
      </div>
    );
  }

  return <BuilderRender content={content} />;
}


