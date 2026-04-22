"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Workflow,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
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
  XCircle,
  BookOpen,
  Brain,
  Sparkles,
  Cpu,
  Package,
  HelpCircle,
  ChevronDown,
  Lock,
  Zap,
  ExternalLink,
} from "lucide-react";
import { PhaseAccordion } from "@/components/workflow/phase-accordion";
import { phases, phaseColors, phaseIconMap } from "@/lib/workflow-phases";
import { cn } from "@/lib/utils";

const phaseIconFromName = (name: string) => phaseIconMap[name] || Lightbulb;

const realExamples = [
  {
    phase: "Power",
    badge: "Bước 1",
    color: "cyan",
    title: "Xác định sức mạnh AI — Chọn model phù hợp cho từng task",
    scenario: "Bạn có một dự án Next.js với 50+ files. AI model hiện tại có thể phân tích toàn bộ project trong một lần giao việc. Bạn cần biết model đó mạnh đến đâu để tận dụng.",
    promptExample: {
      label: "Không xác định sức mạnh AI (sai cách)",
      code: `Viết cho tôi chức năng login`,
    },
    promptBetter: {
      label: "Xác định sức mạnh AI trước khi giao việc (đúng cách)",
      code: `Model đang dùng: Claude Opus 4.7 (200K context, mạnh về reasoning dài, phân tích project lớn)

Task hiện tại: Phân tích dự án Next.js 50 files → sinh module auth hoàn chỉnh
→ Giao: phân tích + thiết kế + code generation (model đủ sức)

Task tiếp theo: viết unit test cho 1 file
→ Giao: model nhẹ hơn (Sonnet / GPT-4o-mini) cho nhanh và rẻ

Luôn ghi rõ: "Model này đủ sức làm X. Chỉ làm Y nếu model yếu hơn."`,
    },
    expectedResult: "Bạn biết rõ model nào làm gì. Model mạnh làm việc lớn, model nhẹ làm việc nhỏ. Tối ưu chi phí + chất lượng.",
  },
  {
    phase: "Plan",
    badge: "Bước 2",
    color: "amber",
    title: "Phân tích yêu cầu chức năng",
    scenario: "Bạn cần thêm chức năng vào dự án Next.js có sẵn. AI model đã được xác định là đủ mạnh. Bước tiếp theo: phân tích kỹ trước khi code.",
    promptExample: {
      label: "Prompt ban đầu (sai cách)",
      code: `Thêm chức năng login cho tôi`,
    },
    promptBetter: {
      label: "Prompt đúng cách (sau khi phân tích)",
      code: `Thêm chức năng đăng nhập email/password cho dự án Next.js 14 App Router.

**Ngữ cảnh dự án:**
- Framework: Next.js 14 App Router, TypeScript
- Database: Prisma + PostgreSQL
- Auth hiện tại: Chưa có, đang dùng mock user
- UI: Tailwind CSS, component library có sẵn

**Yêu cầu cụ thể:**
- Đăng nhập bằng email + password (không social login)
- Hash password bằng bcrypt
- Tạo session JWT, lưu trong httpOnly cookie
- Middleware bảo vệ route /dashboard

**Actor & Entity:**
- User: đăng ký, đăng nhập, đăng xuất
- Session: tạo khi login, xóa khi logout

**Build Order:**
1. Prisma schema (User model)
2. API route: /api/auth/register
3. API route: /api/auth/login
4. API route: /api/auth/logout
5. Middleware bảo vệ route
6. UI form đăng nhập`,
    },
    expectedResult: "Agent trả lời bằng thiết kế chi tiết: Auth flow, Database schema, API endpoints, rồi đợi bạn xác nhận trước khi code.",
  },
  {
    phase: "Prepare",
    badge: "Bước 3",
    color: "violet",
    title: "Chuẩn bị tài nguyên cho dự án mới",
    scenario: "Trước khi bắt đầu build, bạn cần tập hợp mọi thứ AI cần: project skeleton, UI kit, documentation, convention. Chuẩn bị càng kỹ, code càng ít lỗi.",
    promptExample: {
      label: "Không chuẩn bị tài nguyên (sai cách)",
      code: `Code cho tôi một trang dashboard đẹp`,
    },
    promptBetter: {
      label: "Chuẩn bị tài nguyên đầy đủ (đúng cách)",
      code: `Chuẩn bị trước khi code:

**Project skeleton:** Next.js 14 App Router, Tailwind CSS, TypeScript
**UI Kit đã có:** shadcn/ui components
**Icon set:** Lucide React
**Convention docs:** src/CONVENTIONS.md (naming, structure)

**Yêu cầu:** Thêm trang dashboard sử dụng components có sẵn từ shadcn/ui. Không viết lại components đã tồn tại.

**Checklist:**
- [ ] Dashboard page: src/app/dashboard/page.tsx
- [ ] Sử dụng Card, Table, Badge từ shadcn/ui
- [ ] Responsive, dark mode support
- [ ] Không thêm dependency mới`,
    },
    expectedResult: "AI biết rõ project structure, dùng đúng components có sẵn, tuân thủ convention. Code xuất ra gọn gàng, không thừa.",
  },
  {
    phase: "Build",
    badge: "Bước 4",
    color: "blue",
    title: "Từng module một — Không nhảy cóc",
    scenario: "Sau khi design được approve, bạn bắt đầu code từng phần nhỏ. Với model mạnh như Opus 4.7, mỗi module có thể lớn hơn trước (2-5 files thay vì 1-2 files), nhưng vẫn phải giữ scope chặt.",
    promptExample: {
      label: "Sai: Yêu cầu quá nhiều một lúc",
      code: `Viết toàn bộ chức năng login cho tôi đi`,
    },
    promptBetter: {
      label: "Đúng: Từng bước cụ thể",
      code: `Chỉ làm task này thôi: Thêm Prisma schema cho User model.

**File cần sửa:** prisma/schema.prisma

**Yêu cầu:**
- Model User với fields: id, email (unique), password (hashed)
- Thêm relations nếu có models liên quan
- Không thay đổi các model khác

**Sau khi xong:** Chạy \`npx prisma validate\` để verify`,
    },
    expectedResult: "Agent chỉ làm đúng phần được yêu cầu. Không thừa, không thiếu. Dễ review, dễ revert nếu sai.",
  },
  {
    phase: "Review",
    badge: "Bước 5",
    color: "green",
    title: "Review từng dòng — Không skip",
    scenario: "Sau mỗi lần AI sinh code, bạn review trước khi tiếp tục. Dù model có mạnh đến đâu, review vẫn là bước bắt buộc.",
    checklist: [
      { label: "Đúng thiết kế?", icon: CheckCheck, pass: "Code match với spec đã approve" },
      { label: "Logic đúng?", icon: CheckCheck, pass: "Flow auth hoạt động đúng" },
      { label: "Type-safe?", icon: CheckCheck, pass: "Không có any, types rõ ràng" },
      { label: "Secure?", icon: Shield, pass: "Password hashed, JWT httpOnly cookie" },
      { label: "Scope đúng?", icon: CheckCircle2, pass: "Chỉ sửa đúng phần được yêu cầu" },
      { label: "Test pass?", icon: CheckCircle2, pass: "Chạy test sau mỗi task" },
    ],
    promptExample: {
      label: "Prompt để AI tự review",
      code: `Review code vừa sinh theo checklist:
1. Spec compliance - có đúng thiết kế không?
2. Code quality - type-safe, clean, secure?
3. Logic correctness - flow hoạt động đúng?
4. Edge cases - xử lý được error cases không?

Nếu có critical issue → dừng lại, hỏi tôi trước khi fix.`,
    },
    promptBetter: {
      label: "Khi phát hiện lỗi",
      code: `Phát hiện lỗi ở API route /api/auth/login:
- Không validate email format
- Không handle wrong password error

Yêu cầu AI fix ngay, sau đó verify lại. Không để dồn.`,
    },
    expectedResult: "Mỗi task được verify kỹ. Lỗi được phát hiện và fix sớm, không tích lũy.",
  },
  {
    phase: "Ship",
    badge: "Bước 6",
    color: "purple",
    title: "Commit nhỏ, commit sớm — Mỗi bước là một checkpoint",
    scenario: "Sau khi task hoàn tất và verify, bạn commit ngay. Không đợi build xong cả dự án mới commit.",
    promptExample: {
      label: "Commit message chuẩn",
      code: `git add prisma/schema.prisma
git commit -m "feat(auth): add User model for authentication

- Add email (unique) and passwordHash fields
- Add relation to existing models
- Validate schema with prisma validate"`,
    },
    promptBetter: {
      label: "Sau khi hoàn tất feature",
      code: `Hoàn tất feature login. Tất cả tests pass. Commit vào branch feature/login.

Nếu muốn tạo PR:
- Kiểm tra tests một lần nữa
- Trình bày options: merge / PR / keep / discard
- Cleanup workspace`,
    },
    expectedResult: "Mỗi commit là một điểm rollback an toàn. Không bao giờ mất nhiều hơn 10 phút work.",
  },
];

const comparisonData = {
  title: "So sánh: Không dùng workflow vs Dùng workflow",
  before: {
    title: "Workflow tự do (thường gặp)",
    items: [
      "Yêu cầu AI code ngay, không phân tích trước",
      'Prompt chung chung: "Thêm chức năng login"',
      "AI code cả dự án một lần, rồi mới review",
      "Lỗi tích lũy nhiều → khó debug",
      "Commit 500+ dòng, khó revert",
      "AI tự đoán → thường sai spec",
    ],
  },
  after: {
    title: "Workflow có quy trình (Power → Plan → Chuẩn bị → Build → Review → Ship)",
    items: [
      "Xác định sức mạnh AI trước khi giao việc",
      "Phân tích kỹ trước khi nhờ AI code",
      "Chuẩn bị tài nguyên (template, UI kit, convention) trước khi code",
      "Mỗi lần chỉ code 2-5 files",
      "Lỗi được phát hiện và fix ngay",
      "Commit nhỏ, mỗi commit là checkpoint",
    ],
  },
};

function PhaseDetailCard({ example }: { example: typeof realExamples[number] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pc = phaseColors[example.color];
  const Icon = phaseIconFromName(phases.find(p => p.phase === example.phase)?.iconName || "Lightbulb");

  return (
    <div id={`phase-${example.phase.toLowerCase()}`} className="rounded-2xl border bg-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full pl-6 pr-5 py-5 text-left cursor-pointer flex items-center gap-4 hover:bg-muted/20 transition-colors"
      >
        <div className={cn(
          "w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 shadow-md transition-all",
          pc.bg,
          pc.border,
          isOpen && "scale-105"
        )}>
          <Icon className={cn("w-5 h-5", pc.text)} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={cn("px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest", pc.badge, pc.badgeText)}>
              {example.badge}
            </span>
            <span className={cn("text-[10px] font-black uppercase tracking-widest", pc.text)}>{example.phase}</span>
          </div>
          <h3 className="text-base font-bold leading-tight">{example.title}</h3>
        </div>
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-300",
          isOpen ? pc.bg : "bg-transparent",
          isOpen ? pc.border : "border-border/50"
        )}>
          <ChevronDown className={cn(
            "w-4 h-4 transition-all duration-300",
            isOpen ? pc.text : "text-muted-foreground",
            isOpen && "rotate-180"
          )} />
        </div>
      </button>

      <div className={cn(
        "overflow-hidden transition-all duration-500",
        isOpen ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-6 pb-6 pl-6">
          <div className="h-px bg-gradient-to-r from-border/50 via-border/20 to-transparent mb-5" />

          {/* Scenario */}
          <div className={cn("rounded-xl border p-5 mb-4", pc.border, pc.bg)}>
            <div className="flex items-start gap-2.5">
              <BookOpen className={cn("w-4 h-4 flex-shrink-0 mt-0.5", pc.text)} />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Scenario</span>
                <p className="text-sm mt-1 leading-relaxed">{example.scenario}</p>
              </div>
            </div>
          </div>

          {/* Power */}
          {example.phase === "Power" && (
            <div className={cn("rounded-xl border p-6 mb-4", pc.border, pc.bg)}>
              <div className="flex items-center gap-3 mb-5">
                <div className={cn("w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0", pc.bg, pc.border)}>
                  <Cpu className={cn("w-5 h-5", pc.text)} />
                </div>
                <div>
                  <div className="text-base font-semibold">Chọn model phù hợp — Lúc nào dùng, lúc nào tránh</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Mỗi model có thế mạnh riêng. Dùng đúng model cho đúng task: tiết kiệm token, tăng chất lượng code, giảm hallucination.</div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    model: "Claude Opus 4.7",
                    tier: "Mạnh nhất",
                    tierColor: "text-orange-600 dark:text-orange-400",
                    tierBg: "bg-orange-500/10",
                    tokens: "200K context",
                    cost: " Cao",
                    desc: "Model mạnh nhất hiện tại. Reasoning dài, phân tích project lớn, hiểu kiến trúc phức tạp.",
                    bestFor: ["Phân tích toàn bộ dự án 50+ files", "Thiết kế kiến trúc hệ thống lớn", "Build module phức tạp (auth, payment)", "Code review sâu, tìm lỗi logic khó"],
                    avoidFor: ["Sửa typo đơn giản", "Viết comment hoặc format code", "Task lặp đi lặp lại nhiều lần"],
                  },
                  {
                    model: "GPT-4o / Claude Sonnet 4",
                    tier: "Cân bằng",
                    tierColor: "text-blue-600 dark:text-blue-400",
                    tierBg: "bg-blue-500/10",
                    tokens: "128K context",
                    cost: " Trung bình",
                    desc: "Cân bằng giữa chi phí và chất lượng. Làm được hầu hết mọi task với thời gian hợp lý.",
                    bestFor: ["Viết API route, endpoint mới", "Tạo component UI từ mockup", "Refactor 2-5 files cùng lúc", "Debug logic vừa phải"],
                    avoidFor: ["Dự án quá lớn (>20 files)", "Thiết kế kiến trúc toàn bộ hệ thống"],
                  },
                  {
                    model: "GPT-4o-mini / Haiku",
                    tier: "Nhẹ & nhanh",
                    tierColor: "text-emerald-600 dark:text-emerald-400",
                    tierBg: "bg-emerald-500/10",
                    tokens: "128K context",
                    cost: " Thấp",
                    desc: "Chi phí thấp nhất, tốc độ nhanh nhất. Phù hợp task đơn giản, lặp đi lặp lại.",
                    bestFor: ["Sửa lỗi nhỏ, fix typo", "Viết unit test đơn giản", "Format, clean code", "Tạo mock data"],
                    avoidFor: ["Task phức tạp, nhiều logic nghiệp vụ", "Thiết kế feature mới", "Code review có tính kiến trúc"],
                  },
                ].map((m) => (
                  <div key={m.model} className="flex flex-col rounded-xl border bg-card overflow-hidden">
                    <div className={cn("px-4 py-3 border-b border-border", m.tierBg)}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Model</span>
                        <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full", m.tierBg, m.tierColor)}>{m.tier}</span>
                      </div>
                      <div className="font-bold text-sm">{m.model}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-muted-foreground">{m.tokens}</span>
                        <span className="text-[10px] text-muted-foreground">|</span>
                        <span className="text-[10px] text-muted-foreground">Chi phí{m.cost}</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-3 flex-1">
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{m.desc}</p>
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Dùng khi
                        </div>
                        {m.bestFor.map((b) => (
                          <div key={b} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            {b}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1.5 flex items-center gap-1">
                          <XCircle className="w-2.5 h-2.5" /> Tránh khi
                        </div>
                        {m.avoidFor.map((a) => (
                          <div key={a} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                            <XCircle className="w-2.5 h-2.5 text-red-500 flex-shrink-0 mt-0.5" />
                            {a}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-border bg-muted/20 p-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 text-center">Bảng chọn nhanh theo task</div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {[
                    { task: "Phân tích project lớn", model: "Opus 4.7", color: "text-orange-500" },
                    { task: "Thiết kế kiến trúc", model: "Opus 4.7", color: "text-orange-500" },
                    { task: "Viết API route", model: "GPT-4o / Sonnet", color: "text-blue-500" },
                    { task: "Tạo component UI", model: "GPT-4o / Sonnet", color: "text-blue-500" },
                    { task: "Refactor 2-5 files", model: "GPT-4o / Sonnet", color: "text-blue-500" },
                    { task: "Sửa lỗi nhỏ", model: "GPT-4o-mini", color: "text-emerald-500" },
                    { task: "Format / clean code", model: "GPT-4o-mini", color: "text-emerald-500" },
                    { task: "Viết unit test đơn giản", model: "GPT-4o-mini", color: "text-emerald-500" },
                  ].map((row) => (
                    <div key={row.task} className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-background/60 border border-border">
                      <span className="text-[10px] text-muted-foreground">{row.task}</span>
                      <span className={cn("text-[9px] font-bold", row.color)}>{row.model}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <Link href="/guide/prompt" className={cn("inline-flex items-center gap-2 h-10 px-5 rounded-xl font-medium text-sm hover:opacity-80 transition-all", pc.bg, pc.border, "border")}>
                  <BookOpen className={cn("w-4 h-4", pc.text)} />
                  Xem hướng dẫn sử dụng nhiều AI model
                  <ArrowRight className={cn("w-4 h-4", pc.text)} />
                </Link>
              </div>
            </div>
          )}

          {/* Plan */}
          {example.phase === "Plan" && (
            <div className={cn("rounded-xl border p-6 mb-4", pc.border, pc.bg)}>
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">Tại sao bước này quan trọng nhất?</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Nhảy thẳng vào code mà không phân tích → AI tự đoán requirement → đoán thì thường sai → sửa lại mất gấp đôi thời gian. Bước phân tích 15 phút đầu tiết kiệm được 2-3 giờ refactor sau.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  { title: "1. Xác định Actor (Tác nhân)", icon: Brain, items: ["Admin — quản lý toàn bộ hệ thống", "User — chỉ dùng feature của chính mình", "Guest — chưa đăng nhập, chỉ xem nội dung công khai", "System — API integrations, cron jobs"] },
                  { title: "2. Xác định Entity (Thực thể)", icon: Layers, items: ["User — id, email, passwordHash, role", "Post — id, title, content, authorId, status", "Comment — id, content, authorId, postId", "Quan hệ: User 1→N Post →N Comment"] },
                  { title: "3. Xác định Ownership (Sở hữu)", icon: Shield, items: ["Ai tạo dữ liệu? → Chỉ owner + admin", "Ai xem được? → Owner xem của mình, admin xem tất cả", "Ai sửa được? → Chỉ owner sửa của mình", "Ai xóa được? → Admin hoặc owner"] },
                  { title: "4. Xác định Permission (Phân quyền)", icon: Lock, items: ["CRUD: Create, Read, Update, Delete", "Field-level: trường nào ẩn, readonly", "Row-level: dòng nào được xem", "Action-level: approve, reject, publish..."] },
                ].map((card) => (
                  <div key={card.title} className="rounded-lg border bg-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                        <card.icon className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                      <div className="text-xs font-semibold">{card.title}</div>
                    </div>
                    <div className="space-y-1">
                      {card.items.map((item) => (
                        <div key={item} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                          <CheckCircle2 className="w-2.5 h-2.5 text-amber-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">5. Thứ tự xây dựng (Build Order)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { step: "1. Auth", desc: "Đăng nhập, đăng ký" },
                    { step: "2. Foundation", desc: "Layout, theme, nav" },
                    { step: "3. Entities", desc: "Schema + CRUD" },
                    { step: "4. Core Flow", desc: "Feature chính" },
                    { step: "5. Support", desc: "Search, filter..." },
                    { step: "6. Polish", desc: "Loading, error..." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/80 border border-border">
                      <span className="text-[10px] font-semibold">{s.step}</span>
                      <span className="text-[9px] text-muted-foreground">— {s.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/5 p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Câu hỏi Socratic — Hỏi AI trước khi code</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { q: "Actor nào sẽ dùng tính năng này?", hint: "Admin, user thường?" },
                    { q: "Entity nào liên quan?", hint: "Tên, mối quan hệ?" },
                    { q: "Ai được phép thực hiện action này?", hint: "Chỉ owner, hay admin?" },
                    { q: "Edge case nào có thể xảy ra?", hint: "Empty state, error..." },
                  ].map((item) => (
                    <div key={item.q} className="flex items-start gap-2 p-2 rounded bg-background/60 border border-border">
                      <HelpCircle className="w-3 h-3 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] font-semibold text-muted-foreground">{item.q}</div>
                        <div className="text-[9px] text-muted-foreground/70">{item.hint}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/guide/analysis" className={cn("inline-flex items-center gap-2 h-10 px-5 rounded-xl font-medium text-sm hover:opacity-80 transition-all", pc.bg, pc.border, "border")}>
                <BookOpen className={cn("w-4 h-4", pc.text)} />
                Xem hướng dẫn phân tích yêu cầu chi tiết
                <ArrowRight className={cn("w-4 h-4", pc.text)} />
              </Link>
            </div>
          )}

          {/* Prepare */}
          {example.phase === "Prepare" && (
            <div className={cn("rounded-xl border p-6 mb-4", pc.border, pc.bg)}>
              <div className="flex items-center gap-3 mb-5">
                <div className={cn("w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0", pc.bg, pc.border)}>
                  <Package className={cn("w-5 h-5", pc.text)} />
                </div>
                <div>
                  <div className="text-base font-semibold">Hướng dẫn sử dụng tài nguyên</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Cách lấy tài nguyên từ trang Tài nguyên và tích hợp vào AI Agent.</div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {[
                  { step: 1, title: "Tìm tài nguyên phù hợp", desc: "Truy cập trang Tài nguyên để xem danh sách đầy đủ." },
                  { step: 2, title: "Tải file markdown về máy", desc: "Mỗi tài nguyên đều có nút Tải về ngay trên thẻ." },
                  { step: 3, title: "Đặt file vào thư mục phù hợp", desc: "docs/rules/ cho quy tắc code, docs/analysis/ cho quy tắc phân tích." },
                  { step: 4, title: "Copy nội dung vào AI Agent", desc: "Paste vào cuộc trò chuyện hoặc dùng tham chiếu đường dẫn." },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                    <div className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-violet-600 dark:text-violet-400">{s.step}</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5">{s.title}</div>
                      <div className="text-[10px] text-muted-foreground leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-3 mb-5">
                {[
                  { title: "Duy trì tính nhất quán", desc: "AI Agent follow đúng quy tắc của dự án" },
                  { title: "Giảm lỗi sinh code", desc: "Nguyên tắc rõ ràng giúp AI hiểu đúng yêu cầu" },
                  { title: "Tăng tốc độ", desc: "Không cần giải thích lại quy tắc mỗi lần" },
                ].map((b) => (
                  <div key={b.title} className="flex items-start gap-2 p-3 rounded-lg border bg-card">
                    <Sparkles className="w-3.5 h-3.5 text-violet-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-semibold">{b.title}</div>
                      <div className="text-[9px] text-muted-foreground leading-relaxed">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/guide/resources" className={cn("inline-flex items-center gap-2 h-10 px-5 rounded-xl font-medium text-sm hover:opacity-80 transition-all", pc.bg, pc.border, "border")}>
                <BookOpen className={cn("w-4 h-4", pc.text)} />
                Xem hướng dẫn sử dụng tài nguyên
                <ArrowRight className={cn("w-4 h-4", pc.text)} />
              </Link>
            </div>
          )}

          {/* Build */}
          {example.phase === "Build" && (
            <div className={cn("rounded-xl border p-6 mb-4", pc.border, pc.bg)}>
              <div className="flex items-center gap-3 mb-5">
                <div className={cn("w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0", pc.bg, pc.border)}>
                  <Code2 className={cn("w-5 h-5", pc.text)} />
                </div>
                <div>
                  <div className="text-base font-semibold">Từng module một — Không nhảy cóc</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Nguyên tắc cốt lõi: mỗi task chỉ 2-5 files, có checkpoint. Review kỹ trước khi tiếp.</div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 mb-5">
                {[
                  { title: "Nguyên tắc vàng", items: ["Mỗi task chỉ 2-5 files", "Có checkpoint sau mỗi task", "Review kỹ trước khi tiếp task mới", "Dễ rollback nếu sai"] },
                  { title: "Cách xác định scope", items: ["1 feature nhỏ = 1 task", "File path chính xác", "Yêu cầu rõ ràng từng dòng", "Không gộp chung nhiều thứ"] },
                  { title: "Quy trình thực hiện", items: ["Xác định task cần làm", "Yêu cầu AI viết code", "Review chi tiết từng dòng", "Verify → Commit → Task tiếp"] },
                ].map((section, si) => (
                  <div key={si} className="flex flex-col p-3 rounded-lg border bg-card">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">{section.title}</div>
                    {section.items.map((item) => (
                      <div key={item} className="flex items-start gap-1.5 text-[10px] text-muted-foreground mb-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-border bg-muted/20 p-4 mb-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Dấu hiệu task quá lớn</div>
                <div className="flex flex-wrap gap-2">
                  {["AI bắt đầu hallucinate", "Import sai file", "Review mất hơn 10 phút", "Nhiều hơn 5 files/task"].map((sign) => (
                    <span key={sign} className="inline-flex items-center px-2 py-1 rounded-md bg-red-500/5 border border-red-500/20 text-[10px] text-muted-foreground">{sign}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
                <Play className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-0.5">Video hướng dẫn sắp có</div>
                  <div className="text-[10px] text-muted-foreground leading-relaxed">Subscribe channel để nhận thông báo khi có video.</div>
                </div>
                <a href="https://www.youtube.com/@hoangcon18nd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 h-8 px-4 rounded-lg bg-blue-500 text-white font-medium text-xs hover:bg-blue-600 transition-colors flex-shrink-0">
                  <Play className="w-3.5 h-3.5" />
                  YouTube
                </a>
              </div>
            </div>
          )}

          {/* Review */}
          {example.phase === "Review" && (
            <div className={cn("rounded-xl border p-6 mb-4", pc.border, pc.bg)}>
              <div className="flex items-center gap-3 mb-5">
                <div className={cn("w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0", pc.bg, pc.border)}>
                  <Shield className={cn("w-5 h-5", pc.text)} />
                </div>
                <div>
                  <div className="text-base font-semibold">AI tự review theo checklist</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Review kỹ giúp phát hiện lỗi sớm, không để tích lũy đến cuối dự án.</div>
                </div>
              </div>

              {example.checklist && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                  {example.checklist.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg border bg-card">
                        <ItemIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-semibold">{item.label}</span>
                          <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{item.pass}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="rounded-lg border border-border bg-muted/20 p-4 mb-5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Prompt để AI tự review</div>
                <pre className="text-[10px] sm:text-[11px] font-mono text-muted-foreground whitespace-pre-wrap leading-relaxed">
{`Review code vừa sinh theo checklist:
1. Spec compliance — có đúng thiết kế không?
2. Code quality — type-safe, clean, secure?
3. Logic correctness — flow hoạt động đúng?
4. Edge cases — xử lý được error cases không?

Nếu có critical issue → dừng lại, hỏi tôi trước khi fix.`}
                </pre>
              </div>

              <div className="p-4 rounded-lg border bg-red-500/5 border-red-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-bold text-red-600 dark:text-red-400">Khi phát hiện lỗi — fix ngay, không để dồn</span>
                </div>
                <div className="space-y-1.5">
                  {["Phát hiện lỗi → Yêu cầu AI fix ngay, sau đó verify lại", "Không tiếp tục sang task tiếp theo khi còn lỗi", "Lỗi nghiêm trọng (security, logic sai) → dừng hẳn, fix xong mới đi tiếp"].map((e, i) => (
                    <div key={i} className="flex items-start gap-2 text-[10px] text-muted-foreground">
                      <XCircle className="w-2.5 h-2.5 text-red-400 flex-shrink-0 mt-0.5" />
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Ship */}
          {example.phase === "Ship" && (
            <div className={cn("rounded-xl border p-6 mb-4", pc.border, pc.bg)}>
              <div className="flex items-center gap-3 mb-5">
                <div className={cn("w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0", pc.bg, pc.border)}>
                  <Rocket className={cn("w-5 h-5", pc.text)} />
                </div>
                <div>
                  <div className="text-base font-semibold">Commit nhỏ, commit sớm — Mỗi bước là một checkpoint</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Mỗi commit là một điểm rollback an toàn. Không bao giờ mất nhiều hơn 10 phút work.</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {[
                  { title: "Nên commit khi?", items: ["Task nhỏ hoàn tất và verify xong", "Từng feature nhỏ đã ổn định", "Sau khi chạy test pass", "Trước khi bắt đầu task mới"], color: "green" },
                  { title: "Không nên commit khi?", items: ["Code còn half-done, chưa verify", "Nhiều thay đổi không liên quan", "Chưa chạy test", "Đang giữa task lớn chưa xong"], color: "red" },
                ].map((rule) => (
                  <div key={rule.title} className={cn("p-3 rounded-lg border", rule.color === "green" ? "bg-green-500/5 border-green-500/20" : "bg-red-500/5 border-red-500/20")}>
                    <div className="flex items-center gap-1.5 mb-2">
                      {rule.color === "green" ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> : <XCircle className="w-3.5 h-3.5 text-red-500" />}
                      <span className={cn("text-[10px] font-bold", rule.color === "green" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400")}>{rule.title}</span>
                    </div>
                    {rule.items.map((item) => (
                      <div key={item} className="flex items-start gap-1.5 text-[10px] text-muted-foreground mb-1">
                        {rule.color === "green" ? <CheckCircle2 className="w-2.5 h-2.5 text-green-400 flex-shrink-0 mt-0.5" /> : <XCircle className="w-2.5 h-2.5 text-red-400 flex-shrink-0 mt-0.5" />}
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-border bg-muted/20 p-4 mb-5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Commit message chuẩn</div>
                <pre className="text-[10px] font-mono text-muted-foreground whitespace-pre-wrap leading-relaxed">{`git add prisma/schema.prisma
git commit -m "feat(auth): add User model for authentication

- Add email (unique) and passwordHash fields
- Add relation to existing models
- Validate schema with prisma validate"`}</pre>
              </div>

              <div className="p-4 rounded-lg border border-purple-500/20 bg-purple-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-4 h-4 text-purple-500" />
                  <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase">Sau khi hoàn tất feature</span>
                </div>
                <div className="space-y-1.5">
                  {["Kiểm tra tests một lần nữa trước khi tạo PR", "Chạy lint, format, type-check", "Trình bày options: merge / PR / giữ branch / discard", "Sau khi merge: cleanup workspace"].map((step, i) => (
                    <div key={i} className="flex items-start gap-2 text-[10px] text-muted-foreground">
                      <Rocket className="w-2.5 h-2.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Prompt examples */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden">
              <div className="px-4 py-2.5 border-b border-red-500/20 flex items-center gap-2 bg-red-500/5">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-xs font-semibold text-red-600 dark:text-red-400">{example.promptExample.label}</span>
              </div>
              <pre className="p-4 text-xs sm:text-sm font-mono text-muted-foreground overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto">
                {example.promptExample.code}
              </pre>
            </div>
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
              <div className="px-4 py-2.5 border-b border-green-500/20 flex items-center gap-2 bg-green-500/5">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">{example.promptBetter.label}</span>
              </div>
              <pre className="p-4 text-xs sm:text-sm font-mono text-muted-foreground overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto">
                {example.promptBetter.code}
              </pre>
            </div>
          </div>

          {/* Expected result */}
          <div className={cn("rounded-xl border p-4 flex items-start gap-3", pc.border)}>
            <div className={cn("w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0", pc.bg, pc.border)}>
              <CheckCircle2 className={cn("w-4 h-4", pc.text)} />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Kết quả kỳ vọng</span>
              <p className="text-sm mt-1 leading-relaxed text-muted-foreground">{example.expectedResult}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkflowContent() {
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
            6 bước từ xác định sức mạnh AI đến triển khai sản phẩm. Mỗi bước đều có ví dụ prompt cụ thể,
            hướng dẫn chi tiết, và checklist thực tế.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* Quick nav timeline */}
        <section>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {phases.map((p, i) => {
              const pc = phaseColors[p.color];
              const Icon = phaseIconFromName(p.iconName);
              return (
                <div key={p.phase} className="flex items-center gap-2 sm:gap-3">
                  <a
                    href={`#phase-${p.phase.toLowerCase()}`}
                    className={cn("flex items-center gap-2 px-4 py-2.5 rounded-xl border hover:shadow-md transition-all", pc.bg, pc.border)}
                  >
                    <Icon className={cn("w-4 h-4 flex-shrink-0", pc.text)} />
                    <span className="text-sm font-semibold">{p.phase}</span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">{p.title}</span>
                  </a>
                  {i < phases.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0 hidden sm:block" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

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

        {/* Phase detail cards */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Chi tiết 6 bước
          </h2>
          <div className="space-y-3">
            {realExamples.map((example) => (
              <div key={example.phase}>
                <PhaseDetailCard example={example} />
                {example.phase !== "Ship" && (
                  <div className="flex items-center justify-center py-3">
                    <div className="flex items-center gap-2 text-muted-foreground/40">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-current" />
                      <ArrowDown className="w-3.5 h-3.5" />
                      <div className="h-px w-12 bg-gradient-to-l from-transparent to-current" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 6 Phases Overview */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Tổng quan 6 giai đoạn
          </h2>
          <PhaseAccordion phasesOverride={phases} defaultOpenAll={false} />
        </section>

        {/* Principles */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Nguyên tắc tăng tốc
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: CheckCircle2, title: "Incremental Development", desc: "Chia nhỏ dự án thành nhiều bước. Mỗi lần chỉ thay đổi 2-5 files, test kỹ trước khi tiếp tục." },
              { icon: CheckCircle2, title: "Specification First", desc: "Luôn viết spec/requirement trước khi code. Spec là kim chỉ nam giúp bạn và AI cùng hướng." },
              { icon: CheckCircle2, title: "Zero Tolerance", desc: "Dọn code thường xuyên. AI có xu hướng sinh code dư thừa — hãy tỉ mỉ review và loại bỏ." },
              { icon: CheckCircle2, title: "Human-in-the-Loop", desc: "AI hỗ trợ nhưng quyết định cuối cùng vẫn thuộc về bạn. Hiểu rõ code do AI sinh ra." },
            ].map((p) => {
              const colorMap = [
                { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/20" },
                { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
                { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
                { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
              ];
              const pc = colorMap[0];
              const Icon = p.icon;
              return (
                <div key={p.title} className={cn("flex items-start gap-3 p-5 rounded-xl border", pc.bg, pc.border)}>
                  <Icon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", pc.text)} />
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
                <ExternalLink className="w-4 h-4" />
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
