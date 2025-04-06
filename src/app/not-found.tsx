import { clsx } from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <main className="grid flex-1 place-items-center px-4 sm:px-6 md:px-8">
      <div className="text-center">
        <h1 className="mb-4 font-display text-h1 font-bold">404 Not Found</h1>
        <p className="mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className={clsx(
            "font-medium text-accent",
            "transition-[opacity] hover:opacity-80",
          )}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default memo(NotFound);
