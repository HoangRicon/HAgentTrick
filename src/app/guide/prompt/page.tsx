import type { Metadata } from "next";
import {
  FileText,
  Sparkles,
} from "lucide-react";
import { PromptGuideClient } from "./prompt-client";

export const metadata: Metadata = {
  title: "Viết Prompt hiệu quả",
  description: "Cấu trúc prompt chuẩn: ngữ cảnh rõ ràng, yêu cầu cụ thể, ràng buộc đầy đủ, kỳ vọng đầu ra rõ ràng",
};

export default function PromptGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-purple-500/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            Viết Prompt
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Viết prompt hiệu quả cho{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Agent
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Prompt tốt không phải prompt dài nhất — prompt tốt là prompt đủ ngữ cảnh,
            đủ ràng buộc, đủ kỳ vọng và không thừa thông tin không cần thiết.
            Bốn thành phần bắt buộc: Context, Task, Constraints, Expected Output.
          </p>
        </div>
      </div>

      {/* Content */}
      <PromptGuideClient />
    </div>
  );
}
