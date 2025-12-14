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
          blurDataURL="data:image/webp;base64,UklGRiQBAABXRUJQVlA4IBgBAABQDACdASrIAG0APzmYw12vKaakoNgJseAnCWdu3dX+1fwwAetfwAlSLUm8pp9RwqTEPhy2ce5IHEHjW/Hd5G8sg29QLmMF0wQy9a5OS+JgZHShNBdtsMsOZIi1yX5nSuADxUgkwo3//k1owAD+1qPqvyHXFyBn9B6QkQyEimucIbO+G4tfkkVdkSw0y3383alLOTp/VS+lXXSXuwMbjtXWDCUzyG88Rp6cegkeNJqLCfWS+u9OLOlOybbuEISAEAwuBwOTD+XtIuSpvFhURfPOsVe5G4VLTw+3ZjpdKMdCwEJINAHo20/8LoO0wVunnVz+QKtpGtmaHjT4CO3peMAP6P/4ire4U+Yv3tXJ08FRu1N6va1uSgAA"
          placeholder="blur"
          preload
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
            blurDataURL="data:image/webp;base64,UklGRgABAABXRUJQVlA4IPQAAAAwCgCdASrIAFsAPzmcxF4vKqakoGmp4CcJZ27eUANRePUAbl5PgrzgTlon+mudY8rQBu+GRU0MTAvudijkqX+DwOCTcq10a8mwRK/CHzSDLQJxQ/XjqaN+ggAA/uVNmT+nZo/xX0ZntZRuuCYCyE5NDngqqUW22CTo2CQtnDVEkFywfGUKYFo4GShXw4lGQUCUDOSLiRJhlaOBZ1anx0D+o2VNCrmW8U/bUaWMdK7htonmaij0tn8dBfTKofEmC4shQoR30rUf/5i/W0Xs7tHUTjIVSiFkzK/CfRCnzT0Uj7IQjxgOGJojKf0C+YE/9NW5wAAA"
            placeholder="blur"
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
