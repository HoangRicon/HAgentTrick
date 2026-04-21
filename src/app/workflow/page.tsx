import Link from "next/link";
import type { Metadata } from "next";
import {
  Workflow,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Layers,
  XCircle,
  Zap,
  BookOpen,
  MessageSquare,
  FileText,
} from "lucide-react";
import { PhaseAccordion } from "@/components/workflow/phase-accordion";
import { phases, phaseIconMap, type Phase } from "@/lib/workflow-phases";

export const metadata: Metadata = {
  title: "Quy trình thực chiến",
  description: "Quy trình làm việc với AI Agent từ xác định sức mạnh AI, phân tích yêu cầu đến triển khai sản phẩm hoàn chỉnh",
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/30" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/30" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/30" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/30" },
};

export default function WorkflowPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-amber-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
            <Workflow className="w-4 h-4" />
            Quy trình thực chiến
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Quy trình làm việc{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              với AI Agent
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            6 giai đoạn từ xác định sức mạnh AI đến triển khai sản phẩm. Mỗi giai đoạn đều có
            hướng dẫn chi tiết và checklist thực tế. Áp dụng ngay vào dự án của bạn.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* Comparison */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            So sánh: Không dùng workflow vs Dùng workflow
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden">
              <div className="px-4 py-3 border-b border-red-500/20 bg-red-500/10 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="font-semibold text-sm text-red-600 dark:text-red-400">Workflow tự do (thường gặp)</span>
              </div>
              <div className="p-4 space-y-2.5">
                {[
                  "Yêu cầu AI code ngay, không phân tích trước",
                  'Prompt chung chung: "Thêm chức năng login"',
                  "AI code cả dự án một lần, rồi mới review",
                  "Lỗi tích lũy nhiều → khó debug",
                  "Commit 500+ dòng, khó revert",
                  "AI tự đoán → thường sai spec",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
              <div className="px-4 py-3 border-b border-green-500/20 bg-green-500/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="font-semibold text-sm text-green-600 dark:text-green-400">Workflow có quy trình (Power → Plan → Chuẩn bị → Build → Review → Ship)</span>
              </div>
              <div className="p-4 space-y-2.5">
                {[
                  "Xác định sức mạnh AI, chọn model phù hợp",
                  "Phân tích kỹ trước khi nhờ AI code",
                  "Chuẩn bị tài nguyên, ngữ cảnh đầy đủ",
                  "Mỗi lần chỉ code 1-2 files",
                  "Lỗi được phát hiện và fix ngay",
                  "Commit nhỏ, mỗi commit là checkpoint",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6 Phases Detail with Accordion */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Chi tiết 6 giai đoạn
          </h2>
          <PhaseAccordion phasesOverride={phases} defaultOpenAll={true} />
        </section>

        {/* 6 Phases Overview */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Tổng quan 6 giai đoạn
          </h2>
          <div className="flex flex-col gap-3">
            {phases.map((phase: Phase) => {
              const pc = colorMap[phase.color] ?? colorMap.cyan;
              const Icon = phaseIconMap[phase.iconName] || phaseIconMap.Cpu;
              return (
                <div key={phase.phase} className="flex flex-col sm:flex-row gap-3">
                  <div className={`flex flex-row sm:flex-col items-center sm:items-stretch gap-4 p-4 sm:p-5 rounded-xl ${pc.bg} border ${pc.border} sm:w-72 sm:flex-shrink-0`}>
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${pc.text}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${pc.text}`}>{phase.phase}</span>
                        <span className="text-xs text-muted-foreground">—</span>
                        <span className="text-xs text-muted-foreground">{phase.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">{phase.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 rounded-xl border bg-card flex items-center">
                    <ul className="space-y-2 flex-1">
                      {phase.steps.map((step: string, si: number) => (
                        <li key={si} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className={`w-4 h-4 ${pc.text} flex-shrink-0 mt-0.5`} />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Principles */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Nguyên tắc tăng tốc
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Incremental Development", desc: "Chia nhỏ dự án thành nhiều bước. Mỗi lần chỉ thay đổi 2-5 files, test kỹ trước khi tiếp tục.", color: "emerald" as const },
              { title: "Specification First", desc: "Luôn viết spec/requirement trước khi code. Spec là kim chỉ nam giúp bạn và AI cùng hướng.", color: "blue" as const },
              { title: "Zero Tolerance", desc: "Dọn code thường xuyên. AI có xu hướng sinh code dư thừa — hãy tỉ mỉ review và loại bỏ.", color: "purple" as const },
              { title: "Human-in-the-Loop", desc: "AI hỗ trợ nhưng quyết định cuối cùng vẫn thuộc về bạn. Hiểu rõ code do AI sinh ra.", color: "orange" as const },
            ].map((p) => {
              const pcMap: Record<string, { bg: string; text: string; border: string }> = {
                emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/20" },
                blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
                purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
                orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
              };
              const pc = pcMap[p.color] ?? pcMap.emerald;
              return (
                <div key={p.title} className={`flex items-start gap-3 p-5 rounded-xl ${pc.bg} border ${pc.border}`}>
                  <CheckCircle2 className={`w-5 h-5 ${pc.text} flex-shrink-0 mt-0.5`} />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Superpowers Reference */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-primary" />
            Tham khảo: Superpowers Framework
          </h2>
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GitBranch className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Superpowers — Skills Framework cho Agent</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Framework này xây dựng trên nền tảng Superpowers với quy trình Brainstorming → Plans → Execute → Review.
                  Đây là framework được 161k stars trên GitHub, được sử dụng rộng rãi trong cộng đồng AI coding.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {[
                { icon: MessageSquare, label: "Brainstorming", desc: "Agent hỏi, bạn trả lời. Thiết kế được trình bày thành từng phần nhỏ." },
                { icon: FileText, label: "Writing Plans", desc: "Break work thành task nhỏ 2-5 phút, mỗi task có file path + code + verify." },
                { icon: Layers, label: "Execute Plans", desc: "Dispatch agent con cho từng task. Review 2 giai đoạn: spec + quality." },
                { icon: CheckCircle2, label: "Code Review", desc: "Báo cáo issue theo mức độ nghiêm trọng. Critical → block tiến độ." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-2.5 p-3 rounded-lg border bg-muted/30">
                    <Icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/guide/resources"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Xem chi tiết Superpowers
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com/obra/superpowers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg border border-border bg-background font-medium text-sm hover:border-primary/30 hover:bg-accent transition-all"
              >
                GitHub Repo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Tips from practice */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Tips từ thực tế
          </h2>
          <div className="rounded-xl border bg-muted/30 p-6">
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Luôn chạy test sau mỗi lần AI sinh code lớn",
                "Duy trì một file spec ghi lại quyết định thiết kế",
                "Dùng git commit nhỏ để dễ rollback nếu cần",
                "Đặt câu hỏi cụ thể, tránh prompt quá chung chung",
                "Tận dụng tối đa thứ có sẵn (UI kit, template, component)",
                "Ngữ cảnh càng chính xác, code càng ít lỗi",
                "Làm đến đâu ổn đến đó thì commit và push Git luôn",
                "Phân tích yêu cầu thật kỹ trước khi bắt đầu code",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-primary" />
            Liên quan
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Quy tắc viết Prompt", href: "/guide/prompt", desc: "Dùng prompt đúng cách trong workflow" },
              { label: "Phân tích nghiệp vụ", href: "/guide/analysis", desc: "Bước tiếp theo của quy trình" },
              { label: "Lưu ý & Bẫy", href: "/guide/traps", desc: "Tránh những sai lầm phổ biến" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group">
                <div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
