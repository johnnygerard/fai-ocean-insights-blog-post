import { ArticleSectionJson } from "@/article-section-json";
import hero from "@/asset/image/hero.png";
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
          src={hero}
          alt="A vibrant coral reef teeming with colorful fish and marine life under clear blue water."
          priority
          className="my-6 w-full"
        />
        <ArticleSection {...articleSections[0]} />
      </article>
    </main>
  );
};

export default memo(HomePage);
