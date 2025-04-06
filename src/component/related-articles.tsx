import { ArticlePreview } from "@/component/article-preview";
import { ArticleJson } from "@/type/article-json";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  articles: ArticleJson["relatedArticles"];
  className?: string;
};

export const RelatedArticles = memo(({ articles, className }: Props) => {
  return (
    <aside className={cn("tw_body_px py-6 md:py-7 lg:py-8", className)}>
      <nav aria-label="Related Articles">
        <h2
          className={cn(
            "border-t-[1.5px] border-[#B6979133]",
            "py-3 font-display text-h2 font-bold -tracking-[0.035rem] md:py-4",
          )}
        >
          Related Articles
        </h2>
        <ul className="grid gap-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {articles.map((article) => (
            <li key={article.title}>
              <ArticlePreview article={article} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
});

RelatedArticles.displayName = "RelatedArticles";
