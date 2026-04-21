import Link from "next/link";
import type { Metadata } from "next";
import {
  Workflow,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Brain,
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
  FileSearch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quy trình thực chiến",
  description: "Quy trình làm việc với AI Agent từ phân tích yêu cầu đến triển khai sản phẩm hoàn chỉnh",
};

const phases = [
  {
    phase: "Power",
    icon: Cpu,
    color: "cyan",
    title: "Xác định sức mạnh AI",
    subtitle: "Biết model đang dùng mạnh đến đâu, phân bổ công việc phù hợp. Đây là bước đầu tiên nhưng nhiều người bỏ qua.",
    steps: [
      "Xác định thế mạnh và hạn chế của model đang dùng",
      "Phân bổ: Claude cho architecture, GPT cho boilerplate, Cursor cho inline",
      "Dùng context window hiệu quả — ưu tiên ngữ cảnh quan trọng nhất",
      "Đặt kỳ vọng đúng: model nào cũng có giới hạn",
    ],
  },
  {
    phase: "Plan",
    icon: Brain,
    color: "amber",
    title: "Phân tích yêu cầu",
    subtitle: "Đây là bước quan trọng nhất. Nhiều người nhảy thẳng vào code vì nghĩ bước này mất thời gian — thực ra nó tiết kiệm thời gian gấp nhiều lần về sau.",
    steps: [
      "Đọc và phân tích yêu cầu chức năng",
      "Xác định actor, entity, ownership, permission",
      "Tách foundation, core flow, support flow",
      "Viết prompt tổng quát mô tả toàn bộ dự án",
    ],
  },
  {
    phase: "Prepare",
    icon: FileSearch,
    color: "violet",
    title: "Chuẩn bị tài nguyên",
    subtitle: "Trước khi bắt đầu, hãy chuẩn bị ngữ cảnh đầy đủ. Bộ luật, cấu trúc thư mục, quy tắc code — tất cả giúp AI hiểu dự án ngay từ đầu.",
    steps: [
      "Tải và đặt quy tắc code vào thư mục docs/rules/",
      "Chuẩn bị cấu trúc thư mục và convention của dự án",
      "Đặt quy tắc phân tích yêu cầu vào docs/analysis/",
      "Copy ngữ cảnh vào prompt trước khi bắt đầu",
    ],
  },
  {
    phase: "Build",
    icon: Code2,
    color: "blue",
    title: "Sinh Code từng Module",
    subtitle: "Mỗi lần chỉ làm một phần nhỏ. Không bao giờ yêu cầu AI build cả dự án trong một lần.",
    steps: [
      "Build từng trang, từng flow, từng chức năng một",
      "Copy đúng phần yêu cầu chức năng vào prompt",
      "Yêu cầu AI chỉ code đúng phạm vi chức năng đó",
      "Không build toàn bộ dự án trong một lần",
    ],
  },
  {
    phase: "Review",
    icon: Shield,
    color: "green",
    title: "AI tự Review & Cải thiện",
    subtitle: "AI có thể tự review chính nó, nhưng bạn vẫn phải verify. Không có hệ thống nào hoàn hảo.",
    steps: [
      "Check UI, logic, validation, auth, permission",
      "Sửa lỗi ngay nếu có, không dồn lại",
      "Duy trì file spec ghi lại quyết định thiết kế",
      "Đảm bảo code đúng scope, type-safe, clean",
    ],
  },
  {
    phase: "Ship",
    icon: Rocket,
    color: "purple",
    title: "Kiểm thử & Triển khai",
    subtitle: "Commit nhỏ, commit sớm. Mỗi commit là một checkpoint an toàn.",
    steps: [
      "Chạy test sau mỗi lần AI sinh code lớn",
      "Dùng git commit nhỏ để dễ rollback nếu cần",
      "Commit và push Git luôn khi từng phần đã ổn",
      "Không để quá nhiều thay đổi dồn cục",
    ],
  },
];

const phaseColors: Record<string, { bg: string; text: string; border: string; badge: string; badgeText: string }> = {
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/30", badge: "bg-cyan-500", badgeText: "text-white" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/30", badge: "bg-violet-500", badgeText: "text-white" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30", badge: "bg-amber-500", badgeText: "text-white" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30", badge: "bg-blue-500", badgeText: "text-white" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/30", badge: "bg-green-500", badgeText: "text-white" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/30", badge: "bg-purple-500", badgeText: "text-white" },
};

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

export default function WorkflowGuidePage() {
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
            Đây không phải lý thuyết. 6 giai đoạn, mỗi bước đều có ví dụ prompt cụ thể, video minh hoạ, và checklist thực tế.
            Áp dụng ngay vào dự án của bạn.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* Comparison — at the top */}
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

        {/* Quick nav timeline */}
        <section>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {phases.map((p, i) => {
              const pc = phaseColors[p.color];
              const Icon = p.icon;
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

        {/* Real examples for each phase */}
        {realExamples.map((example) => {
          const pc = phaseColors[example.color];
          const Icon = phases.find(p => p.phase === example.phase)?.icon || Cpu;
          return (
            <section key={example.phase} id={`phase-${example.phase.toLowerCase()}`} className="scroll-mt-20">
              {/* Phase header */}
              <div className="flex items-center gap-3 mb-6">
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

              {/* Model comparison for Power phase */}
              {example.modelComparison && (
                <div className="grid sm:grid-cols-3 gap-3 mb-4">
                  {example.modelComparison.map((m, mi) => (
                    <div key={mi} className="flex flex-col rounded-xl border bg-card overflow-hidden">
                      <div className={`px-4 py-3 border-b border-border ${m.tierBg}`}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Model</span>
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${m.tierBg} ${m.tierColor}`}>{m.tier}</span>
                        </div>
                        <div className="text-xs font-bold">{m.model}</div>
                      </div>
                      <div className="p-3 space-y-2">
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-0.5">Tốt nhất khi</div>
                          <div className="text-[11px] text-muted-foreground leading-relaxed">{m.best}</div>
                        </div>
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-0.5">Tránh khi</div>
                          <div className="text-[11px] text-muted-foreground leading-relaxed">{m.avoid}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Video placeholder (not for Power phase) */}
              {!example.modelComparison && (
                <div className={`rounded-xl border ${pc.border} ${pc.bg} p-6 mb-4`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-8 h-8 rounded-lg ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                      <Play className={`w-4 h-4 ${pc.text}`} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{example.videoTitle}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{example.videoDesc}</div>
                    </div>
                  </div>
                  {/* Video embed placeholder */}
                  <div className="relative rounded-lg overflow-hidden border border-border bg-muted/50 aspect-video flex items-center justify-center group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
                    <div className="relative flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                      <span className="text-sm font-medium text-white/80 drop-shadow">Xem video hướng dẫn</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Resources for Prepare phase */}
              {example.resources && (
                <div className={`rounded-xl border ${pc.border} ${pc.bg} p-5 mb-4`}>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className={`w-4 h-4 ${pc.text}`} />
                    <span className="text-sm font-semibold">Tài nguyên cần chuẩn bị</span>
                  </div>
                  <div className="space-y-2.5">
                    {example.resources.map((r, ri) => (
                      <div key={ri} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-4 h-4 ${pc.text} flex-shrink-0 mt-0.5`} />
                        <div>
                          <div className="text-sm font-medium">{r.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{r.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/resources"
                      className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-all"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Tải tài nguyên
                    </Link>
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

        {/* 4 Phases Overview */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Tổng quan 6 giai đoạn
          </h2>
          <div className="flex flex-col gap-3">
            {phases.map((phase, i) => {
              const pc = phaseColors[phase.color];
              const Icon = phase.icon;
              return (
                <div key={phase.phase} id={`overview-${phase.phase.toLowerCase()}`} className="flex flex-col sm:flex-row gap-3">
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
                      {phase.steps.map((step, si) => (
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
              { icon: CheckCircle2, title: "Incremental Development", desc: "Chia nhỏ dự án thành nhiều bước. Mỗi lần chỉ thay đổi 1-2 files, test kỹ trước khi tiếp tục.", color: "emerald" as const },
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

        {/* Related links */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-primary" />
            Liên quan
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Hướng dẫn", href: "/guide", desc: "Xem chi tiết từng bước trong quy trình" },
              { label: "Tài nguyên", href: "/resources", desc: "Tải quy tắc code, cấu trúc, phân tích" },
              { label: "Quy tắc viết Prompt", href: "/guide/prompt", desc: "Dùng prompt đúng cách trong workflow" },
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
