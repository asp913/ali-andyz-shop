import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchStripeProductsServer } from "@/lib/stripe";
import ProductClient from "./ProductClient";

interface ProductPageProps {
  params: {
    handle: string;
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
    const product = response.products.find(p => p.handle === params.handle || p.id === params.handle);
    
    if (!product) {
      notFound();
    }

    return <ProductClient product={product} />;
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }
}
