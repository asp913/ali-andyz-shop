# Stripe Integration Documentation

## Overview

This document outlines the complete Stripe integration implementation for the Ali + Andy Z e-commerce platform. The integration enables dynamic product management, capsule-item relationships, and seamless checkout functionality.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Core Features Implemented](#core-features-implemented)
3. [File Structure](#file-structure)
4. [API Endpoints](#api-endpoints)
5. [Data Models](#data-models)
6. [Capsule-Item Relationship System](#capsule-item-relationship-system)
7. [Checkout Flow](#checkout-flow)
8. [Cart Management](#cart-management)
9. [UI Components](#ui-components)
10. [Configuration](#configuration)
11. [Testing & Verification](#testing--verification)
12. [Troubleshooting](#troubleshooting)

## Architecture Overview

The Stripe integration follows a server-side rendering (SSR) approach with Next.js, ensuring optimal performance and SEO. The system is designed to:

- Fetch products dynamically from Stripe
- Maintain capsule-item relationships through metadata
- Support both individual and bundle purchases
- Provide real-time cart management
- Handle checkout sessions securely

## Core Features Implemented

### ✅ Dynamic Product Management
- Products are fetched directly from Stripe (no static data dependency)
- Real-time product information including prices, images, and availability
- Support for multiple product categories (womens-activewear, womens-ready-to-wear, mens-activewear, mens-ready-to-wear)

### ✅ Capsule-Item Relationship System
- Capsules can be purchased as complete bundles
- Individual items within capsules can be purchased separately
- Bidirectional relationships maintained through Stripe metadata
- Quantity management for both bundles and individual items

### ✅ Cart Management
- Client-side cart persistence using localStorage
- Real-time cart updates with custom events
- Support for both individual items and bundle purchases
- Cart drawer with auto-close after successful payment

### ✅ Checkout Integration
- Stripe Checkout sessions for secure payment processing
- Support for both individual and bundle checkout flows
- Success and cancellation page handling
- Automatic cart clearing after successful payment

### ✅ Toast Notifications
- User-friendly success/error messages
- Auto-dismissing notifications (3 seconds)
- Bottom-left positioning for better UX

## File Structure

```
app/
├── api/
│   ├── checkout/
│   │   ├── single/route.ts          # Individual item checkout
│   │   └── bundle/route.ts          # Bundle checkout
│   └── stripe/
│       └── products/route.ts        # Product API endpoint
├── checkout/
│   ├── success/page.tsx             # Payment success page
│   └── cancelled/page.tsx           # Payment cancellation page
├── components/
│   ├── checkout/
│   │   └── CheckoutButton.tsx       # Checkout button component
│   └── site/
│       ├── CartDrawer.tsx           # Shopping cart drawer
│       ├── ProductCard.tsx          # Product display card
│       └── ...
├── product/[handle]/
│   ├── page.tsx                     # Product detail page (server)
│   └── ProductClient.tsx            # Product detail page (client)
└── [category]/
    ├── page.tsx                     # Category pages (server)
    └── [Category]Client.tsx         # Category pages (client)

lib/
├── stripe.ts                        # Stripe API functions
├── cart.ts                          # Cart management
├── cart-stripe.ts                   # Stripe-specific cart functions
└── capsule-details.ts               # Capsule-item relationship logic

scripts/
├── create-capsules-for-all-categories.js  # Bulk capsule creation
└── manage-stripe-products.js        # Product management utilities
```

## API Endpoints

### GET /api/stripe/products
Fetches products from Stripe with optional filtering.

**Query Parameters:**
- `category` (optional): Filter by product category
- `includeIndividualItems` (optional): Include individual items in results

**Response:**
```typescript
{
  products: StripeProduct[],
  hasMore: boolean
}
```

### POST /api/checkout/single
Creates a Stripe checkout session for individual items.

**Request Body:**
```typescript
{
  lineItems: Stripe.Checkout.SessionCreateParams.LineItem[],
  metadata?: Record<string, string>
}
```

### POST /api/checkout/bundle
Creates a Stripe checkout session for capsule bundles.

**Request Body:**
```typescript
{
  capsule: string,
  bundlePrice: number,
  items: Array<{
    handle: string,
    title: string,
    size: string | null,
    priceStripeId: string | null,
    requiredForBundle: boolean
  }>
}
```

## Data Models

### StripeProduct
```typescript
export type StripeProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  badge?: string;
  options: string[];
  handle: string;
  stripePriceId: string;
  category: string;
  productType?: string;
  active: boolean;
  created: number;
  updated: number;
  metadata?: Stripe.Metadata;
};
```

### CartItem
```typescript
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  qty?: number;
  image?: string;
  variantId?: string;
  size?: string;
  stripePriceId?: string;
};
```

### CapsuleDetails
```typescript
export type CapsuleDetails = {
  productId: string;
  name: string;
  description: string;
  images: string[];
  category: string;
  badge?: string;
  options?: { name: string; values: string[] }[];
  productType: 'capsule';
  price: number;
  priceStripeId: string;
  items: CapsuleItem[];
};
```

## Capsule-Item Relationship System

### Metadata Structure

**Capsule Products:**
```typescript
{
  productType: 'capsule',
  category: 'womens-activewear',
  bundlePrice: '99',
  totalQuantity: '25',
  individualItems: '["prod_123", "prod_456", "prod_789"]'
}
```

**Individual Items:**
```typescript
{
  productType: 'individual',
  parentCapsuleId: 'prod_capsule_123',
  availableQuantity: '25',
  requiredForBundle: 'true',
  bundleOnly: 'false',
  sizes: '["XS", "S", "M", "L"]',
  category: 'womens-activewear'
}
```

### Relationship Logic

1. **Capsule Creation**: Individual items are created first, then the capsule with references to item IDs
2. **Bidirectional Links**: Both capsule and items maintain references to each other
3. **Dynamic Fetching**: `getCapsuleDetailsFromStripe()` fetches capsule details and associated items
4. **Category Filtering**: Category pages show only capsules, product pages show capsules with their items

## Checkout Flow

### Individual Item Checkout
1. User clicks "Add to Cart" on individual item
2. Item added to localStorage cart
3. User clicks "Checkout" in cart drawer
4. `createCheckoutSession()` called with cart items
5. User redirected to Stripe Checkout
6. After payment: redirected to success page
7. Cart cleared and drawer closed

### Bundle Checkout
1. User clicks "Buy Bundle" on capsule product
2. Bundle added to cart with special handling
3. Checkout process same as individual items
4. Stripe processes bundle as single line item

## Cart Management

### Features
- **Persistence**: Cart stored in localStorage
- **Real-time Updates**: Custom events for UI synchronization
- **Quantity Management**: Add/remove items with quantity controls
- **Auto-close**: Cart drawer closes when empty (e.g., after payment)
- **Validation**: Stripe price ID validation before checkout

### Event System
```typescript
// Cart updated event
document.dispatchEvent(new CustomEvent('cart:updated', {
  detail: { items: cartItems, total: cartTotal }
}));

// Cart toggle event
document.dispatchEvent(new Event('cart:toggle'));
```

## UI Components

### CartDrawer
- Slide-out cart from right side
- Real-time item display and quantity controls
- Checkout button integration
- Auto-close functionality

### ProductCard
- Displays product information
- Add to cart functionality
- Size selection for products with options
- Image gallery support

### CheckoutButton
- Loading states during checkout creation
- Error handling for missing price IDs
- Integration with both individual and bundle flows

## Manual Product Creation in Stripe Dashboard

### Creating Capsule Products

1. **Navigate to Products** in your Stripe Dashboard
2. **Click "Add Product"**
3. **Fill in Product Details:**
   - **Name**: e.g., "Studio Flow — Capsule or Mix & Match"
   - **Description**: Detailed description of the capsule
   - **Images**: Upload capsule images
   - **Pricing**: Set the bundle price (e.g., $99)

4. **Configure Metadata** (Critical for relationships):
   ```
   productType: capsule
   category: womens-activewear
   bundlePrice: 99
   totalQuantity: 25
   individualItems: ["prod_123", "prod_456", "prod_789"]
   handle: studio-flow-capsule
   badge: New
   ```

5. **Save the Product** and note the Product ID (e.g., `prod_ABC123`)

### Creating Individual Items

1. **Create Each Individual Item** as a separate product
2. **Fill in Product Details:**
   - **Name**: e.g., "Sunset Flow Tank"
   - **Description**: Description of the individual item
   - **Images**: Upload item images
   - **Pricing**: Set individual item price (e.g., $24)

3. **Configure Metadata** (Critical for relationships):
   ```
   productType: individual
   parentCapsuleId: prod_ABC123
   availableQuantity: 25
   requiredForBundle: true
   bundleOnly: false
   sizes: ["XS", "S", "M", "L"]
   category: womens-activewear
   handle: sunset-flow-tank
   ```

4. **Save Each Item** and note their Product IDs

### Establishing Relationships

1. **Update Capsule Metadata** with Individual Item IDs:
   - Go back to your capsule product
   - Edit the `individualItems` metadata field
   - Add the Product IDs of all individual items: `["prod_123", "prod_456", "prod_789"]`

2. **Verify Individual Item Metadata**:
   - Ensure each individual item has the correct `parentCapsuleId`
   - Verify `productType` is set to `individual`
   - Confirm `category` matches the capsule category

### Metadata Field Reference

#### Capsule Product Metadata
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `productType` | string | Must be "capsule" | `capsule` |
| `category` | string | Product category | `womens-activewear` |
| `bundlePrice` | string | Bundle price as string | `99` |
| `totalQuantity` | string | Total capsule quantity | `25` |
| `individualItems` | string | JSON array of item IDs | `["prod_123", "prod_456"]` |
| `handle` | string | URL-friendly identifier | `studio-flow-capsule` |
| `badge` | string | Optional badge text | `New` |

#### Individual Item Metadata
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `productType` | string | Must be "individual" | `individual` |
| `parentCapsuleId` | string | Capsule product ID | `prod_ABC123` |
| `availableQuantity` | string | Available stock | `25` |
| `requiredForBundle` | string | Required for bundle | `true` |
| `bundleOnly` | string | Bundle only item | `false` |
| `sizes` | string | JSON array of sizes | `["XS", "S", "M", "L"]` |
| `category` | string | Must match capsule | `womens-activewear` |
| `handle` | string | URL-friendly identifier | `sunset-flow-tank` |

### Step-by-Step Example

**Creating "Studio Flow" Capsule:**

1. **Create Capsule Product:**
   - Name: "Studio Flow — Capsule or Mix & Match"
   - Price: $99
   - Metadata: `productType: capsule`, `category: womens-activewear`

2. **Create Individual Items:**
   - Item 1: "Sunset Flow Tank" ($24)
   - Item 2: "Sunset Flow Shorts" ($32)
   - Item 3: "Sunset Flow Wrap" ($42)
   - Item 4: "Sunset Flow Headband" ($12)
   - Item 5: "Sunset Flow Tote" ($25)

3. **Set Individual Item Metadata:**
   - Each item gets `parentCapsuleId: [capsule_product_id]`
   - Each item gets `productType: individual`
   - Each item gets `category: womens-activewear`

4. **Update Capsule with Item IDs:**
   - Add all individual item Product IDs to capsule's `individualItems` metadata

### Verification Checklist

- [ ] Capsule product has `productType: capsule`
- [ ] Individual items have `productType: individual`
- [ ] All items have matching `category` values
- [ ] Individual items have correct `parentCapsuleId`
- [ ] Capsule has `individualItems` array with all item IDs
- [ ] All products have valid `handle` values
- [ ] All products have prices set
- [ ] All products are active/enabled

### Common Mistakes to Avoid

1. **Wrong productType**: Ensure capsules are "capsule" and items are "individual"
2. **Mismatched categories**: All related products must have the same category
3. **Missing parentCapsuleId**: Individual items must reference their capsule
4. **Incorrect individualItems array**: Capsule must list all its item IDs
5. **Missing handles**: All products need URL-friendly handles
6. **Inactive products**: Ensure all products are active in Stripe

## Configuration

### Environment Variables
```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Stripe Configuration
- API Version: `2024-06-20`
- Currency: USD
- Checkout Mode: Payment
- Shipping: US and Canada only

## Testing & Verification

### Category Pages
- ✅ Women's Activewear: Shows 2 capsule products
- ✅ Women's Ready to Wear: Shows 1 capsule product
- ✅ Men's Activewear: Shows 1 capsule product
- ✅ Men's Ready to Wear: Shows 1 capsule product

### Product Pages
- ✅ Individual items display correctly
- ✅ Bundle purchase functionality works
- ✅ Individual item purchase works
- ✅ Size selection works
- ✅ Cart integration works

### Checkout Flow
- ✅ Individual item checkout works
- ✅ Bundle checkout works
- ✅ Success page clears cart
- ✅ Cart drawer closes after payment
- ✅ Toast notifications work correctly

## Troubleshooting

### Common Issues

1. **Missing Stripe Price ID Error**
   - **Cause**: Individual items not properly linked to Stripe prices
   - **Solution**: Ensure `stripePriceId` is set in cart items before checkout

2. **Cart Drawer Stays Open After Payment**
   - **Cause**: Cart not cleared or drawer not closed
   - **Solution**: Success page calls `clearCart()` and drawer auto-closes when empty

3. **Individual Items Not Showing on Product Page**
   - **Cause**: `getCapsuleDetailsFromStripe()` not finding items
   - **Solution**: Check parent-child relationships in Stripe metadata

4. **Products Not Appearing on Category Pages**
   - **Cause**: Incorrect filtering logic
   - **Solution**: Ensure `productType === 'capsule'` filtering is applied

### Debug Tools

1. **Console Logging**: Debug logs in `getCapsuleDetailsFromStripe()`
2. **Stripe Dashboard**: Verify product and price creation
3. **Network Tab**: Check API responses
4. **Local Storage**: Inspect cart data

## Future Enhancements

1. **Inventory Management**: Real-time stock tracking
2. **Discount Codes**: Stripe promotion codes integration
3. **Subscription Products**: Recurring payment support
4. **Analytics**: Purchase tracking and reporting
5. **Multi-currency**: International payment support

## Conclusion

The Stripe integration provides a robust, scalable foundation for the Ali + Andy Z e-commerce platform. The capsule-item relationship system enables flexible product management while maintaining a clean user experience. The implementation follows Next.js best practices and provides excellent performance and SEO benefits.

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Status**: Production Ready
