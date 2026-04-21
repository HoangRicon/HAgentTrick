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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hướng dẫn sử dụng tài nguyên",
  description: "Hướng dẫn lấy tài nguyên từ trang Tài nguyên và bỏ vào AI Agent để tăng cường khả năng làm việc.",
};

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
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20" },
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
