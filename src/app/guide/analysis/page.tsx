import Link from "next/link";
import type { Metadata } from "next";
import {
  Search,
  Users,
  Shield,
  Layers,
  Target,
  Database,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Wrench,
  BrainCircuit,
  Compass,
  Zap,
  Bot,
  Code2,
  MessageSquare,
  FileText,
  Sparkles,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Phân tích yêu cầu",
  description: "Học cách phân tích yêu cầu chức năng: xác định actor, entity, ownership, permission và build order. Kết hợp AI Agent BA và Plan mode để tạo yêu cầu chức năng hiệu quả.",
};

const principles = [
  { icon: Target, color: "blue", title: "Viết theo nghiệp vụ trước", desc: "Mô tả bài toán trước, quyết định kỹ thuật sau. Không nhảy thẳng sang giải pháp." },
  { icon: Users, color: "violet", title: "Gắn chức năng với actor cụ thể", desc: "Mỗi chức năng phải trả lời: ai dùng, có quyền gì, thao tác trên dữ liệu của ai, bị giới hạn ở đâu." },
  { icon: Database, color: "green", title: "Xác định entity lõi ngay", desc: "Entity là dữ liệu cốt lõi. Với mỗi entity phải rõ: ai tạo, ai xem, ai sửa, ai xóa, ownership thuộc về ai." },
  { icon: Shield, color: "orange", title: "Phân tích ownership rõ ràng", desc: "Dữ liệu thuộc về ai? Ai được xem toàn bộ? Ai chỉ xem dữ liệu của chính mình? Ai được sửa, ai bị giới hạn?" },
  { icon: Layers, color: "pink", title: "Tách nhỏ từng chức năng", desc: "Không gộp nhiều hành vi khác nhau vào một mục. Tách: tạo, xem, cập nhật, xóa, duyệt, hủy thành các dòng riêng." },
  { icon: Search, color: "cyan", title: "Xác định thứ tự build", desc: "Auth foundation → Entity → Layout → Feature. Ai tạo dữ liệu lõi, ai quyết định permission, ai tạo giá trị cốt lõi?" },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20", iconBg: "bg-blue-500/10" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/20", iconBg: "bg-violet-500/10" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20", iconBg: "bg-green-500/10" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20", iconBg: "bg-orange-500/10" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20", iconBg: "bg-pink-500/10" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20", iconBg: "bg-cyan-500/10" },
};

const exampleRules = [
  {
    label: "Mỗi chức năng phải gắn actor",
    wrong: "Triển khai module quản lý đơn hàng.",
    right: [
      "User tạo đơn hàng của chính mình",
      "User xem danh sách đơn hàng của chính mình",
      "Admin xem toàn bộ đơn hàng",
      "Admin cập nhật trạng thái đơn hàng, hủy đơn",
      "Guest xem chi tiết sản phẩm, thêm vào giỏ hàng",
    ],
    icon: Users,
    color: "violet",
  },
  {
    label: "Tên chức năng phải rõ động từ",
    wrong: "Quản lý dữ liệu, thao tác hệ thống, xử lý hồ sơ",
    right: [
      "Tạo / Xem / Cập nhật / Xóa",
      "Duyệt / Hủy / Gán / Khóa / Mở khóa",
      "Xuất / Gửi / Xác nhận / Thanh toán",
      "Hoàn tiền / Lọc / Tìm kiếm",
    ],
    icon: Layers,
    color: "pink",
  },
  {
    label: "Ownership rõ ràng",
    wrong: "Ai cũng có thể quản lý đơn hàng",
    right: [
      "User chỉ được xem đơn hàng của chính mình",
      "Admin được xem tất cả đơn hàng",
      "Admin cập nhật trạng thái nhưng không được giả lập thanh toán",
      "Moderator duyệt bài nhưng không được thay đổi role",
    ],
    icon: Shield,
    color: "orange",
  },
  {
    label: "Tách core và support",
    wrong: "Tất cả tính năng như nhau, build cùng lúc",
    right: [
      "Core: sản phẩm, giỏ hàng, đặt hàng, thanh toán",
      "Support: dashboard thống kê, notifications nâng cao",
      "Out-of-scope: đổi theme, export CSV phức tạp",
    ],
    icon: Target,
    color: "blue",
  },
];

const fileStructure = [
  { num: "1", title: "Tổng quan dự án", desc: "Tên, mục tiêu, phạm vi" },
  { num: "2", title: "Actor chính", desc: "Ai dùng hệ thống, quyền của họ" },
  { num: "3", title: "Core entities", desc: "Dữ liệu cốt lõi, ownership" },
  { num: "4", title: "Yêu cầu chức năng", desc: "Theo từng actor, tách nhỏ" },
  { num: "5", title: "Yêu cầu phi chức năng", desc: "Validate, auth, permission" },
  { num: "6", title: "Ownership & Permission", desc: "Ai được gì, ở đâu" },
  { num: "7", title: "Actor priority", desc: "Actor nào build trước" },
  { num: "8", title: "Build order", desc: "Thứ tự xây dựng" },
  { num: "9", title: "Risk areas", desc: "Phần dễ sai cần chú ý" },
  { num: "10", title: "Assumptions", desc: "Giả định nếu đầu vào chưa đủ" },
];

const aiBATools = [
  {
    icon: Bot,
    name: "Claude (claude.ai / Claude Code)",
    tagline: "BA Agent — Business Analyst chuyên nghiệp",
    color: "amber",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-600 dark:text-amber-400",
    badge: "Khuyến nghị",
    badgeBg: "bg-amber-500",
    badgeText: "text-white",
    website: "https://claude.ai",
    summary: "Claude nổi bật về phân tích nghiệp vụ nhờ khả năng suy luận mạnh và ngữ cảnh dài. Dùng Claude khi cần AI đặt câu hỏi phản biện, gợi ra edge cases, và tổ chức yêu cầu có hệ thống.",
    howTo: [
      { step: 1, action: "Mở Claude.ai hoặc Claude Code", detail: "Dùng claude.ai cho trao đổi nhanh, Claude Code cho làm việc trong project" },
      { step: 2, action: "Gửi mô tả project ngắn gọn", detail: 'Ví dụ: "Tôi đang làm một ứng dụng quản lý cửa hàng. Khách hàng mua hàng, nhân viên bán hàng tại quầy, admin quản lý kho. Hãy giúp tôi phân tích yêu cầu chức năng."' },
      { step: 3, action: "AI sẽ hỏi câu hỏi phản biện", detail: "Claude sẽ hỏi về edge cases, exception flows, security concerns. Trả lời để AI hiểu sâu hơn." },
      { step: 4, action: "AI tạo file phân tích hoàn chỉnh", detail: "Claude sẽ xuất ra cấu trúc đầy đủ: actors, entities, permissions, use cases, build order" },
    ],
    pros: ["Hỏi câu hỏi phản biện trước khi viết", "Tạo FRD đầy đủ theo chuẩn học thuật", "Phát hiện edge cases và risks", "Duy trì ngữ cảnh cuộc hội thoại dài"],
    cons: ["Cần subscription cho Claude Pro", "Chậm hơn GPT-4o một chút"],
    prompt: 'Tôi đang làm dự án [tên dự án]. Đây là mô tả: [mô tả ngắn]. Hãy phân tích yêu cầu chức năng theo chuẩn FRD (Functional Requirements Document): xác định actors, entities, ownership, permissions, use cases, build order. Đặt câu hỏi phản biện nếu thông tin chưa đủ.',
  },
  {
    icon: Sparkles,
    name: "ChatGPT / GPT-4o",
    tagline: "Phân tích nhanh — Brainstorm sâu",
    color: "blue",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-600 dark:text-blue-400",
    badge: "Phổ biến",
    badgeBg: "bg-blue-500",
    badgeText: "text-white",
    website: "https://chatgpt.com",
    summary: "GPT-4o mạnh về tốc độ và đa dụng. Dùng khi cần phân tích nhanh, brainstorm nhiều scenario, hoặc muốn AI đóng vai khách hàng để kiểm tra yêu cầu.",
    howTo: [
      { step: 1, action: "Chọn GPT-4o trong ChatGPT", detail: "Đảm bảo dùng model mới nhất để có khả năng phân tích tốt nhất" },
      { step: 2, action: "Gửi prompt phân tích yêu cầu", detail: "Dùng prompt chuẩn (xem bên dưới) để AI hoạt động đúng vai trò BA" },
      { step: 3, action: "Yêu cầu AI đóng vai khách hàng", detail: 'Hãy AI đặt câu hỏi như khách hàng thật: "Tôi muốn hỏi về trường hợp..."' },
      { step: 4, action: "Export kết quả", detail: "Copy nội dung phân tích vào file .md, format lại nếu cần" },
    ],
    pros: ["Miễn phí (với GPT-3.5) hoặc subscription rẻ", "Tốc độ nhanh", "Nhiều phiên bản để chọn", "Hỗ trợ file upload nếu cần"],
    cons: ["Ít hỏi câu hỏi phản biện chủ động", "Ngữ cảnh hội thoại ngắn hơn Claude"],
    prompt: 'Bạn là một Business Analyst (BA) chuyên nghiệp. Tôi cần bạn giúp phân tích yêu cầu chức năng cho dự án: [mô tả dự án]. Hãy phân tích theo cấu trúc FRD: (1) Actors — ai là người dùng chính, (2) Entities — dữ liệu cốt lõi là gì, (3) Use Cases — mỗi actor cần làm gì, (4) Ownership & Permissions — ai quản lý dữ liệu gì, (5) Build Order — thứ tự xây dựng ưu tiên, (6) Risks — phần nào dễ sai. Đặt câu hỏi làm rõ nếu thông tin chưa đủ.',
  },
  {
    icon: Code2,
    name: "Cursor Composer / Plan Mode",
    tagline: "Phân tích ngay trong IDE",
    color: "violet",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-600 dark:text-violet-400",
    badge: "IDE",
    badgeBg: "bg-violet-500",
    badgeText: "text-white",
    website: "https://cursor.sh",
    summary: "Cursor có chế độ Composer với Plan mode cho phép AI phân tích và lập kế hoạch ngay trong IDE. Tốt khi bạn đã có codebase và muốn phân tích feature mới trong bối cảnh project hiện tại.",
    howTo: [
      { step: 1, action: "Mở Cursor, tạo Composer mới", detail: "Nhấn Cmd+K (Mac) / Ctrl+K (Windows) để mở Composer" },
      { step: 2, action: "Chuyển sang Plan mode", detail: "Nhấn Tab Plan để AI tập trung vào phân tích thay vì viết code" },
      { step: 3, action: "Mô tả feature muốn phân tích", detail: "AI sẽ đọc codebase hiện tại, rồi phân tích feature mới trong bối cảnh project" },
      { step: 4, action: "Review và chỉnh sửa plan", detail: "Cursor cho phép edit plan trực tiếp. Bổ sung thêm nếu AI bỏ sót" },
    ],
    pros: ["Đọc được codebase hiện tại", "Phân tích trong bối cảnh project thật", "Chuyển plan sang code dễ dàng", "Tích hợp với luật project (.cursorrules)"],
    cons: ["Cần trả phí (Cursor Pro)", "Plan mode có giới hạn context", "Chỉ mạnh khi đã có project"],
    prompt: "Dùng Plan mode của Cursor: mô tả feature, để AI phân tích trong bối cảnh codebase hiện tại.",
  },
  {
    icon: Bot,
    name: "Claude Code — Plan Mode",
    tagline: "CLI BA cho developer",
    color: "cyan",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-600 dark:text-cyan-400",
    badge: "CLI",
    badgeBg: "bg-cyan-500",
    badgeText: "text-white",
    website: "https://docs.anthropic.com/en/docs/claude-code",
    summary: "Claude Code CLI có plan mode cho phép phân tích và lập kế hoạch ngay trong terminal. Đặc biệt mạnh khi kết hợp với CLAUDE.md chứa quy tắc phân tích yêu cầu.",
    howTo: [
      { step: 1, action: "Chạy claude trong terminal từ thư mục project", detail: "Claude Code sẽ tự đọc CLAUDE.md nếu có" },
      { step: 2, action: 'Dùng lệnh /plan hoặc gõ "plan"', detail: "Kích hoạt plan mode để AI tập trung phân tích" },
      { step: 3, action: "Mô tả feature cần phân tích", detail: "Claude sẽ đọc project hiện tại và đưa ra phân tích" },
      { step: 4, action: "Yêu cầu xuất ra file FRD", detail: 'Gõ "xuất ra file phân tích yêu cầu.md" để lưu kết quả' },
    ],
    pros: ["Chạy trong terminal, không cần IDE", "Đọc được toàn bộ project", "Tích hợp với CLAUDE.md", "Miễn phí (cần API key)"],
    cons: ["Cần API key", "Learning curve cho developer mới"],
    prompt: 'Dùng /plan trong Claude Code: mô tả feature, để Claude phân tích và xuất ra file phân tích yêu cầu.',
  },
];

const baWorkflow = [
  {
    icon: MessageSquare,
    num: "1",
    title: "Mô tả project cho AI",
    desc: "Gửi mô tả ngắn gọn: tên dự án, mục tiêu, người dùng chính. Càng rõ ràng, AI phân tích càng chính xác.",
    color: "blue",
  },
  {
    icon: BrainCircuit,
    num: "2",
    title: "AI đặt câu hỏi phản biện",
    desc: "AI BA sẽ hỏi về edge cases, exception flows, security, validation. Trả lời để AI hiểu sâu hơn nghiệp vụ.",
    color: "violet",
  },
  {
    icon: FileText,
    num: "3",
    title: "AI tạo FRD / Phân tích yêu cầu",
    desc: "AI xuất ra cấu trúc đầy đủ: actors, entities, use cases, ownership, permissions, build order. Theo chuẩn Functional Requirements Document.",
    color: "green",
  },
  {
    icon: Zap,
    num: "4",
    title: "Review và tinh chỉnh",
    desc: "Đọc lại phân tích, bổ sung phần thiếu, loại bỏ phần thừa. Đây là bước human-in-the-loop bắt buộc.",
    color: "amber",
  },
  {
    icon: CheckCircle2,
    num: "5",
    title: "Dùng làm input cho quy trình tiếp theo",
    desc: "File phân tích yêu cầu trở thành input cho: viết prompt, lập kế hoạch, hoặc bắt đầu code.",
    color: "cyan",
  },
];

const relatedTools = [
  { label: "Quy tắc viết Prompt", href: "/guide/prompt", desc: "Dùng phân tích để viết prompt chính xác" },
  { label: "Quy trình thực chiến", href: "/workflow", desc: "Từ phân tích đến kế hoạch triển khai" },
  { label: "Tạo bộ luật riêng", href: "/guide/gpt-rules", desc: "Tạo bộ luật phân tích cho AI BA" },
];

export default function AnalysisGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-background to-emerald-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
            <Search className="w-4 h-4" />
            Phân tích yêu cầu
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Phân tích yêu cầu{" "}
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              trước khi code
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Trước khi viết dòng code nào, hãy phân tích yêu cầu để xác định scope chính xác,
            tránh over-engineering, và đảm bảo AI đi đúng hướng. Kết hợp AI BA Agent và Plan mode
            để tạo yêu cầu chức năng hiệu quả và nhanh hơn.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-14">

        {/* ========== AI BA AGENTS (MỚI) ========== */}

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <BrainCircuit className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Dùng AI làm BA (Business Analyst)</h2>
              <p className="text-xs text-muted-foreground">AI BA Agent phân tích yêu cầu nhanh hơn, sâu hơn, chuẩn hơn so với viết tay</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Thay vì viết phân tích yêu cầu từ đầu, hãy để AI đóng vai Business Analyst. AI sẽ đặt câu hỏi phản biện,
            phát hiện edge cases, tạo FRD (Functional Requirements Document) theo chuẩn học thuật — tất cả trong
            vài phút. Bạn chỉ cần review và tinh chỉnh.
          </p>

          {/* BA Workflow */}
          <div className="grid sm:grid-cols-5 gap-3 mb-8">
            {baWorkflow.map((step) => {
              const c = colorMap[step.color as keyof typeof colorMap] || colorMap.blue;
              const Icon = step.icon;
              return (
                <div key={step.num} className={`flex flex-col items-center gap-2 p-3 rounded-xl border ${c.border} bg-card text-center`}>
                  <div className={`w-9 h-9 rounded-full ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <span className={`text-xs font-black ${c.text}`}>{step.num}</span>
                  </div>
                  <Icon className={`w-4 h-4 ${c.text}`} />
                  <div className="text-[10px] font-semibold leading-tight">{step.title}</div>
                </div>
              );
            })}
          </div>

          {/* AI Tool Cards */}
          {aiBATools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className={`rounded-2xl border ${tool.border} ${tool.bg} overflow-hidden`}>
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
                      <h3 className="text-lg font-bold mb-0.5">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground italic mb-3">{tool.tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tool.summary}</p>
                    </div>
                    {tool.website && (
                      <a href={tool.website} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 h-9 px-4 rounded-xl ${tool.bg} border ${tool.border} font-medium text-xs ${tool.text} hover:opacity-80 transition-all shrink-0`}>
                        Truy cập <ChevronRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* How to */}
                <div className="p-6 border-b border-border/50">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Cách dùng</h4>
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

                {/* Pros & Cons */}
                <div className="p-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">Ưu điểm</span>
                    </div>
                    <div className="space-y-1.5">
                      {tool.pros.map((p) => (
                        <div key={p} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <XCircle className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">Hạn chế</span>
                    </div>
                    <div className="space-y-1.5">
                      {tool.cons.map((c) => (
                        <div key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <XCircle className="w-3 h-3 text-red-400 flex-shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Prompt mẫu */}
                {tool.prompt && (
                  <div className="px-6 pb-6">
                    <div className="rounded-xl border bg-card p-4">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Prompt mẫu cho {tool.name}</div>
                      <div className={`rounded-lg border ${tool.border} bg-muted/30 p-3`}>
                        <p className="text-xs font-mono text-muted-foreground leading-relaxed">{tool.prompt}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* ========== PLAN MODE (MỚI) ========== */}

        <section>
          <div className="rounded-2xl border bg-gradient-to-br from-violet-500/5 to-purple-500/5 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6 text-violet-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-2">Plan Mode trong IDE AI</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Plan mode là chế độ đặc biệt trong các AI coding IDE (Cursor, Claude Code, Copilot) cho phép AI tập trung phân tích và lập kế hoạch thay vì viết code. Khác với chat thông thường, Plan mode buộc AI phải suy nghĩ trước khi hành động.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { tool: "Cursor", how: "Cmd+K → Tab Plan", desc: "Composer với Plan mode" },
                    { tool: "Claude Code", how: "Gõ /plan hoặc plan", desc: "CLI plan mode" },
                    { tool: "Copilot", how: "@workspace /plan", desc: "Copilot Chat plan" },
                  ].map((item) => (
                    <div key={item.tool} className="p-3 rounded-xl border bg-card">
                      <div className="text-sm font-semibold mb-0.5">{item.tool}</div>
                      <div className="text-[10px] font-mono text-muted-foreground mb-1">{item.how}</div>
                      <div className="text-[10px] text-muted-foreground">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 6 NGUYÊN TẮC (GIỮ NGUYÊN) ========== */}

        <section>
          <h2 className="text-xl font-bold mb-5">6 nguyên tắc quan trọng</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p) => {
              const c = colorMap[p.color];
              const Icon = p.icon;
              return (
                <div key={p.title} className={`flex items-start gap-4 p-5 rounded-xl ${c.bg} border ${c.border}`}>
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Ví dụ đúng/sai */}
        <section>
          <h2 className="text-xl font-bold mb-5">Ví dụ đúng và sai</h2>
          <div className="space-y-4">
            {exampleRules.map((ex) => {
              const c = colorMap[ex.color];
              const Icon = ex.icon;
              return (
                <div key={ex.label} className="rounded-xl border bg-card overflow-hidden">
                  <div className={`flex items-center gap-3 px-5 py-4 ${c.bg}`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                    <span className={`text-sm font-bold ${c.text}`}>{ex.label}</span>
                  </div>
                  <div className="p-5 grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase">Sai</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">{ex.wrong}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase">Đúng</span>
                      </div>
                      <ul className="space-y-1">
                        {ex.right.map((r, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cấu trúc file */}
        <section>
          <h2 className="text-xl font-bold mb-5">Cấu trúc file phân tích chuẩn</h2>
          <p className="text-sm text-muted-foreground mb-5">
            File phân tích yêu cầu chức năng phải có thứ tự rõ ràng, không viết lộn xộn theo kiểu nghĩ đến đâu ghi đến đâu.
            AI BA sẽ tạo cấu trúc này tự động.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {fileStructure.map((s) => (
              <div key={s.num} className="flex items-start gap-3 p-4 rounded-xl border bg-card">
                <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">{s.num}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Assumptions */}
        <section>
          <div className="rounded-xl border bg-amber-500/5 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-2">Khi đầu vào chưa đủ, phải ghi Assumptions</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Không được biến assumption thành fact. Mỗi giả định phải ghi rõ dưới mục riêng.
                </p>
                <div className="space-y-2">
                  {[
                    "Giả định: admin là actor tạo dữ liệu sản phẩm",
                    "Giả định: user chỉ xem và mua sản phẩm, không tự tạo sản phẩm",
                    "Giả định: hệ thống có 2 role chính là admin và user",
                    "Giả định: /admin là khu vực protected hoàn toàn",
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-1" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insight */}
        <section>
          <div className="rounded-2xl border bg-gradient-to-br from-green-500/5 to-emerald-500/5 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-3">Tại sao dùng AI BA thay vì tự viết?</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { t: "Nhanh hơn 10x", d: "AI tạo FRD trong vài phút thay vì vài giờ" },
                    { t: "Sâu hơn", d: "AI phát hiện edge cases mà người thường bỏ qua" },
                    { t: "Chuẩn hơn", d: "AI theo chuẩn FRD học thuật, không thiếu phần" },
                    { t: "Human-in-the-loop", d: "AI tạo, người review và tinh chỉnh — kết hợp tốt nhất" },
                    { t: "Tái sử dụng", d: "File phân tích từ AI BA dùng làm input cho mọi bước tiếp theo" },
                    { t: "Kết hợp luật", d: "Thêm quy tắc phân tích vào CLAUDE.md để AI BA tuân thủ" },
                  ].map((item) => (
                    <div key={item.t} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold">{item.t}</span>
                        <span className="text-sm text-muted-foreground"> — {item.d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liên quan */}
        <section>
          <h2 className="text-xl font-bold mb-5">Liên quan</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTools.map((item) => (
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

        {/* CTA */}
        <div className="rounded-2xl border border-dashed bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6 text-indigo-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-1">Muốn xây dựng yêu cầu ngay?</h3>
              <p className="text-sm text-muted-foreground">
                Dùng AI BA kết hợp với quy tắc viết phân tích yêu cầu để tạo FRD chuẩn chỉnh.
              </p>
            </div>
            <Link
              href="/guide/analysis/build"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-all text-sm whitespace-nowrap shrink-0">
              <ArrowRight className="w-4 h-4" />
              Xây dựng yêu cầu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
