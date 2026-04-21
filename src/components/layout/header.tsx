"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, ChevronDown, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
                <Bot className="w-5 h-5" />
              </span>
              <span className="hidden sm:inline">HAgentTrick</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4" ref={dropdownRef}>
            {mainNav.map((item) => (
              <div key={item.href} className="relative">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", openDropdown === item.title && "rotate-180")} />
                    </button>
                    {openDropdown === item.title && (
                      <div className="absolute top-full left-0 mt-2 w-56 rounded-lg border bg-background shadow-lg py-1 z-50">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className={cn(
                              "flex flex-col px-4 py-2.5 hover:bg-accent transition-colors",
                              pathname === sub.href ? "text-primary bg-primary/5" : "text-muted-foreground"
                            )}
                          >
                            <span className="text-sm font-medium">{sub.title}</span>
                            {sub.description && (
                              <span className="text-xs text-muted-foreground mt-0.5">{sub.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      item.href === "/workflow"
                        ? pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-orange-500"
                          : "text-orange-600 dark:text-orange-400 hover:text-orange-500"
                        : pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-primary"
                          : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Theme toggle */}
          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 gap-1">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                      item.href === "/workflow"
                        ? pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-orange-500 bg-orange-500/10"
                          : "text-orange-600 dark:text-orange-400"
                        : pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground"
                    )}
                >
                  {item.title}
                </Link>
                {item.subItems && item.subItems.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={closeMenu}
                    className={cn(
                      "text-sm transition-colors hover:text-primary p-2 pl-8 rounded-md block",
                      pathname === sub.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground"
                    )}
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
