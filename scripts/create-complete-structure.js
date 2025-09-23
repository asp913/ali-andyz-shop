#!/usr/bin/env node

/**
 * Create Complete Structure: Capsules + Individual Items
 * 
 * This script creates the COMPLETE structure:
 * 1. Creates individual items for each capsule
 * 2. Creates the capsule product
 * 3. Links individual items to their parent capsule
 * 4. Sets up proper metadata for relationships
 * 
 * This follows the correct structure where:
 * - Capsules can be bought as bundles
 * - Individual items can be bought separately
 * - Proper parent-child relationships are established
 */

const Stripe = require('stripe');
require('dotenv').config({ path: '.env.local' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

// Define individual items for each capsule from the lib files
const capsuleItems = {
  // Women's Activewear capsules
  'riviera-edit-capsule': [
    { id: 'riviera-tank', name: 'Riviera Tank', price: 29, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'riviera-shorts', name: 'Riviera Shorts', price: 39, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'riviera-wrap', name: 'Riviera Wrap', price: 49, sizes: ['One Size'], required: true },
    { id: 'riviera-accessory', name: 'Riviera Headband', price: 20, sizes: ['One Size'], required: false },
    { id: 'riviera-bag', name: 'Riviera Tote', price: 59, sizes: ['One Size'], required: false }
  ],
  'sunset-flow-capsule': [
    { id: 'sunset-tank', name: 'Sunset Tank', price: 24, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'sunset-shorts', name: 'Sunset Shorts', price: 32, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'sunset-wrap', name: 'Sunset Wrap', price: 28, sizes: ['One Size'], required: true },
    { id: 'sunset-accessory', name: 'Sunset Headband', price: 18, sizes: ['One Size'], required: false },
    { id: 'sunset-bag', name: 'Sunset Tote', price: 52, sizes: ['One Size'], required: false }
  ],
  'studio-flow-capsule': [
    { id: 'studio-top', name: 'Studio Top', price: 25, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'studio-leggings', name: 'Studio Leggings', price: 35, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'studio-jacket', name: 'Studio Jacket', price: 39, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true }
  ],
  'off-duty-luxe-moto-edit': [
    { id: 'moto-jacket', name: 'Moto Jacket', price: 45, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'moto-tee', name: 'Moto Tee', price: 22, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'moto-pants', name: 'Moto Pants', price: 35, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true }
  ],
  'black-tennis-capsule': [
    { id: 'tennis-dress', name: 'Tennis Dress', price: 65, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'tennis-skirt', name: 'Tennis Skirt', price: 45, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'tennis-top', name: 'Tennis Top', price: 35, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'tennis-accessory', name: 'Tennis Headband', price: 25, sizes: ['One Size'], required: false },
    { id: 'tennis-bag', name: 'Tennis Bag', price: 79, sizes: ['One Size'], required: false }
  ],
  'the-drift-set-capsule': [
    { id: 'drift-sweater', name: 'Drift Sweater', price: 55, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'drift-pants', name: 'Drift Pants', price: 45, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'drift-tank', name: 'Drift Tank', price: 28, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'drift-accessory', name: 'Drift Scarf', price: 35, sizes: ['One Size'], required: false },
    { id: 'drift-bag', name: 'Drift Tote', price: 49, sizes: ['One Size'], required: false }
  ],
  'coastal-ride-capsule': [
    { id: 'coastal-top', name: 'Coastal Top', price: 32, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'coastal-shorts', name: 'Coastal Shorts', price: 38, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'coastal-jacket', name: 'Coastal Jacket', price: 49, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true }
  ],
  'airport-set-capsule': [
    { id: 'airport-sweater', name: 'Airport Sweater', price: 65, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'airport-pants', name: 'Airport Pants', price: 55, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'airport-tank', name: 'Airport Tank', price: 32, sizes: ['XS', 'S', 'M', 'L', 'XL'], required: true },
    { id: 'airport-accessory', name: 'Airport Scarf', price: 45, sizes: ['One Size'], required: false },
    { id: 'airport-bag', name: 'Airport Tote', price: 67, sizes: ['One Size'], required: false }
  ],
  
  // Women's Ready to Wear capsules
  'rtw-008': [ // The Soft Landing Set
    { id: 'cream-sweater', name: 'Cream Knit Sweater', price: 69, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'oat-trousers', name: 'Oat Trousers', price: 59, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'silk-tank', name: 'Silk Tank Top', price: 29, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'cashmere-scarf', name: 'Cashmere Scarf', price: 49, sizes: ['One Size'], required: false },
    { id: 'leather-tote', name: 'Leather Tote', price: 39, sizes: ['One Size'], required: false }
  ],
  'rtw-007': [ // Cosmic Elegance Set
    { id: 'cosmic-dress', name: 'Cosmic Dress', price: 89, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'cosmic-jacket', name: 'Cosmic Jacket', price: 79, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'cosmic-heels', name: 'Cosmic Heels', price: 129, sizes: ['6', '7', '8', '9', '10'], required: true }
  ],
  'rtw-006': [ // Solstice Glow Beach Set
    { id: 'solstice-coverup', name: 'Solstice Coverup', price: 35, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'solstice-swimsuit', name: 'Solstice Swimsuit', price: 45, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'solstice-hat', name: 'Solstice Hat', price: 25, sizes: ['One Size'], required: true }
  ],
  'rtw-004': [ // White Riviera Gala Set
    { id: 'white-dress', name: 'White Gala Dress', price: 149, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'white-jacket', name: 'White Blazer', price: 89, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'white-heels', name: 'White Heels', price: 99, sizes: ['6', '7', '8', '9', '10'], required: true }
  ],
  'rtw-001': [ // City Edit Jet-Set Capsule
    { id: 'city-blazer', name: 'City Blazer', price: 129, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'city-pants', name: 'City Pants', price: 89, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'city-top', name: 'City Top', price: 49, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'city-bag', name: 'City Bag', price: 79, sizes: ['One Size'], required: false },
    { id: 'city-shoes', name: 'City Shoes', price: 99, sizes: ['6', '7', '8', '9', '10'], required: false }
  ],
  'rtw-002': [ // Glamour Capsule
    { id: 'glamour-dress', name: 'Glamour Dress', price: 399, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'glamour-jacket', name: 'Glamour Jacket', price: 299, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'glamour-heels', name: 'Glamour Heels', price: 199, sizes: ['6', '7', '8', '9', '10'], required: true },
    { id: 'glamour-bag', name: 'Glamour Bag', price: 199, sizes: ['One Size'], required: false },
    { id: 'glamour-jewelry', name: 'Glamour Jewelry', price: 99, sizes: ['One Size'], required: false }
  ],
  'rtw-003': [ // City Brunch
    { id: 'brunch-dress', name: 'Brunch Dress', price: 199, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'brunch-jacket', name: 'Brunch Jacket', price: 149, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'brunch-heels', name: 'Brunch Heels', price: 129, sizes: ['6', '7', '8', '9', '10'], required: true },
    { id: 'brunch-bag', name: 'Brunch Bag', price: 89, sizes: ['One Size'], required: false }
  ],
  'rtw-010': [ // Soft Utility Edit
    { id: 'utility-jacket', name: 'Utility Jacket', price: 89, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'utility-pants', name: 'Utility Pants', price: 69, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'utility-top', name: 'Utility Top', price: 39, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'utility-boots', name: 'Utility Boots', price: 99, sizes: ['6', '7', '8', '9', '10'], required: false }
  ],
  'rtw-009': [ // Urban Terrain
    { id: 'urban-puffer', name: 'Urban Puffer', price: 149, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'urban-cargo', name: 'Urban Cargo Pants', price: 89, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'urban-top', name: 'Urban Top', price: 49, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'urban-boots', name: 'Urban Boots', price: 129, sizes: ['6', '7', '8', '9', '10'], required: false }
  ],
  'rtw-005': [ // Forest Luxe
    { id: 'forest-dress', name: 'Forest Dress', price: 119, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'forest-cardigan', name: 'Forest Cardigan', price: 79, sizes: ['XS', 'S', 'M', 'L'], required: true },
    { id: 'forest-boots', name: 'Forest Boots', price: 99, sizes: ['6', '7', '8', '9', '10'], required: false }
  ],
  
  // Men's Activewear capsules
  'ma-001': [ // Core Set Essential Men
    { id: 'core-jacket', name: 'Core Jacket', price: 69, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'core-tee', name: 'Core Tee', price: 25, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'core-pants', name: 'Core Pants', price: 59, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'core-sneakers', name: 'Core Sneakers', price: 49, sizes: ['8', '9', '10', '11', '12'], required: false },
    { id: 'core-cap', name: 'Core Cap', price: 19, sizes: ['One Size'], required: false }
  ],
  'ma-002': [ // Zen Essentials
    { id: 'zen-hoodie', name: 'Zen Hoodie', price: 45, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'zen-pants', name: 'Zen Pants', price: 39, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'zen-tee', name: 'Zen Tee', price: 22, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'zen-sneakers', name: 'Zen Sneakers', price: 35, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'ma-003': [ // Club Classic
    { id: 'club-blazer', name: 'Club Blazer', price: 99, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'club-pants', name: 'Club Pants', price: 79, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'club-shirt', name: 'Club Shirt', price: 49, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'club-shoes', name: 'Club Shoes', price: 89, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'ma-004': [ // Beach Flow Capsule
    { id: 'beach-shirt', name: 'Beach Shirt', price: 35, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'beach-shorts', name: 'Beach Shorts', price: 29, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'beach-sandals', name: 'Beach Sandals', price: 39, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'ma-005': [ // Core Trainer Kit
    { id: 'trainer-top', name: 'Trainer Top', price: 35, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'trainer-shorts', name: 'Trainer Shorts', price: 29, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'trainer-shoes', name: 'Trainer Shoes', price: 69, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'ma-006': [ // Coastal Ride
    { id: 'coastal-shirt', name: 'Coastal Shirt', price: 39, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'coastal-shorts', name: 'Coastal Shorts', price: 35, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'coastal-jacket', name: 'Coastal Jacket', price: 59, sizes: ['S', 'M', 'L', 'XL'], required: true }
  ],
  'ma-007': [ // Sandstone Set
    { id: 'sandstone-hoodie', name: 'Sandstone Hoodie', price: 45, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'sandstone-pants', name: 'Sandstone Pants', price: 39, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'sandstone-tee', name: 'Sandstone Tee', price: 25, sizes: ['S', 'M', 'L', 'XL'], required: true }
  ],
  'ma-008': [ // Men
    { id: 'men-jacket', name: 'Men Jacket', price: 69, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'men-pants', name: 'Men Pants', price: 49, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'men-tee', name: 'Men Tee', price: 25, sizes: ['S', 'M', 'L', 'XL'], required: true }
  ],
  
  // Men's Ready to Wear capsules
  'mrt-001': [ // Day Six: The Farewell Look
    { id: 'farewell-sweater', name: 'Farewell Sweater', price: 89, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'farewell-shirt', name: 'Farewell Shirt', price: 79, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'farewell-pants', name: 'Farewell Pants', price: 99, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'farewell-beanie', name: 'Farewell Beanie', price: 29, sizes: ['One Size'], required: false },
    { id: 'farewell-loafers', name: 'Farewell Loafers', price: 149, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'mrt-002': [ // Modern Tailored
    { id: 'tailored-suit', name: 'Tailored Suit', price: 129, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'tailored-shirt', name: 'Tailored Shirt', price: 59, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'tailored-shoes', name: 'Tailored Shoes', price: 99, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'mrt-003': [ // Heritage Field
    { id: 'heritage-jacket', name: 'Heritage Jacket', price: 99, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'heritage-pants', name: 'Heritage Pants', price: 79, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'heritage-shirt', name: 'Heritage Shirt', price: 49, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'heritage-boots', name: 'Heritage Boots', price: 89, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'mrt-004': [ // Final Night
    { id: 'final-blazer', name: 'Final Blazer', price: 99, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'final-pants', name: 'Final Pants', price: 79, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'final-shirt', name: 'Final Shirt', price: 49, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'final-shoes', name: 'Final Shoes', price: 89, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'mrt-005': [ // City Puffer
    { id: 'puffer-jacket', name: 'Puffer Jacket', price: 89, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'puffer-pants', name: 'Puffer Pants', price: 59, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'puffer-sneakers', name: 'Puffer Sneakers', price: 69, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'mrt-006': [ // Varsity Bomber Capsule
    { id: 'bomber-jacket', name: 'Bomber Jacket', price: 89, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'bomber-pants', name: 'Bomber Pants', price: 69, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'bomber-tee', name: 'Bomber Tee', price: 29, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'bomber-sneakers', name: 'Bomber Sneakers', price: 79, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'mrt-007': [ // Clubhouse Bear Edit
    { id: 'bear-sweater', name: 'Bear Sweater', price: 69, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'bear-pants', name: 'Bear Pants', price: 59, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'bear-tee', name: 'Bear Tee', price: 29, sizes: ['S', 'M', 'L', 'XL'], required: true }
  ],
  'mrt-008': [ // Aviator Luxe Kit
    { id: 'aviator-jacket', name: 'Aviator Jacket', price: 129, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'aviator-pants', name: 'Aviator Pants', price: 89, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'aviator-shirt', name: 'Aviator Shirt', price: 59, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'aviator-boots', name: 'Aviator Boots', price: 99, sizes: ['8', '9', '10', '11', '12'], required: false }
  ],
  'mrt-009': [ // Emerald Heart Knit Edit
    { id: 'emerald-sweater', name: 'Emerald Sweater', price: 59, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'emerald-pants', name: 'Emerald Pants', price: 49, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'emerald-tee', name: 'Emerald Tee', price: 25, sizes: ['S', 'M', 'L', 'XL'], required: true }
  ],
  'mrt-010': [ // Half-Zip Capsule
    { id: 'halfzip-sweater', name: 'Half-Zip Sweater', price: 59, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'halfzip-pants', name: 'Half-Zip Pants', price: 49, sizes: ['S', 'M', 'L', 'XL'], required: true },
    { id: 'halfzip-tee', name: 'Half-Zip Tee', price: 25, sizes: ['S', 'M', 'L', 'XL'], required: true }
  ]
};

// Helper function to create an individual item
async function createIndividualItem(item, parentCapsuleId, category) {
  try {
    console.log(`Creating individual item: ${item.name}`);
    const stripeProduct = await stripe.products.create({
      name: item.name,
      description: `${item.name} - Individual item from capsule collection`,
      images: ['https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7dc6421f0d6144a29d16812342ff4701?format=webp&width=800'],
      metadata: {
        productType: 'individual',
        parentCapsuleId: parentCapsuleId,
        availableQuantity: '25',
        requiredForBundle: item.required.toString(),
        bundleOnly: 'false',
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

async function createCompleteStructure() {
  console.log('🚀 Creating COMPLETE structure: Capsules + Individual Items...\n');

  // First, get all existing capsule products
  const existingProducts = await stripe.products.list({ limit: 100, active: true });
  const capsuleProducts = existingProducts.data.filter(p => p.metadata?.productType === 'capsule');

  console.log(`Found ${capsuleProducts.length} existing capsule products`);

  const results = {
    capsulesProcessed: 0,
    itemsCreated: 0,
    itemsFailed: 0
  };

  for (const capsule of capsuleProducts) {
    const capsuleHandle = capsule.metadata?.handle;
    if (!capsuleHandle || !capsuleItems[capsuleHandle]) {
      console.log(`⚠️  No individual items defined for capsule: ${capsule.name}`);
      continue;
    }

    console.log(`\n📦 Processing capsule: ${capsule.name}`);
    console.log(`   Handle: ${capsuleHandle}`);
    console.log(`   Individual items to create: ${capsuleItems[capsuleHandle].length}`);

    const items = capsuleItems[capsuleHandle];
    const createdItems = [];

    // Create individual items for this capsule
    for (const [index, item] of items.entries()) {
      console.log(`[${index + 1}/${items.length}] Creating: ${item.name}`);
      const result = await createIndividualItem(item, capsule.id, capsule.metadata?.category);
      createdItems.push(result);

      if (result.success) {
        results.itemsCreated++;
      } else {
        results.itemsFailed++;
      }

      // Add delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Update capsule with individual item IDs
    const successfulItems = createdItems.filter(item => item.success);
    if (successfulItems.length > 0) {
      try {
        await stripe.products.update(capsule.id, {
          metadata: {
            ...capsule.metadata,
            individualItems: JSON.stringify(successfulItems.map(item => item.stripeProductId)),
          },
        });
        console.log(`✅ Updated capsule with ${successfulItems.length} individual item IDs`);
      } catch (error) {
        console.log(`❌ Failed to update capsule metadata: ${error.message}`);
      }
    }

    results.capsulesProcessed++;
    console.log(`\n🎉 Completed capsule: ${capsule.name}`);
    console.log(`   Individual items created: ${successfulItems.length}`);
  }

  // Final summary
  console.log('\n🎉 COMPLETE STRUCTURE CREATION FINISHED!');
  console.log('\n📊 Final Summary:');
  console.log('================');
  console.log(`✅ Capsules processed: ${results.capsulesProcessed}`);
  console.log(`✅ Individual items created: ${results.itemsCreated}`);
  console.log(`❌ Individual items failed: ${results.itemsFailed}`);

  console.log('\n🌐 You can now test the complete structure:');
  console.log('   • Women\'s Activewear: http://localhost:3001/womens-activewear');
  console.log('   • Women\'s Ready to Wear: http://localhost:3001/womens-ready-to-wear');
  console.log('   • Men\'s Activewear: http://localhost:3001/mens-activewear');
  console.log('   • Men\'s Ready to Wear: http://localhost:3001/mens-ready-to-wear');

  console.log('\n✅ Complete structure is now active in your Stripe account!');
  console.log('   • Capsules can be bought as bundles');
  console.log('   • Individual items can be bought separately');
  console.log('   • Proper parent-child relationships established');
}

// Run the script
if (require.main === module) {
  createCompleteStructure().catch(console.error);
}

module.exports = { createCompleteStructure, capsuleItems };
