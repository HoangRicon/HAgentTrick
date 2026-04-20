import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl">🤖</span>
            <span>{siteConfig.name}</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. Hướng dẫn sử dụng AI Agent.
          </p>

          <div className="flex gap-4">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Docs
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
