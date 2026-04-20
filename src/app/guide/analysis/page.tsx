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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Phân tích nghiệp vụ",
  description: "Học cách phân tích yêu cầu chức năng: xác định actor, entity, ownership, permission và build order",
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

export default function AnalysisGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-background to-emerald-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
            <Search className="w-4 h-4" />
            Phân tích nghiệp vụ
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Phân tích yêu cầu{" "}
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              trước khi code
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Trước khi viết dòng code nào, hãy phân tích yêu cầu để xác định scope chính xác,
            tránh over-engineering, và đảm bảo AI đi đúng hướng.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* 6 nguyên tắc */}
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
            File phân tích yêu cầu chức năng phải có thứ tự rõ ràng, không viết lộn xộn theo kiểu nghĩ đến đâu ghi đến đó.
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

        {/* Liên quan */}
        <section>
          <h2 className="text-xl font-bold mb-5">Liên quan</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Quy tắc viết Prompt", href: "/guide/prompt", desc: "Dùng phân tích để viết prompt chính xác" },
              { label: "Quy trình thực chiến", href: "/guide/workflow", desc: "Từ phân tích đến kế hoạch triển khai" },
              { label: "Quy tắc Code", href: "/guide/rules", desc: "Bộ quy tắc code chuẩn" },
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

        {/* CTA: Xây dựng yêu cầu */}
        <div className="rounded-2xl border border-dashed bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6 text-indigo-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-1">Muốn xây dựng yêu cầu ngay?</h3>
              <p className="text-sm text-muted-foreground">
                Dùng công cụ wizard điền thông tin từng bước để tạo file phân tích yêu cầu chức năng chuẩn chỉnh.
              </p>
            </div>
            <Link
              href="/guide/analysis/build"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-all text-sm whitespace-nowrap shrink-0"
            >
              <ArrowRight className="w-4 h-4" />
              Xây dựng yêu cầu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
