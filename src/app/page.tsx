import hero from "@/asset/image/hero.png";
import hydrothermalVent from "@/asset/image/hydrothermal-vent.png";
import { ArticleHeader } from "@/component/article-header";
import { ArticleSection } from "@/component/article-section";
import { Gallery } from "@/component/gallery";
import { RelatedArticles } from "@/component/related-articles";
import { ArticleJson } from "@/type/article-json";
import articleJson from "@data/article.json";
import { clsx } from "clsx";
import Image from "next/image";
import { memo } from "react";

const HomePage = () => {
  const article: ArticleJson = articleJson;
  const articleSections = article.sections;

  return (
    <div className="py-6 md:py-8 lg:py-10 xl:py-12">
      <main>
        <article>
          <ArticleHeader
            date="2025-04-02"
            tags={["Nature", "Ocean", "Exploration"]}
            title="Exploring the Depths of the Ocean"
          />
          <Image
            className={clsx(
              "my-6 w-full object-cover max-md:object-left",
              "h-120 sm:h-160 md:h-180 lg:h-220",
            )}
            src={hero}
            alt="A vibrant coral reef teeming with colorful fish and marine life under clear blue water."
            priority
          />
          <ArticleSection {...articleSections[0]} />
          <div className="tw_body_px my-6">
            <video
              src="/asset/video/coral-reefs.mp4"
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
          <ArticleSection {...articleSections[1]} />
          <div className="tw_body_px my-6">
            <Image
              src={hydrothermalVent}
              alt="A vibrant underwater scene showcasing a hydrothermal vent surrounded by colorful tube worms and various fish species swimming nearby."
              className={clsx(
                "w-full rounded-lg object-cover",
                "h-120 sm:h-132 md:h-144 lg:h-156",
              )}
            />
          </div>
          <ArticleSection {...articleSections[2]} />
          <Gallery />
          <ArticleSection {...articleSections[3]} />
        </article>
      </main>
      <RelatedArticles articles={article.relatedArticles} />
    </div>
  );
};

export default memo(HomePage);
