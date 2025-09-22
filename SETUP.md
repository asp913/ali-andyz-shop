# Local Development Setup

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Stripe Configuration
# Get these from your Stripe Dashboard: https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Google Site Verification
GOOGLE_SITE_VERIFICATION=your_google_verification_code_here

# Stripe Bundle Price ID (for capsule bundles)
STRIPE_BUNDLE_PRICE_ID=price_your_bundle_price_id_here
```

## Setup Steps

1. **Create Stripe Account**: Go to [stripe.com](https://stripe.com) and create an account
2. **Get API Keys**: In your Stripe Dashboard, go to Developers > API Keys and copy your keys
3. **Create Environment File**: Copy the variables above into `.env.local`
4. **Install Dependencies**: Run `npm install`
5. **Start Development Server**: Run `npm run dev`
6. **Setup Stripe Products** (Optional): Run `npm run setup-stripe` to create sample products

## Testing Stripe Integration

1. The app will work with sample data by default
2. Once you add your Stripe keys, it will fetch real products from Stripe
3. Test the checkout flow with Stripe's test card numbers:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

## Development vs Production

- **Development**: Uses sample data and works without Stripe setup
- **Production**: Requires Stripe configuration for full functionality

The app is designed to gracefully fall back to sample data when Stripe is not configured.
