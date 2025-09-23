import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchStripeProductsServer } from "@/lib/stripe";
import { getCapsuleDetailsFromStripe } from "@/lib/capsule-details";
import ProductClient from "./ProductClient";

interface ProductPageProps {
  params: {
    handle: string; // This can be either a handle or a product ID
  };
}

// Generate static params for all products
export async function generateStaticParams() {
  // For now, return empty array to avoid build issues
  // TODO: Re-enable once Stripe is properly set up
  return [];
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  // Simplified metadata for now to avoid build issues
  return {
    title: `Product ${params.handle} | Ali + Andy Z`,
    description: "Shop premium fashion and activewear at Ali + Andy Z.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  try {
    
        // Fetch all products from Stripe
        const response = await fetchStripeProductsServer('all');
        // Prioritize handle lookup, fall back to ID only if handle doesn't exist
        const product = response.products.find(p => p.handle === params.handle) || 
                       response.products.find(p => p.id === params.handle);
    
    if (!product) {
      notFound();
    }

        // Fetch capsule details if this is a capsule product
        let capsuleDetails = null;
        if (product.productType === 'capsule') {
          try {
            capsuleDetails = await getCapsuleDetailsFromStripe(product.handle || params.handle);
          } catch (error) {
            console.error('Error fetching capsule details:', error);
          }
        }

    return <ProductClient product={product} capsuleDetails={capsuleDetails} />;
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }
}
