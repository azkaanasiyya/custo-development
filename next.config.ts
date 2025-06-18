import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // tambahkan domain image dari Sanity
  },
};

export default nextConfig;
