"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionAccordionProps {
  title?: React.ReactNode;
  badge?: React.ReactNode;
  color: string;
  phase: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
}

const phaseColors: Record<string, { bg: string; text: string; border: string; badge: string; badgeText: string }> = {
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/30", badge: "bg-cyan-500", badgeText: "text-white" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30", badge: "bg-amber-500", badgeText: "text-white" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-500/30", badge: "bg-indigo-500", badgeText: "text-white" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30", badge: "bg-blue-500", badgeText: "text-white" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/30", badge: "bg-green-500", badgeText: "text-white" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/30", badge: "bg-purple-500", badgeText: "text-white" },
};

export function SectionAccordion({ title, badge, color, phase, children, defaultOpen = false, id }: SectionAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const pc = phaseColors[color] || phaseColors.blue;

  return (
    <div
      id={id || `phase-${phase.toLowerCase()}`}
      className={cn(
        "rounded-2xl border bg-card overflow-hidden transition-all duration-300",
        isOpen ? "shadow-xl shadow-black/5 border-opacity-60" : "shadow-sm hover:shadow-md border-opacity-40"
      )}
    >
      {/* Clickable header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full pl-5 pr-4 py-4 text-left cursor-pointer flex items-center gap-4"
      >
        {title}
        {badge && (
          <span className={cn("ml-auto flex-shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-300", isOpen ? pc.bg : "bg-transparent", isOpen ? pc.border : "border-border/50")}>
            <ChevronDown className={cn("w-4 h-4 transition-all duration-300", isOpen ? pc.text : "text-muted-foreground", isOpen && "rotate-180")} />
          </span>
        )}
        {!badge && (
          <ChevronDown className={cn("w-4 h-4 ml-auto transition-all duration-300 flex-shrink-0", isOpen ? pc.text : "text-muted-foreground", isOpen && "rotate-180")} />
        )}
      </button>

      {/* Expandable content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isOpen ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-5 pt-2">
          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-border/50 via-border/20 to-transparent mb-5" />
          {children}
        </div>
      </div>
    </div>
  );
}
