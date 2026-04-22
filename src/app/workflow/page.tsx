import Link from "next/link";
import type { Metadata } from "next";
import { WorkflowContent } from "./workflow-content";

export const metadata: Metadata = {
  title: "Quy trình thực chiến",
  description: "Quy trình làm việc với AI Agent từ xác định sức mạnh AI, phân tích yêu cầu đến triển khai sản phẩm hoàn chỉnh",
};

export default function WorkflowPage() {
  return <WorkflowContent />;
}
