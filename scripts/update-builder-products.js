require('dotenv').config();
const { builder } = require('@builder.io/sdk');

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

async function updateAllCapsules() {
  try {
    console.log('Fetching all Builder.io content...');
    const content = await builder.getAll('page', {
      options: { noTargeting: true },
    });

    console.log(`Found ${content.length} items in Builder.io`);

    for (const item of content) {
      const handle = item.data?.handle;
      const title = item.data?.title;
      
      if (handle || title) {
        console.log(`\nItem: ${title || handle}`);
        console.log(`Handle: ${handle}`);
        console.log(`Current Stripe ID: ${item.data?.stripeProductId || 'None'}`);
        console.log(`URL: ${item.data?.url || 'None'}`);
        console.log('---');
      }
    }

    console.log('\nNext step: Match these with your Stripe product IDs');
    console.log('Then update the script with the mappings');
  } catch (error) {
    console.error('Error fetching content:', error);
  }
}

updateAllCapsules();
