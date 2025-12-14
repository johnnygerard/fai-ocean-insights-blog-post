import { clsx } from "clsx";
import type { FC } from "react";

type Props = {
  className?: string;
  heading: string;
  content: string;
};

export const ArticleSection: FC<Props> = ({ className, heading, content }) => (
  <section
    className={clsx(
      "tw_body_px mx-auto w-full max-w-180",
      "py-6 sm:py-8 md:py-10 lg:py-12",
      className,
    )}
  >
    <h2
      className={clsx(
        "font-display text-h2 font-bold",
        "-tracking-[0.025rem] lg:-tracking-[0.035rem]",
      )}
    >
      {heading}
    </h2>
    <p className="mt-4 text-base sm:mt-5 md:mt-6">{content}</p>
  </section>
);
