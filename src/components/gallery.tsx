import { clsx } from "clsx";
import Image from "next/image";
import type { FC } from "react";

type Props = {
  className?: string;
};

const images: Array<{
  src: string;
  alt: string;
  blurDataURL: string;
}> = [
  {
    src: "gallery/1.png",
    alt: "A colorful coral reef teeming with diverse fish swimming among vibrant corals and sea anemones.",
    blurDataURL:
      "data:image/webp;base64,UklGRoQBAABXRUJQVlA4IHgBAABQEACdASrIAJwAPzmSwV0vKKYkoVM7AeAnCWdu4PdWY1P51k/cz5AKKZ54dwVRuc37W+w/xqr7nAm1d+kHETJV0a5J5sy1Xuw00YYPFy3Xk1LhLvMmZHJq8anLVXOn4Z5U5RFa4W+4eMcZPJS+SXmoPbA298vi3dyJYIEE2ovBwAvNrHlvx5/SP0IgAP33fgy22Kj6qp6/F9vyaR6t2z+zRqSmhPwhpqPCwOu9Er8GWCDvafA6FA3Clby+A/FPP1Pv4Skw1QIllqoWL7ZkWuHVn4aOKEFBo+eAZBCiw+AdLXDnknLogQcoLnzlPG5JP7kDl7GqKzSCjhsbOxwImCFmZkeR32qevgHTaz6OCxvZM/pUMQv8a2m+0iOuQRdCYVDn70DCf1W+L3P7BI/EomLF10HXGTG2Mz4i9yJC3kYM59gYMnjbaVIHUQT9GhYs6DMr9NWxBFXVfDoCG2IymmhmjCxXNMHQxyvBLKrj1gORJE2U8KrbX8AA",
  },
  {
    src: "gallery/2.png",
    alt: "A vibrant coral reef teeming with colorful fish and marine life under clear blue water.",
    blurDataURL:
      "data:image/webp;base64,UklGRpgBAABXRUJQVlA4IIwBAACwDwCdASrIAJwAPzmaw12vPigkoVM5a8AnCWdu3X7/CHB61/ABivNCObylRkbtjlf9MfhzWpmQqWGYEZzzlqx3VcGDQXE51aC4eh0oLP9DcgTQAk0Kcf4DXvoWhZXPSRHBc7bhQ8+JHQfmJGXJsI8L322B0M3LLYL3ui304jsAXbEbhh2mAAD+3Nh8q9XmVd7loq5TNHZwHHvbuPvHLT7lZM98BxKJYUw7YQ7N/SXDc/riQqy/5Tph9Vc0IssvbR/zRDM2rkFn8L29dpoJ3eEAQdG+nnQCPJ5fD2h+hBsP0OtOU9aZ0NxZAvBX4e0l6I2/nhy6f8kkSVG6UPW9dtNqZGKiabEaYHyAYE5mxLc4RHJOk3xZqLP+LQ2D2S46UXwHpiKCaleSwGltIRY29guHnyrzXu/j2+Psai1qI7yiFqhTkmWy4AGICuXyCQJIsvz1u40OxESTyQtbAIGqAOKRZu81zTp2a8OLNwhDnKoDmoHki0D0lCLkDLlU5VcofwyKA6QZbKFmjtLg0AA=",
  },
  {
    src: "gallery/3.png",
    alt: "A colorful coral reef teeming with diverse fish swimming among the corals in clear blue water.",
    blurDataURL:
      "data:image/webp;base64,UklGRnIBAABXRUJQVlA4IGYBAACQDwCdASrIAJwAPzmcw1y0qqckoVma4pAnCWdu4P8QcwPWv4AglB0OyzCShxfgLTnQNDnWyy5ZQBqTBVl09e/BfyJYUFjNRvJg4OcFaedFVmJpYMTsWk97Uj8H9yMEf4gUEP8yG/UMLm7wlbl7wQYW/KO4gL+51sUm682SOM44zWrZLCMAAGewc7ZO9L/XC2uQAksMsfNV6gQEyiwegsNLRjX8XVBmoXbLEl++GGpjm9llDjQMzp61i2qoLV2xgyQEcmchZ/WUs+FnF2bJ9n6IqKBUMcVhjhFVN7p1BqY7AHXJPfbf887gkvxni+24xXJGTeBbnOAFXzCNKKtF7biteM50GzYtWGueCWJ6VXyQvr41Y7M2CnqvQJiFGu1u6vKgCQBjtM8kQROIwwK8NmmBOf1NUHHxI98J5DKr4GrSfR4y7GqQu/CsbvEgc0TInPIxDD9QG2RaH73TEjX7+gRHEnCUSAAA",
  },
];

export const Gallery: FC<Props> = ({ className }) => (
  <div
    className={clsx(
      "tw_body_px my-12 flex flex-col gap-4 sm:gap-8",
      "md:relative md:h-105 md:overflow-hidden",
      className,
    )}
  >
    {images.map(({ alt, blurDataURL, src }, index) => (
      <Image
        key={src}
        src={src}
        alt={alt}
        width={576}
        height={448}
        blurDataURL={blurDataURL}
        placeholder="blur"
        sizes="(min-width: 48em) 33.75rem, 100vw"
        className={clsx(
          "h-105 w-full rounded-2xl object-cover",
          "md:absolute md:left-1/2 md:h-full md:w-135",
          [
            "md:-translate-x-[calc(150%+3rem)]",
            "md:-translate-x-[calc(50%)]",
            "md:translate-x-[calc(50%+3rem)]",
          ][index],
        )}
      />
    ))}
  </div>
);
