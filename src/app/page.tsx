import { ArticleHeader } from "@/component/article-header";
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
      </article>
    </main>
  );
};

export default memo(HomePage);
