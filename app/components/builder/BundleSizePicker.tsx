"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export type Item = {
  title: string;
  handle: string;
  sizes: string[];
  price?: number;
  imageUrl?: string;
  requiredForBundle?: boolean; // default true
  inventoryLeft?: number;
  inventoryBySize?: Record<string, number>;
  defaultSize?: string;
};

export type Props = {
  items: Item[];
  bundlePrice: number;
  trigger?: React.ReactNode; // optional custom trigger node
  onAddBundle?: (payload: {
    bundlePrice: number;
    selections: { handle: string; title: string; size: string; qty: number }[];
  }) => Promise<void> | void;
  title?: string;
  subtitle?: string;
  rememberKey?: string;
  i18n?: Partial<{
    oneSize: string;
    addBundle: string;
    adding: string;
    total: string;
    close: string;
    missingPrefix: string;
  }>;
  children?: React.ReactNode; // Builder children can be used as trigger
};

const DEFAULT_I18N = {
  oneSize: "One Size",
  addBundle: "Add Bundle",
  adding: "Adding...",
  total: "Total",
  close: "Close",
  missingPrefix: "Select sizes for",
};

function keyFor(handle: string) {
  return `size:${handle}`;
}

export default function BundleSizePicker(props: Props) {
  const {
    items,
    bundlePrice,
    trigger,
    onAddBundle,
    title = "Choose your sizes",
    subtitle = "Pick a size for each required item",
    rememberKey = "aaz:last-sizes",
    i18n: i18nOverrides,
    children,
  } = props;

  const i18n = { ...DEFAULT_I18N, ...(i18nOverrides || {}) };

  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [sizes, setSizes] = useState<Record<string, string>>({});

  // Load remembered sizes
  useEffect(() => {
    try {
      const raw = localStorage.getItem(rememberKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") setSizes(parsed);
      }
    } catch {}
  }, [rememberKey]);

  // Prime defaults per item
  useEffect(() => {
    setSizes((prev) => {
      const next = { ...prev };
      for (const it of items || []) {
        if (next[it.handle]) continue;
        const def = it.defaultSize || it.sizes?.[0] || "";
        if (def) next[it.handle] = def;
      }
      return next;
    });
  }, [items]);

  const requiredItems = useMemo(
    () => (items || []).filter((i) => i.requiredForBundle !== false),
    [items],
  );

  const missing = useMemo(() => {
    const list: string[] = [];
    for (const it of requiredItems) {
      const isOneSize = it.sizes.length === 1 && it.sizes[0] === "OneSize";
      if (!isOneSize) {
        const sel = sizes[it.handle];
        if (!sel) list.push(it.title);
      }
    }
    return list;
  }, [requiredItems, sizes]);

  const totalPieces = requiredItems.length;

  function setSize(handle: string, size: string) {
    setSizes((m) => ({ ...m, [handle]: size }));
  }

  async function handleAdd() {
    if (missing.length) return; // guard
    const selections = requiredItems.map((it) => ({
      handle: it.handle,
      title: it.title,
      size: it.sizes[0] === "OneSize" ? "OneSize" : sizes[it.handle] || "",
      qty: 1,
    }));

    try {
      setSaving(true);
      localStorage.setItem(rememberKey, JSON.stringify(sizes));
      if (onAddBundle) {
        await onAddBundle({ bundlePrice, selections });
      } else {
        // Default behavior: post to bundle checkout endpoint.
        await defaultBundleCheckout({ bundlePrice, selections });
      }
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert((err as any)?.message || "Unable to add bundle");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : trigger ? (
          <span>{trigger}</span>
        ) : (
          <Button className="rounded-sm">
            {i18n.addBundle} — ${bundlePrice}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-foreground font-light text-2xl">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 max-h-[60vh] overflow-auto pr-1">
          {(items || []).map((it) => {
            const isOneSize =
              it.sizes.length === 1 && it.sizes[0] === "OneSize";
            const sel = sizes[it.handle] || (isOneSize ? "OneSize" : "");
            return (
              <div
                key={it.handle}
                className="border border-border rounded-sm p-3"
              >
                <div className="flex items-start gap-3">
                  {it.imageUrl ? (
                    <img
                      src={it.imageUrl}
                      alt={it.title}
                      className="w-16 h-16 object-cover rounded-sm bg-card border border-border"
                      loading="lazy"
                    />
                  ) : null}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-medium text-foreground truncate">
                        {it.title}
                      </div>
                      {typeof it.price === "number" ? (
                        <div className="text-foreground">${it.price}</div>
                      ) : null}
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {isOneSize ? (
                        <span className="text-xs text-muted-foreground">
                          {i18n.oneSize}
                        </span>
                      ) : (
                        (it.sizes || []).map((s) => {
                          const disabled = Boolean(
                            it.inventoryBySize &&
                              typeof it.inventoryBySize[s] === "number" &&
                              it.inventoryBySize[s] <= 0,
                          );
                          return (
                            <button
                              key={s}
                              type="button"
                              disabled={disabled}
                              onClick={() => setSize(it.handle, s)}
                              className={cn(
                                "px-3 py-1 text-sm border rounded-sm",
                                sel === s
                                  ? "bg-foreground text-background border-foreground"
                                  : "bg-background text-foreground border-border hover:bg-muted",
                                disabled && "opacity-50 cursor-not-allowed",
                              )}
                              aria-label={`Select size ${s} for ${it.title}`}
                              data-size-for={it.handle}
                              data-size-value={s}
                            >
                              {s}
                            </button>
                          );
                        })
                      )}
                    </div>

                    {typeof it.inventoryLeft === "number" &&
                    it.inventoryLeft <= 5 ? (
                      <div className="mt-2 text-xs text-orange-600">
                        Only {it.inventoryLeft} left!
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Separator />

        <div className="flex items-center justify-between text-sm">
          <div className="text-muted-foreground">
            {i18n.total}: {totalPieces} pcs · ${bundlePrice}
          </div>
          {missing.length ? (
            <div className="text-xs text-red-600">
              {i18n.missingPrefix}: {missing.join(", ")}
            </div>
          ) : null}
        </div>

        <DialogFooter className="flex items-center justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            className="rounded-sm"
            onClick={() => setOpen(false)}
          >
            {i18n.close}
          </Button>
          <Button
            type="button"
            className="rounded-sm"
            disabled={saving || missing.length > 0}
            onClick={handleAdd}
          >
            {saving ? i18n.adding : `${i18n.addBundle} — $${bundlePrice}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

async function defaultBundleCheckout({
  bundlePrice,
  selections,
}: {
  bundlePrice: number;
  selections: { handle: string; title: string; size: string; qty: number }[];
}) {
  // Attempt to use a single bundle price if configured in the backend.
  // We still send items + sizes for metadata and auditing.
  const items = selections.map((s) => ({
    handle: s.handle,
    title: s.title,
    size: s.size || null,
    priceStripeId: null,
    requiredForBundle: true,
  }));

  const res = await fetch("/api/checkout/bundle", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      capsule: document.title,
      bundlePrice,
      items,
    }),
  });

  // safe response read: try text, fallback to clone
  let data: any = undefined;
  try {
    const txt = await res.text();
    try {
      data = txt ? JSON.parse(txt) : undefined;
    } catch {}
  } catch (err) {
    try {
      const clone = res.clone();
      const txt2 = await clone.text();
      try {
        data = txt2 ? JSON.parse(txt2) : undefined;
      } catch {}
    } catch {}
  }

  if (!res.ok) {
    const msg =
      (data && data.error) || JSON.stringify(data) || "Bundle checkout error";
    throw new Error(msg);
  }
  const url = data?.url;
  if (!url) throw new Error("Checkout response did not include a URL");
  window.location.href = url;
}
