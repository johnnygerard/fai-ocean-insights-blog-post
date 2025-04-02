import { Header } from "@/component/header";
import { Noscript } from "@/component/noscript";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import { Domine, Outfit } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

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
  metadataBase: new URL("https://placeholder.example.com"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${TITLE} | ${APP_NAME}`,
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

const RootLayout = ({ children }: Props) => {
  return (
    <html
      className={cn(outfit.variable, domine.variable, "font-sans antialiased")}
      lang="en-US"
    >
      <body
        className={cn(
          "text-[1.0625rem]/[1.75rem] text-[#E4DAD7]",
          "bg-[#0D0402]",
        )}
      >
        <Header />
        {children}
        <Noscript />
      </body>
    </html>
  );
};

export default memo(RootLayout);
