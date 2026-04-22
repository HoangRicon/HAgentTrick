"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Download, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface MarkdownViewerProps {
  content: string;
  error: boolean;
  file: string;
  filePath: string;
  textColor: string;
  iconBg: string;
  border: string;
}

function parseInline(text: string): React.ReactNode {
  if (!text) return text;
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
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

    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
    if (boldMatch && boldMatch.index !== undefined) {
      if (boldMatch.index > 0) {
        parts.push(remaining.slice(0, boldMatch.index));
      }
      parts.push(<strong key={key++} className="font-semibold">{boldMatch[1]}</strong>);
      remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
      continue;
    }

    const italicMatch = remaining.match(/\*([^*]+)\*/);
    if (italicMatch && italicMatch.index !== undefined) {
      if (italicMatch.index > 0) {
        parts.push(remaining.slice(0, italicMatch.index));
      }
      parts.push(<em key={key++}>{italicMatch[1]}</em>);
      remaining = remaining.slice(italicMatch.index + italicMatch[0].length);
      continue;
    }

    parts.push(remaining);
    break;
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

function MarkdownPreview({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={key++} className="text-2xl font-bold mt-8 mb-4 first:mt-0 pb-2 border-b">
          {parseInline(line.slice(2))}
        </h1>
      );
      i++; continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold mt-6 mb-3 pb-1.5 border-b">
          {parseInline(line.slice(3))}
        </h2>
      );
      i++; continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-lg font-semibold mt-5 mb-2">
          {parseInline(line.slice(4))}
        </h3>
      );
      i++; continue;
    }

    if (line.startsWith("#### ")) {
      elements.push(
        <h4 key={key++} className="text-base font-semibold mt-4 mb-2">
          {parseInline(line.slice(5))}
        </h4>
      );
      i++; continue;
    }

    if (line.trim() === "---" || line.trim() === "***" || line.trim() === "___") {
      elements.push(<hr key={key++} className="my-6 border-border" />);
      i++; continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1.5 my-3 ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground leading-relaxed">
              {parseInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const listItems: { num: string; text: string }[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        const match = lines[i].match(/^(\d+)\.\s(.*)$/);
        if (match) listItems.push({ num: match[1], text: match[2] });
        i++;
      }
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-1.5 my-3 ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground leading-relaxed">
              {parseInline(item.text)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

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
            <code className="text-sm font-mono text-foreground">{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote key={key++} className="my-4 pl-4 border-l-4 border-indigo-500/50 italic text-muted-foreground">
          {quoteLines.map((q, idx) => (
            <p key={idx} className="mb-1 text-sm">{parseInline(q)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(<TableRenderer key={key++} lines={tableLines} />);
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    elements.push(
      <p key={key++} className="text-sm text-muted-foreground leading-relaxed my-2">
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
      l.split("|").slice(1, -1).map((cell) => cell.trim())
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
                <td key={cellIdx} className="px-3 py-2 text-muted-foreground text-sm">
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

export function MarkdownViewer({
  content,
  error,
  file,
  filePath,
  textColor,
  iconBg,
}: MarkdownViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border bg-card overflow-hidden">
      {/* Header - luôn hiển thị */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-6 py-4 border-b flex items-center justify-between hover:bg-muted/30 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <FileText className={cn("w-5 h-5", textColor)} />
          <div>
            <h2 className="font-bold text-base">Nội dung file</h2>
            <p className="text-xs text-muted-foreground font-mono">{filePath}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`/api/download/doc?file=${encodeURIComponent(file)}`}
            download
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors",
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-4 h-4" />
            Tải file
          </a>
          <div className={cn(
            "flex items-center gap-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors",
            isOpen ? "border-primary/30 bg-primary/5 text-primary" : "border-input bg-background text-muted-foreground"
          )}>
            {isOpen ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Đóng lại
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Xem nội dung
              </>
            )}
          </div>
        </div>
      </button>

      {/* Body - chỉ hiện khi bấm */}
      {isOpen && (
        <div className="p-6 bg-muted/20">
          {error || !content ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">File không tồn tại hoặc đang được cập nhật.</p>
            </div>
          ) : (
            <div className="rounded-xl border bg-card p-6 overflow-x-auto">
              <MarkdownPreview content={content} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
