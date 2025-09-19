import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { getProductById } from "@/lib/sample-products";
import { Button } from "@/components/ui/button";
import TrustSignals from "@/components/site/TrustSignals";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import { getCapsuleDetails } from "@/lib/capsule-details";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = useMemo(() => (id ? getProductById(id) : undefined), [id]);
  const [size, setSize] = useState(product?.options?.[0] || "One size");
  const capsule = useMemo(() => (product ? getCapsuleDetails(product.id) : undefined), [product]);
  const [itemSizes, setItemSizes] = useState<Record<string, string>>({});
  const showFlatRight = product.id === 'mrt-003' || product.id === 'mrt-001' || product.id === 'mrt-002' || product.id === 'mrt-004' || product.id === 'mrt-005' || product.id === 'mrt-006' || product.id === 'mrt-007' || product.id === 'mrt-008' || product.id === 'mrt-009' || product.id === 'mrt-010' || product.id === 'wa-001' || product.id === 'wa-003' || product.id === 'wa-005' || product.id === 'wa-002' || product.id === 'wa-004' || product.id === 'wa-006' || product.id === 'wa-007' || product.id === 'wa-008' || product.id === 'rtw-008' || product.id === 'rtw-007' || product.id === 'rtw-006' || product.id === 'rtw-004' || product.id === 'rtw-001' || product.id === 'rtw-002' || product.id === 'rtw-003' || product.id === 'rtw-005' || product.id === 'rtw-009' || product.id === 'ma-001' || product.id === 'ma-002' || product.id === 'ma-003' || product.id === 'ma-004' || product.id === 'ma-005' || product.id === 'ma-006' || product.id === 'ma-007' || product.id === 'ma-008';
  const flatRightSrc = product.id === 'mrt-003'
    ? 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F9ab430586e25429da7084617e12c3fc9?format=webp&width=1600'
    : product.id === 'mrt-001'
    ? 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F9cf5d067456f4a35b404486c4afb04e2?format=webp&width=1600'
    : product.id === 'mrt-002'
    ? 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F46cd995d784e4294ac08648d9ed4da75?format=webp&width=1600'
    : product.id === 'mrt-004'
    ? 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F8a7bed98cead40b8987e3b38e1aed063?format=webp&width=1600'
    : product.id === 'mrt-005'
    ? 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F061c929ae6914789add3de1e3e401c18?format=webp&width=1600'
    : product.id === 'mrt-006'
    ? 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F04ced446b10d42c4a5bde48553805d62?format=webp&width=1600'
    : product.id === 'mrt-007'
    ? 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F41f751e1d3a14813be3e2c0d918535f2?format=webp&width=1600'
    : product.id === 'mrt-008'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F143e829039ef42ce92f74e9044934968?format=webp&width=1600')
    : product.id === 'mrt-009'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F918f2747b7b543fc9141e8692e18e471?format=webp&width=1600')
    : product.id === 'mrt-010'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F1c3a3d72b525422c9c6a803ae89acd05?format=webp&width=1600')
    : product.id === 'wa-001'
    ? (product.images?.[0] || product.image)
    : product.id === 'wa-003'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F20ff5e787acf4d259f0b0d78397403e3?format=webp&width=1600')
    : product.id === 'wa-005'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F72bac85631b742eea63dbbf9fd3cf038?format=webp&width=800')
    : product.id === 'wa-002'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fb3b275c6e356437f9e376b3c12f4fa7f?format=webp&width=1600')
    : product.id === 'wa-004'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F561b06bee9f042ff9fd7d35376fb0805?format=webp&width=1600')
    : product.id === 'wa-006'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fe33735d1e16448eebb7aa0c04a6cc7a7?format=webp&width=1600')
    : product.id === 'wa-007'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F75bed15853924ae08bb7a8418fdee852?format=webp&width=1600')
    : product.id === 'wa-008'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F83855c6501054cb78c2cd523e42102c4?format=webp&width=1600')
    : product.id === 'rtw-008'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F7872be3f192c403da885b37ba262bbd8?format=webp&width=1600')
    : product.id === 'rtw-007'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F58cf52b39f5c46dd86cd4cfc8455eb37?format=webp&width=1600')
    : product.id === 'rtw-006'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fd86a9a5ab5b14a388795f8211f2613ef?format=webp&width=1600')
    : product.id === 'rtw-004'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fb1f21b3c338d413b9aab7d19f7ddde52?format=webp&width=800')
    : product.id === 'rtw-002'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F6290fd2aa7a7464c9abdf0f8053b8e3e?format=webp&width=1600')
    : product.id === 'rtw-003'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F99789973ec8e434e884411b1d66c18ce?format=webp&width=1600')
    : product.id === 'rtw-005'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fa2e83f8ebc74421183ee526faf90d9d4?format=webp&width=1600')
    : product.id === 'rtw-009'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F20800732448b4e6681ab954a63c55a77?format=webp&width=800')
    : product.id === 'rtw-001'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fe65070acba58419a846281d90eb2b9df?format=webp&width=1600')
    : product.id === 'ma-001'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fbe7dea6b0511466eaa374e431788e71b?format=webp&width=800')
    : product.id === 'ma-002'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F60ef7b5b5920443b91d420a24aad573a?format=webp&width=800')
    : product.id === 'ma-003'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fc7012d08b0a24b33b24d5715f155a873?format=webp&width=800')
    : product.id === 'ma-004'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F2d0195d8c88e4bd096dd8072e033df22?format=webp&width=1600')
    : product.id === 'ma-005'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fa1edb899d65643d2a9f31e255d757006?format=webp&width=800')
    : product.id === 'ma-006'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F72a288d14ae941a69e6ec3b7c8ca63f4?format=webp&width=1600')
    : product.id === 'ma-007'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2Fe31259ac6321458497194eed5dbf317e?format=webp&width=800')
    : product.id === 'ma-008'
    ? (product.images?.[1] || 'https://cdn.builder.io/api/v1/image/assets%2F514b6cfd929047f0b5e645c455c5c65f%2F810bce640f184bd39397473a85cfe1e6?format=webp&width=800')
    : null;
  const leftImageSrc = product.id === 'wa-001'
    ? (product.images?.[1] || product.image)
    : (product.images?.[0] || product.image);
  const bundleItemsAttr = useMemo(() => (
    capsule ? JSON.stringify(capsule.items.map(i => ({ handle: i.handle, title: i.title, priceId: i.priceStripeId, sizes: i.sizes, required: i.requiredForBundle }))) : '[]'
  ), [capsule]);
  const motoUpgradeItemsAttr = useMemo(() => {
    if (!capsule || product.id !== 'wa-004') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: i.handle === 'graphic-silk-feel-square' ? true : i.requiredForBundle,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.id]);
  const airportUpgradeItemsAttr = useMemo(() => {
    if (!capsule || product.id !== 'wa-008') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: i.handle === 'slim-strap' ? true : i.requiredForBundle,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.id]);
  const cityUpgradeItemsAttr = useMemo(() => {
    if (!capsule || product.id !== 'rtw-001') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: ['mini-top-handle-bag','cat-eye-sunglasses','gold-hoop-earrings'].includes(i.handle) ? true : i.requiredForBundle,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.id]);
  const brunchUpgradeItemsAttr = useMemo(() => {
    if (!capsule || product.id !== 'rtw-003') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: i.handle === 'emerald-mini-hobo-bag' ? true : i.requiredForBundle,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.id]);
  const galaCompleteItemsAttr = useMemo(() => {
    if (!capsule || product.id !== 'rtw-004') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: ['gold-drawstring-pouch','gold-hoop-earrings','gold-chain-bracelet'].includes(i.handle) ? true : i.requiredForBundle,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.id]);
  const terrainEssBootsAttr = useMemo(() => {
    if (!capsule || product.id !== 'rtw-009') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: ['urban-puffer','fisherman-turtleneck','cargo-skirt','lug-boots'].includes(i.handle) ? true : false,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.id]);
  const terrainEssMocsAttr = useMemo(() => {
    if (!capsule || product.id !== 'rtw-009') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: ['urban-puffer','fisherman-turtleneck','cargo-skirt','shearling-mocs'].includes(i.handle) ? true : false,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.id]);
  const terrainCompleteBootsAttr = useMemo(() => {
    if (!capsule || product.id !== 'rtw-009') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: ['urban-puffer','fisherman-turtleneck','cargo-skirt','belt-bag','lug-boots'].includes(i.handle) ? true : false,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.id]);
  const terrainCompleteMocsAttr = useMemo(() => {
    if (!capsule || product.id !== 'rtw-009') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: ['urban-puffer','fisherman-turtleneck','cargo-skirt','belt-bag','shearling-mocs'].includes(i.handle) ? true : false,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.id]);
  const forestUpgradeItemsAttr = useMemo(() => {
    if (!capsule || product.id !== 'rtw-005') return null;
    const arr = capsule.items.map(i => ({
      handle: i.handle,
      title: i.title,
      priceId: i.priceStripeId,
      sizes: i.sizes,
      required: ['croc-embossed-top-handle-bag','gold-textured-hoop-earrings'].includes(i.handle) ? true : i.requiredForBundle,
    }));
    return JSON.stringify(arr);
  }, [capsule, product.id]);

  function SizeButton({ opt }: { opt: string }) {
    const href = (product as any).stripeLinks?.[opt] ?? null;
    if (href) {
      return (
        <a
          key={opt}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 border rounded-sm text-sm inline-block hover:bg-card"
          onClick={() => setSize(opt)}
        >
          {opt}
        </a>
      );
    }

    return (
      <button
        key={opt}
        onClick={() => setSize(opt)}
        className={`px-3 py-2 border rounded-sm text-sm ${size === opt ? "bg-card border-foreground" : "border-border hover:bg-card"}`}
      >
        {opt}
      </button>
    );
  }

  if (!product) {
    return (
      <main className="container mx-auto px-8 py-16">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p className="mt-2 text-muted-foreground">
          The item you’re looking for doesn’t exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="underline hover:no-underline">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="py-10 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-card">
              <img
                src={leftImageSrc}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            {showFlatRight ? (
              <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-card">
                <img
                  src={flatRightSrc || ''}
                  alt={`${product.name} flat lay`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <>
                <h1 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide">
                  {product.name}
                </h1>
                <div className="mt-2 text-xl">${product.price}</div>
                {product.badge && (
                  <div className="mt-3 inline-block border border-border px-2 py-1 text-xs rounded-sm">
                    {product.badge}
                  </div>
                )}

                <div className="mt-6 space-y-3 text-muted-foreground">
                  <p>{product.description}</p>
                </div>

                <div className="mt-6">
                  <div className="text-sm text-muted-foreground">
                    {product.options?.length
                      ? "Choose your size to checkout instantly."
                      : ""}
                  </div>
                  {product.options?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.options.map((opt) => (
                        <SizeButton key={opt} opt={opt} />
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 flex gap-3">
                  {((product as any).stripeLinks?.[size] as string) ? (
                    <a
                      href={(product as any).stripeLinks[size]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-foreground text-background px-5 py-3 rounded-sm font-medium"
                    >
                      Buy {size} — ${product.price}
                    </a>
                  ) : (
                    <Button
                      className="rounded-sm"
                      onClick={() => {
                        document.dispatchEvent(
                          new CustomEvent("capsule:addToCart", {
                            detail: {
                              variantId: `${product.id}:${size}`,
                              qty: 1,
                              name: product.name,
                              price: product.price,
                              size,
                            },
                          }),
                        );
                        alert(`${product.name} (${size}) added to cart`);
                      }}
                    >
                      Add to Cart
                    </Button>
                  )}

                  <Button variant="outline" className="rounded-sm" asChild>
                    <a href="/womens-activewear">Continue Shopping</a>
                  </Button>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">Curated in small runs. Please allow ~21 days for delivery.</div>
              </>
            )}
          </div>
        </div>
      </section>

      {capsule && (
        <section className="px-8 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-light text-foreground">{capsule.capsuleTitle}</h2>
                <p className="text-muted-foreground">{capsule.capsuleSubtitle}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-sm border border-border p-4">
                    <div className="text-sm text-muted-foreground">Bundle Price</div>
                    <div className="text-xl font-light text-foreground">${capsule.bundlePrice}</div>
                  </div>
                  <div className="rounded-sm border border-border p-4">
                    <div className="text-sm text-muted-foreground">Bundle Value</div>
                    <div className="text-xl font-light text-foreground">${capsule.bundleValue}</div>
                  </div>
                </div>
                <div className="mt-2 space-y-2">
                  {product.id === 'wa-004' ? (
                    <>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="Off-Duty Luxe — Moto Edit"
                        data-bundle-price={String(109)}
                        data-items={bundleItemsAttr}
                      >
                        Add Capsule — $109
                      </Button>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="Off-Duty Luxe — Moto Edit — Upgrade"
                        data-bundle-price={String(129)}
                        data-items={motoUpgradeItemsAttr || bundleItemsAttr}
                      >
                        Upgrade with Scarf — $129
                      </Button>
                    </>
                  ) : product.id === 'wa-008' ? (
                    <>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="Airport Set — Capsule or Mix & Match"
                        data-bundle-price={String(199)}
                        data-items={bundleItemsAttr}
                      >
                        Complete Airport Set — $199
                      </Button>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="Airport Set — Upgrade with Strap"
                        data-bundle-price={String(209)}
                        data-items={airportUpgradeItemsAttr || bundleItemsAttr}
                      >
                        Upgrade with Strap — $209
                      </Button>
                    </>
                  ) : product.id === 'rtw-001' ? (
                    <>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="City Edit — Jet-Set Capsule — Essentials"
                        data-bundle-price={String(299)}
                        data-items={bundleItemsAttr}
                      >
                        Essentials — $299
                      </Button>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="City Edit — Jet-Set Capsule — Complete Look"
                        data-bundle-price={String(369)}
                        data-items={cityUpgradeItemsAttr || bundleItemsAttr}
                      >
                        Complete Look — $369
                      </Button>
                    </>
                  ) : product.id === 'rtw-003' ? (
                    <>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="City Brunch — Essentials (4 pcs)"
                        data-bundle-price={String(529)}
                        data-items={bundleItemsAttr}
                      >
                        Essentials — $529
                      </Button>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="City Brunch — Complete (5 pcs)"
                        data-bundle-price={String(599)}
                        data-items={brunchUpgradeItemsAttr || bundleItemsAttr}
                      >
                        Complete — $599
                      </Button>
                    </>
                  ) : product.id === 'rtw-005' ? (
                    <>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="Forest Luxe — Essentials (3 pcs)"
                        data-bundle-price={String(219)}
                        data-items={bundleItemsAttr}
                      >
                        Essentials — $219
                      </Button>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="Forest Luxe — Complete (5 pcs)"
                        data-bundle-price={String(269)}
                        data-items={forestUpgradeItemsAttr || bundleItemsAttr}
                      >
                        Complete — $269
                      </Button>
                    </>
                  ) : product.id === 'rtw-004' ? (
                    <>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="White Riviera — Gala Core (3 pcs)"
                        data-bundle-price={String(279)}
                        data-items={bundleItemsAttr}
                      >
                        Gala Core — $279
                      </Button>
                      <Button
                        className="rounded-sm w-full sm:w-auto"
                        data-bundle
                        data-capsule-title="White Riviera — Gala Complete (6 pcs)"
                        data-bundle-price={String(329)}
                        data-items={galaCompleteItemsAttr || bundleItemsAttr}
                      >
                        Gala Complete — $329
                      </Button>
                    </>
                  ) : product.id === 'rtw-009' ? (
                    <>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button className="rounded-sm" data-bundle data-capsule-title="Urban Terrain — Essentials (Boots)" data-bundle-price={String(299)} data-items={terrainEssBootsAttr || bundleItemsAttr}>
                          Essentials — Boots $299
                        </Button>
                        <Button className="rounded-sm" data-bundle data-capsule-title="Urban Terrain — Essentials (Mocs)" data-bundle-price={String(269)} data-items={terrainEssMocsAttr || bundleItemsAttr}>
                          Essentials — Mocs $269
                        </Button>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button className="rounded-sm" data-bundle data-capsule-title="Urban Terrain — Complete (Boots)" data-bundle-price={String(339)} data-items={terrainCompleteBootsAttr || bundleItemsAttr}>
                          Complete — Boots $339
                        </Button>
                        <Button className="rounded-sm" data-bundle data-capsule-title="Urban Terrain — Complete (Mocs)" data-bundle-price={String(309)} data-items={terrainCompleteMocsAttr || bundleItemsAttr}>
                          Complete — Mocs $309
                        </Button>
                      </div>
                    </>
                  ) : (
                    <Button
                      className="rounded-sm"
                      data-bundle
                      data-capsule-title={capsule.capsuleTitle}
                      data-bundle-price={String(capsule.bundlePrice)}
                      data-items={bundleItemsAttr}
                    >
                      {(product.id === 'ma-001' || product.id === 'ma-002' || product.id === 'ma-003' || product.id === 'ma-004' || product.id === 'ma-005' || product.id === 'ma-006' || product.id === 'ma-007' || product.id === 'ma-008') ? `Add Full Capsule — $${capsule.bundlePrice}` : `Buy Bundle — $${capsule.bundlePrice}`}
                    </Button>
                  )}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">Curated in small runs. Please allow ~21 days for delivery.</div>
                <div className="text-sm text-muted-foreground mt-2">{capsule.priceRangeCopy}</div>
                <div>
                  <a href={(capsule.sizeGuideHref?.startsWith('/size-guide') ? ((product?.id?.startsWith('ma-') || product?.id?.startsWith('mrt-')) ? '/size-guide#men' : '/size-guide#women') : capsule.sizeGuideHref)} className="underline hover:no-underline text-sm">Size Guide</a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 text-foreground">Items</h3>
                <ol className="space-y-3 list-decimal pl-5">
                  {capsule.items.map((it, idx) => {
                    const selected = itemSizes[it.handle] ?? (it.sizes?.[0] || 'OneSize');
                    const isDirectLink = typeof it.priceStripeId === 'string' && it.priceStripeId.startsWith('http');
                    return (
                      <li key={it.handle + idx} className="border border-border rounded-sm p-4">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-foreground">{it.title}</div>
                          <div className="text-foreground">${it.price}</div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">sizes: [{it.sizes.join(', ')}]</div>
                        {typeof it.inventoryLeft === 'number' ? (
                          <div className="text-sm text-muted-foreground">inventoryLeft: {it.inventoryLeft}</div>
                        ) : null}
                        <div className="text-xs text-muted-foreground mt-1">requiredForBundle: {it.requiredForBundle ? 'true' : 'false'}</div>
                        <div className="text-xs text-muted-foreground">handle: {it.handle}</div>
                        <div className="mt-3 flex items-center gap-2">
                          {it.sizes.length > 1 ? (
                            <select
                              value={selected}
                              onChange={(e) => setItemSizes((m) => ({ ...m, [it.handle]: e.target.value }))}
                              className="px-2 py-1 border border-border rounded-sm text-sm bg-background"
                              aria-label={`Select size for ${it.title}`}
                              data-size-for={it.handle}
                            >
                              {it.sizes.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          ) : null}

                          <Button
                            className="rounded-sm"
                            data-buy
                            data-handle={it.handle}
                            data-title={it.title}
                            data-price-id={String(it.priceStripeId || '')}
                            data-sizes={JSON.stringify(it.sizes)}
                          >
                            Buy
                          </Button>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}

      <TrustSignals />
      <CTASection />
      <ContactSection />
    </main>
  );
}
