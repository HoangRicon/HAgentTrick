import fs from "fs";
import path from "path";
import { ArrowRight, BookOpen } from "lucide-react";
import { ResourcesCards } from "./resources-cards";

export const metadata = {
  title: "Tài nguyên",
  description: "Kho tài nguyên chứa các file quy tắc (rules) và skill cho AI Agent — bao gồm quy tắc code, cấu trúc thư mục, kỹ năng và hướng dẫn sử dụng công cụ. Thêm chúng vào Agent rule để AI tuân thủ kiến trúc, code chuẩn, và làm việc chính xác hơn.",
};

type ResourceMeta = {
  id: string;
  iconName: string;
  title: string;
  category: string;
  file: string;
  overview: string;
  highlights: string[];
  color: string;
  textColor: string;
  iconBg: string;
  border: string;
};

const resourceMeta: ResourceMeta[] = [
  {
    id: "quy-tac-prompt",
    iconName: "FileText",
    title: "Quy tắc viết prompt cho AI Agent",
    category: "Quy tắc",
    file: "docs/Chung/Quy tắc viết prompt.md",
    overview: "Nguyên tắc và template viết prompt chuẩn để giao tiếc với AI Agent hiệu quả nhất. 4 thành phần bắt buộc (Context, Task, Constraints, Expected Output), kỹ thuật nâng cao (Zero-shot, Few-shot, Chain-of-Thought, Iterative prompting), và template chi tiết cho từng loại nhiệm vụ (viết code, fix bug, review, viết docs, phân tích, refactor, viết test, migration).",
    highlights: [
      "4 thành phần bắt buộc: Context, Task, Constraints, Expected Output",
      "Template chi tiết cho 6 loại nhiệm vụ: code mới, fix bug, review, viết docs, phân tích, refactor",
      "Kỹ thuật nâng cao: Zero-shot, Few-shot, Chain-of-Thought, Iterative prompting",
      "Hướng dẫn spec-driven prompting và structured output",
      "Hơn 650 dòng hướng dẫn toàn diện",
    ],
    color: "from-indigo-500/10 to-violet-500/10",
    textColor: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-500/10",
    border: "border-indigo-500/20 hover:border-indigo-500/40",
  },
  {
    id: "quy-tac-code",
    iconName: "Code2",
    title: "Quy tắc code Next.js fullstack",
    category: "Quy tắc",
    file: "docs/Next.js fullstack/Quy tắc code.md",
    overview: "Bộ quy tắc code chuẩn cho dự án Next.js fullstack với TypeScript, Prisma, Tailwind CSS, và App Router. Định nghĩa rõ ranh giới giữa route layer, UI layer, business layer, data access layer, auth/permission layer, và validation layer — giúp Agent luôn đi đúng kiến trúc.",
    highlights: [
      "6 layer kiến trúc rõ ràng: route, UI, business, data, auth, validation",
      "Quy tắc cho API design, database schema, và contract",
      "Giữ nguyên intent nghiệp vụ, không tự ý mở rộng scope",
      "Quy tắc sửa đúng chỗ thay vì workaround tạm",
      "Hơn 600 dòng quy tắc chi tiết",
    ],
    color: "from-violet-500/10 to-purple-500/10",
    textColor: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-500/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
  },
  {
    id: "cau-truc-thu-muc",
    iconName: "FolderTree",
    title: "Cấu trúc thư mục Next.js fullstack",
    category: "Cấu trúc thư mục",
    file: "docs/Next.js fullstack/Cấu trúc thư mục.md",
    overview: "Quy ước tổ chức thư mục chuẩn cho dự án Next.js fullstack. Định nghĩa rõ cấu trúc route groups, cách đặt API routes, server actions, components, lib, types, và phân chia app/(public) vs app/(auth) vs app/(dashboard).",
    highlights: [
      "Cấu trúc route groups: public, auth, dashboard",
      "Quy ước đặt tên file và thư mục",
      "Tổ chức components, lib, types, hooks rõ ràng",
      "Hướng dẫn phân chia server/client components",
      "Khoảng 500 dòng tài liệu",
    ],
    color: "from-blue-500/10 to-cyan-500/10",
    textColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    id: "quy-tac-ke-hoach",
    iconName: "FileText",
    title: "Quy tắc viết kế hoạch triển khai",
    category: "Quy tắc",
    file: "docs/Chung/Quy tắc viết kế hoạch triển khai.md",
    overview: "Hướng dẫn cách chuyển file phân tích yêu cầu chức năng thành thứ tự thực thi rõ ràng. Xác định phase triển khai, dependency giữa các phần, mức ưu tiên, và checkpoint kiểm tra cụ thể cho từng giai đoạn.",
    highlights: [
      "Tách phase triển khai theo dependency rõ ràng",
      "Xác định build order: foundation → core → support",
      "Checkpoint kiểm tra sau mỗi phase",
      "Không bịa thêm feature khi viết kế hoạch",
      "Hơn 700 dòng hướng dẫn chi tiết",
    ],
    color: "from-amber-500/10 to-orange-500/10",
    textColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-500/10",
    border: "border-amber-500/20 hover:border-amber-500/40",
  },
  {
    id: "quy-tac-phan-tich",
    iconName: "Search",
    title: "Quy tắc viết phân tích yêu cầu chức năng",
    category: "Quy tắc",
    file: "docs/Chung/Quy tắc viết phân tích yêu cầu chức năng.md",
    overview: "Nguyên tắc phân tích yêu cầu trước khi viết prompt, trước khi code, trước khi tách module. Xác định actor, entity, ownership, permission, và build order ngay từ đầu để Agent không đi sai hướng.",
    highlights: [
      "Xác định actor: ai dùng, họ cần làm gì, quyền đến đâu",
      "Xác định entity: dữ liệu liên quan, ownership, ràng buộc",
      "Quy tắc phân biệt must-have, nice-to-have, out-of-scope",
      "Xác định build order từ đầu",
      "Hơn 470 dòng nguyên tắc",
    ],
    color: "from-emerald-500/10 to-green-500/10",
    textColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    id: "code-review-graph",
    iconName: "Graph",
    title: "Code Review Graph — Hiểu mã nguồn mà không cần đọc toàn bộ code",
    category: "Skill",
    file: "docs/Next.js fullstack/code-review-graph.md",
    overview: "Hướng dẫn sử dụng công cụ code-review-graph để xây dựng bản đồ cấu trúc codebase bằng Tree-sitter, giúp AI hiểu nhanh mã nguồn mà không cần đọc lại toàn bộ code. Công cụ giảm ~8.2x token khi code review và tới 49x khi làm việc hàng ngày.",
    highlights: [
      "Cài đặt: Python 3.10+, pip install code-review-graph",
      "Cấu trúc thư mục: docs/, rules/, graph/, output/",
      "Cách khởi tạo, chạy parse, và query codebase",
      "Query thực tế: function calls, imports, tests, dead code",
      "280 nodes, 1983 edges, 65 files được phân tích",
    ],
    color: "from-pink-500/10 to-rose-500/10",
    textColor: "text-pink-600 dark:text-pink-400",
    iconBg: "bg-pink-500/10",
    border: "border-pink-500/20 hover:border-pink-500/40",
  },
  {
    id: "superpowers",
    iconName: "Sparkles",
    title: "Superpowers — Khung kỹ năng Agent",
    category: "Skill",
    file: "docs/Chung/Superpowers.md",
    overview: "Superpowers là khung kỹ năng hoàn chỉnh cho coding agent, hoạt động trên Claude, Cursor, Codex, OpenCode, Gemini, Copilot. Bao gồm quy trình brainstorming → viết kế hoạch → implement với TDD → review → hoàn thành. Skills trigger tự động, không cần gõ lệnh.",
    highlights: [
      "Hỗ trợ: Claude Code, Cursor, Codex, OpenCode, Gemini CLI, Copilot CLI",
      "Skills tự động trigger: brainstorming, writing-plans, TDD, subagent-driven development",
      "RED-GREEN-REFACTOR cycle: test trước, code sau, refactor sau",
      "Subagent-driven development: nhiều agent con cùng làm với two-stage review",
      "161k stars trên GitHub, MIT license",
    ],
    color: "from-teal-500/10 to-cyan-500/10",
    textColor: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-teal-500/10",
    border: "border-teal-500/20 hover:border-teal-500/40",
  },
];

function readFileContent(filePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    return fs.readFileSync(fullPath, "utf-8");
  } catch {
    return "";
  }
}

function readFileBytes(filePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const buffer = fs.readFileSync(fullPath);
    return buffer.toString("base64");
  } catch {
    return "";
  }
}

export default async function ResourcesPage() {
  const resources = resourceMeta.map((r) => ({
    ...r,
    content: readFileContent(r.file),
    base64: readFileBytes(r.file),
    filename: r.file.split("/").pop() || "resource.md",
  }));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <ArrowRight className="w-4 h-4" />
            Tài nguyên
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            File tài nguyên cho{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Agent
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Kho tài nguyên chứa các file quy tắc (rules) và skill cho AI Agent. Bao gồm quy tắc code Next.js, cấu trúc thư mục, phân tích yêu cầu, viết kế hoạch triển khai, và hướng dẫn sử dụng công cụ code-review-graph. Thêm chúng vào Agent rule để AI hiểu rõ kiến trúc, tuân thủ quy tắc code, và làm việc chính xác hơn theo đúng ý bạn.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <a
              href="/guide/resources"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Hướng dẫn sử dụng tài nguyên
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ResourcesCards resources={resources} />
      </div>
    </div>
  );
}
