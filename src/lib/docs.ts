import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "src/content/docs");

export function getAllDocSlugs(): string[] {
  const slugs: string[] = [];

  function walkDir(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")) {
        const relativePath = fullPath.replace(CONTENT_DIR, "").replace(/\\/g, "/");
        const slug = relativePath.replace(/\.mdx?$/, "").replace(/^\//, "");
        slugs.push(slug);
      }
    }
  }

  walkDir(CONTENT_DIR);
  return slugs;
}

export function getDocBySlug(slug: string): {
  frontmatter: Record<string, unknown>;
  content: string;
  readingTime: string;
} | null {
  // Try different file extensions
  const extensions = [".mdx", ".md"];
  let filePath: string | null = null;

  for (const ext of extensions) {
    const candidate = path.join(CONTENT_DIR, `${slug}${ext}`);
    if (fs.existsSync(candidate)) {
      filePath = candidate;
      break;
    }
  }

  // Also try with index
  if (!filePath) {
    for (const ext of extensions) {
      const candidate = path.join(CONTENT_DIR, `${slug}/index${ext}`);
      if (fs.existsSync(candidate)) {
        filePath = candidate;
        break;
      }
    }
  }

  if (!filePath) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    frontmatter: data,
    content,
    readingTime: stats.text,
  };
}

export function getAllDocs(): Array<{
  slug: string;
  frontmatter: Record<string, unknown>;
  readingTime: string;
}> {
  const slugs = getAllDocSlugs();
  const docs = slugs.map((slug) => {
    const doc = getDocBySlug(slug);
    return {
      slug,
      frontmatter: doc?.frontmatter ?? {},
      readingTime: doc?.readingTime ?? "",
    };
  });

  return docs.sort((a, b) => {
    const aOrder = (a.frontmatter.order as number) ?? 999;
    const bOrder = (b.frontmatter.order as number) ?? 999;
    return aOrder - bOrder;
  });
}
