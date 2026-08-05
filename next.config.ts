import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dinagui-sarlu.bigdanhe.com",
      },
      {
        protocol: "https",
        hostname: "dinagui-sarlu.bigdanhe.com",
      },
      {
        protocol: "https",
        hostname: "www.dinagui.com",
      },
      {
        protocol: "https",
        hostname: "dinagui.com",
      },
      {
        // Médias servis depuis Vercel Blob (Payload)
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/media/file/:path*',
          destination: '/media/:path*',
        },
        {
          source: '/api/videos/file/:path*',
          destination: '/videos/:path*',
        },
      ],
    };
  },
};

export default withPayload(nextConfig);
