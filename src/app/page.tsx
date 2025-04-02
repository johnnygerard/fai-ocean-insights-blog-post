import hero from "@/asset/image/hero.png";
import { ArticleHeader } from "@/component/article-header";
import Image from "next/image";
import { memo } from "react";

const HomePage = () => {
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
      </article>
    </main>
  );
};

export default memo(HomePage);
