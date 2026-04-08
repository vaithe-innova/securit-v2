import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  // basePath: '/demo',       // ✅ REQUIRED
  // assetPrefix: '/demo/',   // ✅ REQUIRED
};

export default nextConfig;