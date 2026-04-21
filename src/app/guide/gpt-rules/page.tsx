import Link from "next/link";
import type { Metadata } from "next";
import {
  BookOpen,
  Wand2,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Lightbulb,
  FileCode,
  Cpu,
  Sparkles,
  Target,
  Code2,
  Zap,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tạo bộ luật riêng với GPT RULES",
  description: "Hướng dẫn dùng GPT RULES để tự động tạo bộ luật code và cấu trúc cho bất kỳ dự án nào, rồi tích hợp vào Cursor, Claude Code, và các AI coding tool khác.",
};

const whatItDoes = {
  title: "GPT RULES là gì?",
  icon: Wand2,
  summary:
    "Một custom GPT mà bạn đã tạo sẵn. Chỉ cần mô tả dự án của bạn, nó sẽ tự động sinh ra bộ luật code hoàn chỉnh: quy tắc đặt tên, cấu trúc thư mục, kiến trúc hệ thống, quy ước commit, testing rules, và nhiều hơn nữa — tất cả format sẵn để bỏ thẳng vào CLAUDE.md, .cursorrules, hoặc bất kỳ file luật nào.",
  color: "amber",
  bg: "bg-amber-500/10",
  border: "border-amber-500/30",
  text: "text-amber-600 dark:text-amber-400",
};

const capabilities = [
  {
    icon: FileCode,
    title: "Quy tắc code",
    desc: "Đặt tên, convention, style guide, TypeScript strictness, error handling patterns",
    color: "violet",
  },
  {
    icon: Target,
    title: "Cấu trúc thư mục",
    desc: "Kiến trúc folder theo framework: Next.js, React, Node.js, Python, v.v.",
    color: "cyan",
  },
  {
    icon: Cpu,
    title: "Kiến trúc hệ thống",
    desc: "Layer separation, dependency rules, API design patterns, data flow",
    color: "green",
  },
  {
    icon: Zap,
    title: "Quy ước commit",
    desc: "Conventional commits, branching strategy, PR workflow, code review checklist",
    color: "blue",
  },
  {
    icon: Sparkles,
    title: "Testing rules",
    desc: "Test coverage requirements, naming convention, what to test, what not to test",
    color: "pink",
  },
  {
    icon: Lightbulb,
    title: "Best practices",
    desc: "Performance, security, accessibility, SEO — tuỳ framework và ngôn ngữ",
    color: "orange",
  },
];

const steps = [
  {
    num: 1,
    icon: ExternalLink,
    title: "Truy cập GPT RULES",
    desc: "Mở link GPT RULES mà bạn đã tạo. Đăng nhập ChatGPT nếu chưa có.",
    action: {
      label: "Mở GPT RULES",
      href: "https://chatgpt.com/g/g-69bcf177cdb08191af682aa50de37cc3-rules",
    },
  },
  {
    num: 2,
    icon: Code2,
    title: "Mô tả dự án của bạn",
    desc: "Cung cấp thông tin càng chi tiết càng tốt: ngôn ngữ lập trình, framework, loại dự án (web, API, mobile, data pipeline...), quy mô team, và bất kỳ quy ước hiện có nào bạn muốn giữ.",
    promptExamples: [
      '"Tôi đang làm một dự án Next.js 14 App Router, TypeScript, Tailwind CSS. Team 2 người. Cần quy tắc code và cấu trúc thư mục."',
      '"Dự án NestJS cho backend API, PostgreSQL, Docker. Cần architecture rules và testing conventions."',
      '"Monorepo React Native + Node.js. Cần rules cho cả mobile và backend."',
    ],
  },
  {
    num: 3,
    icon: Wand2,
    title: "Nhận bộ luật hoàn chỉnh",
    desc: "GPT RULES sẽ sinh ra bộ luật chi tiết, bao gồm: quy tắc code, cấu trúc thư mục, kiến trúc, testing, và best practices. Toàn bộ format theo chuẩn để bỏ thẳng vào file luật.",
    output: "GPT RULES sẽ output nhiều file markdown, mỗi file cho một phần: coding-rules.md, architecture.md, folder-structure.md, testing-rules.md, commit-convention.md...",
  },
  {
    num: 4,
    icon: CheckCircle2,
    title: "Copy vào AI coding tool",
    desc: "Tuỳ tool bạn dùng, copy nội dung phù hợp vào file luật tương ứng. Xem bảng bên dưới để biết file nào cho tool nào.",
    copyTargets: [
      { file: "coding-rules.md", into: "CLAUDE.md, .cursorrules, ANTHROPIC.md" },
      { file: "architecture.md", into: "CLAUDE.md, .cursorrules" },
      { file: "folder-structure.md", into: "CLAUDE.md, .cursorrules" },
      { file: "testing-rules.md", into: "CLAUDE.md" },
      { file: "commit-convention.md", into: "docs/rules/ hoặc CLAUDE.md" },
    ],
  },
];

const copyTargets = [
  { tool: "Cursor", file: "CLAUDE.md hoặc .cursorrules", how: "Dán nội dung vào file ở thư mục gốc. Cursor đọc tự động." },
  { tool: "Claude Code", file: "CLAUDE.md", how: "Dán vào CLAUDE.md ở thư mục gốc. Claude Code đọc khi khởi động." },
  { tool: "Augment", file: "GUIDELINES.md", how: "Dán vào GUIDELINES.md ở thư mục gốc." },
  { tool: "Codex", file: "SYSTEM_INSTRUCTIONS.md", how: "Dán vào file instructions của Codex." },
  { tool: "Copilot", file: ".github/copilot-instructions.md", how: "Dán vào file trong thư mục .github/." },
  { tool: "Antigravity", file: "agent.md hoặc rules/", how: "Dán vào agent.md hoặc tách thành nhiều file trong rules/." },
];

const tips = [
  { t: "Càng mô tả chi tiết, luật càng đúng", d: "Framework, ngôn ngữ, team size, style preference — mọi thứ đều giúp GPT RULES sinh luật phù hợp hơn." },
  { t: "Review trước khi copy", d: "Đọc lại luật GPT sinh ra, bỏ phần không phù hợp với project, thêm phần thiếu. Luật tự tạo vẫn cần human review." },
  { t: "Tách nhiều file thay vì nhét một file", d: "GPT RULES sinh ra nhiều file (code, architecture, testing...). Copy từng phần vào đúng section của CLAUDE.md, đừng nhét tất cả vào một đoạn." },
  { t: "Dùng kết hợp với tài nguyên có sẵn", d: "Luật từ GPT RULES là nền tảng. Bổ sung thêm template prompt, quy tắc phân tích từ trang Tài nguyên để có bộ đầy đủ." },
  { t: "Cập nhật khi project thay đổi", d: "Khi project grow, quay lại GPT RULES, mô tả thêm thay đổi và yêu cầu cập nhật luật." },
];

const relatedTools = [
  { name: "Hướng dẫn sử dụng tài nguyên", href: "/guide/resources", desc: "Cách bỏ luật vào từng AI tool" },
  { name: "Quy tắc viết Prompt", href: "/guide/prompt", desc: "Dùng quy tắc prompt cùng bộ luật" },
  { name: "Lưu ý & Bẫy", href: "/guide/traps", desc: "Tránh sai lầm khi dùng AI" },
  { name: "Dùng AI để nghiên cứu", href: "/guide/ai-research", desc: "Chọn đúng tool cho đúng việc" },
];

export default function GPTRulesGuidePage() {
  const whatIcon = whatItDoes.icon;
  const c = { bg: whatItDoes.bg, border: whatItDoes.border, text: whatItDoes.text };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-background to-orange-500/5" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium mb-5">
              <Wand2 className="w-4 h-4" />
              Custom GPT
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Tạo bộ luật riêng với{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                GPT RULES
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bạn đã có sẵn một custom GPT chuyên tạo bộ luật code. Chỉ cần mô tả dự án,
              GPT RULES sẽ sinh ra bộ luật hoàn chỉnh — định dạng sẵn để bỏ thẳng vào
              Cursor, Claude Code, hay bất kỳ AI coding tool nào.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="https://chatgpt.com/g/g-69bcf177cdb08191af682aa50de37cc3-rules"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 transition-all"
              >
                <Wand2 className="w-4 h-4" />
                Mở GPT RULES
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
              <Link
                href="/guide/resources"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-border bg-card text-sm font-medium hover:border-primary/30 hover:bg-accent transition-all"
              >
                Tích hợp vào tool
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        {/* What it does */}
        <section>
          <div className={`rounded-2xl border ${c.border} ${c.bg} overflow-hidden p-6`}>
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-white/50 dark:bg-black/20 border ${c.border} flex items-center justify-center shrink-0`}>
                <whatIcon className={`w-7 h-7 ${c.text}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold mb-2">{whatItDoes.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{whatItDoes.summary}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section>
          <h2 className="text-xl font-bold mb-5">GPT RULES có thể tạo gì?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              const capColorMap: Record<string, { bg: string; text: string; border: string }> = {
                violet: { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/20" },
                cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20" },
                green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20" },
                blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
                pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20" },
                orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
              };
              const cc = capColorMap[cap.color];
              return (
                <div key={cap.title} className={`flex items-start gap-3 p-4 rounded-xl border ${cc.border} bg-card`}>
                  <div className={`w-10 h-10 rounded-xl ${cc.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${cc.text}`} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">{cap.title}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Steps */}
        <section>
          <h2 className="text-xl font-bold mb-5">4 bước tạo bộ luật</h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl border bg-card overflow-hidden">
                {/* Step header */}
                <div className="flex items-center gap-4 p-5 border-b border-border/50">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                    <span className="text-amber-600 dark:text-amber-400 font-black text-lg">{step.num}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <Icon className="w-4 h-4 text-amber-500" />
                      <h3 className="font-bold text-base">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                  {step.action && (
                    <a
                      href={step.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-amber-500 text-white font-medium text-xs hover:bg-amber-600 transition-all shrink-0"
                    >
                      {step.action.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Step body */}
                <div className="p-5">
                  {step.promptExamples && (
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        Ví dụ prompt để gửi cho GPT RULES
                      </div>
                      <div className="space-y-2">
                        {step.promptExamples.map((ex, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                            <p className="text-xs text-muted-foreground leading-relaxed italic">{ex}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {step.output && (
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Kết quả đầu ra</div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.output}</p>
                    </div>
                  )}
                  {step.copyTargets && (
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Copy từng phần vào file phù hợp</div>
                      <div className="space-y-2">
                        {step.copyTargets.map((ct) => (
                          <div key={ct.file} className="flex items-start gap-3">
                            <div className="rounded border border-border bg-muted/30 px-2 py-0.5 shrink-0">
                              <span className="text-[10px] font-mono font-semibold text-muted-foreground">{ct.file}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">→ {ct.into}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Copy to tools */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <FileCode className="w-5 h-5 text-primary" />
            Copy bộ luật vào AI coding tool
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Sau khi GPT RULES sinh ra bộ luật, copy nội dung vào file phù hợp với tool bạn dùng. Mỗi tool có file luật riêng.
          </p>
          <div className="rounded-xl border bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Tool</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">File luật</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Cách copy</th>
                  </tr>
                </thead>
                <tbody>
                  {copyTargets.map((row) => (
                    <tr key={row.tool} className="border-b border-border/50 hover:bg-muted/10 transition-colors">
                      <td className="px-4 py-3 font-semibold">{row.tool}</td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">{row.file}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <Link href="/guide/resources" className="text-xs text-indigo-500 hover:text-indigo-600 font-medium">
              Xem hướng dẫn chi tiết từng tool →
            </Link>
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            Mẹo để bộ luật hiệu quả hơn
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.t} className="flex items-start gap-3 p-4 rounded-xl border bg-card">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold">{tip.t}</span>
                  <span className="text-sm text-muted-foreground"> — {tip.d}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section>
          <div className="rounded-2xl border bg-gradient-to-br from-amber-500/5 to-orange-500/5 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-base">Workflow đầy đủ</h3>
                <p className="text-xs text-muted-foreground">Từ mô tả project → sinh luật → tích hợp vào tool</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                "Mô tả project cho GPT RULES",
                "Nhận bộ luật hoàn chỉnh",
                "Review và chỉnh sửa",
                "Copy vào CLAUDE.md / .cursorrules",
                "Bổ sung tài nguyên từ trang Tài nguyên",
                "Bắt đầu code với AI Agent",
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-bold">
                    {i + 1}
                  </span>
                  <span className="text-xs font-medium">{step}</span>
                  {i < 5 && <ArrowRight className="w-3 h-3 text-muted-foreground" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold mb-5">Liên quan</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTools.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group">
                <div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Icon({ className }: { className?: string }) {
  return <Wand2 className={className} />;
}
