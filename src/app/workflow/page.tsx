import Link from "next/link";
import type { Metadata } from "next";
import {
  Workflow,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
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
  Eye,
  Zap,
  BookOpen,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Lock,
  FileSearch,
  Cpu,
  Brain,
} from "lucide-react";
import { PhaseAccordion } from "@/components/workflow/phase-accordion";
import { phases, phaseColors, phaseIconMap } from "@/lib/workflow-phases";

export const metadata: Metadata = {
  title: "Quy trình thực chiến",
  description: "Quy trình làm việc với AI Agent từ xác định sức mạnh AI, phân tích yêu cầu đến triển khai sản phẩm hoàn chỉnh",
};

const phaseIconFromName = (name: string) => phaseIconMap[name] || phaseIconMap.Cpu;

const realExamples = [
  {
    phase: "Power",
    badge: "Bước 1",
    color: "cyan",
    title: "Xác định sức mạnh AI — Chọn model phù hợp",
    scenario: "Trước khi bắt đầu, hãy biết model đang dùng mạnh đến đâu. Không phải model nào cũng giỏi mọi thứ.",
    videoTitle: "So sánh Claude, GPT, Cursor",
    videoDesc: "Mỗi model có thế mạnh riêng. Claude giỏi architecture, GPT giỏi boilerplate, Cursor giỏi inline refactor.",
    modelComparison: [
      {
        model: "Claude 4 Sonnet / Opus",
        tier: "Mạnh nhất",
        tierColor: "text-violet-600 dark:text-violet-400",
        tierBg: "bg-violet-500/10",
        best: "Kiến trúc phức tạp, thiết kế hệ thống, review sâu",
        avoid: "Task đơn giản lặp lại nhiều lần",
      },
      {
        model: "GPT-4.5 / o3",
        tier: "Mạnh",
        tierColor: "text-blue-600 dark:text-blue-400",
        tierBg: "bg-blue-500/10",
        best: "Code generation nhanh, boilerplate, unit test",
        avoid: "Architecture decisions",
      },
      {
        model: "Cursor / Claude (inline)",
        tier: "Vừa",
        tierColor: "text-emerald-600 dark:text-emerald-400",
        tierBg: "bg-emerald-500/10",
        best: "Inline refactor, autocomplete, fix lỗi nhỏ",
        avoid: "Tạo module mới",
      },
    ],
    promptExample: {
      label: "Sai: Dùng model mạnh cho task nhỏ",
      code: `Dùng Claude Opus để viết 10 dòng helper function`,
    },
    promptBetter: {
      label: "Đúng: Dùng model phù hợp cho task",
      code: `Dùng Cursor để viết inline helper, dùng Claude cho architecture`,
    },
    expectedResult: "Tiết kiệm token, chất lượng code cao hơn. Mỗi model làm đúng việc của nó.",
  },
  {
    phase: "Plan",
    badge: "Bước 2",
    color: "amber",
    title: "Phân tích yêu cầu chức năng",
    scenario: "Bạn cần thêm chức năng vào dự án Next.js có sẵn.",
    videoTitle: "AI Agent hỏi thiết kế trước khi code",
    videoDesc: "Thay vì nhảy thẳng vào code, agent đặt câu hỏi Socratic để xác định đúng yêu cầu: social login hay email/password? có cần email verification không? quên mật khẩu có cần không?",
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
    title: "Chuẩn bị tài nguyên — Ngữ cảnh đầy đủ cho AI",
    scenario: "Trước khi nhờ AI code, bạn cần cung cấp ngữ cảnh: quy tắc code, cấu trúc thư mục, convention của dự án.",
    videoTitle: "AI hiểu dự án từ ngữ cảnh đầy đủ",
    videoDesc: "Thay vì giải thích lại kiến trúc, quy tắc cho mỗi cuộc trò chuyện, agent có sẵn ngữ cảnh — hiểu ngay từ đầu.",
    resources: [
      { name: "Quy tắc code Next.js", file: "docs/Next.js fullstack/Quy tắc code.md", desc: "6 layer kiến trúc, API design, database schema" },
      { name: "Cấu trúc thư mục", file: "docs/Next.js fullstack/Cấu trúc thư mục.md", desc: "Route groups, API routes, components, lib" },
      { name: "Quy tắc phân tích yêu cầu", file: "docs/Chung/Quy tắc viết phân tích yêu cầu chức năng.md", desc: "Actor, entity, ownership, permission, build order" },
    ],
    promptExample: {
      label: "Sai: Không có ngữ cảnh",
      code: `Viết cho tôi một trang login`,
    },
    promptBetter: {
      label: "Đúng: Có ngữ cảnh đầy đủ",
      code: `Viết trang login cho dự án Next.js 14 App Router.

**Ngữ cảnh dự án:**
- Framework: Next.js 14 App Router, TypeScript, Tailwind CSS
- Database: Prisma + PostgreSQL (schema đính kèm)
- UI: shadcn/ui components, dark mode có sẵn
- Auth hiện tại: Chưa có, mock user trong lib/mock.ts

**Quy tắc code (theo docs/rules/code.md):**
- 6 layer: UI → actions → api → service → repository → db
- API trả JSON, không render ở API route
- Dùng Zod cho validation

**Cấu trúc thư mục (theo docs/structure/folder.md):**
- app/(auth)/login/page.tsx
- actions/auth.ts
- app/api/auth/login/route.ts

**Yêu cầu:** Form login email/password, validate client + server.`,
    },
    expectedResult: "Agent hiểu ngay cấu trúc, quy tắc, và convention — không cần giải thích thêm.",
  },
  {
    phase: "Build",
    badge: "Bước 4",
    color: "blue",
    title: "Từng module một — Không nhảy cóc",
    scenario: "Sau khi design được approve, bạn bắt đầu code từng phần nhỏ.",
    videoTitle: "Mỗi task chỉ 1-2 files, có checkpoint",
    videoDesc: "Agent chia công việc thành các task nhỏ 2-5 phút. Mỗi task có file path chính xác, code hoàn chỉnh, và bước verify. Checkpoint sau mỗi 2-3 task.",
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
    scenario: "Sau mỗi lần AI sinh code, bạn review trước khi tiếp tục.",
    videoTitle: "AI tự review theo checklist",
    videoDesc: "Agent tự chạy qua checklist: spec compliance (đúng thiết kế không?), code quality (type-safe, clean, secure?). Critical issues block progress.",
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
    scenario: "Sau khi task hoàn tất và verify, bạn commit ngay.",
    videoTitle: "Git commit theo từng task nhỏ",
    videoDesc: "Mỗi commit là một checkpoint. Không commit 500 dòng thay đổi. Commit 10-20 dòng, commit sớm khi phần đó đã ổn.",
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
    color: "red",
    items: [
      "Yêu cầu AI code ngay, không phân tích trước",
      "Prompt chung chung: \"Thêm chức năng login\"",
      "AI code cả dự án một lần, rồi mới review",
      "Lỗi tích lũy nhiều → khó debug",
      "Commit 500+ dòng, khó revert",
      "AI tự đoán → thường sai spec",
    ],
  },
    after: {
    title: "Workflow có quy trình (Power → Plan → Chuẩn bị → Build → Review → Ship)",
    color: "green",
    items: [
      "Xác định sức mạnh AI, chọn model phù hợp",
      "Phân tích kỹ trước khi nhờ AI code",
      "Chuẩn bị tài nguyên, ngữ cảnh đầy đủ",
      "Mỗi lần chỉ code 1-2 files",
      "Lỗi được phát hiện và fix ngay",
      "Commit nhỏ, mỗi commit là checkpoint",
    ],
  },
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
            6 bước từ xác định sức mạnh AI đến triển khai sản phẩm. Mỗi bước đều có ví dụ prompt cụ thể,
            hướng dẫn chi tiết, và checklist thực tế. Áp dụng ngay vào dự án của bạn.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* Quick nav timeline */}
        <section>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {phases.map((p: typeof phases[0], i: number) => {
              const pc = phaseColors[p.color];
              const Icon = phaseIconFromName(p.iconName);
              return (
                <div key={p.phase} className="flex items-center gap-2 sm:gap-3">
                  <Link
                    href={`#phase-${p.phase.toLowerCase()}`}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${pc.bg} border ${pc.border} hover:shadow-md transition-all group`}
                  >
                    <Icon className={`w-4 h-4 ${pc.text} flex-shrink-0`} />
                    <span className="text-sm font-semibold">{p.phase}</span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">{p.title}</span>
                  </Link>
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
            {/* Before */}
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
            {/* After */}
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

        {/* Real examples for each phase */}
        {realExamples.map((example) => {
          const pc = phaseColors[example.color];
          const Icon = phaseIconFromName(phases.find((p: typeof phases[0]) => p.phase === example.phase)?.iconName || "Cpu");
          return (
            <section key={example.phase} id={`phase-${example.phase.toLowerCase()}`} className="scroll-mt-20">
              {/* Phase header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${pc.text}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md ${pc.badge} ${pc.badgeText} text-xs font-bold`}>
                        {example.badge}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{example.phase}</span>
                    </div>
                    <h2 className="text-xl font-bold mt-0.5">{example.title}</h2>
                  </div>
                </div>

                {/* Scenario */}
                <div className={`rounded-xl border ${pc.border} ${pc.bg} p-5 mb-4`}>
                  <div className="flex items-start gap-2.5">
                    <BookOpen className={`w-4 h-4 ${pc.text} flex-shrink-0 mt-0.5`} />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Scenario</span>
                      <p className="text-sm mt-1 leading-relaxed">{example.scenario}</p>
                    </div>
                  </div>
                </div>

                {/* Guide cards for each phase */}
                {example.phase === "Power" ? (
                    <div className={`rounded-xl border ${pc.border} ${pc.bg} p-6 mb-4`}>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-10 h-10 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                          <Cpu className={`w-5 h-5 ${pc.text}`} />
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
                            desc: "Model mạnh nhất hiện tại. Reasoning dài, phân tích project lớn, hiểu kiến trúc phức tạp. Đọc được cả codebase 50+ files trong một lần.",
                            bestFor: [
                              "Phân tích toàn bộ dự án 50+ files",
                              "Thiết kế kiến trúc hệ thống lớn",
                              "Build module phức tạp (auth, payment, admin)",
                              "Code review sâu, tìm lỗi logic khó",
                              "Multi-file refactor quy mô lớn",
                            ],
                            avoidFor: [
                              "Sửa typo đơn giản, thay đổi 1-2 dòng",
                              "Viết comment hoặc format code",
                              "Task lặp đi lặp lại nhiều lần",
                              "Viết unit test đơn giản cho 1 file",
                            ],
                          },
                          {
                            model: "GPT-4o / Claude Sonnet 4",
                            tier: "Cân bằng",
                            tierColor: "text-blue-600 dark:text-blue-400",
                            tierBg: "bg-blue-500/10",
                            tokens: "128K context",
                            cost: " Trung bình",
                            desc: "Cân bằng giữa chi phí và chất lượng. Làm được hầu hết mọi task với thời gian hợp lý. Tốc độ nhanh, không gây thất vọng.",
                            bestFor: [
                              "Viết API route, endpoint mới",
                              "Tạo component UI từ mockup",
                              "Refactor 2-5 files cùng lúc",
                              "Debug logic phức tạp vừa phải",
                              "Viết unit test cho module",
                            ],
                            avoidFor: [
                              "Dự án quá lớn (>20 files cùng lúc)",
                              "Thiết kế kiến trúc toàn bộ hệ thống",
                              "Phân tích nghiệp vụ phức tạp, nhiều actor",
                            ],
                          },
                          {
                            model: "GPT-4o-mini / Haiku",
                            tier: "Nhẹ & nhanh",
                            tierColor: "text-emerald-600 dark:text-emerald-400",
                            tierBg: "bg-emerald-500/10",
                            tokens: "128K context",
                            cost: " Thấp",
                            desc: "Chi phí thấp nhất, tốc độ nhanh nhất. Phù hợp cho task đơn giản, lặp đi lặp lại. Tuy nhiên reasoning ngắn, dễ sai với logic phức tạp.",
                            bestFor: [
                              "Sửa lỗi nhỏ, fix typo",
                              "Viết unit test đơn giản",
                              "Format, clean code, auto-import",
                              "Tạo mock data, seed data",
                              "Inline refactor 1-2 files",
                            ],
                            avoidFor: [
                              "Task phức tạp, nhiều logic nghiệp vụ",
                              "Thiết kế feature mới",
                              "Code review có tính kiến trúc",
                              "Debug lỗi khó, cần reasoning sâu",
                            ],
                          },
                        ].map((m) => (
                          <div key={m.model} className="flex flex-col rounded-xl border bg-card overflow-hidden">
                            <div className={`px-4 py-3 border-b border-border ${m.tierBg}`}>
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Model</span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.tierBg} ${m.tierColor}`}>
                                  {m.tier}
                                </span>
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
                                  <CheckCircle2 className="w-2.5 h-2.5" />
                                  Dùng khi
                                </div>
                                <div className="space-y-1">
                                  {m.bestFor.map((b) => (
                                    <div key={b} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                      {b}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <div className="text-[9px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1.5 flex items-center gap-1">
                                  <XCircle className="w-2.5 h-2.5" />
                                  Tránh khi
                                </div>
                                <div className="space-y-1">
                                  {m.avoidFor.map((a) => (
                                    <div key={a} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                                      <XCircle className="w-2.5 h-2.5 text-red-500 flex-shrink-0 mt-0.5" />
                                      {a}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg border border-border bg-muted/20 p-4">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 text-center">
                          Bảng chọn nhanh theo task
                        </div>
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
                              <span className={`text-[9px] font-bold ${row.color}`}>{row.model}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : example.phase === "Plan" ? (
                    <div className={`rounded-xl border ${pc.border} ${pc.bg} p-6 mb-4`}>
                      {/* Intro warning */}
                      <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 mb-6">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">Tại sao bước này quan trọng nhất?</div>
                            <div className="text-xs text-muted-foreground leading-relaxed">
                              Nhảy thẳng vào code mà không phân tích → AI tự đoán requirement → đoán thì thường sai → sửa lại mất gấp đôi thời gian. Bước phân tích 15 phút đầu tiết kiệm được 2-3 giờ refactor sau. Không ai muốn code xong rồi phát hiện thiết kế sai ở tầng foundation.
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Core analysis grid */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {[
                          {
                            title: "1. Xác định Actor (Tác nhân)",
                            icon: Brain,
                            color: "amber",
                            desc: "Actor là người hoặc hệ thống tương tác với phần mềm. Mỗi actor có nhu cầu và quyền hạn khác nhau.",
                            items: [
                              "Admin — quản lý toàn bộ hệ thống, có quyền cao nhất",
                              "User (người dùng thường) — chỉ dùng được feature của chính mình",
                              "Guest (khách) — chưa đăng nhập, chỉ xem được nội dung công khai",
                              "System (hệ thống khác) — API integrations, cron jobs, webhooks",
                            ],
                          },
                          {
                            title: "2. Xác định Entity (Thực thể)",
                            icon: Layers,
                            color: "orange",
                            desc: "Entity là dữ liệu cốt lõi. Với mỗi entity phải xác định rõ: tên, thuộc tính, quan hệ với entity khác.",
                            items: [
                              "User — id, email, passwordHash, role, createdAt",
                              "Post — id, title, content, authorId, publishedAt, status",
                              "Comment — id, content, authorId, postId, parentId (reply)",
                              "Mối quan hệ: User 1→N Post, Post 1→N Comment",
                            ],
                          },
                          {
                            title: "3. Xác định Ownership (Sở hữu)",
                            icon: Shield,
                            color: "red",
                            desc: "Ownership xác định dữ liệu thuộc về ai và ai được phép thao tác gì với dữ liệu đó.",
                            items: [
                              "Ai tạo dữ liệu? → Chỉ owner và admin được tạo",
                              "Ai xem được dữ liệu? → Owner xem của mình, admin xem tất cả",
                              "Ai sửa được? → Chỉ owner sửa của mình, admin sửa tất cả",
                              "Ai xóa được? → Admin hoặc owner (với điều kiện cụ thể)",
                            ],
                          },
                          {
                            title: "4. Xác định Permission (Phân quyền)",
                            icon: Lock,
                            color: "violet",
                            desc: "Permission là tập hợp các quy tắc xác định actor nào được thực hiện hành động nào trên entity nào.",
                            items: [
                              "CRUD: Create, Read, Update, Delete trên mỗi entity",
                              "Field-level permission: trường nào ẩn, trường nào readonly",
                              "Row-level permission: dòng nào được xem dựa trên điều kiện owner",
                              "Action-level permission: approve, reject, publish, archive...",
                            ],
                          },
                        ].map((card) => (
                          <div key={card.title} className="rounded-lg border bg-card p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-7 h-7 rounded-lg bg-${card.color}-500/10 border border-${card.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                                <card.icon className={`w-3.5 h-3.5 text-${card.color}-500`} />
                              </div>
                              <div className="text-xs font-semibold">{card.title}</div>
                            </div>
                            <p className="text-[10px] text-muted-foreground mb-2 leading-relaxed">{card.desc}</p>
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

                      {/* Build order */}
                      <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-5 mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Layers className="w-4 h-4 text-amber-500" />
                          <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">5. Thứ tự xây dựng (Build Order)</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                          Thứ tự xây dựng ảnh hưởng trực tiếp đến kiến trúc. Sai thứ tự → phải refactor foundation → mất thời gian gấp đôi.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { step: "Auth", desc: "Đăng nhập, đăng ký, quên mật khẩu", color: "amber" },
                            { step: "Foundation", desc: "Layout, theme, navigation, providers", color: "blue" },
                            { step: "Entities", desc: "Database schema, CRUD base", color: "violet" },
                            { step: "Core Flow", desc: "Feature chính của ứng dụng", color: "green" },
                            { step: "Support Flow", desc: "Notification, search, filter, export", color: "cyan" },
                            { step: "Polish", desc: "Loading states, error handling, analytics", color: "slate" },
                          ].map((s, i) => (
                            <div key={s.step} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/80 border border-border">
                              <div className={`w-5 h-5 rounded-full bg-${s.color}-500/10 border border-${s.color}-500/30 flex items-center justify-center flex-shrink-0`}>
                                <span className={`text-[9px] font-black text-${s.color}-600 dark:text-${s.color}-400`}>{i + 1}</span>
                              </div>
                              <div>
                                <div className="text-[10px] font-semibold">{s.step}</div>
                                <div className="text-[9px] text-muted-foreground">{s.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right vs wrong comparison */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                          <div className="flex items-center gap-1.5 mb-3">
                            <XCircle className="w-4 h-4 text-red-500" />
                            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase">Sai cách</span>
                          </div>
                          <div className="space-y-2 mb-3">
                            <div className="text-[10px] font-semibold text-muted-foreground mb-1">Prompt:</div>
                            <code className="block text-[10px] font-mono text-muted-foreground bg-background/80 rounded px-2 py-1.5">"Thêm chức năng login cho tôi"</code>
                          </div>
                          <div className="space-y-1.5">
                            {[
                              "AI tự đoán: email hay social login?",
                              "AI tự đoán: JWT hay session cookie?",
                              "AI tự đoán: admin có trong hay tách riêng?",
                              "Kết quả: code không match yêu cầu thực tế",
                              "Thời gian sửa: 30-60 phút refactor",
                            ].map((e) => (
                              <div key={e} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                                <XCircle className="w-2.5 h-2.5 text-red-400 flex-shrink-0 mt-0.5" />
                                {e}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                          <div className="flex items-center gap-1.5 mb-3">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase">Đúng cách</span>
                          </div>
                          <div className="space-y-2 mb-3">
                            <div className="text-[10px] font-semibold text-muted-foreground mb-1">Sau khi phân tích kỹ:</div>
                            <code className="block text-[10px] font-mono text-muted-foreground bg-background/80 rounded px-2 py-1.5">"Thêm chức năng đăng nhập: email + password, JWT httpOnly cookie, middleware bảo vệ /dashboard, không social login"</code>
                          </div>
                          <div className="space-y-1.5">
                            {[
                              "Đã xác định: email/password (không social)",
                              "Đã xác định: JWT storage method",
                              "Đã xác định: route protection scope",
                              "Kết quả: code đúng ngay từ lần đầu",
                              "Thời gian: 0 phút sửa, đi thẳng vào build",
                            ].map((e) => (
                              <div key={e} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                                <CheckCircle2 className="w-2.5 h-2.5 text-green-400 flex-shrink-0 mt-0.5" />
                                {e}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Analysis template */}
                      <div className="rounded-lg border border-border bg-muted/20 p-5 mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">File phân tích chuẩn — SPEC.md</span>
                        </div>
                        <pre className="text-[10px] sm:text-[11px] font-mono text-muted-foreground whitespace-pre-wrap leading-relaxed">{`# SPEC: [Tên dự án]

## 1. Tổng quan
- Mô tả ngắn gọn dự án
- Mục tiêu chính
- MVP scope

## 2. Actor
- Admin: quản lý toàn bộ...
- User: dùng feature của mình...
- Guest: chỉ xem nội dung công khai...

## 3. Entity
- User: id, email, role, createdAt
- Post: id, title, content, authorId, status
- Comment: id, content, authorId, postId

## 4. Ownership & Permission
- User chỉ sửa post của mình
- Admin sửa tất cả post
- Guest không tạo được content

## 5. Build Order
1. Auth (login/register)
2. Foundation (layout/theme)
3. Entities (schema + CRUD)
4. Core Flow (main feature)
5. Polish (UX improvements)

## 6. Risk Areas
- [ ] Validation đầu vào
- [ ] Permission checks
- [ ] Edge cases (empty state, error...)

## 7. Assumptions
- Dùng Next.js 14 App Router
- Database: PostgreSQL + Prisma
- Auth: JWT httpOnly cookie`}</pre>
                      </div>

                      {/* Socratic questions */}
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/5 p-5 mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <HelpCircle className="w-4 h-4 text-indigo-500" />
                          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Câu hỏi Socratic — Hỏi AI trước khi bắt đầu code</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {[
                            { q: "Actor nào sẽ dùng tính năng này?", hint: "Admin, user thường, hay cả hai?" },
                            { q: "Entity nào liên quan trong tính năng này?", hint: "Tên, mối quan hệ với entity khác?" },
                            { q: "Ai được phép thực hiện action này?", hint: "Chỉ owner, hay admin cũng được?" },
                            { q: "Dữ liệu nào bị ảnh hưởng bởi action này?", hint: "Field nào tạo, sửa, xóa?" },
                            { q: "Thứ tự xây dựng nào là đúng?", hint: "Foundation trước, hay feature trước?" },
                            { q: "Edge case nào có thể xảy ra?", hint: "Empty state, error, permission denied..." },
                          ].map((item) => (
                            <div key={item.q} className="flex items-start gap-2 p-2 rounded bg-background/60 border border-border">
                              <HelpCircle className="w-3 h-3 text-indigo-400 flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-[10px] font-semibold text-muted-foreground">{item.q}</div>
                                <div className="text-[9px] text-muted-foreground/70 mt-0.5">{item.hint}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Link to detail page */}
                      <Link
                        href="/guide/analysis"
                        className={`inline-flex items-center gap-2 h-10 px-5 rounded-xl ${pc.bg} border ${pc.border} font-medium text-sm hover:opacity-80 transition-all`}
                      >
                        <BookOpen className={`w-4 h-4 ${pc.text}`} />
                        Xem hướng dẫn phân tích yêu cầu chi tiết
                        <ArrowRight className={`w-4 h-4 ${pc.text}`} />
                      </Link>
                    </div>
                  ) : example.phase === "Resources" ? (
                    <div className={`rounded-xl border ${pc.border} ${pc.bg} p-6 mb-4`}>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-10 h-10 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                          <FileSearch className={`w-5 h-5 ${pc.text}`} />
                        </div>
                        <div>
                          <div className="text-base font-semibold">Hướng dẫn sử dụng tài nguyên</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Cách lấy tài nguyên (quy tắc code, quy tắc prompt, quy tắc phân tích) từ trang Tài nguyên và tích hợp vào AI Agent để tăng cường khả năng làm việc.</div>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 mb-5">
                        {[
                          { step: 1, title: "Tìm tài nguyên phù hợp", desc: "Truy cập trang Tài nguyên để xem danh sách đầy đủ: quy tắc code, quy tắc prompt, quy tắc phân tích." },
                          { step: 2, title: "Tải file markdown về máy", desc: "Tải file .md của tài nguyên bạn cần sử dụng. Mỗi tài nguyên đều có nút Tải về ngay trên thẻ." },
                          { step: 3, title: "Đặt file vào thư mục phù hợp", desc: "Đặt file .md vào thư mục trong project. Ví dụ: docs/rules/ cho quy tắc code, docs/analysis/ cho quy tắc phân tích." },
                          { step: 4, title: "Copy nội dung vào AI Agent", desc: "Copy toàn bộ nội dung file .md và paste vào cuộc trò chuyện với AI Agent. Hoặc dùng tham chiếu đường dẫn trong prompt." },
                        ].map((s) => (
                          <div key={s.step} className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                            <div className="w-7 h-7 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">{s.step}</span>
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
                          { title: "Duy trì tính nhất quán", desc: "AI Agent follow đúng quy tắc của dự án, không tự ý theo default của nó" },
                          { title: "Giảm lỗi sinh code", desc: "Nguyên tắc rõ ràng giúp AI hiểu đúng yêu cầu từ lần đầu" },
                          { title: "Tăng tốc độ", desc: "Không cần giải thích lại quy tắc mỗi lần bắt đầu dự án" },
                        ].map((b) => (
                          <div key={b.title} className="flex items-start gap-2 p-3 rounded-lg border bg-card">
                            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                            </div>
                            <div>
                              <div className="text-[10px] font-semibold">{b.title}</div>
                              <div className="text-[9px] text-muted-foreground leading-relaxed">{b.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/guide/resources"
                        className={`inline-flex items-center gap-2 h-10 px-5 rounded-xl ${pc.bg} border ${pc.border} font-medium text-sm hover:opacity-80 transition-all`}
                      >
                        <BookOpen className={`w-4 h-4 ${pc.text}`} />
                        Xem hướng dẫn sử dụng tài nguyên
                        <ArrowRight className={`w-4 h-4 ${pc.text}`} />
                      </Link>
                    </div>
                  ) : example.phase === "Review" ? (
                    <div className={`rounded-xl border ${pc.border} ${pc.bg} p-6 mb-4`}>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-10 h-10 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                          <Shield className={`w-5 h-5 ${pc.text}`} />
                        </div>
                        <div>
                          <div className="text-base font-semibold">AI tự review theo checklist</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Sau mỗi lần AI sinh code, bạn review trước khi tiếp tục. Dù model có mạnh đến đâu, review vẫn là bước bắt buộc. Review kỹ giúp phát hiện lỗi sớm, không để tích lũy đến cuối dự án.</div>
                        </div>
                      </div>

                      {/* Checklist grid */}
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                        {[
                          { icon: CheckCheck, title: "Đúng thiết kế?", pass: "Code match với spec đã approve. Yêu cầu đúng flow, đúng entities, đúng actor đã xác định ở Bước 2." },
                          { icon: CheckCheck, title: "Logic đúng?", pass: "Flow hoạt động đúng: data validation, error handling, edge cases đều được xử lý. Không có logic bị thiếu." },
                          { icon: CheckCheck, title: "Type-safe?", pass: "Không có any, types rõ ràng, interface mô tả đầy đủ. TypeScript strict mode không báo lỗi." },
                          { icon: Shield, title: "Secure?", pass: "Password hashed, JWT httpOnly cookie, input validated, SQL injection prevented, XSS prevented." },
                          { icon: CheckCircle2, title: "Scope đúng?", pass: "Chỉ sửa đúng phần được yêu cầu. Không thêm feature lạ, không sửa file ngoài scope." },
                          { icon: CheckCircle2, title: "Test pass?", pass: "Chạy test sau mỗi task. Unit test, integration test đều pass. Không break existing features." },
                        ].map((item, i) => {
                          const ItemIcon = item.icon;
                          return (
                            <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg border bg-card">
                              <ItemIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-xs font-semibold">{item.title}</span>
                                <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{item.pass}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Prompt for AI review */}
                      <div className="rounded-lg border border-border bg-muted/20 p-4 mb-5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Prompt để AI tự review</div>
                        <pre className="text-[10px] sm:text-[11px] font-mono text-muted-foreground whitespace-pre-wrap leading-relaxed">
{`Review code vừa sinh theo checklist:
1. Spec compliance — có đúng thiết kế không?
2. Code quality — type-safe, clean, secure?
3. Logic correctness — flow hoạt động đúng?
4. Edge cases — xử lý được error cases không?

Nếu có critical issue → dừng lại, hỏi tôi trước khi fix.`}</pre>
                      </div>

                      {/* Error handling */}
                      <div className="p-4 rounded-lg border bg-red-500/5 border-red-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-xs font-bold text-red-600 dark:text-red-400">Khi phát hiện lỗi — fix ngay, không để dồn</span>
                        </div>
                        <div className="space-y-1.5">
                          {[
                            "Phát hiện lỗi ở API route /api/auth/login: Không validate email format",
                            "Phát hiện lỗi: Không handle wrong password error",
                            "Yêu cầu AI fix ngay, sau đó verify lại — không tiếp tục sang task tiếp theo",
                            "Nếu lỗi nghiêm trọng (security, logic sai) → dừng hẳn, fix xong mới đi tiếp",
                          ].map((e, i) => (
                            <div key={i} className="flex items-start gap-2 text-[10px] text-muted-foreground">
                              <XCircle className="w-2.5 h-2.5 text-red-400 flex-shrink-0 mt-0.5" />
                              {e}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : example.phase === "Ship" ? (
                    <div className={`rounded-xl border ${pc.border} ${pc.bg} p-6 mb-4`}>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-10 h-10 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                          <Rocket className={`w-5 h-5 ${pc.text}`} />
                        </div>
                        <div>
                          <div className="text-base font-semibold">Commit nhỏ, commit sớm — Mỗi bước là một checkpoint</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Sau khi task hoàn tất và verify, bạn commit ngay. Không đợi build xong cả dự án mới commit. Mỗi commit là một điểm rollback an toàn. Không bao giờ mất nhiều hơn 10 phút work.</div>
                        </div>
                      </div>

                      {/* Commit rules */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-5">
                        {[
                          { icon: CheckCircle2, title: "Commit khi nào?", items: ["Mỗi task nhỏ hoàn tất và verify xong", "Từng feature nhỏ đã ổn định", "Sau khi chạy test pass", "Trước khi bắt đầu task mới"], color: "green" },
                          { icon: XCircle, title: "Không nên commit khi?", items: ["Code còn half-done, chưa verify", "Nhiều thay đổi không liên quan cùng lúc", "Chưa chạy test", "Đang giữa task lớn chưa xong"], color: "red" },
                        ].map((rule) => (
                          <div key={rule.title} className={`p-3 rounded-lg border ${rule.color === "green" ? "bg-green-500/5 border-green-500/20" : "bg-red-500/5 border-red-500/20"}`}>
                            <div className="flex items-center gap-1.5 mb-2">
                              {rule.color === "green" ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                              ) : (
                                <XCircle className="w-3.5 h-3.5 text-red-500" />
                              )}
                              <span className={`text-[10px] font-bold ${rule.color === "green" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>{rule.title}</span>
                            </div>
                            <div className="space-y-1">
                              {rule.items.map((item) => (
                                <div key={item} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                                  {rule.color === "green" ? (
                                    <CheckCircle2 className="w-2.5 h-2.5 text-green-400 flex-shrink-0 mt-0.5" />
                                  ) : (
                                    <XCircle className="w-2.5 h-2.5 text-red-400 flex-shrink-0 mt-0.5" />
                                  )}
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Commit message template */}
                      <div className="rounded-lg border border-border bg-muted/20 p-4 mb-5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Commit message chuẩn</div>
                        <pre className="text-[10px] sm:text-[11px] font-mono text-muted-foreground whitespace-pre-wrap leading-relaxed">{`git add prisma/schema.prisma
git commit -m "feat(auth): add User model for authentication

- Add email (unique) and passwordHash fields
- Add relation to existing models
- Validate schema with prisma validate"`}</pre>
                      </div>

                      {/* PR flow */}
                      <div className="p-4 rounded-lg border border-purple-500/20 bg-purple-500/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Rocket className="w-4 h-4 text-purple-500" />
                          <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase">Sau khi hoàn tất feature</span>
                        </div>
                        <div className="space-y-1.5">
                          {[
                            "Kiểm tra tests một lần nữa trước khi tạo PR",
                            "Chạy lint, format, type-check để đảm bảo code sạch",
                            "Trình bày options: merge trực tiếp / tạo PR / giữ branch / discard",
                            "Nếu tạo PR: viết mô tả rõ feature gì, đã verify gì, checklist passes",
                            "Sau khi merge: cleanup workspace, branch cũ xóa nếu không cần",
                          ].map((step, i) => (
                            <div key={i} className="flex items-start gap-2 text-[10px] text-muted-foreground">
                              <Rocket className="w-2.5 h-2.5 text-purple-400 flex-shrink-0 mt-0.5" />
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`rounded-xl border ${pc.border} ${pc.bg} p-6 mb-4`}>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-10 h-10 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                          <Code2 className={`w-5 h-5 ${pc.text}`} />
                        </div>
                        <div>
                          <div className="text-base font-semibold">Từng module một — Không nhảy cóc</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Nguyên tắc cốt lõi: mỗi task chỉ 2-5 files, có checkpoint. Review kỹ trước khi tiếp. Không bao giờ yêu cầu AI build cả dự án trong một lần.</div>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                        {[
                          { title: "Nguyên tắc vàng", items: ["Mỗi task chỉ 2-5 files", "Có checkpoint sau mỗi task", "Review kỹ trước khi tiếp task mới", "Dễ rollback nếu sai"] },
                          { title: "Cách xác định scope task", items: ["1 feature nhỏ = 1 task", "File path chính xác", "Yêu cầu rõ ràng từng dòng", "Không gộp chung nhiều thứ"] },
                          { title: "Quy trình thực hiện", items: ["Xác định task cần làm", "Yêu cầu AI viết code", "Review chi tiết từng dòng", "Verify → Commit → Task tiếp"] },
                        ].map((section, si) => (
                          <div key={si} className="flex flex-col p-3 rounded-lg border bg-card">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">{section.title}</div>
                            <div className="space-y-1.5 flex-1">
                              {section.items.map((item) => (
                                <div key={item} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                                  <CheckCircle2 className="w-2.5 h-2.5 text-blue-400 flex-shrink-0 mt-0.5" />
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg border border-border bg-muted/20 p-4 mb-4">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Dấu hiệu task quá lớn</div>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "AI bắt đầu hallucinate — tên function không khớp",
                            "Import sai file, code không match yêu cầu",
                            "Review mất hơn 10 phút",
                            "Nhiều hơn 5 files trong một task",
                          ].map((sign) => (
                            <span key={sign} className="inline-flex items-center px-2 py-1 rounded-md bg-red-500/5 border border-red-500/20 text-[10px] text-muted-foreground">
                              {sign}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
                        <Play className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-0.5">Video hướng dẫn sắp có</div>
                          <div className="text-[10px] text-muted-foreground leading-relaxed">Mình sẽ làm video thực hiện toàn bộ quy trình trên YouTube. Subscribe channel để nhận thông báo khi có video.</div>
                        </div>
                        <a
                          href="https://www.youtube.com/@hoangcon18nd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 h-8 px-4 rounded-lg bg-blue-500 text-white font-medium text-xs hover:bg-blue-600 transition-colors flex-shrink-0"
                        >
                          <Play className="w-3.5 h-3.5" />
                          YouTube
                        </a>
                      </div>
                    </div>
                  )}

              {/* Prompt examples */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {/* Bad prompt */}
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-red-500/20 flex items-center gap-2 bg-red-500/5">
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-semibold text-red-600 dark:text-red-400">{example.promptExample.label}</span>
                  </div>
                  <pre className="p-4 text-xs sm:text-sm font-mono text-muted-foreground overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {example.promptExample.code}
                  </pre>
                </div>
                {/* Good prompt */}
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
              <div className={`rounded-xl border ${pc.border} p-4 flex items-start gap-3`}>
                <div className={`w-7 h-7 rounded-lg ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle2 className={`w-4 h-4 ${pc.text}`} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Kết quả kỳ vọng</span>
                  <p className="text-sm mt-1 leading-relaxed text-muted-foreground">{example.expectedResult}</p>
                </div>
              </div>

              {/* Checklist for Review phase */}
              {example.checklist && (
                <div className="mt-4 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-semibold">Review Checklist</span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {example.checklist.map((item, i) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-background/50 border border-border">
                          <ItemIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-semibold">{item.label}</span>
                            <p className="text-xs text-muted-foreground mt-0.5">{item.pass}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* Divider between phases */}
              {example.phase !== "Ship" && (
                <div className="flex items-center justify-center pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground/40">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-current" />
                    <ArrowDown className="w-3.5 h-3.5" />
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-current" />
                  </div>
                </div>
              )}
            </section>
          );
        })}

        {/* 6 Phases Overview — Redesigned */}
        <section>
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Tổng quan 6 giai đoạn
          </h2>

          {/* Flow connector line */}
          <div className="relative mb-8">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-amber-500 via-violet-500 via-blue-500 via-green-500 to-purple-500 opacity-20" />
            <div className="flex items-center justify-between md:px-4">
              {phases.map((p: typeof phases[0], i: number) => {
                const pc = phaseColors[p.color];
                const Icon = phaseIconFromName(p.iconName);
                return (
                  <div key={p.phase} className="flex flex-col items-center">
                    <div className={`relative w-12 h-12 rounded-2xl ${pc.bg} border-2 ${pc.border} flex items-center justify-center shadow-lg shadow-black/5`}>
                      <Icon className={`w-5 h-5 ${pc.text}`} />
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-background border-2 ${pc.border.replace('border', 'border-').replace('/30', '')} flex items-center justify-center">
                        <span className={`text-[9px] font-black ${pc.text}`}>{i + 1}</span>
                      </div>
                    </div>
                    <span className={`mt-2 text-[10px] font-black uppercase tracking-widest ${pc.text}`}>{p.phase}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phase cards */}
          <PhaseAccordion />
        </section>

        {/* Principles */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Nguyên tắc tăng tốc
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: CheckCircle2, title: "Incremental Development", desc: "Chia nhỏ dự án thành nhiều bước. Mỗi lần chỉ thay đổi 2-5 files, test kỹ trước khi tiếp tục.", color: "emerald" as const },
              { icon: CheckCircle2, title: "Specification First", desc: "Luôn viết spec/requirement trước khi code. Spec là kim chỉ nam giúp bạn và AI cùng hướng.", color: "blue" as const },
              { icon: CheckCircle2, title: "Zero Tolerance", desc: "Dọn code thường xuyên. AI có xu hướng sinh code dư thừa — hãy tỉ mỉ review và loại bỏ.", color: "purple" as const },
              { icon: CheckCircle2, title: "Human-in-the-Loop", desc: "AI hỗ trợ nhưng quyết định cuối cùng vẫn thuộc về bạn. Hiểu rõ code do AI sinh ra.", color: "orange" as const },
            ].map((p) => {
              const colorMap: Record<string, { bg: string; text: string; border: string }> = {
                emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/20" },
                blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
                purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
                orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
              };
              const pc = colorMap[p.color] ?? colorMap.emerald;
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

        {/* Q&A Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Hỏi &amp; Đáp
            </h2>
            <Link
              href="/qa"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all"
            >
              <HelpCircle className="w-4 h-4" />
              Xem tất cả
            </Link>
          </div>

            <div className="space-y-3">
              {[
                {
                  q: "Tại sao tôi không thấy bạn nhắc tới Database trong quy trình?",
                  a: `Tôi thường bỏ qua phần phân tích Database kỹ lưỡng, vì khi đã nắm rõ yêu cầu chức năng, điều tôi cần biết chỉ là: dùng loại Database nào cho phù hợp — SQL hay NoSQL, PostgreSQL hay MongoDB, quy mô thế nào. Thế thôi.

Cấu trúc bên trong tôi sẽ xây dựng theo từng module. Tức là cả Frontend, Backend, Database và test của module đó được build cho tới khi oke, rồi mới đẩy lên git. Tôi không cần làm Database tổng thể trước — vì đằng nào tôi cũng sẽ phát hiện field cần thêm, bảng cần tách, hoặc quan hệ cần điều chỉnh khi code thực tế.

Nói thẳng: thiết kế Database tổng thể từ đầu giống như vẽ bản đồ đầy đủ trước khi khám phá vùng đất mới. Nghe hợp lý, nhưng thực tế bạn sẽ sửa lại rất nhiều khi bắt đầu đặt chân vào từng module cụ thể.`,
                  icon: FileSearch,
                  color: "violet",
                },
                {
                  q: "Làm sao để biết nên dùng model nào cho dự án của tôi?",
                  a: `Cách đơn giản nhất: bắt đầu với model mạnh nhất bạn có thể chi trả, rồi hạ xuống nếu thấy không cần thiết.

Model mạnh như Claude Opus 4.7 hoặc GPT-4o xử lý được nhiều thứ phức tạp trong một lần giao việc — phân tích kiến trúc, sinh code nhiều files, debug sâu. Model nhẹ hơn như GPT-4o-mini hoặc Haiku phù hợp với task đơn giản, lặp đi lặp lại: viết test, refactor nhỏ, dịch code.

Nguyên tắc tôi dùng: giao task phù hợp với năng lực model — mạnh thì giao nhiều, yếu thì chia nhỏ.`,
                  icon: Cpu,
                  color: "cyan",
                },
                {
                  q: "Tôi nên chia nhỏ module như thế nào cho vừa sức AI?",
                  a: `Mỗi module nên có scope rõ ràng và hoàn thành trong khoảng 1-3 files. Với model mạnh, có thể mở rộng lên 3-5 files nếu chúng liên quan chặt chẽ.

Dấu hiệu module đã quá lớn: AI bắt đầu "hallucinate" — tên function không khớp, import sai, hoặc code không match yêu cầu. Khi thấy dấu hiệu này, chia nhỏ ngay.

Tốt hơn nhiều so với một module lớn thất bại: chia nhỏ thành nhiều module vừa phải, mỗi cái đều chạy đúng từ đầu.`,
                  icon: Layers,
                  color: "blue",
                },
                {
                  q: "Quy trình này có áp dụng được cho dự án có sẵn không?",
                  a: `Hoàn toàn có thể. Với dự án có sẵn, bạn bắt đầu từ bước Resources — kiểm tra xem project đã có convention chưa, structure ra sao, đã có UI kit chưa. Sau đó nhảy thẳng vào Build từ module nhỏ nhất.

Điều khác biệt duy nhất: bạn cần dành thời gian để "giới thiệu" dự án cho AI trước — cho nó đọc structure, convention, và những gì đã có. Đừng nhảy thẳng vào yêu cầu code, vì AI không biết context dự án của bạn.`,
                  icon: GitBranch,
                  color: "green",
                },
              ].map((item, i) => {
                const pc = phaseColors[item.color];
                const Icon = item.icon;
                return (
                  <details
                    key={i}
                    className="group rounded-2xl border bg-card overflow-hidden transition-all duration-200 open:shadow-lg open:shadow-black/5 open:border-primary/20"
                  >
                    {/* Question — clickable header */}
                    <summary className="flex items-start gap-4 p-5 cursor-pointer select-none list-none hover:bg-muted/20 transition-colors">
                      <div className={`w-10 h-10 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Icon className={`w-5 h-5 ${pc.text}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest ${pc.badge} ${pc.badgeText}`}>
                            Câu hỏi
                          </span>
                        </div>
                        <h3 className="text-sm font-bold leading-snug pr-6">{item.q}</h3>
                      </div>
                      <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-3 transition-transform duration-200 group-open:rotate-180" />
                    </summary>

                    {/* Answer */}
                    <div className="px-5 pb-5 pl-5 sm:pl-[4.5rem]">
                      <div className="relative">
                        <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b ${pc.bg.replace('/10', '')} opacity-60`} />
                        <div className="pl-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest ${pc.bg} ${pc.text} border ${pc.border}`}>
                              Trả lời
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  </details>
                );
              })}
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
