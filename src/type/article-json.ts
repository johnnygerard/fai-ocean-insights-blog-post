export type ArticleJson = {
  relatedArticles: {
    image: {
      name: string;
      alt: string;
    };
    title: string;
    tags: string[];
    date: string;
    slug: string;
  }[];
  sections: {
    heading: string;
    content: string;
  }[];
};
