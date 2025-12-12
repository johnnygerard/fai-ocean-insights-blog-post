import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound: FC = () => {
  return (
    <main className="tw_body_px grid flex-1 place-items-center">
      <div className="text-center">
        <h1 className="font-display text-h1 mb-4 font-bold">404 Not Found</h1>
        <p className="mb-6">
          Sorry, the page you are looking for does not exist.
          <br />
          This single-page demo website is part of my{" "}
          <a
            href="https://www.jgerard.dev/"
            className="text-accent font-medium transition-opacity hover:opacity-80"
          >
            portfolio
          </a>
          .
        </p>
        <Link
          href="/"
          className="text-accent font-medium transition-opacity hover:opacity-80"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
