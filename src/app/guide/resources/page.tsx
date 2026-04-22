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
  Zap,
  ExternalLink,
  Code2,
  Bot,
  FileCode,
  Cog,
  BrainCircuit,
  Lightbulb,
  ArrowRight,
  MessageSquare,
  Terminal,
  FileSearch,
  GitBranch,
  Play,
  CheckSquare,
  Bug,
  AlertTriangle,
  Target,
  Cpu,
  Users,
  Check,
  X,
  Clock,
  RefreshCw,
  PlayCircle,
  Wrench,
  ShieldCheck,
  Eye,
  ListChecks,
  ArrowDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hướng dẫn sử dụng tài nguyên",
  description: "Hướng dẫn lấy tài nguyên từ trang Tài nguyên và bỏ vào AI Agent để tăng cường khả năng làm việc.",
};

const workflowResources = [
  {
    phase: "Quy trình Agent",
    icon: Sparkles,
    color: "teal",
    resources: [
      { name: "Superpowers", file: "docs/Chung/Superpowers.md", desc: "Khung kỹ năng Agent: brainstorming → plans → TDD → verify → review" },
    ],
  },
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
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20" },
};

const howToUseItems = [
  { icon: Copy, text: "Copy nội dung file .md và paste trực tiếp vào chat AI Agent" },
  { icon: ClipboardPaste, text: "Dùng tham chiếu đường dẫn tới file trong prompt: \"Đọc file docs/Chung/Quy tắc code.md\"" },
  { icon: CheckCircle2, text: "Khi AI đọc được file, nó sẽ hiểu cấu trúc project và sinh code đúng theo quy tắc" },
  { icon: Sparkles, text: "Có thể bỏ nhiều file cùng lúc để AI có nhiều ngữ cảnh lập, nhiều quy tắc cùng một lúc" },
];

const aiTools = [
  {
    icon: Code2,
    name: "Cursor",
    tagline: "AI-first code editor",
    website: "https://cursor.sh",
    color: "violet",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-600 dark:text-violet-400",
    badge: "Phổ biến nhất",
    badgeBg: "bg-violet-500",
    badgeText: "text-white",
    summary: "Editor AI mạnh nhất hiện nay. Tích hợp sâu vào workflow coding, hỗ trợ autocomplete, chat, composer, và terminal. Đọc tài liệu bằng nhiều cách.",
    ruleFiles: [
      { name: ".cursorrules", location: "Thư mục gốc project", desc: "File luật chính cho Cursor. Áp dụng cho mọi cuộc trò chuyện trong project.", priority: "Bắt buộc" },
      { name: "rules/", location: "Thư mục gốc project", desc: "Thư mục chứa nhiều file luật. Mỗi file cho một khía cạnh: code rules, architecture, testing...", priority: "Tùy chọn" },
      { name: "CLAUDE.md", location: "Thư mục gốc project", desc: "File markdown mà Cursor đọc tự động khi khởi đầu project. Dùng để thiết lập ngữ cảnh, vai trò, và quy ước.", priority: "Rất khuyến nghị" },
    ],
    howTo: [
      { step: 1, action: "Tạo file .cursorrules hoặc CLAUDE.md ở thư mục gốc project", detail: "Copy nội dung tài nguyên từ trang này vào file đó" },
      { step: 2, action: "Mở project trong Cursor", detail: "Cursor sẽ tự động đọc file luật khi bạn bắt đầu cuộc trò chuyện" },
      { step: 3, action: "Dùng @ để tham chiếu file cụ thể trong chat", detail: "Gõ @docs/rules/code-rules.md để AI đọc luật cụ thể" },
      { step: 4, action: "Thêm tài nguyên vào workspace", detail: "Kéo thả file .md vào panel workspace để AI luôn thấy" },
    ],
    skills: [
      { name: "Cursor Rules", url: "https://www.cursor.com/skills", desc: "Tích hợp skill vào Cursor từ cộng đồng" },
    ],
  },
  {
    icon: Bot,
    name: "Claude Code",
    tagline: "CLI agent từ Anthropic",
    website: "https://docs.anthropic.com/en/docs/claude-code",
    color: "amber",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-600 dark:text-amber-400",
    badge: "Official",
    badgeBg: "bg-amber-500",
    badgeText: "text-white",
    summary: "Agent CLI chính thức từ Anthropic. Chạy trong terminal, có quyền đọc/ghi file, chạy lệnh. Đặc biệt mạnh về architecture và phân tích project lớn.",
    ruleFiles: [
      { name: "ANTHROPIC.md", location: "Thư mục gốc project", desc: "File cấu hình cho Claude Code CLI. Thiết lập instructions, allowed-tools, và project context.", priority: "Bắt buộc" },
      { name: "CLAUDE.md", location: "Thư mục gốc project", desc: "Anthropic khuyến nghị dùng CLAUDE.md làm file hướng dẫn chính. Nội dung sẽ được đọc tự động khi khởi đầu.", priority: "Rất khuyến nghị" },
      { name: ".claude/", location: "Thư mục gốc project", desc: "Thư mục cấu hình nâng cao. Chứa commands/, workflows/, và settings.", priority: "Tùy chọn" },
    ],
    howTo: [
      { step: 1, action: "Cài đặt: npm install -g @anthropic-ai/claude-code", detail: "Hoặc dùng package manager khác" },
      { step: 2, action: "Tạo file CLAUDE.md ở thư mục gốc", detail: "Dán nội dung tài nguyên vào. Đây là nơi Claude Code đọc đầu tiên." },
      { step: 3, action: "Chạy claude trong terminal từ thư mục project", detail: "Claude Code sẽ tự đọc CLAUDE.md và áp dụng luật" },
      { step: 4, action: "Dùng /memory để quản lý luật bổ sung", detail: "Dán thêm tài nguyên vào memory khi cần" },
    ],
    skills: [
      { name: "Built-in Commands", url: "", desc: "/rules, /memory, /instructions — quản lý luật trực tiếp trong CLI" },
    ],
  },
  {
    icon: Bot,
    name: "Augment Code",
    tagline: "IDE plugin với huge context",
    website: "https://www.augmentcode.com",
    color: "cyan",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-600 dark:text-cyan-400",
    badge: "Mới",
    badgeBg: "bg-cyan-500",
    badgeText: "text-white",
    summary: "Plugin IDE với context window cực lớn (1M+ tokens). Đọc toàn bộ codebase mà không cần chunk. Tốt cho dự án lớn, nhiều file.",
    ruleFiles: [
      { name: "augment.yaml", location: "Thư mục gốc project", desc: "File cấu hình cho Augment. Thiết lập project structure, ignore paths, và custom instructions.", priority: "Bắt buộc" },
      { name: "GUIDELINES.md", location: "Thư mục gốc project", desc: "File hướng dẫn cho Augment. Áp dụng cho mọi lần tương tác trong project.", priority: "Khuyến nghị" },
    ],
    howTo: [
      { step: 1, action: "Cài đặt Augment plugin vào IDE (VS Code, JetBrains...)", detail: "Hỗ trợ nhiều IDE phổ biến" },
      { step: 2, action: "Tạo augment.yaml và GUIDELINES.md ở thư mục gốc", detail: "Dán nội dung tài nguyên vào GUIDELINES.md" },
      { step: 3, action: "Augment tự động đọc toàn bộ codebase", detail: "Không cần chỉ định thủ công như các tool khác" },
      { step: 4, action: "Dùng @file để tham chiếu tài liệu cụ thể", detail: "Khi cần bổ sung luật cho task riêng" },
    ],
    skills: [
      { name: "Project Knowledge", url: "", desc: "Augment tự học cấu trúc project qua thời gian sử dụng" },
    ],
  },
  {
    icon: Terminal,
    name: "Codex / Codex CLI",
    tagline: "OpenAI's coding agent",
    website: "https://openai.com/index/introducing-agents-api",
    color: "green",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-600 dark:text-green-400",
    badge: "OpenAI",
    badgeBg: "bg-green-500",
    badgeText: "text-white",
    summary: "Agent CLI từ OpenAI. Tích hợp với GitHub, hỗ trợ sandbox execution, và nhiều tool. Phù hợp cho CI/CD pipeline và automation.",
    ruleFiles: [
      { name: "SYSTEM_INSTRUCTIONS.md", location: "Thư mục gốc hoặc ~/.codex/", desc: "File instructions cho Codex. Có thể đặt ở project hoặc global.", priority: "Bắt buộc" },
      { name: ".codex.json", location: "Thư mục gốc project", desc: "Cấu hình project cho Codex: allowed_commands, max_cost, system_prompt.", priority: "Khuyến nghị" },
    ],
    howTo: [
      { step: 1, action: "Cài đặt: npm install -g @openai/codex hoặc dùng API", detail: "Có phiên bản standalone CLI và API integration" },
      { step: 2, action: "Tạo .codex.json và SYSTEM_INSTRUCTIONS.md", detail: "Dán tài nguyên vào SYSTEM_INSTRUCTIONS.md" },
      { step: 3, action: "Chạy codex từ terminal", detail: "Codex sẽ đọc instructions trước khi làm việc" },
      { step: 4, action: "Dùng @document để tham chiếu file", detail: "Tương tự Cursor, gõ @ để chọn file" },
    ],
    skills: [
      { name: "GitHub Integration", url: "", desc: "Tích hợp trực tiếp với PR, issues, và repo" },
    ],
  },
  {
    icon: Sparkles,
    name: "Antigravity",
    tagline: "Agent framework mới",
    website: "https://github.com",
    color: "pink",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-600 dark:text-pink-400",
    badge: "Framework",
    badgeBg: "bg-pink-500",
    badgeText: "text-white",
    summary: "Framework agent mã nguồn mở, linh hoạt, dễ customize. Có thể tích hợp với nhiều LLM provider và tool ecosystem.",
    ruleFiles: [
      { name: "agent.md", location: "Thư mục gốc project", desc: "File định nghĩa agent behavior, tools, và instructions chính.", priority: "Bắt buộc" },
      { name: "rules/", location: "Thư mục gốc project", desc: "Thư mục chứa các rule modules. Mỗi file cho một domain: coding, review, testing...", priority: "Tùy chọn" },
    ],
    howTo: [
      { step: 1, action: "Clone và setup theo hướng dẫn chính thức", detail: "Tham khảo GitHub repo của Antigravity" },
      { step: 2, action: "Tạo agent.md với system prompt và tools", detail: "Copy tài nguyên vào phần instructions" },
      { step: 3, action: "Tổ chức rules/ theo domain", detail: "Mỗi rule file cho một khía cạnh công việc" },
      { step: 4, action: "Config trong settings.json", detail: "Chỉ định đường dẫn đến agent.md và rules/" },
    ],
    skills: [
      { name: "Tool Ecosystem", url: "", desc: "Kết nối với nhiều tool: browser, terminal, file system..." },
    ],
  },
  {
    icon: Code2,
    name: "Copilot (Workspace)",
    tagline: "GitHub Copilot agent mode",
    website: "https://github.com/features/copilot",
    color: "blue",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-600 dark:text-blue-400",
    badge: "Microsoft",
    badgeBg: "bg-blue-500",
    badgeText: "text-white",
    summary: "Chế độ agent của GitHub Copilot trong VS Code. Đọc repo, tạo PR, chạy test, deploy. Tích hợp sâu với GitHub ecosystem.",
    ruleFiles: [
      { name: ".github/copilot-instructions.md", location: "Thư mục .github/", desc: "File instructions riêng cho Copilot. Áp dụng cho mọi cuộc trò chuyện Copilot Chat trong repo.", priority: "Khuyến nghị" },
      { name: "copilot.md", location: "Thư mục gốc project", desc: "Có thể dùng copilot.md ở gốc làm fallback.", priority: "Tùy chọn" },
    ],
    howTo: [
      { step: 1, action: "Bật Copilot Chat trong VS Code", detail: "Cần có subscription Copilot Chat" },
      { step: 2, action: "Tạo .github/copilot-instructions.md", detail: "Dán nội dung tài nguyên vào file này" },
      { step: 3, action: "Mở Copilot Chat trong repo", detail: "Copilot sẽ tự đọc instructions" },
      { step: 4, action: "Dùng @workspace để tham chiếu tài liệu", detail: "Chỉ định file cụ thể khi cần" },
    ],
    skills: [
      { name: "GitHub Integration", url: "", desc: "Tích hợp với PR, issues, Actions, và toàn bộ repo" },
    ],
  },
];

const ruleStorageFormats = [
  {
    name: "CLAUDE.md",
    icon: FileText,
    color: "violet",
    usedIn: ["Cursor", "Claude Code", "Augment", "VS Code Copilot"],
    desc: "File markdown phổ biến nhất. Đặt ở thư mục gốc project. AI đọc tự động khi khởi đầu. Dùng để thiết lập vai trò, quy ước, và ngữ cảnh dự án.",
    example: `# CLAUDE.md — Project Guidelines

## Vai trò
Tôi là một senior developer chuyên về Next.js.

## Quy ước code
- Dùng TypeScript strict mode
- 6-layer architecture: route → ui → service → data → db → model
- Component: small, focused, co-location

## Quy trình làm việc
1. Phân tích yêu cầu trước khi code
2. Mỗi task 2-5 files
3. Review trước khi commit`,
    tip: "Đây là format phổ biến nhất — hầu hết AI coding tool đều hỗ trợ.",
  },
  {
    name: ".cursorrules",
    icon: FileCode,
    color: "amber",
    usedIn: ["Cursor"],
    desc: "File luật riêng của Cursor. Đặt ở thư mục gốc. Cursor đọc nội dung và áp dụng cho mọi cuộc trò chuyện. Cú pháp có thể dùng markdown hoặc YAML.",
    example: `.cursorrules
---
languages:
  - TypeScript
  - Tailwind CSS
framework:
  - Next.js 14 App Router

rules:
  - Always use TypeScript strict mode
  - Follow 6-layer architecture
  - Components must be small and focused`,
    tip: "Dùng khi bạn muốn luật chỉ áp dụng cho Cursor (không ảnh hưởng tool khác).",
  },
  {
    name: "ANTHROPIC.md",
    icon: BrainCircuit,
    color: "cyan",
    usedIn: ["Claude Code"],
    desc: "File cấu hình chính thức cho Claude Code CLI. Thiết lập instructions, allowed-tools, và project context. Đặt ở thư mục gốc.",
    example: `---
instructions: |
  Bạn là một senior developer.
  Luôn phân tích trước khi code.
  Mỗi task không quá 5 files.

allowedTools:
  - Read
  - Write
  - Edit
  - Bash
  - Grep

maxTokens: 8000`,
    tip: "Dùng cho Claude Code CLI khi bạn làm việc trong terminal nhiều hơn IDE.",
  },
  {
    name: "Skill / Plugin",
    icon: Cog,
    color: "green",
    usedIn: ["Cursor Skills", "VS Code Extensions", "Augment"],
    desc: "Plugin/Skill là cách đóng gói luật thành module có thể tái sử dụng. Cài một lần, dùng cho nhiều project. Cộng đồng có sẵn nhiều skill.",
    example: `# Cursor Skill Structure
.cursor/
  skills/
    my-coding-rules/
      SKILL.md          # Mô tả skill
      rules/
        code.md        # Quy tắc code
        architecture.md # Kiến trúc
      prompts/
        analysis.md    # Prompt mẫu`,
    tip: "Dùng skill khi bạn muốn cùng bộ luật áp dụng cho nhiều project — chỉ cần cài một lần.",
  },
  {
    name: "rules/ directory",
    icon: FolderOpen,
    color: "orange",
    usedIn: ["Nhiều tool", "Custom agent"],
    desc: "Thư mục chứa nhiều file luật riêng biệt. Mỗi file cho một domain: coding rules, architecture, testing, security... Dễ tổ chức, dễ bảo trì.",
    example: `docs/
  rules/
    coding-rules.md     # Quy tắc code
    architecture.md     # Kiến trúc hệ thống
    testing.md         # Quy tắc test
    security.md        # Bảo mật
  analysis/
    requirements.md     # Quy tắc phân tích
  prompt/
    templates.md       # Template prompt`,
    tip: "Tổ chức theo thư mục giúp luật có hệ thống, dễ tìm, dễ cập nhật từng phần.",
  },
];

const quickReference = [
  {
    tool: "Cursor",
    file: ".cursorrules / CLAUDE.md",
    auto: "Có — đọc khi mở project",
    how: "Đặt file ở thư mục gốc, dùng @ để tham chiếu",
  },
  {
    tool: "Claude Code",
    file: "CLAUDE.md / ANTHROPIC.md",
    auto: "Có — đọc khi khởi động CLI",
    how: "Đặt ở thư mục gốc, dùng /memory bổ sung",
  },
  {
    tool: "Augment",
    file: "GUIDELINES.md / augment.yaml",
    auto: "Có — đọc toàn bộ codebase",
    how: "Đặt ở thư mục gốc, @file để tham chiếu",
  },
  {
    tool: "Codex",
    file: "SYSTEM_INSTRUCTIONS.md / .codex.json",
    auto: "Có — đọc khi khởi động",
    how: "Đặt ở thư mục gốc hoặc ~/.codex/",
  },
  {
    tool: "Copilot",
    file: ".github/copilot-instructions.md",
    auto: "Có — đọc trong Copilot Chat",
    how: "Đặt trong .github/ ở thư mục gốc",
  },
  {
    tool: "Antigravity",
    file: "agent.md / rules/",
    auto: "Có — đọc khi khởi tạo agent",
    how: "Đặt ở thư mục gốc, config trong settings.json",
  },
];

export default function ResourcesGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-background to-purple-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
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
            làm việc đúng cách. Hướng dẫn này chi tiết các bước lấy tài nguyên, tích hợp vào
            các AI coding tool (Cursor, Claude Code, Augment, Codex...), và quản lý luật bằng
            nhiều format khác nhau.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-14">

        {/* ========== PHẦN 1: CÁCH LẤY VÀ DÙNG TÀI NGUYÊN (GIỮ NGUYÊN) ========== */}

        {/* Hướng dẫn bằng hình */}
        <section>
          <h2 className="text-xl font-bold mb-5">Cách lấy và dùng tài nguyên</h2>
          <div className="rounded-2xl border border-indigo-500/20 overflow-hidden">
            <div className="p-6 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Bước 1 — Tìm tài nguyên phù hợp</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Truy cập trang <strong>Tài nguyên</strong> để xem danh sách đầy đủ. Mỗi tài nguyên đều có mô tả rõ ràng, ví dụ, và template sẵn dùng.
                    Bạn cần tài nguyên nào? Quy tắc code cho project Next.js? Quy tắc phân tích yêu cầu? Hay quy tắc viết prompt?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Bước 2 — Tải file markdown về máy</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nhấn nút <strong>Tải về</strong> trên thẻ tài nguyên. File .md sẽ được tải về. Mỗi tài nguyên chứa quy tắc cụ thể, ví dụ minh hoạ, và template để copy-paste ngay vào prompt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <FolderOpen className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Bước 3 — Đặt file vào thư mục project</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tạo thư mục <code className="text-xs bg-muted px-1.5 py-0.5 rounded">docs/</code> trong project và đặt file .md vào đó. Ví dụ:
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded ml-1">docs/rules/code-rules.md</code>,
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded ml-1">docs/analysis/req-analysis.md</code>.
                    Hoặc đặt ngay cạnh file code đang làm việc.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <ClipboardPaste className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Bước 4 — Dùng với AI Agent</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Cách 1:</strong> Copy toàn bộ nội dung file .md và paste trực tiếp vào chat của AI Agent ở đầu cuộc trò chuyện.
                    <br />
                    <strong>Cách 2:</strong> Dùng tham chiếu đường dẫn trong prompt: <em>"Đọc file docs/rules/code-rules.md trước khi code"</em>.
                    Khi AI đọc được file, nó sẽ follow đúng quy tắc của dự án thay vì tự ý theo default.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-card border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Cần tài nguyên cụ thể?</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Truy cập trang Tài nguyên để xem tất cả file markdown có sẵn.</div>
                </div>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-all shrink-0"
                >
                  <Zap className="w-4 h-4" />
                  Tài nguyên
                </Link>
              </div>
            </div>
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

        {/* ========== PHẦN 2: TÍCH HỢP VÀO AI CODING TOOL (MỚI) ========== */}

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-indigo-500/5 to-purple-500/5 rounded-3xl" />
          <div className="relative">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6 text-indigo-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Tích hợp tài nguyên vào AI coding tool</h2>
                <p className="text-xs text-muted-foreground">Copy tài nguyên vào file luật của từng tool để AI tự đọc và tuân thủ</p>
              </div>
            </div>

            {/* Quick Reference Table */}
            <div className="rounded-xl border bg-card overflow-hidden mb-8">
              <div className="px-5 py-3 border-b border-border bg-muted/30">
                <div className="text-sm font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-500" />
                  Bảng tra nhanh — File luật của từng tool
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border bg-muted/20">
                      <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Tool</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">File luật chính</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Đọc tự động</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Cách dùng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quickReference.map((row) => (
                      <tr key={row.tool} className="border-b border-border/50 hover:bg-muted/10 transition-colors">
                        <td className="px-4 py-2.5 font-semibold">{row.tool}</td>
                        <td className="px-4 py-2.5 font-mono text-muted-foreground">{row.file}</td>
                        <td className="px-4 py-2.5">
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400 font-medium">
                            <CheckCircle2 className="w-2.5 h-2.5" /> {row.auto}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-muted-foreground">{row.how}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tools Detail Cards */}
        {aiTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <section key={tool.name}>
              <div className={`rounded-2xl border ${tool.border} ${tool.bg} overflow-hidden`}>
                {/* Tool Header */}
                <div className="p-6 border-b border-border/50">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-white/50 dark:bg-black/20 border ${tool.border} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-7 h-7 ${tool.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${tool.badgeBg} ${tool.badgeText}`}>{tool.badge}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-0.5">{tool.name}</h2>
                      <p className="text-sm text-muted-foreground italic mb-3">{tool.tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tool.summary}</p>
                    </div>
                    {tool.website && (
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 h-9 px-4 rounded-xl ${tool.bg} border ${tool.border} font-medium text-xs ${tool.text} hover:opacity-80 transition-all shrink-0`}
                      >
                        Website
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Rule Files */}
                <div className="p-6 border-b border-border/50">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">File luật được hỗ trợ</h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {tool.ruleFiles.map((rf) => (
                      <div key={rf.name} className="p-3 rounded-xl border bg-card">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-xs font-semibold">{rf.name}</span>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                            rf.priority === "Bắt buộc" ? "bg-red-500/10 text-red-600 dark:text-red-400" :
                            rf.priority === "Rất khuyến nghị" ? "bg-orange-500/10 text-orange-600 dark:text-orange-400" :
                            "bg-muted text-muted-foreground"
                          }`}>
                            {rf.priority}
                          </span>
                        </div>
                        <div className="text-[10px] text-muted-foreground mb-1.5">📁 {rf.location}</div>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">{rf.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How to integrate */}
                <div className="p-6 border-b border-border/50">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Cách tích hợp</h3>
                  <div className="space-y-3">
                    {tool.howTo.map((step) => (
                      <div key={step.step} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full ${tool.bg} border ${tool.border} flex items-center justify-center shrink-0 mt-0.5`}>
                          <span className={`text-[10px] font-bold ${tool.text}`}>{step.step}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">{step.action}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{step.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                {tool.skills.length > 0 && (
                  <div className="p-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Tính năng mở rộng</h3>
                    <div className="flex flex-wrap gap-2">
                      {tool.skills.map((s) => (
                        <div key={s.name} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${tool.border} ${tool.bg} text-xs`}>
                          <Cog className={`w-3 h-3 ${tool.text}`} />
                          <span className="font-medium">{s.name}</span>
                          <span className="text-muted-foreground">— {s.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {/* ========== PHẦN 3: CÁC FORMAT LƯU TRỮ LUẬT (MỚI) ========== */}

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
              <FileSearch className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Các format lưu trữ luật phổ biến</h2>
              <p className="text-xs text-muted-foreground">Mỗi format có ưu điểm riêng. Chọn format phù hợp với tool bạn dùng.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {ruleStorageFormats.map((fmt) => {
              const Icon = fmt.icon;
              const c = colorMap[fmt.color];
              return (
                <div key={fmt.name} className={`rounded-xl border ${c.border} bg-card overflow-hidden group hover:shadow-lg transition-all`}>
                  <div className={`px-4 py-3 ${c.bg} border-b ${c.border}`}>
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${c.text}`} />
                      <span className="font-mono text-sm font-bold">{fmt.name}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{fmt.desc}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {fmt.usedIn.map((tool) => (
                        <span key={tool} className="text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">{tool}</span>
                      ))}
                    </div>
                    <div className={`rounded-lg border ${c.border} bg-muted/30 p-2.5`}>
                      <pre className="text-[9px] font-mono text-muted-foreground whitespace-pre-wrap leading-relaxed overflow-x-auto">{fmt.example}</pre>
                    </div>
                    <div className="flex items-start gap-1.5 mt-3">
                      <Lightbulb className={`w-3 h-3 ${c.text} flex-shrink-0 mt-0.5`} />
                      <p className="text-[10px] text-muted-foreground">{fmt.tip}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== PHẦN 4: QUY TẮC VÀNG (MỚI) ========== */}

        <section>
          <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-indigo-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-4">Quy tắc vàng khi dùng tài nguyên với AI coding tool</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: FileText, title: "Đặt file ở thư mục gốc", desc: "Hầu hết tool chỉ đọc file ở thư mục gốc project. Không đặt trong thư mục con sâu." },
                    { icon: CheckCircle2, title: "Tên file chuẩn", desc: "Dùng đúng tên file mà tool hỗ trợ: CLAUDE.md, .cursorrules, ANTHROPIC.md... Tool không nhận diện file sai tên." },
                    { icon: BrainCircuit, title: "Ngữ cảnh quan trọng hơn prompt", desc: "File luật càng chi tiết, AI hiểu càng đúng. Đừng chỉ ghi \"follow best practices\" — hãy mô tả cụ thể practice nào." },
                    { icon: Layers, title: "Tách luật theo domain", desc: "Không nhét tất cả vào một file. Tách: coding rules, architecture, testing, prompt templates... để dễ bảo trì." },
                    { icon: Zap, title: "Review lại định kỳ", desc: "Luật cũ có thể lỗi thời. Thỉnh thoảng review và cập nhật file luật cho phù hợp với project hiện tại." },
                    { icon: MessageSquare, title: "Bổ sung bằng chat", desc: "File luật là nền tảng. Vẫn có thể bổ sung thêm bằng cách paste tài nguyên trực tiếp vào chat khi cần." },
                  ].map((item) => {
                    const Icon2 = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon2 className="w-3.5 h-3.5 text-indigo-500" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold">{item.title}</span>
                          <span className="text-sm text-muted-foreground"> — {item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PHẦN MỚI: SUPERPOWERS — HƯỚNG DẪN CHI TIẾT ========== */}

        {/* Superpowers Hero */}
        <section>
          <div className="rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 via-background to-cyan-500/5 overflow-hidden">
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-8 h-8 text-teal-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-500 text-white">SKILL FRAMEWORK</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">161k Stars</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">MIT License</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-1.5">Superpowers — Khung kỹ năng Agent</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                    Không phải tool. Là bộ quy trình giúp coding agent tự biết khi nào cần{" "}
                    <strong className="text-foreground">hỏi trước</strong>, khi nào cần{" "}
                    <strong className="text-foreground">lên kế hoạch</strong>, khi nào cần{" "}
                    <strong className="text-foreground">viết test trước</strong>, khi nào cần{" "}
                    <strong className="text-foreground">verify trước khi claim thành công</strong>.
                    Skills trigger tự động — không cần gõ lệnh.
                  </p>
                </div>
                <a
                  href="https://github.com/obra/superpowers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 h-10 px-5 rounded-xl bg-teal-500 text-white text-sm font-semibold hover:bg-teal-600 transition-all shrink-0"
                >
                  <GitBranch className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>

            {/* So sánh Workflow */}
            <div className="p-6 sm:p-8 border-b border-border/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Công dụng thần kỳ — So sánh trước và sau</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Workflow THƯỜNG */}
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-red-500/10 bg-red-500/10">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-bold text-red-600 dark:text-red-400">Không dùng Superpowers</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2.5">
                    {[
                      { step: "1", text: "Bạn: \"Thêm chức năng login\"", color: "text-muted-foreground" },
                      { step: "2", text: "Agent: Viết code luôn", color: "text-red-600 dark:text-red-400" },
                      { step: "3", text: "Bạn: \"Sai rồi, cần thêm OAuth\"", color: "text-muted-foreground" },
                      { step: "4", text: "Agent: Thêm OAuth, break something", color: "text-red-600 dark:text-red-400" },
                      { step: "5", text: "Bạn: \"Bug rồi, revert đi\"", color: "text-muted-foreground" },
                      { step: "...", text: "Lặp đi lặp lại, tốn thời gian", color: "text-red-500" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[9px] font-bold text-red-500">{item.step}</span>
                        </div>
                        <span className={`text-xs leading-relaxed ${item.color}`}>{item.text}</span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-red-500/10">
                      <div className="flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400 font-medium">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Sai scope, nhiều rework, tốn thời gian
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workflow SUPERPOWERS */}
                <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-green-500/10 bg-green-500/10">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-bold text-green-600 dark:text-green-400">Dùng Superpowers</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2.5">
                    {[
                      { step: "1", text: "Bạn: \"Thêm chức năng login\"", color: "text-muted-foreground" },
                      { step: "2", text: "Agent (brainstorming): \"OAuth hay email/password?\"", color: "text-green-600 dark:text-green-400" },
                      { step: "3", text: "Bạn: \"Chỉ email/password\"", color: "text-muted-foreground" },
                      { step: "4", text: "Agent: Trình bày thiết kế → Bạn approve", color: "text-green-600 dark:text-green-400" },
                      { step: "5", text: "Agent (plans): \"8 tasks, mỗi task 2-5 phút\"", color: "text-green-600 dark:text-green-400" },
                      { step: "6", text: "Agent (TDD): RED → GREEN → REFACTOR", color: "text-green-600 dark:text-green-400" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[9px] font-bold text-green-500">{item.step}</span>
                        </div>
                        <span className={`text-xs leading-relaxed ${item.color}`}>{item.text}</span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-green-500/10">
                      <div className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Đúng scope, ít rework, tiết kiệm thời gian
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 triết lý cốt lõi */}
            <div className="p-6 sm:p-8 border-b border-border/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">5 triết lý cốt lõi</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { icon: Target, title: "TDD", subtitle: "Test-Driven Development", desc: "Viết test trước. Luôn luôn. RED → GREEN → REFACTOR.", color: "teal" },
                  { icon: BrainCircuit, title: "Systematic", subtitle: "Quy trình hơn đoán mò", desc: "Debug có 4 giai đoạn. Fix có root cause trước.", color: "cyan" },
                  { icon: Layers, title: "YAGNI", subtitle: "Đơn giản là mục tiêu", desc: "Không thêm feature vì 'tiện tay'. Không abstraction sớm.", color: "emerald" },
                  { icon: Eye, title: "Evidence", subtitle: "Verify trước khi claim", desc: "Chưa run command → Không claim kết quả. Evidence always.", color: "amber" },
                  { icon: MessageSquare, title: "Clarify", subtitle: "Hỏi trước khi làm", desc: "Brainstorming: 1-2 câu hỏi tránh sai scope cả giờ.", color: "violet" },
                ].map((item) => {
                  const colorMapLocal: Record<string, { bg: string; text: string; border: string }> = {
                    teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20" },
                    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20" },
                    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/20" },
                    amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20" },
                    violet: { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/20" },
                  };
                  const c = colorMapLocal[item.color];
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`rounded-xl border ${c.border} bg-card p-4 hover:shadow-md transition-shadow`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-7 h-7 rounded-lg ${c.bg} flex items-center justify-center`}>
                          <Icon className={`w-3.5 h-3.5 ${c.text}`} />
                        </div>
                        <div>
                          <div className={`text-sm font-bold ${c.text}`}>{item.title}</div>
                          <div className="text-[10px] text-muted-foreground">{item.subtitle}</div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quy trình 7 bước */}
            <div className="p-6 sm:p-8 border-b border-border/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Quy trình 7 bước làm việc</h3>
              <div className="space-y-3">
                {[
                  { num: 1, name: "Brainstorming", skill: "brainstorming", desc: "Agent hỏi Socratic để hiểu rõ yêu cầu. Trình bày thiết kế thành từng phần nhỏ để bạn xác nhận.", color: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20", trigger: "Bạn nói \"Thêm tính năng X\", \"Build Y\", \"Tạo Z\"" },
                  { num: 2, name: "Git Worktrees", skill: "using-git-worktrees", desc: "Tạo workspace cô lập trên branch mới. Setup project, verify baseline sạch.", color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20", trigger: "Sau khi design được approve" },
                  { num: 3, name: "Writing Plans", skill: "writing-plans", desc: "Break work thành task nhỏ 2-5 phút. Mỗi task có: file path + code + verification step.", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20", trigger: "Khi design được approve" },
                  { num: 4, name: "Subagent-Driven / Executing Plans", skill: "subagent-driven-development", desc: "Dispatch agent con cho từng task. Review 2 giai đoạn: spec compliance → code quality. Checkpoint giữa các task.", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20", trigger: "Khi có plan" },
                  { num: 5, name: "Test-Driven Development", skill: "test-driven-development", desc: "RED: viết test fail. GREEN: viết code minimal cho test pass. REFACTOR: dọn code. Commit.", color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20", trigger: "Khi implement từng task" },
                  { num: 6, name: "Requesting Code Review", skill: "requesting-code-review", desc: "Review dựa trên plan. Báo cáo issue theo mức độ nghiêm trọng. Critical → block tiến độ.", color: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20", trigger: "Giữa các task" },
                  { num: 7, name: "Finishing Development Branch", skill: "finishing-a-development-branch", desc: "Verify tests. Trình bày options: merge / PR / keep / discard. Cleanup worktree.", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20", trigger: "Khi tasks hoàn tất" },
                ].map((step, i) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 bg-gradient-to-br ${step.color}`}>
                      <span className="text-xs font-bold">{step.num}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className="text-sm font-bold">{step.name}</span>
                        <code className="text-[10px] font-mono bg-muted px-1.5 py-0.5 rounded">{step.skill}</code>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-1">{step.desc}</p>
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <Target className="w-3 h-3 text-teal-500" />
                        <span className="font-medium text-muted-foreground">Trigger:</span>
                        <span>{step.trigger}</span>
                      </div>
                    </div>
                    {i < 6 && (
                      <div className="absolute left-[22px] sm:left-[26px] mt-8 w-px h-3 bg-border/50" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Thư viện skills chi tiết */}
            <div className="p-6 sm:p-8 border-b border-border/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Thư viện Skills — Chi tiết từng skill</h3>
              <div className="space-y-4">
                {[
                  {
                    category: "Testing",
                    icon: Bug,
                    color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
                    skills: [
                      { name: "test-driven-development", desc: "RED-GREEN-REFACTOR cycle. Viết test trước, code sau, refactor sau. Đi kèm testing-anti-patterns reference.", benefit: "95% first-time fix rate vs 40%" },
                    ],
                  },
                  {
                    category: "Debugging",
                    icon: Bug,
                    color: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
                    skills: [
                      { name: "systematic-debugging", desc: "Root cause 4 giai đoạn: đọc lỗi → reproduce → check changes → trace data. Đi kèm root-cause-tracing, defense-in-depth, condition-based-waiting.", benefit: "15-30 phút fix vs 2-3 giờ guesswork" },
                      { name: "verification-before-completion", desc: "Evidence before claims. Không claim 'xong' khi chưa run verification command. Gate: IDENTIFY → RUN → READ → VERIFY → THEN claim.", benefit: "Không còn 'Tưởng xong rồi'" },
                    ],
                  },
                  {
                    category: "Collaboration",
                    icon: Users,
                    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
                    skills: [
                      { name: "brainstorming", desc: "Đặt câu hỏi Socratic để tinh chỉnh thiết kế. 1 câu mỗi lượt. Nhiều lựa chọn kèm trade-offs. Đi kèm visual-companion.", benefit: "Tránh sai scope từ đầu" },
                      { name: "writing-plans", desc: "Break work thành task nhỏ 2-5 phút. Mỗi task có file path + complete code + verification command. No placeholders.", benefit: "Junior engineer có thể follow" },
                      { name: "subagent-driven-development", desc: "Dispatch fresh subagent cho từng task. Two-stage review: spec compliance → code quality. Checkpoint giữa các task.", benefit: "Fast iteration, autonomous trong vài giờ" },
                      { name: "dispatching-parallel-agents", desc: "Nhiều agent đồng thời cho independent tasks. Review sau mỗi batch.", benefit: "Tiết kiệm thời gian với nhiều task" },
                      { name: "requesting-code-review", desc: "Review checklist: scope, layer, contract, permission, shared surface, test coverage, docs. Báo cáo theo mức độ nghiêm trọng.", benefit: "Không bỏ sót lỗi trước khi merge" },
                      { name: "receiving-code-review", desc: "Nhận feedback có tính kỹ thuật. Verify trước khi accept. Không accept mù quáng.", benefit: "Feedback chất lượng" },
                      { name: "using-git-worktrees", desc: "Workspace cô lập trên branch mới. Không conflict với work đang làm. Cleanup khi xong.", benefit: "An toàn khi experiment" },
                      { name: "finishing-a-development-branch", desc: "Verify tests. Present options: merge / PR / keep / discard. Cleanup worktree.", benefit: "Sạch sẽ, không遗留" },
                    ],
                  },
                  {
                    category: "Meta",
                    icon: Wrench,
                    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
                    skills: [
                      { name: "writing-skills", desc: "Tạo skill mới theo best practices. TDD cho documentation: viết test → viết skill → verify → close loopholes. Đi kèm testing methodology.", benefit: "Tự tạo workflow riêng" },
                      { name: "using-superpowers", desc: "Giới thiệu hệ thống skills. Tự động trigger khi phù hợp. Không cần gõ lệnh.", benefit: "Skills tự tìm bạn" },
                    ],
                  },
                ].map((group) => {
                  const Icon = group.icon;
                  return (
                    <div key={group.category} className="rounded-xl border bg-card overflow-hidden">
                      <div className={`flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${group.color} bg-opacity-5 border-b border-border/50`}>
                        <Icon className="w-4 h-4" />
                        <span className="text-xs font-bold">{group.category}</span>
                      </div>
                      <div className="divide-y divide-border/50">
                        {group.skills.map((skill) => (
                          <div key={skill.name} className="px-4 py-3 flex items-start gap-3">
                            <code className="font-mono text-[10px] bg-muted px-1.5 py-1 rounded border shrink-0 mt-0.5">{skill.name}</code>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                              <div className="flex items-center gap-1.5 mt-1.5">
                                <Sparkles className="w-3 h-3 text-teal-500" />
                                <span className="text-[10px] font-medium text-teal-600 dark:text-teal-400">{skill.benefit}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cài đặt theo từng tool */}
            <div className="p-6 sm:p-8 border-b border-border/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Cài đặt Superpowers — Theo từng tool</h3>
              <div className="space-y-2">
                {[
                  { tool: "Cursor", cmd: "/add-plugin superpowers", note: "Hoặc tìm 'superpowers' trong plugin marketplace", color: "violet" },
                  { tool: "Claude Code", cmd: "/plugin install superpowers@claude-plugins-official", note: "Marketplace chính thức Anthropic", color: "amber" },
                  { tool: "Codex CLI", cmd: "/plugins → tìm Superpowers → Install Plugin", note: "OpenAI's coding agent", color: "green" },
                  { tool: "Copilot CLI", cmd: "copilot plugin install superpowers@superpowers-marketplace", note: "GitHub Copilot agent mode", color: "blue" },
                  { tool: "Gemini CLI", cmd: "gemini extensions install https://github.com/obra/superpowers", note: "Google's agent CLI", color: "cyan" },
                  { tool: "OpenCode", cmd: "Tham khảo .opencode/INSTALL.md trên GitHub repo", note: "OpenSource coding agent", color: "pink" },
                ].map((item) => {
                  const colorMapLocal: Record<string, string> = {
                    violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
                    amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                    green: "bg-green-500/10 text-green-600 dark:text-green-400",
                    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
                    cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
                    pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
                  };
                  return (
                    <div key={item.tool} className="flex items-center gap-3 px-4 py-2.5 rounded-xl border bg-card">
                      <span className={`w-20 text-xs font-bold shrink-0 ${colorMapLocal[item.color]}`}>{item.tool}</span>
                      <code className="flex-1 text-xs font-mono text-muted-foreground truncate">{item.cmd}</code>
                      <span className="text-[10px] text-muted-foreground shrink-0 hidden sm:block">{item.note}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3 điều đặc biệt */}
            <div className="p-6 sm:p-8 border-b border-border/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">3 điều đặc biệt của Superpowers</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: PlayCircle,
                    title: "Skills trigger TỰ ĐỘNG",
                    desc: "Không cần gõ lệnh. Agent nhận diện tình huống và kích hoạt skill phù hợp. Nói \"Thêm tính năng\" → Agent tự gọi brainstorming. Nói \"Fix bug\" → Agent tự gọi systematic-debugging.",
                    badge: "Không cần nhớ lệnh",
                    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
                  },
                  {
                    icon: RefreshCw,
                    title: "Chạy CROSS-PLATFORM",
                    desc: "Một bộ skills dùng cho Claude Code, Cursor, Codex, Gemini, Copilot, OpenCode. Không cần học lại khi đổi tool. Skills viết 1 lần, chạy mọi nơi.",
                    badge: "161k stars, MIT License",
                    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
                  },
                  {
                    icon: ListChecks,
                    title: "Có CHECKLIST và RED FLAGS",
                    desc: "Mỗi skill có checklist cụ thể và red flags để agent tự nhận biết khi đang vi phạm quy trình. Rationalization table chống lời ngụy biện. Không 'tôi hiểu rồi' — phải đi qua process.",
                    badge: "Chống rationalization",
                    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`rounded-xl border ${item.color} bg-opacity-5 p-5`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-bold">{item.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-current/10">{item.badge}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lợi ích thực tế */}
            <div className="p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Lợi ích thực tế khi dùng Superpowers</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: CheckCircle2, text: "Không sai scope từ đầu — 1-2 câu hỏi tiết kiệm cả giờ làm lại", color: "text-green-500" },
                  { icon: CheckCircle2, text: "Bug fix nhanh hơn 3-5 lần — systematic debugging thay vì guesswork", color: "text-green-500" },
                  { icon: CheckCircle2, text: "Code sạch hơn — TDD ép viết test trước, không skip được", color: "text-green-500" },
                  { icon: CheckCircle2, text: "Không còn 'tưởng xong rồi' — verification gate bắt buộc", color: "text-green-500" },
                  { icon: CheckCircle2, text: "Agent làm việc autonomous vài giờ không lệch kế hoạch", color: "text-green-500" },
                  { icon: CheckCircle2, text: "Multi-agent an toàn — checkpoint + review + handoff chuẩn", color: "text-green-500" },
                  { icon: CheckCircle2, text: "Skills trigger tự động — không cần nhớ gọi lệnh gì", color: "text-green-500" },
                  { icon: CheckCircle2, text: "Cross-platform — đổi tool không cần học lại workflow", color: "text-green-500" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-start gap-2.5">
                      <Icon className={`w-4 h-4 ${item.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-xs text-muted-foreground leading-relaxed">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========== PHẦN CŨ: Công cụ hỗ trợ + Lợi ích ========== */}

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
            {[
              { label: "Tài nguyên", href: "/resources", desc: "Xem và tải tài nguyên" },
              { label: "Quy tắc viết Prompt", href: "/guide/prompt", desc: "Dùng quy tắc prompt cùng tài nguyên" },
              { label: "Quy trình thực chiến", href: "/workflow", desc: "Áp dụng tài nguyên vào workflow" },
              { label: "Dùng AI để nghiên cứu", href: "/guide/ai-research", desc: "Chọn đúng tool cho đúng việc" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group">
                <div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">{item.label}</div>
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
