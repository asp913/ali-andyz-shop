export type CapsuleItem = {
  handle: string;
  title: string;
  price: number;
  priceStripeId: string;
  sizes: string[];
  inventoryLeft?: number | null;
  requiredForBundle: boolean;
};

export type CapsuleDetails = {
  capsuleTitle: string;
  capsuleSubtitle: string;
  bundlePrice: number;
  bundleValue: number;
  priceRangeCopy: string;
  sizeGuideHref: string;
  items: CapsuleItem[];
};

// Map product.id -> capsule details
export const capsuleDetailsByProductId: Record<string, CapsuleDetails | undefined> = {
  // Riviera Capsule (wa-001)
  'wa-001': {
    capsuleTitle: 'Riviera Edit — Capsule or Mix & Match',
    capsuleSubtitle:
      'Choose your vibe: get the full capsule for effortless head-to-toe styling, or shop pieces individually to mix into your wardrobe. Coastal polish with relaxed streetwear ease.',
    bundlePrice: 179,
    bundleValue: 308,
    priceRangeCopy: 'Price range $20–$129',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'lightweight-long-coat', title: 'Lightweight Long Coat', price: 69, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'cropped-top', title: 'Cropped Top', price: 22, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'cargo-pants', title: 'Cargo Pants', price: 39, priceStripeId: '', sizes: ['S','M','L'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'cap', title: 'Cap (One Size)', price: 20, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'sneakers', title: 'Silver Accent Sneakers', price: 129, priceStripeId: '', sizes: ['6','7','8','9'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'utility-bag', title: 'Utility Bag (One Size)', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'wa-002': {
    capsuleTitle: 'Sunset Flow — Capsule or Mix & Match',
    capsuleSubtitle:
      'Golden hour vibes in wearable form. Pieces that flow from yoga class to sunset dinner.',
    bundlePrice: 119,
    bundleValue: 154,
    priceRangeCopy: 'Price range $24–$42',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'sunset-wrap-top', title: 'Sunset Wrap Top', price: 32, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'crossover-bralette', title: 'Crossover Bralette', price: 24, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'wide-leg-pants', title: 'Wide-Leg Pants', price: 42, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'light-cardigan', title: 'Light Cardigan', price: 38, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'strappy-sandals', title: 'Strappy Sandals', price: 18, priceStripeId: '', sizes: ['6','7','8','9'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'wa-003': {
    capsuleTitle: 'Studio Flow — Capsule or Mix & Match',
    capsuleSubtitle:
      'Move with intention. Build the full capsule or shop individually for a calm studio-to-street vibe.',
    bundlePrice: 99,
    bundleValue: 134,
    priceRangeCopy: 'Price range $19–$39',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'sage-wrap', title: 'Sage Wrap', price: 29, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'sage-top', title: 'Sage Top', price: 22, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'light-brown-leggings', title: 'Light Brown Leggings', price: 39, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'sage-bag', title: 'Sage Bag', price: 25, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'sage-yoga-mat', title: 'Sage Yoga Mat', price: 19, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'wa-004': {
    capsuleTitle: 'Off-Duty Luxe ���� Moto Edit — Capsule or Mix & Match',
    capsuleSubtitle:
      'Leather-effect jacket, cropped tank, high-waisted leggings. Optional scarf upgrade for graphic polish.',
    bundlePrice: 109,
    bundleValue: 138,
    priceRangeCopy: 'Price range $23–$69',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'faux-leather-moto-jacket', title: 'Faux Leather Moto Jacket', price: 69, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'cropped-tank', title: 'Cropped Tank', price: 24, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'high-waisted-leggings', title: 'High-Waisted Leggings', price: 45, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'graphic-silk-feel-square', title: 'Graphic Silk-Feel Square', price: 23, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: false },
    ],
  },
  'wa-005': {
    capsuleTitle: 'Black Tennis — Capsule or Mix & Match',
    capsuleSubtitle:
      'Elevate your game with court-to-club sophistication. Premium black pieces for seamless athletic elegance.',
    bundlePrice: 189,
    bundleValue: 314,
    priceRangeCopy: 'Price range $25–$75',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'black-tennis-dress', title: 'Black Tennis Dress', price: 75, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'performance-jacket', title: 'Performance Jacket', price: 65, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'pleated-tennis-skirt', title: 'Pleated Tennis Skirt', price: 45, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'tennis-visor', title: 'Tennis Visor', price: 25, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'court-sneakers', title: 'Court Sneakers', price: 69, priceStripeId: '', sizes: ['6','7','8','9'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'tennis-bag', title: 'Tennis Bag', price: 35, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'wa-006': {
    capsuleTitle: 'The Drift Set — Capsule or Mix & Match',
    capsuleSubtitle:
      'Choose your vibe: get the full capsule for effortless comfort and style, or shop pieces individually to mix into your wardrobe. Luxe comfort with travel-ready versatility.',
    bundlePrice: 159,
    bundleValue: 218,
    priceRangeCopy: 'Price range $28–$65',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'knit-cardigan', title: 'Knit Cardigan', price: 65, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'ribbed-tank-top', title: 'Ribbed Tank Top', price: 32, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'knit-pants', title: 'Knit Pants', price: 55, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'travel-slippers', title: 'Travel Slippers', price: 28, priceStripeId: '', sizes: ['6','7','8','9'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'soft-tote-bag', title: 'Soft Tote Bag', price: 38, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'wa-007': {
    capsuleTitle: 'Coastal Ride — Capsule or Mix & Match',
    capsuleSubtitle:
      'Breezy, movement-ready pieces in ocean neutrals. Throw on the windbreaker and go—from seafront coffee runs to sunset rides. Build the full capsule or mix in your favorites.',
    bundlePrice: 119,
    bundleValue: 169,
    priceRangeCopy: 'Price range $20–$59',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'salt-spray-windbreaker', title: 'Salt-Spray Windbreaker', price: 59, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'breeze-rib-tank', title: 'Breeze Rib Tank', price: 22, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'coastal-cargo-jogger', title: 'Coastal Cargo Jogger', price: 39, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'sun-shield-cap', title: 'Sun-Shield Cap', price: 20, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'hands-free-sling', title: 'Hands-Free Sling', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'wa-008': {
    capsuleTitle: 'Airport Set — Capsule or Mix & Match',
    capsuleSubtitle:
      'Soft layers, pocketed essentials, and easy security-friendly details. Build the full capsule for a polished travel uniform, or mix pieces into your week.',
    bundlePrice: 199,
    bundleValue: 290,
    priceRangeCopy: 'Price range $12–$139',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'cream-travel-coat', title: 'Cream Travel Coat', price: 139, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'black-stretch-crop-top', title: 'Black Stretch Crop Top', price: 24, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'travel-leggings', title: 'Travel Leggings', price: 39, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'embroidered-cap', title: 'Embroidered Cap', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'crescent-shoulder-bag', title: 'Crescent Shoulder Bag', price: 59, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'slim-strap', title: 'Slim Strap (Optional)', price: 12, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: false },
    ],
  },
  'rtw-008': {
    capsuleTitle: 'The Soft Landing Set — Capsule or Mix & Match',
    capsuleSubtitle:
      'Effortless polish meets quiet luxury. Creamy oat tones, elevated knit textures, and layered ease for an ultimate arrival look.',
    bundlePrice: 189,
    bundleValue: 228,
    priceRangeCopy: 'Price range $29–$69',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'ribbed-maxi-dress', title: 'Ribbed Maxi Dress', price: 69, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 2, requiredForBundle: true },
      { handle: 'fluid-duster', title: 'Fluid Duster', price: 59, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 2, requiredForBundle: true },
      { handle: 'moon-shoulder-bag', title: 'Moon Shoulder Bag', price: 49, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 2, requiredForBundle: true },
      { handle: 'gold-hoops-bold-cuff', title: 'Gold Hoops + Bold Cuff', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 2, requiredForBundle: true },
      { handle: 'oversized-geo-scarf', title: 'Oversized Geo Scarf', price: 39, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 2, requiredForBundle: true },
    ],
  },
  'rtw-007': {
    capsuleTitle: 'Cosmic Elegance Set — Capsule or Mix & Match',
    capsuleSubtitle:
      'Celestial prints and molten accents for special nights. Sun, moon, and star motifs meet modern silhouettes.',
    bundlePrice: 189,
    bundleValue: 250,
    priceRangeCopy: 'Price range $35–$95',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'celestial-print-halter-dress', title: 'Celestial Print Halter Dress', price: 95, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 2, requiredForBundle: true },
      { handle: 'structured-mini-handbag', title: 'Structured Mini Handbag', price: 68, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 2, requiredForBundle: true },
      { handle: 'strappy-heeled-sandals', title: 'Strappy Heeled Sandals', price: 52, priceStripeId: '', sizes: ['6','7','8','9'], inventoryLeft: 2, requiredForBundle: true },
      { handle: 'gold-chain-bracelet', title: 'Gold Chain Bracelet', price: 35, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 2, requiredForBundle: true },
    ],
  },
  'rtw-006': {
    capsuleTitle: 'Solstice Glow Beach Set — Capsule or Mix & Match',
    capsuleSubtitle:
      'Perfect for sun-soaked days with celestial motifs and earthy tones. Bohemian charm meets modern sophistication.',
    bundlePrice: 95,
    bundleValue: 153,
    priceRangeCopy: 'Price range $19–$39',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'one-shoulder-swimsuit', title: 'One-Shoulder Swimsuit', price: 39, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 4, requiredForBundle: true },
      { handle: 'high-waisted-maxi-skirt', title: 'High-Waisted Maxi Skirt', price: 29, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 4, requiredForBundle: true },
      { handle: 'gauze-cover-up', title: 'Gauze Cover-Up', price: 25, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 4, requiredForBundle: true },
      { handle: 'oversized-straw-hat', title: 'Oversized Straw Hat', price: 22, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 4, requiredForBundle: true },
      { handle: 'gold-hoops', title: 'Gold Hoops', price: 19, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 4, requiredForBundle: true },
      { handle: 'wood-shell-anklet', title: 'Wood + Shell Anklet', price: 19, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 4, requiredForBundle: true },
    ],
  },
  'rtw-003': {
    capsuleTitle: 'City Brunch — Capsule or Mix & Match',
    capsuleSubtitle:
      'City‑brunch energy with elevated athleisure. Balanced neutrals with a bold green pop — relaxed, camera‑ready, and street‑smart.',
    bundlePrice: 529,
    bundleValue: 712,
    priceRangeCopy: 'Price range $89–$345',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'shearling-collar-bomber-jacket', title: 'Leather Jacket w/ Shearling Collar', price: 345, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'cable-knit-turtleneck-cream', title: 'Cream Cable Turtleneck', price: 129, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'classic-straight-jeans', title: 'Mid-Indigo Straight Jeans', price: 89, priceStripeId: '', sizes: ['24','25','26','27','28','29','30','31','32'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'black-chelsea-boots', title: 'Black Chelsea Boots', price: 149, priceStripeId: '', sizes: ['6','7','8','9','10'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'emerald-mini-hobo-bag', title: 'Emerald Mini Hobo Bag', price: 99, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: false },
    ],
  },
  'rtw-004': {
    capsuleTitle: 'White Riviera — Gala Set',
    capsuleSubtitle:
      'A sculptural one-shoulder gown finished with an ivory faux-fur stole and liquid-gold heels. Add a glimmering pouch and warm gold jewelry for instant St. Tropez glamour.',
    bundlePrice: 279,
    bundleValue: 447,
    priceRangeCopy: 'Price range $22–$149',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'one-shoulder-evening-gown', title: 'One-Shoulder Evening Gown', price: 149, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 2, requiredForBundle: true },
      { handle: 'ivory-faux-fur-stole', title: 'Ivory Faux-Fur Stole', price: 99, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 2, requiredForBundle: true },
      { handle: 'strappy-gold-heels', title: 'Strappy Gold Heels', price: 89, priceStripeId: '', sizes: ['6','7','8','9','10'], inventoryLeft: 2, requiredForBundle: true },
      { handle: 'gold-drawstring-pouch', title: 'Gold Drawstring Pouch', price: 59, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 2, requiredForBundle: false },
      { handle: 'gold-hoop-earrings', title: 'Gold Hoop Earrings', price: 22, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 2, requiredForBundle: false },
      { handle: 'gold-chain-bracelet', title: 'Gold Chain Bracelet', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 2, requiredForBundle: false },
    ],
  },
  'rtw-005': {
    capsuleTitle: 'Forest Luxe — Knit Dress Edit',
    capsuleSubtitle:
      'Chalet-to-city in moss + ivory. Plush faux-fur coat over a ribbed turtleneck knit dress, finished with cognac accessories for instant polish.',
    bundlePrice: 219,
    bundleValue: 307,
    priceRangeCopy: 'Price range $19–$129',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'olive-faux-fur-belted-coat', title: 'Olive Faux-Fur Belted Coat', price: 129, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'cream-turtleneck-knit-dress', title: 'Cream Turtleneck Knit Dress', price: 79, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'suede-block-heel-ankle-boots', title: 'Suede Block-Heel Ankle Boots', price: 99, priceStripeId: '', sizes: ['6','7','8','9','10'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'croc-embossed-top-handle-bag', title: 'Croc-Embossed Top-Handle Bag', price: 69, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: false },
      { handle: 'gold-textured-hoop-earrings', title: 'Gold Textured Hoop Earrings', price: 19, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 5, requiredForBundle: false },
    ],
  },
  'rtw-002': {
    capsuleTitle: 'Glamour Capsule — Capsule or Mix & Match',
    capsuleSubtitle:
      'Turn every entrance into a standing ovation. Luxurious metallic textures and rich emerald fur for the ultimate sophisticated statement look.',
    bundlePrice: 999,
    bundleValue: 1177,
    priceRangeCopy: 'Price range $29–$895',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'golden-metallic-midi-dress', title: 'Golden Metallic Midi Dress', price: 129, priceStripeId: '', sizes: ['XS','S','M','L'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'emerald-faux-fur-stole', title: 'Emerald Faux Fur Stole', price: 895, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'gold-metallic-clutch', title: 'Gold Metallic Clutch', price: 45, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'gold-strappy-heels', title: 'Gold Strappy Heels', price: 79, priceStripeId: '', sizes: ['6','7','8','9'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'statement-gold-earrings', title: 'Statement Gold Earrings', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'rtw-009': {
    capsuleTitle: 'Urban Terrain — Puffer & Cargo Edit',
    capsuleSubtitle:
      'City-tough layers with utility ease. Olive puffer + fisherman turtleneck + cargo skirt with your choice of footwear; add the belt bag for complete hands-free polish.',
    bundlePrice: 299,
    bundleValue: 406,
    priceRangeCopy: 'Price range $49–$129',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'urban-puffer', title: 'Urban Puffer Jacket', price: 129, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 4, requiredForBundle: true },
      { handle: 'fisherman-turtleneck', title: 'Fisherman Turtleneck', price: 69, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 4, requiredForBundle: true },
      { handle: 'cargo-skirt', title: 'Cargo Skirt', price: 79, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 4, requiredForBundle: true },
      { handle: 'belt-bag', title: 'Belt Bag', price: 49, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 6, requiredForBundle: false },
      { handle: 'lug-boots', title: 'Lug Boots', price: 129, priceStripeId: '', sizes: ['6','7','8','9','10'], inventoryLeft: 4, requiredForBundle: false },
      { handle: 'shearling-mocs', title: 'Shearling Mocs', price: 79, priceStripeId: '', sizes: ['6','7','8','9','10'], inventoryLeft: 4, requiredForBundle: false },
    ],
  },
  'rtw-001': {
    capsuleTitle: 'City Edit — Jet-Set Capsule',
    capsuleSubtitle:
      'Carry-on polish in camel + black. Build the essentials or complete the look with luxe add-ons.',
    bundlePrice: 299,
    bundleValue: 435,
    priceRangeCopy: 'Price range $22–$159',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'camel-wool-coat', title: 'Camel Wool Coat', price: 159, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'black-turtleneck-bodysuit', title: 'Black Turtleneck Bodysuit', price: 39, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'camel-pleated-trousers', title: 'Camel Pleated Trousers', price: 89, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'structured-tote-black', title: 'Structured Tote (Black)', price: 79, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'white-knit-sneakers', title: 'White Knit Sneakers', price: 69, priceStripeId: '', sizes: ['6','7','8','9'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'mini-top-handle-bag', title: 'Mini Top-Handle Bag', price: 49, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: false },
      { handle: 'cat-eye-sunglasses', title: 'Cat-Eye Sunglasses', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: false },
      { handle: 'gold-hoop-earrings', title: 'Gold Hoop Earrings', price: 22, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: false },
    ],
  },
  // Day Six: The Farewell Look — Capsule or Mix & Match (mrt-001)
  'mrt-001': {
    capsuleTitle: 'Day Six: The Farewell Look — Capsule or Mix & Match',
    capsuleSubtitle:
      'A clean finale for the trip: soft knit, fresh cotton-linen shirt, tailored pleated trousers, and a minimal beanie.',
    bundlePrice: 359,
    bundleValue: 448,
    priceRangeCopy: 'Price range $45–$185',
    sizeGuideHref: '/size-guide',
    items: [
      {
        handle: 'knit-beanie-hat',
        title: 'Knit Beanie Hat',
        price: 45,
        priceStripeId: 'price_xxx_beanie',
        sizes: ['OneSize'],
        inventoryLeft: null,
        requiredForBundle: true,
      },
      {
        handle: 'cotton-knit-sweater',
        title: 'Cotton Knit Sweater',
        price: 129,
        priceStripeId: 'price_xxx_sweater',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        inventoryLeft: 3,
        requiredForBundle: true,
      },
      {
        handle: 'white-cotton-linen-shirt',
        title: 'White Cotton Linen Shirt',
        price: 89,
        priceStripeId: 'price_xxx_shirt',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        inventoryLeft: 3,
        requiredForBundle: true,
      },
      {
        handle: 'ivory-pleated-pants',
        title: 'Ivory Pleated Pants',
        price: 185,
        priceStripeId: 'price_xxx_pants',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        inventoryLeft: 3,
        requiredForBundle: true,
      },
    ],
  },
  // Modern Tailored — Graphite & Sand (mrt-002)
  'mrt-002': {
    capsuleTitle: 'Modern Tailored ��� Graphite & Sand ��� Capsule or Mix & Match',
    capsuleSubtitle:
      'Soft-shoulder graphite blazer, rust knit polo, sand pleated trouser, and brown suede loafers for a refined, relaxed finish.',
    bundlePrice: 256,
    bundleValue: 356,
    priceRangeCopy: 'Price range $49–$119',
    sizeGuideHref: '/size-guide',
    items: [
      {
        handle: 'graphite-blazer',
        title: 'Graphite Blazer',
        price: 119,
        priceStripeId: '',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        inventoryLeft: null,
        requiredForBundle: true,
      },
      {
        handle: 'rust-knit-polo',
        title: 'Rust Knit Polo',
        price: 49,
        priceStripeId: '',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        inventoryLeft: null,
        requiredForBundle: true,
      },
      {
        handle: 'sand-pleated-trouser',
        title: 'Sand Pleated Trouser',
        price: 89,
        priceStripeId: '',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        inventoryLeft: null,
        requiredForBundle: true,
      },
      {
        handle: 'brown-suede-loafers',
        title: 'Brown Suede Loafers',
        price: 99,
        priceStripeId: '',
        sizes: ['7', '8', '9', '10', '11', '12', '13'],
        inventoryLeft: null,
        requiredForBundle: true,
      },
    ],
  },
  'mrt-003': {
    capsuleTitle: 'Heritage Field — Suede & Cord — Capsule or Mix & Match',
    capsuleSubtitle:
      'Warm earth tones with true suede texture and workwear ease. Built for weekends, sharp enough for dinners.',
    bundlePrice: 239,
    bundleValue: 345,
    priceRangeCopy: 'Price range $39–$129',
    sizeGuideHref: '/size-guide',
    items: [
      {
        handle: 'real-suede-field-jacket',
        title: 'Real Suede Field Jacket (Nutmeg)',
        price: 129,
        priceStripeId: '',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inventoryLeft: null,
        requiredForBundle: true,
      },
      {
        handle: 'chevron-merino-crew',
        title: 'Chevron Merino Crew (Taupe/Forest/Rust/Cream)',
        price: 49,
        priceStripeId: '',
        sizes: ['S', 'M', 'L', 'XL'],
        inventoryLeft: null,
        requiredForBundle: true,
      },
      {
        handle: 'corduroy-utility-pant',
        title: '16-Wale Corduroy Utility Pant (Sand)',
        price: 69,
        priceStripeId: '',
        sizes: ['S', 'M', 'L', 'XL'],
        inventoryLeft: null,
        requiredForBundle: true,
      },
      {
        handle: 'suede-cupsole-sneakers',
        title: 'Suede Cupsole Sneakers (Cocoa)',
        price: 59,
        priceStripeId: '',
        sizes: ['7', '8', '9', '10', '11', '12', '13'],
        inventoryLeft: null,
        requiredForBundle: true,
      },
      {
        handle: 'leather-crossbody',
        title: 'Leather Crossbody (Cocoa)',
        price: 39,
        priceStripeId: '',
        sizes: ['OneSize'],
        inventoryLeft: null,
        requiredForBundle: true,
      },
    ],
  },
  'mrt-004': {
    capsuleTitle: 'Final Night — Capsule or Mix & Match',
    capsuleSubtitle:
      'Tailored confidence with a nod to vintage Riviera glamour. Contrast-piped blazer, crisp ivory trousers, luxe accessories.',
    bundlePrice: 249,
    bundleValue: 287,
    priceRangeCopy: 'Price range $25–$129',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'gucci-inspired-riviera-blazer', title: 'Gucci-Inspired Riviera Blazer', price: 129, priceStripeId: '', sizes: ['XS','S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'white-dress-shirt', title: 'White Dress Shirt', price: 45, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'ivory-tailored-trousers', title: 'Ivory Tailored Trousers', price: 59, priceStripeId: '', sizes: ['XS','S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'navy-braided-belt', title: 'Navy Braided Belt', price: 25, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'black-onyx-bead-bracelets-2pc', title: 'Black Onyx Bead Bracelets (Set of 2)', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: null, requiredForBundle: true },
    ],
  },
  'mrt-005': {
    capsuleTitle: 'City Puffer — Black & Oat — Capsule or Mix & Match',
    capsuleSubtitle:
      'High-shine warmth for street-to-travel. Gloss puffer over tonal fleece and tapered joggers, finished with clean court sneakers and oat logo scarf.',
    bundlePrice: 169,
    bundleValue: 240,
    priceRangeCopy: 'Price range $14–$99',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'gloss-puffer-jacket', title: 'Gloss Puffer Jacket', price: 99, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'heavyweight-fleece-hoodie', title: 'Heavyweight Fleece Hoodie', price: 29, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'tapered-fleece-jogger', title: 'Tapered Fleece Jogger', price: 39, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'clean-court-sneakers', title: 'Clean Court Sneakers', price: 59, priceStripeId: '', sizes: ['7','8','9','10','11','12','13'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'logo-knit-scarf', title: 'Logo Knit Scarf', price: 14, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: null, requiredForBundle: true },
    ],
  },
  'mrt-006': {
    capsuleTitle: 'Varsity Bomber Capsule — Capsule or Mix & Match',
    capsuleSubtitle:
      'Boarding in style, landing with presence. A sharp bomber, clean tee, ivory denim, and minimal accessories.',
    bundlePrice: 239,
    bundleValue: 276,
    priceRangeCopy: 'Price range $18–$129',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'varsity-bomber-jacket', title: 'Varsity Bomber Jacket', price: 129, priceStripeId: '', sizes: ['XS','S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'core-white-tee', title: 'Core White Tee', price: 18, priceStripeId: '', sizes: ['XS','S','M','L','XL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'ivory-straight-leg-denim', title: 'Ivory Straight-Leg Denim', price: 45, priceStripeId: '', sizes: ['XS','S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'minimal-cap', title: 'Minimal Cap', price: 25, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'weekender-bag', title: 'Weekender Bag', price: 59, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'mrt-007': {
    capsuleTitle: 'Clubhouse Bear Edit — Cream — Capsule or Mix & Match',
    capsuleSubtitle:
      'Old-school collegiate charm, made modern. Navy blazer with cognac suede trim, teddy-knit, straight denim, and sleek Chelsea boots.',
    bundlePrice: 199,
    bundleValue: 306,
    priceRangeCopy: 'Price range $49–$99',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'navy-blazer-suede-trim', title: 'Navy Blazer w/ Cognac Suede Trim', price: 89, priceStripeId: '', sizes: ['XS','S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'cream-teddy-intarsia-sweater', title: 'Cream Teddy-Intarsia Sweater', price: 49, priceStripeId: '', sizes: ['S','M','L','XL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'mid-indigo-straight-jeans', title: 'Mid-Indigo Straight Jeans', price: 69, priceStripeId: '', sizes: ['XS','S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'black-leather-chelsea-boots', title: 'Black Leather Chelsea Boots', price: 99, priceStripeId: '', sizes: ['7','8','9','10','11','12','13'], inventoryLeft: null, requiredForBundle: true },
    ],
  },
  'mrt-008': {
    capsuleTitle: 'Aviator Luxe Kit — Espresso & Black — Capsule or Mix & Match',
    capsuleSubtitle:
      'Monochrome polish meets winter-ready function. Espresso bomber, tobacco trouser, and black accents for a city-smart silhouette.',
    bundlePrice: 299,
    bundleValue: 374,
    priceRangeCopy: 'Price range $19–$129',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'leather-bomber-jacket-espresso', title: 'Leather Bomber Jacket (Espresso)', price: 129, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'merino-crew-knit-black', title: 'Merino Crew Knit (Black)', price: 49, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'tailored-trouser-tobacco', title: 'Tailored Trouser (Tobacco)', price: 69, priceStripeId: '', sizes: ['28','30','32','34','36','38'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'cashmere-blend-scarf-camel', title: 'Cashmere-Blend Scarf (Camel)', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'chelsea-boots-black', title: 'Chelsea Boots (Black)', price: 79, priceStripeId: '', sizes: ['7','8','9','10','11','12','13'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'round-uv-sunglasses-black', title: 'Round UV Sunglasses (Black)', price: 19, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: null, requiredForBundle: true },
    ],
  },
  'mrt-009': {
    capsuleTitle: 'Emerald Heart Knit Edit — Men — Capsule or Mix & Match',
    capsuleSubtitle:
      'Bold color, neutral frame. Desk-to-dinner easy and mix-and-match friendly.',
    bundlePrice: 149,
    bundleValue: 206,
    priceRangeCopy: 'Price range $39–$69',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'emerald-heart-turtleneck', title: 'Emerald Heart Turtleneck', price: 49, priceStripeId: '', sizes: ['S','M','L','XL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'single-breasted-overcoat-black', title: 'Single-Breasted Overcoat (Black)', price: 69, priceStripeId: '', sizes: ['XS','S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'classic-straight-denim-indigo', title: 'Classic Straight Denim (Indigo)', price: 39, priceStripeId: '', sizes: ['XS','S','M','L','XL','XXL'], inventoryLeft: null, requiredForBundle: true },
      { handle: 'chelsea-boots-black', title: 'Chelsea Boots (Black)', price: 49, priceStripeId: '', sizes: ['7','8','9','10','11','12','13'], inventoryLeft: null, requiredForBundle: true },
    ],
  },
  'ma-001': {
    capsuleTitle: 'Core Set — Essential Men\'s Capsule',
    capsuleSubtitle:
      'From city streets to coastal escapes. Premium leather, refined basics, and versatile cargo pants create endless possibilities. This is your foundation for effortless style.',
    bundlePrice: 189,
    bundleValue: 231,
    priceRangeCopy: 'Price range $25–$69',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'faux-leather-jacket', title: 'Faux Leather Jacket', price: 69, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'core-black-tee', title: 'Core Black Tee', price: 29, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'black-cargo-joggers', title: 'Black Cargo Joggers', price: 49, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'minimal-white-sneakers', title: 'Minimal White Sneakers', price: 59, priceStripeId: '', sizes: ['7','8','9','10','11','12','13'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'sunglasses-one-size', title: 'Sunglasses (One Size)', price: 25, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'ma-002': {
    capsuleTitle: 'Zen Essentials — Capsule or Mix & Match',
    capsuleSubtitle:
      'Built for balance—comfort, function, and modern style. Wear the full capsule for an effortless off-duty uniform, or mix each piece into your daily routine.',
    bundlePrice: 139,
    bundleValue: 194,
    priceRangeCopy: 'Price range $19–$59',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'zen-cap', title: 'Cap (One Size)', price: 20, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'zen-necklace', title: 'Necklace (One Size)', price: 59, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'zen-long-sleeve-tee', title: 'Long-Sleeve Tee', price: 22, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'zen-cargo-pants', title: 'Cargo Pants', price: 49, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'zen-yoga-bag', title: 'Yoga Bag (One Size)', price: 25, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'zen-yoga-mat', title: 'Yoga Mat (One Size)', price: 19, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'ma-003': {
    capsuleTitle: 'Club Classic — Capsule or Mix & Match',
    capsuleSubtitle:
      'Step onto the court—or into your day—with timeless confidence. Crisp lines, heritage details, and off-duty elegance.',
    bundlePrice: 245,
    bundleValue: 277,
    priceRangeCopy: 'Price range $29–$95',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'cream-cable-knit-cardigan-crest', title: 'Cream Cable Knit Cardigan with Crest', price: 95, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'black-polo-shirt', title: 'Black Polo Shirt', price: 39, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'black-pleated-shorts', title: 'Black Pleated Shorts', price: 45, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'white-court-sneakers', title: 'White Court Sneakers', price: 69, priceStripeId: '', sizes: ['7','8','9','10','11','12','13'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'black-cap', title: 'Black Cap (one size)', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'ma-006': {
    capsuleTitle: 'Men\'s Coastal Ride — Capsule or Mix & Match',
    capsuleSubtitle:
      'Performance cycling meets coastal style. Breathable, moisture-wicking pieces designed for speed and sophistication.',
    bundlePrice: 149,
    bundleValue: 238,
    priceRangeCopy: 'Price range $25–$65',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'windbreaker-cycling-jacket', title: 'Windbreaker Cycling Jacket', price: 65, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'performance-cycling-jersey', title: 'Performance Cycling Jersey', price: 45, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'compression-cycling-shorts', title: 'Compression Cycling Shorts', price: 39, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'cycling-cap', title: 'Cycling Cap', price: 25, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'cycling-gloves', title: 'Cycling Gloves', price: 35, priceStripeId: '', sizes: ['S','M','L'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'insulated-water-bottle', title: 'Insulated Water Bottle (One Size)', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'ma-007': {
    capsuleTitle: 'Sandstone Set — Capsule or Mix & Match',
    capsuleSubtitle:
      'A cozy uniform in warm sandstone tones. Heavyweight fleece layers with classic sneakers in bone/gum.',
    bundlePrice: 129,
    bundleValue: 169,
    priceRangeCopy: 'Price range $22–$59',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'heavyweight-fleece-hoodie', title: 'Essential Pullover Hoodie', price: 49, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'fleece-jogger', title: 'Tapered Joggers', price: 39, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'premium-tee', title: 'Core Tee', price: 22, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'studio-gat-bone-gum', title: 'Minimal Sneakers', price: 59, priceStripeId: '', sizes: ['7','8','9','10','11','12','13'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'ma-008': {
    capsuleTitle: "Men's Travel — Capsule or Mix & Match",
    capsuleSubtitle:
      'Airport-ready comfort meets modern style. Wrinkle-resistant pieces designed for the frequent traveler who values comfort and sophistication.',
    bundlePrice: 159,
    bundleValue: 312,
    priceRangeCopy: 'Price range $29–$69',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'travel-zip-hoodie', title: 'Travel Zip Hoodie', price: 69, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'comfort-travel-joggers', title: 'Comfort Travel Joggers', price: 55, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'essential-travel-tee', title: 'Essential Travel Tee', price: 35, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'baseball-cap', title: 'Baseball Cap', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'slip-on-travel-sneakers', title: 'Slip-On Travel Sneakers', price: 79, priceStripeId: '', sizes: ['7','8','9','10','11','12','13'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'crossbody-travel-bag', title: 'Crossbody Travel Bag (One Size)', price: 45, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'ma-004': {
    capsuleTitle: 'Beach Flow Capsule — Capsule or Mix & Match',
    capsuleSubtitle:
      'Elevate your practice and your downtime with coastal calm and everyday movement. Lightweight, versatile, and effortless.',
    bundlePrice: 120,
    bundleValue: 154,
    priceRangeCopy: 'Price range $19–$49',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'sand-tone-cardigan', title: 'Sand-Tone Cardigan', price: 49, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'classic-tee', title: 'Classic Tee', price: 22, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'performance-leggings', title: 'Performance Leggings', price: 39, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'non-slip-yoga-mat', title: 'Non-Slip Yoga Mat', price: 19, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'lightweight-yoga-bag', title: 'Lightweight Yoga Bag', price: 25, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'ma-005': {
    capsuleTitle: 'Core Kit + Shades — Capsule or Mix & Match',
    capsuleSubtitle:
      'Your go-to training kit in stone + olive with cushioned socks, classic shades, and ash/gum sneakers.',
    bundlePrice: 149,
    bundleValue: 213,
    priceRangeCopy: 'Price range $12–$109',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'performance-tee-heather-grey', title: 'Performance Tee (Heather Grey)', price: 24, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'trainer-short-7-olive', title: '7" Trainer Short (Olive)', price: 39, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'cushioned-crew-socks', title: 'Cushioned Crew Socks', price: 12, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'studio-gat-ash-gum', title: 'Studio GAT — Ash/Gum', price: 109, priceStripeId: '', sizes: ['7','8','9','10','11','12','13'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'classic-sunglasses', title: 'Classic Sunglasses', price: 29, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
  'mrt-010': {
    capsuleTitle: 'Half-Zip Capsule — Capsule or Mix & Match',
    capsuleSubtitle:
      'Ribbed texture, versatile layers, and everyday comfort. Build the full capsule or mix favorites.',
    bundlePrice: 149,
    bundleValue: 192,
    priceRangeCopy: 'Price range $25–$69',
    sizeGuideHref: '/size-guide',
    items: [
      { handle: 'ribbed-half-zip-sweater', title: 'Ribbed Half-Zip Sweater', price: 69, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'plaid-layering-shirt', title: 'Plaid Layering Shirt', price: 39, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'relaxed-cargo-denim', title: 'Relaxed Cargo Denim', price: 59, priceStripeId: '', sizes: ['S','M','L','XL','XXL'], inventoryLeft: 3, requiredForBundle: true },
      { handle: 'classic-cap', title: 'Classic Cap', price: 25, priceStripeId: '', sizes: ['OneSize'], inventoryLeft: 3, requiredForBundle: true },
    ],
  },
};

export function getCapsuleDetails(productId: string): CapsuleDetails | undefined {
  return capsuleDetailsByProductId[productId];
}
