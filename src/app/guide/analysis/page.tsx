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
  red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20", iconBg: "bg-red-500/10" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20", iconBg: "bg-orange-500/10" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20", iconBg: "bg-pink-500/10" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20", iconBg: "bg-cyan-500/10" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20", iconBg: "bg-amber-500/10" },
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

;

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
  { label: "Sự kết thúc của Vibe Coding", href: "/guide/workflow", desc: "Từ phân tích đến kế hoạch triển khai" },
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

        </section>
        {/* ========== Socratic Method (MỚI) ========== */}

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <BrainCircuit className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Phần mới</span>
              <h2 className="text-xl font-bold mt-0.5">Phương pháp Socratic — Đặt câu hỏi để hiểu sâu</h2>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Phương pháp Socratic là cách AI đặt câu hỏi <strong className="text-foreground">một-lần-một-câu</strong> để khám phá thiết kế,
            phát hiện edge cases, và xác nhận scope trước khi viết bất kỳ dòng code nào. Thay vì đoán,
            AI <strong className="text-foreground">hỏi</strong> cho đến khi hiểu rõ.
          </p>

          {/* WHY */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              Tại sao Socratic quan trọng trong BA?
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: Target, title: "Tránh scope creep", desc: "1-2 câu hỏi đúng có thể tiết kiệm cả giờ làm lại vì thêm feature không cần thiết", color: "red" },
                { icon: Users, title: "Hiểu đúng người dùng", desc: "Hỏi về user flow thực tế, không phải user giả định trong đầu developer", color: "violet" },
                { icon: Shield, title: "Phát hiện lỗ hổng bảo mật", desc: "Câu hỏi về edge cases bảo mật giúp tìm ra attack vectors trước khi code", color: "orange" },
                { icon: Database, title: "Nắm rõ dữ liệu", desc: "Hỏi về data ownership, permission, lifecycle giúp thiết kế schema đúng ngay từ đầu", color: "blue" },
              ].map((item) => {
                const c = colorMap[item.color as keyof typeof colorMap] || colorMap.blue;
                const Icon = item.icon;
                return (
                  <div key={item.title} className={`flex items-start gap-3 p-4 rounded-xl border ${c.border} bg-card`}>
                    <div className={`w-9 h-9 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 ${c.text}`} />
                    </div>
                    <div>
                      <div className="text-xs font-bold mb-0.5">{item.title}</div>
                      <p className="text-[10px] text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3-STEP PATTERN */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-500" />
              3 bước trong cuộc đối thoại Socratic
            </h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  num: "1",
                  name: "Khám phá (Explore)",
                  desc: "AI hỏi câu hỏi mở để hiểu mục đích, ràng buộc, và tiêu chí thành công. Mỗi câu hỏi chỉ một chủ đề.",
                  example: "\"Ai là người dùng chính của tính năng này?\"",
                  color: "blue",
                },
                {
                  num: "2",
                  name: "Kiểm chứng (Test)",
                  desc: "AI đề xuất 2-3 hướng tiếp cận kèm trade-offs. User chọn và giải thích lý do chọn.",
                  example: "\"A: monolithic — đơn giản, B: microservices — scale tốt, C: serverless — chi phí thấp. Bạn ưu tiên gì?\"",
                  color: "violet",
                },
                {
                  num: "3",
                  name: "Xác nhận (Confirm)",
                  desc: "AI trình bày thiết kế theo từng phần nhỏ. User phản hồi sau mỗi phần trước khi chuyển tiếp.",
                  example: "\"Phần data flow này có đúng không?\" → User xác nhận → Tiếp phần tiếp theo.",
                  color: "green",
                },
              ].map((step) => {
                const c = colorMap[step.color as keyof typeof colorMap] || colorMap.blue;
                return (
                  <div key={step.num} className={`rounded-xl border ${c.border} bg-card overflow-hidden`}>
                    <div className={`px-4 py-3 border-b ${c.border} ${c.bg} flex items-center gap-2`}>
                      <div className={`w-6 h-6 rounded-full ${c.bg} border ${c.border} flex items-center justify-center`}>
                        <span className={`text-[10px] font-black ${c.text}`}>{step.num}</span>
                      </div>
                      <span className="text-sm font-bold">{step.name}</span>
                    </div>
                    <div className="p-4 space-y-3">
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                      <div className={`rounded-lg border ${c.border} p-3`}>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Ví dụ</div>
                        <p className="text-[10px] text-muted-foreground italic leading-relaxed">{step.example}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* QUESTION CATEGORIES */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-500" />
              5 loại câu hỏi Socratic trong BA
            </h3>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground w-28">Loại</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Mục đích</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Ví dụ câu hỏi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    {
                      cat: "Boundary",
                      icon: Target,
                      color: "red",
                      purpose: "Tìm giới hạn đầu vào / đầu ra. Input sai thì hệ thống xử lý sao?",
                      examples: [
                        "\"Nếu người dùng nhập mật khẩu 0 ký tự thì sao?\"",
                        "\"Tên sản phẩm tối đa bao nhiêu ký tự?\"",
                        "\"Đơn hàng có giá trị âm được không?\"",
                      ],
                    },
                    {
                      cat: "Error / Exception",
                      icon: AlertTriangle,
                      color: "orange",
                      purpose: "Tìm trường hợp lỗi hệ thống. Lỗi mạng, lỗi database thì user thấy gì?",
                      examples: [
                        "\"Nếu database mất kết nối giữa chỗ thanh toán thì sao?\"",
                        "\"Khi email xác nhận bị trả lại (bounce) thì xử lý ra sao?\"",
                        "\"API bên thứ 3 trả lỗi 500 thì flow tiếp tục thế nào?\"",
                      ],
                    },
                    {
                      cat: "Scale / Performance",
                      icon: Zap,
                      color: "amber",
                      purpose: "Tìm giới hạn mở rộng. Hệ thống chịu được bao nhiêu user đồng thời?",
                      examples: [
                        "\"Nếu 10.000 người dùng cùng lúc reset password thì sao?\"",
                        "\"Bảng đơn hàng có thể chứa bao nhiêu dòng mà không chậm?\"",
                        "\"Upload file 1GB có được hỗ trợ không?\"",
                      ],
                    },
                    {
                      cat: "Security / Permission",
                      icon: Shield,
                      color: "violet",
                      purpose: "Tìm lỗ hổng bảo mật. Ai được làm gì, có thể leo thang quyền không?",
                      examples: [
                        "\"User A có thể xem đơn hàng của user B không?\"",
                        "\"Có thể làm gì để tránh request giả mạo (CSRF)?\"",
                        "\"Admin có thể tự phê duyệt đơn hàng của mình không?\"",
                      ],
                    },
                    {
                      cat: "UX / Flow",
                      icon: Users,
                      color: "blue",
                      purpose: "Tìm trường hợp người dùng hành xử bất thường. User đóng tab giữa chừng thì sao?",
                      examples: [
                        "\"Nếu người dùng đóng tab giữa chỗ nhập OTP thì sao?\"",
                        "\"User điền form 5 phút rồi session timeout thì data có mất không?\"",
                        "\"Nếu thanh toán thành công nhưng email xác nhận không gửi được?\"",
                      ],
                    },
                  ].map((row) => {
                    const c = colorMap[row.color as keyof typeof colorMap] || colorMap.blue;
                    const Icon = row.icon;
                    return (
                      <tr key={row.cat}>
                        <td className="px-4 py-3 align-top">
                          <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md ${c.bg} border ${c.border}`}>
                            <Icon className={`w-3 h-3 ${c.text}`} />
                            <span className={`text-[10px] font-bold ${c.text}`}>{row.cat}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground text-[10px] leading-relaxed align-top">{row.purpose}</td>
                        <td className="px-4 py-3">
                          <div className="space-y-1">
                            {row.examples.map((ex, i) => (
                              <div key={i} className="text-[10px] text-muted-foreground italic leading-relaxed">"{ex}"</div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* HOW AI APPLIES */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <Bot className="w-4 h-4 text-amber-500" />
              Cách AI áp dụng Socratic trong thực tế
            </h3>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
              <div className="space-y-3">
                {[
                  {
                    step: "Bước 1",
                    action: "Explore project context",
                    detail: "AI đọc codebase, docs, recent commits để hiểu ngữ cảnh trước khi hỏi",
                    example: "AI đọc prisma schema, .cursorrules, và cấu trúc thư mục",
                  },
                  {
                    step: "Bước 2",
                    action: "Một câu hỏi mỗi lượt",
                    detail: "AI gửi TỐI ĐA một câu hỏi trong mỗi tin nhắn. Không spam nhiều câu cùng lúc.",
                    example: "\"Trước khi đi sâu: project này có multi-tenant không? (Mỗi tenant là công ty riêng?)\"",
                  },
                  {
                    step: "Bước 3",
                    action: "Dùng câu hỏi đóng khi có thể",
                    detail: "Câu hỏi đa lựa chọn (A/B/C) dễ trả lời hơn câu hỏi mở. Nhưng vẫn cần câu hỏi mở để hiểu sâu.",
                    example: "\"Bạn muốn: (A) tất cả user xem được mọi đơn, (B) chỉ đơn của mình, (C) admin xem tất cả, user chỉ đơn của mình?\"",
                  },
                  {
                    step: "Bước 4",
                    action: "Đề xuất 2-3 hướng đi",
                    detail: "Sau khi hiểu đủ, AI đề xuất các approach với trade-offs rõ ràng và recommendation",
                    example: "\"A: JWT stateless — đơn giản, B: Session server — scale tốt hơn, C: OAuth provider — an toàn nhất. Tôi recommend B vì team có kinh nghiệm Redis.\"",
                  },
                  {
                    step: "Bước 5",
                    action: "Trình bày thiết kế theo từng phần",
                    detail: "Thiết kế được chia thành sections nhỏ. User phản hồi sau mỗi section trước khi tiếp.",
                    example: "\"Phần Authentication flow này đúng không? Chúng ta sẽ đi tiếp sang phần Authorization.\"",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-16 flex-shrink-0 text-[10px] font-bold text-amber-600 dark:text-amber-400 pt-0.5">{step.step}</div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold mb-0.5">{step.action}</div>
                      <div className="text-[10px] text-muted-foreground leading-relaxed mb-1">{step.detail}</div>
                      <div className={`rounded-lg border border-amber-500/10 ${colorMap.amber.bg} px-3 py-2`}>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Ví dụ</div>
                        <p className="text-[10px] text-muted-foreground italic leading-relaxed">{step.example}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SCENARIO: Login Feature */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-500" />
              Ví dụ thực tế: Phân tích tính năng đăng nhập
            </h3>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="px-4 py-3 border-b border-border bg-muted/30">
                <div className="text-xs font-bold">Cuộc hội thoại Socratic — tính năng đăng nhập</div>
              </div>
              <div className="p-4 space-y-4">
                {/* AI q1 */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-violet-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-violet-600 dark:text-violet-400 mb-1">AI đang hỏi...</div>
                    <div className="rounded-xl rounded-tl-none border border-violet-500/20 bg-violet-500/5 px-4 py-3">
                      <p className="text-xs text-muted-foreground leading-relaxed italic">
                        "Trước khi thiết kế, tôi cần hiểu rõ hơn. Bạn muốn đăng nhập bằng cách nào?"
                      </p>
                    </div>
                    <div className="mt-2 space-y-1 pl-1">
                      {["(A) Chỉ email + password", "(B) Email/password + OAuth (Google, GitHub)", "(C) Magic link qua email", "(D) Multi-factor (OTP SMS/app)"].map((opt) => (
                        <div key={opt} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* User ans1 */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-green-600 dark:text-green-400 mb-1">User trả lời</div>
                    <div className="rounded-xl rounded-tl-none border border-green-500/20 bg-green-500/5 px-4 py-3">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        "(B) nhưng từ từ thôi. Giai đoạn 1 chỉ email/password, giai đoạn 2 mới thêm Google OAuth."
                      </p>
                    </div>
                  </div>
                </div>
                {/* AI q2 */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-violet-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-violet-600 dark:text-violet-400 mb-1">AI hỏi tiếp...</div>
                    <div className="rounded-xl rounded-tl-none border border-violet-500/20 bg-violet-500/5 px-4 py-3">
                      <p className="text-xs text-muted-foreground leading-relaxed italic">
                        "Rõ ràng. Tiếp theo: nếu user nhập sai password 5 lần liên tiếp thì xử lý ra sao?"
                      </p>
                    </div>
                    <div className="mt-2 space-y-1 pl-1">
                      {["(A) Khóa tài khoản vĩnh viễn (admin unlock)", "(B) Khóa tạm 15 phút, tự mở", "(C) Captcha sau 3 lần sai", "(D) Không giới hạn, log warning"].map((opt) => (
                        <div key={opt} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* User ans2 */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-green-600 dark:text-green-400 mb-1">User trả lời</div>
                    <div className="rounded-xl rounded-tl-none border border-green-500/20 bg-green-500/5 px-4 py-3">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        "(B) khóa 15 phút. Sau 10 lần sai thì khóa vĩnh viễn, admin xử lý."
                      </p>
                    </div>
                  </div>
                </div>
                {/* AI q3 - security */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-violet-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-violet-600 dark:text-violet-400 mb-1">AI hỏi về bảo mật...</div>
                    <div className="rounded-xl rounded-tl-none border border-violet-500/20 bg-violet-500/5 px-4 py-3">
                      <p className="text-xs text-muted-foreground leading-relaxed italic">
                        "Một câu về bảo mật: password hash bằng gì?"
                      </p>
                    </div>
                    <div className="mt-2 space-y-1 pl-1">
                      {["(A) bcrypt (mặc định an toàn, chậm)", "(B) argon2 (hiện đại, khuyến nghị)", "(C) SHA-256 (quá nhanh, không khuyến nghị)"].map((opt) => (
                        <div key={opt} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* AI propose design */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-violet-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-violet-600 dark:text-violet-400 mb-1">AI đề xuất thiết kế...</div>
                    <div className="rounded-xl rounded-tl-none border border-green-500/20 bg-green-500/5 px-4 py-3">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-2">Thiết kế — Phần 1: Auth Flow</div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        "Dựa trên câu trả lời, thiết kế như sau: Email/password → bcrypt hash → JWT trong httpOnly cookie → middleware bảo vệ route."
                      </p>
                      <div className="mt-2 text-[10px] text-muted-foreground italic">→ User xác nhận → Chuyển phần tiếp theo: Token lifecycle</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ANTI-PATTERNS */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              Anti-patterns — Những bẫy cần tránh
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  trap: "AI hỏi nhiều câu cùng lúc",
                  problem: "\"Ngoài đăng nhập ra, bạn cần gì? Token lưu ở đâu? Có cần refresh token không?\"",
                  fix: "Mỗi lượt chỉ MỘT câu hỏi. Đợi user trả lời rồi hỏi tiếp.",
                  color: "red",
                },
                {
                  trap: "AI nhảy thẳng vào code khi chưa hỏi",
                  problem: "User nói \"Thêm login\" → AI bắt đầu viết code ngay",
                  fix: "BẮT BUỘC hỏi scope, actors, data flow trước. HARD-GATE: không viết code khi chưa có thiết kế được approve.",
                  color: "orange",
                },
                {
                  trap: "AI đoán câu trả lời thay user",
                  problem: "\"Tôi hiểu rồi, bạn muốn JWT với refresh token phải không?\" — khi user chưa nói gì",
                  fix: "Đặt câu hỏi rõ ràng, đợi câu trả lời. Không suy đoán user intent.",
                  color: "amber",
                },
                {
                  trap: "User nói \"đơn giản thôi, không cần hỏi\"",
                  problem: "\"Chỉ là thêm nút login thôi mà\" → scope creep bắt đầu từ đây",
                  fix: "AI phải từ chối nhẹ nhàng: \"1-2 câu hỏi thôi để đảm bảo đi đúng hướng. Chúng ta bắt đầu nhé?\"",
                  color: "violet",
                },
              ].map((item) => {
                const c = colorMap[item.color as keyof typeof colorMap] || colorMap.red;
                return (
                  <div key={item.trap} className={`rounded-xl border ${c.border} bg-card p-4`}>
                    <div className={`text-xs font-bold mb-1.5 ${c.text}`}>{item.trap}</div>
                    <div className="space-y-2">
                      <div>
                        <div className="text-[9px] font-bold text-red-500 uppercase tracking-wider mb-0.5">Bẫy</div>
                        <p className="text-[10px] text-muted-foreground italic leading-relaxed">{item.problem}</p>
                      </div>
                      <div>
                        <div className="text-[9px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-0.5">Cách xử lý</div>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">{item.fix}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* QUICK REFERENCE */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Quick Reference Card
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Nguyên tắc Socratic</div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  {[
                    "1 câu hỏi mỗi lượt — không spam",
                    "Câu hỏi đóng (A/B/C) khi có thể",
                    "Đợi user trả lời trước khi hỏi tiếp",
                    "Hỏi về WHO trước WHAT trước HOW",
                    "Luôn hỏi \"còn gì khác?\" ở cuối",
                    "HARD-GATE: không code khi chưa approve design",
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Khi nào hỏi gì</div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  {[
                    "Mới bắt đầu → Ai dùng? (Actor)",
                    "Sau actor → Dữ liệu gì? (Entity)",
                    "Sau entity → Ai làm gì? (Use case)",
                    "Sau use case → Ai quản lý? (Permission)",
                    "Sau permission → Thứ tự nào? (Build order)",
                    "Cuối → Còn edge case nào? (Risk)",
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
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
