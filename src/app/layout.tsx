import { Noscript } from "@/component/noscript";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const APP_NAME = "appName";
const TITLE = "title";
const DESCRIPTION = "description";

export const metadata: Metadata = {
  metadataBase: new URL("https://placeholder.example.com"),
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

const RootLayout = ({ children }: Props) => {
  return (
    <html
      className={cn(geistSans.variable, "font-sans antialiased")}
      lang="en-US"
    >
      <body>
        {children}
        <Noscript />
      </body>
    </html>
  );
};

export default memo(RootLayout);
