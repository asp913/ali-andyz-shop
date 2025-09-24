/**
 * Utility functions to ensure data is properly serialized for Next.js
 */

export function serializeProduct(product: any) {
  return {
    id: String(product.id || ''),
    name: String(product.name || ''),
    price: Number(product.price || 0),
    image: String(product.image || ''),
    badge: product.badge ? String(product.badge) : undefined,
    options: Array.isArray(product.options) ? product.options.map(String) : undefined,
    description: product.description ? String(product.description) : undefined,
    images: Array.isArray(product.images) ? product.images.map(String) : undefined,
    handle: product.handle ? String(product.handle) : undefined,
    category: product.category ? String(product.category) : undefined,
    stripePriceId: product.stripePriceId ? String(product.stripePriceId) : undefined,
  };
}

export function serializeProducts(products: any[]) {
  return products.map(serializeProduct);
}

export function serializeCapsule(capsule: any) {
  return {
    handle: String(capsule.handle || ''),
    title: String(capsule.title || ''),
    tagline: String(capsule.tagline || ''),
    bundlePrice: Number(capsule.bundlePrice || 0),
    bundleValue: Number(capsule.bundleValue || 0),
    bundleSavings: Number(capsule.bundleSavings || 0),
    priceRange: String(capsule.priceRange || ''),
    capsuleDescription: String(capsule.capsuleDescription || ''),
    sellingPoints: Array.isArray(capsule.sellingPoints) ? capsule.sellingPoints.map(String) : [],
    heroImage: String(capsule.heroImage || ''),
    flatLayImage: String(capsule.flatLayImage || ''),
    bundleStripeUrl: capsule.bundleStripeUrl ? String(capsule.bundleStripeUrl) : null,
    pieces: Array.isArray(capsule.pieces) ? capsule.pieces.map((piece: any) => ({
      id: String(piece.id || ''),
      productId: String(piece.productId || ''),
      name: String(piece.name || ''),
      price: Number(piece.price || 0),
      sizeOptions: Array.isArray(piece.sizeOptions) ? piece.sizeOptions.map(String) : [],
      isIncludedInCapsule: Boolean(piece.isIncludedInCapsule),
      stripeLinks: piece.stripeLinks ? Object.fromEntries(
        Object.entries(piece.stripeLinks).map(([key, value]) => [String(key), value ? String(value) : null])
      ) : {},
    })) : [],
  };
}
