import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export", basePath: "/buse-saridas-demo", trailingSlash: true,
  agentRules: false, devIndicators: false,
  images: { unoptimized: true, qualities: [75, 82, 84] },
};
export default nextConfig;
