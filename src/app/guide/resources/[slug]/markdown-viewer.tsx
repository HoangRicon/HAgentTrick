"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Download, FileText, X } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

interface MarkdownViewerProps {
  content: string;
  error: boolean;
  file: string;
  filePath: string;
  textColor: string;
  iconBg: string;
}

function HighlightedCode({ code, language }: { code: string; language?: string }) {
  return (
    <div className="my-4 rounded-lg overflow-hidden border border-border bg-[#0d1117]">
      {language && (
        <div className="px-4 py-2 bg-[#161b22] border-b border-border text-xs font-mono text-gray-400 uppercase tracking-wider">
          {language}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
        <code className="text-gray-300">{code}</code>
      </pre>
    </div>
  );
}

function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose-custom">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-border scroll-mt-20 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold mt-8 mb-4 pb-1.5 border-b border-border scroll-mt-20">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold mt-6 mb-3 scroll-mt-20">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-semibold mt-4 mb-2 scroll-mt-20">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-foreground my-3 leading-relaxed text-base">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside my-3 space-y-1.5 marker:text-primary">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside my-3 space-y-1.5 marker:text-primary marker:font-semibold">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-foreground leading-relaxed">{children}</li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary underline-offset-4 hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary/40 pl-4 italic text-muted-foreground my-4">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-8 border-border" />,
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto rounded-lg border border-border">
              <table className="w-full border-collapse">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted/30">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="text-left font-semibold px-4 py-2.5 text-sm text-foreground border-b border-border">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2.5 text-sm text-muted-foreground border-b border-border last:border-0">
              {children}
            </td>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
              {children}
            </tr>
          ),
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !match && !className;

            if (isInline) {
              return (
                <code
                  className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono text-primary border"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <code className={cn("font-mono text-sm", className)} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-4 rounded-lg overflow-hidden border border-border bg-[#0d1117]">
              {children}
            </pre>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
        }}
      >
        {content}
      </ReactMarkdown>
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-dashed font-medium text-sm transition-colors",
            "border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"
          )}
        >
          <FileText className="w-5 h-5" />
          Xem &amp; tải file .md
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <Dialog.Content className="relative w-full sm:w-auto sm:max-w-4xl max-h-[90vh] sm:max-h-[85vh] rounded-t-2xl sm:rounded-2xl border bg-card shadow-2xl flex flex-col overflow-hidden">
            <div className="sm:hidden w-12 h-1.5 bg-border rounded-full mx-auto mt-3 mb-1 flex-shrink-0" />

          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 border-b flex-shrink-0">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div
                  className={cn(
                    "w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0",
                    iconBg
                  )}
                >
                  <FileText
                    className={cn("w-4 h-4 sm:w-5 sm:h-5", textColor)}
                  />
                </div>
                <div className="min-w-0">
                  <Dialog.Title className="font-bold text-sm sm:text-base leading-tight">
                    Nội dung file
                  </Dialog.Title>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-mono truncate max-w-[180px] sm:max-w-[300px]">
                    {filePath}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <a
                  href={`/api/download/doc?file=${encodeURIComponent(file)}`}
                  download
                  className={cn(
                    "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors",
                    "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                  onClick={() => setIsModalOpen(false)}
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Tải file</span>
                </a>
                <Dialog.Close asChild>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </Dialog.Close>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              {error || !content ? (
                <div className="text-center py-8 sm:py-12">
                  <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
                  <p className="text-muted-foreground text-sm">
                    File không tồn tại hoặc đang được cập nhật.
                  </p>
                </div>
              ) : (
                <div className="rounded-xl border bg-card p-4 sm:p-6 overflow-x-auto">
                  <MarkdownContent content={content} />
                </div>
              )}
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
