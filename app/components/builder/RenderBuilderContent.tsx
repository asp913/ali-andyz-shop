"use client";

import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { BuilderContent } from '@builder.io/sdk';
import { useEffect, useState } from 'react';

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface RenderBuilderContentProps {
  model: string;
  content?: BuilderContent;
}

export function RenderBuilderContent({ model, content: initialContent }: RenderBuilderContentProps) {
  const [content, setContent] = useState<BuilderContent | null>(initialContent || null);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    if (!initialContent) {
      builder
        .get(model, {
          url: typeof window !== 'undefined' ? window.location.pathname : '/',
        })
        .promise()
        .then(setContent);
    }
  }, [model, initialContent]);

  // Show loading state
  if (!content && !isPreviewing) {
    return <div>Loading...</div>;
  }

  return <BuilderComponent model={model} content={content} />;
}
