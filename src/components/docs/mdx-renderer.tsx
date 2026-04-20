"use client";

import { useEffect, useRef, useState } from "react";

interface MdxRendererProps {
  content: string;
}

export function MdxRenderer({ content }: MdxRendererProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!ref.current || !mounted) return;
    ref.current.innerHTML = renderMarkdown(content);
  }, [content, mounted]);

  if (!mounted) {
    return <div className="animate-pulse space-y-4"><div className="h-4 bg-muted rounded w-3/4" /><div className="h-4 bg-muted rounded" /><div className="h-4 bg-muted rounded w-5/6" /></div>;
  }

  return (
    <div
      ref={ref}
      className="prose-custom"
    />
  );
}

function renderMarkdown(md: string): string {
  let html = md;

  // Code blocks (must be first)
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<div class="code-block" data-lang="${lang || ""}"><div class="code-header"><span class="code-lang">${lang || "code"}</span><button class="copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.textContent).then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',2000)})">Copy</button></div><pre><code class="language-${lang || "plaintext"}">${escapeHtml(code.trim())}</code></pre></div>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

  // Headings with anchor IDs
  html = html.replace(/^#### (.+)$/gm, '<h4 id="$1">$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3 id="$1">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 id="$1">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 id="$1">$1</h1>');

  // Callout blocks: > [!NOTE], > [!WARNING], > [!TIP], > [!DANGER]
  html = html.replace(/^> \[!(NOTE|TIP|WARNING|DANGER|INFO)\]\n((?:> .+\n?)+)/gim, (_, type, lines) => {
    const iconMap: Record<string, string> = {
      NOTE: "📝", TIP: "💡", WARNING: "⚠️", DANGER: "🚨", INFO: "ℹ️"
    };
    const colorMap: Record<string, string> = {
      NOTE: "border-blue-500 bg-blue-500/5",
      TIP: "border-green-500 bg-green-500/5",
      WARNING: "border-amber-500 bg-amber-500/5",
      DANGER: "border-red-500 bg-red-500/5",
      INFO: "border-purple-500 bg-purple-500/5",
    };
    const textColorMap: Record<string, string> = {
      NOTE: "text-blue-600 dark:text-blue-400",
      TIP: "text-green-600 dark:text-green-400",
      WARNING: "text-amber-600 dark:text-amber-400",
      DANGER: "text-red-600 dark:text-red-400",
      INFO: "text-purple-600 dark:text-purple-400",
    };
    const cleanLines = lines.split("\n").map((l: string) => l.replace(/^> ?/, "")).join("\n");
    return `<div class="callout ${colorMap[type]}"><div class="callout-header ${textColorMap[type]}"><span class="callout-icon">${iconMap[type]}</span><span class="callout-type">${type}</span></div><div class="callout-body">${renderInline(cleanLines)}</div></div>`;
  });

  // Blockquotes (regular)
  html = html.replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>');

  // Cards: ||Title||Description||Link||
  html = html.replace(/\|\|(.+?)\|(.+?)\|(https?:\/\/[^\|]+)\|\|/g,
    '<div class="doc-card"><div class="doc-card-title">$1</div><div class="doc-card-desc">$2</div><a href="$3" class="doc-card-link">Read more →</a></div>');

  // Steps: 1. Step title --- description
  html = html.replace(/^(\d+)\. \*\*([^*]+)\*\* — (.+)$/gm,
    '<div class="step-item"><div class="step-num">$1</div><div class="step-content"><div class="step-title">$2</div><div class="step-desc">$3</div></div></div>');

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="doc-link">$1</a>');

  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr class="doc-hr" />');

  // Tables
  html = html.replace(/^\|(.+)\|$/gm, (match) => {
    const isHeader = match.includes("---");
    if (isHeader) return "";
    const cells = match.split("|").slice(1, -1);
    const tag = "td";
    return `<tr>${cells.map((c: string) => `<${tag} class="doc-table-cell">${c.trim()}</${tag}>`).join("")}</tr>`;
  });
  html = html.replace(/(<tr>[\s\S]*?<\/tr>)+/g, '<table class="doc-table"><tbody>$&</tbody></table>');

  // Unordered lists
  html = html.replace(/(<li>[\s\S]*?<\/li>\n?)+/g, (match) => {
    const items = match.match(/<li>([\s\S]*?)<\/li>/g) || [];
    return `<ul class="doc-ul">${items.map(i => i).join("")}</ul>`;
  });
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Paragraphs (wrap orphan text)
  html = html.replace(/^(?!<[a-z]|$)(.+)$/gm, '<p>$1</p>');

  // Clean empty paragraphs
  html = html.replace(/<p><\/p>/g, "");
  html = html.replace(/\n{3,}/g, "\n\n");

  return html;
}

function renderInline(text: string): string {
  let html = text;
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="doc-link">$1</a>');
  return html;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
