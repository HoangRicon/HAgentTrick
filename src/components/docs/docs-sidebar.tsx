"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsCategories } from "@/lib/navigation";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto py-6 pr-4">
        <nav className="space-y-6">
          {docsCategories.map((category) => (
            <div key={category.slug}>
              <h4 className="font-semibold text-sm mb-3 text-foreground">
                {category.title}
              </h4>
              <ul className="space-y-1">
                {category.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-sm px-3 py-2 rounded-md transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
