import { builder } from '@builder.io/sdk';
import BuilderPage from './components/BuilderPage';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function HomePage() {
  const content = await builder
    .get('page', {
      url: '/',
    })
    .promise();

  // Fallback to original homepage if no Builder.io content
  if (!content) {
    const { default: StaticHomePage } = await import('./page-static-backup');
    return <StaticHomePage />;
  }

  return <BuilderPage model="page" content={content} />;
}
}
