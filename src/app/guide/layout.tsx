import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hướng dẫn",
  description: "Hướng dẫn sử dụng AI Agent",
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
