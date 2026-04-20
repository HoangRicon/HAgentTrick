"use client";

import { Check, Mail, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Link from "next/link";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Tại sao nên sử dụng AI Agent?
        </h2>

        <p className={`text-lg text-muted-foreground mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          AI Agent giúp tăng tốc độ phát triển phần mềm, giảm thiểu lỗi, và cho phép lập trình viên tập trung vào logic nghiệp vụ thay vì những công việc lặp đi lặp lại.
        </p>

        <div className={`grid sm:grid-cols-2 gap-4 text-left mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            "Phân tích yêu cầu chi tiết",
            "Viết code nhanh hơn 10x",
            "Quy tắc và quy trình chuẩn",
            "Review tự động",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link
            href="/docs/getting-started/introduction"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 group"
          >
            <span>Bắt đầu đọc</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
