import { clsx } from "clsx";
import Image from "next/image";
import type { FC } from "react";
import { ArticleHeader } from "~/components/article-header";
import { ArticleSection } from "~/components/article-section";
import { Gallery } from "~/components/gallery";
import { RelatedArticles } from "~/components/related-articles";
import { blogPostSections } from "~/data/blog-post-sections";
import { relatedArticles } from "~/data/related-articles";

const HomePage: FC = () => (
  <div className="py-6 md:py-8 lg:py-10 xl:py-12">
    <main>
      <article>
        <ArticleHeader
          date="2025-04-02"
          tags={["Nature", "Ocean", "Exploration"]}
          title="Exploring the Depths of the Ocean"
        />
        <Image
          src="hero.png"
          alt="A vibrant coral reef teeming with colorful fish and marine life under clear blue water."
          className={clsx(
            "my-6 w-full object-cover max-md:object-left",
            "h-120 sm:h-160 md:h-180 lg:h-220",
          )}
          priority
          sizes="100vw"
          width={1408}
          height={768}
        />
        <ArticleSection {...blogPostSections[0]} />
        <div className="tw_body_px my-6">
          <video
            src="/assets/videos/coral-reefs.mp4"
            className={clsx(
              "w-full rounded-2xl object-cover max-md:object-left",
              "aspect-square md:aspect-video",
            )}
            width={1312}
            height={720}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
        <ArticleSection {...blogPostSections[1]} />
        <div className="tw_body_px my-6">
          <Image
            src="hydrothermal-vent.png"
            alt="A vibrant underwater scene showcasing a hydrothermal vent surrounded by colorful tube worms and various fish species swimming nearby."
            className={clsx(
              "w-full rounded-lg object-cover",
              "h-120 sm:h-132 md:h-144 lg:h-156",
            )}
            width={1408}
            height={640}
            sizes="100vw"
          />
        </div>
        <ArticleSection {...blogPostSections[2]} />
        <Gallery />
        <ArticleSection {...blogPostSections[3]} />
      </article>
    </main>
    <RelatedArticles articles={relatedArticles} />
  </div>
);

export default HomePage;
