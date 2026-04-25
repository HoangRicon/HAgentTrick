import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sự kết thúc của Vibe Coding — HOT",
  description: "4 công cụ SDD: Superpowers, Spec-Kit, Superspec, Spec-First Superpowers.",
};

export default function WorkflowPage() {
  redirect("/guide/workflow");
}
