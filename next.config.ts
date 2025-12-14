import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Note that 1408 is the largest image width used in the app
    deviceSizes: [480, 640, 800, 1280, 1408],
    loader: "custom",
    loaderFile: "src/image-loader.ts",
  },
  output: "export",
  reactCompiler: true,
};

export default nextConfig;
