import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Accept", value: "*/*" },
          { key: "Accept-Profile", value: "*" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
          { key: "Content-Type", value: "application/json" },
        ],
      },
    ];
  },
  images: {
    domains: [
      "lh6.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh3.googleusercontent.com",
      "lh2.googleusercontent.com",
      "lh1.googleusercontent.com",
      "lh6.ggpht.com",
      "lh5.ggpht.com",
      "lh4.ggpht.com",
      "lh3.ggpht.com",
      "lh2.ggpht.com",
      "lh1.ggpht.com",
    ],
  },
};

export default nextConfig;
