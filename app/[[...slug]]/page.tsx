import { notFound } from "next/navigation";
import { builder } from "@builder.io/sdk";
import BuilderRenderer from "../components/builder/BuilderRenderer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BuilderPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const urlPath = "/" + (params.slug?.join("/") ?? "");
  if (!params.slug || params.slug.length === 0) return notFound();

  const content = await builder
    .get("page", {
      userAttributes: { urlPath },
    })
    .toPromise();

  if (!content) return notFound();
  return <BuilderRenderer content={content} />;
}
