import { clsx } from "clsx";
import type { Metadata } from "next";
import { Domine, Outfit } from "next/font/google";
import type { FC, ReactNode } from "react";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { ScrollToTop } from "~/components/scroll-to-top";
import "./globals.css";

const outfit = Outfit({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-outfit",
});

const domine = Domine({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-domine",
});

const APP_NAME = "OceanInsights";
const TITLE = "Exploring the Depths of the Ocean";
const DESCRIPTION =
  "A fascinating journey into the mysteries of the ocean, uncovering the unknown and the beauty beneath the waves.";

export const metadata: Metadata = {
  metadataBase: new URL("https://oceaninsights.jgerard.dev"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html
      className={clsx(outfit.variable, domine.variable)}
      data-scroll-behavior="smooth"
      lang="en-US"
    >
      <body
        className={clsx(
          "mx-auto max-w-480 bg-canvas font-sans text-base text-[#E4DAD7]",
          "flex min-h-screen flex-col",
        )}
      >
        <Header />
        {children}
        <Footer className="mt-24" />
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
