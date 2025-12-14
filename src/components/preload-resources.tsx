"use client";
import type { FC } from "react";
import ReactDOM from "react-dom";

/**
 * Preload external resources to improve performance.
 *
 * Note that Next.js 16 (App Router) uses the Metadata API but does not yet support preconnect links.
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#unsupported-metadata
 */
export const PreloadResources: FC = () => {
  ReactDOM.preconnect("https://ik.imagekit.io", { crossOrigin: "anonymous" });
  return null;
};
