import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProducts, getProductById } from "@/lib/sample-products";
import { Button } from "@/components/ui/button";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { getCapsuleDetails } from "@/lib/capsule-details";
import Link from "next/link";
import ProductClient from "./ProductClient";

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = allProducts.find(p => p.id === params.handle || p.handle === params.handle);
  
  if (!product) {
    return {
      title: "Product Not Found | Ali + Andy Z",
    };
  }

  return {
    title: `${product.name} | Ali + Andy Z`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = allProducts.find(p => p.id === params.handle || p.handle === params.handle);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
