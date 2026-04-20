import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ArrowLeft, Download, ChevronRight, Clock } from "lucide-react";
import matter from "gray-matter";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const resourceFiles: Record<string, { file: string; name: string }> = {
  "quy-tac-prompt": {
    file: "docs/Chung/Quy tắc viết prompt.md",
    name: "Quy tắc viết prompt cho AI Agent",
  },
  "quy-tac-code": {
    file: "docs/Next.js fullstack/Quy tắc code.md",
    name: "Quy tắc code Next.js fullstack",
  },
  "cau-truc-thu-muc": {
    file: "docs/Next.js fullstack/Cấu trúc thư mục.md",
    name: "Cấu trúc thư mục Next.js fullstack",
  },
  "quy-tac-phan-tich": {
    file: "docs/Chung/Quy tắc viết phân tích yêu cầu chức năng.md",
    name: "Quy tắc viết phân tích yêu cầu chức năng",
  },
  "quy-tac-ke-hoach": {
    file: "docs/Chung/Quy tắc viết kế hoạch triển khai.md",
    name: "Quy tắc viết kế hoạch triển khai",
  },
  "code-review-graph": {
    file: "docs/Chung/code-review-graph.md",
    name: "Code Review Graph",
  },
};

export function generateStaticParams() {
  return Object.keys(resourceFiles).map((slug) => ({ slug }));
}

function getReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = resourceFiles[slug as keyof typeof resourceFiles];

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Tài nguyên không tồn tại</h1>
          <p className="text-muted-foreground mb-6">Tài nguyên bạn đang tìm không có trong hệ thống.</p>
          <Link
            href="/guide/resources"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay về danh sách
          </Link>
        </div>
      </div>
    );
  }

  const fullPath = path.join(process.cwd(), resource.file);
  let content = "";
  let error = false;

  try {
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { content: rawContent } = matter(fileContent);
    content = rawContent;
  } catch {
    error = true;
  }

  const readingTime = getReadingTime(content);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-background to-purple-500/5" />
        <div className="relative max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <Link
            href="/guide/resources"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Quay về danh sách tài nguyên
          </Link>

          <div className="flex items-start gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
                {resource.name}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {readingTime} phút đọc
                </span>
                <span className="text-muted-foreground/50">|</span>
                <span>Markdown</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <a
            href={`/api/download/doc?file=${encodeURIComponent(resource.file)}`}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium text-sm hover:bg-indigo-600 transition-colors"
          >
            <Download className="w-4 h-4" />
            Tải file .md
          </a>
          <Link
            href="/guide/resources"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-input bg-background font-medium text-sm hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            Tài nguyên khác
          </Link>
        </div>

        {/* Content */}
        {error || !content ? (
          <div className="p-8 text-center rounded-xl border bg-muted/30">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Tài liệu đang được cập nhật.</p>
          </div>
        ) : (
          <div className="prose-custom">
            <MarkdownRenderer content={content} />
          </div>
        )}

        {/* Footer nav */}
        <div className="flex items-center justify-between pt-8 border-t">
          <Link
            href="/guide/resources"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay về danh sách tài nguyên
          </Link>
          <a
            href={`/api/download/doc?file=${encodeURIComponent(resource.file)}`}
            download
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Download className="w-4 h-4" />
            Tải file
          </a>
        </div>
      </div>
    </div>
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Heading 1
    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={key++} className="text-3xl font-bold mt-10 mb-4 first:mt-0 pb-2 border-b">
          {parseInline(line.slice(2))}
        </h1>
      );
      i++;
      continue;
    }

    // Heading 2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold mt-8 mb-4 pb-2 border-b">
          {parseInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // Heading 3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-semibold mt-6 mb-3">
          {parseInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Heading 4
    if (line.startsWith("#### ")) {
      elements.push(
        <h4 key={key++} className="text-lg font-semibold mt-4 mb-2">
          {parseInline(line.slice(5))}
        </h4>
      );
      i++;
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---" || line.trim() === "***" || line.trim() === "___") {
      elements.push(<hr key={key++} className="my-8 border-border" />);
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-2 my-4 ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-muted-foreground leading-relaxed">
              {parseInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: { num: string; text: string }[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        const match = lines[i].match(/^(\d+)\.\s(.*)$/);
        if (match) listItems.push({ num: match[1], text: match[2] });
        i++;
      }
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-2 my-4 ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-muted-foreground leading-relaxed">
              {parseInline(item.text)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={key++} className="my-4 rounded-lg overflow-hidden border">
          {lang && (
            <div className="px-4 py-2 bg-muted text-xs font-mono text-muted-foreground border-b">
              {lang}
            </div>
          )}
          <pre className="p-4 bg-muted/50 overflow-x-auto">
            <code className="text-sm font-mono">{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote key={key++} className="my-4 pl-4 border-l-4 border-indigo-500/50 italic text-muted-foreground">
          {quoteLines.map((q, idx) => (
            <p key={idx} className="mb-1">{parseInline(q)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Table (simple support)
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(<TableRenderer key={key++} lines={tableLines} />);
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={key++} className="text-muted-foreground leading-relaxed my-4">
        {parseInline(line)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

function TableRenderer({ lines }: { lines: string[] }) {
  if (lines.length < 2) return null;

  const rows = lines
    .filter((l) => !l.replace(/\|/g, "").replace(/-/g, "").replace(/\s/g, ""))
    .map((l) =>
      l
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim())
    );

  if (rows.length < 2) return null;

  const header = rows[0];
  const body = rows.slice(1);

  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b">
            {header.map((cell, idx) => (
              <th key={idx} className="text-left font-semibold px-3 py-2 text-foreground">
                {parseInline(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b last:border-0">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-3 py-2 text-muted-foreground">
                  {parseInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function parseInline(text: string): React.ReactNode {
  if (!text) return text;
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Inline code (must check first)
    const codeMatch = remaining.match(/`([^`]+)`/);
    if (codeMatch && codeMatch.index !== undefined) {
      if (codeMatch.index > 0) {
        parts.push(remaining.slice(0, codeMatch.index));
      }
      parts.push(
        <code key={key++} className="px-1.5 py-0.5 rounded bg-muted text-primary text-sm font-mono">
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch.index + codeMatch[0].length);
      continue;
    }

    // Bold
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
    if (boldMatch && boldMatch.index !== undefined) {
      if (boldMatch.index > 0) {
        parts.push(remaining.slice(0, boldMatch.index));
      }
      parts.push(<strong key={key++} className="font-semibold">{boldMatch[1]}</strong>);
      remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
      continue;
    }

    // Italic
    const italicMatch = remaining.match(/\*([^*]+)\*/);
    if (italicMatch && italicMatch.index !== undefined) {
      if (italicMatch.index > 0) {
        parts.push(remaining.slice(0, italicMatch.index));
      }
      parts.push(<em key={key++}>{italicMatch[1]}</em>);
      remaining = remaining.slice(italicMatch.index + italicMatch[0].length);
      continue;
    }

    // No more matches, push rest
    parts.push(remaining);
    break;
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}
