export type NavItem = {
  title: string;
  href: string;
  description?: string;
  subItems?: NavItem[];
};

export type DocCategory = {
  title: string;
  slug: string;
  icon: string;
  order: number;
  description: string;
  items: NavItem[];
};

export const mainNav: NavItem[] = [
  {
    title: "Quy trình thực chiến",
    href: "/workflow",
  },
  {
    title: "Tài nguyên",
    href: "/resources",
  },
  {
    title: "Hướng dẫn",
    href: "/guide",
  },

  {
    title: "Lưu ý quan trọng",
    href: "/guide/traps",
  },

  {
    title: "Liên hệ",
    href: "/contact",
  },
];

export const docsCategories: DocCategory[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    icon: "Zap",
    order: 1,
    description: "Quick start guides and installation instructions",
    items: [
      {
        title: "Introduction",
        href: "/docs/getting-started/introduction",
        description: "Get started with our documentation",
      },
      {
        title: "Installation",
        href: "/docs/getting-started/installation",
        description: "How to install and set up the project",
      },
      {
        title: "Quick Start",
        href: "/docs/getting-started/quick-start",
        description: "Get up and running in minutes",
      },
    ],
  },
  {
    title: "Guides",
    slug: "guides",
    icon: "BookOpen",
    order: 2,
    description: "Step-by-step guides for common tasks",
    items: [
      {
        title: "Configuration",
        href: "/docs/guides/configuration",
        description: "Configure your project settings",
      },
      {
        title: "Deployment",
        href: "/docs/guides/deployment",
        description: "Deploy your project to production",
      },
    ],
  },
  {
    title: "API Reference",
    slug: "api-reference",
    icon: "Code",
    order: 3,
    description: "Complete API documentation",
    items: [
      {
        title: "Authentication",
        href: "/docs/api-reference/authentication",
        description: "API authentication methods",
      },
      {
        title: "Endpoints",
        href: "/docs/api-reference/endpoints",
        description: "Available API endpoints",
      },
    ],
  },
];

export function getAllDocs(): NavItem[] {
  return docsCategories.flatMap((category) => category.items);
}

export function getDocByHref(href: string): { category: DocCategory; doc: NavItem } | null {
  for (const category of docsCategories) {
    const doc = category.items.find((item) => item.href === href);
    if (doc) {
      return { category, doc };
    }
  }
  return null;
}

export function getPrevNextDocs(href: string): { prev: NavItem | null; next: NavItem | null } {
  const allDocs = getAllDocs();
  const currentIndex = allDocs.findIndex((doc) => doc.href === href);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
    next: currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null,
  };
}
