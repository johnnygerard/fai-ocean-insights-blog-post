import { ArticleSectionJson } from "@/article-section-json";
import hero from "@/asset/image/hero.png";
import hydrothermalVent from "@/asset/image/hydrothermal-vent.png";
import { ArticleHeader } from "@/component/article-header";
import { ArticleSection } from "@/component/article-section";
import Image from "next/image";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { memo } from "react";

const HomePage = async () => {
  const path = join(cwd(), "data/article-sections.json");
  const json = await readFile(path, "utf8");
  const articleSections: ArticleSectionJson[] = JSON.parse(json);

  return (
    <main className="py-12">
      <article>
        <ArticleHeader
          date="2025-04-02"
          tags={["Nature", "Ocean", "Exploration"]}
          title="Exploring the Depths of the Ocean"
        />
        <Image
          className="my-6 h-220 w-full object-cover"
          src={hero}
          alt="A vibrant coral reef teeming with colorful fish and marine life under clear blue water."
          priority
        />
        <ArticleSection {...articleSections[0]} />
        <div className="my-6 px-12">
          <video
            src="/asset/video/coral-reefs.mp4"
            className="h-190 w-full rounded-2xl object-cover"
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
        <div className="my-6 px-12">
          <Image
            src={hydrothermalVent}
            alt="A vibrant underwater scene showcasing a hydrothermal vent surrounded by colorful tube worms and various fish species swimming nearby."
            className="h-156 w-full rounded-lg object-cover"
          />
        </div>
      </article>
    </main>
  );
};

export default memo(HomePage);
