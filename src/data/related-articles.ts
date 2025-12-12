export type RelatedArticle = {
  image: {
    name: string;
    alt: string;
  };
  title: string;
  tags: string[];
  date: string;
  slug: string;
};

export const relatedArticles: RelatedArticle[] = [
  {
    image: {
      name: "the-secrets-of-coral-reefs.png",
      alt: "A vibrant underwater scene featuring colorful coral formations surrounded by diverse marine life, including small fish and invertebrates.",
    },
    title: "The Secrets of Coral Reefs",
    tags: ["Marine Biology"],
    date: "2024-10-10T00:00:00.000Z",
    slug: "the-secrets-of-coral-reefs",
  },
  {
    image: {
      name: "understanding-ocean-currents.png",
      alt: "A boat navigating through swirling ocean currents with waves splashing around it.",
    },
    title: "Understanding Ocean Currents",
    tags: ["Oceanography"],
    date: "2024-10-12T00:00:00.000Z",
    slug: "understanding-ocean-currents",
  },
  {
    image: {
      name: "protecting-marine-life.png",
      alt: "A colorful coral reef teeming with diverse fish swimming among the corals in clear blue water.",
    },
    title: "Protecting Marine Life",
    tags: ["Conservation"],
    date: "2024-10-14T00:00:00.000Z",
    slug: "protecting-marine-life",
  },
];
