import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ✅ This must be inside the typescript object block
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Optional: also skips ESLint check failures during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
