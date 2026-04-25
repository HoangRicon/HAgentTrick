import Link from "next/link";
import type { Metadata } from "next";
import {
  Workflow,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Code2,
  Shield,
  Rocket,
  MessageSquare,
  FileText,
  GitBranch,
  Layers,
  Play,
  AlertCircle,
  CheckCheck,
  Eye,
  Zap,
  BookOpen,
  Sparkles,
  Target,
  BrainCircuit,
  Wrench,
  Cpu,
  Clock,
  Terminal,
  Compass,
  Gauge,
  Bot,
  BookMarked,
  ArrowUpRight,
  Users,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sự kết thúc của Vibe Coding — Hướng dẫn TOOL",
  description: "4 công cụ SDD: Superpowers, Spec-Kit, Superspec, Spec-First Superpowers. Khi nào chọn tool nào, so sánh chi tiết, và cách kết hợp chúng.",
};

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string; badgeText: string }> = {
  teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20", badge: "bg-teal-500/10", badgeText: "text-teal-600 dark:text-teal-400" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/20", badge: "bg-violet-500/10", badgeText: "text-violet-600 dark:text-violet-400" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20", badge: "bg-green-500/10", badgeText: "text-green-600 dark:text-green-400" },
  red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20", badge: "bg-red-500/10", badgeText: "text-red-600 dark:text-red-400" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20", badge: "bg-amber-500/10", badgeText: "text-amber-600 dark:text-amber-400" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20", badge: "bg-blue-500/10", badgeText: "text-blue-600 dark:text-blue-400" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20", badge: "bg-cyan-500/10", badgeText: "text-cyan-600 dark:text-cyan-400" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20", badge: "bg-pink-500/10", badgeText: "text-pink-600 dark:text-pink-400" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20", badge: "bg-orange-500/10", badgeText: "text-orange-600 dark:text-orange-400" },
  slate: { bg: "bg-slate-500/10", text: "text-slate-600 dark:text-slate-400", border: "border-slate-500/20", badge: "bg-slate-500/10", badgeText: "text-slate-600 dark:text-slate-400" },
};

const tabs = [
  { id: "overview", label: "Tổng quan", icon: Globe },
  { id: "superpowers", label: "Superpowers", icon: Sparkles },
  { id: "spec-kit", label: "Spec-Kit", icon: BookMarked },
  { id: "superspec", label: "Superspec", icon: FileText },
  { id: "sf-superpowers", label: "Spec-First Superpowers", icon: Workflow },
  { id: "compare", label: "So sánh", icon: Cpu },
  { id: "choose", label: "Chọn tool nào?", icon: Compass },
];

const vibeCodingDeath = [
  {
    icon: Rocket,
    title: "Vibe Coding là gì?",
    desc: "Nói cho AI \"Build cho tôi một app\" rồi ngồi chờ. AI generate đầy đủ, bạn copy-paste. Không spec, không plan, không review. Chỉ vibe — cảm giác \"đang build\" mà không có nền tảng.",
    color: "red",
  },
  {
    icon: AlertCircle,
    title: "Vibe Coding chết ở đâu?",
    desc: "Thiếu spec → Scope creep. Không review → Bug tích lũy. Không checkpoint → Không rollback được. Không TDD → Code không test. Không plan → Mất hướng giữa chừng.",
    color: "orange",
  },
  {
    icon: Target,
    title: "Vibe Coding chết khi nào?",
    desc: "Khi dự án vượt ngưỡng \"demo được\" sang \"production được\". Khi có nhiều người cùng làm. Khi cần maintain lâu dài. Khi deadline thật đến.",
    color: "amber",
  },
  {
    icon: Sparkles,
    title: "Vibe Coding chết bằng cách nào?",
    desc: "Không phải xóa bỏ — mà là TRANG BỊ. 4 công cụ bên dưới không phải để thay thế AI coding. Chúng là lớp kỷ luật giúp AI coding đi đúng hướng.",
    color: "green",
  },
];

const tools = [
  {
    id: "superpowers",
    name: "Superpowers",
    version: "v5.0.7",
    stars: "161k",
    icon: Sparkles,
    tagline: "Khung kỹ năng Agent — Cross-platform",
    color: "teal",
    badge: "11 skills",
    href: "/guide/superpowers",
    what: "Bộ quy trình giúp coding agent tự biết khi nào cần hỏi, khi nào cần plan, khi nào cần test. Skills trigger tự động. Cross-platform: 1 bộ chạy trên Cursor, Claude Code, Codex, Gemini, Copilot, OpenCode.",
    philosophy: "5 triết lý: TDD · Systematic · YAGNI · Evidence · Clarify",
    workflow: "7 bước: Brainstorming → Git Worktrees → Writing Plans → Subagent-Driven → TDD → Code Review → Finish Branch",
    gates: "Không có gate cứng — skills trigger tự động theo tình huống",
    when: "Dùng khi: muốn cải thiện chất lượng code của agent trong mọi tool; cần skills đa nền tảng; muốn TDD, systematic debugging, brainstorming.",
    weight: "Nhẹ",
    phases: "Tự do, skills trigger theo context",
  },
  {
    id: "spec-kit",
    name: "Spec-Kit",
    version: "v0.7.1",
    stars: "GitHub Official",
    icon: BookMarked,
    tagline: "Spec-Driven Development Framework — Phase-gated",
    color: "blue",
    badge: "Workflow Engine",
    href: "/resources/spec-kit",
    what: "Framework chính thức từ GitHub để spec-driven development. Tập trung vào phase gating rõ ràng: spec → plan → tasks → implement → review. Phù hợp cho dự án lớn, enterprise, multi-team.",
    philosophy: "Phase-gated progression — mỗi phase phải pass gate trước khi sang phase tiếp",
    workflow: "6 phase: Constitution → Specify → Clarify → Plan → Analyze → Tasks → Implement",
    gates: "G1, G2, G3, G4 — hard stop giữa các phase",
    when: "Dùng khi: project mới từ đầu; dự án enterprise lớn; cần strict phase control; cần constitution bắt buộc.",
    weight: "Nặng",
    phases: "Strict, 6-7 phase rõ ràng",
  },
  {
    id: "superspec",
    name: "Superspec",
    version: "v1.0",
    stars: "Community",
    icon: FileText,
    tagline: "SDD với Superpowers — 6 giai đoạn",
    color: "orange",
    badge: "9 lệnh",
    href: "/guide/superspec",
    what: "Kết hợp spec-kit (quản lý tài liệu) với superpowers (brainstorming, TDD, code review). 6 giai đoạn: Constitution → Specify → Brainstorm → Plan → Tasks → Execute → Review. Marker [TDD], [P], [REVIEW], [SUBAGENT] cho từng task.",
    philosophy: "Human-in-the-loop tại mỗi checkpoint — bạn toàn quyền approve/reject",
    workflow: "6 phase + Review 5 chiều: Spec compliance · Edge case · Constitution · Code quality · Test coverage",
    gates: "Checkpoint tại mỗi giai đoạn chuyển tiếp",
    when: "Dùng khi: muốn workflow cấu trúc rõ ràng như spec-kit nhưng nhẹ hơn; cần session recovery; muốn spec + superpowers kết hợp.",
    weight: "Vừa",
    phases: "6 phase + review",
  },
  {
    id: "sf-superpowers",
    name: "Spec-First Superpowers",
    version: "v5.0.7",
    stars: "Orchestration",
    icon: Workflow,
    tagline: "SDD Orchestration — 6 công cụ tích hợp",
    color: "violet",
    badge: "6 công cụ",
    href: "/guide/spec-first-superpowers",
    what: "Skill orchestration enforce spec-before-code. Tích hợp Spec-Kit + OpenSpec + Superpowers + planning-with-files + ui-ux-pro-max + MemPalace. Auto mode selection, complexity triage, 3-Strike Protocol.",
    philosophy: "Anti-Rush protection — AI từ chối viết code nếu chưa qua spec phase",
    workflow: "6 phase: Session Recovery → Specification → Persistent Planning → UI/UX Design → TDD Implementation → Archive",
    gates: "G0-G4: Session Recovery → Spec → Plan → UI → Implementation → Archive",
    when: "Dùng khi: muốn workflow hoàn chỉnh nhất; cần auto mode selection; muốn tích hợp MemPalace; cần Anti-Rush protection.",
    weight: "Nặng nhất",
    phases: "6 phase + G0-G4 gates + complexity triage",
  },
];

const comparisonDimensions = [
  { dim: "Trọng lượng", sp: "Nhẹ", sk: "Nặng", ss: "Vừa", sfp: "Nặng nhất", spColor: "green", skColor: "red", ssColor: "amber", sfpColor: "red" },
  { dim: "Phase Gate", sp: "Tự do", sk: "Hard stop (G1-G4)", ss: "Checkpoint mỗi phase", sfp: "Hard stop (G0-G4)", spColor: "amber", skColor: "green", ssColor: "amber", sfpColor: "green" },
  { dim: "TDD", sp: "Có (skill)", sk: "Có (phase)", ss: "Có (marker [TDD])", sfp: "Có (Phase 4)", spColor: "green", skColor: "green", ssColor: "green", sfpColor: "green" },
  { dim: "Session Recovery", sp: "Cơ bản", sk: "Có (progress)", ss: "progress.yml chi tiết", sfp: "planning-with-files", spColor: "amber", skColor: "green", ssColor: "green", sfpColor: "green" },
  { dim: "Cross-platform", sp: "6 tool", sk: "1 tool", ss: "Tùy tool", sfp: "Tùy tool", spColor: "green", skColor: "red", ssColor: "amber", sfpColor: "amber" },
  { dim: "Skills trigger", sp: "Tự động", sk: "Thủ công", ss: "Thủ công", sfp: "Tự động", spColor: "green", skColor: "red", ssColor: "red", sfpColor: "green" },
  { dim: "Constitution", sp: "Không", sk: "Bắt buộc", ss: "Khuyến nghị", sfp: "Bắt buộc (Spec-Kit)", spColor: "red", skColor: "green", ssColor: "amber", sfpColor: "green" },
  { dim: "UI/UX Design", sp: "Không", sk: "Không", ss: "Không", sfp: "Có (Phase 3)", spColor: "red", skColor: "red", ssColor: "red", sfpColor: "green" },
  { dim: "MemPalace", sp: "Không", sk: "Không", ss: "Không", sfp: "Có (tích hợp)", spColor: "red", skColor: "red", ssColor: "red", sfpColor: "green" },
  { dim: "3-Strike Protocol", sp: "Không", sk: "Không", ss: "Không", sfp: "Có", spColor: "red", skColor: "red", ssColor: "red", sfpColor: "green" },
  { dim: "Complexity Triage", sp: "Không", sk: "Không", ss: "Không", sfp: "3 levels (Q/S/T)", spColor: "red", skColor: "red", ssColor: "red", sfpColor: "green" },
];

const chooseScenarios = [
  {
    scenario: "Mới bắt đầu với AI coding",
    recommendation: "Superpowers",
    color: "teal",
    reason: "Nhẹ, dễ tiếp cận. Skills trigger tự động — không cần nhớ lệnh. 5 triết lý cốt lõi giúp hiểu cách agent nên suy nghĩ.",
    icon: Sparkles,
    steps: [
      "Cài đặt superpowers vào Cursor/Claude Code",
      "Bắt đầu với /super-spec hoặc nói \"Thêm tính năng X\"",
      "Agent sẽ tự trigger brainstorming",
      "Dùng TDD cho mỗi task",
    ],
  },
  {
    scenario: "Dự án mới từ đầu, cần cấu trúc rõ ràng",
    recommendation: "Spec-Kit hoặc Spec-First Superpowers",
    color: "blue",
    reason: "Dự án mới cần constitution để thiết lập nguyên tắc từ đầu. Spec-Kit bắt buộc constitution, Spec-First Superpowers tự động chọn Spec-Kit mode khi < 30 files.",
    icon: BookMarked,
    steps: [
      "/super-spec force-spec-kit để bắt buộc Spec-Kit mode",
      "/speckit.constitution để tạo văn bản quản lý",
      "/speckit.specify để viết spec cho tính năng đầu tiên",
      "/speckit.plan → /speckit.tasks → /speckit.implement",
      "Mỗi phase phải pass gate trước khi tiếp",
    ],
  },
  {
    scenario: "Project đang có, thêm feature nhỏ",
    recommendation: "Spec-First Superpowers (OpenSpec mode)",
    color: "violet",
    reason: "OpenSpec mode nhẹ hơn, phù hợp với existing codebase. /opsx:propose để propose nhanh, /opsx:verify để verify. Không cần tạo constitution.",
    icon: Workflow,
    steps: [
      "/super-spec — AI tự chọn OpenSpec mode (vì project đã có nhiều files)",
      "/opsx:propose \"Thêm tính năng X\"",
      "AI tạo proposal → design → tasks",
      "G1: Bạn confirm spec",
      "G2: Bạn confirm plan",
      "Phase 4: TDD implementation",
      "G4: Tests pass",
    ],
  },
  {
    scenario: "Muốn workflow có cấu trúc như Spec-Kit nhưng nhẹ hơn",
    recommendation: "Superspec",
    color: "orange",
    reason: "Superspec kết hợp spec-kit + superpowers. 6 giai đoạn có checkpoint, nhưng nhẹ hơn Spec-Kit. progress.yml lưu trạng thái chi tiết.",
    icon: FileText,
    steps: [
      "/superspec.constitution TênDựÁn (nếu chưa có)",
      "/superspec.specify \"Mô tả tính năng\"",
      "/superspec.brainstorm để tìm edge cases",
      "/superspec.plan → /superspec.tasks",
      "/superspec.execute với TDD",
      "/superspec.review để kiểm tra cuối",
    ],
  },
  {
    scenario: "Dự án lớn, nhiều module, cần strict control",
    recommendation: "Spec-First Superpowers (Thorough mode)",
    color: "red",
    reason: "Thorough mode với Spec-Kit phase gating + Subagent-Driven execution + Two-stage review. MemPalace để lưu cross-session knowledge. 3-Strike Protocol cho debugging.",
    icon: Cpu,
    steps: [
      "/super-spec force-spec-kit cho project lớn",
      "/speckit.specify → spec.md (What & Why)",
      "/speckit.clarify → hỏi edge cases",
      "/speckit.plan → plan.md + architecture",
      "/speckit.analyze → validate consistency",
      "/speckit.tasks → task list",
      "Subagent-Driven execution (parallel per module)",
      "Two-stage review per task",
    ],
  },
  {
    scenario: "Chỉ cần brainstorming và phân tích, chưa cần implement",
    recommendation: "Superpowers + Superspec brainstorm",
    color: "amber",
    reason: "Dùng brainstorming skill của superpowers hoặc /superspec.brainstorm để khám phá edge cases. Không cần đi đến implement nếu chỉ cần phân tích.",
    icon: MessageSquare,
    steps: [
      "Nói \"Phân tích tính năng X\" → brainstorming trigger",
      "AI hỏi Socratic: 1 câu mỗi lượt",
      "Sau 5-10 câu hỏi: thiết kế rõ ràng",
      "Lưu design vào file .md",
      "Tiếp tục implement khi cần",
    ],
  },
  {
    scenario: "Muốn UI/UX design phase có hệ thống",
    recommendation: "Spec-First Superpowers (có ui-ux-pro-max)",
    color: "pink",
    reason: "Spec-First Superpowers trigger ui-ux-pro-max v2.5.0 khi có từ khóa UI. 67 styles, 161 palettes, 14 stacks. G3 gate cho design approval.",
    icon: Target,
    steps: [
      "/super-spec \"Thêm dashboard với charts, responsive\"",
      "AI detect từ khóa UI → trigger Phase 3",
      "ui-ux-pro-max tạo design system",
      "G3: Bạn confirm design",
      "Phase 4: Implementation với design tokens",
    ],
  },
];

export default function HOTGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-amber-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold border border-orange-500/20">
              <Sparkles className="w-4 h-4" />
              HOT
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-bold border border-red-500/20">
              Sự kết thúc của Vibe Coding
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Khi nào{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              vibe coding
            </span>{" "}
            phải dừng lại
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            4 công cụ SDD: <strong className="text-foreground">Superpowers</strong>,{" "}
            <strong className="text-foreground">Spec-Kit</strong>,{" "}
            <strong className="text-foreground">Superspec</strong>,{" "}
            <strong className="text-foreground">Spec-First Superpowers</strong>.
            Biết khi nào dùng tool nào — và khi nào vibe coding là đủ.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Link
                key={tab.id}
                href={`#${tab.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border bg-card hover:border-orange-500/40 hover:bg-orange-500/5 transition-all group flex-shrink-0"
              >
                <Icon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">

        {/* ========== SECTION: Overview ========== */}
        <section id="overview">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">Phần 1</span>
              <h2 className="text-xl font-bold mt-0.5">Tổng quan — Vibe Coding đến hồi kết</h2>
            </div>
          </div>

          {/* 4 cards: What happened */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {vibeCodingDeath.map((item) => {
              const c = colorMap[item.color];
              const Icon = item.icon;
              return (
                <div key={item.title} className={`rounded-2xl border ${c.border} bg-card overflow-hidden`}>
                  <div className={`px-4 py-3 border-b ${c.border} ${c.bg} flex items-center gap-3`}>
                    <Icon className={`w-5 h-5 ${c.text} flex-shrink-0`} />
                    <span className="text-sm font-bold">{item.title}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Timeline: Vibe Coding → Spec-Driven Development
            </h3>
            <div className="grid sm:grid-cols-5 gap-2">
              {[
                { num: "1", label: "Vibe Coding", desc: "AI generate, copy-paste, không spec", color: "red", icon: Rocket },
                { num: "2", label: "Nhận ra vấn đề", desc: "Scope creep, bug tích lũy, không rollback", color: "orange", icon: AlertCircle },
                { num: "3", label: "Thử Superpowers", desc: "Skills tự động, nhẹ, dễ tiếp cận", color: "teal", icon: Sparkles },
                { num: "4", label: "Chuyển Spec-Kit", desc: "Phase gating, constitution, strict control", color: "blue", icon: BookMarked },
                { num: "5", label: "Spec-First Superpowers", desc: "Tất cả trong 1, auto mode, Anti-Rush", color: "violet", icon: Workflow },
              ].map((step, i) => {
                const c = colorMap[step.color];
                const Icon = step.icon;
                return (
                  <div key={step.num} className="flex flex-col items-center text-center">
                    <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-2`}>
                      <Icon className={`w-5 h-5 ${c.text}`} />
                    </div>
                    <div className={`text-xs font-bold mb-1 ${c.text}`}>{step.label}</div>
                    <div className="text-[9px] text-muted-foreground leading-relaxed">{step.desc}</div>
                    {i < 4 && (
                      <div className="absolute hidden sm:block w-full h-px bg-gradient-to-r from-current to-transparent opacity-20" style={{ display: "none" }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4 tools overview cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {tools.map((tool) => {
              const c = colorMap[tool.color];
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className={`rounded-xl border ${c.border} bg-card p-4 hover:shadow-md transition-all group`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${c.text}`} />
                    <span className="text-xs font-bold">{tool.name}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed mb-2">{tool.tagline}</p>
                  <div className={`text-[9px] font-medium ${c.text}`}>→ Xem chi tiết</div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ========== SECTION: Superpowers ========== */}
        <section id="superpowers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-teal-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">Phần 2</span>
              <h2 className="text-xl font-bold mt-0.5">Superpowers — Khung kỹ năng Agent</h2>
            </div>
          </div>

          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-5 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-teal-500" />
              <div>
                <div className="text-sm font-bold">Superpowers v5.0.7 — 161k Stars</div>
                <div className="text-[10px] text-muted-foreground">Cross-platform skills framework</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Bộ quy trình giúp coding agent tự biết khi nào cần <strong className="text-foreground">hỏi</strong>, khi nào cần{" "}
              <strong className="text-foreground">plan</strong>, khi nào cần <strong className="text-foreground">test</strong>. Skills trigger tự động —
              không cần gõ lệnh. Một bộ skills cho 6 tool: Cursor, Claude Code, Codex, Gemini, Copilot, OpenCode.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/guide/superpowers" className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-teal-500/10 border border-teal-500/20 text-xs font-medium text-teal-600 dark:text-teal-400 hover:bg-teal-500/20 transition-all">
                <BookOpen className="w-3.5 h-3.5" /> Hướng dẫn đầy đủ
              </Link>
              <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-card border border-border text-xs font-medium text-muted-foreground hover:border-teal-500/40 transition-all">
                <GitBranch className="w-3.5 h-3.5" /> GitHub
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 5 triết lý */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">5 triết lý cốt lõi</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: Target, name: "TDD", desc: "Viết test trước, luôn luôn", color: "teal" },
                { icon: BrainCircuit, name: "Systematic", desc: "Root cause trước khi fix", color: "red" },
                { icon: Layers, name: "YAGNI", desc: "Không thêm vì 'tiện tay'", color: "amber" },
                { icon: Eye, name: "Evidence", desc: "Verify trước khi claim", color: "green" },
                { icon: MessageSquare, name: "Clarify", desc: "Hỏi trước khi làm", color: "violet" },
              ].map((p) => {
                const c = colorMap[p.color];
                const Icon = p.icon;
                return (
                  <div key={p.name} className={`rounded-xl border ${c.border} bg-card p-4`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className={`w-4 h-4 ${c.text}`} />
                      <span className="text-xs font-bold">{p.name}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 7 bước workflow */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">7 bước workflow</h3>
            <div className="space-y-2">
              {[
                { num: 1, name: "Brainstorming", skill: "brainstorming", trigger: "Nói \"Thêm tính năng X\"", color: "teal" },
                { num: 2, name: "Git Worktrees", skill: "using-git-worktrees", trigger: "Sau khi design được approve", color: "violet" },
                { num: 3, name: "Writing Plans", skill: "writing-plans", trigger: "Khi design được approve", color: "amber" },
                { num: 4, name: "Subagent-Driven", skill: "subagent-driven-development", trigger: "Khi có plan", color: "blue" },
                { num: 5, name: "TDD", skill: "test-driven-development", trigger: "Khi implement từng task", color: "green" },
                { num: 6, name: "Code Review", skill: "requesting-code-review", trigger: "Giữa các task", color: "pink" },
                { num: 7, name: "Finish Branch", skill: "finishing-a-development-branch", trigger: "Khi tasks hoàn tất", color: "cyan" },
              ].map((step) => {
                const c = colorMap[step.color];
                return (
                  <div key={step.num} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-card">
                    <div className={`w-7 h-7 rounded-md ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-[10px] font-black">{step.num}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold">{step.name}</span>
                        <code className="text-[9px] font-mono bg-muted px-1 py-0.5 rounded">{step.skill}</code>
                      </div>
                      <div className="text-[10px] text-muted-foreground">Trigger: {step.trigger}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pros/Cons */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs font-bold text-green-600 dark:text-green-400">Ưu điểm</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {["Cross-platform: 1 bộ skills cho 6 tool", "Skills trigger tự động — không cần nhớ lệnh", "Nhẹ, dễ tiếp cận cho người mới", "5 triết lý rõ ràng dễ nhớ", "Không yêu cầu cài thêm tool"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-red-600 dark:text-red-400">Hạn chế</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {["Không có constitution bắt buộc", "Không có hard gate giữa các phase", "Không tích hợp MemPalace", "Không có UI/UX design phase", "Không có 3-Strike Protocol"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION: Spec-Kit ========== */}
        <section id="spec-kit">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
              <BookMarked className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Phần 3</span>
              <h2 className="text-xl font-bold mt-0.5">Spec-Kit — Spec-Driven Development Framework</h2>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <BookMarked className="w-5 h-5 text-blue-500" />
              <div>
                <div className="text-sm font-bold">Spec-Kit v0.7.1 — GitHub Official</div>
                <div className="text-[10px] text-muted-foreground">Phase-gated workflow engine</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Framework chính thức từ GitHub để spec-driven development. Tập trung vào <strong className="text-foreground">phase gating rõ ràng</strong>: spec → plan → tasks → implement → review.
              Phù hợp cho dự án lớn, enterprise, multi-team. Constitution bắt buộc.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/resources/spec-kit" className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-all">
                <BookOpen className="w-3.5 h-3.5" /> Tài nguyên Spec-Kit
              </Link>
              <a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-card border border-border text-xs font-medium text-muted-foreground hover:border-blue-500/40 transition-all">
                <GitBranch className="w-3.5 h-3.5" /> GitHub
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 6 phase */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">6 Phase workflow</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { num: 1, name: "Constitution", cmd: "/speckit.constitution", color: "slate" },
                { num: 2, name: "Specify", cmd: "/speckit.specify", color: "teal" },
                { num: 3, name: "Clarify", cmd: "/speckit.clarify", color: "amber" },
                { num: 4, name: "Plan", cmd: "/speckit.plan", color: "blue" },
                { num: 5, name: "Analyze", cmd: "/speckit.analyze", color: "violet" },
                { num: 6, name: "Tasks + Implement", cmd: "/speckit.tasks → /speckit.implement", color: "green" },
              ].map((phase) => {
                const c = colorMap[phase.color];
                return (
                  <div key={phase.num} className={`rounded-lg border ${c.border} bg-card p-3`}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-5 h-5 rounded ${c.bg} border ${c.border} flex items-center justify-center`}>
                        <span className="text-[9px] font-black">{phase.num}</span>
                      </div>
                      <span className="text-xs font-bold">{phase.name}</span>
                    </div>
                    <code className="text-[9px] font-mono text-muted-foreground">{phase.cmd}</code>
                  </div>
                );
              })}
            </div>
          </div>

          {/* G1-G4 Gates */}
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 mb-4">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              Hard Gates — Mỗi phase phải pass trước khi tiếp
            </h3>
            <div className="grid sm:grid-cols-4 gap-2">
              {[
                { gate: "G1", phase: "Specify", check: "spec.md aligns with constitution" },
                { gate: "G2", phase: "Plan", check: "Every task has file paths + acceptance criteria" },
                { gate: "G3", phase: "Analyze", check: "Plan aligns with spec" },
                { gate: "G4", phase: "Implement", check: "All tests pass + code quality" },
              ].map((g) => (
                <div key={g.gate} className="rounded-lg border border-green-500/20 bg-card p-2.5 text-center">
                  <div className="text-xs font-black text-green-500 mb-1">{g.gate}</div>
                  <div className="text-[10px] font-bold mb-0.5">{g.phase}</div>
                  <div className="text-[9px] text-muted-foreground leading-relaxed">{g.check}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pros/Cons */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs font-bold text-green-600 dark:text-green-400">Ưu điểm</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {["Constitution bắt buộc — nguyên tắc rõ ràng từ đầu", "Hard gates G1-G4 — không thể skip", "Phase gating strict — chuẩn enterprise", "GitHub official — được bảo trì lâu dài", "Có analyze phase để validate"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-red-600 dark:text-red-400">Hạn chế</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {["Nặng — nhiều phase và gate", "Chỉ chạy trên GitHub ecosystem", "Không cross-platform", "Không skills trigger tự động", "Không tích hợp MemPalace"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION: Superspec ========== */}
        <section id="superspec">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">Phần 4</span>
              <h2 className="text-xl font-bold mt-0.5">Superspec — SDD với Superpowers</h2>
            </div>
          </div>

          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-orange-500" />
              <div>
                <div className="text-sm font-bold">Superspec v1.0 — 6 Giai đoạn</div>
                <div className="text-[10px] text-muted-foreground">Kết hợp spec-kit + superpowers</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Kết hợp spec-kit (quản lý tài liệu) với superpowers (brainstorming, TDD, code review).{" "}
              <strong className="text-foreground">Human-in-the-loop</strong> tại mỗi checkpoint. Marker [TDD], [P], [REVIEW], [SUBAGENT]
              cho từng task. progress.yml lưu trạng thái chi tiết, session recovery chính xác.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/guide/superspec" className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-xs font-medium text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 transition-all">
                <BookOpen className="w-3.5 h-3.5" /> Hướng dẫn đầy đủ
              </Link>
            </div>
          </div>

          {/* 9 lệnh */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">9 lệnh chính</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { cmd: "/superspec.constitution", desc: "Tạo văn bản quản lý" },
                { cmd: "/superspec.specify", desc: "Viết định nghĩa tính năng" },
                { cmd: "/superspec.brainstorm", desc: "Kiểm tra cạnh viên" },
                { cmd: "/superspec.plan", desc: "Thiết kế kỹ thuật" },
                { cmd: "/superspec.tasks", desc: "Phân chia công việc" },
                { cmd: "/superspec.execute", desc: "Thực thi với TDD" },
                { cmd: "/superspec.review", desc: "Đánh giá code" },
                { cmd: "/superspec.checklist", desc: "Tạo checklist" },
                { cmd: "/superspec.status", desc: "Hiển thị tiến độ" },
              ].map((item) => (
                <div key={item.cmd} className="flex items-start gap-2 p-2.5 rounded-lg border border-border bg-card">
                  <code className="text-[10px] font-mono font-bold text-orange-500 flex-shrink-0">{item.cmd}</code>
                  <span className="text-[10px] text-muted-foreground">— {item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Session recovery */}
          <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-4 mb-4">
            <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              Session Recovery — Không mất tiến độ
            </h3>
            <div className="grid sm:grid-cols-3 gap-2 mb-3">
              {[
                { trigger: "Agent timeout" },
                { trigger: "Mất điện / đóng máy" },
                { trigger: "Đóng cửa sổ Cursor" },
              ].map((item) => (
                <div key={item.trigger} className="rounded-lg border border-orange-500/20 bg-card p-2 text-center">
                  <span className="text-[10px] text-muted-foreground">{item.trigger}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <code className="font-mono bg-muted px-1.5 py-0.5 rounded">/superspec.status</code> → Hiển thị trạng thái. Bỏ qua task đã đánh dấu [x],
              tiếp tục từ task chưa đánh dấu. Tiếp tục brainstorm từ câu hỏi chưa giải quyết.
            </p>
          </div>

          {/* Pros/Cons */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs font-bold text-green-600 dark:text-green-400">Ưu điểm</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {["Kết hợp spec-kit + superpowers", "Checkpoint mỗi giai đoạn — human-in-the-loop", "Marker [TDD], [P], [REVIEW] rõ ràng", "Session recovery chính xác với progress.yml", "Nhẹ hơn Spec-Kit nhưng đủ cấu trúc"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-red-600 dark:text-red-400">Hạn chế</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {["Không có auto mode selection", "Không tích hợp MemPalace", "Không có UI/UX design phase", "Không có 3-Strike Protocol", "Không có complexity triage"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION: Spec-First Superpowers ========== */}
        <section id="sf-superpowers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
              <Workflow className="w-5 h-5 text-violet-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">Phần 5</span>
              <h2 className="text-xl font-bold mt-0.5">Spec-First Superpowers — SDD Orchestration</h2>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <Workflow className="w-5 h-5 text-violet-500" />
              <div>
                <div className="text-sm font-bold">Spec-First Superpowers v5.0.7 — 6 công cụ tích hợp</div>
                <div className="text-[10px] text-muted-foreground">Orchestration layer cho spec-driven workflow</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Skill orchestration enforce spec-before-code. Tích hợp: <strong className="text-foreground">Spec-Kit</strong> +{" "}
              <strong className="text-foreground">OpenSpec</strong> + <strong className="text-foreground">Superpowers</strong> +{" "}
              <strong className="text-foreground">planning-with-files</strong> + <strong className="text-foreground">ui-ux-pro-max</strong> +{" "}
              <strong className="text-foreground">MemPalace</strong>.
              Auto mode selection, complexity triage, 3-Strike Protocol, Anti-Rush protection.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/guide/spec-first-superpowers" className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-600 dark:text-violet-400 hover:bg-violet-500/20 transition-all">
                <BookOpen className="w-3.5 h-3.5" /> Hướng dẫn đầy đủ
              </Link>
            </div>
          </div>

          {/* 6 tools integrated */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">6 công cụ tích hợp</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {[
                { name: "Spec-Kit", version: "v0.7.1", role: "Phase-gated engine" },
                { name: "OpenSpec", version: "v1.2.0", role: "Lightweight SDD" },
                { name: "Superpowers", version: "v5.0.7", role: "TDD + inline review" },
                { name: "planning-with-files", version: "v2.30.0", role: "Persistent planning" },
                { name: "ui-ux-pro-max", version: "v2.5.0", role: "UI/UX design (67 styles)" },
                { name: "MemPalace", version: "v3.3.0", role: "Cross-session memory" },
              ].map((tool) => (
                <div key={tool.name} className="rounded-lg border border-violet-500/10 bg-card p-3">
                  <div className="text-xs font-bold mb-0.5">{tool.name}</div>
                  <div className="text-[9px] text-muted-foreground">{tool.version}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">{tool.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* G0-G4 + Features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                G0-G4 Quality Gates
              </h3>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {[
                  { gate: "G0", name: "Session Recovery", check: "task_plan.md exists → resume" },
                  { gate: "G1", name: "Specification", check: "User confirmed + spec review" },
                  { gate: "G2", name: "Planning", check: "task_plan.md + file mapping" },
                  { gate: "G3", name: "UI/UX Design", check: "ui-ux-pro-max + user confirmed" },
                  { gate: "G4", name: "Implementation", check: "All tests pass + review" },
                ].map((g) => (
                  <div key={g.gate} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold flex-shrink-0">{g.gate}:</span>
                    <span>{g.name} — {g.check}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-violet-500" />
                Tính năng đặc biệt
              </h3>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {[
                  { name: "Auto Mode Selection", desc: "Tự động chọn Spec-Kit vs OpenSpec" },
                  { name: "Complexity Triage", desc: "3 levels: Quick / Standard / Thorough" },
                  { name: "Anti-Rush Protection", desc: "AI từ chối code nếu chưa qua spec" },
                  { name: "3-Strike Protocol", desc: "Auto-escalate systematic-debugging sau 3 lỗi" },
                  { name: "MemPalace", desc: "Cross-session memory + knowledge graph" },
                ].map((item) => (
                  <div key={item.name} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-violet-500 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">{item.name}:</strong> {item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pros/Cons */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs font-bold text-green-600 dark:text-green-400">Ưu điểm</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {["Workflow hoàn chỉnh nhất — tất cả trong 1", "Auto mode selection — không cần suy nghĩ", "G0-G4 hard gates — chuẩn nhất", "MemPalace tích hợp — cross-session", "3-Strike Protocol — systematic debugging"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-red-600 dark:text-red-400">Hạn chế</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {["Nặng nhất — nhiều công cụ phải cài", "Learning curve cao nhất", "Nhiều phase và gate — chậm ban đầu", "Cần hiểu cả Spec-Kit và OpenSpec", "MemPalace cần cài thêm (optional)"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION: Compare ========== */}
        <section id="compare">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Cpu className="w-5 h-5 text-cyan-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">Phần 6</span>
              <h2 className="text-xl font-bold mt-0.5">So sánh chi tiết</h2>
            </div>
          </div>

          <div className="rounded-xl border border-border overflow-hidden mb-4">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Chiều so sánh</th>
                  <th className="text-left px-3 py-3 font-semibold text-teal-600 dark:text-teal-400">Superpowers</th>
                  <th className="text-left px-3 py-3 font-semibold text-blue-600 dark:text-blue-400">Spec-Kit</th>
                  <th className="text-left px-3 py-3 font-semibold text-orange-600 dark:text-orange-400">Superspec</th>
                  <th className="text-left px-3 py-3 font-semibold text-violet-600 dark:text-violet-400">SF-Superpowers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {comparisonDimensions.map((row) => {
                  const colorScore = (color: string) => {
                    if (color === "green") return "text-green-500";
                    if (color === "amber") return "text-amber-500";
                    if (color === "red") return "text-red-500";
                    return "text-muted-foreground";
                  };
                  return (
                    <tr key={row.dim}>
                      <td className="px-4 py-3 font-medium text-muted-foreground">{row.dim}</td>
                      <td className={`px-3 py-3 font-semibold ${colorScore(row.spColor)}`}>{row.sp}</td>
                      <td className={`px-3 py-3 font-semibold ${colorScore(row.skColor)}`}>{row.sk}</td>
                      <td className={`px-3 py-3 font-semibold ${colorScore(row.ssColor)}`}>{row.ss}</td>
                      <td className={`px-3 py-3 font-semibold ${colorScore(row.sfpColor)}`}>{row.sfp}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
              <h3 className="text-xs font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Tool nào "tốt nhất"?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Không có tool "tốt nhất" — chỉ có tool <strong className="text-foreground">phù hợp nhất</strong> với tình huống của bạn.
                Superpowers cho người mới. Spec-Kit cho enterprise. Superspec cho vừa-vừa.
                Spec-First Superpowers cho người muốn tất cả.
              </p>
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <h3 className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">
                <Gauge className="w-4 h-4" />
                Trade-off chính
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Càng nhiều tính năng → Càng nhiều kỷ luật → Chậm ban đầu → Nhanh về sau.
                Vibe coding nhanh ban đầu nhưng chậm về sau. Spec-driven chậm ban đầu nhưng
                nhanh và bền vững về sau.
              </p>
            </div>
          </div>
        </section>

        {/* ========== SECTION: Choose ========== */}
        <section id="choose">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Compass className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Phần 7</span>
              <h2 className="text-xl font-bold mt-0.5">Chọn tool nào — Theo tình huống</h2>
            </div>
          </div>

          <div className="space-y-6">
            {chooseScenarios.map((s) => {
              const c = colorMap[s.color];
              const Icon = s.icon;
              return (
                <div key={s.scenario} className={`rounded-2xl border ${c.border} bg-card overflow-hidden`}>
                  <div className={`px-4 py-3 border-b ${c.border} ${c.bg} flex items-center gap-3`}>
                    <Icon className={`w-5 h-5 ${c.text} flex-shrink-0`} />
                    <div className="flex-1">
                      <div className="text-sm font-bold">{s.scenario}</div>
                    </div>
                    <div className={`px-2.5 py-1 rounded-lg ${c.bg} border ${c.border} flex-shrink-0`}>
                      <span className={`text-xs font-bold ${c.text}`}>→ {s.recommendation}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{s.reason}</p>
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Cách bắt đầu:</div>
                      {s.steps.map((step, si) => (
                        <div key={si} className="flex items-start gap-2">
                          <div className={`w-5 h-5 rounded ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                            <span className={`text-[9px] font-black ${c.text}`}>{si + 1}</span>
                          </div>
                          <code className="text-[10px] font-mono text-muted-foreground leading-relaxed">{step}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== Final Summary ========== */}
        <section>
          <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-amber-500/5 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-2">Tóm lại: Vibe Coding không chết — nó được huấn luyện</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  4 công cụ SDD không phải để thay thế AI coding. Chúng là <strong className="text-foreground">lớp kỷ luật</strong> giúp
                  AI coding đi đúng hướng. Vibe coding vẫn tồn tại — nhưng với nền tảng vững chắc từ spec-driven workflow.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/guide/superpowers" className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-teal-500/10 border border-teal-500/20 text-xs font-medium text-teal-600 dark:text-teal-400 hover:bg-teal-500/20 transition-all">
                    <Sparkles className="w-3.5 h-3.5" /> Superpowers
                  </Link>
                  <Link href="/guide/superspec" className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-orange-500/10 border border-orange-500/20 text-xs font-medium text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 transition-all">
                    <FileText className="w-3.5 h-3.5" /> Superspec
                  </Link>
                  <Link href="/guide/spec-first-superpowers" className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-600 dark:text-violet-400 hover:bg-violet-500/20 transition-all">
                    <Workflow className="w-3.5 h-3.5" /> Spec-First Superpowers
                  </Link>
                  <Link href="/resources" className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-card border border-border text-xs font-medium text-muted-foreground hover:border-orange-500/40 transition-all">
                    <BookOpen className="w-3.5 h-3.5" /> Tài nguyên
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
