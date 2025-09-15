"use client";

import React from "react";
import { BuilderComponent } from "@builder.io/react";

type BuilderRenderProps = {
  content: any;
};

export default function BuilderRender({ content }: BuilderRenderProps) {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY as string | undefined;
  if (!apiKey) {
    return <div style={{ padding: 20 }}>Missing NEXT_PUBLIC_BUILDER_API_KEY</div>;
  }
  return <BuilderComponent model="page" apiKey={apiKey} content={content} />;
}


