"use client";

import { Code, Palette, Zap, Shield, Accessibility, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code that follows best practices and is easy to understand.",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Creating visually stunning interfaces with attention to typography, color, and user experience.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimizing applications for speed and efficiency, ensuring smooth user interactions.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Implementing security best practices and writing robust code that handles edge cases.",
  },
  {
    icon: Accessibility,
    title: "Accessible",
    description: "Building inclusive applications that work for everyone, following WCAG guidelines.",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Contributing to and maintaining open source projects that benefit the community.",
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building digital products, brands, and experiences
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
