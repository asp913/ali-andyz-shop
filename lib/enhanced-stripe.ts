import { builder } from '@builder.io/sdk';
import { fetchStripeProductsServer, StripeProduct } from './stripe';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export type EnhancedProduct = StripeProduct & {
  builderContent?: {
    capsuleInfo?: any;
    bundlePrice?: number;
    bundleValue?: number;
    items?: any[];
    inventoryLeft?: number;
    additionalDetails?: string;
  };
};

export async function fetchEnhancedProducts(category: string = 'all', includeIndividualItems: boolean = false): Promise<{ products: EnhancedProduct[]; hasError: boolean }> {
  try {
    // Get products from Stripe
    const stripeResponse = await fetchStripeProductsServer(category, includeIndividualItems);
    
    // Get all Builder.io content (capsules and individual products)
    const builderContent = await builder.getAll('page', {
      options: { noTargeting: true },
    });

    // Merge Stripe products with Builder.io content
    const enhancedProducts: EnhancedProduct[] = stripeResponse.products.map(stripeProduct => {
      // Try to match by handle first, then by product name
      const matchingBuilder = builderContent.find(content => {
        return content.data?.handle === stripeProduct.handle ||
               content.data?.items?.some((item: any) => item.handle === stripeProduct.handle) ||
               content.data?.title?.toLowerCase().includes(stripeProduct.name.toLowerCase());
      });

      if (matchingBuilder) {
        return {
          ...stripeProduct,
          description: matchingBuilder.data?.description || stripeProduct.description,
          builderContent: {
            capsuleInfo: matchingBuilder.data,
            bundlePrice: matchingBuilder.data?.bundlePrice,
            bundleValue: matchingBuilder.data?.bundleValue,
            items: matchingBuilder.data?.items || [],
            inventoryLeft: matchingBuilder.data?.inventoryLeft,
            additionalDetails: matchingBuilder.data?.additionalDetails,
          }
        };
      }

      return stripeProduct;
    });

    return { products: enhancedProducts, hasError: false };
  } catch (error) {
    console.error('Error fetching enhanced products:', error);
    const stripeResponse = await fetchStripeProductsServer(category, includeIndividualItems);
    return { products: stripeResponse.products, hasError: false };
  }
}
