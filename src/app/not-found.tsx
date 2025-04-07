import { Metadata } from "next";
import Link from "next/link";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <main className="tw_body_px grid flex-1 place-items-center">
      <div className="text-center">
        <h1 className="mb-4 font-display text-h1 font-bold">404 Not Found</h1>
        <p className="mb-6">
          Sorry, the page you are looking for does not exist.
          <br />
          This single-page demo website is part of my{" "}
          <a
            href="https://www.jgerard.dev/"
            className="font-medium text-accent transition-[opacity] hover:opacity-80"
          >
            portfolio
          </a>
          .
        </p>
        <Link
          href="/"
          className="font-medium text-accent transition-[opacity] hover:opacity-80"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default memo(NotFound);
