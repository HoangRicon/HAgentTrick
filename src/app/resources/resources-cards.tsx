"use client";

import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Download,
  ArrowRight,
  FileText,
  Code2,
  FolderTree,
  Search,
  Sparkles,
  GitBranch,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ResourceMeta = {
  id: string;
  iconName: string;
  title: string;
  category: string;
  file: string;
  overview: string;
  highlights: string[];
  color: string;
  textColor: string;
  iconBg: string;
  border: string;
};

export type Resource = ResourceMeta & {
  content: string;
  base64: string;
  filename: string;
};

const iconMap: Record<string, LucideIcon> = {
  Code2,
  FolderTree,
  FileText,
  Search,
  Graph: GitBranch,
  Sparkles,
};

const ITEMS_PER_PAGE = 12;

export function ResourcesCards({ resources }: { resources: Resource[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const cats = ["Tất cả"];
    resources.forEach((r) => { if (!cats.includes(r.category)) cats.push(r.category); });
    return cats;
  }, [resources]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return resources.filter((r) => {
      const matchCat = selectedCategory === "Tất cả" || r.category === selectedCategory;
      const matchQuery = !q ||
        r.title.toLowerCase().includes(q) ||
        r.overview.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.highlights.some((h) => h.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [resources, query, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  const handleQueryChange = (q: string) => {
    setQuery(q);
    setPage(1);
  };

  return (
    <>
      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm tài nguyên..."
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {query && (
        <p className="text-sm text-muted-foreground mb-4">
          Tìm thấy <span className="font-semibold text-foreground">{filtered.length}</span> kết quả
        </p>
      )}

      {/* Grid */}
      {paginated.length > 0 ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {paginated.map((resource) => {
              const Icon = iconMap[resource.iconName] || FileText;
              return (
                <div
                  key={resource.id}
                  className={`group relative flex flex-col rounded-xl border bg-card ${resource.border} p-5 transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer`}
                  onClick={() => router.push(`/guide/resources/${resource.id}`)}
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${resource.color} opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity`} />
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-11 h-11 rounded-xl ${resource.iconBg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${resource.textColor}`} />
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${resource.iconBg} ${resource.textColor} font-medium`}>
                        {resource.category}
                      </span>
                    </div>
                    <h2 className="text-base font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                      {resource.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                      {resource.overview}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <FileText className="w-3.5 h-3.5" />
                        <span>.md</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          className={`inline-flex items-center gap-1 text-sm font-medium ${resource.textColor} hover:underline`}
                          onClick={(e) => { e.stopPropagation(); router.push(`/guide/resources/${resource.id}`); }}
                        >
                          Chi tiết
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={cn(
                      "w-8 h-8 rounded-lg text-sm font-medium transition-all",
                      p === page
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground"
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Search className="w-12 h-12 text-muted-foreground/30 mb-4" />
          <h3 className="font-semibold mb-2">Không tìm thấy tài nguyên</h3>
          <p className="text-sm text-muted-foreground">
            Thử thay đổi từ khóa hoặc bỏ bộ lọc danh mục
          </p>
        </div>
      )}

      {/* Will update + Contact */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl border bg-gradient-to-br from-primary/5 to-purple-500/5 mt-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold">Sẽ được cập nhật thêm</p>
            <p className="text-xs text-muted-foreground">
              Kho tài nguyên sẽ được bổ sung thêm các file quy tắc mới trong thời gian tới.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all text-sm whitespace-nowrap"
        >
          <Mail className="w-4 h-4" />
          Liên hệ hỗ trợ
        </Link>
      </div>
    </>
  );
}
