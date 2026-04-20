import Link from "next/link";
import { BookOpen, Code, Zap, ArrowRight } from "lucide-react";
import { docsCategories } from "@/lib/navigation";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  BookOpen,
  Code,
};

export default function DocsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Documentation</h1>
      <p className="text-muted-foreground mb-8">
        Welcome to the documentation. Select a category to get started.
      </p>

      <div className="grid gap-6">
        {docsCategories.map((category) => {
          const Icon = iconMap[category.icon] || BookOpen;
          return (
            <div
              key={category.slug}
              className="p-6 rounded-xl border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      >
                        <div>
                          <div className="font-medium text-sm">{item.title}</div>
                          {item.description && (
                            <div className="text-xs text-muted-foreground">
                              {item.description}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
