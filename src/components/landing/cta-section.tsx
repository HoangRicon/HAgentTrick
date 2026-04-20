"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CtaSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-purple-600/10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how
          I can help bring your ideas to life.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 group"
        >
          Start a Conversation
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
