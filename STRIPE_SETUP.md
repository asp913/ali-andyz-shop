# Stripe Integration Setup

This project is now integrated with Stripe for product management and checkout. Follow these steps to complete the setup:

## 1. Create a Stripe Account

1. Go to [stripe.com](https://stripe.com) and create an account
2. Complete the account setup and verification process
3. Get your API keys from the Stripe Dashboard

## 2. Set Up Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_...  # Your Stripe secret key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...  # Your Stripe publishable key
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # Your site URL

# Optional: Bundle pricing
STRIPE_BUNDLE_PRICE_ID=price_...  # If you want to use a specific bundle price
```

## 3. Install Dependencies

The Stripe SDK is already installed. If you need to reinstall:

```bash
npm install stripe
```

## 4. Set Up Stripe Products

Run the setup script to create products in Stripe based on your sample data:

```bash
node scripts/setup-stripe-products.js
```

This will:
- Create products in your Stripe account
- Set up pricing for each product
- Add metadata for categories and handles

## 5. Update Product References

After running the setup script, you'll need to update your product references to use the Stripe product IDs. The script will output the product IDs that you can use.

## 6. Test the Integration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to a product page and test:
   - Product display
   - Add to cart functionality
   - Checkout flow

## 7. Production Setup

For production:

1. Switch to live Stripe keys (remove `_test` suffix)
2. Update `NEXT_PUBLIC_SITE_URL` to your production domain
3. Test the complete flow in production

## Troubleshooting

### Common Issues

1. **"Missing STRIPE_SECRET_KEY" error**
   - Make sure your `.env.local` file is in the project root
   - Check that the environment variable name is exactly `STRIPE_SECRET_KEY`

2. **Products not loading**
   - Verify your Stripe API keys are correct
   - Check the browser console for any API errors
   - Ensure your Stripe account has the products created

3. **Checkout not working**
   - Verify `NEXT_PUBLIC_SITE_URL` is set correctly
   - Check that your Stripe account is properly configured
   - Test with Stripe's test card numbers

### Test Card Numbers

Use these test card numbers for testing:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Requires authentication**: 4000 0025 0000 3155

## Support

If you encounter issues:

1. Check the Stripe Dashboard for any errors
2. Review the browser console for client-side errors
3. Check the server logs for API errors
4. Refer to the [Stripe Documentation](https://stripe.com/docs)

## Next Steps

Once Stripe is set up:

1. Customize the product data in the setup script
2. Add more product categories as needed
3. Implement webhooks for order processing
4. Add inventory management if required
5. Set up analytics and reporting
