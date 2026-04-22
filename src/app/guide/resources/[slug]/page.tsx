import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ArrowLeft, Download, ChevronRight, CheckCircle2, Copy, ArrowRight } from "lucide-react";
import { MarkdownViewer } from "./markdown-viewer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const resourceMeta: Record<string, {
  file: string;
  name: string;
  category: string;
  iconName: string;
  iconBg: string;
  textColor: string;
  border: string;
  color: string;
  overview: string;
  highlights: string[];
  usage: string[];
  usageSteps: string[];
}> = {
  "quy-tac-prompt": {
    file: "docs/Chung/Quy tắc viết prompt.md",
    name: "Quy tắc viết prompt cho AI Agent",
    category: "Quy tắc",
    iconName: "FileText",
    iconBg: "bg-indigo-500/10",
    textColor: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-500/20",
    color: "from-indigo-500/10 to-violet-500/10",
    overview: "Nguyên tắc và template viết prompt chuẩn để giao tiếp với AI Agent hiệu quả nhất. Bao gồm 4 thành phần bắt buộc, kỹ thuật nâng cao, và template chi tiết cho từng loại nhiệm vụ.",
    highlights: [
      "4 thành phần bắt buộc: Context, Task, Constraints, Expected Output",
      "Template chi tiết cho 6 loại nhiệm vụ: code mới, fix bug, review, viết docs, phân tích, refactor",
      "Kỹ thuật nâng cao: Zero-shot, Few-shot, Chain-of-Thought, Iterative prompting",
      "Hướng dẫn spec-driven prompting và structured output",
    ],
    usage: [
      "Ghi rõ context: mô tả dự án, framework, những gì đã có",
      "Đặt constraints: giới hạn scope, convention, những gì KHÔNG làm",
      "Mô tả expected output: định dạng, cấu trúc, tiêu chí đánh giá",
      "Dùng template phù hợp với loại task (code mới, fix bug, review...)",
    ],
    usageSteps: [
      "Mở file quy tắc prompt.md",
      "Copy phần template phù hợp với task hiện tại",
      "Điền Context (dự án, framework, ngữ cảnh)",
      "Điền Task (yêu cầu cụ thể)",
      "Điền Constraints (giới hạn, convention)",
      "Điền Expected Output (kết quả mong muốn)",
      "Paste vào AI Agent và gửi",
    ],
  },
  "quy-tac-code": {
    file: "docs/Next.js fullstack/Quy tắc code.md",
    name: "Quy tắc code Next.js fullstack",
    category: "Quy tắc",
    iconName: "Code2",
    iconBg: "bg-violet-500/10",
    textColor: "text-violet-600 dark:text-violet-400",
    border: "border-violet-500/20",
    color: "from-violet-500/10 to-purple-500/10",
    overview: "Bộ quy tắc code chuẩn cho dự án Next.js fullstack với TypeScript, Prisma, Tailwind CSS, và App Router. Định nghĩa rõ ranh giới giữa các layer: route, UI, business, data, auth, validation — giúp Agent luôn đi đúng kiến trúc.",
    highlights: [
      "6 layer kiến trúc rõ ràng: route, UI, business, data, auth, validation",
      "Quy tắc cho API design, database schema, và contract",
      "Giữ nguyên intent nghiệp vụ, không tự ý mở rộng scope",
      "Quy tắc sửa đúng chỗ thay vì workaround tạm",
    ],
    usage: [
      "Đặt file quy tắc vào thư mục docs/rules/ trong project",
      "Copy toàn bộ nội dung quy tắc code vào prompt của AI Agent",
      "Hoặc dùng tham chiếu đường dẫn: 'Đọc file docs/rules/quy-tac-code.md trước khi bắt đầu'",
      "Agent sẽ tuân thủ kiến trúc layer, đặt code đúng vị trí, và không vi phạm convention",
    ],
    usageSteps: [
      "Tải file quy tắc code.md",
      "Đặt vào thư mục docs/rules/ trong project",
      "Copy nội dung và paste vào prompt Agent",
      "Bắt đầu code — Agent sẽ tự follow quy tắc",
    ],
  },
  "cau-truc-thu-muc": {
    file: "docs/Next.js fullstack/Cấu trúc thư mục.md",
    name: "Cấu trúc thư mục Next.js fullstack",
    category: "Cấu trúc thư mục",
    iconName: "FolderTree",
    iconBg: "bg-blue-500/10",
    textColor: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500/20",
    color: "from-blue-500/10 to-cyan-500/10",
    overview: "Quy ước tổ chức thư mục chuẩn cho dự án Next.js fullstack. Định nghĩa cấu trúc route groups, cách đặt API routes, components, lib, types, và phân chia app/(public) vs app/(auth) vs app/(dashboard).",
    highlights: [
      "Cấu trúc route groups: public, auth, dashboard",
      "Quy ước đặt tên file và thư mục",
      "Tổ chức components, lib, types, hooks rõ ràng",
      "Hướng dẫn phân chia server/client components",
    ],
    usage: [
      "Dùng làm template cấu trúc khi bắt đầu dự án mới",
      "Copy cấu trúc thư mục vào prompt để Agent biết đặt file ở đâu",
      "Tham khảo khi tổ chức lại project có sẵn",
    ],
    usageSteps: [
      "Tải file cấu trúc thư mục.md",
      "Dùng làm blueprint khi tạo project mới",
      "Copy phần cấu trúc vào prompt để Agent follow",
    ],
  },
  "quy-tac-ke-hoach": {
    file: "docs/Chung/Quy tắc viết kế hoạch triển khai.md",
    name: "Quy tắc viết kế hoạch triển khai",
    category: "Quy tắc",
    iconName: "FileText",
    iconBg: "bg-amber-500/10",
    textColor: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/20",
    color: "from-amber-500/10 to-orange-500/10",
    overview: "Hướng dẫn cách chuyển file phân tích yêu cầu thành thứ tự thực thi rõ ràng. Xác định phase triển khai, dependency giữa các phần, mức ưu tiên, và checkpoint kiểm tra cho từng giai đoạn.",
    highlights: [
      "Tách phase triển khai theo dependency rõ ràng",
      "Xác định build order: foundation → core → support",
      "Checkpoint kiểm tra sau mỗi phase",
      "Không bịa thêm feature khi viết kế hoạch",
    ],
    usage: [
      "Sau khi hoàn thành phân tích yêu cầu (bước 2 của workflow)",
      "Dùng quy tắc này để chuyển spec thành kế hoạch triển khai",
      "Mỗi phase có dependency rõ ràng, không nhảy cóc",
    ],
    usageSteps: [
      "Hoàn thành file phân tích yêu cầu",
      "Dùng quy tắc này để viết kế hoạch",
      "Xác định từng phase và dependency",
      "Đặt checkpoint sau mỗi phase",
    ],
  },
  "quy-tac-phan-tich": {
    file: "docs/Chung/Quy tắc viết phân tích yêu cầu chức năng.md",
    name: "Quy tắc viết phân tích yêu cầu chức năng",
    category: "Quy tắc",
    iconName: "Search",
    iconBg: "bg-emerald-500/10",
    textColor: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/20",
    color: "from-emerald-500/10 to-green-500/10",
    overview: "Nguyên tắc phân tích yêu cầu trước khi viết prompt, trước khi code. Xác định actor, entity, ownership, permission, và build order ngay từ đầu để Agent không đi sai hướng.",
    highlights: [
      "Xác định actor: ai dùng, họ cần làm gì, quyền đến đâu",
      "Xác định entity: dữ liệu liên quan, ownership, ràng buộc",
      "Quy tắc phân biệt must-have, nice-to-have, out-of-scope",
      "Xác định build order từ đầu",
    ],
    usage: [
      "Là bước đầu tiên trước khi viết prompt cho dự án mới",
      "Copy vào prompt để Agent hỏi đúng câu hỏi trước khi code",
      "Kết hợp với quy tắc viết kế hoạch để hoàn thiện workflow",
    ],
    usageSteps: [
      "Đọc quy tắc phân tích yêu cầu",
      "Áp dụng framework Actor → Entity → Ownership → Permission",
      "Viết file SPEC.md theo template có sẵn",
      "Dùng kết quả để viết kế hoạch triển khai",
    ],
  },
  "code-review-graph": {
    file: "docs/Chung/code-review-graph.md",
    name: "Code Review Graph",
    category: "Skill",
    iconName: "GitBranch",
    iconBg: "bg-pink-500/10",
    textColor: "text-pink-600 dark:text-pink-400",
    border: "border-pink-500/20",
    color: "from-pink-500/10 to-rose-500/10",
    overview: "Công cụ code-review-graph giúp xây dựng bản đồ cấu trúc codebase bằng Tree-sitter, giúp AI hiểu nhanh mã nguồn mà không cần đọc lại toàn bộ code. Giảm ~8.2x token khi code review và tới 49x khi làm việc hàng ngày.",
    highlights: [
      "Cài đặt: Python 3.10+, pip install code-review-graph",
      "Cấu trúc thư mục: docs/, rules/, graph/, output/",
      "Cách khởi tạo, chạy parse, và query codebase",
      "Query thực tế: function calls, imports, tests, dead code",
    ],
    usage: [
      "Cài đặt code-review-graph trước khi bắt đầu dự án lớn",
      "Parse codebase một lần, query nhiều lần — tiết kiệm token đáng kể",
      "Dùng khi cần hiểu cấu trúc project, tìm dead code, phân tích dependencies",
    ],
    usageSteps: [
      "Cài đặt: pip install code-review-graph",
      "Chạy code-review-graph init để khởi tạo cấu trúc",
      "Chạy parse để phân tích codebase",
      "Dùng query để trích xuất thông tin cần thiết",
    ],
  },
  "superpowers": {
    file: "docs/Chung/Superpowers.md",
    name: "Superpowers — Khung kỹ năng Agent",
    category: "Skill",
    iconName: "Sparkles",
    iconBg: "bg-teal-500/10",
    textColor: "text-teal-600 dark:text-teal-400",
    border: "border-teal-500/20",
    color: "from-teal-500/10 to-cyan-500/10",
    overview: "Khung kỹ năng hoàn chỉnh cho coding agent, hoạt động trên Claude, Cursor, Codex, OpenCode, Gemini, Copilot. Bao gồm quy trình brainstorming → viết kế hoạch → implement → review. Skills trigger tự động, không cần gõ lệnh.",
    highlights: [
      "Hỗ trợ: Claude Code, Cursor, Codex, OpenCode, Gemini CLI, Copilot CLI",
      "Skills tự động trigger: brainstorming, writing-plans, TDD, subagent-driven development",
      "RED-GREEN-REFACTOR cycle: test trước, code sau, refactor sau",
      "161k stars trên GitHub, MIT license",
    ],
    usage: [
      "Cài đặt Superpowers plugin vào tool bạn đang dùng",
      "Agent sẽ tự trigger đúng skill khi cần",
      "Kết hợp với các quy tắc khác để tăng hiệu quả",
    ],
    usageSteps: [
      "Truy cập https://github.com/obra/superpowers",
      "Cài đặt theo hướng dẫn cho tool bạn dùng",
      "Copy skills vào cấu hình Agent",
      "Bắt đầu code — skills trigger tự động",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(resourceMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourceMeta[slug as keyof typeof resourceMeta];
  if (!resource) return { title: "Tài nguyên không tồn tại" };
  return {
    title: resource.name,
    description: resource.overview,
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = resourceMeta[slug as keyof typeof resourceMeta];

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Tài nguyên không tồn tại</h1>
          <p className="text-muted-foreground mb-6">Tài nguyên bạn đang tìm không có trong hệ thống.</p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay về danh sách
          </Link>
        </div>
      </div>
    );
  }

  const fullPath = path.join(process.cwd(), resource.file);
  let content = "";
  let error = false;

  try {
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    content = fileContent;
  } catch {
    error = true;
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Quay về danh sách tài nguyên
          </Link>

          <div className="flex items-start gap-5">
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${resource.iconBg}`}>
              <BookOpen className={`w-7 h-7 sm:w-8 sm:h-8 ${resource.textColor}`} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`text-xs px-2 py-1 rounded-full ${resource.iconBg} ${resource.textColor} font-medium`}>
                  {resource.category}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                {resource.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Tổng quan */}
        <section className="rounded-2xl border bg-card p-6">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            <BookOpen className={`w-5 h-5 ${resource.textColor}`} />
            Tổng quan
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {resource.overview}
          </p>
        </section>

        {/* Nội dung chính */}
        <section className="rounded-2xl border bg-card p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className={`w-5 h-5 ${resource.textColor}`} />
            Nội dung chính
          </h2>
          <div className="space-y-3">
            {resource.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${resource.textColor.replace("text-", "bg-")}`} />
                <span className="text-sm leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Hướng dẫn sử dụng */}
        <section className="rounded-2xl border bg-card p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <ArrowRight className={`w-5 h-5 ${resource.textColor}`} />
            Cách sử dụng
          </h2>

          {/* Usage notes */}
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {resource.usage.map((u, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
                <CheckCircle2 className={`w-4 h-4 ${resource.textColor} flex-shrink-0 mt-0.5`} />
                <span className="text-sm text-muted-foreground leading-relaxed">{u}</span>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Các bước thực hiện</h3>
            {resource.usageSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full ${resource.iconBg} border ${resource.border} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-xs font-bold ${resource.textColor}`}>{i + 1}</span>
                </div>
                <span className="text-sm leading-relaxed pt-1">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Xem nội dung file */}
        <MarkdownViewer
          content={content}
          error={error}
          file={resource.file}
          filePath={resource.file}
          textColor={resource.textColor}
          iconBg={resource.iconBg}
          border={resource.border}
        />

        {/* File info & Download */}
        <section className="rounded-2xl border bg-card p-6">
          <div className="flex items-center gap-2 mb-3">
            <Copy className="w-4 h-4 text-muted-foreground" />
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">File tài nguyên</h2>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border mb-4">
            <span className="text-sm text-muted-foreground font-mono text-xs break-all">{resource.file}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`/api/download/doc?file=${encodeURIComponent(resource.file)}`}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Tải file .md
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-input bg-background font-medium text-sm hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
              Tài nguyên khác
            </Link>
          </div>
        </section>

        {/* Kết hợp với workflow */}
        <section className="rounded-2xl border bg-gradient-to-br from-primary/5 to-purple-500/5 p-6">
          <h2 className="text-lg font-bold mb-3">Kết hợp với workflow</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            File tài nguyên này nằm trong quy trình làm việc với AI Agent. Dùng kết hợp với các bước khác để đạt hiệu quả cao nhất.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/guide/analysis"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border font-medium text-sm hover:bg-muted transition-colors"
            >
              Phân tích yêu cầu
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/guide/resources"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border font-medium text-sm hover:bg-muted transition-colors"
            >
              Hướng dẫn sử dụng tài nguyên
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/workflow"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border font-medium text-sm hover:bg-muted transition-colors"
            >
              Xem quy trình
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex items-center justify-between pt-4 border-t">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay về danh sách tài nguyên
          </Link>
        </div>
      </div>
    </div>
  );
}
