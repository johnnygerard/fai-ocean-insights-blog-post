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
    <aside className={cn("px-12 py-8", className)}>
      <h2
        className={cn(
          "border-t-[1.5px] border-[#B6979133]",
          "py-4 font-display text-[1.75rem]/[2rem] font-bold -tracking-[0.035rem]",
        )}
      >
        Related Articles
      </h2>
      <ul aria-label="Related Articles" className="flex gap-6">
        {articles.map((article) => (
          <li className="flex-1" key={article.title}>
            <ArticlePreview article={article} />
          </li>
        ))}
      </ul>
    </aside>
  );
});

RelatedArticles.displayName = "RelatedArticles";
