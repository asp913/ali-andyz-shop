[build]
  command = "corepack enable && pnpm install --frozen-lockfile && pnpm build:client"
  publish = "dist"

# SPA fallback so /womens-activewear etc. work without 404
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
