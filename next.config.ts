import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          // Prevent search engines from following links on the homepage
          // @see https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#directives
          key: "x-robots-tag",
          value: "nofollow",
        },
      ],
    },
  ],
};

export default nextConfig;
