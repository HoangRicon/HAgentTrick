"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const stats = [
  { label: "Years Experience", value: "5", suffix: "+" },
  { label: "Projects Completed", value: "50", suffix: "+" },
  { label: "Happy Clients", value: "30", suffix: "+" },
  { label: "Lines of Code", value: "100", suffix: "K+" },
];

function StatCard({ label, value, suffix, delay }: { label: string; value: string; suffix: string; delay: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
        {value}{suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} label={stat.label} value={stat.value} suffix={stat.suffix} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
