"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Download,
  X,
  ArrowRight,
  FileText,
  Code2,
  FolderTree,
  Search,
  Mail,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  GitBranch,
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
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selected, setSelected] = useState<Resource | null>(null);
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
                  onClick={() => setSelected(resource)}
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
                          onClick={(e) => { e.stopPropagation(); setSelected(resource); }}
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

      {/* Modal */}
      {selected && (
        <ViewerModal resource={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

type ViewerModalProps = { resource: Resource; onClose: () => void };

function ViewerModal({ resource, onClose }: ViewerModalProps) {
  const Icon = iconMap[resource.iconName] || FileText;
  const [activeTab, setActiveTab] = useState<"overview" | "content">("overview");

  const handleDownload = () => {
    try {
      const binary = atob(resource.base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: "text/markdown;charset=utf-8" });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = resource.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch {
      alert("Không thể tải file. Vui lòng thử lại.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border bg-card shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b shrink-0">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${resource.iconBg} flex items-center justify-center`}>
              <Icon className={`w-5 h-5 ${resource.textColor}`} />
            </div>
            <div>
              <span className={`text-xs px-2 py-1 rounded-full ${resource.iconBg} ${resource.textColor} font-medium`}>
                {resource.category}
              </span>
              <h2 className="font-bold mt-1 leading-tight">{resource.title}</h2>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b shrink-0 px-5">
          <button
            onClick={() => setActiveTab("overview")}
            className={cn(
              "px-4 py-2.5 text-sm font-medium border-b-2 transition-colors",
              activeTab === "overview"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Tổng quan
          </button>
          <button
            onClick={() => setActiveTab("content")}
            className={cn(
              "px-4 py-2.5 text-sm font-medium border-b-2 transition-colors flex items-center gap-2",
              activeTab === "content"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            <FileText className="w-3.5 h-3.5" />
            Nội dung file
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {activeTab === "overview" ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Tổng quan</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{resource.overview}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Nội dung chính</h3>
                <div className="space-y-2">
                  {resource.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${resource.textColor.replace("text-", "bg-")}`} />
                      <span className="text-sm leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border">
                <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground font-mono text-xs break-all">{resource.file}</span>
              </div>
            </div>
          ) : (
            <div>
              <pre className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-mono bg-muted/30 p-4 rounded-lg border overflow-x-auto max-h-[60vh] overflow-y-auto">
                {resource.content || "Không có nội dung."}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-5 border-t shrink-0 bg-card/95">
          
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={onClose}>Đóng</Button>
            <Button onClick={handleDownload} className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="w-4 h-4" />
              Tải file .md
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
