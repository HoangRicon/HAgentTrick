"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsCategories, getDocByHref } from "@/lib/navigation";

export function DocsBreadcrumbs() {
  const pathname = usePathname();
  const docInfo = getDocByHref(pathname);

  if (!docInfo) {
    return (
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          <Home className="w-4 h-4" />
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span>Docs</span>
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-foreground transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link href="/docs" className="hover:text-foreground transition-colors">
        Docs
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link
        href={`/docs/${docInfo.category.slug}`}
        className="hover:text-foreground transition-colors"
      >
        {docInfo.category.title}
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-foreground">{docInfo.doc.title}</span>
    </nav>
  );
}
