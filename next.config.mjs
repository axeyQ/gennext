/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization configuration
    images: {
      // Remote image domains
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.prod.website-files.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.builder.io',
          port: '',
          pathname: '/**',
        }
      ],
      
      // Modern image formats (WebP, AVIF)
      formats: ['image/webp', 'image/avif'],
      
      // Image optimization settings
      minimumCacheTTL: 86400, // 24 hours cache
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      
      // Custom image loader for better optimization
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  
    // Enable compression
    compress: true,
    
    // Reduce bundle size
    poweredByHeader: false,
    
    // Optimize JavaScript
    compiler: {
      // Remove console logs in production
      removeConsole: process.env.NODE_ENV === 'production',
    },
  
    // Headers for better caching
    async headers() {
      return [
        {
          source: '/_next/image(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/_next/static/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;