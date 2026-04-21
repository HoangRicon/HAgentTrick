import Link from "next/link";
import type { Metadata } from "next";
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
  Eye,
  Zap,
  BookOpen,
  Brain,
  Sparkles,
  Cpu,
  Package,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { PhaseAccordion } from "@/components/workflow/phase-accordion";

export const metadata: Metadata = {
  title: "Quy trình thực chiến",
  description: "Quy trình làm việc với AI Agent từ xác định sức mạnh AI, phân tích yêu cầu đến triển khai sản phẩm hoàn chỉnh",
};

const phaseIconMap: Record<string, React.ElementType> = {
  Cpu,
  Lightbulb,
  Package,
  Code2,
  Shield,
  Rocket,
};

const phaseIconFromName = (name: string) => phaseIconMap[name] || Lightbulb;

const phases = [
  {
    phase: "Power",
    iconName: "Cpu",
    color: "cyan",
    title: "Xác định sức mạnh AI",
    subtitle: "AI model khác nhau có năng lực khác nhau. Biết sức mạnh của model đang dùng để phân bổ công việc phù hợp, tránh giao quá sức hoặc lãng phí tiền cho model đắt mà chỉ làm việc đơn giản.",
    steps: [
      "Tra cứu thông số model đang dùng (context window, reasoning capability, strengths)",
      "Phân loại task theo độ khó: simple / moderate / complex / extreme",
      "Giao task phù hợp với năng lực model — mạnh thì giao nhiều, yếu thì chia nhỏ",
      "Dùng Claude Opus 4.7 / GPT-4o cho architecture và phân tích project lớn",
    ],
  },
  {
    phase: "Plan",
    iconName: "Lightbulb",
    color: "amber",
    title: "Phân tích & Viết Prompt tổng",
    subtitle: "Đây là bước quan trọng nhất. Nhiều người nhảy thẳng vào code vì nghĩ bước này mất thời gian — thực ra nó tiết kiệm thời gian gấp nhiều lần về sau.",
    steps: [
      "Đọc và phân tích yêu cầu chức năng",
      "Xác định actor, entity, ownership, permission",
      "Tách foundation, core flow, support flow",
      "Viết prompt tổng quát mô tả toàn bộ dự án",
    ],
  },
  {
    phase: "Resources",
    iconName: "Package",
    color: "indigo",
    title: "Chuẩn bị tài nguyên",
    subtitle: "Trước khi bắt đầu build, hãy chuẩn bị sẵn template, UI kit, documentation và các công cụ cần thiết để AI làm việc hiệu quả.",
    steps: [
      "Chuẩn bị template/project skeleton sẵn có",
      "Tổng hợp UI kit, component library, icon set",
      "Gom documentation liên quan (API docs, design specs)",
      "Xác định convention code: naming, structure, style",
    ],
  },
  {
    phase: "Build",
    iconName: "Code2",
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
    iconName: "Shield",
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
    iconName: "Rocket",
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
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30", badge: "bg-amber-500", badgeText: "text-white" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-500/30", badge: "bg-indigo-500", badgeText: "text-white" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30", badge: "bg-blue-500", badgeText: "text-white" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/30", badge: "bg-green-500", badgeText: "text-white" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/30", badge: "bg-purple-500", badgeText: "text-white" },
};

const realExamples = [
  {
    phase: "Power",
    badge: "Bước 1",
    color: "cyan",
    title: "Xác định sức mạnh AI — Chọn model phù hợp cho từng task",
    scenario: "Bạn có một dự án Next.js với 50+ files. AI model hiện tại có thể phân tích toàn bộ project trong một lần giao việc. Bạn cần biết model đó mạnh đến đâu để tận dụng.",
    videoTitle: "Chọn model phù hợp",
    videoDesc: "Model AI 4.7 Opus có context window rất lớn, có thể đọc và phân tích toàn bộ cấu trúc dự án, hiểu kiến trúc, rồi sinh code cho từng module lớn. Thay vì chia 50 task nhỏ, bạn chỉ cần 5-6 lần giao việc.",
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
    phase: "Resources",
    badge: "Bước 3",
    color: "indigo",
    title: "Chuẩn bị tài nguyên cho dự án mới",
    scenario: "Trước khi bắt đầu build, bạn cần tập hợp mọi thứ AI cần: project skeleton, UI kit, documentation, convention. Chuẩn bị càng kỹ, code càng ít lỗi.",
    videoTitle: "Tổ chức workspace để AI hiểu dự án",
    videoDesc: "Agent tổ chức workspace rõ ràng: folder structure, convention docs, UI kit đã có sẵn. AI đọc qua trước khi bắt đầu code.",
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
    videoTitle: "Từng module một — Không nhảy cóc",
    videoDesc: "Nguyên tắc cốt lõi: mỗi task chỉ 2-5 files, có checkpoint. Review kỹ trước khi tiếp. Video hướng dẫn sắp có.",
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
    scenario: "Sau khi task hoàn tất và verify, bạn commit ngay. Không đợi build xong cả dự án mới commit.",
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
    title: "Workflow có quy trình (Power → Plan → Resources → Build → Review → Ship)",
    color: "green",
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
            {phases.map((p, i) => {
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
          const Icon = phaseIconFromName(phases.find(p => p.phase === example.phase)?.iconName || "Lightbulb");
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
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-10 h-10 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                          <Lightbulb className={`w-5 h-5 ${pc.text}`} />
                        </div>
                        <div>
                          <div className="text-base font-semibold">Phân tích yêu cầu chức năng — Hướng dẫn chi tiết</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Thay vì nhảy thẳng vào code, hãy phân tích yêu cầu trước để xác định đúng actor, entity, ownership và build order. Hướng dẫn chi tiết giải thích cách xác định scope chính xác, tránh over-engineering, và đảm bảo AI đi đúng hướng.</div>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                        {[
                          { title: "Viết theo nghiệp vụ trước", desc: "Mô tả bài toán trước, quyết định kỹ thuật sau. Không nhảy thẳng sang giải pháp." },
                          { title: "Gắn chức năng với actor cụ thể", desc: "Mỗi chức năng phải trả lời: ai dùng, có quyền gì, thao tác trên dữ liệu của ai, bị giới hạn ở đâu." },
                          { title: "Xác định entity lõi ngay", desc: "Entity là dữ liệu cốt lõi. Với mỗi entity phải rõ: ai tạo, ai xem, ai sửa, ai xóa, ownership thuộc về ai." },
                          { title: "Phân tích ownership rõ ràng", desc: "Dữ liệu thuộc về ai? Ai được xem toàn bộ? Ai chỉ xem dữ liệu của chính mình?" },
                          { title: "Tách nhỏ từng chức năng", desc: "Không gộp nhiều hành vi khác nhau. Tách: tạo, xem, cập nhật, xóa, duyệt, hủy thành các dòng riêng." },
                          { title: "Xác định thứ tự build", desc: "Auth foundation → Entity → Layout → Feature. Ai tạo dữ liệu lõi, ai quyết định permission?" },
                        ].map((p) => (
                          <div key={p.title} className="flex items-start gap-2.5 p-3 rounded-lg border bg-card">
                            <div className={`w-7 h-7 rounded-lg ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                              <Sparkles className={`w-3.5 h-3.5 ${pc.text}`} />
                            </div>
                            <div>
                              <div className="text-xs font-semibold mb-0.5">{p.title}</div>
                              <div className="text-[10px] text-muted-foreground leading-relaxed">{p.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 mb-5">
                        <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                          <div className="flex items-center gap-1.5 mb-2">
                            <XCircle className="w-3.5 h-3.5 text-red-500" />
                            <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase">Sai</span>
                          </div>
                          <p className="text-xs text-muted-foreground italic mb-1.5">"Thêm chức năng login cho tôi"</p>
                          <p className="text-[10px] text-muted-foreground">Prompt chung chung, không xác định rõ scope, actor, hay yêu cầu cụ thể. AI phải tự đoán nhiều thứ.</p>
                        </div>
                        <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                          <div className="flex items-center gap-1.5 mb-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase">Đúng</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground mb-1">Phân tích trước: User tạo account, Admin duyệt user, Guest chỉ xem sản phẩm.</p>
                          <p className="text-[10px] text-muted-foreground">Build order: Auth → User Entity → Product Entity → Order Entity → Feature flows.</p>
                        </div>
                      </div>
                      <div className="rounded-lg border border-border bg-muted/20 p-4 mb-5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Cấu trúc file phân tích chuẩn</div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {["1. Tổng quan dự án", "2. Actor chính", "3. Core entities", "4. Yêu cầu chức năng", "5. Ownership & Permission", "6. Build order", "7. Risk areas", "8. Assumptions"].map((s) => (
                            <div key={s} className="px-2.5 py-1.5 rounded bg-background/60 border border-border">
                              <span className="text-[10px] text-muted-foreground">{s}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Link
                        href="/guide/analysis"
                        className={`inline-flex items-center gap-2 h-10 px-5 rounded-xl ${pc.bg} border ${pc.border} font-medium text-sm hover:opacity-80 transition-all`}
                      >
                        <BookOpen className={`w-4 h-4 ${pc.text}`} />
                        Xem hướng dẫn phân tích yêu cầu
                        <ArrowRight className={`w-4 h-4 ${pc.text}`} />
                      </Link>
                    </div>
                  ) : example.phase === "Resources" ? (
                    <div className={`rounded-xl border ${pc.border} ${pc.bg} p-6 mb-4`}>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-10 h-10 rounded-xl ${pc.bg} border ${pc.border} flex items-center justify-center flex-shrink-0`}>
                          <Package className={`w-5 h-5 ${pc.text}`} />
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
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-amber-500 via-indigo-500 via-blue-500 via-green-500 to-purple-500 opacity-20" />
            <div className="flex items-center justify-between md:px-4">
              {phases.map((p, i) => {
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
          <PhaseAccordion phases={phases} />
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
                  icon: Package,
                  color: "indigo",
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
