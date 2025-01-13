import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/collection",
        destination:
          "https://www.rijksmuseum.nl/api/nl/collection?key=1rbD8jnK",
      },
    ];
  },
};

export default nextConfig;
