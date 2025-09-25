import { useEffect } from "react";

export default function BuilderBuyBridge() {
  useEffect(() => {
    // prevent duplicate mounts (HMR / multiple App mounts)
    const win: any = window as any;
    if (win.__builderBuyBridgeMounted) return;
    win.__builderBuyBridgeMounted = true;

    function getSelectedSize(handle: string) {
      const el = document.querySelector<HTMLSelectElement>(
        `[data-size-for="${handle}"]`,
      );
      return el?.value || undefined;
    }

    async function post(url: string, body: any) {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // robust body handling: try read JSON, but fall back to text.
      let data: any = undefined;
      try {
        // clone so reading does not affect other consumers
        const clone = res.clone();
        data = await clone.json().catch(() => undefined);
      } catch {
        data = undefined;
      }

      if (!res.ok) {
        // try to surface any message
        const errMsg =
          data?.error || (await res.text().catch(() => "Checkout error"));
        throw new Error(errMsg || "Checkout error");
      }

      // prefer data.url, otherwise attempt to parse body as JSON
      const urlFromData = data?.url;
      if (urlFromData) {
        window.location.href = urlFromData;
        return;
      }

      // fallback: attempt to parse response as json (again) or as text
      try {
        const final = await res.json();
        if (final?.url) {
          window.location.href = final.url;
          return;
        }
      } catch {
        // ignore
      }

      // final fallback — try text
      const txt = await res.text().catch(() => null);
      if (txt) {
        try {
          const parsed = JSON.parse(txt);
          if (parsed?.url) {
            window.location.href = parsed.url;
            return;
          }
        } catch {}
      }

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
          metadata: {
            capsule: document.title,
            handle,
            size: size || "OneSize",
          },
        }).catch((err) => {
          console.error(err);
          alert(err.message || "Unable to start checkout.");
        });
        return;
      }

      if (btn.hasAttribute("data-bundle")) {
        const capsuleTitle =
          btn.getAttribute("data-capsule-title") || document.title;
        const bundlePrice = Number(
          btn.getAttribute("data-bundle-price") || "0",
        );
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
    return () => {
      document.removeEventListener("click", onClick);
      win.__builderBuyBridgeMounted = false;
    };
  }, []);
  return null;
}
