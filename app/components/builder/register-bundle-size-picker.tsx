"use client";

import { Builder } from "@builder.io/react";
import BundleSizePicker, { type Props, type Item } from "./BundleSizePicker";

const itemFields = [
  { name: "title", type: "text", required: true },
  { name: "handle", type: "text", required: true },
  { name: "sizes", type: "list", subFields: [{ type: "text" }], required: true },
  { name: "price", type: "number" },
  { name: "imageUrl", type: "file" },
  { name: "requiredForBundle", type: "boolean", defaultValue: true },
  { name: "inventoryLeft", type: "number" },
  { name: "inventoryBySize", type: "object" },
  { name: "defaultSize", type: "text" },
];

Builder.registerComponent(BundleSizePicker as any, {
  name: "Bundle Size Picker",
  inputs: [
    { name: "items", type: "list", required: true, subFields: itemFields },
    { name: "bundlePrice", type: "number", required: true },
    { name: "title", type: "text", defaultValue: "Choose your sizes" },
    { name: "subtitle", type: "text", defaultValue: "Pick a size for each required item" },
    { name: "rememberKey", type: "text", defaultValue: "aaz:last-sizes" },
    {
      name: "i18n",
      type: "object",
      subFields: [
        { name: "oneSize", type: "text" },
        { name: "addBundle", type: "text" },
        { name: "adding", type: "text" },
        { name: "total", type: "text" },
        { name: "close", type: "text" },
        { name: "missingPrefix", type: "text" },
      ],
    },
  ],
  // Allow custom trigger content via children
  canHaveChildren: true,
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Text',
        options: { text: 'Buy Bundle' },
      },
    },
  ],
});
