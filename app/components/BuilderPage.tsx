"use client";

import { builder, BuilderComponent } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderPageProps {
  model?: string;
  content?: any;
  url?: string;
}

export default function BuilderPage({ model = "page", content, url }: BuilderPageProps) {
  return (
    <BuilderComponent
      model={model}
      content={content}
      url={url}
    />
  );
}
