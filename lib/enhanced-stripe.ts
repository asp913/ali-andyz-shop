import { builder } from '@builder.io/sdk';
import { fetchStripeProductsServer, StripeProduct, StripeProductsResponse } from './stripe';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export type EnhancedProduct = StripeProduct & {
  builderContent?: {
    enhancedDescription?: string;
    features?: string[];
    sizingInfo?: string;
    careInstructions?: string;
    additionalImages?: string[];
    customBadge?: string;
  };
};

export async function fetchEnhancedProducts(category: string = 'all', includeIndividualItems: boolean = false): Promise<{ products: EnhancedProduct[]; hasError: boolean }> {
  try {
    // Get products from Stripe
    const stripeResponse = await fetchStripeProductsServer(category, includeIndividualItems);
    
    // Get Builder.io content for all products
    const builderProducts = await builder.getAll('product', {
      options: { noTargeting: true },
    });

    // Merge Stripe products with Builder.io content
    const enhancedProducts: EnhancedProduct[] = stripeResponse.products.map(stripeProduct => {
      // Find matching Builder.io content by Stripe product ID
      const builderContent = builderProducts.find(
        bp => bp.data?.stripeProductId === str
# Backup your current womens-activewear page
cp app/womens-activewear/page.tsx app/womens-activewear/page.tsx.backup

# Update it to use enhanced products
sed -i 's/fetchStripeProductsServer/fetchEnhancedProducts/g' app/womens-activewear/page.tsx
sed -i '4i import { fetchEnhancedProducts } from "@/lib/enhanced-stripe";' app/womens-activewear/page.tsx
sed -i '/import { fetchStripeProductsServer }/d' app/womens-activewear/page.tsx
git add .
git commit -m "Add Builder.io enhanced product integration"
git push origin main
rm lib/enhanced-stripe.ts
cat > lib/enhanced-stripe.ts << 'EOF'
import { builder } from '@builder.io/sdk';
import { fetchStripeProductsServer, StripeProduct } from './stripe';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export type EnhancedProduct = StripeProduct & {
  builderContent?: {
    enhancedDescription?: string;
    features?: string[];
    sizingInfo?: string;
    careInstructions?: string;
    additionalImages?: string[];
    customBadge?: string;
  };
};

export async function fetchEnhancedProducts(category: string = 'all', includeIndividualItems: boolean = false): Promise<{ products: EnhancedProduct[]; hasError: boolean }> {
  try {
    // Get products from Stripe
    const stripeResponse = await fetchStripeProductsServer(category, includeIndividualItems);
    
    // Get Builder.io content for all products
    const builderProducts = await builder.getAll('product', {
      options: { noTargeting: true },
    });

    // Merge Stripe products with Builder.io content
    const enhancedProducts: EnhancedProduct[] = stripeResponse.products.map(stripeProduct => {
      // Find matching Builder.io content by Stripe product ID
      const builderContent = builderProducts.find(
        bp => bp.data?.stripeProductId === stripeProduct.id
      );

      return {
        ...stripeProduct,
        // Override with Builder.io content if available
        description: builderContent?.data?.enhancedDescription || stripeProduct.description,
        images: builderContent?.data?.additionalImages?.length > 0 
          ? [...stripeProduct.images, ...builderContent.data.additionalImages]
          : stripeProduct.images,
        badge: builderContent?.data?.customBadge || stripeProduct.badge,
        builderContent: builderContent ? {
          enhancedDescription: builderContent.data?.enhancedDescription,
          features: builderContent.data?.features || [],
          sizingInfo: builderContent.data?.sizingInfo,
          careInstructions: builderContent.data?.careInstructions,
          additionalImages: builderContent.data?.additionalImages || [],
          customBadge: builderContent.data?.customBadge,
        } : undefined,
      };
    });

    return { products: enhancedProducts, hasError: false };
  } catch (error) {
    console.error('Error fetching enhanced products:', error);
    // Fallback to regular Stripe products if Builder.io fails
    const stripeResponse = await fetchStripeProductsServer(category, includeIndividualItems);
    return { products: stripeResponse.products, hasError: false };
  }
}
  try {
    // Get products from Stripe
    const stripeResponse = await fetchStripeProductsServer(category, includeIndividualItems);
    
    // Get Builder.io content for all products
    const builderProducts = await builder.getAll('product', {
      options: { noTargeting: true },
    });

    // Merge Stripe products with Builder.io content
    const enhancedProducts: EnhancedProduct[] = stripeResponse.products.map(stripeProduct => {
      // Find matching Builder.io content by Stripe product ID
      const builderContent = builderProducts.find(
        bp => bp.data?.stripeProductId === stripeProduct.id
      );

      return {
        ...stripeProduct,
        // Override with Builder.io content if available
        description: builderContent?.data?.enhancedDescription || stripeProduct.description,
        images: builderContent?.data?.additionalImages?.length > 0 
          ? [...stripeProduct.images, ...builderContent.data.additionalImages]
          : stripeProduct.images,
        badge: builderContent?.data?.customBadge || stripeProduct.badge,
        builderContent: builderContent ? {
          enhancedDescription: builderContent.data?.enhancedDescription,
          features: builderContent.data?.features || [],
          sizingInfo: builderContent.data?.sizingInfo,
          careInstructions: builderContent.data?.careInstructions,
          additionalImages: builderContent.data?.additionalImages || [],
          customBadge: builderContent.data?.customBadge,
        } : undefined,
      };
    });

    return { products: enhancedProducts, hasError: false };
  } catch (error) {
    console.error('Error fetching enhanced products:', error);
    // Fallback to regular Stripe products if Builder.io fails
    const stripeResponse = await fetchStripeProductsServer(category, includeIndividualItems);
    return { products: stripeResponse.products, hasError: false };
  }
}
