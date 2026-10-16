import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.castlesolutions.com.co",
          },
        ],
        destination: "https://castlesolutions.com.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
