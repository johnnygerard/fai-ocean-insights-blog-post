export type FooterNavigation = {
  header: string;
  links: Array<{
    href: string;
    text: string;
  }>;
};

export const footerNavigation: FooterNavigation[] = [
  {
    header: "Explore",
    links: [
      {
        href: "/explore/deep-sea",
        text: "Deep Sea",
      },
      {
        href: "/explore/marine-life",
        text: "Marine Life",
      },
      {
        href: "/explore/coral-reefs",
        text: "Coral Reefs",
      },
    ],
  },
  {
    header: "Conservation",
    links: [
      {
        href: "/conservation/initiatives",
        text: "Initiatives",
      },
      {
        href: "/conservation/research",
        text: "Research",
      },
      {
        href: "/conservation/get-involved",
        text: "Get Involved",
      },
    ],
  },
  {
    header: "About Us",
    links: [
      {
        href: "/about/our-mission",
        text: "Our Mission",
      },
      {
        href: "/about/team",
        text: "Team",
      },
      {
        href: "/about/contact",
        text: "Contact",
      },
    ],
  },
];
