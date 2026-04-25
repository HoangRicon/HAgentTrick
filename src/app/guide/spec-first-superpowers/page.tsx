import Link from "next/link";
import type { Metadata } from "next";
import {
  Sparkles,
  GitBranch,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  XCircle,
  Check,
  Zap,
  BookOpen,
  Target,
  BrainCircuit,
  Layers,
  Eye,
  MessageSquare,
  Bug,
  ShieldCheck,
  PlayCircle,
  RefreshCw,
  ListChecks,
  Users,
  Code2,
  Play,
  Wrench,
  FileText,
  Terminal,
  Bot,
  ExternalLink,
  Cpu,
  AlertTriangle,
  Compass,
  Gauge,
  FolderTree,
  Database,
  Archive,
  Shield,
  Clock,
  Search,
  Zap as ZapIcon,
  Workflow as WorkflowIcon,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Spec-First Superpowers — Hướng dẫn SDD Workflow",
  description: "Hướng dẫn chi tiết spec-first-superpowers: SDD workflow với Spec-Kit + OpenSpec, Quality Gates G0-G4, tình huống thực tế, và 11 skills tích hợp.",
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

const accentGradientMap: Record<string, string> = {
  teal: "from-teal-600 to-teal-400",
  violet: "from-violet-600 to-violet-400",
  green: "from-green-600 to-green-400",
  red: "from-red-600 to-red-400",
  amber: "from-amber-600 to-amber-400",
  blue: "from-blue-600 to-blue-400",
  cyan: "from-cyan-600 to-cyan-400",
  pink: "from-pink-600 to-pink-400",
};

const comparisonData = {
  title: "Tại sao cần spec-first?",
  before: {
    title: "Không dùng spec-first",
    color: "red",
    items: [
      "Nhảy thẳng vào viết code",
      "Không biết yêu cầu rõ ràng chỗ nào",
      "Scope creep — thêm feature không kiểm soát",
      "Code xong rồi mới phát hiện sai thiết kế",
      "Fix bug bằng đoán mò",
      "Test sau, pass thì thôi",
    ],
  },
  after: {
    title: "Spec-First Superpowers",
    color: "teal",
    items: [
      "Spec trước — rõ ràng từ đầu",
      "User stories + acceptance criteria có sẵn",
      "Scope được freeze trước khi code",
      "Design được approve trước khi implement",
      "Root cause 4 giai đoạn khi debug",
      "TDD: test trước, verify sau",
    ],
  },
};

const quickNavSections = [
  { id: "part-1", label: "Giới thiệu", icon: Sparkles, color: "teal" },
  { id: "part-2", label: "Commands", icon: Terminal, color: "blue" },
  { id: "part-3", label: "Modes", icon: Compass, color: "violet" },
  { id: "part-4", label: "Quality Gates", icon: ShieldCheck, color: "green" },
  { id: "part-5", label: "Tình huống", icon: Target, color: "amber" },
  { id: "part-6", label: "Templates", icon: FolderTree, color: "cyan" },
  { id: "part-7", label: "Skills", icon: ListChecks, color: "pink" },
  { id: "part-8", label: "Cài đặt", icon: Package, color: "slate" },
];

export default function SpecFirstSuperpowersGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-background to-cyan-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Spec-First Superpowers
            </div>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold border border-cyan-500/20">v5.0.7</span>
            <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold border border-green-500/20">6 Tools</span>
            <a
              href="https://github.com/obra/spec-first-superpowers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background text-xs font-medium hover:border-primary/30 transition-all"
            >
              <GitBranch className="w-3.5 h-3.5" />
              GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Spec-First Superpowers —{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              SDD Workflow
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Orchestration skill enforce spec-before-code workflow. Tích hợp{" "}
            <strong className="text-foreground">Spec-Kit</strong>,{" "}
            <strong className="text-foreground">OpenSpec</strong>,{" "}
            <strong className="text-foreground">Superpowers</strong>,{" "}
            <strong className="text-foreground">planning-with-files</strong>,{" "}
            <strong className="text-foreground">ui-ux-pro-max</strong>, và{" "}
            <strong className="text-foreground">MemPalace</strong>.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        {/* Quick nav */}
        <section>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {quickNavSections.map((item, i) => {
              const c = colorMap[item.color];
              const grad = accentGradientMap[item.color];
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex items-center gap-2 sm:gap-3">
                  <Link
                    href={`#${item.id}`}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl ${c.bg} border ${c.border} hover:shadow-md transition-all group`}
                  >
                    <Icon className={`w-4 h-4 ${c.text} flex-shrink-0`} />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </Link>
                  {i < quickNavSections.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0 hidden sm:block" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== PART 1: Giới thiệu ========== */}
        <section id="part-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-teal-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">Phần 1</span>
              <h2 className="text-xl font-bold mt-0.5">Giới thiệu Spec-First Superpowers</h2>
            </div>
          </div>

          {/* What is it */}
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-4 h-4 text-teal-500" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">Mục tiêu</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bắt buộc trợ lý lập trình AI hoàn thành quy chuẩn (SDD) trước khi viết mã, loại bỏ hoàn toàn "viết tùy tiện theo cảm xúc".
                  Mọi feature, bugfix, refactor đều phải qua <strong className="text-foreground">spec phase</strong> trước khi code.
                </p>
              </div>
            </div>
          </div>

          {/* 6 integrated tools */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">6 công cụ tích hợp</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: "Spec-Kit", version: "v0.7.1", role: "Phase-gated workflow engine", color: "teal" },
                { name: "OpenSpec", version: "v1.2.0", role: "Lightweight SDD workflow", color: "blue" },
                { name: "Superpowers", version: "v5.0.7", role: "TDD + inline review methodology", color: "violet" },
                { name: "planning-with-files", version: "v2.30.0", role: "File-based persistent planning", color: "amber" },
                { name: "ui-ux-pro-max", version: "v2.5.0", role: "UI/UX design system (67 styles)", color: "pink" },
                { name: "MemPalace", version: "v3.3.0", role: "Cross-session memory + knowledge graph", color: "green" },
              ].map((tool) => {
                const c = colorMap[tool.color];
                return (
                  <div key={tool.name} className={`rounded-xl border ${c.border} bg-card p-4`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold">{tool.name}</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-muted">{tool.version}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tool.role}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comparison */}
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 mb-4">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-500" />
              {comparisonData.before.title}
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {comparisonData.before.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 mb-4">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              {comparisonData.after.title}
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {comparisonData.after.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Phase Flow */}
          <div className="rounded-xl border bg-card p-5">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              6 Phase Flow — từ spec đến archive
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { num: "0", name: "Session Recovery", desc: "Phát hiện task_plan.md, khôi phục ngữ cảnh", color: "slate" },
                { num: "1", name: "Specification", desc: "User stories, acceptance criteria, Given/When/Then", color: "teal" },
                { num: "2", name: "Persistent Planning", desc: "task_plan.md + findings.md + progress.md", color: "blue" },
                { num: "3", name: "UI/UX Design", desc: "ui-ux-pro-max (khi có từ khóa UI)", color: "violet" },
                { num: "4", name: "Implementation", desc: "TDD RED-GREEN-REFACTOR + Subagent-Driven", color: "green" },
                { num: "5", name: "Archive", desc: "finishing-a-development-branch + MemPalace", color: "amber" },
              ].map((phase) => {
                const c = colorMap[phase.color];
                return (
                  <div key={phase.num} className={`rounded-lg border ${c.border} bg-card p-3`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-6 h-6 rounded-md ${c.bg} flex items-center justify-center`}>
                        <span className="text-[10px] font-black">{phase.num}</span>
                      </div>
                      <span className="text-xs font-bold">{phase.name}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{phase.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== PART 2: Commands ========== */}
        <section id="part-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Terminal className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Phần 2</span>
              <h2 className="text-xl font-bold mt-0.5">Commands chính</h2>
            </div>
          </div>

          {/* Command table */}
          <div className="rounded-xl border border-border overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground w-1/2">Command</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Effect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    { cmd: "/super-spec", effect: "Full workflow (auto mode + auto complexity) — dùng phổ biến nhất", highlight: true },
                    { cmd: "/super-spec force-spec-kit", effect: "Force Spec-Kit mode — cho project mới từ đầu" },
                    { cmd: "/super-spec force-openspec", effect: "Force OpenSpec mode — cho project đang có, workflow nhẹ" },
                    { cmd: "/super-spec reset", effect: "Reset mode selection, xóa .spec-mode" },
                    { cmd: "/super-spec upgrade", effect: "Check all integrated projects for updates" },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? "bg-teal-500/5" : ""}>
                      <td className="px-4 py-3">
                        <code className="text-xs font-mono font-bold bg-muted px-2 py-1 rounded">{row.cmd}</code>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs leading-relaxed">{row.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick reference card */}
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-blue-500" />
              Quick Reference
            </h3>
            <div className="space-y-2 text-xs font-mono">
              {[
                "/super-spec                    → Bắt đầu feature/bug/refactor (99% trường hợp)",
                "/super-spec force-spec-kit    → Project mới từ đầu, cần phase gating strict",
                "/super-spec force-openspec    → Project đang có, workflow nhẹ",
                "/super-spec reset             → Chọn sai mode, muốn re-detect",
                "/super-spec upgrade           → Kiểm tra/cập nhật versions",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-blue-500 flex-shrink-0">{">"}</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PART 3: Modes & Complexity ========== */}
        <section id="part-3">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
              <Compass className="w-5 h-5 text-violet-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">Phần 3</span>
              <h2 className="text-xl font-bold mt-0.5">Mode Selection & Complexity Triage</h2>
            </div>
          </div>

          {/* Mode selection */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">Auto-detection priority</h3>
            <div className="rounded-xl border border-border overflow-hidden mb-4">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Signal</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    { signal: ".spec-mode file exists", mode: "Use whatever it says" },
                    { signal: ".specify/ directory", mode: "Spec-Kit" },
                    { signal: "openspec/ directory", mode: "OpenSpec" },
                    { signal: "Brand new project, < 30 files", mode: "Spec-Kit" },
                    { signal: "Everything else", mode: "OpenSpec (default)" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2.5 text-muted-foreground font-mono">{row.signal}</td>
                      <td className="px-4 py-2.5">
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${row.mode === "OpenSpec (default)" ? "bg-blue-500/10 text-blue-600" : row.mode === "Spec-Kit" ? "bg-teal-500/10 text-teal-600" : "bg-muted"}`}>
                          {row.mode}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Spec-Kit vs OpenSpec */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">Spec-Kit vs OpenSpec — So sánh chi tiết</h3>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Dimension</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-blue-600 dark:text-blue-400">OpenSpec</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-teal-600 dark:text-teal-400">Spec-Kit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    { dim: "Weight", opsx: "Lightweight, fluid", kit: "Strict, phased" },
                    { dim: "Best for", opsx: "Existing/iterating", kit: "New/complex systems" },
                    { dim: "Philosophy", opsx: "Actions, not phases", kit: "Phase-gated progression" },
                    { dim: "Constitution", opsx: "Optional (config.yaml)", kit: "Required (constitution.md)" },
                    { dim: "Artifacts", opsx: "proposal → specs → design → tasks", kit: "spec → plan → tasks" },
                    { dim: "Quick path", opsx: "/opsx:propose one-shot", kit: "/speckit.implement after full flow" },
                    { dim: "Verification", opsx: "/opsx:verify + /opsx:refine", kit: "/speckit.analyze + /speckit.checklist" },
                    { dim: "Archiving", opsx: "/opsx:archive", kit: "Manual" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2.5 font-medium text-muted-foreground">{row.dim}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.opsx}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.kit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* When to use */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 p-4">
              <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                Khi nào dùng Spec-Kit
              </h3>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {["Brand new project từ đầu", "Large systems (multi-module, multi-team)", "Enterprise projects cần strict phase control", "Projects cần extensions, presets, custom workflows"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
              <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                Khi nào dùng OpenSpec
              </h3>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {["Existing codebases với established patterns", "Fast iteration, small teams", "Feature enhancements, bugfixes, refactors"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Complexity triage */}
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-5">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-violet-500" />
              Complexity Triage — 3 levels
            </h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { level: "Quick", when: "Single-file bugfix, typo, config", what: "Simplified: /opsx:propose → TDD → archive", color: "green" },
                { level: "Standard", when: "Single feature, clear scope", what: "All phases (Phase 3 only if UI)", color: "amber" },
                { level: "Thorough", when: "Multi-module, architecture decisions", what: "All phases + Agent Teams evaluation", color: "red" },
              ].map((item) => {
                const c = colorMap[item.color];
                return (
                  <div key={item.level} className={`rounded-lg border ${c.border} bg-card p-3`}>
                    <div className={`text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block ${c.bg} ${c.text}`}>{item.level}</div>
                    <p className="text-[10px] text-muted-foreground mb-1.5 leading-relaxed">{item.when}</p>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{item.what}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== PART 4: Quality Gates ========== */}
        <section id="part-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600 dark:text-green-400">Phần 4</span>
              <h2 className="text-xl font-bold mt-0.5">Quality Gates G0 — G4</h2>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 mb-4">
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Mỗi gate là <strong className="text-foreground">hard stop</strong> — không có gì tiến lên cho đến khi tất cả checks pass.
            </p>
            <div className="grid sm:grid-cols-5 gap-2 mb-4">
              {[
                { gate: "G0", phase: "Session Recovery", color: "slate" },
                { gate: "G1", phase: "Specification", color: "teal" },
                { gate: "G2", phase: "Planning", color: "blue" },
                { gate: "G3", phase: "UI/UX Design", color: "violet" },
                { gate: "G4", phase: "Implementation", color: "green" },
              ].map((g) => {
                const c = colorMap[g.color];
                return (
                  <div key={g.gate} className={`rounded-lg border ${c.border} ${c.bg} p-2 text-center`}>
                    <div className={`text-xs font-black ${c.text}`}>{g.gate}</div>
                    <div className="text-[9px] text-muted-foreground mt-0.5">{g.phase}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* G0 */}
          <div className="rounded-xl border border-slate-500/20 bg-slate-500/5 p-4 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black bg-slate-500/10 text-slate-600 dark:text-slate-400 px-1.5 py-0.5 rounded">G0</span>
              <span className="text-sm font-bold">Session Recovery</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Signal:</strong> task_plan.md exists? → Resume from checkpoint.
              <br />
              <strong className="text-foreground">5-Question Reboot Test:</strong> Where am I? / Where am I going? / What's the goal? / What did I learn? / What did I do?
            </p>
          </div>

          {/* G1 */}
          <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 p-4 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black bg-teal-500/10 text-teal-600 dark:text-teal-400 px-1.5 py-0.5 rounded">G1</span>
              <span className="text-sm font-bold">Specification Gate</span>
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" /> User gave explicit confirmation</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" /> spec.md contains no implementation details (pure What & Why)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" /> Inline spec review checklist passed</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" /> Scope check done</li>
            </ul>
          </div>

          {/* G2 */}
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black bg-blue-500/10 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded">G2</span>
              <span className="text-sm font-bold">Planning Gate</span>
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" /> task_plan.md generated</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" /> Every task has: file paths + acceptance criteria + test strategy</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" /> File structure mapped before task decomposition</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" /> Inline plan review checklist passed</li>
            </ul>
          </div>

          {/* G3 */}
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black bg-violet-500/10 text-violet-600 dark:text-violet-400 px-1.5 py-0.5 rounded">G3</span>
              <span className="text-sm font-bold">UI/UX Design Gate (conditional)</span>
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-violet-500 flex-shrink-0 mt-0.5" /> UI keywords detected</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-violet-500 flex-shrink-0 mt-0.5" /> ui-ux-pro-max generated design system</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-violet-500 flex-shrink-0 mt-0.5" /> Pre-delivery checklist passed</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-violet-500 flex-shrink-0 mt-0.5" /> User confirmed design</li>
            </ul>
          </div>

          {/* G4 */}
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black bg-green-500/10 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded">G4</span>
              <span className="text-sm font-bold">Implementation Gate</span>
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" /> All tests pass (0 failures)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" /> Two-stage review passed (spec conformance + code quality)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" /> Code quality: SOLID · DRY · KISS · No Critical/Important issues</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" /> Verification evidence written to progress.md</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" /> /opsx:verify passed (if available)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" /> MemPalace archived (if configured)</li>
            </ul>
          </div>
        </section>

        {/* ========== PART 5: Tình huống thực tế ========== */}
        <section id="part-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Phần 5</span>
              <h2 className="text-xl font-bold mt-0.5">Tình huống thực tế</h2>
            </div>
          </div>

          {/* Scenario 1: Feature mới */}
          <div className="rounded-2xl border border-amber-500/20 bg-card overflow-hidden mb-4">
            <div className="px-4 py-3 border-b border-amber-500/20 bg-amber-500/5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded">Scenario 1</span>
                <span className="text-sm font-bold">Feature mới (Standard)</span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tình huống:</strong> Thêm chức năng đăng nhập Google vào app React.
              </p>
              <div className="space-y-1.5 text-xs font-mono text-muted-foreground">
                <div><span className="text-amber-500">Input:</span> /super-spec</div>
                <div><span className="text-amber-500">Mô tả:</span> "Thêm đăng nhập Google OAuth cho ứng dụng React..."</div>
              </div>
              <div className="rounded-lg border border-border p-3 space-y-1">
                <div className="text-[10px] font-bold text-amber-600 dark:text-amber-400 mb-1.5">AI tự động chọn:</div>
                {["OpenSpec (project đã có 50+ files)", "Complexity: Standard", "G1: User confirm spec", "G2: Plan + file mapping", "Phase 3: UI design (có button, form)", "G3: User confirm design", "Phase 4: TDD implementation", "G4: Tests pass → Phase 5: Archive"].map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scenario 2: Bug fix nhanh */}
          <div className="rounded-2xl border border-green-500/20 bg-card overflow-hidden mb-4">
            <div className="px-4 py-3 border-b border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-0.5 rounded">Scenario 2</span>
                <span className="text-sm font-bold">Bug fix nhanh (Quick)</span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tình huống:</strong> Fix lỗi type error trong 1 file.
              </p>
              <div className="rounded-lg border border-border p-3 space-y-1">
                <div className="text-[10px] font-bold text-green-600 dark:text-green-400 mb-1.5">AI tự động chọn:</div>
                {["Complexity: Quick", "Simplified flow: /opsx:propose → TDD → archive", "G1: Skip (spec đơn giản, confirm nhanh)", "G2: Skip", "Phase 4: Viết test trước → fix → run tests", "G4: Tests pass → done"].map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scenario 3: Refactor lớn */}
          <div className="rounded-2xl border border-red-500/20 bg-card overflow-hidden mb-4">
            <div className="px-4 py-3 border-b border-red-500/20 bg-red-500/5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-red-500/10 text-red-600 dark:text-red-400 px-2 py-0.5 rounded">Scenario 3</span>
                <span className="text-sm font-bold">Refactor lớn (Thorough)</span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tình huống:</strong> Chuyển từ Redux → Zustand cho toàn bộ app.
              </p>
              <div className="rounded-lg border border-border p-3 space-y-1">
                <div className="text-[10px] font-bold text-red-600 dark:text-red-400 mb-1.5">AI tự động chọn:</div>
                {["Complexity: Thorough", "Spec-Kit mode (phase gating strict)", "/speckit.specify → spec.md", "/speckit.clarify → edge cases", "/speckit.plan → plan.md + architecture", "/speckit.analyze → validate consistency", "/speckit.tasks → task list", "Subagent-Driven execution (parallel per module)", "Two-stage review per task", "G4: All tests pass"].map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scenario 4: Session Recovery */}
          <div className="rounded-2xl border border-slate-500/20 bg-card overflow-hidden mb-4">
            <div className="px-4 py-3 border-b border-slate-500/20 bg-slate-500/5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-slate-500/10 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">Scenario 4</span>
                <span className="text-sm font-bold">Session Recovery — Tiếp tục công việc bị gián đoạn</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Tình huống:</strong> Hôm qua đang làm feature, hôm nay quay lại.
              </p>
              <div className="rounded-lg border border-border p-3">
                <div className="text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-2">Phase 0 — 5-Question Reboot Test:</div>
                {[
                  { q: "Where am I?", a: "Phase 4, Task 3.2/8" },
                  { q: "Where am I going?", a: "Complete auth module" },
                  { q: "What's the goal?", a: "Google OAuth login working" },
                  { q: "What did I learn?", a: "Need CORS config for localhost" },
                  { q: "What did I do?", a: "Tasks 1.1-3.1 done, tests passing" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs mb-1.5">
                    <span className="text-slate-500 font-mono font-bold flex-shrink-0 w-32">{item.q}</span>
                    <span className="text-muted-foreground">→ {item.a}</span>
                  </div>
                ))}
                <div className="mt-2 pt-2 border-t border-border text-xs text-muted-foreground">
                  git diff --stat vs progress.md → Resume: Task 3.2 (OAuth callback handler)
                </div>
              </div>
            </div>
          </div>

          {/* More scenarios */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Force Spec-Kit cho project mới", cmd: "/super-spec force-spec-kit", color: "teal" },
              { title: "Anti-Rush protection", cmd: "\"Viết thẳng auth handler luôn đi\"", color: "red" },
              { title: "UI/UX Design phase", cmd: "Thêm dashboard mới với charts", color: "violet" },
              { title: "3-Strike Protocol", cmd: "OAuth redirect lỗi 3 lần", color: "amber" },
            ].map((item) => {
              const c = colorMap[item.color];
              return (
                <div key={item.title} className={`rounded-xl border ${c.border} bg-card p-4`}>
                  <div className={`text-xs font-bold mb-1.5 ${c.text}`}>{item.title}</div>
                  <code className="text-[10px] font-mono bg-muted px-2 py-1 rounded text-muted-foreground">{item.cmd}</code>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== PART 6: Templates ========== */}
        <section id="part-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <FolderTree className="w-5 h-5 text-cyan-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">Phần 6</span>
              <h2 className="text-xl font-bold mt-0.5">Templates & File Structure</h2>
            </div>
          </div>

          {/* File structure Spec-Kit */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">File Structure — Spec-Kit</h3>
            <div className="rounded-xl border border-border p-4 bg-muted/30">
              <pre className="text-xs font-mono text-muted-foreground leading-relaxed whitespace-pre-wrap">
{`.specify/
├── memory/
│   └── constitution.md      ← Nguyên tắc quản lý
├── specs/
│   └── [feature-name]/
│       ├── spec.md          ← Product spec (What & Why)
│       ├── plan.md          ← Technical plan (How)
│       ├── tasks.md         ← Task breakdown
│       ├── contracts/       ← API specs (optional)
│       ├── data-model.md    ← DB schema (optional)
│       └── research.md      ← Research notes (optional)
├── templates/
└── scripts/`}
              </pre>
            </div>
          </div>

          {/* File structure OpenSpec */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">File Structure — OpenSpec</h3>
            <div className="rounded-xl border border-border p-4 bg-muted/30">
              <pre className="text-xs font-mono text-muted-foreground leading-relaxed whitespace-pre-wrap">
{`openspec/
├── config.yaml
├── changes/
│   └── [change-name]/
│       ├── .openspec.yaml   ← Metadata
│       ├── proposal.md      ← Change proposal
│       ├── specs/           ← Feature specs
│       │   └── [domain]/spec.md
│       ├── design.md        ← Technical design
│       └── tasks.md         ← Task list
├── specs/                   ← Main specs (synced)
└── archive/                 ← Completed changes`}
              </pre>
            </div>
          </div>

          {/* Persistent files */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">3 Persistent Files (root)</h3>
            <div className="space-y-2">
              {[
                { name: "task_plan.md", desc: "Persistent checklist — tasks với file paths + acceptance criteria", color: "blue" },
                { name: "progress.md", desc: "Log tiến độ theo session — để resume sau khi gián đoạn", color: "green" },
                { name: "findings.md", desc: "Research notes + decisions made — tái sử dụng kiến thức", color: "amber" },
              ].map((f) => {
                const c = colorMap[f.color];
                return (
                  <div key={f.name} className={`rounded-lg border ${c.border} bg-card p-3 flex items-start gap-3`}>
                    <div className={`w-8 h-8 rounded-md ${c.bg} flex items-center justify-center flex-shrink-0`}>
                      <FileText className={`w-4 h-4 ${c.text}`} />
                    </div>
                    <div>
                      <code className="text-xs font-mono font-bold">{f.name}</code>
                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Template for spec.md */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="px-4 py-2.5 border-b border-border bg-muted/30 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-bold">Template: spec.md</span>
            </div>
            <pre className="p-4 text-xs font-mono text-muted-foreground leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`# [Feature Name]

## 1. Feature Description
[What - pure product perspective, no tech stack]

## 2. User Stories
### As a [role], I want [goal] so that [benefit]

## 3. Acceptance Criteria (Given-When-Then)
### Scenario 1: [name]
**Given** [precondition]
**When** [action]
**Then** [expected outcome]

## 4. Success Metrics
- [Metric 1]
- [Metric 2]

## 5. Out of Scope
- [What this does NOT include]

## 6. References
[Links to related docs]`}
            </pre>
          </div>
        </section>

        {/* ========== PART 7: Skills ========== */}
        <section id="part-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
              <ListChecks className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400">Phần 7</span>
              <h2 className="text-xl font-bold mt-0.5">Skills tích hợp</h2>
            </div>
          </div>

          {/* Required Skills */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">Required Skills</h3>
            <div className="rounded-xl border border-border overflow-hidden mb-4">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Skill</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Role</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Phase</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    { skill: "using-superpowers", role: "Loads Superpowers methodology", phase: "Phase 4" },
                    { skill: "brainstorming", role: "Design exploration + inline spec review", phase: "Phase 1" },
                    { skill: "writing-plans", role: "Implementation plans + inline plan review", phase: "Phase 2" },
                    { skill: "test-driven-development", role: "TDD RED-GREEN-REFACTOR", phase: "Phase 4" },
                    { skill: "requesting-code-review", role: "Two-stage code review", phase: "Phase 4" },
                    { skill: "verification-before-completion", role: "Pre-completion verification", phase: "G4" },
                    { skill: "planning-with-files", role: "File-based planning + session recovery", phase: "0/2" },
                    { skill: "finishing-a-development-branch", role: "Branch wrap-up", phase: "5" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2.5"><code className="font-mono bg-muted px-1.5 py-0.5 rounded">{row.skill}</code></td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.role}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.phase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Optional Skills */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">Optional Skills</h3>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Skill</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Role</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Phase</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    { skill: "ui-ux-pro-max", role: "UI/UX design system", phase: "3 (conditional)" },
                    { skill: "systematic-debugging", role: "4-phase root cause analysis", phase: "4 (on demand)" },
                    { skill: "subagent-driven-development", role: "Subagent execution + two-stage review", phase: "4 (on demand)" },
                    { skill: "executing-plans", role: "Batch execution + checkpoints", phase: "4 (on demand)" },
                    { skill: "dispatching-parallel-agents", role: "Concurrent subagent workflows", phase: "4 (on demand)" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2.5"><code className="font-mono bg-muted px-1.5 py-0.5 rounded">{row.skill}</code></td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.role}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.phase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Implementer status */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Implementer Status Handling (3-Strike Protocol)
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { status: "DONE", action: "Proceed to spec compliance review", color: "green" },
                { status: "DONE_WITH_CONCERNS", action: "Read concerns → address if correctness/scope", color: "amber" },
                { status: "NEEDS_CONTEXT", action: "Provide missing info, re-dispatch", color: "blue" },
                { status: "BLOCKED", action: "Escalate: more context / better model / break down / rethink", color: "red" },
              ].map((item) => {
                const c = colorMap[item.color];
                return (
                  <div key={item.status} className={`rounded-lg border ${c.border} bg-card p-3`}>
                    <div className={`text-xs font-black mb-1 ${c.text}`}>{item.status}</div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{item.action}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== PART 8: Cài đặt ========== */}
        <section id="part-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center flex-shrink-0">
              <Package className="w-5 h-5 text-slate-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Phần 8</span>
              <h2 className="text-xl font-bold mt-0.5">Cài đặt</h2>
            </div>
          </div>

          {/* Installation commands */}
          <div className="rounded-xl border border-slate-500/20 bg-slate-500/5 p-5 mb-4">
            <h3 className="text-sm font-bold mb-3">Cài đặt một lần (khuyến nghị)</h3>
            <div className="space-y-3">
              <div>
                <div className="text-[10px] font-bold text-muted-foreground mb-1">Interactive install</div>
                <pre className="rounded-lg border border-border bg-muted/50 p-3 text-xs font-mono text-muted-foreground overflow-x-auto">
npx skills add zxzvsdcj/spec-first-superpowers
                </pre>
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted-foreground mb-1">Non-interactive (script hoặc bàn giao hàng loạt)</div>
                <pre className="rounded-lg border border-border bg-muted/50 p-3 text-xs font-mono text-muted-foreground overflow-x-auto">
npx skills add zxzvsdcj/spec-first-superpowers --skill spec-first-superpowers --agent cursor --global --yes
                </pre>
              </div>
            </div>
          </div>

          {/* External tools */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3">External Tools</h3>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Tool</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Role</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Required?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    { tool: "MemPalace", role: "Cross-session memory + knowledge graph", req: "Optional (recommended)" },
                    { tool: "Spec-Kit CLI", role: "Spec-driven development framework", req: "Recommended" },
                    { tool: "OpenSpec CLI", role: "Lightweight spec workflow", req: "Recommended" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2.5 font-bold">{row.tool}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.role}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{row.req}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              Troubleshooting
            </h3>
            <div className="space-y-2 text-xs">
              {[
                { problem: "Mode seems wrong?", solution: "/super-spec reset hoặc force-spec-kit / force-openspec" },
                { problem: "AI skipped spec phase?", solution: "Check .cursor/rules/00-spec-first-superpowers.mdc exists với alwaysApply: true" },
                { problem: "UI/UX design didn't trigger?", solution: "Include UI keywords: UI, UX, page, dashboard, component, interface, design, app" },
                { problem: "Context drifting?", solution: "Check task_plan.md / progress.md up to date. Enable MemPalace." },
                { problem: "Same error 3 times?", solution: "3-Strike Protocol → auto-escalate to systematic-debugging" },
                { problem: "OpenSpec directory not found?", solution: "Run openspec init (uses openspec/ not .openspec/)" },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-red-500 flex-shrink-0 font-bold">Q:</span>
                  <span className="flex-shrink-0 w-48">{row.problem}</span>
                  <span className="text-green-500 flex-shrink-0">→</span>
                  <span>{row.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-primary" />
            Liên quan
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Hướng dẫn", href: "/guide", desc: "Tất cả hướng dẫn" },
              { label: "Superpowers", href: "/guide/superpowers", desc: "Khung kỹ năng Agent" },
              { label: "Superspec", href: "/guide/superspec", desc: "SDD với Superpowers" },
              { label: "Tài nguyên", href: "/resources", desc: "Tải quy tắc và skills" },
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
