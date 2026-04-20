import { notFound } from "next/navigation";
import Link from "next/link";
import { getDocBySlug, getAllDocSlugs } from "@/lib/docs";
import { getPrevNextDocs } from "@/lib/navigation";
import { DocsBreadcrumbs } from "@/components/docs/docs-breadcrumbs";
import { DocNavigation } from "@/components/docs/docs-navigation";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map((slug) => ({
    slug: slug.split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugString = slug.join("/");
  const doc = getDocBySlug(slugString);

  if (!doc) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: doc.frontmatter.title as string,
    description: doc.frontmatter.description as string,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const slugString = slug.join("/");
  const doc = getDocBySlug(slugString);

  if (!doc) {
    notFound();
  }

  const { frontmatter, content, readingTime } = doc;
  const { prev, next } = getPrevNextDocs(`/docs/${slugString}`);

  const lastUpdatedRaw = frontmatter.lastUpdated;
  const lastUpdated = lastUpdatedRaw instanceof Date
    ? lastUpdatedRaw.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : (lastUpdatedRaw as string | undefined);

  return (
    <article>
      <DocsBreadcrumbs />

      {/* Doc Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{frontmatter.title as string}</h1>
        <p className="text-lg text-muted-foreground mb-4">
          {frontmatter.description as string}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {lastUpdated && (
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{lastUpdated}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{readingTime}</span>
          </div>
        </div>
      </header>

      {/* Doc Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      {/* Doc Navigation */}
      {(prev || next) && (
        <div className="flex items-center justify-between gap-4 mt-12 pt-8 border-t">
          <div>
            {prev && (
              <Link
                href={prev.href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
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
        </div>
      )}
    </article>
  );
}
