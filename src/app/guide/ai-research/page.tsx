import Link from "next/link";
import type { Metadata } from "next";
import {
  BookOpen,
  Search,
  Sparkles,
  Brain,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ExternalLink,
  FileText,
  Wand2,
  Globe,
  MessageSquare,
  Lightbulb,
  Compass,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dùng AI để nghiên cứu & học tập",
  description: "Hướng dẫn chọn đúng AI tool cho đúng việc: NotebookLM cho tài liệu có sẵn, Perplexity cho thông tin thời gian thực, GPT cho tác vụ sáng tạo, và nhiều hơn nữa.",
};

const tools = [
  {
    icon: Brain,
    name: "NotebookLM",
    tagline: "Đọc — Hiểu — Giải mã tài liệu",
    color: "violet",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-600 dark:text-violet-400",
    badge: "Tài liệu có sẵn",
    badgeBg: "bg-violet-500",
    badgeText: "text-white",
    website: "https://notebooklm.google.com",
    summary:
      "Google's AI-first notebook. Upload tài liệu (PDF, web, video, audio) rồi chat trực tiếp với nội dung đó. Đặc biệt mạnh ở Audio Overview — tóm tắt tài liệu thành podcast 2 giọng. Miễn phí.",
    useCases: [
      { label: "Đọc & tóm tắt paper nghiên cứu", icon: FileText },
      { label: "Giải mã tài liệu kỹ thuật phức tạp", icon: Brain },
      { label: "Tạo Audio Overview để nghe thay vì đọc", icon: Sparkles },
      { label: "Phân tích tài liệu tiếng Anh dài", icon: Search },
      { label: "Học kiến thức mới từ sách, bài báo", icon: Lightbulb },
    ],
    pros: [
      "Trích xuất thông tin chính xác từ tài liệu gốc",
      "Audio Overview — tài liệu thành podcast 2 giọng",
      "Ghi chú inline, đánh dấu đoạn quan trọng",
      "Không hallucinate như GPT vì chỉ dùng nội dung được upload",
      "Hoàn toàn miễn phí",
    ],
    cons: [
      "Chỉ hoạt động với tài liệu được upload",
      "Không có kiến thức thời gian thực",
      "Không phù hợp cho tìm kiếm thông tin mới",
    ],
    when: "Khi bạn có tài liệu cụ thể cần nghiên cứu: paper, sách, báo cáo, slide, tài liệu kỹ thuật.",
    whenNot: "Khi bạn cần tìm thông tin mới, tin tức, hoặc kiến thức không có trong tài liệu.",
    workflow: "Upload tài liệu → Đọc Audio Overview → Chat hỏi chi tiết → Ghi chú & tóm tắt",
    prompt: "Trình bày ngắn gọn 5 điểm chính của tài liệu này, giải thích bằng ngôn ngữ dễ hiểu cho người không chuyên ngành.",
  },
  {
    icon: Compass,
    name: "Perplexity",
    tagline: "Tìm kiếm thông minh — Nguồn rõ ràng",
    color: "cyan",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-600 dark:text-cyan-400",
    badge: "Thông tin thời gian thực",
    badgeBg: "bg-cyan-500",
    badgeText: "text-white",
    website: "https://perplexity.ai",
    summary:
      "Search engine AI. Thay vì Google, bạn hỏi bằng ngôn ngữ tự nhiên và Perplexity tìm kiếm real-time kèm nguồn. Mỗi câu trả lời đều có citation. Độ chính xác cao, luôn cập nhật thông tin mới nhất.",
    useCases: [
      { label: "Tìm thông tin thời gian thực, tin tức", icon: Globe },
      { label: "So sánh nhiều nguồn cho cùng 1 topic", icon: Search },
      { label: "Research nhanh trước khi đọc chi tiết", icon: Brain },
      { label: "Tìm lỗi kỹ thuật mới nhất & cách fix", icon: Lightbulb },
      { label: "Cập nhật kiến thức về công nghệ mới", icon: Compass },
    ],
    pros: [
      "Trả lời kèm nguồn trích dẫn — kiểm chứng được",
      "Cập nhật thông tin real-time từ web",
      "So sánh nhiều nguồn cùng lúc",
      "Thread theo dõi: hỏi sâu liên tiếp",
      "Focus mode: Academic, Writing, Coding, Shopping",
    ],
    cons: [
      "Đôi khi vẫn hallucinate nguồn",
      "Không mạnh về sáng tạo nội dung",
      "Không phù hợp phân tích tài liệu dài",
    ],
    when: "Khi bạn cần thông tin chính xác, có nguồn, thời gian thực. Đặc biệt khi research trước khi đọc chi tiết.",
    whenNot: "Khi bạn có tài liệu cụ thể cần phân tích (dùng NotebookLM). Khi cần sáng tạo nội dung (dùng GPT).",
    workflow: "Hỏi câu hỏi tổng quát → Đọc câu trả lời + nguồn → Hỏi sâu hơn nếu cần → Ghi chú kết luận",
    prompt: "So sánh 3 cách tiếp cận khác nhau để giải quyết vấn đề [tên vấn đề]. Mỗi cách có ưu nhược điểm gì? Dẫn nguồn cụ thể.",
  },
  {
    icon: Wand2,
    name: "ChatGPT / Claude",
    tagline: "Sáng tạo — Viết — Giải thích phức tạp",
    color: "amber",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-600 dark:text-amber-400",
    badge: "Tác vụ sáng tạo",
    badgeBg: "bg-amber-500",
    badgeText: "text-white",
    website: "https://chatgpt.com",
    summary:
      "Mạnh về sáng tạo nội dung, viết lách, giải thích khái niệm phức tạp bằng ngôn ngữ đơn giản, và brainstorm ý tưởng. Dùng khi không có tài liệu cụ thể hoặc cần nội dung hoàn toàn mới.",
    useCases: [
      { label: "Viết bài blog, báo cáo, email", icon: Wand2 },
      { label: "Giải thích khái niệm phức tạp đơn giản", icon: Lightbulb },
      { label: "Brainstorm ý tưởng & giải pháp", icon: Sparkles },
      { label: "Dịch & viết lại nội dung theo phong cách", icon: MessageSquare },
      { label: "Học kiến thức mới bằng hội thoại", icon: BookOpen },
    ],
    pros: [
      "Sáng tạo nội dung đa dạng, tự nhiên",
      "Giải thích khái niệm bằng nhiều cách khác nhau",
      "Đa năng — làm được gần như mọi thứ",
      "Có thể xử lý tài liệu dài nếu dán vào",
      "Duy trì ngữ cảnh cuộc hội thoại dài",
    ],
    cons: [
      "Có thể hallucinate thông tin",
      "Kiến thức có giới hạn (knowledge cutoff)",
      "Không có nguồn trích dẫn",
    ],
    when: "Khi cần sáng tạo, viết, giải thích, brainstorm. Khi không có tài liệu cụ thể. Khi cần học kiến thức mới qua hội thoại.",
    whenNot: "Khi cần thông tin thời gian thực có nguồn (dùng Perplexity). Khi có tài liệu cụ thể cần phân tích chính xác (dùng NotebookLM).",
    workflow: "Xác định mục tiêu rõ ràng → Cung cấp ngữ cảnh đầy đủ → Yêu cầu cụ thể → Review & feedback → Yêu cầu chỉnh sửa",
    prompt: "Giải thích [khái niệm] bằng 3 cách khác nhau: (1) cho người mới bắt đầu, (2) cho người có nền tảng, (3) cho chuyên gia. Mỗi cách dùng ví dụ cụ thể.",
  },
  {
    icon: Search,
    name: "Nhiều hơn nữa",
    tagline: "DeepSeek · Grok · Copilot · Gemini",
    color: "green",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-600 dark:text-green-400",
    badge: "Bổ sung",
    badgeBg: "bg-green-500",
    badgeText: "text-white",
    website: "",
    summary:
      "Mỗi AI có thế mạnh riêng. Ngoài 3 tool chính, có thêm DeepSeek (giá rẻ, reasoning tốt), Grok (thông tin thời gian thực từ X), Copilot (tích hợp IDE), Gemini (Google生态系统). Biết cả 3 tool chính + biết thêm các tool bổ sung giúp bạn chọn đúng tool cho đúng việc.",
    useCases: [
      { label: "DeepSeek: Code & reasoning giá rẻ", icon: Search },
      { label: "Grok: Tin tức thời gian thực từ X", icon: Globe },
      { label: "Copilot: Code trong IDE (VS Code, Cursor)", icon: Wand2 },
      { label: "Gemini: Tích hợp Google Docs, Sheets", icon: Lightbulb },
      { label: "Phòng hờ khi tool chính quá tải", icon: Compass },
    ],
    pros: [
      "DeepSeek: chi phí thấp, mạnh về code & math",
      "Grok: thông tin real-time từ mạng xã hội",
      "Copilot: code trực tiếp trong IDE quen thuộc",
      "Gemini: kết nối với Google ecosystem",
      "Backup khi cần xử lý khối lượng lớn",
    ],
    cons: [
      "Mỗi tool có learning curve riêng",
      "Cần thời gian để tìm setup tối ưu",
      "Không cần thiết nếu 3 tool chính đã đủ",
    ],
    when: "Khi cần backup, khi tool chính không phù hợp với trường hợp cụ thể, khi muốn tối ưu chi phí.",
    whenNot: "Khi mới bắt đầu. Hãy thành thạo 3 tool chính trước.",
    workflow: "Thử nghiệm → So sánh kết quả → Ghi chú tool nào tốt cho việc gì → Bổ sung khi cần",
    prompt: "DeepSeek cho code & math. Grok cho social media insights. Copilot cho IDE. Gemini cho Google workspace.",
  },
];

const workflowSummary = {
  title: "Quy trình chọn tool",
  steps: [
    {
      icon: FileText,
      q: "Bạn có tài liệu cụ thể cần nghiên cứu?",
      tool: "NotebookLM",
      reason: "Upload tài liệu, chat trực tiếp với nội dung. Không hallucinate, chính xác tuyệt đối.",
      color: "violet",
    },
    {
      icon: Globe,
      q: "Bạn cần thông tin thời gian thực, có nguồn?",
      tool: "Perplexity",
      reason: "Tìm kiếm web real-time, mỗi câu trả lời có citation rõ ràng.",
      color: "cyan",
    },
    {
      icon: Sparkles,
      q: "Bạn cần sáng tạo nội dung, giải thích, brainstorm?",
      tool: "ChatGPT / Claude",
      reason: "Đa năng, sáng tạo, duy trì ngữ cảnh cuộc hội thoại dài.",
      color: "amber",
    },
    {
      icon: Compass,
      q: "Cần backup hoặc tool chuyên biệt cho trường hợp riêng?",
      tool: "DeepSeek / Grok / Copilot / Gemini",
      reason: "Mỗi tool có thế mạnh riêng. Bổ sung khi cần.",
      color: "green",
    },
  ],
};

export default function AIResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-background to-cyan-500/5" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium mb-5">
              <Brain className="w-4 h-4" />
              AI Research
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Dùng AI để{" "}
              <span className="bg-gradient-to-r from-violet-500 via-cyan-500 to-amber-500 bg-clip-text text-transparent">
                nghiên cứu & học tập
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Không phải AI nào cũng giỏi mọi thứ. Mỗi tool có thế mạnh riêng.
              Biết chọn đúng tool cho đúng việc giúp bạn học nhanh hơn, hiểu sâu hơn, và tốn ít thời gian hơn.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        {/* Quick Decision */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Compass className="w-5 h-5 text-primary" />
            {workflowSummary.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {workflowSummary.steps.map((step, i) => {
              const colorMap: Record<string, { bg: string; text: string; border: string; badge: string; badgeText: string }> = {
                violet: { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/30", badge: "bg-violet-500/20 text-violet-600 dark:text-violet-400", badgeText: "" },
                cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/30", badge: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400", badgeText: "" },
                amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30", badge: "bg-amber-500/20 text-amber-600 dark:text-amber-400", badgeText: "" },
                green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/30", badge: "bg-green-500/20 text-green-600 dark:text-green-400", badgeText: "" },
              };
              const c = colorMap[step.color];
              const Icon = step.icon;
              return (
                <div key={i} className={`flex items-start gap-3 p-4 rounded-xl border ${c.border} ${c.bg}`}>
                  <div className={`w-8 h-8 rounded-lg bg-white/50 dark:bg-black/20 flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 ${c.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${c.text}`}>Câu hỏi {i + 1}</div>
                    <p className="text-sm font-medium mb-1.5 leading-snug">{step.q}</p>
                    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold ${c.badge}`}>
                      <span>Dùng:</span>
                      <span>{step.tool}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1.5 leading-relaxed">{step.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tool Cards */}
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <section key={tool.name} id={tool.name.toLowerCase().replace(/[^a-z]/g, "")}>
              <div className={`rounded-2xl border ${tool.border} ${tool.bg} overflow-hidden`}>
                {/* Tool Header */}
                <div className="p-6 border-b border-border/50">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${tool.bg} border ${tool.border} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-7 h-7 ${tool.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${tool.badgeBg} ${tool.badgeText}`}>
                          {tool.badge}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-0.5">{tool.name}</h2>
                      <p className="text-sm text-muted-foreground italic">{tool.tagline}</p>
                    </div>
                    {tool.website && (
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 h-9 px-4 rounded-xl ${tool.bg} border ${tool.border} font-medium text-xs ${tool.text} hover:opacity-80 transition-all shrink-0`}
                      >
                        Truy cập
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{tool.summary}</p>
                </div>

                {/* Body */}
                <div className="p-6 grid sm:grid-cols-2 gap-6">
                  {/* Use cases */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Nên dùng khi</h3>
                    <div className="space-y-2">
                      {tool.useCases.map((uc) => {
                        const UcIcon = uc.icon;
                        return (
                          <div key={uc.label} className="flex items-start gap-2.5 text-sm">
                            <UcIcon className={`w-4 h-4 ${tool.text} flex-shrink-0 mt-0.5`} />
                            <span className="text-muted-foreground leading-relaxed">{uc.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">Ưu điểm</span>
                      </div>
                      <div className="space-y-1.5">
                        {tool.pros.map((p) => (
                          <div key={p} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <XCircle className="w-3.5 h-3.5 text-red-500" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">Hạn chế</span>
                      </div>
                      <div className="space-y-1.5">
                        {tool.cons.map((c) => (
                          <div key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <XCircle className="w-3 h-3 text-red-400 flex-shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* When / When not + Workflow */}
                <div className="px-6 pb-6 grid sm:grid-cols-3 gap-4">
                  <div className={`p-3 rounded-xl border ${tool.border} bg-card`}>
                    <div className={`text-[10px] font-bold uppercase tracking-wider ${tool.text} mb-1`}>Nên dùng</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tool.when}</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${tool.border} bg-card`}>
                    <div className={`text-[10px] font-bold uppercase tracking-wider ${tool.text} mb-1`}>Không nên dùng</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tool.whenNot}</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${tool.border} bg-card`}>
                    <div className={`text-[10px] font-bold uppercase tracking-wider ${tool.text} mb-1`}>Workflow</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tool.workflow}</p>
                  </div>
                </div>

                {/* Example prompt */}
                {tool.prompt && (
                  <div className="px-6 pb-6">
                    <div className={`rounded-xl border ${tool.border} p-4 bg-card`}>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Prompt mẫu</div>
                      <div className={`rounded-lg border ${tool.border} bg-muted/30 p-3`}>
                        <p className="text-xs font-mono text-muted-foreground leading-relaxed">{tool.prompt}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {/* Key Insight */}
        <section>
          <div className="rounded-2xl border bg-gradient-to-br from-violet-500/5 via-cyan-500/5 to-amber-500/5 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-2">Nguyên tắc cốt lõi</h3>
                <div className="space-y-3">
                  {[
                    { t: "Tool phù hợp hơn model mạnh nhất", d: "Claude Opus giỏi nhưng nếu bạn chỉ cần tìm nguồn thời gian thực, Perplexity nhanh và chính xác hơn." },
                    { t: "Cung cấp ngữ cảnh cho dù tool nào", d: "Dùng NotebookLM hay Perplexity, ngữ cảnh đầy đủ luôn giúp câu trả lời tốt hơn." },
                    { t: "Không có tool nào hoàn hảo", d: "Biết giới hạn của mỗi tool để tránh dùng sai: GPT không có nguồn, NotebookLM không có real-time, Perplexity không sáng tạo." },
                    { t: "Bắt đầu với 3 tool chính", d: "NotebookLM, Perplexity, GPT/Claude — đủ cho 90% nhu cầu. Bổ sung thêm khi thực sự cần." },
                  ].map((item) => (
                    <div key={item.t} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold">{item.t}</span>
                        <span className="text-sm text-muted-foreground"> — {item.d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-primary" />
            Liên quan
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Quy tắc viết Prompt", href: "/guide/prompt", desc: "Cách viết prompt hiệu quả cho mọi AI" },
              { label: "Phân tích yêu cầu", href: "/guide/analysis", desc: "Xác định đúng vấn đề trước khi hỏi AI" },
              { label: "Lưu ý & Bẫy", href: "/guide/traps", desc: "Tránh những sai lầm phổ biến khi dùng AI" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group">
                <div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
