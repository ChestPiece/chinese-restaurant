/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // ponytail: skip server-side fetch/optimize; Unsplash CDN was timing out in dev
    unoptimized: true,
  },
};

export default nextConfig;
