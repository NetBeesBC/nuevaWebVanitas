/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "vanitasvanitatis.es",
      },
    ],
  },
  // The project lives inside a OneDrive-synced folder, whose file locking
  // conflicts with webpack's on-disk dev cache (EBUSY/EPERM errors). Use an
  // in-memory cache in development to avoid writing to .next/cache at all.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default nextConfig;
