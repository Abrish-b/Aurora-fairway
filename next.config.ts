import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The Aurora proposal page moved from /aurora to the site root.
      { source: "/aurora", destination: "/", permanent: true },
      { source: "/aurora/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
