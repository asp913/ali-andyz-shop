#!/usr/bin/env node

/**
 * Comprehensive Stripe Product Management Script
 * 
 * This script manages ALL products from the client including:
 * - Individual products (capsules and standalone items)
 * - Individual items within capsules (for individual purchase)
 * - Proper category mapping for filtering
 * - Bundle and individual pricing
 * 
 * Usage:
 *   node scripts/manage-stripe-products.js create    # Create all products
 *   node scripts/manage-stripe-products.js update    # Update existing products
 *   node scripts/manage-stripe-products.js list      # List all products
 *   node scripts/manage-stripe-products.js delete    # Delete all products (careful!)
 */

const Stripe = require('stripe');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

// Read and parse client product files
function readClientProducts() {
  const clientDir = path.join(__dirname, '../client/lib');
  
  // Read sample products (women's activewear)
  const sampleProductsContent = fs.readFileSync(path.join(clientDir, 'sample-products.ts'), 'utf8');
  const sampleProducts = extractProductsFromFile(sampleProductsContent, 'sampleProducts');
  
  // Read ready-to-wear products
  const readyToWearContent = fs.readFileSync(path.join(clientDir, 'ready-to-wear-products.ts'), 'utf8');
  const readyToWearProducts = extractProductsFromFile(readyToWearContent, 'readyToWearProducts');
  
  // Read men's activewear products
  const mensActivewearContent = fs.readFileSync(path.join(clientDir, 'mens-activewear-products.ts'), 'utf8');
  const mensActivewearProducts = extractProductsFromFile(mensActivewearContent, 'mensActivewearProducts');
  
  // Read men's ready-to-wear products
  const mensReadyToWearContent = fs.readFileSync(path.join(clientDir, 'mens-ready-to-wear-products.ts'), 'utf8');
  const mensReadyToWearProducts = extractProductsFromFile(mensReadyToWearContent, 'mensReadyToWearProducts');
  
  // Read capsule details
  const capsuleDetailsContent = fs.readFileSync(path.join(clientDir, 'capsule-details.ts'), 'utf8');
  const capsuleDetailsByProductId = extractCapsuleDetailsFromFile(capsuleDetailsContent);
  
  return {
    sampleProducts,
    readyToWearProducts,
    mensActivewearProducts,
    mensReadyToWearProducts,
    capsuleDetailsByProductId
  };
}

// Extract products from TypeScript file content
function extractProductsFromFile(content, exportName) {
  // This is a simplified parser - in production you'd want a proper TypeScript parser
  const products = [];
  
  // Find the export array
  const exportMatch = content.match(new RegExp(`export const ${exportName}: Product\\[\\] = \\[([\\s\\S]*?)\\];`));
  if (!exportMatch) return products;
  
  const arrayContent = exportMatch[1];
  
  // Split by product objects (simplified)
  const productMatches = arrayContent.match(/\{[^}]*\}/g);
  if (!productMatches) return products;
  
  productMatches.forEach(match => {
    try {
      // Extract basic product info (simplified parsing)
      const idMatch = match.match(/id:\s*["']([^"']+)["']/);
      const nameMatch = match.match(/name:\s*["']([^"']+)["']/);
      const priceMatch = match.match(/price:\s*(\d+)/);
      const imageMatch = match.match(/image:\s*["']([^"']+)["']/);
      const badgeMatch = match.match(/badge:\s*["']([^"']+)["']/);
      const descriptionMatch = match.match(/description:\s*["']([^"']+)["']/);
      
      // Extract images array
      const imagesMatch = match.match(/images:\s*\[([^\]]+)\]/);
      let images = [];
      if (imagesMatch) {
        const imageUrls = imagesMatch[1].match(/["']([^"']+)["']/g);
        if (imageUrls) {
          images = imageUrls.map(url => url.replace(/"/g, ''));
        }
      }
      
      if (idMatch && nameMatch && priceMatch) {
        products.push({
          id: idMatch[1],
          name: nameMatch[1],
          price: parseInt(priceMatch[1]),
          image: imageMatch ? imageMatch[1] : '',
          badge: badgeMatch ? badgeMatch[1] : '',
          options: [],
          description: descriptionMatch ? descriptionMatch[1] : `${nameMatch[1]} - Premium capsule collection`,
          images: images.length > 0 ? images : (imageMatch ? [imageMatch[1]] : [])
        });
      }
    } catch (e) {
      console.log('Error parsing product:', e.message);
    }
  });
  
  return products;
}

// Extract capsule details (simplified)
function extractCapsuleDetailsFromFile(content) {
  // This is a simplified implementation
  // In production, you'd want a proper TypeScript parser
  return {};
}

// Category mapping for proper filtering
const CATEGORY_MAPPING = {
  'womens-activewear': 'womens-activewear',
  'womens-ready-to-wear': 'womens-ready-to-wear', 
  'mens-activewear': 'mens-activewear',
  'mens-ready-to-wear': 'mens-ready-to-wear',
};

// Combine all products with proper category mapping
function getAllProducts() {
  const clientData = readClientProducts();
  const allProducts = [];
  
  // Add sample products (women's activewear)
  clientData.sampleProducts.forEach(product => {
    allProducts.push({
      ...product,
      category: 'womens-activewear',
      productType: 'capsule'
    });
  });
  
  // Add ready-to-wear products
  clientData.readyToWearProducts.forEach(product => {
    allProducts.push({
      ...product,
      category: 'womens-ready-to-wear',
      productType: 'capsule'
    });
  });
  
  // Add men's activewear products
  clientData.mensActivewearProducts.forEach(product => {
    allProducts.push({
      ...product,
      category: 'mens-activewear',
      productType: 'capsule'
    });
  });
  
  // Add men's ready-to-wear products
  clientData.mensReadyToWearProducts.forEach(product => {
    allProducts.push({
      ...product,
      category: 'mens-ready-to-wear',
      productType: 'capsule'
    });
  });
  
  return allProducts;
}

// Get all individual items from capsules
function getAllIndividualItems() {
  const individualItems = [];
  const clientData = readClientProducts();
  
  // For now, return empty array since capsule details parsing is complex
  // In production, you'd implement proper capsule details parsing
  console.log('Note: Individual items parsing is simplified. Implement full capsule details parsing for production.');
  
  return individualItems;
}

// Create Stripe product
async function createStripeProduct(product) {
  try {
    console.log(`Creating product: ${product.name}`);
    console.log(`   Category: ${product.category}`);
    console.log(`   Type: ${product.productType}`);
    console.log(`   Price: $${product.price}`);

    // Prepare images array - use images array if available, otherwise use single image
    const productImages = product.images && product.images.length > 0 
      ? product.images 
      : (product.image ? [product.image] : []);

    // Create the main product
    const stripeProduct = await stripe.products.create({
      name: product.name,
      description: product.description,
      images: productImages,
      metadata: {
        category: product.category,
        badge: product.badge || '',
        handle: product.handle || product.id,
        options: JSON.stringify(product.options || []),
        productType: product.productType,
        parentProductId: product.parentProductId || '',
        requiredForBundle: product.requiredForBundle ? 'true' : 'false',
        inventoryLeft: product.inventoryLeft ? product.inventoryLeft.toString() : '',
      },
    });

    // Create the price
    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: product.price * 100, // Convert to cents
      currency: 'usd',
    });

    // Set the price as the default price for the product
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

// Create all products
async function createAllProducts() {
  console.log('🚀 Creating ALL Stripe products...\n');
  
  const allProducts = getAllProducts();
  const individualItems = getAllIndividualItems();
  const totalProducts = allProducts.length + individualItems.length;
  
  console.log(`Total products to create: ${totalProducts}`);
  console.log(`- Capsules: ${allProducts.length}`);
  console.log(`- Individual items: ${individualItems.length}\n`);

  const results = [];
  let successCount = 0;
  let errorCount = 0;

  // Create capsule products first
  console.log('📦 Creating capsule products...\n');
  for (const [index, product] of allProducts.entries()) {
    console.log(`[${index + 1}/${allProducts.length}] Capsule: ${product.name}`);
    const result = await createStripeProduct(product);
    results.push(result);
    
    if (result.success) {
      successCount++;
    } else {
      errorCount++;
    }
    
    // Add delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  // Create individual items
  console.log('\n🛍️ Creating individual items...\n');
  for (const [index, item] of individualItems.entries()) {
    console.log(`[${index + 1}/${individualItems.length}] Individual: ${item.name}`);
    const result = await createStripeProduct(item);
    results.push(result);
    
    if (result.success) {
      successCount++;
    } else {
      errorCount++;
    }
    
    // Add delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  // Save results
  const timestamp = Date.now();
  const resultsFile = `stripe-products-${timestamp}.json`;
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));

  // Generate category mapping
  const categoryMapping = {};
  results.filter(r => r.success).forEach(result => {
    if (!categoryMapping[result.category]) {
      categoryMapping[result.category] = {
        capsules: [],
        individualItems: []
      };
    }
    
    const item = {
      id: result.id,
      name: result.name,
      stripeProductId: result.stripeProductId,
      stripePriceId: result.stripePriceId,
      handle: result.handle,
      productType: result.productType
    };
    
    if (result.productType === 'capsule') {
      categoryMapping[result.category].capsules.push(item);
    } else {
      categoryMapping[result.category].individualItems.push(item);
    }
  });

  const mappingFile = `category-mapping-${timestamp}.json`;
  fs.writeFileSync(mappingFile, JSON.stringify(categoryMapping, null, 2));

  console.log('\n🎉 Stripe products creation complete!');
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Failed: ${errorCount}`);
  console.log(`📄 Results saved to: ${resultsFile}`);
  console.log(`📋 Category mapping saved to: ${mappingFile}`);

  // Show category breakdown
  console.log('\n📊 Products by Category:');
  Object.entries(categoryMapping).forEach(([category, data]) => {
    console.log(`   ${category}:`);
    console.log(`     - Capsules: ${data.capsules.length}`);
    console.log(`     - Individual items: ${data.individualItems.length}`);
  });

  return results;
}

// List all existing products
async function listAllProducts() {
  console.log('📋 Listing all Stripe products...\n');
  
  try {
    const products = await stripe.products.list({ limit: 100 });
    
    console.log(`Found ${products.data.length} products:\n`);
    
    const categoryGroups = {};
    
    products.data.forEach(product => {
      const category = product.metadata?.category || 'uncategorized';
      if (!categoryGroups[category]) {
        categoryGroups[category] = [];
      }
      categoryGroups[category].push(product);
    });
    
    Object.entries(categoryGroups).forEach(([category, products]) => {
      console.log(`📁 ${category.toUpperCase()}:`);
      products.forEach(product => {
        const price = product.default_price;
        const priceAmount = price ? (price.unit_amount / 100).toFixed(2) : 'No price';
        console.log(`   - ${product.name} (${product.id}) - $${priceAmount}`);
        console.log(`     Type: ${product.metadata?.productType || 'unknown'}`);
        console.log(`     Handle: ${product.metadata?.handle || product.id}`);
        console.log('');
      });
    });
    
  } catch (error) {
    console.error('❌ Error listing products:', error.message);
  }
}

// Delete all products (be careful!)
async function deleteAllProducts() {
  console.log('⚠️  WARNING: This will delete ALL products from your Stripe account!');
  console.log('Type "DELETE ALL PRODUCTS" to confirm:');
  
  // In a real implementation, you'd want to add confirmation
  console.log('This feature requires manual confirmation for safety.');
  console.log('To delete products, use the Stripe dashboard or implement confirmation logic.');
}

// Update existing products
async function updateProducts() {
  console.log('🔄 Updating existing products...\n');
  
  try {
    const existingProducts = await stripe.products.list({ limit: 100 });
    const allProducts = getAllProducts();
    const individualItems = getAllIndividualItems();
    const allClientProducts = [...allProducts, ...individualItems];
    
    console.log(`Found ${existingProducts.data.length} existing products`);
    console.log(`Have ${allClientProducts.length} client products to sync\n`);
    
    // This would implement update logic
    console.log('Update functionality would go here...');
    console.log('For now, use "create" to recreate all products');
    
  } catch (error) {
    console.error('❌ Error updating products:', error.message);
  }
}

// Main execution
async function main() {
  const command = process.argv[2];
  
  if (!command) {
    console.log('Usage: node scripts/manage-stripe-products.js <command>');
    console.log('');
    console.log('Commands:');
    console.log('  create  - Create all products from client');
    console.log('  update  - Update existing products');
    console.log('  list    - List all existing products');
    console.log('  delete  - Delete all products (careful!)');
    console.log('');
    process.exit(1);
  }
  
  switch (command) {
    case 'create':
      await createAllProducts();
      break;
    case 'update':
      await updateProducts();
      break;
    case 'list':
      await listAllProducts();
      break;
    case 'delete':
      await deleteAllProducts();
      break;
    default:
      console.log(`Unknown command: ${command}`);
      process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { 
  createAllProducts, 
  listAllProducts, 
  updateProducts, 
  deleteAllProducts,
  getAllProducts,
  getAllIndividualItems 
};
