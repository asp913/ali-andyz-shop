/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.builder.io https://js.stripe.com; object-src 'none';"
          },
        ],
      },
    ];
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
