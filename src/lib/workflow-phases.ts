import {
  Cpu,
  Brain,
  FileSearch,
  Code2,
  Shield,
  Rocket,
} from "lucide-react";

export const phaseColors: Record<string, {
  bg: string;
  text: string;
  border: string;
  badge: string;
  badgeText: string;
}> = {
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/30", badge: "bg-cyan-500", badgeText: "text-white" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/30", badge: "bg-violet-500", badgeText: "text-white" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30", badge: "bg-amber-500", badgeText: "text-white" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30", badge: "bg-blue-500", badgeText: "text-white" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/30", badge: "bg-green-500", badgeText: "text-white" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/30", badge: "bg-purple-500", badgeText: "text-white" },
};

export const phaseIconMap: Record<string, React.ElementType> = {
  Cpu,
  Brain,
  FileSearch,
  Code2,
  Shield,
  Rocket,
};

export interface Phase {
  phase: string;
  iconName: string;
  color: string;
  title: string;
  subtitle: string;
  steps: string[];
}

export const phases: Phase[] = [
  {
    phase: "Power",
    iconName: "Cpu",
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
    iconName: "Brain",
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
    iconName: "FileSearch",
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
