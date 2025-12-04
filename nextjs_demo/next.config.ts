import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // habilitando turbopack para una compilación más rápida
  experimental: {
    turbopackFileSystemCacheForDev : true,
  },

};

export default nextConfig;
