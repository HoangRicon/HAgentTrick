"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CtaSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-purple-600/10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Bạn có câu hỏi?
        </h2>
        <p className="text-muted-foreground mb-6">
          Liên hệ để được hỗ trợ thêm về AI Agent và cách sử dụng.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 group"
        >
          <Mail className="w-4 h-4 mr-2" />
          Liên hệ
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
