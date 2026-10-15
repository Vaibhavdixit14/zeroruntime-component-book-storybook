import type { NextConfig } from "next";

// @storybook/nextjs reads this config, so the book's raw TS source is compiled in the canvas
const nextConfig: NextConfig = {
  transpilePackages: ["zeroruntime-component-book"],
};

export default nextConfig;
