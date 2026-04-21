import Link from "next/link";
import type { Metadata } from "next";
import {
  BookOpen,
  Download,
  ChevronRight,
  Copy,
  ClipboardPaste,
  CheckCircle2,
  FolderOpen,
  Layers,
  Workflow,
  FileText,
  Shield,
  Search,
  Network,
  Sparkles,
  Play,
  Zap,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hướng dẫn sử dụng tài nguyên",
  description: "Hướng dẫn lấy tài nguyên từ trang Tài nguyên và bỏ vào AI Agent để tăng cường khả năng làm việc.",
};

const resourceSteps = [
  {
    step: 1,
    icon: BookOpen,
    title: "Tìm tài nguyên phù hợp",
    desc: "Truy cập trang Tài nguyên để xem danh sách đầy đủ các tài nguyên: quy tắc code, quy tắc prompt, quy tắc phân tích, quy tắc kế hoạch, và công cụ hỗ trợ.",
    href: "/resources",
    hrefLabel: "Truy cập Tài nguyên",
  },
  {
    step: 2,
    icon: Download,
    title: "Tải file markdown về máy",
    desc: "Tải file .md của tài nguyên bạn cần sử dụng. Mỗi tài nguyên đều có nút Tải về ngay trên thẻ.",
    href: "/resources",
    hrefLabel: "Tải tài nguyên",
  },
  {
    step: 3,
    icon: FolderOpen,
    title: "Đặt file vào thư mục phù hợp",
    desc: "Đặt file .md vào thư mục trong project. Ví dụ: docs/rules/ cho quy tắc code, docs/analysis/ cho quy tắc phân tích.",
    href: "/resources",
    hrefLabel: "Xem tài nguyên",
  },
  {
    step: 4,
    icon: ClipboardPaste,
    title: "Copy nội dung vào AI Agent",
    desc: "Copy toàn bộ nội dung file .md và paste vào cuộc trò chuyện với AI Agent. Hoặc tham chiếu đường dẫn tới file trong prompt.",
    href: "/resources",
    hrefLabel: "Lấy tài nguyên",
  },
];

const workflowResources = [
  {
    phase: "Phân tích",
    icon: Search,
    color: "green",
    resources: [
      { name: "Quy tắc phân tích yêu cầu", file: "docs/Chung/Quy tắc viết phân tích yêu cầu chức năng.md", desc: "Xác định actor, entity, ownership, permission, build order" },
    ],
  },
  {
    phase: "Viết prompt",
    icon: FileText,
    color: "blue",
    resources: [
      { name: "Quy tắc viết prompt", file: "docs/Chung/Quy tắc viết prompt.md", desc: "4 thành phần bắt buộc, kỹ thuật nâng cao, template" },
    ],
  },
  {
    phase: "Kế hoạch",
    icon: Layers,
    color: "orange",
    resources: [
      { name: "Quy tắc viết kế hoạch", file: "docs/Chung/Quy tắc viết kế hoạch triển khai.md", desc: "Tách phase, dependency, mức ưu tiên, checkpoint" },
    ],
  },
  {
    phase: "Code",
    icon: Workflow,
    color: "violet",
    resources: [
      { name: "Quy tắc code Next.js", file: "docs/Next.js fullstack/Quy tắc code.md", desc: "6 layer kiến trúc, API design, database schema" },
      { name: "Cấu trúc thư mục", file: "docs/Next.js fullstack/Cấu trúc thư mục.md", desc: "Route groups, API routes, components, lib" },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/20" },
};

const howToUseItems = [
  { icon: Copy, text: "Copy nội dung file .md và paste trực tiếp vào chat AI Agent" },
  { icon: ClipboardPaste, text: "Dùng tham chiếu đường dẫn tới file trong prompt: \"Đọc file docs/Chung/Quy tắc code.md\"" },
  { icon: CheckCircle2, text: "Khi AI đọc được file, nó sẽ hiểu cấu trúc project và sinh code đúng theo quy tắc" },
  { icon: Sparkles, text: "Có thể bỏ nhiều file cùng luc để AI có nhiều ngữ cảnh lập, nhiều quy tắc cùng một luc" },
];

export default function ResourcesGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-background to-purple-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Hướng dẫn sử dụng tài nguyên
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Hướng dẫn sử dụng{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              tài nguyên
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Tài nguyên là các file markdown chứa quy tắc, nguyên tắc và hướng dẫn giúp AI Agent
            làm việc đúng cách. Hướng dẫn này chi tiết các bước lấy tài nguyên và tích hợp vào AI Agent.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* Video hướng dẫn */}
        <section>
          <h2 className="text-xl font-bold mb-5">Video hướng dẫn</h2>
          <div className="rounded-2xl border border-indigo-500/20 overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%)]" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 text-indigo-500 ml-1" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Xem video hướng dẫn</div>
                  <div className="text-xs text-muted-foreground mt-1">Cách lấy và sử dụng tài nguyên với AI Agent</div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-card border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Hướng dẫn sử dụng tài nguyên</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Video demo cách tải, cài đặt và dùng tài nguyên với AI Agent</div>
                </div>
                <a
                  href="/resources"
                  className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-all shrink-0"
                >
                  <Download className="w-4 h-4" />
                  Tài nguyên
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4 bước lấy tài nguyên */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">4 bước lấy tài nguyên</h2>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
            >
              <Zap className="w-4 h-4" />
              Tài nguyên
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {resourceSteps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="flex items-start gap-4 p-5 rounded-xl border bg-card hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">{s.step}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-indigo-500" />
                      <h3 className="font-semibold text-sm">{s.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{s.desc}</p>
                    <Link href={s.href} className="inline-flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-600 font-medium">
                      {s.hrefLabel} <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tài nguyên theo quy trình */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">Tài nguyên theo quy trình làm việc</h2>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-border bg-background text-sm font-medium hover:border-primary/30 hover:bg-accent transition-all"
            >
              Xem tất cả
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            Mỗi giai đoạn của quy trình thực chiến có tài nguyên phù hợp. Sử dụng đúng tài nguyên
            tại đúng thời điểm giúp AI Agent hiểu rõ yêu cầu và sinh code chính xác hơn.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {workflowResources.map((wr) => {
              const c = colorMap[wr.color];
              const Icon = wr.icon;
              return (
                <div key={wr.phase} className="rounded-xl border bg-card overflow-hidden">
                  <div className={`flex items-center gap-3 px-5 py-4 ${c.bg}`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                    <span className={`font-semibold text-sm ${c.text}`}>{wr.phase}</span>
                  </div>
                  <div className="p-4 space-y-3">
                    {wr.resources.map((r) => (
                      <div key={r.name} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-4 h-4 ${c.text} flex-shrink-0 mt-0.5`} />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium">{r.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{r.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Công cụ hỗ trợ */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">Công cụ hỗ trợ</h2>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-border bg-background text-sm font-medium hover:border-primary/30 hover:bg-accent transition-all"
            >
              Xem tất cả
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Network,
                name: "Code Review Graph",
                desc: "Xây dựng knowledge graph của codebase bằng Tree-sitter. AI hiểu cấu trúc mã nguồn trong ~100 tokens thay vì đọc lại toàn bộ code.",
                href: "/resources",
                color: colorMap.green,
              },
              {
                icon: Sparkles,
                name: "Superpowers",
                desc: "Khung kỹ năng cho coding agent: brainstorming, writing-plans, TDD, subagent-driven development. Hỗ trợ Claude, Cursor, Codex.",
                href: "/resources",
                color: colorMap.blue,
              },
            ].map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.name} className="group flex items-start gap-4 p-5 rounded-xl border bg-card hover:border-primary/20 transition-colors">
                  <div className={`w-11 h-11 rounded-xl ${tool.color.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${tool.color.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{tool.desc}</p>
                    <Link href={tool.href} className="inline-flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-600 font-medium">
                      Xem chi tiết <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cách sử dụng với AI Agent */}
        <section>
          <h2 className="text-xl font-bold mb-5">Cách sử dụng với AI Agent</h2>
          <div className="rounded-xl border bg-card p-6 space-y-3">
            {howToUseItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-indigo-500" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-1">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Lợi ích */}
        <section>
          <h2 className="text-xl font-bold mb-5">Tài nguyên giúp gì?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: "Duy trì tính nhất quán", desc: "AI Agent follow đúng quy tắc của dự án, không tự ý theo default của nó" },
              { icon: CheckCircle2, title: "Giảm lỗi sinh code", desc: "Nguyên tắc rõ ràng giúp AI hiểu đúng yêu cầu từ lần đầu" },
              { icon: Workflow, title: "Tăng tốc độ", desc: "Không cần giải thích lại quy tắc mỗi lần bắt đầu dự án" },
            ].map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex items-start gap-3 p-4 rounded-xl border bg-card">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Liên quan */}
        <section>
          <h2 className="text-xl font-bold mb-5">Liên quan</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/resources"
              className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors">Tài nguyên</div>
                <div className="text-xs text-muted-foreground">Xem và tải tài nguyên</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </Link>
            <Link
              href="/resources"
              className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors">Quy tắc viết Prompt</div>
                <div className="text-xs text-muted-foreground">Dùng quy tắc prompt cùng tài nguyên</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </Link>
            <Link
              href="/resources"
              className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors">Quy trình thực chiến</div>
                <div className="text-xs text-muted-foreground">Áp dụng tài nguyên vào workflow</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </Link>
            <Link
              href="/resources"
              className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors">Phân tích yêu cầu</div>
                <div className="text-xs text-muted-foreground">Dùng tài nguyên phân tích</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
