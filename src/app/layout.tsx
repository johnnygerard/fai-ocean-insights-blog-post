import { Footer } from "@/component/footer";
import { Header } from "@/component/header";
import { Noscript } from "@/component/noscript";
import { cn } from "@/util/cn";
import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
          "mx-auto max-w-480 bg-canvas text-base text-[#E4DAD7]",
          "flex min-h-screen flex-col",
        )}
      >
        <Header />
        {children}
        <Footer className="mt-24" />
        <Noscript />
      </body>
    </html>
  );
};

export default memo(RootLayout);
