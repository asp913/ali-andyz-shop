declare global {
  interface Window {
    __builderBuyBridgeMounted?: boolean;
  }
}

export function initBuilderBuyBridge() {
  const win = window as Window;
  if (win.__builderBuyBridgeMounted) return;
  win.__builderBuyBridgeMounted = true;

  function getSelectedSize(handle: string) {
    const el = document.querySelector<HTMLSelectElement>(
      `[data-size-for="${handle}"]`,
    );
    return el?.value || undefined;
  }

  async function post(url: string, body: any) {
    let res: Response;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err: any) {
      console.error("Network or fetch error", err);
      throw new Error(`Network error: ${err?.message || String(err)}`);
    }

    // Read response as text first to avoid read-once issues
    const txt = await res.text().catch(() => "");
    let parsed: any = undefined;
    try {
      parsed = txt ? JSON.parse(txt) : undefined;
    } catch {
      parsed = undefined;
    }

    if (!res.ok) {
      const msg =
        (parsed && parsed.error) ||
        txt ||
        `HTTP ${res.status} ${res.statusText}` ||
        "Checkout error";
      console.error(
        "Checkout server error:",
        res.status,
        res.statusText,
        txt,
        parsed,
      );
      throw new Error(msg);
    }

    if (parsed && parsed.url) {
      window.location.href = parsed.url;
      return;
    }

    // If no url in parsed JSON, try to parse as JSON from empty body
    try {
      const json =
        parsed ??
        (await (async () => {
          try {
            return await (res as any).json();
          } catch {
            return undefined;
          }
        })());
      if (json?.url) {
        window.location.href = json.url;
        return;
      }
    } catch {}

    throw new Error("Checkout response did not include a URL");
  }

  function onClick(e: Event) {
    const btn = (e.target as HTMLElement)?.closest(
      "[data-buy],[data-bundle]",
    ) as HTMLElement | null;
    if (!btn) return;

    if (btn.hasAttribute("data-buy")) {
      const handle = btn.getAttribute("data-handle") || "";
      const title = btn.getAttribute("data-title") || "";
      const priceId = btn.getAttribute("data-price-id") || "";
      const sizesAttr = btn.getAttribute("data-sizes") || "[]";
      let sizes: string[] = [];
      try {
        sizes = JSON.parse(sizesAttr);
      } catch {}
      const requiresSize = sizes.length && sizes[0] !== "OneSize";
      const size = getSelectedSize(handle);
      if (requiresSize && !size) {
        alert(`Please select a size for ${title}.`);
        return;
      }
      if (!priceId) {
        alert("Missing Stripe price.");
        return;
      }
      post("/api/checkout/single", {
        lineItems: [{ price: priceId, quantity: 1 }],
        metadata: { capsule: document.title, handle, size: size || "OneSize" },
      }).catch((err) => {
        console.error(err);
        alert(err.message || "Unable to start checkout.");
      });
      return;
    }

    if (btn.hasAttribute("data-bundle")) {
      const capsuleTitle =
        btn.getAttribute("data-capsule-title") || document.title;
      const bundlePrice = Number(btn.getAttribute("data-bundle-price") || "0");
      const itemsAttr = btn.getAttribute("data-items") || "[]";
      let items: Array<{
        handle: string;
        title: string;
        priceId?: string;
        sizes?: string[];
        required?: boolean;
      }> = [];
      try {
        items = JSON.parse(itemsAttr);
      } catch {}
      const missing = items
        .filter(
          (i) =>
            i.required !== false &&
            i.sizes &&
            i.sizes[0] !== "OneSize" &&
            !getSelectedSize(i.handle),
        )
        .map((i) => i.title);
      if (missing.length) {
        alert(`Please select sizes for: ${missing.join(", ")}`);
        return;
      }
      post("/api/checkout/bundle", {
        capsule: capsuleTitle,
        bundlePrice,
        items: items.map((i) => ({
          handle: i.handle,
          title: i.title,
          size:
            i.sizes?.[0] === "OneSize"
              ? "OneSize"
              : getSelectedSize(i.handle) || null,
          priceStripeId: i.priceId || null,
          requiredForBundle: i.required !== false,
        })),
      }).catch((err) => {
        console.error(err);
        alert(err.message || "Unable to start bundle checkout.");
      });
    }
  }

  document.addEventListener("click", onClick);
}

export default initBuilderBuyBridge;
