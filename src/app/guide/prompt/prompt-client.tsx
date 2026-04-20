"use client";

import Link from "next/link";
import {
  FileText,
  Search,
  ChevronRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Zap,
  Sparkles,
  Download,
  Copy,
  ExternalLink,
  Brain,
  MessageSquare,
} from "lucide-react";

const coreComponents = [
  {
    title: "Ngữ cảnh (Context)",
    icon: Search,
    color: "blue",
    desc: "Bối cảnh dự án, tình trạng hiện tại, tài liệu liên quan. Giúp AI hiểu 'tại sao' thay vì chỉ 'làm gì'.",
    items: [
      "Mô tả nghiệp vụ bằng ngôn ngữ người dùng cuối",
      "Cung cấp thông tin hệ thống đang có",
      "Đề cập actor nào thực hiện, quyền hạn ra sao",
      "Đính kèm tài liệu phân tích khi có liên quan",
    ],
  },
  {
    title: "Nhiệm vụ (Task)",
    icon: FileText,
    color: "purple",
    desc: "Việc cần làm, cụ thể và rõ ràng. Dùng động từ hành động cụ thể, không mơ hồ.",
    items: [
      "Dùng động từ rõ ràng: tạo, sửa, xóa, viết, phân tích, review",
      "Nhiệm vụ phải có giới hạn: làm gì, cho ai, ở đâu",
      "Viết theo cấu trúc: Hành động + Đối tượng + Phạm vi",
      "Không dùng động từ mơ hồ: cải thiện, tối ưu, làm tốt hơn",
    ],
  },
  {
    title: "Ràng buộc (Constraints)",
    icon: CheckCircle,
    color: "green",
    desc: "Giới hạn kỹ thuật, nghiệp vụ, quy tắc phải tuân thủ. Viết bằng ngôn ngữ có thể kiểm tra.",
    items: [
      "Ràng buộc kỹ thuật: framework, version, quy tắc code",
      "Ràng buộc nghiệp vụ: permission, ownership, business rule",
      "Ràng buộc chất lượng: test nào phải pass, verify bằng cách nào",
      "Ràng buộc phạm vi: KHÔNG ĐƯỢC làm gì",
    ],
  },
  {
    title: "Kỳ vọng đầu ra (Expected Output)",
    icon: Lightbulb,
    color: "amber",
    desc: "Định dạng, cấu trúc, tiêu chí đánh giá kết quả. Biết rõ khi nào task hoàn thành.",
    items: [
      "Định dạng: markdown, JSON, code file, báo cáo",
      "Cấu trúc đầu ra: phần nào, thứ tự ra sao",
      "Tiêu chí hoàn thành: checklist cụ thể",
      "Ví dụ đầu ra: càng cụ thể càng tốt",
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20", iconBg: "bg-blue-500/10" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20", iconBg: "bg-purple-500/10" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20", iconBg: "bg-green-500/10" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20", iconBg: "bg-amber-500/10" },
  red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20", iconBg: "bg-red-500/10" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20", iconBg: "bg-teal-500/10" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20", iconBg: "bg-pink-500/10" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20", iconBg: "bg-cyan-500/10" },
};

const aiPromptTemplate = `Hãy viết cho tôi một prompt chuẩn để giao cho AI Agent làm việc.

Yêu cầu prompt phải có 4 thành phần:
1. Context (Ngữ cảnh) — bối cảnh dự án, hệ thống đang có
2. Task (Nhiệm vụ) — việc cần làm, cụ thể
3. Constraints (Ràng buộc) — giới hạn kỹ thuật, nghiệp vụ
4. Expected Output (Kỳ vọng) — định dạng, tiêu chí hoàn thành

Nghiệp vụ của tôi:
*[Dán mô tả nghiệp vụ ở đây — ví dụ: tôi có dự án Next.js với Prisma, cần thêm chức năng đăng nhập bằng email/password]*

Hãy viết prompt hoàn chỉnh, có template và ví dụ cụ thể.`;

export function PromptGuideClient() {
  return (
    <div className="max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* 4 Core Components */}
      <section>
        <h2 className="text-xl font-bold mb-5">4 thành phần bắt buộc</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {coreComponents.map((comp) => {
            const c = colorMap[comp.color];
            const Icon = comp.icon;
            return (
              <div key={comp.title} className={`flex flex-col gap-4 p-5 rounded-xl ${c.bg} border ${c.border}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{comp.title}</h3>
                    <p className="text-xs text-muted-foreground">{comp.desc}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {comp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.text} flex-shrink-0 mt-2`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* AI sinh prompt */}
      <section>
        <h2 className="text-xl font-bold mb-2">Dùng AI sinh prompt cho bạn</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Thay vì tự viết prompt từ đầu, hãy nhờ GPT, Gemini, Claude hoặc bất kỳ AI nào sinh prompt theo cấu trúc chuẩn.
          Bạn chỉ cần mô tả nghiệp vụ — AI sẽ giúp bạn viết prompt đúng format.
        </p>

        {/* AI tool cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              name: "ChatGPT",
              url: "https://chat.openai.com",
              color: "green",
              desc: "GPT-4/4o mạnh mẽ cho reasoning phức tạp và sinh prompt chuẩn",
              strength: "Reasoning dài, multi-step",
            },
            {
              name: "Claude",
              url: "https://claude.ai",
              color: "amber",
              desc: "Claude 3.5 Sonnet viết prompt rõ ràng, cấu trúc logic cao",
              strength: "Writing, analysis",
            },
            {
              name: "Gemini",
              url: "https://gemini.google.com",
              color: "cyan",
              desc: "Gemini 2.0 Flash hỗ trợ tìm kiếm real-time và multimodal",
              strength: "Real-time, web search",
            },
          ].map((tool) => {
            const c = colorMap[tool.color];
            return (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col p-4 rounded-xl border ${c.border} bg-card hover:shadow-md transition-all`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${c.iconBg} flex items-center justify-center`}>
                    <Sparkles className={`w-4 h-4 ${c.text}`} />
                  </div>
                  <ExternalLink className={`w-4 h-4 ${c.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
                <h3 className="font-semibold text-sm mb-1">{tool.name}</h3>
                <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{tool.desc}</p>
                <p className="text-xs font-medium mt-auto">{tool.strength}</p>
              </a>
            );
          })}
        </div>

        {/* Prompt mẫu */}
        <div className="rounded-xl border bg-card p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-sm">Prompt mẫu để nhờ AI sinh prompt cho bạn</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Copy prompt bên dưới, dán vào ChatGPT/Gemini/Claude, thay phần in nghiêng bằng mô tả nghiệp vụ:
          </p>

          <div className="rounded-lg border bg-muted/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Prompt để sinh prompt</span>
              <button
                className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                onClick={() => navigator.clipboard.writeText(aiPromptTemplate)}
              >
                <Copy className="w-3.5 h-3.5" />
                Copy
              </button>
            </div>
            <pre className="text-xs text-muted-foreground font-mono whitespace-pre-wrap leading-relaxed">
{aiPromptTemplate}
            </pre>
          </div>

          {/* Tips */}
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: Zap, text: "Càng mô tả nghiệp vụ rõ, prompt sinh ra càng chính xác" },
              { icon: Download, text: "Sau khi có prompt, tải file quy tắc viết prompt về để dùng làm ràng buộc" },
              { icon: MessageSquare, text: "Dùng AI web để refine prompt nhiều lần cho đến khi đạt yêu cầu" },
              { icon: CheckCircle, text: "Prompt tốt nhất là prompt bạn đã test và thấy AI trả lời đúng" },
            ].map((tip) => (
              <div key={tip.text} className="flex items-start gap-2 text-sm text-muted-foreground">
                <tip.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                {tip.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example: Good vs Bad */}
      <section>
        <h2 className="text-xl font-bold mb-5">Ví dụ: Prompt tốt vs Prompt tệ</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl border bg-red-500/5 border-red-500/20">
            <div className="flex items-start gap-2 mb-3">
              <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-semibold text-red-600 dark:text-red-400">Prompt tệ</p>
            </div>
            <p className="text-sm text-muted-foreground font-mono bg-muted/30 p-3 rounded-lg mb-2">
              &ldquo;Viết function đăng nhập cho tôi.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground">
              Không biết stack gì, framework nào, có những gì rồi, user nào, permission ra sao, error handle thế nào.
            </p>
          </div>
          <div className="p-4 rounded-xl border bg-green-500/5 border-green-500/20">
            <div className="flex items-start gap-2 mb-3">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-semibold text-green-600 dark:text-green-400">Prompt tốt</p>
            </div>
            <pre className="text-xs text-muted-foreground font-mono bg-muted/30 p-3 rounded-lg whitespace-pre-wrap leading-relaxed">
{`NHIỆM VỤ: Viết API login sử dụng NextAuth.js
CONTEXT: Next.js App Router, Prisma, credentials provider
RÀNG BUỘC:
  - Email/password, không social login
  - Sử dụng existing User model
  - Error: wrong credentials, account not found
  - Redirect: /dashboard (thành công), /login?error=XYZ (thất bại)
KỲ VỌNG: Tạo src/app/api/auth/[...nextauth]/route.ts`}
            </pre>
          </div>
        </div>
      </section>

      {/* Task-specific templates */}
      <section>
        <h2 className="text-xl font-bold mb-5">Template cho từng loại nhiệm vụ</h2>
        <div className="space-y-3">
          {[
            {
              task: "Viết code mới",
              color: "blue",
              template: "CONTEXT: Dự án, stack, trạng thái\nTASK: Hành động + Đối tượng + Phạm vi\nCONSTRAINTS: Framework, version, quy tắc code\nOUTPUT: File tạo mới, file sửa, tiêu chí hoàn thành",
            },
            {
              task: "Fix bug",
              color: "red",
              template: "CONTEXT: Bug gặp, hành vi đúng/sai\nTASK: Sửa bug\nCONSTRAINTS: Giữ interface, không đổi logic khác\nOUTPUT: File sửa, test case, cách verify",
            },
            {
              task: "Review code",
              color: "purple",
              template: "CONTEXT: File cần review, quy tắc áp dụng\nTASK: Review theo tiêu chí\nCONSTRAINTS: Architecture layer, security\nOUTPUT: Markdown — Tóm tắt / Vấn đề / Đề xuất / Điểm tốt",
            },
            {
              task: "Viết tài liệu",
              color: "green",
              template: "CONTEXT: File/component, người đọc mục tiêu\nTASK: Viết docs\nCONSTRAINTS: Cấu trúc quy định, ngôn ngữ\nOUTPUT: Markdown theo template có sẵn",
            },
          ].map((item) => {
            const c = colorMap[item.color];
            return (
              <details key={item.task} className="group rounded-xl border bg-card">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center`}>
                      <span className={`text-xs font-bold ${c.text}`}>{item.task[0]}</span>
                    </div>
                    <span className="text-sm font-medium">{item.task}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-4 pb-4">
                  <pre className="text-xs text-muted-foreground font-mono bg-muted/30 p-3 rounded-lg whitespace-pre-wrap leading-relaxed">
{item.template}
                  </pre>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      {/* Techniques */}
      <section>
        <h2 className="text-xl font-bold mb-5">Kỹ thuật nâng cao</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Zero-shot",
              desc: "Không cung cấp ví dụ. Dùng khi AI đã hiểu rõ domain và yêu cầu đơn giản.",
              example: "Liệt kê tất cả export từ file utils.ts",
            },
            {
              title: "Few-shot",
              desc: "Cung cấp 1-3 ví dụ minh họa input→output. Dùng khi định dạng đầu ra đặc biệt.",
              example: "Parse log file và trả về JSON theo format cho sẵn",
            },
            {
              title: "Chain-of-Thought",
              desc: "Yêu cầu AI giải thích suy luận trước. Dùng cho bài toán nhiều bước logic.",
              example: "Phân tích bug: hiểu root cause trước, rồi đề xuất fix",
            },
            {
              title: "Iterative Prompting",
              desc: "Chia thành nhiều bước: phân tích → đề xuất → implement → verify. Chờ approval giữa các bước.",
              example: "Bước 1: phân tích và confirm. Bước 2: đề xuất design. Bước 3: implement.",
            },
            {
              title: "Spec-driven",
              desc: "Yêu cầu AI tự sinh spec trước, rồi dùng spec làm ràng buộc cho implementation.",
              example: "Viết SPEC.md trước, sau đó implement theo spec đã approve",
            },
            {
              title: "Structured Output",
              desc: "Yêu cầu đầu ra theo cấu trúc JSON cố định để dễ parse và verify tự động.",
              example: "{ action, reasoning, files: { create, modify, delete }, tests }",
            },
          ].map((tech) => (
            <div key={tech.title} className="p-4 rounded-xl border bg-muted/30">
              <h3 className="font-semibold text-sm mb-1">{tech.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{tech.desc}</p>
              <p className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
                Ví dụ: {tech.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section>
        <h2 className="text-xl font-bold mb-5">Checklist trước khi gửi prompt</h2>
        <div className="rounded-xl border bg-card p-6 space-y-3">
          {[
            "Ngữ cảnh đã đủ để AI hiểu domain?",
            "Actor & Permission đã xác định rõ?",
            "Nhiệm vụ có động từ cụ thể và phạm vi rõ?",
            "Ràng buộc kỹ thuật, nghiệp vụ, phạm vi đã đủ?",
            "Format đầu ra và tiêu chí hoàn thành đã rõ?",
            "Không có thông tin nhiễu hoặc scope creep?",
          ].map((item, i) => (
            <label key={i} className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-1 rounded border-border" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Tải file quy tắc */}
      <section>
        <div className="rounded-xl border border-dashed bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
              <Download className="w-6 h-6 text-indigo-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-1">Tải file quy tắc viết prompt</h3>
              <p className="text-sm text-muted-foreground">
                File markdown chứa đầy đủ 4 thành phần, template cho 6 loại nhiệm vụ, kỹ thuật nâng cao, và checklist toàn diện.
                Thêm vào Agent rule để AI luôn tuân thủ cấu trúc prompt chuẩn.
              </p>
            </div>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-all text-sm whitespace-nowrap shrink-0"
            >
              <Download className="w-4 h-4" />
              Tải tài nguyên
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section>
        <h2 className="text-xl font-bold mb-5">Liên quan</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Phân tích yêu cầu", href: "/guide/analysis", desc: "Xác định actor, entity trước khi viết prompt" },
            { label: "Quy trình thực chiến", href: "/guide/workflow", desc: "Từ phân tích → prompt → code → review" },
            { label: "Tài nguyên", href: "/resources", desc: "Tải file quy tắc viết prompt" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group">
              <div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
