"use client";
"use client";

import { builder } from "@builder.io/sdk";
import { BuilderComponent } from "@builder.io/react";

// Ensure custom components are registered on the client
import "./register-bundle-size-picker";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

export default function BuilderRenderer({ content }: { content: any }) {
  return <BuilderComponent model="page" content={content} />;
}
