#!/usr/bin/env node

/**
 * Create Capsules and Individual Items for All Categories
 * 
 * This script creates one capsule with individual items for each category:
 * - Women's Activewear: Sunset Flow capsule
 * - Women's Ready to Wear: The Soft Landing Set capsule  
 * - Men's Activewear: Core Set capsule
 * - Men's Ready to Wear: Day Six: The Farewell Look capsule
 * 
 * Each capsule will have 4-5 individual items that can be purchased separately
 * or as part of the bundle.
 */

const Stripe = require('stripe');
require('dotenv').config({ path: '.env.local' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

// Define capsules and their individual items for each category
const capsulesData = {
  'womens-activewear': {
    capsule: {
      id: 'wa-002',
      name: 'Sunset Flow — Capsule or Mix & Match',
      description: 'Sunset Flow — Capsule or Mix & Match. Bundle $119 · Value $154 · Save $35. Price range: $24–$42. Golden hour vibes in wearable form. Pieces that flow from yoga class to sunset dinner, designed for those magical in-between moments. Flowing silhouettes in warm, sunset tones. Versatile layers perfect for day-to-night. Save $35 vs. buying separately.',
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd474d293666041978cf836301c70914a?format=webp&width=1600',
        'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fb3b275c6e356437f9e376b3c12f4fa7f?format=webp&width=1600'
      ],
      category: 'womens-activewear',
      productType: 'capsule',
      price: 119,
      badge: 'Capsule',
      handle: 'sunset-flow-capsule',
      bundlePrice: 119,
      totalQuantity: 25
    },
    items: [
      {
        id: 'sunset-flow-top',
        name: 'Sunset Flow Tank',
        price: 24,
        availableQuantity: 25,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd474d293666041978cf836301c70914a?format=webp&width=1600']
      },
      {
        id: 'sunset-flow-shorts',
        name: 'Sunset Flow Shorts',
        price: 32,
        availableQuantity: 25,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd474d293666041978cf836301c70914a?format=webp&width=1600']
      },
      {
        id: 'sunset-flow-wrap',
        name: 'Sunset Flow Wrap',
        price: 28,
        availableQuantity: 25,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['One Size'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd474d293666041978cf836301c70914a?format=webp&width=1600']
      },
      {
        id: 'sunset-flow-accessory',
        name: 'Sunset Flow Headband',
        price: 18,
        availableQuantity: 25,
        requiredForBundle: false,
        bundleOnly: false,
        sizes: ['One Size'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd474d293666041978cf836301c70914a?format=webp&width=1600']
      },
      {
        id: 'sunset-flow-bag',
        name: 'Sunset Flow Tote',
        price: 52,
        availableQuantity: 25,
        requiredForBundle: false,
        bundleOnly: false,
        sizes: ['One Size'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd474d293666041978cf836301c70914a?format=webp&width=1600']
      }
    ]
  },
  'womens-ready-to-wear': {
    capsule: {
      id: 'rtw-008',
      name: 'The Soft Landing Set — Capsule or Mix & Match',
      description: 'The Soft Landing Set — Capsule or Mix & Match. Bundle $189 · Value $228 · Save $39. Price range $29–$69. Effortless polish meets quiet luxury. Designed in creamy oat tones, the Soft Landing Set transitions seamlessly from airport lounge to city aperitifs. Elevated knit textures and layered ease make it the ultimate arrival look. Shop the full capsule for effortless head-to-toe styling, or mix & match the pieces individually.',
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd68e72697db4444199d30efa27d3a218?format=webp&width=1600',
        'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7872be3f192c403da885b37ba262bbd8?format=webp&width=1600'
      ],
      category: 'womens-ready-to-wear',
      productType: 'capsule',
      price: 189,
      badge: 'Capsule',
      handle: 'soft-landing-set-capsule',
      bundlePrice: 189,
      totalQuantity: 20
    },
    items: [
      {
        id: 'soft-landing-sweater',
        name: 'Cream Knit Sweater',
        price: 69,
        availableQuantity: 20,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd68e72697db4444199d30efa27d3a218?format=webp&width=1600']
      },
      {
        id: 'soft-landing-pants',
        name: 'Oat Trousers',
        price: 59,
        availableQuantity: 20,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd68e72697db4444199d30efa27d3a218?format=webp&width=1600']
      },
      {
        id: 'soft-landing-tank',
        name: 'Silk Tank Top',
        price: 39,
        availableQuantity: 20,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd68e72697db4444199d30efa27d3a218?format=webp&width=1600']
      },
      {
        id: 'soft-landing-scarf',
        name: 'Cashmere Scarf',
        price: 29,
        availableQuantity: 20,
        requiredForBundle: false,
        bundleOnly: false,
        sizes: ['One Size'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd68e72697db4444199d30efa27d3a218?format=webp&width=1600']
      },
      {
        id: 'soft-landing-bag',
        name: 'Leather Tote',
        price: 32,
        availableQuantity: 20,
        requiredForBundle: false,
        bundleOnly: false,
        sizes: ['One Size'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd68e72697db4444199d30efa27d3a218?format=webp&width=1600']
      }
    ]
  },
  'mens-activewear': {
    capsule: {
      id: 'ma-001',
      name: 'Core Set — Essential Men\'s Capsule',
      description: 'Core Set — Essential Men\'s Capsule. Bundle $189 · Value $231 · Save $42. Price range $25–$69. From city streets to coastal escapes. Premium leather, refined basics, and versatile cargo pants create endless possibilities. This is your foundation for effortless style.',
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F55dfe43cc044420db58ee28c28f3bf53?format=webp&width=800',
        'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fbe7dea6b0511466eaa374e431788e71b?format=webp&width=800'
      ],
      category: 'mens-activewear',
      productType: 'capsule',
      price: 189,
      badge: 'Capsule',
      handle: 'core-set-mens-capsule',
      bundlePrice: 189,
      totalQuantity: 30
    },
    items: [
      {
        id: 'core-set-jacket',
        name: 'Leather Jacket',
        price: 69,
        availableQuantity: 30,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F55dfe43cc044420db58ee28c28f3bf53?format=webp&width=800']
      },
      {
        id: 'core-set-tee',
        name: 'Essential Tee',
        price: 25,
        availableQuantity: 30,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F55dfe43cc044420db58ee28c28f3bf53?format=webp&width=800']
      },
      {
        id: 'core-set-pants',
        name: 'Cargo Pants',
        price: 45,
        availableQuantity: 30,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F55dfe43cc044420db58ee28c28f3bf53?format=webp&width=800']
      },
      {
        id: 'core-set-sneakers',
        name: 'Canvas Sneakers',
        price: 55,
        availableQuantity: 30,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['8', '9', '10', '11', '12'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F55dfe43cc044420db58ee28c28f3bf53?format=webp&width=800']
      },
      {
        id: 'core-set-cap',
        name: 'Baseball Cap',
        price: 37,
        availableQuantity: 30,
        requiredForBundle: false,
        bundleOnly: false,
        sizes: ['One Size'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F55dfe43cc044420db58ee28c28f3bf53?format=webp&width=800']
      }
    ]
  },
  'mens-ready-to-wear': {
    capsule: {
      id: 'mrt-001',
      name: 'Day Six: The Farewell Look — Capsule or Mix & Match',
      description: 'Day Six: The Farewell Look — Capsule or Mix & Match. Bundle $359 · Value $448 · Save $89. A clean finale for the trip: soft knit, fresh cotton-linen shirt, tailored pleated trousers, and a minimal beanie. Wear together for polished ease, or mix each piece into your week. Size Guide — Need help? Text our curators — real humans.',
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F60565ccb4d5240dbbe8ed7f4d0b8525a?format=webp&width=1600',
        'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Ff6a4631f841a4a9b9b55cb22f292f191?format=webp&width=1600'
      ],
      category: 'mens-ready-to-wear',
      productType: 'capsule',
      price: 359,
      badge: 'Capsule',
      handle: 'day-six-farewell-look-capsule',
      bundlePrice: 359,
      totalQuantity: 15
    },
    items: [
      {
        id: 'farewell-knit',
        name: 'Soft Knit Sweater',
        price: 89,
        availableQuantity: 15,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F60565ccb4d5240dbbe8ed7f4d0b8525a?format=webp&width=1600']
      },
      {
        id: 'farewell-shirt',
        name: 'Cotton-Linen Shirt',
        price: 79,
        availableQuantity: 15,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F60565ccb4d5240dbbe8ed7f4d0b8525a?format=webp&width=1600']
      },
      {
        id: 'farewell-trousers',
        name: 'Pleated Trousers',
        price: 129,
        availableQuantity: 15,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F60565ccb4d5240dbbe8ed7f4d0b8525a?format=webp&width=1600']
      },
      {
        id: 'farewell-beanie',
        name: 'Minimal Beanie',
        price: 29,
        availableQuantity: 15,
        requiredForBundle: true,
        bundleOnly: false,
        sizes: ['One Size'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F60565ccb4d5240dbbe8ed7f4d0b8525a?format=webp&width=1600']
      },
      {
        id: 'farewell-shoes',
        name: 'Leather Loafers',
        price: 122,
        availableQuantity: 15,
        requiredForBundle: false,
        bundleOnly: false,
        sizes: ['8', '9', '10', '11', '12'],
        images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F60565ccb4d5240dbbe8ed7f4d0b8525a?format=webp&width=1600']
      }
    ]
  }
};

// Helper function to create a Stripe product and price
async function createStripeProduct(product) {
  try {
    console.log(`Creating product: ${product.name}`);
    console.log(`   Category: ${product.category}`);
    console.log(`   Type: ${product.productType}`);
    console.log(`   Price: $${product.price}`);

    const stripeProduct = await stripe.products.create({
      name: product.name,
      description: product.description,
      images: product.images,
      metadata: {
        category: product.category,
        badge: product.badge || '',
        handle: product.handle || product.id,
        productType: product.productType,
        bundlePrice: product.bundlePrice ? product.bundlePrice.toString() : '',
        totalQuantity: product.totalQuantity ? product.totalQuantity.toString() : '',
        individualItems: product.individualItems ? JSON.stringify(product.individualItems) : '',
      },
    });

    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: Math.round(product.price * 100), // Convert to cents
      currency: 'usd',
    });

    await stripe.products.update(stripeProduct.id, {
      default_price: stripePrice.id,
    });

    console.log(`✅ Created: ${stripeProduct.id}`);
    console.log(`   Price ID: ${stripePrice.id}`);
    console.log('');

    return {
      id: product.id,
      name: product.name,
      category: product.category,
      productType: product.productType,
      stripeProductId: stripeProduct.id,
      stripePriceId: stripePrice.id,
      handle: product.handle || product.id,
      success: true,
    };

  } catch (error) {
    console.error(`❌ Error creating ${product.name}:`, error.message);
    return {
      id: product.id,
      name: product.name,
      category: product.category,
      success: false,
      error: error.message,
    };
  }
}

// Helper function to create an individual item
async function createIndividualItem(item, parentCapsuleId, category) {
  try {
    console.log(`Creating individual item: ${item.name}`);
    const stripeProduct = await stripe.products.create({
      name: item.name,
      description: `${item.name} for ${item.name.split(' ')[0]} capsule`,
      images: item.images,
      metadata: {
        productType: 'individual',
        parentCapsuleId: parentCapsuleId, // Temporary parent ID
        availableQuantity: item.availableQuantity.toString(),
        requiredForBundle: item.requiredForBundle.toString(),
        bundleOnly: item.bundleOnly.toString(),
        sizes: JSON.stringify(item.sizes),
        category: category,
        handle: item.id,
      },
    });

    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: Math.round(item.price * 100),
      currency: 'usd',
    });

    await stripe.products.update(stripeProduct.id, {
      default_price: stripePrice.id,
    });

    console.log(`✅ Created: ${stripeProduct.id}`);
    console.log(`   Price ID: ${stripePrice.id}`);
    console.log('');

    return {
      id: item.id,
      name: item.name,
      productType: 'individual',
      stripeProductId: stripeProduct.id,
      stripePriceId: stripePrice.id,
      success: true,
    };
  } catch (error) {
    console.error(`❌ Error creating individual item ${item.name}:`, error.message);
    return {
      id: item.id,
      name: item.name,
      success: false,
      error: error.message,
    };
  }
}

// Create all capsules and their items
async function createAllCapsules() {
  console.log('🚀 Creating capsules and individual items for all categories...\n');

  const results = {};

  for (const [category, data] of Object.entries(capsulesData)) {
    console.log(`\n📦 Creating ${category} capsule...\n`);
    console.log(`🎁 Capsule: ${data.capsule.name}`);
    console.log(`💰 Bundle Price: $${data.capsule.bundlePrice}`);
    console.log(`📊 Individual Items: ${data.items.length}\n`);

    try {
      // Step 1: Create individual items first
      console.log(`📦 Step 1: Creating individual items for ${category}...\n`);
      const createdItems = [];

      for (const [index, item] of data.items.entries()) {
        console.log(`[${index + 1}/${data.items.length}] Individual item: ${item.name}`);
        const result = await createIndividualItem(item, 'temp-capsule-id', category);
        createdItems.push(result);

        // Add delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      // Step 2: Create the capsule product
      console.log(`\n🎁 Step 2: Creating ${category} capsule product...\n`);

      // Update the capsule with the created individual item IDs
      const capsuleWithItems = {
        ...data.capsule,
        individualItems: createdItems.filter(item => item.success).map(item => item.stripeProductId)
      };

      const capsuleResult = await createStripeProduct(capsuleWithItems);

      if (!capsuleResult.success) {
        console.error(`❌ Failed to create ${category} capsule product`);
        results[category] = { success: false, error: 'Failed to create capsule' };
        continue;
      }

      // Step 3: Update individual items with correct parent capsule ID
      console.log(`\n🔗 Step 3: Updating individual items with parent capsule ID...\n`);

      for (const item of createdItems) {
        if (item.success) {
          try {
            const originalItem = data.items.find(i => i.id === item.id);
            await stripe.products.update(item.stripeProductId, {
              metadata: {
                productType: 'individual',
                parentCapsuleId: capsuleResult.stripeProductId,
                availableQuantity: originalItem?.availableQuantity.toString() || '20',
                requiredForBundle: originalItem?.requiredForBundle.toString() || 'true',
                bundleOnly: originalItem?.bundleOnly.toString() || 'false',
                sizes: JSON.stringify(originalItem?.sizes || []),
                category: category,
                handle: item.id,
              },
            });

            console.log(`✅ Updated: ${item.name} with parent capsule ID`);

          } catch (error) {
            console.log(`❌ Failed to update ${item.name}: ${error.message}`);
          }
        }
      }

      // Step 4: Update capsule with individual item IDs in metadata
      console.log(`\n🔗 Step 4: Updating capsule with individual item IDs...\n`);

      try {
        await stripe.products.update(capsuleResult.stripeProductId, {
          metadata: {
            category: data.capsule.category,
            badge: data.capsule.badge || '',
            handle: data.capsule.handle || data.capsule.id,
            productType: data.capsule.productType,
            bundlePrice: data.capsule.bundlePrice.toString(),
            totalQuantity: data.capsule.totalQuantity.toString(),
            individualItems: JSON.stringify(createdItems.filter(item => item.success).map(item => item.stripeProductId)),
          },
        });

        console.log(`✅ Updated ${category} capsule with individual item IDs`);

      } catch (error) {
        console.log(`❌ Failed to update ${category} capsule metadata: ${error.message}`);
      }

      // Store results
      results[category] = {
        success: true,
        capsule: capsuleResult,
        items: createdItems.filter(item => item.success),
        totalItems: createdItems.filter(item => item.success).length
      };

      console.log(`\n🎉 ${category} capsule creation complete!`);
      console.log(`📊 Summary:`);
      console.log(`   Capsule: ${data.capsule.name}`);
      console.log(`   Capsule ID: ${capsuleResult.stripeProductId}`);
      console.log(`   Bundle Price: $${data.capsule.bundlePrice}`);
      console.log(`   Individual Items: ${createdItems.filter(item => item.success).length}`);

    } catch (error) {
      console.error(`❌ Error during ${category} capsule creation:`, error.message);
      results[category] = { success: false, error: error.message };
    }

    // Add delay between categories
    console.log('\n⏳ Waiting before next category...\n');
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Final summary
  console.log('\n🎉 ALL CAPSULES CREATION COMPLETE!');
  console.log('\n📊 Final Summary:');
  console.log('================');

  for (const [category, result] of Object.entries(results)) {
    if (result.success) {
      console.log(`\n✅ ${category.toUpperCase()}:`);
      console.log(`   Capsule: ${result.capsule.name}`);
      console.log(`   Capsule ID: ${result.capsule.stripeProductId}`);
      console.log(`   Bundle Price: $${result.capsule.name.includes('$') ? result.capsule.name.match(/\$(\d+)/)?.[1] : 'N/A'}`);
      console.log(`   Individual Items: ${result.totalItems}`);
      console.log(`   URL: http://localhost:3001/product/${result.capsule.handle}`);
    } else {
      console.log(`\n❌ ${category.toUpperCase()}: FAILED`);
      console.log(`   Error: ${result.error}`);
    }
  }

  console.log('\n🌐 You can now test all categories:');
  console.log('   • Women\'s Activewear: http://localhost:3001/womens-activewear');
  console.log('   • Women\'s Ready to Wear: http://localhost:3001/womens-ready-to-wear');
  console.log('   • Men\'s Activewear: http://localhost:3001/mens-activewear');
  console.log('   • Men\'s Ready to Wear: http://localhost:3001/mens-ready-to-wear');

  console.log('\n✅ All capsules and individual items are now active in your Stripe account!');
}

// Run the script
if (require.main === module) {
  createAllCapsules().catch(console.error);
}

module.exports = { createAllCapsules, capsulesData };
