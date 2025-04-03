import { cn } from "@/util/cn";
import { Metadata } from "next";
import Link from "next/link";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <main className="grid flex-1 place-items-center">
      <div className="text-center">
        <h1 className="mb-4 font-display text-[3rem] font-bold">
          404 Not Found
        </h1>
        <p className="mb-6 text-[1.0625rem]/[1.75rem]">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className={cn(
            "text-[1.0625rem]/[1.75rem] font-medium text-accent",
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
