export type DocFrontmatter = {
  title: string;
  description: string;
  order?: number;
  category?: string;
  lastUpdated?: string;
  tags?: string[];
};

export type Doc = {
  slug: string;
  frontmatter: DocFrontmatter;
  content: string;
  readingTime: string;
};

export type DocSearchItem = {
  title: string;
  description: string;
  href: string;
  category: string;
  content?: string;
};
