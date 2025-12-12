"use client";
import type { ImageLoader } from "next/image";

const BASE_URL = "https://ik.imagekit.io/jgerard/";
/**
 * Custom ImageKit loader for Next.js Image component.
 *
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/images
 * @see https://imagekit.io/docs/image-transformation
 */
const loader: ImageLoader = ({ src, width: w, quality: q }) => {
  const url = new URL(src, BASE_URL);

  const transformation = Object.entries({ w, q })
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}-${value}`)
    .join(",");

  url.searchParams.append("tr", transformation);
  return url.href;
};

export default loader;
