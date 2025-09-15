// builder-registry.ts
// Registers CapsuleView with Builder so editors can bind data.
// Import this file once in your app entry (e.g., main.tsx or App.tsx).
import { Builder } from "@builder.io/react";
import CapsuleView from "@/components/CapsuleView";

Builder.registerComponent(CapsuleView, {
  name: "CapsuleView",
  inputs: [
    { name: "title", type: "string", defaultValue: "Riviera Edit" },
    { name: "subtitle", type: "string", defaultValue: "Capsule or Mix & Match" },
    { name: "heroUrl", type: "file", allowedFileTypes: ["jpeg","jpg","png","webp"] },
    { name: "flatUrl", type: "file", allowedFileTypes: ["jpeg","jpg","png","webp"] },
    { name: "bundlePrice", type: "number", defaultValue: 159 },
    { name: "bundleValue", type: "number", defaultValue: 224 },
    { name: "bundleSave", type: "number", defaultValue: 65 },
    { name: "priceRange", type: "string", defaultValue: "$20–$69" },
    { name: "bundleLink", type: "url", defaultValue: "https://buy.stripe.com/YOUR_BUNDLE_LINK" },
    {
      name: "includes",
      type: "list",
      subFields: [
        { name: "name", type: "string" },
        { name: "price", type: "number" },
      ],
      defaultValue: [
        { name: "Lightweight Long Coat", price: 69 },
        { name: "Cropped Top", price: 22 },
        { name: "Cargo Pants", price: 39 },
        { name: "Cap (one size)", price: 20 },
        { name: "Sneakers", price: 45 },
        { name: "Utility Bag (one size)", price: 29 },
      ],
    },
    {
      name: "items",
      type: "list",
      subFields: [
        { name: "name", type: "string" },
        { name: "price", type: "number" },
        {
          name: "sizes",
          type: "list",
          subFields: [
            { name: "label", type: "string" },
            { name: "url", type: "url" },
          ],
        },
      ],
      defaultValue: [
        {
          name: "Lightweight Long Coat", price: 69,
          sizes: [
            { label: "XS", url: "https://buy.stripe.com/YOUR_COAT_XS" },
            { label: "S",  url: "https://buy.stripe.com/YOUR_COAT_S"  },
            { label: "M",  url: "https://buy.stripe.com/YOUR_COAT_M"  },
            { label: "L",  url: "https://buy.stripe.com/YOUR_COAT_L"  },
            { label: "XL", url: "https://buy.stripe.com/YOUR_COAT_XL" },
          ]
        },
        {
          name: "Cropped Top", price: 22,
          sizes: [
            { label: "XS", url: "https://buy.stripe.com/YOUR_TOP_XS" },
            { label: "S",  url: "https://buy.stripe.com/YOUR_TOP_S"  },
            { label: "M",  url: "https://buy.stripe.com/YOUR_TOP_M"  },
            { label: "L",  url: "https://buy.stripe.com/YOUR_TOP_L"  },
            { label: "XL", url: "https://buy.stripe.com/YOUR_TOP_XL" },
          ]
        },
      ],
    },
  ],
});
