"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ArrowUp,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  FileText,
  Code2,
  BookOpen,
  Workflow,
  Rocket,
  Shield,
  Lightbulb,
  Keyboard,
  Zap,
  Users,
  MessageSquare,
  Search,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SlideFeature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
};

type SlideStep = {
  num: string;
  title: string;
  desc: string;
};

type SlideWorkflowPhase = {
  phase: string;
  icon: LucideIcon;
  color: string;
  desc: string;
};

type SlidePrinciple = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
};

type SlideTrap = {
  emoji: string;
  title: string;
  desc: string;
  solution: string;
};

type SlideAction = {
  label: string;
  href: string;
  primary: boolean;
};

type SlideCta = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type AccentColor = { bg: string; text: string; border: string; glow: string };

type Slide = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  highlights?: string[];
  features?: SlideFeature[];
  steps?: SlideStep[];
  workflow?: SlideWorkflowPhase[];
  tips?: string[];
  principles?: SlidePrinciple[];
  traps?: SlideTrap[];
  actions?: SlideAction[];
  cta?: SlideCta;
  bg: string;
  accent: string;
};

const sections: Slide[] = [
  {
    id: "welcome",
    badge: "HAgentTrick",
    title: "Ngữ cảnh là mọi thứ",
    subtitle:
      "Prompt hay thôi chưa đủ. Ngữ cảnh quyết định AI sinh code đúng hay sai, đúng kiến trúc hay tự bịa. HAgentTrick cung cấp bộ tài nguyên giúp bạn xây dựng ngữ cảnh đầy đủ cho AI Agent.",
    highlights: [
      "Quy tắc viết Prompt",
      "Phân tích yêu cầu",
      "Quy trình thực chiến",
      "Lưu ý bắt buộc",
    ],
    cta: { label: "Đọc lưu ý bắt buộc", href: "/guide/traps", icon: AlertTriangle },
    bg: "from-blue-500/8 via-background to-purple-500/8",
    accent: "blue",
  },
  {
    id: "prompt-rules",
    badge: "Cách viết prompt hiệu quả",
    title: "Viết Prompt như chuyên gia",
    subtitle:
      "Prompt là cầu nối giữa bạn và AI Agent. Một prompt tốt giúp AI hiểu chính xác yêu cầu, sinh code đúng scope, và giảm thiểu việc phải sửa lại nhiều lần.",
    features: [
      {
        icon: FileText,
        title: "Cấu trúc rõ ràng",
        desc: "Mỗi prompt gồm: ngữ cảnh, yêu cầu, ràng buộc, và kỳ vọng đầu ra",
        href: "/guide/prompt",
      },
      {
        icon: Sparkles,
        title: "Ngữ cảnh đầy đủ",
        desc: "Cung cấp thông tin nền: framework, thư viện, cấu trúc dự án hiện tại",
        href: "/guide/prompt",
      },
      {
        icon: Keyboard,
        title: "Từ khóa hiệu quả",
        desc: "Sử dụng từ khóa như: implement, refactor, explain, fix bug để AI hiểu intent",
        href: "/guide/prompt",
      },
      {
        icon: Code2,
        title: "Code mẫu kèm theo",
        desc: "Dán code hiện có vào prompt giúp AI hiểu style và convention của dự án",
        href: "/guide/prompt",
      },
    ],
    cta: { label: "Học cách viết prompt", href: "/guide/prompt", icon: MessageSquare },
    bg: "from-purple-500/8 via-background to-pink-500/8",
    accent: "purple",
  },
  {
    id: "analysis",
    badge: "Phân tích yêu cầu nhanh",
    title: "Phân tích yêu cầu trước khi code",
    subtitle:
      "Trước khi viết dòng code nào, hãy dành thời gian phân tích yêu cầu. Điều này giúp xác định scope chính xác, tránh over-engineering, và đảm bảo AI đi đúng hướng.",
    steps: [
      {
        num: "01",
        title: "Xác định mục tiêu",
        desc: "Mục tiêu cuối cùng là gì? Ai là người dùng? Vấn đề cần giải quyết?",
      },
      {
        num: "02",
        title: "Liệt kê tính năng",
        desc: "Đánh dấu tính năng must-have, nice-to-have, và out-of-scope ngay từ đầu",
      },
      {
        num: "03",
        title: "Xác định Actor & Entity",
        desc: "Ai dùng hệ thống? Họ thao tác trên dữ liệu nào? Ai tạo, xem, sửa, xóa?",
      },
      {
        num: "04",
        title: "Tạo Build Order",
        desc: "Tách foundation trước, core flow sau, support flow cuối cùng. Xác định phase mở đường cho phase nào.",
      },
    ],
    cta: { label: "Học cách phân tích", href: "/guide/analysis", icon: Search },
    bg: "from-green-500/8 via-background to-emerald-500/8",
    accent: "green",
  },
  {
    id: "workflow",
    badge: "Quy trình thực chiến",
    title: "Quy trình làm việc với AI Agent",
    subtitle:
      "Một workflow hiệu quả giúp bạn tận dụng tối đa khả năng của AI Agent, duy trì chất lượng code, và giảm thời gian debug.",
    workflow: [
      { phase: "Plan", icon: Lightbulb, color: "amber", desc: "Phân tích & viết prompt tổng" },
      { phase: "Build", icon: Code2, color: "blue", desc: "Sinh code từng module" },
      { phase: "Review", icon: Shield, color: "green", desc: "AI tự review & cải thiện" },
      { phase: "Ship", icon: Rocket, color: "purple", desc: "Kiểm thử & triển khai" },
    ],
    tips: [
      "Luôn chạy test sau mỗi lần AI sinh code lớn",
      "Duy trì một file spec ghi lại quyết định thiết kế",
      "Sử dụng git commit nhỏ để dễ rollback nếu cần",
      "Đặt câu hỏi cụ thể, tránh prompt quá chung chung",
    ],
    cta: { label: "Xem quy trình chi tiết", href: "/guide/workflow", icon: Workflow },
    bg: "from-orange-500/8 via-background to-amber-500/8",
    accent: "orange",
  },
  {
    id: "tools",
    badge: "Tích hợp công cụ",
    title: "Công cụ hỗ trợ AI Agent",
    subtitle:
      "Các công cụ tích hợp hoàn thiện hệ sinh thái, giúp tăng cường khả năng hiểu code, phân tích, và sinh code của AI Agent.",
    features: [
      {
        icon: Code2,
        title: "code-review-graph",
        desc: "Xây dựng knowledge graph của codebase bằng Tree-sitter, giúp AI hiểu cấu trúc mã nguồn nhanh",
        href: "/guide/resources",
      },
      {
        icon: Users,
        title: "AI Agent tích hợp",
        desc: "Tích hợp trực tiếp vào Cursor, Claude Code hoặc các AI Agent khác qua API hoặc file rule",
        href: "/guide/resources",
      },
    ],
    cta: { label: "Xem thêm tài nguyên", href: "/guide/resources", icon: Wrench },
    bg: "from-teal-500/8 via-background to-cyan-500/8",
    accent: "teal",
  },
  {
    id: "traps",
    badge: "Những lưu ý bắt buộc",
    title: "Ngữ cảnh quan trọng hơn prompt",
    subtitle:
      "Đây không phải tips hay best practices. Đây là những lưu ý bắt buộc phải tuân thủ nếu bạn muốn AI Agent thật sự hữu ích.",
    traps: [
      {
        emoji: "1",
        title: "Ngữ cảnh > Prompt",
        desc: "Prompt dở + ngữ cảnh đủ = kết quả tốt. Prompt hay + ngữ cảnh thiếu = kết quả không đoán trước được.",
        solution: "Cung cấp ngữ cảnh đầy đủ trước mọi yêu cầu",
      },
      {
        emoji: "2",
        title: "Verify code từ AI",
        desc: "AI có thể sai logic, thiếu edge case, không đúng spec. Không có hệ thống nào hoàn hảo 100%.",
        solution: "Review cẩn thận từng dòng trước khi commit",
      },
      {
        emoji: "3",
        title: "Kiểm soát scope chặt",
        desc: "AI dễ thêm tính năng mà không hỏi. Mỗi task chỉ 1 mục tiêu rõ ràng, không lan man.",
        solution: "Mỗi lần giao tiếp chỉ xử lý 1-2 files",
      },
      {
        emoji: "4",
        title: "Phân tích trước khi code",
        desc: "Nhảy thẳng vào code mà không phân tích → AI tự đoán → đoán thì thường sai → sửa lại mất gấp đôi.",
        solution: "Spec rõ ràng là kim chỉ nam cho cả bạn và AI",
      },
    ],
    cta: { label: "Đọc thêm", href: "/guide/traps", icon: Shield },
    bg: "from-amber-500/8 via-background to-orange-500/8",
    accent: "amber",
  },
  {
    id: "cta",
    badge: "Sẵn sàng",
    title: "Bắt đầu hành trình của bạn",
    subtitle:
      "Giờ bạn đã nắm được những nguyên tắc cơ bản. Hãy đọc tài liệu chi tiết và bắt đầu ứng dụng vào dự án thực tế.",
    actions: [
      { label: "Sẵn sàng", href: "/guide/workflow", primary: true },
      { label: "Đọc lưu ý", href: "/guide/traps", primary: false },
    ],
    bg: "from-primary/10 via-background to-purple-500/10",
    accent: "primary",
  },
];

const accentColors: Record<string, AccentColor> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20", glow: "shadow-blue-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20", glow: "shadow-purple-500/20" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20", glow: "shadow-green-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20", glow: "shadow-orange-500/20" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20", glow: "shadow-teal-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20", glow: "shadow-amber-500/20" },
  rose: { bg: "bg-rose-500/10", text: "text-rose-600 dark:text-rose-400", border: "border-rose-500/20", glow: "shadow-rose-500/20" },
  red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20", glow: "shadow-red-500/20" },
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20", glow: "shadow-primary/20" },
};

export function VerticalSlider() {
  const [currentSection, setCurrentSection] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goToSection = useCallback((index: number) => {
    if (index < 0 || index >= sections.length) return;
    const target = document.getElementById(`section-${sections[index].id}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrentSection(index);
  }, []);

  const nextSection = useCallback(() => {
    if (currentSection < sections.length - 1) {
      goToSection(currentSection + 1);
    }
  }, [currentSection, goToSection]);

  const prevSection = useCallback(() => {
    if (currentSection > 0) {
      goToSection(currentSection - 1);
    }
  }, [currentSection, goToSection]);

  useEffect(() => {
    if (!mounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        nextSection();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevSection();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSection(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSection(sections.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mounted, nextSection, prevSection, goToSection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 700) return;
      lastWheelTime.current = now;

      if (e.deltaY > 0) nextSection();
      else if (e.deltaY < 0) prevSection();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [nextSection, prevSection]);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const index = Math.round(scrollY / windowH);
      if (index >= 0 && index < sections.length && index !== currentSection) {
        setCurrentSection(index);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted, currentSection]);

  const s = sections[currentSection];
  const colors = accentColors[s.accent];

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-y-auto snap-y snap-mandatory h-screen"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* Sections */}
      {sections.map((section, i) => (
        <Section
          key={section.id}
          section={section}
          index={i}
          colors={accentColors[section.accent]}
        />
      ))}

      {/* Side dots navigation */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
        {sections.map((section, i) => {
          const isActive = i === currentSection;
          return (
            <button
              key={section.id}
              onClick={() => goToSection(i)}
              className="group relative flex items-center justify-end"
              aria-label={section.badge}
            >
              <span
                className={`absolute right-6 px-2 py-1 rounded bg-background/90 backdrop-blur border shadow text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                {section.badge}
              </span>
              <span
                className={`block rounded-full transition-all duration-500 ${
                  isActive
                    ? "w-3 h-3 bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    : "w-2 h-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Bottom navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border shadow-lg text-sm">
          <button
            onClick={prevSection}
            disabled={currentSection === 0}
            className="flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all text-muted-foreground hover:text-foreground"
            aria-label="Previous slide"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <span className="font-bold text-primary">{currentSection + 1}</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">{sections.length}</span>
          <button
            onClick={nextSection}
            disabled={currentSection === sections.length - 1}
            className="flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all text-muted-foreground hover:text-foreground"
            aria-label="Next slide"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {currentSection < sections.length - 1 && (
          <button
            onClick={nextSection}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all text-sm font-medium group"
          >
            <span className="hidden sm:inline">Tiếp theo</span>
            <span className="sm:hidden">Next</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* Keyboard hint */}
      {mounted && (
        <div className="fixed bottom-6 right-4 z-50 hidden lg:flex items-center gap-1.5 text-xs text-muted-foreground/40 px-2 py-1 rounded bg-background/60 backdrop-blur">
          <kbd className="px-1.5 py-0.5 rounded border bg-muted/50 font-mono text-[10px]">↑</kbd>
          <kbd className="px-1.5 py-0.5 rounded border bg-muted/50 font-mono text-[10px]">↓</kbd>
          <span className="ml-1">scroll</span>
        </div>
      )}
    </div>
  );
}

function Section({
  section: s,
  index: i,
  colors,
}: {
  section: (typeof sections)[0];
  index: number;
  colors: (typeof accentColors)[string];
}) {
  return (
    <section
      id={`section-${s.id}`}
      className="relative min-h-screen snap-start flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-background" />
      <FloatingBlobs accent={s.accent} index={i} />

      {/* Accent bar on left */}
      <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${colors.bg} opacity-60`} />

      {/* Content */}
      <div className="relative z-10 max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs sm:text-sm font-semibold`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {s.badge}
          </span>
        </div>

        {/* Title */}
        <h2 className={`font-bold tracking-tight mb-3 sm:mb-5 leading-tight text-center ${
          s.id === "welcome" ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl" :
          s.id === "cta" ? "text-3xl sm:text-4xl md:text-5xl" :
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        }`}>
          {s.id === "welcome" ? (
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span className="text-foreground">Ngữ cảnh</span>
              <span className="text-foreground">là</span>
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                mọi thứ
              </span>
            </div>
          ) : (
            <span className="text-foreground">{s.title}</span>
          )}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed text-center">
          {s.subtitle}
        </p>

        {/* Content variants */}
        {s.id === "welcome" && s.highlights && (
          <WelcomeHighlights highlights={s.highlights} colors={colors} />
        )}

        {s.features && (
          <FeaturesGrid features={s.features} colors={colors} />
        )}

        {s.steps && (
          <StepsList steps={s.steps} colors={colors} />
        )}

        {s.workflow && (
          <WorkflowSection workflow={s.workflow} tips={s.tips} colors={colors} />
        )}

        {s.traps && (
          <TrapsGrid traps={s.traps} />
        )}

        {/* CTA */}
        {s.cta && (
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 sm:mt-8">
            <Link
              href={s.cta.href}
              className="inline-flex items-center gap-2 h-11 sm:h-12 px-6 sm:px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 text-sm sm:text-base group"
            >
              <s.cta.icon className="w-4 h-4" />
              <span>{s.cta.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {s.actions && (
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 sm:mt-8">
            {s.actions.map((action, ai) => (
              <Link
                key={ai}
                href={action.href}
                className={`inline-flex items-center gap-2 h-11 sm:h-12 px-6 sm:px-8 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  action.primary
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                    : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {action.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FloatingBlobs({ accent, index }: { accent: string; index: number }) {
  const blobs = [
    `absolute top-[10%] ${index % 2 === 0 ? "left-[5%]" : "right-[5%]"} w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl animate-pulse opacity-[0.06]`,
    `absolute bottom-[10%] ${index % 2 === 0 ? "right-[10%]" : "left-[10%]"} w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-3xl animate-pulse opacity-[0.05]`,
    `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full blur-3xl opacity-[0.04]`,
  ];

  const blobColors: Record<string, string> = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
    teal: "bg-teal-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
    red: "bg-red-500",
    primary: "bg-primary",
  };

  return (
    <>
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`${b} ${blobColors[accent] || "bg-primary"}`}
          style={{ animationDelay: `${i * 0.7}s` }}
        />
      ))}
    </>
  );
}

function WelcomeHighlights({
  highlights,
  colors,
}: {
  highlights: string[];
  colors: (typeof accentColors)[string];
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center">
      {highlights.map((h, i) => (
        <div
          key={i}
          className={`flex items-center gap-2.5 p-3 sm:p-4 rounded-xl ${colors.bg} border ${colors.border} backdrop-blur-sm`}
        >
          <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.text} flex-shrink-0`} />
          <span className="text-sm font-medium">{h}</span>
        </div>
      ))}
    </div>
  );
}

function FeaturesGrid({ features, colors }: { features: SlideFeature[]; colors: AccentColor }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {features.map((f, i) => (
        <Link
          key={i}
          href={f.href}
          className={`group flex items-start gap-3 p-4 sm:p-5 rounded-xl ${colors.bg} border ${colors.border} hover:${colors.border} transition-all hover:shadow-lg ${colors.glow} backdrop-blur-sm`}
        >
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
            <f.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-sm sm:text-base">{f.title}</h3>
              <ArrowRight className={`w-3.5 h-3.5 ${colors.text} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0`} />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function StepsList({ steps, colors }: { steps: SlideStep[]; colors: AccentColor }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`relative flex items-start gap-4 p-4 sm:p-5 rounded-xl ${colors.bg} border ${colors.border} backdrop-blur-sm overflow-hidden`}
        >
          <span className={`text-4xl sm:text-5xl font-bold ${colors.text} opacity-20 absolute top-2 right-3 sm:right-4`}>
            {step.num}
          </span>
          <div className="relative z-10">
            <h3 className="font-semibold text-sm sm:text-base mb-1.5">{step.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function WorkflowSection({ workflow, tips, colors }: { workflow: SlideWorkflowPhase[]; tips?: string[]; colors: AccentColor }) {
  const phaseColors: Record<string, { bg: string; text: string; border: string }> = {
    amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30" },
    green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/30" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/30" },
  };

  return (
    <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
      {/* Workflow phases */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        {workflow.map((phase, i) => {
          const pc = phaseColors[phase.color] || phaseColors.blue;
          return (
            <div key={i} className="flex items-center gap-0">
              <div className={`flex flex-col items-center gap-1.5 p-3 sm:p-4 rounded-xl ${pc.bg} border ${pc.border} min-w-[80px] sm:min-w-[100px]`}>
                <phase.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${pc.text}`} />
                <span className={`text-xs font-bold ${pc.text}`}>{phase.phase}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground text-center hidden sm:block">{phase.desc}</span>
              </div>
              {i < workflow.length - 1 && (
                <ArrowRight className="w-4 h-4 text-muted-foreground/40 mx-1 flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Tips */}
      {tips && (
        <div className={`p-4 sm:p-5 rounded-xl ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.text}`} />
            <span className="text-sm font-semibold">Tips</span>
          </div>
          <ul className="space-y-2">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function TrapsGrid({ traps }: { traps: SlideTrap[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {traps.map((trap, i) => (
        <div
          key={i}
          className="p-4 sm:p-5 rounded-xl bg-amber-500/5 border border-amber-500/20"
        >
          <div className="flex items-start gap-3 mb-2">
            <div className="w-7 h-7 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
              {trap.emoji}
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-amber-600 dark:text-amber-400">{trap.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{trap.desc}</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-green-500/5 border border-green-500/20 mt-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-muted-foreground">
              <span className="font-medium text-green-600 dark:text-green-400">Cách làm: </span>
              {trap.solution}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
