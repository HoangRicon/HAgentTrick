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
  Lightbulb,
  Rocket,
  SearchCheck,
  GitCommit,
  BarChart3,
  Settings,
  StickyNote,
  Puzzle,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Superspec — Hướng dẫn SDD với Superpowers",
  description: "Hướng dẫn chi tiết Superspec: SDD workflow 6 giai đoạn, 9 lệnh chính, cài đặt Cursor, tình huống sử dụng, và cấu trúc thư mục.",
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

const quickNavSections = [
  { id: "part-1", label: "Giới thiệu", icon: Sparkles, color: "teal" },
  { id: "part-2", label: "Cài đặt", icon: Settings, color: "slate" },
  { id: "part-3", label: "9 Lệnh", icon: Terminal, color: "blue" },
  { id: "part-4", label: "6 Giai đoạn", icon: Layers, color: "violet" },
  { id: "part-5", label: "Tình huống", icon: Target, color: "amber" },
  { id: "part-6", label: "Marker", icon: StickyNote, color: "pink" },
  { id: "part-7", label: "File cấu trúc", icon: FolderTree, color: "cyan" },
  { id: "part-8", label: "Lợi ích", icon: Rocket, color: "green" },
];

const commands = [
  { cmd: "/superspec.constitution", desc: "Tạo văn bản quản lý dự án (nguyên tắc, stack, chất lượng)", color: "slate" },
  { cmd: "/superspec.specify", desc: "Viết định nghĩa chi tiết cho một tính năng", color: "teal" },
  { cmd: "/superspec.brainstorm", desc: "Kiểm tra cạnh viên và tìm lỗ hổng thiết kế", color: "amber" },
  { cmd: "/superspec.plan", desc: "Thiết kế phương án kỹ thuật triển khai", color: "blue" },
  { cmd: "/superspec.tasks", desc: "Phân chia thành danh sách công việc", color: "violet" },
  { cmd: "/superspec.execute", desc: "Thực thi triển khai với kỷ luật TDD", color: "green" },
  { cmd: "/superspec.review", desc: "Đánh giá code theo yêu cầu của định nghĩa", color: "pink" },
  { cmd: "/superspec.checklist", desc: "Tạo danh sách kiểm tra theo ngữ cảnh", color: "orange" },
  { cmd: "/superspec.status", desc: "Hiển thị tiến độ hiện tại", color: "cyan" },
];

const phases = [
  {
    num: "0",
    name: "Constitution",
    subtitle: "Văn bản quản lý",
    desc: "Thiết lập \"hiến pháp\" cho toàn bộ dự án. Nguyên tắc cốt lõi, stack, chất lượng.",
    output: ".specify/memory/constitution.md",
    icon: Settings,
    color: "slate",
    contents: [
      "Tên và mô tả dự án",
      "Nguyên tắc phát triển",
      "Công nghệ sử dụng (ngôn ngữ, framework, thư viện)",
      "Quy ước đặt tên và cấu trúc thư mục",
      "Mục tiêu chất lượng (test coverage, code review)",
      "Các công cụ kiểm thử được sử dụng",
    ],
    why: "Khi có tranh chấp về quyết định kỹ thuật, constitution là nguồn sự thật cuối cùng.",
  },
  {
    num: "1",
    name: "Specify",
    subtitle: "Định nghĩa yêu cầu",
    desc: "Rời rạc hóa yêu cầu người dùng thành những khối có thể kiểm thử độc lập.",
    output: ".specify/specs/NNN-ten-tinh-nang/spec.md",
    icon: FileText,
    color: "teal",
    contents: [
      "User Stories: Các kịch bản sử dụng, xếp hạng P1/P2/P3",
      "Acceptance Scenarios: Theo cú pháp Given/When/Then",
      "Functional Requirements: Các tính năng bắt buộc phải có",
      "Success Criteria: Các chỉ số đo lường được",
      "Assumptions: Các giả định ban đầu",
    ],
    why: "Một user story P1 phải có thể triển khai và kiểm thử độc lập — nó chính là \"MVP slice\" của tính năng.",
  },
  {
    num: "2",
    name: "Brainstorm",
    subtitle: "Kiểm tra cạnh viên",
    desc: "Tìm lỗ hổng trước khi bắt đầu viết code. Agent hỏi từng câu một.",
    output: "Cập nhật spec.md + Brainstorm Log",
    icon: Lightbulb,
    color: "amber",
    contents: [
      { cat: "Boundary", q: "Nếu người dùng nhập mật khẩu dài 0 ký tự thì sao?" },
      { cat: "Error", q: "Nếu database mất kết nối giữa chỗ reset password thì sao?" },
      { cat: "Scale", q: "Nếu 10.000 người dùng cùng lúc reset password thì sao?" },
      { cat: "Security", q: "Có thể làm gì để tránh kẻ gửi request giả mạo?" },
      { cat: "UX", q: "Nếu người dùng đóng tab giữa chỗ nhập OTP thì sao?" },
    ],
    why: "Hỏi 1-2 câu tiết kiệm cả giờ làm lại vì thiếu edge case.",
  },
  {
    num: "3",
    name: "Plan",
    subtitle: "Thiết kế kỹ thuật",
    desc: "Quyết định cách nào triển khai, không phải cái gì.",
    output: ".specify/specs/NNN-ten-tinh-nang/plan.md",
    icon: Compass,
    color: "blue",
    contents: [
      "Kiểm tra tính phù hợp với constitution",
      "Phân tích codebase hiện tại (ngôn ngữ, cấu trúc, storage)",
      "Xác định các file cần tạo / sửa",
      "Chiến lược thực thi: task nào cần TDD, task nào chạy song song, chỗ nào cần review",
    ],
    why: "Plan có task 2-5 phút giúp review dễ hơn và rollback nhanh hơn.",
  },
  {
    num: "4",
    name: "Tasks",
    subtitle: "Phân chia công việc",
    desc: "Phân rã plan thành những bước có thể thực thi ngay.",
    output: ".specify/specs/NNN-ten-tinh-nang/tasks.md",
    icon: ListChecks,
    color: "violet",
    contents: [
      "Task được tổ chức theo giai đoạn (Setup → Foundation → User Stories → Polish)",
      "Mỗi task có markers: [TDD], [P], [REVIEW], [SUBAGENT]",
      "File path cụ thể cho từng task",
      "Dependencies được ghi rõ",
    ],
    why: "Danh sách công việc rõ ràng giúp developer không cần hỏi thêm.",
  },
  {
    num: "5",
    name: "Execute",
    subtitle: "Triển khai code",
    desc: "Viết code theo kỷ luật TDD, với điểm kiểm tra con người.",
    output: "Code thực tế + checkbox trong tasks.md đánh dấu [x]",
    icon: Code2,
    color: "green",
    contents: [
      { role: "TDD task", flow: "RED: viết test fail → GREEN: code minimal → REFACTOR: dọn code" },
      { role: "Subagent task", flow: "Trích xuất yêu cầu → Khởi tạo subagent → Thu thập kết quả → Tích hợp → Test" },
      { role: "Checkpoint", flow: "Tại mỗi giai đoạn, agent dừng và cho bạn xác nhận trước khi tiếp tục" },
    ],
    why: "Điểm kiểm tra con người giữa các giai đoạn đảm bảo không đi sai hướng.",
  },
];

const markers = [
  { marker: "[TDD]", meaning: "Test-Driven Development", detail: "Phải viết test trước — RED → GREEN → REFACTOR", color: "green" },
  { marker: "[P]", meaning: "Parallel", detail: "Task này có thể chạy song song với task khác", color: "blue" },
  { marker: "[REVIEW]", meaning: "Code Review", detail: "Phải review trước khi tiếp nhận tiếp", color: "amber" },
  { marker: "[SUBAGENT]", meaning: "Subagent", detail: "Có thể ủy quyền cho agent phụ", color: "violet" },
];

const reviewDimensions = [
  { dim: "Spec compliance", desc: "Tất cả acceptance scenarios đã được implement?", color: "teal" },
  { dim: "Edge case coverage", desc: "Tất cả brainstormed cases đã được xử lý?", color: "amber" },
  { dim: "Constitution compliance", desc: "Tất cả nguyên tắc quản lý đã được tuân thủ?", color: "blue" },
  { dim: "Code quality", desc: "Có bug, vấn đề bảo mật, xử lý lỗi?", color: "red" },
  { dim: "Test coverage", desc: "Có test cho các đường dẫn critical?", color: "green" },
];

const scenarios = [
  {
    title: "Bắt đầu dự án mới",
    weight: "Nặng",
    badge: "6 phases",
    color: "teal",
    steps: [
      "/superspec.constitution TênDựÁn",
      "/superspec.specify \"Mô tả tính năng\"",
      "/superspec.brainstorm .specify/specs/001/spec.md",
      "/superspec.plan",
      "/superspec.tasks",
      "/superspec.execute",
      "/superspec.review",
    ],
  },
  {
    title: "Thêm tính năng mới",
    weight: "Trung bình",
    badge: "3-4 phases",
    color: "blue",
    steps: [
      "/superspec.specify \"Thanh toán qua PayPal\"",
      "/superspec.brainstorm .specify/specs/003/spec.md",
      "/superspec.plan",
      "/superspec.tasks",
      "/superspec.execute",
    ],
  },
  {
    title: "Chỉ cần phân tích",
    weight: "Nhẹ",
    badge: "2-3 phases",
    color: "amber",
    steps: [
      "/superspec.specify \"OAuth2 login\"",
      "/superspec.brainstorm .specify/specs/004/spec.md",
      "/superspec.plan",
    ],
  },
  {
    title: "Chỉ cần thực thi",
    weight: "Kỹ thuật",
    badge: "1 phase",
    color: "green",
    steps: [
      "/superspec.execute .specify/specs/002/",
    ],
  },
];

const roleBenefits = [
  { role: "Developer", benefit: "Không còn phải đoán yêu cầu; có checklist rõ ràng để follow", color: "teal" },
  { role: "Tech Lead", benefit: "Đảm bảo team tuân thủ constitution; review có cấu trúc", color: "blue" },
  { role: "PO / PM", benefit: "Tất cả yêu cầu đều có acceptance criteria đo lường được", color: "violet" },
  { role: "QA", benefit: "Có sẵn danh sách edge cases để test; acceptance scenarios rõ ràng", color: "amber" },
  { role: "Onboarding", benefit: "New member đọc constitution là hiểu được toàn bộ dự án", color: "green" },
];

export default function SuperspecGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-background to-purple-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Superspec
            </div>
            <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-bold border border-violet-500/20">SDD v1.0</span>
            <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold border border-teal-500/20">6 Phases</span>
            <a
              href="https://github.com/obra/superspec"
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
            Superspec —{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SDD với Superpowers
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Specification-Driven Development (SDD). Kết hợp quản lý tài liệu của spec-kit với kỹ năng nâng cao từ{" "}
            <strong className="text-foreground">obra/superpowers</strong>: brainstorming, writing-plans, TDD, code-review.
            Tương thích Cursor, Claude Code, Codex CLI, và nhiều công cụ khác.
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
              <h2 className="text-xl font-bold mt-0.5">Giới thiệu Superspec</h2>
            </div>
          </div>

          {/* What is SDD */}
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-4 h-4 text-teal-500" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">Specification-Driven Development (SDD)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Phát triển phần mềm dựa trên định nghĩa chi tiết. Bắt buộc định nghĩa rõ ràng <strong className="text-foreground">cái gì</strong> cần xây dựng,{" "}
                  <strong className="text-foreground">tại sao</strong>, và <strong className="text-foreground">làm thế nào để kiểm tra</strong>.
                  Mỗi yêu cầu đều có User Stories, Acceptance Scenarios, và Edge Cases.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {[
              { icon: FileText, title: "Chất lượng tài liệu tăng vọt", desc: "User stories + Given/When/Then + edge cases được định nghĩa trước", color: "teal" },
              { icon: Bug, title: "Giảm lặp lại và sửa lỗi", desc: "Brainstorm phase nắm bắt edge cases trước khi code", color: "red" },
              { icon: ListChecks, title: "Phân chia công việc thông minh", desc: "Marker [TDD], [P], [REVIEW], [SUBAGENT] cho từng task", color: "violet" },
              { icon: Clock, title: "Tiến độ được lưu lại", desc: "progress.yml ghi lại từng giai đoạn, phục hồi chính xác sau gián đoạn", color: "blue" },
              { icon: Shield, title: "Điểm kiểm tra con người", desc: "Mỗi giai đoạn chuyển tiếp đều có checkpoint, bạn toàn quyền kiểm soát", color: "amber" },
              { icon: Puzzle, title: "Tự động phát hiện kỹ năng", desc: "Superpowers skills được phát hiện và sử dụng tự động", color: "green" },
            ].map((item) => {
              const c = colorMap[item.color];
              const Icon = item.icon;
              return (
                <div key={item.title} className={`rounded-xl border ${c.border} bg-card p-4`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${c.text}`} />
                    <span className="text-xs font-bold">{item.title}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Cross-platform */}
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Bot className="w-4 h-4 text-violet-500" />
              <span className="text-sm font-bold">Cross-platform compatibility</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2">
              Superspec hoạt động với bất kỳ AI coding agent nào hỗ trợ Skill:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Cursor", "Claude Code", "Codex CLI", "Copilot CLI", "Gemini CLI", "OpenCode"].map((tool) => (
                <span key={tool} className="px-2 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-600 dark:text-violet-400">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Role benefits */}
          <div className="rounded-xl border border-border p-5">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <UsersRound className="w-4 h-4 text-primary" />
              Lợi ích theo vai trò
            </h3>
            <div className="space-y-2">
              {roleBenefits.map((item) => {
                const c = colorMap[item.color];
                return (
                  <div key={item.role} className={`flex items-start gap-3 p-3 rounded-lg border ${c.border} bg-card`}>
                    <div className={`w-20 text-xs font-bold flex-shrink-0 ${c.text}`}>{item.role}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.benefit}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== PART 2: Cài đặt ========== */}
        <section id="part-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center flex-shrink-0">
              <Settings className="w-5 h-5 text-slate-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Phần 2</span>
              <h2 className="text-xl font-bold mt-0.5">Cài đặt cho Cursor</h2>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-4">
            {[
              {
                step: "1",
                title: "Cài đặt Superpowers (nếu chưa có)",
                color: "teal",
                desc: "Clone repository hoặc copy vào thư mục skills của Cursor.",
                code: `git clone https://github.com/obra/superpowers.git ~/.agents/skills/superpowers
cp -r superpowers/skills/superpowers ~/.cursor/skills/superpowers/skills/`,
              },
              {
                step: "2",
                title: "Cài đặt Superspec",
                color: "blue",
                desc: "Tạo symlink hoặc copy trực tiếp vào skills của Cursor.",
                code: `# Cách 1: Symlink (khuyến nghị)
New-Item -ItemType SymbolicLink -Path "$env:USERPROFILE\\.cursor\\skills\\superspec" -Target "C:\\path\\to\\superspec-main"

# Cách 2: Copy trực tiếp
Copy-Item -Recurse "C:\\path\\to\\superspec-main" "$env:USERPROFILE\\.cursor\\skills\\superspec"`,
              },
              {
                step: "3",
                title: "Xác minh cài đặt",
                color: "green",
                desc: "Gõ lệnh /superspec.status trong Cursor để kiểm tra.",
                code: `/superspec.status

# Kết quả mong đợi:
# Superspec Project Status
# Constitution: Chưa có (chạy /superspec.constitution để bắt đầu)
# Superpowers: brainstorming (đã phát hiện), writing-plans (đã phát hiện)`,
              },
            ].map((item) => {
              const c = colorMap[item.color];
              return (
                <div key={item.step} className={`rounded-xl border ${c.border} bg-card overflow-hidden`}>
                  <div className={`px-4 py-3 border-b ${c.border} ${c.bg} flex items-center gap-2`}>
                    <span className={`text-xs font-black w-6 h-6 rounded-md ${c.bg} border ${c.border} flex items-center justify-center ${c.text}`}>{item.step}</span>
                    <span className="text-sm font-bold">{item.title}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.desc}</p>
                    <pre className="rounded-lg border border-border bg-muted/50 p-3 text-xs font-mono text-muted-foreground overflow-x-auto whitespace-pre-wrap leading-relaxed">
                      {item.code}
                    </pre>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== PART 3: 9 Lệnh ========== */}
        <section id="part-3">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Terminal className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Phần 3</span>
              <h2 className="text-xl font-bold mt-0.5">9 Lệnh chính</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {commands.map((cmd) => {
              const c = colorMap[cmd.color];
              return (
                <div key={cmd.cmd} className={`rounded-xl border ${c.border} bg-card p-4`}>
                  <code className="text-xs font-mono font-bold block mb-2 ${c.text}">{cmd.cmd}</code>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{cmd.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Công thức cuối cùng */}
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-5">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-violet-500" />
              Công thức cuối cùng — Chỉ 3 bước đầu là 80% giá trị
            </h3>
            <div className="space-y-2 text-xs font-mono text-muted-foreground mb-3">
              {[
                "1. /superspec.constitution TênDựÁn",
                "2. /superspec.specify \"Mô tả tính năng\"",
                "3. /superspec.brainstorm .specify/specs/001/spec.md",
                "4. /superspec.plan",
                "5. /superspec.tasks",
                "6. /superspec.execute",
                "7. /superspec.review",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-violet-500 flex-shrink-0">{line}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed border-t border-violet-500/20 pt-3">
              <strong className="text-foreground">Lưu ý:</strong> Chỉ cần 3 bước đầu vững vàng, phần còn lại sẽ tự nhiên xảy ra.
              Hãy dành nhiều thời gian cho Constitution, Specify, và Brainstorm nhất.
            </p>
          </div>
        </section>

        {/* ========== PART 4: 6 Giai đoạn ========== */}
        <section id="part-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 text-violet-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">Phần 4</span>
              <h2 className="text-xl font-bold mt-0.5">6 Giai đoạn chi tiết</h2>
            </div>
          </div>

          {/* Phase flow */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
            {phases.map((phase, i) => {
              const c = colorMap[phase.color];
              const Icon = phase.icon;
              return (
                <div key={phase.num} className="flex items-center gap-2">
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${c.bg} border ${c.border}`}>
                    <div className={`w-6 h-6 rounded-md ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-[10px] font-black">{phase.num}</span>
                    </div>
                    <span className="text-xs font-bold">{phase.name}</span>
                  </div>
                  {i < phases.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Phase details */}
          {phases.map((phase, idx) => {
            const c = colorMap[phase.color];
            const Icon = phase.icon;
            return (
              <div key={phase.num} className={`rounded-2xl border ${c.border} bg-card overflow-hidden mb-4`}>
                <div className={`px-4 py-3 border-b ${c.border} ${c.bg} flex items-center gap-3`}>
                  <div className={`w-8 h-8 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${c.text}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-xs font-black ${c.text}`}>Phase {phase.num}</span>
                      <span className="text-sm font-bold">{phase.name}</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground">{phase.subtitle}</div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">{phase.desc}</p>

                  {/* Contents */}
                  {phase.num === "2" ? (
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Câu hỏi theo danh mục:</div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {(phase.contents as { cat: string; q: string }[]).map((item, qi) => (
                          <div key={qi} className={`rounded-lg border ${c.border} p-2.5`}>
                            <div className={`text-[9px] font-bold mb-1 ${c.text}`}>{item.cat}</div>
                            <p className="text-[10px] text-muted-foreground leading-relaxed italic">"{item.q}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : phase.num === "5" ? (
                    <div>
                      <div className="space-y-2">
                        {(phase.contents as { role: string; flow: string }[]).map((item, qi) => (
                          <div key={qi} className={`rounded-lg border ${c.border} p-2.5`}>
                            <div className={`text-[9px] font-bold mb-1 ${c.text}`}>{item.role}</div>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">{item.flow}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Bao gồm:</div>
                      <div className="space-y-1.5">
                        {(phase.contents as string[]).map((item, qi) => (
                          <div key={qi} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full ${c.border.replace("border", "bg").replace("/20", "")} ${c.text} flex-shrink-0 mt-1.5`} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Output */}
                  <div className="rounded-lg border border-dashed border-border p-3">
                    <div className="text-[10px] font-bold text-muted-foreground mb-1">Output</div>
                    <code className="text-[10px] font-mono text-muted-foreground">{phase.output}</code>
                  </div>

                  {/* Why */}
                  <div className={`rounded-lg ${c.bg} p-3`}>
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className={`w-3.5 h-3.5 ${c.text}`} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Tại sao quan trọng?</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{phase.why}</p>
                  </div>

                  {/* Phase 6: Review */}
                  {idx === phases.length - 1 && (
                    <div className="rounded-lg border border-pink-500/20 bg-pink-500/5 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <SearchCheck className="w-4 h-4 text-pink-500" />
                        <span className="text-sm font-bold">Giai đoạn 6: Review — Kiểm tra cuối cùng</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                        Đảm bảo code thực tế phù hợp với định nghĩa ban đầu. Confidence Score: mỗi phát hiện được chấm điểm 0-100. Chỉ hiển thị những phát hiện có điểm {" >= "} 80.
                      </p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {reviewDimensions.map((dim) => {
                          const dc = colorMap[dim.color];
                          return (
                            <div key={dim.dim} className={`rounded-lg border ${dc.border} bg-card p-2.5`}>
                              <div className={`text-[9px] font-bold mb-1 ${dc.text}`}>{dim.dim}</div>
                              <p className="text-[10px] text-muted-foreground leading-relaxed">{dim.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* ========== PART 5: Tình huống sử dụng ========== */}
        <section id="part-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Phần 5</span>
              <h2 className="text-xl font-bold mt-0.5">Tình huống sử dụng phổ biến</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {scenarios.map((s) => {
              const c = colorMap[s.color];
              return (
                <div key={s.title} className={`rounded-2xl border ${c.border} bg-card overflow-hidden`}>
                  <div className={`px-4 py-3 border-b ${c.border} ${c.bg} flex items-center gap-2`}>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${c.badge} ${c.badgeText}`}>{s.badge}</span>
                    <span className="text-xs font-bold">{s.title}</span>
                    <span className={`ml-auto text-[9px] font-medium ${c.text}`}>{s.weight}</span>
                  </div>
                  <div className="p-4 space-y-1.5">
                    {s.steps.map((step, si) => (
                      <div key={si} className="flex items-start gap-2 text-xs">
                        <div className={`w-5 h-5 rounded-md ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                          <span className={`text-[9px] font-black ${c.text}`}>{si + 1}</span>
                        </div>
                        <code className="font-mono text-muted-foreground leading-relaxed">{step}</code>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== PART 6: Markers ========== */}
        <section id="part-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
              <StickyNote className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400">Phần 6</span>
              <h2 className="text-xl font-bold mt-0.5">Task Markers — Ý nghĩa từng marker</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {markers.map((m) => {
              const c = colorMap[m.color];
              return (
                <div key={m.marker} className={`rounded-xl border ${c.border} bg-card p-5`}>
                  <div className="flex items-center gap-3 mb-3">
                    <code className={`text-sm font-mono font-black px-2 py-1 rounded-lg ${c.bg} ${c.text}`}>{m.marker}</code>
                    <span className="text-sm font-bold">{m.meaning}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Task list example */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="px-4 py-2.5 border-b border-border bg-muted/30 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-bold">Ví dụ: tasks.md với markers</span>
            </div>
            <pre className="p-4 text-xs font-mono text-muted-foreground leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`Giai đoạn 1: Setup
  [ ] T001: Cài đặt thư viện X
  [ ] T002: Cấu hình môi trường

Giai đoạn 2: Foundation
  [ ] T003: Tạo bảng dữ liệu [TDD]

Giai đoạn 3: User Stories
  [P] [TDD] T004: Hiển thị form login
  [P] [TDD] T005: Xử lý submit form
  [SUBAGENT] T006: API authentication

Giai đoạn 4: Polish
  [ ] T012: Test e2e
  [REVIEW] T013: Code review`}
            </pre>
          </div>
        </section>

        {/* ========== PART 7: File Structure ========== */}
        <section id="part-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <FolderTree className="w-5 h-5 text-cyan-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">Phần 7</span>
              <h2 className="text-xl font-bold mt-0.5">Cấu trúc thư mục</h2>
            </div>
          </div>

          {/* Folder structure */}
          <div className="rounded-xl border border-border p-4 bg-muted/30 mb-4">
            <pre className="text-xs font-mono text-muted-foreground leading-relaxed whitespace-pre-wrap">
{`dự-án-của-bạn/
├── .specify/
│   ├── memory/
│   │   └── constitution.md      # Nguyên tắc quản lý
│   ├── superpowers.yml          # Trạng thái kỹ năng (tự động)
│   ├── specs/
│   │   └── 001-tên-tính-năng/
│   │       ├── spec.md          # Định nghĩa tính năng
│   │       ├── plan.md          # Kế hoạch kỹ thuật
│   │       ├── tasks.md         # Danh sách task
│   │       ├── progress.yml     # Tiến độ (tự động)
│   │       └── checklist-*.md   # Checklist kiểm tra
│   └── templates/               # Mẫu tài liệu
└── ... (mã nguồn của bạn)`}
            </pre>
          </div>

          {/* Session Recovery */}
          <div className="rounded-xl border border-slate-500/20 bg-slate-500/5 p-5">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              Session Recovery — Khi nào và cách phục hồi?
            </h3>
            <div className="grid sm:grid-cols-3 gap-3 mb-3">
              {[
                { when: "Agent timeout", icon: Clock },
                { when: "Mất điện / đóng máy", icon: AlertTriangle },
                { when: "Đóng cửa sổ Cursor", icon: XCircle },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.when} className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-500/20 bg-card">
                    <Icon className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{item.when}</span>
                  </div>
                );
              })}
            </div>
            <div className="rounded-lg border border-border p-3">
              <div className="text-[10px] font-bold text-muted-foreground mb-2">Cách phục hồi:</div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div><code className="font-mono bg-muted px-1.5 py-0.5 rounded">/superspec.status</code> → Hiển thị trạng thái hiện tại</div>
                <div>Bỏ qua task đã đánh dấu [x], tiếp tục từ task chưa đánh dấu</div>
                <div>Tiếp tục brainstorm từ câu hỏi chưa giải quyết</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PART 8: Lợi ích thực tế ========== */}
        <section id="part-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600 dark:text-green-400">Phần 8</span>
              <h2 className="text-xl font-bold mt-0.5">Lợi ích thực tế</h2>
            </div>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 mb-4">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Không sai scope từ đầu — 1-2 câu hỏi tiết kiệm cả giờ làm lại",
                "Bug fix nhanh hơn 3-5 lần — systematic debugging thay vì guesswork",
                "Code sạch hơn — TDD ép viết test trước, không skip được",
                "Không còn 'tưởng xong rồi' — checkpoint bắt buộc mỗi giai đoạn",
                "Phân chia công việc rõ ràng — developer không cần hỏi thêm",
                "Tiến độ được lưu lại — phục hồi chính xác sau gián đoạn",
                "Điểm kiểm tra con người — bạn toàn quyền kiểm soát chất lượng",
                "Acceptance criteria đo lường được — PO/PM hài lòng",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* vs Traditional */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                Traditional approach
              </h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                {["Nhảy thẳng vào viết code", "Không có spec, đoán yêu cầu", "Edge cases phát hiện sau khi deploy", "Không có checkpoint", "Tiến độ mất khi đóng cửa sổ", "Code review chung chung"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Superspec approach
              </h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                {["Spec trước — rõ ràng từ đầu", "User stories + acceptance criteria", "Edge cases được brainstorm trước", "Checkpoint con người giữa phases", "progress.yml lưu trạng thái", "Review theo 5 chiều đo lường"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
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
              { label: "Spec-First Superpowers", href: "/guide/spec-first-superpowers", desc: "SDD workflow orchestration" },
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
