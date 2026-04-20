"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getPrevNextDocs } from "@/lib/navigation";

interface DocNavigationProps {
  href: string;
}

export function DocNavigation({ href }: DocNavigationProps) {
  const { prev, next } = getPrevNextDocs(href);

  if (!prev && !next) {
    return null;
  }

  return (
    <nav className="flex items-center justify-between gap-4 mt-12 pt-8 border-t">
      <div>
        {prev && (
          <Link
            href={prev.href}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-xs text-muted-foreground">Previous</div>
              <div className="font-medium">{prev.title}</div>
            </div>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            href={next.href}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Next</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </nav>
  );
}
