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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Superpowers — Khung kỹ năng Agent",
  description: "Hướng dẫn chi tiết Superpowers: quy trình 7 bước, thư viện skills, cài đặt trên Cursor, Claude Code, Codex, và hơn thế nữa.",
};

const skillGroups = [
  {
    group: "Testing",
    icon: Bug,
    color: "green",
    bg: "bg-green-500/10",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-500/20",
    badge: "bg-green-500",
    badgeText: "text-white",
    skills: [
      {
        name: "test-driven-development",
        tagline: "RED → GREEN → REFACTOR",
        desc: "Viết test fail trước. Viết code minimal để test pass. Refactor sau. Không bao giờ viết code trước test.",
        benefit: "95% first-time fix rate vs 40% không dùng TDD",
        redFlag: "Viết code trước khi có test",
        icon: Target,
      },
    ],
  },
  {
    group: "Debugging",
    icon: Bug,
    color: "red",
    bg: "bg-red-500/10",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-500/20",
    badge: "bg-red-500",
    badgeText: "text-white",
    skills: [
      {
        name: "systematic-debugging",
        tagline: "Root cause 4 giai đoạn",
        desc: "1. Đọc lỗi kỹ 2. Reproduce 3. Check changes 4. Trace data flow. Không đoán mò, không fix triệu chứng.",
        benefit: "15-30 phút fix vs 2-3 giờ guesswork",
        redFlag: "Đề xuất fix trước khi trace data flow",
        icon: BrainCircuit,
      },
      {
        name: "verification-before-completion",
        tagline: "Evidence before claims",
        desc: "Không claim thành công khi chưa chạy verification command. Gate: IDENTIFY → RUN → READ → VERIFY → THEN claim.",
        benefit: "Không còn 'Tưởng xong rồi'",
        redFlag: "Nói 'xong', 'ổn rồi', 'perfect' trước khi verify",
        icon: Eye,
      },
    ],
  },
  {
    group: "Collaboration",
    icon: Users,
    color: "violet",
    bg: "bg-violet-500/10",
    text: "text-violet-600 dark:text-violet-400",
    border: "border-violet-500/20",
    badge: "bg-violet-500",
    badgeText: "text-white",
    skills: [
      {
        name: "brainstorming",
        tagline: "Đặt câu hỏi Socratic",
        desc: "Agent hỏi 1-2 câu mỗi lượt để tinh chỉnh thiết kế. Nhiều lựa chọn kèm trade-offs. Lưu design khi hoàn tất.",
        benefit: "1-2 câu hỏi tránh sai scope cả giờ",
        redFlag: "Nhảy vào code khi chưa xác nhận thiết kế",
        icon: MessageSquare,
      },
      {
        name: "writing-plans",
        tagline: "Task nhỏ 2-5 phút",
        desc: "Break work thành task nhỏ. Mỗi task có: file path + complete code + verification command. Không placeholder, không TBD.",
        benefit: "Junior engineer có thể follow không cần hỏi thêm",
        redFlag: "Plan có 'TODO', 'TBD', 'fill in details'",
        icon: FileText,
      },
      {
        name: "subagent-driven-development",
        tagline: "Dispatch agent con",
        desc: "Fresh subagent cho từng task. Two-stage review: spec compliance → code quality. Checkpoint giữa các task. Fast autonomous iteration.",
        benefit: "Agent làm việc autonomous vài giờ không lệch kế hoạch",
        redFlag: "Một agent làm tất cả task cùng lúc",
        icon: Users,
      },
      {
        name: "dispatching-parallel-agents",
        tagline: "Agent đồng thời",
        desc: "Nhiều agent làm việc song song cho independent tasks. Review sau mỗi batch. Tối ưu thời gian.",
        benefit: "Tiết kiệm thời gian với nhiều task độc lập",
        redFlag: "Chạy agent song song khi tasks có dependency",
        icon: Cpu,
      },
      {
        name: "requesting-code-review",
        tagline: "Review theo mức độ nghiêm trọng",
        desc: "Review dựa trên plan. Checklist: scope, layer, contract, permission, shared surface, test coverage, docs. Critical = block progress.",
        benefit: "Không bỏ sót lỗi trước khi merge",
        redFlag: "Review chung chung không theo checklist",
        icon: ShieldCheck,
      },
      {
        name: "receiving-code-review",
        tagline: "Feedback có tính kỹ thuật",
        desc: "Phản hồi feedback bằng evidence. Verify trước khi accept suggestion. Không accept mù quáng. Đặt câu hỏi khi chưa rõ.",
        benefit: "Feedback chất lượng, không mất thời gian sai hướng",
        redFlag: "Accept suggestion không hiểu vì sao",
        icon: MessageSquare,
      },
      {
        name: "using-git-worktrees",
        tagline: "Workspace cô lập",
        desc: "Tạo branch mới trên worktree riêng. Setup project, verify baseline. Không conflict với work đang làm. Cleanup khi xong.",
        benefit: "An toàn khi experiment, không làm hỏng branch chính",
        redFlag: "Commit trực tiếp vào main mà không có worktree",
        icon: GitBranch,
      },
      {
        name: "finishing-a-development-branch",
        tagline: "Options: merge/PR/keep/discard",
        desc: "Verify tests. Trình bày options: merge / PR / keep / discard. Cleanup worktree. Đảm bảo không遗留 gì.",
        benefit: "Workspace sạch sẽ, ready cho task tiếp theo",
        redFlag: "Quên cleanup worktree sau khi merge",
        icon: CheckCircle2,
      },
    ],
  },
  {
    group: "Meta",
    icon: Wrench,
    color: "amber",
    bg: "bg-amber-500/10",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/20",
    badge: "bg-amber-500",
    badgeText: "text-white",
    skills: [
      {
        name: "writing-skills",
        tagline: "Tạo skill mới",
        desc: "Tạo skill mới theo best practices. TDD cho documentation: viết test → viết skill → verify → close loopholes.",
        benefit: "Tự tạo workflow riêng cho team hoặc project",
        redFlag: "Viết skill không có test, không có red flags",
        icon: Wrench,
      },
      {
        name: "using-superpowers",
        tagline: "Giới thiệu hệ thống",
        desc: "Giới thiệu hệ thống skills. Tự động trigger khi phù hợp. Không cần gõ lệnh — agent nhận diện tình huống.",
        benefit: "Skills tự tìm bạn — không cần nhớ gọi gì",
        redFlag: "Bỏ qua skill vì nghĩ 'đơn giản không cần'",
        icon: Sparkles,
      },
    ],
  },
];

const toolInstalls = [
  { tool: "Cursor", badge: "Phổ biến", badgeBg: "bg-violet-500", badgeText: "text-white", color: "violet", cmd: "/add-plugin superpowers", alt: "Tìm 'superpowers' trong plugin marketplace", note: "Skills trigger tự động trong chat" },
  { tool: "Claude Code", badge: "Official", badgeBg: "bg-amber-500", badgeText: "text-white", color: "amber", cmd: "/plugin install superpowers@claude-plugins-official", alt: "Marketplace chính thức Anthropic", note: "Agent mạnh nhất về architecture" },
  { tool: "Codex CLI", badge: "OpenAI", badgeBg: "bg-green-500", badgeText: "text-white", color: "green", cmd: "/plugins → tìm Superpowers → Install Plugin", alt: "OpenAI's coding agent", note: "Tích hợp với GitHub" },
  { tool: "Copilot CLI", badge: "Microsoft", badgeBg: "bg-blue-500", badgeText: "text-white", color: "blue", cmd: "copilot plugin install superpowers@superpowers-marketplace", alt: "GitHub Copilot agent mode", note: "Tích hợp với GitHub ecosystem" },
  { tool: "Gemini CLI", badge: "Google", badgeBg: "bg-cyan-500", badgeText: "text-white", color: "cyan", cmd: "gemini extensions install https://github.com/obra/superpowers", alt: "gemini extensions update superpowers", note: "Agent CLI từ Google" },
  { tool: "OpenCode", badge: "OSS", badgeBg: "bg-pink-500", badgeText: "text-white", color: "pink", cmd: "Tham khảo .opencode/INSTALL.md trong repo", alt: "OpenSource coding agent", note: "Cộng đồng mã nguồn mở" },
];

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string; badgeText: string }> = {
  teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20", badge: "bg-teal-500/10", badgeText: "text-teal-600 dark:text-teal-400" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/20", badge: "bg-violet-500/10", badgeText: "text-violet-600 dark:text-violet-400" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20", badge: "bg-green-500/10", badgeText: "text-green-600 dark:text-green-400" },
  red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20", badge: "bg-red-500/10", badgeText: "text-red-600 dark:text-red-400" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20", badge: "bg-amber-500/10", badgeText: "text-amber-600 dark:text-amber-400" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20", badge: "bg-blue-500/10", badgeText: "text-blue-600 dark:text-blue-400" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20", badge: "bg-cyan-500/10", badgeText: "text-cyan-600 dark:text-cyan-400" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20", badge: "bg-pink-500/10", badgeText: "text-pink-600 dark:text-pink-400" },
};

const philosophies = [
  { icon: Target, title: "TDD — Test-Driven Development", subtitle: "Viết test trước, luôn luôn", desc: "RED: viết test fail. GREEN: viết code minimal để pass. REFACTOR: dọn code. Không bao giờ viết code khi không có test.", color: "teal" },
  { icon: BrainCircuit, title: "Systematic — Quy trình hơn đoán mò", subtitle: "Root cause trước khi fix", desc: "Debug có 4 giai đoạn. Fix có root cause. Không đề xuất fix trước khi trace data flow. Không fix triệu chứng.", color: "red" },
  { icon: Layers, title: "YAGNI — Đơn giản là mục tiêu", subtitle: "Không thêm vì 'tiện tay'", desc: "Không thêm feature vì 'chắc cần'. Không abstraction sớm khi mới 1 use case. DRY khi lặp lần 2. No placeholders.", color: "amber" },
  { icon: Eye, title: "Evidence — Verify trước khi claim", subtitle: "Command output không nói dối", desc: "Chưa run command → Không claim kết quả. Evidence always. Gate: IDENTIFY → RUN → READ → VERIFY → THEN claim.", color: "green" },
  { icon: MessageSquare, title: "Clarify — Hỏi trước khi làm", subtitle: "1-2 câu tiết kiệm cả giờ", desc: "Brainstorming: hỏi Socratic để hiểu thiết kế. Không nhảy vào code khi chưa rõ requirement. Không tự suy đoán.", color: "violet" },
];

const comparisonData = {
  title: "So sánh: Không dùng vs Dùng Superpowers",
  before: {
    title: "Workflow tự do",
    color: "red",
    items: [
      "Nhảy thẳng vào viết code",
      "Không hỏi, không có plan",
      "Fix bug bằng đoán mò",
      "Test sau khi code xong",
      "Claim thành công khi build pass",
      "Một agent làm tất cả",
    ],
  },
  after: {
    title: "Superpowers Workflow",
    color: "green",
    items: [
      "Hỏi trước — hiểu rõ mới làm",
      "Brainstorming → Plans → Execute",
      "Root cause 4 giai đoạn",
      "TDD: test trước, code sau",
      "Verify command → rồi claim",
      "Subagent-driven, checkpoint giữa task",
    ],
  },
};

export default function SuperpowersGuidePage() {
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
              Superpowers Guide
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20">161k Stars</span>
            <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold border border-green-500/20">MIT License</span>
            <a
              href="https://github.com/obra/superpowers"
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
            Superpowers —{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Khung kỹ năng Agent
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Không phải tool. Là bộ quy trình giúp coding agent tự biết khi nào cần{" "}
            <strong className="text-foreground">hỏi trước</strong>, khi nào cần{" "}
            <strong className="text-foreground">lên kế hoạch</strong>, khi nào cần{" "}
            <strong className="text-foreground">viết test trước</strong>, khi nào cần{" "}
            <strong className="text-foreground">verify trước khi claim</strong>.
            Skills trigger tự động — không cần gõ lệnh.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* Comparison */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            {comparisonData.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden">
              <div className="px-4 py-3 border-b border-red-500/20 bg-red-500/10 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="font-semibold text-sm text-red-600 dark:text-red-400">{comparisonData.before.title}</span>
              </div>
              <div className="p-4 space-y-2.5">
                {comparisonData.before.items.map((item, i) => (
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
                <span className="font-semibold text-sm text-green-600 dark:text-green-400">{comparisonData.after.title}</span>
              </div>
              <div className="p-4 space-y-2.5">
                {comparisonData.after.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5 Triết lý cốt lõi */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-primary" />
            5 triết lý cốt lõi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {philosophies.map((p) => {
              const c = colorMap[p.color];
              const Icon = p.icon;
              return (
                <div key={p.title} className={`rounded-xl border ${c.border} bg-card overflow-hidden hover:shadow-md transition-shadow`}>
                  <div className={`px-4 py-3 border-b ${c.border} ${c.bg}`}>
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${c.text}`} />
                      <div>
                        <div className={`text-sm font-bold ${c.text}`}>{p.title}</div>
                        <div className="text-[10px] text-muted-foreground">{p.subtitle}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7-step workflow */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Quy trình 7 bước làm việc
          </h2>
          <div className="space-y-3">
            {[
              { num: 1, name: "Brainstorming", skill: "brainstorming", color: "teal", trigger: "Bạn nói \"Thêm tính năng X\", \"Build Y\"" },
              { num: 2, name: "Git Worktrees", skill: "using-git-worktrees", color: "violet", trigger: "Sau khi design được approve" },
              { num: 3, name: "Writing Plans", skill: "writing-plans", color: "amber", trigger: "Khi design được approve" },
              { num: 4, name: "Subagent-Driven / Executing Plans", skill: "subagent-driven-development", color: "blue", trigger: "Khi có plan" },
              { num: 5, name: "Test-Driven Development", skill: "test-driven-development", color: "green", trigger: "Khi implement từng task" },
              { num: 6, name: "Requesting Code Review", skill: "requesting-code-review", color: "pink", trigger: "Giữa các task" },
              { num: 7, name: "Finishing Development Branch", skill: "finishing-a-development-branch", color: "cyan", trigger: "Khi tasks hoàn tất" },
            ].map((step, i) => {
              const c = colorMap[step.color];
              return (
                <div key={step.num} className="flex items-start gap-4 relative">
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${c.bg} ${c.border}`}>
                    <span className="text-xs font-bold">{step.num}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="text-sm font-bold">{step.name}</span>
                      <code className="text-[10px] font-mono bg-muted px-1.5 py-0.5 rounded">{step.skill}</code>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <Target className="w-3 h-3 text-teal-500" />
                      <span className="font-medium">Trigger:</span>
                      <span>{step.trigger}</span>
                    </div>
                  </div>
                  {i < 6 && <div className="absolute left-[14px] top-9 w-px h-3 bg-border/50" />}
                </div>
              );
            })}
          </div>
        </section>

        {/* Skills library */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-primary" />
            Thư viện Skills — Chi tiết từng skill
          </h2>
          <div className="space-y-4">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.group} className={`rounded-2xl border ${group.border} bg-card overflow-hidden`}>
                  <div className={`flex items-center gap-3 px-5 py-3.5 border-b ${group.border} ${group.bg}`}>
                    <GroupIcon className={`w-4 h-4 ${group.text}`} />
                    <span className="text-sm font-bold">{group.group}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${group.badge} ${group.badgeText}`}>
                      {group.skills.length} skill{group.skills.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="divide-y divide-border/50">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skill.name} className="px-5 py-4">
                          <div className="flex items-start gap-3 mb-3">
                            <div className={`w-8 h-8 rounded-lg ${group.bg} border ${group.border} flex items-center justify-center shrink-0`}>
                              <SkillIcon className={`w-4 h-4 ${group.text}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                                <code className="text-xs font-mono font-bold">{skill.name}</code>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">{skill.tagline}</span>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-2">
                            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-green-500/5 border border-green-500/20">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-0.5">Lợi ích</div>
                                <div className="text-xs text-muted-foreground">{skill.benefit}</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-red-500/5 border border-red-500/20">
                              <AlertTriangle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-0.5">Red Flag</div>
                                <div className="text-xs text-muted-foreground">{skill.redFlag}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cài đặt */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            Cài đặt Superpowers — Theo từng tool
          </h2>
          <div className="space-y-2">
            {toolInstalls.map((item) => {
              const c = colorMap[item.color];
              return (
                <div key={item.tool} className={`flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-3.5 rounded-xl border ${c.border} bg-card`}>
                  <div className="flex items-center gap-2 sm:w-36 shrink-0">
                    <span className={`w-20 text-xs font-bold ${c.text}`}>{item.tool}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${item.badgeBg} ${item.badgeText}`}>{item.badge}</span>
                  </div>
                  <code className="flex-1 text-xs font-mono text-muted-foreground truncate">{item.cmd}</code>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] text-muted-foreground hidden sm:block">{item.note}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 rounded-xl border border-teal-500/20 bg-teal-500/5 p-4">
            <div className="flex items-start gap-2.5">
              <Bot className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Sau khi cài đặt:</strong> Agent sẽ tự động trigger skills phù hợp với từng tình huống.
                Không cần gõ lệnh gì thêm. Nói "Thêm tính năng login" → Agent tự gọi brainstorming.
                Nói "Fix bug này" → Agent tự gọi systematic-debugging.
              </div>
            </div>
          </div>
        </section>

        {/* 3 điều đặc biệt */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            3 điều đặc biệt của Superpowers
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: PlayCircle,
                title: "Skills trigger TỰ ĐỘNG",
                desc: "Không cần gõ lệnh. Agent nhận diện tình huống và kích hoạt skill phù hợp. Nói \"Thêm tính năng\" → brainstorming. Nói \"Fix bug\" → systematic-debugging.",
                badge: "Không cần nhớ lệnh",
                color: "teal",
              },
              {
                icon: RefreshCw,
                title: "Chạy CROSS-PLATFORM",
                desc: "Một bộ skills cho Claude Code, Cursor, Codex, Gemini, Copilot, OpenCode. Không cần học lại khi đổi tool. Skills viết 1 lần, chạy mọi nơi.",
                badge: "161k stars, MIT",
                color: "violet",
              },
              {
                icon: ListChecks,
                title: "Có CHECKLIST + RED FLAGS",
                desc: "Mỗi skill có checklist cụ thể. Rationalization table chống lời ngụy biện. Red flags để agent tự nhận biết khi đang vi phạm quy trình.",
                badge: "Chống rationalization",
                color: "amber",
              },
            ].map((item) => {
              const c = colorMap[item.color];
              const Icon = item.icon;
              return (
                <div key={item.title} className={`rounded-xl border ${c.border} bg-card p-5`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-5 h-5 ${c.text}`} />
                    <span className="text-sm font-bold">{item.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded bg-current/10">{item.badge}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Lợi ích thực tế */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Lợi ích thực tế
          </h2>
          <div className="rounded-2xl border bg-card p-6">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                { text: "Không sai scope từ đầu — 1-2 câu hỏi tiết kiệm cả giờ làm lại", color: "text-green-500" },
                { text: "Bug fix nhanh hơn 3-5 lần — systematic debugging thay vì guesswork", color: "text-green-500" },
                { text: "Code sạch hơn — TDD ép viết test trước, không skip được", color: "text-green-500" },
                { text: "Không còn 'tưởng xong rồi' — verification gate bắt buộc", color: "text-green-500" },
                { text: "Agent làm việc autonomous vài giờ không lệch kế hoạch", color: "text-green-500" },
                { text: "Multi-agent an toàn — checkpoint + review + handoff chuẩn", color: "text-green-500" },
                { text: "Skills trigger tự động — không cần nhớ gọi lệnh gì", color: "text-green-500" },
                { text: "Cross-platform — đổi tool không cần học lại workflow", color: "text-green-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className={`w-4 h-4 ${item.color} flex-shrink-0 mt-0.5`} />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rationalization table */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            Red Flags — Khi nào bạn đang vi phạm Superpowers
          </h2>
          <div className="rounded-xl border border-red-500/20 overflow-hidden">
            <div className="px-4 py-2.5 border-b border-red-500/20 bg-red-500/10">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-red-600 dark:text-red-400">Những suy nghĩ này nghĩa là STOP — quay lại quy trình</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Suy nghĩ</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Thực tế</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { thought: "\"Đơn giản thôi, không cần brainstorming\"", reality: "Đơn giản vẫn cần xác nhận requirement. 1 câu hỏi tránh sai scope cả giờ." },
                    { thought: "\"Chạy được rồi, không cần test\"", reality: "Untested code không stick. Viết test sau ≠ test thật." },
                    { thought: "\"Tôi hiểu rồi, không cần verify\"", reality: "Confidence ≠ evidence. Run command, đọc output, THEN claim." },
                    { thought: "\"Cứ fix đại, không kịp trace root cause\"", reality: "Fix triệu chứng tạo bug mới. Trace trước, fix sau." },
                    { thought: "\"Tôi biết làm gì, không cần plan\"", reality: "Plan có task 2-5 phút giúp review dễ hơn và rollback nhanh hơn." },
                    { thought: "\"Tớ hiểu feedback rồi\" (không verify)", reality: "Verify trước khi accept. Feedback có thể sai hoặc không phù hợp context." },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="px-4 py-3 text-red-600 dark:text-red-400 font-medium">{row.thought}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.reality}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              { label: "Tài nguyên", href: "/resources", desc: "Tải quy tắc và skills" },
              { label: "Quy trình thực chiến", href: "/workflow", desc: "Áp dụng Superpowers vào workflow" },
              { label: "Tài nguyên Superpowers", href: "/resources/superpowers", desc: "Chi tiết trong tài nguyên" },
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
