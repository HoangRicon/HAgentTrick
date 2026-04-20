import Link from "next/link";
import type { Metadata } from "next";
import {
  Workflow,
  ArrowDown,
  ChevronRight,
  CheckCircle2,
  Lightbulb,
  Code2,
  Shield,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quy trình thực chiến",
  description: "Quy trình làm việc với AI Agent từ phân tích yêu cầu đến triển khai sản phẩm hoàn chỉnh",
};

const phases = [
  { phase: "Plan", icon: Lightbulb, color: "amber", title: "Phân tích & Viết Prompt tổng", steps: ["Đọc và phân tích yêu cầu chức năng", "Xác định actor, entity, ownership, permission", "Tách foundation, core flow, support flow", "Viết prompt tổng quát mô tả toàn bộ dự án"] },
  { phase: "Build", icon: Code2, color: "blue", title: "Sinh Code từng Module", steps: ["Build từng trang, từng flow, từng chức năng một", "Copy đúng phần yêu cầu chức năng vào prompt", "Yêu cầu AI chỉ code đúng phạm vi chức năng đó", "Không build toàn bộ dự án trong một lần"] },
  { phase: "Review", icon: Shield, color: "green", title: "AI tự Review & Cải thiện", steps: ["Check UI, logic, validation, auth, permission", "Sửa lỗi ngay nếu có, không dồn lại", "Duy trì file spec ghi lại quyết định thiết kế", "Đảm bảo code đúng scope, type-safe, clean"] },
  { phase: "Ship", icon: Rocket, color: "purple", title: "Kiểm thử & Triển khai", steps: ["Chạy test sau mỗi lần AI sinh code lớn", "Dùng git commit nhỏ để dễ rollback nếu cần", "Commit và push Git luôn khi từng phần đã ổn", "Không để quá nhiều thay đổi dồn cục"] },
];

const phaseColors: Record<string, { bg: string; text: string; border: string }> = {
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/30" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/30" },
};

const principles = [
  { icon: CheckCircle2, title: "Incremental Development", desc: "Chia nhỏ dự án thành nhiều bước. Mỗi lần chỉ thay đổi 1-2 files, test kỹ trước khi tiếp tục.", color: "emerald" },
  { icon: CheckCircle2, title: "Specification First", desc: "Luôn viết spec/requirement trước khi code. Spec là kim chỉ nam giúp bạn và AI cùng hướng.", color: "blue" },
  { icon: CheckCircle2, title: "Zero Tolerance for Mess", desc: "Dọn code thường xuyên. AI có xu hướng sinh code dư thừa - hãy tỉ mỉ review và loại bỏ.", color: "purple" },
  { icon: CheckCircle2, title: "Human-in-the-Loop", desc: "AI hỗ trợ nhưng quyết định cuối cùng vẫn thuộc về bạn. Hiểu rõ code do AI sinh ra.", color: "orange" },
];

const principleColors: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/20" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
};

export default function WorkflowGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-amber-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
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
            Một workflow hiệu quả giúp bạn tận dụng tối đa khả năng của AI Agent,
            duy trì chất lượng code, và giảm thời gian debug.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-5">4 giai đoạn chính</h2>
          <div className="flex flex-col gap-3">
            {phases.map((phase, i) => {
              const pc = phaseColors[phase.color];
              const Icon = phase.icon;
              return (
                <div key={phase.phase} className="flex flex-col sm:flex-row sm:items-stretch gap-3">
                  <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-5 rounded-xl ${pc.bg} border ${pc.border} sm:w-72 sm:flex-shrink-0`}>
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${pc.text}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-bold ${pc.text} uppercase tracking-wider`}>{phase.phase}</span>
                      <h3 className="font-semibold text-sm mt-0.5">{phase.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 rounded-xl border bg-card flex items-center">
                    <ul className="space-y-2 flex-1">
                      {phase.steps.map((step, si) => (
                        <li key={si} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className={`w-4 h-4 ${pc.text} flex-shrink-0 mt-0.5`} />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < phases.length - 1 && (
                    <div className="flex sm:items-center justify-center py-1 sm:py-0 sm:w-8 flex-shrink-0">
                      <ArrowDown className="w-4 h-4 text-muted-foreground/30 sm:rotate-[-90deg]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-5">Nguyên tắc tăng tốc</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((p) => {
              const pc = principleColors[p.color];
              const Icon = p.icon;
              return (
                <div key={p.title} className={`flex items-start gap-3 p-5 rounded-xl ${pc.bg} border ${pc.border}`}>
                  <Icon className={`w-5 h-5 ${pc.text} flex-shrink-0 mt-0.5`} />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-5">Tips từ thực tế</h2>
          <div className="rounded-xl border bg-muted/30 p-6">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
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

        <section>
          <h2 className="text-xl font-bold mb-5">Liên quan</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Quy tắc viết Prompt", href: "/guide/prompt", desc: "Dùng prompt đúng cách trong workflow" },
              { label: "Phân tích nghiệp vụ", href: "/guide/analysis", desc: "Bước đầu tiên của quy trình" },
              { label: "Lưu ý & Bẫy", href: "/guide/traps", desc: "Tránh những sai lầm phổ biến" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group">
                <div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
