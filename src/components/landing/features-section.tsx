"use client";

import { Bot, FileText, Zap, Shield, Lightbulb, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Bot,
    title: "AI Agent là gì?",
    description: "Tìm hiểu khái niệm AI Agent, cách hoạt động và tại sao nó thay đổi cách chúng ta lập trình.",
  },
  {
    icon: FileText,
    title: "Quy tắc viết Prompt",
    description: "Hướng dẫn cách viết prompt hiệu quả để AI Agent hiểu yêu cầu và sinh code chính xác nhất.",
  },
  {
    icon: Code,
    title: "Phân tích Yêu cầu",
    description: "Cách phân tích yêu cầu nghiệp vụ trước khi bắt đầu code, giúp AI hiểu đúng scope dự án.",
  },
  {
    icon: Lightbulb,
    title: "Best Practices",
    description: "Những bài học và kinh nghiệm thực tế khi sử dụng AI Agent để code trong nhiều năm.",
  },
  {
    icon: Zap,
    title: "Tối ưu Workflow",
    description: "Cách thiết lập quy trình làm việc với AI Agent giúp tăng tốc độ phát triển phần mềm.",
  },
  {
    icon: Shield,
    title: "Tránh bẫy phổ biến",
    description: "Những lỗi thường gặp khi dùng AI Agent và cách tránh chúng để có code chất lượng cao.",
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nội dung hướng dẫn</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Từ cơ bản đến nâng cao, tất cả những gì bạn cần để sử dụng AI Agent hiệu quả
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group p-6 rounded-xl bg-card border shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
