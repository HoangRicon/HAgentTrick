import Link from "next/link";
import type { Metadata } from "next";
import {
  BookOpen,
  FileText,
  Brain,
  Target,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Layers,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hướng dẫn",
  description: "Các hướng dẫn sử dụng AI Agent hiệu quả: viết prompt chuẩn, phân tích yêu cầu, sử dụng tài nguyên, và quy trình thực chiến.",
};

const guideSections = [
  {
    num: "01",
    icon: FileText,
    href: "/guide/prompt",
    color: "blue",
    title: "Quy tắc viết Prompt",
    desc: "Cấu trúc prompt chuẩn: Context, Task, Constraints, Output. Bốn thành phần bắt buộc cho mọi prompt.",
    highlights: [
      "4 thành phần bắt buộc cho mọi prompt",
      "Kỹ thuật nâng cao: Zero-shot, Few-shot, Chain-of-Thought",
      "Template chi tiết cho 8 loại nhiệm vụ",
      "Hướng dẫn spec-driven prompting",
    ],
    badge: "Quan trọng",
  },
  {
    num: "02",
    icon: Brain,
    href: "/guide/analysis",
    color: "violet",
    title: "Phân tích yêu cầu",
    desc: "Xác định actor, entity, ownership, permission và build order trước khi nhờ AI code bất cứ thứ gì.",
    highlights: [
      "6 nguyên tắc phân tích yêu cầu",
      "Xác định actor, entity, ownership rõ ràng",
      "Quy tắc tách core flow vs support flow",
      "Cấu trúc file phân tích chuẩn",
    ],
    badge: "Nền tảng",
  },
  {
    num: "03",
    icon: Target,
    href: "/workflow",
    color: "emerald",
    title: "Quy trình thực chiến",
    desc: "6 bước Power → Plan → Resources → Build → Review → Ship. Từ xác định sức mạnh AI đến triển khai sản phẩm hoàn chỉnh.",
    highlights: [
      "Xác định sức mạnh AI trước khi giao việc",
      "Mỗi module 2-5 files, có checkpoint",
      "AI tự review theo checklist",
      "Commit nhỏ, commit sớm — mỗi bước là checkpoint",
    ],
    badge: "6 bước",
  },
  {
    num: "04",
    icon: BookOpen,
    href: "/guide/resources",
    color: "amber",
    title: "Hướng dẫn sử dụng tài nguyên",
    desc: "Cách lấy tài nguyên (quy tắc code, quy tắc prompt, quy tắc phân tích) từ trang Tài nguyên và tích hợp vào AI Agent.",
    highlights: [
      "4 bước lấy tài nguyên từ trang Tài nguyên",
      "Copy nội dung file .md vào AI Agent",
      "Tài nguyên theo từng giai đoạn quy trình",
      "Cách dùng tham chiếu đường dẫn trong prompt",
    ],
    badge: "Tài nguyên",
  },
  {
    num: "05",
    icon: Compass,
    href: "/guide/ai-research",
    color: "cyan",
    title: "Dùng AI để nghiên cứu & học tập",
    desc: "Chọn đúng AI tool cho đúng việc: NotebookLM cho tài liệu, Perplexity cho thông tin thời gian thực, GPT cho sáng tạo. Cộng thêm DeepSeek, Grok, Copilot, Gemini.",
    highlights: [
      "4 AI tool chính: NotebookLM, Perplexity, GPT, Claude",
      "Quy trình chọn tool theo từng trường hợp cụ thể",
      "Ưu điểm và hạn chế của từng tool",
      "Prompt mẫu cho mỗi loại tác vụ",
    ],
    badge: "Mới",
  },
];

const principles = [
  { icon: Shield, title: "Human-in-the-Loop", desc: "AI hỗ trợ nhưng quyết định cuối cùng luôn thuộc về bạn." },
  { icon: Layers, title: "Incremental Build", desc: "Mỗi lần chỉ thay đổi 2-5 files, test kỹ trước khi tiếp tục." },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string; glow: string; badge: string; badgeText: string }> = {
  blue: { bg: "bg-blue-500/5", text: "text-blue-600 dark:text-blue-400", border: "hover:border-blue-500/40", iconBg: "bg-blue-500/10", glow: "hover:shadow-blue-500/10", badge: "bg-blue-500/10", badgeText: "text-blue-600 dark:text-blue-400" },
  violet: { bg: "bg-violet-500/5", text: "text-violet-600 dark:text-violet-400", border: "hover:border-violet-500/40", iconBg: "bg-violet-500/10", glow: "hover:shadow-violet-500/10", badge: "bg-violet-500/10", badgeText: "text-violet-600 dark:text-violet-400" },
  emerald: { bg: "bg-emerald-500/5", text: "text-emerald-600 dark:text-emerald-400", border: "hover:border-emerald-500/40", iconBg: "bg-emerald-500/10", glow: "hover:shadow-emerald-500/10", badge: "bg-emerald-500/10", badgeText: "text-emerald-600 dark:text-emerald-400" },
  amber: { bg: "bg-amber-500/5", text: "text-amber-600 dark:text-amber-400", border: "hover:border-amber-500/40", iconBg: "bg-amber-500/10", glow: "hover:shadow-amber-500/10", badge: "bg-amber-500/10", badgeText: "text-amber-600 dark:text-amber-400" },
  cyan: { bg: "bg-cyan-500/5", text: "text-cyan-600 dark:text-cyan-400", border: "hover:border-cyan-500/40", iconBg: "bg-cyan-500/10", glow: "hover:shadow-cyan-500/10", badge: "bg-cyan-500/10", badgeText: "text-cyan-600 dark:text-cyan-400" },
};

const accentGradientMap: Record<string, string> = {
  blue: "from-blue-600 to-blue-400",
  violet: "from-violet-600 to-violet-400",
  emerald: "from-emerald-600 to-emerald-400",
  amber: "from-amber-600 to-amber-400",
  cyan: "from-cyan-600 to-cyan-400",
};

export default function GuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-background to-purple-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Hướng dẫn
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Hướng dẫn sử dụng{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Agent
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Các hướng dẫn giúp bạn sử dụng AI Agent hiệu quả hơn.
            Mỗi phần đều có ví dụ cụ thể, template chi tiết, và checklist thực tế.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* Principles */}
        <section>
          <div className="grid sm:grid-cols-2 gap-3">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex items-start gap-3 p-4 rounded-xl border bg-card">
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-violet-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">{p.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Guide cards */}
        <section>
          <h2 className="text-xl font-bold mb-5">Hướng dẫn</h2>
          <div className="flex flex-col gap-4">
            {guideSections.map((section) => {
              const c = colorMap[section.color];
              const grad = accentGradientMap[section.color];
              const Icon = section.icon;
              return (
                <Link
                  key={section.num}
                  href={section.href}
                  className={`group relative flex items-center gap-5 p-5 sm:p-6 rounded-2xl border border-border bg-background/40 backdrop-blur-sm ${c.border} ${c.glow} hover:bg-background/70 hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-${section.color}-500/[0.03] to-transparent pointer-events-none`} />

                  {/* Number */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-1.5xl flex items-center justify-center bg-gradient-to-br ${grad} shadow-lg`}>
                    <span className="text-sm font-black text-white tracking-tight">{section.num}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl ${c.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5.5 h-5.5 ${c.text}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors duration-200">
                        {section.title}
                      </h3>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${c.badge} ${c.badgeText}`}>
                        {section.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{section.desc}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {section.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${c.text} flex-shrink-0`} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                    <ArrowRight className={`w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-2xl border border-dashed bg-gradient-to-br from-violet-500/5 to-purple-500/5 p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-violet-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1">Có thêm hướng dẫn mới sắp tới</h3>
                <p className="text-sm text-muted-foreground">
                  Trang này sẽ được cập nhật thêm các hướng dẫn mới. Quay lại thường xuyên để xem nội dung mới.
                </p>
              </div>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all shrink-0"
              >
                <Zap className="w-4 h-4" />
                Tài nguyên
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
