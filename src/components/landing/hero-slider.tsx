"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Bot, Check, Mail } from "lucide-react";

const slides = [
  {
    id: "hero",
    badge: "Hướng dẫn sử dụng AI Agent",
    title: "Hướng dẫn",
    titleAccent: "AI Agent",
    titleSuffix: "để Code từ A-Z",
    subtitle:
      "Tìm hiểu cách sử dụng AI Agent để xây dựng website, ứng dụng web, và các dự án lập trình một cách hiệu quả nhất.",
    ctaPrimary: { label: "Bắt đầu học", href: "/docs" },
    ctaSecondary: { label: "Đọc ngay", href: "/docs/getting-started/introduction" },
    bgGradient: "from-primary/10 via-background to-secondary/20",
  },
  {
    id: "about",
    badge: "Tại sao nên sử dụng?",
    title: "Tại sao nên sử dụng AI Agent?",
    subtitle:
      "AI Agent giúp tăng tốc độ phát triển phần mềm, giảm thiểu lỗi, và cho phép lập trình viên tập trung vào logic nghiệp vụ thay vì những công việc lặp đi lặp lại.",
    benefits: [
      "Phân tích yêu cầu chi tiết",
      "Viết code nhanh hơn 10x",
      "Quy tắc và quy trình chuẩn",
      "Review tự động",
    ],
    ctaPrimary: { label: "Bắt đầu đọc", href: "/docs/getting-started/introduction" },
    bgGradient: "from-purple-500/10 via-background to-primary/10",
  },
  {
    id: "features",
    badge: "Nội dung hướng dẫn",
    title: "Nội dung hướng dẫn",
    subtitle: "Từ cơ bản đến nâng cao, tất cả những gì bạn cần để sử dụng AI Agent hiệu quả",
    features: [
      "AI Agent là gì?",
      "Quy tắc viết Prompt",
      "Phân tích Yêu cầu",
      "Best Practices",
      "Tối ưu Workflow",
      "Tránh bẫy phổ biến",
    ],
    ctaPrimary: { label: "Khám phá ngay", href: "/docs" },
    bgGradient: "from-green-500/10 via-background to-blue-500/10",
  },
  {
    id: "cta",
    badge: "Liên hệ hỗ trợ",
    title: "Bạn có câu hỏi?",
    subtitle:
      "Liên hệ để được hỗ trợ thêm về AI Agent và cách sử dụng.",
    ctaPrimary: { label: "Liên hệ", href: "/contact" },
    bgGradient: "from-orange-500/10 via-background to-pink-500/10",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const lastWheelTime = useRef<number>(0);

  const goToSlide = useCallback(
    (index: number, dir: "left" | "right" = "right") => {
      if (isAnimating || index === currentSlide || index < 0 || index >= slides.length) return;
      setDirection(dir);
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating, currentSlide]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1, "right");
    }
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1, "left");
    }
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Wheel support for desktop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 800) return;
      lastWheelTime.current = now;

      if (e.deltaY > 30 || e.deltaX > 30) {
        nextSlide();
      } else if (e.deltaY < -30 || e.deltaX < -30) {
        prevSlide();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [nextSlide, prevSlide]);

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;
    // Only horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleDotClick = (index: number) => {
    goToSlide(index, index > currentSlide ? "right" : "left");
  };

  // Auto-hide arrows based on slide
  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < slides.length - 1;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ marginTop: "-4rem" }}
    >
      {/* Slides */}
      {slides.map((s, i) => {
        const isActive = i === currentSlide;
        let transform = "";
        let opacity = 0;
        let zIndex = 0;
        let pointerEvents = "none";

        if (isActive) {
          transform = "translateX(0) translateY(0) scale(1)";
          opacity = 1;
          zIndex = 10;
          pointerEvents = "auto";
        } else if (i < currentSlide) {
          transform = "translateX(-120%) scale(0.9)";
          opacity = 0;
          zIndex = 5;
        } else {
          transform = "translateX(120%) scale(0.9)";
          opacity = 0;
          zIndex = 5;
        }

        return (
          <div
            key={s.id}
            className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out"
            style={{
              transform,
              opacity,
              zIndex,
              pointerEvents,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${s.bgGradient}`} />
            <FloatingShapes />
            <SlideContent slide={s} />
          </div>
        );
      })}

      {/* Navigation dots - always visible, prominent */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-full bg-background/60 backdrop-blur-md border shadow-lg">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => handleDotClick(i)}
            className="group relative focus:outline-none"
            aria-label={`Go to slide ${i + 1}: ${s.badge}`}
          >
            <span
              className={`block rounded-full transition-all duration-500 ease-out ${
                i === currentSlide
                  ? "w-8 h-2 sm:h-2.5 bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                  : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-muted-foreground/40 group-hover:bg-muted-foreground/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-40 px-3 py-1.5 rounded-full bg-background/60 backdrop-blur-md border shadow text-xs sm:text-sm font-medium text-muted-foreground">
        <span className="text-foreground font-bold">{currentSlide + 1}</span>
        <span className="mx-1">/</span>
        <span>{slides.length}</span>
      </div>

      {/* Arrow navigation - always show on desktop, hidden on mobile */}
      <button
        onClick={prevSlide}
        disabled={!canGoPrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border shadow-lg items-center justify-center transition-all duration-300 hover:bg-background hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-foreground group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        disabled={!canGoNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border shadow-lg items-center justify-center transition-all duration-300 hover:bg-background hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-foreground group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Mobile swipe hint */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-40 flex sm:hidden items-center gap-2 text-xs text-muted-foreground/50">
        <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        <span>Vuốt để chuyển</span>
        <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
}

function FloatingShapes() {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-full blur-3xl" />
    </>
  );
}

function SlideContent({ slide }: { slide: (typeof slides)[0] }) {
  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8">
          {slide.id === "hero" && <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />}
          {slide.id === "about" && <Bot className="w-3 h-3 sm:w-4 sm:h-4" />}
          {slide.id === "features" && <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />}
          {slide.id === "cta" && <Mail className="w-3 h-3 sm:w-4 sm:h-4" />}
          <span>{slide.badge}</span>
        </div>

        {/* Title */}
        <h1
          className={
            slide.id === "hero"
              ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 sm:mb-6 leading-tight"
              : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 sm:mb-6 leading-tight"
          }
        >
          {slide.id === "hero" ? (
            <>
              <span className="text-foreground">{slide.title}</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {slide.titleAccent}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground">
                {slide.titleSuffix}
              </span>
            </>
          ) : (
            <span className="text-foreground">{slide.title}</span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 px-2 leading-relaxed">
          {slide.subtitle}
        </p>

        {/* Benefits grid */}
        {slide.benefits && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-left max-w-sm sm:max-w-lg mx-auto mb-6 sm:mb-8 px-2">
            {slide.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-lg bg-muted/40 border border-border/50"
              >
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        )}

        {/* Features pills */}
        {slide.features && (
          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-4">
            {slide.features.map((feature, i) => (
              <span
                key={i}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-muted/40 border border-border/50 text-xs sm:text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link
            href={slide.ctaPrimary.href}
            className="inline-flex items-center justify-center h-11 sm:h-12 px-6 sm:px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 text-sm sm:text-base"
          >
            <span>{slide.ctaPrimary.label}</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          {slide.ctaSecondary && (
            <Link
              href={slide.ctaSecondary.href}
              className="inline-flex items-center justify-center h-11 sm:h-12 px-6 sm:px-8 rounded-lg border border-input bg-background/80 backdrop-blur-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all text-sm sm:text-base"
            >
              {slide.ctaSecondary.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
