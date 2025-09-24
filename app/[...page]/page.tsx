import { builder } from '@builder.io/sdk';
import BuilderPage from '../components/BuilderPage';
import { notFound } from 'next/navigation';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const urlPath = `/${params.page?.join('/') || ''}`;
  
  const content = await builder
    .get('page', {
      url: urlPath,
    })
    .promise();

  if (!content) {
    return notFound();
  }

  return <BuilderPage model="page" content={content} />;
}

export async function generateStaticParams() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
    omit: 'data.blocks',
  });

  return pages.map((page) => ({
    page: page.data?.url?.split('/').filter(Boolean) || [],
  }));
}
