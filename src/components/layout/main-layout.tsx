"use client";

import { usePathname } from "next/navigation";
import { Header, Footer } from "@/components/layout";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer pathname={pathname} />
    </>
  );
}
