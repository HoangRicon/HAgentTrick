"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { phases, phaseColors, phaseIconMap } from "@/lib/workflow-phases";

interface PhaseAccordionProps {
  phasesOverride?: typeof phases;
  defaultOpenAll?: boolean;
}

export function PhaseAccordion({ phasesOverride, defaultOpenAll = true }: PhaseAccordionProps) {
  const phaseList = phasesOverride || phases;
  const [openPhases, setOpenPhases] = useState<Set<string>>(
    defaultOpenAll ? new Set(phaseList.map((p) => p.phase)) : new Set()
  );

  const toggle = (phase: string) => {
    setOpenPhases((prev) => {
      const next = new Set(prev);
      if (next.has(phase)) {
        next.delete(phase);
      } else {
        next.add(phase);
      }
      return next;
    });
  };

  return (
    <div className="space-y-3">
      {phaseList.map((phase, i) => {
        const pc = phaseColors[phase.color];
        const Icon = phaseIconMap[phase.iconName] || phaseIconMap.Cpu;
        const isOpen = openPhases.has(phase.phase);

        return (
          <div
            key={phase.phase}
            id={`phase-${phase.phase.toLowerCase()}`}
            className={cn(
              "group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300",
              isOpen
                ? "shadow-xl shadow-black/5 border-opacity-60"
                : "shadow-sm hover:shadow-md hover:shadow-black/5 hover:border-opacity-40"
            )}
          >
            {/* Colored accent bar */}
            <div
              className={cn(
                "absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl transition-all duration-300",
                isOpen ? `bg-gradient-to-b ${pc.bg.replace("/10", "")} to-transparent` : `bg-gradient-to-b ${pc.bg.replace("/10", "/5")} to-transparent`
              )}
            />

            {/* Clickable header */}
            <button
              onClick={() => toggle(phase.phase)}
              className="w-full pl-6 pr-5 py-5 text-left cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Icon badge */}
                <div className={cn(
                  "relative w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300",
                  pc.bg,
                  pc.border,
                  isOpen && "scale-105"
                )}>
                  <Icon className={cn("w-5 h-5 transition-transform duration-300", pc.text, isOpen && "scale-110")} />
                  <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-background border-2 border-cyan-500/30 flex items-center justify-center">
                    <span className={cn("text-[9px] font-black", pc.text)}>{i + 1}</span>
                  </div>
                </div>

                {/* Title + subtitle */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={cn("px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest", pc.badge, pc.badgeText)}>
                      Giai đoạn {i + 1}
                    </span>
                    <span className={cn("text-[10px] font-black uppercase tracking-widest", pc.text)}>{phase.phase}</span>
                  </div>
                  <h3 className="text-base font-bold leading-tight">{phase.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{phase.subtitle}</p>
                </div>

                {/* Expand toggle */}
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-300",
                  isOpen ? pc.bg : "bg-transparent",
                  isOpen ? pc.border : "border-border/50",
                  !isOpen && "group-hover:bg-accent/50"
                )}>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-all duration-300",
                      isOpen ? pc.text : "text-muted-foreground group-hover:text-foreground",
                      isOpen && "rotate-180"
                    )}
                  />
                </div>
              </div>
            </button>

            {/* Expandable steps */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-6 pb-6 pl-6">
                {/* Decorative separator */}
                <div className="h-px bg-gradient-to-r from-border/50 via-border/20 to-transparent mb-5" />

                {/* Steps grid */}
                <div className="grid sm:grid-cols-2 gap-2 pl-0 sm:pl-16">
                  {phase.steps.map((step, si) => (
                    <div
                      key={si}
                      className={cn(
                        "flex items-start gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-300",
                        pc.bg,
                        isOpen && "opacity-100"
                      )}
                      style={{
                        transitionDelay: `${si * 60}ms`,
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "translateY(0)" : "translateY(-4px)",
                        transition: `opacity 0.3s ease ${si * 60}ms, transform 0.3s ease ${si * 60}ms, background-color 0.2s ease`
                      }}
                    >
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        pc.badge
                      )}>
                        <CheckCircle2 className={cn("w-3 h-3", pc.badgeText)} />
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
