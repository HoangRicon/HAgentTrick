"use client";

import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Avatar */}
          <div className={`flex justify-center transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Check className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className={`md:col-span-2 space-y-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I&apos;m a passionate developer with over 5 years of experience building web applications.
              I specialize in React, Next.js, Node.js, and cloud technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I love creating beautiful, functional, and accessible websites that provide great
              user experiences. When I&apos;m not coding, you&apos;ll find me exploring new
              technologies or contributing to open source projects.
            </p>

            {/* Highlights */}
            <ul className="mt-6 space-y-3">
              {[
                "5+ years of development experience",
                "Built 50+ projects",
                "Open source contributor",
                "Modern tech stack enthusiast",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
