const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function listStripeProducts() {
  try {
    const products = await stripe.products.list({ limit: 100, active: true });
    
    console.log('Your Stripe Products:');
    products.data.forEach(product => {
      console.log(`${product.id}: ${product.name} (${product.metadata?.handle || 'no handle'})`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

listStripeProducts();
