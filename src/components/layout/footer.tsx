import Link from "next/link";

interface FooterProps {
  pathname?: string;
}

export function Footer({ pathname }: FooterProps) {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl">🤖</span>
            <span>HAgentTrick</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} HAgentTrick — Một sản phẩm của{" "}
            <a
              href="https://hoangricon.github.io/in4/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              HTool
            </a>
            . Hướng dẫn sử dụng AI Agent để code từ A-Z.
          </p>
        </div>
      </div>
    </footer>
  );
}
