export type RelatedArticle = {
  image: {
    name: string;
    alt: string;
    blurDataURL: string;
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
      blurDataURL:
        "data:image/webp;base64,UklGRhwBAABXRUJQVlA4IBABAADQCgCdASrIAG0APzmYxl60qbElINgIWpAnCWdu3VwBHtANP9VTqgEtT6Llg6DZK9D+L+DqIeDJOPsG/8NKT3qjKxUCeiXWHOX/0w/WHXVrfQKol+tbWhHYg2RVtbFGAAD+wru7E3Mkbi5cJK0jKCUwPVggGAjW91lePprcjIoc9or2qSOsYUOPh0sfoUkw1WwjC8a1vT2Q9vgmpR9sxVGaTaZMzY4A3OYjrtIRd3Z8P6LG3wEkuTqbl9uD3osm5u1UMe8cO9KriuMvhIBFl80rdzyqC0ZiJlhDw2KgOlVZou3oSMZXNlIFq5i+GCmOEnftwmY5OAKPugmC27z/idU8qAmYSzXxB7FRUijPQ8AAAA==",
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
      blurDataURL:
        "data:image/webp;base64,UklGRgoBAABXRUJQVlA4IP4AAADwDACdASrIAG0APzmOv1uvKKckJFFcweAnCWlu4EF503QGf6mjD5juAF7YzmMASDpuHQh/9NqL4x4jjbfclrqb6AY1czX2mLeVVBEW1hpwguF2hWbhUNFB7B4AVmQF4G0Px5IXzTKjO5ISJf5G9nFgAP7ZpgOv4dnlNw4Eo/dRGVWvHrXdzvr6yuJViSX4bq4QT0yub/pJnT0Eel3iSnfVyK0fHpGe4JVA6MFKZOErlRAhC6k3S7+aAXOCgqAeYJitzwrDsvAAM6RPasynS7a7IO4XsYtz0HerLplem9uZsqbZ/2BeMg+E0Tm50R1L+gX+lUuZig5wPFzmnUAAAA==",
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
      blurDataURL:
        "data:image/webp;base64,UklGRiwBAABXRUJQVlA4ICABAACwCwCdASrIAG0APzmYxV40s6ikoRVY0pAnCWdu4AC9j+1VQkIeQAwzvd64zVZFpg8tGdOfazY0l5PfrxnJYk8z0P6Y2/cY9CrPfsRa1wzo02gcq/JVDrBk5V8ijnMiJW+1+bKFLAAA/tcXmznjf9yfrHT4L/i5wqZejf9TJsIknVDBQkVfp0Xv0ELP0a59L/EMmg6tVJr8l+8UUEJn73oZoD1xFYzrhXfV5/GmSgpkZaCtK8vK+moz1SmzMZYSyzgwfwprCwGNc2xfm4HvJHYK7f6byybJ40LROqy5BBtVBvuhtlkZwLsYeqroHqlfdTi/Uzo0PxEkEoHfpOTKtvDARjLeuDH3KV+Ob/v6sL/K+oMPqpg9cGtF506p043k2AA=",
    },
    title: "Protecting Marine Life",
    tags: ["Conservation"],
    date: "2024-10-14T00:00:00.000Z",
    slug: "protecting-marine-life",
  },
];
