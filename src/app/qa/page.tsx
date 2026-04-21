"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  MessageSquare,
  ChevronDown,
  HelpCircle,
  Search,
  Cpu,
  Package,
  Layers,
  GitBranch,
  Code2,
  Lightbulb,
  Shield,
  Rocket,
  ArrowRight,
  Sparkles,
  BookOpen,
  Zap,
  Send,
} from "lucide-react";

const phaseColors: Record<string, { bg: string; text: string; border: string; badge: string; badgeText: string }> = {
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/30", badge: "bg-cyan-500", badgeText: "text-white" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30", badge: "bg-amber-500", badgeText: "text-white" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-500/30", badge: "bg-indigo-500", badgeText: "text-white" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30", badge: "bg-blue-500", badgeText: "text-white" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/30", badge: "bg-green-500", badgeText: "text-white" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/30", badge: "bg-purple-500", badgeText: "text-white" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/30", badge: "bg-orange-500", badgeText: "text-white" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/30", badge: "bg-pink-500", badgeText: "text-white" },
};

const allQAData = [
  {
    category: "Quy trình",
    color: "orange",
    icon: Rocket,
    questions: [
      {
        q: "Tại sao tôi không thấy bạn nhắc tới Database trong quy trình?",
        a: `Tôi thường bỏ qua phần phân tích Database kỹ lưỡng, vì khi đã nắm rõ yêu cầu chức năng, điều tôi cần biết chỉ là: dùng loại Database nào cho phù hợp — SQL hay NoSQL, PostgreSQL hay MongoDB, quy mô thế nào. Thế thôi.

Cấu trúc bên trong tôi sẽ xây dựng theo từng module. Tức là cả Frontend, Backend, Database và test của module đó được build cho tới khi oke, rồi mới đẩy lên git. Tôi không cần làm Database tổng thể trước — vì đằng nào tôi cũng sẽ phát hiện field cần thêm, bảng cần tách, hoặc quan hệ cần điều chỉnh khi code thực tế.

Nói thẳng: thiết kế Database tổng thể từ đầu giống như vẽ bản đồ đầy đủ trước khi khám phá vùng đất mới. Nghe hợp lý, nhưng thực tế bạn sẽ sửa lại rất nhiều khi bắt đầu đặt chân vào từng module cụ thể.`,
        color: "indigo",
      },
      {
        q: "Quy trình này có áp dụng được cho dự án có sẵn không?",
        a: `Hoàn toàn có thể. Với dự án có sẵn, bạn bắt đầu từ bước Resources — kiểm tra xem project đã có convention chưa, structure ra sao, đã có UI kit chưa. Sau đó nhảy thẳng vào Build từ module nhỏ nhất.

Điều khác biệt duy nhất: bạn cần dành thời gian để "giới thiệu" dự án cho AI trước — cho nó đọc structure, convention, và những gì đã có. Đừng nhảy thẳng vào yêu cầu code, vì AI không biết context dự án của bạn.`,
        color: "green",
      },
      {
        q: "Sự khác biệt giữa foundation, core flow và support flow là gì?",
        a: `Đây là cách tôi phân loại chức năng trong dự án:

• Foundation: những thứ nền tảng, ít thay đổi — layout, theme, auth cơ bản, type definitions, constants. Đây là thứ đầu tiên cần làm vì các phần khác phụ thuộc vào nó.

• Core Flow: luồng nghiệp vụ chính — đăng nhập, đặt hàng, thanh toán, CRUD chính. Đây là lý do dự án tồn tại.

• Support Flow: những thứ hỗ trợ core flow — notification, logging, error handling, analytics, settings. Không quan trọng bằng core nhưng cần thiết.

Thứ tự ưu tiên: Foundation → Core Flow → Support Flow.`,
        color: "blue",
      },
      {
        q: "Tôi có nên làm theo đúng thứ tự 6 bước không?",
        a: `Có, đặc biệt khi bạn mới bắt đầu. Mỗi bước tạo nền tảng cho bước tiếp theo. Bỏ qua bước nào sẽ phải trả giá ở các bước sau — thường là phải quay lại sửa.

Khi đã quen rồi, bạn có thể linh hoạt hơn. Ví dụ: với dự án nhỏ, bạn có thể gộp Power + Plan lại với nhau. Với dự án có sẵn, bạn bỏ qua Power và nhảy thẳng vào Resources rồi Build. Nhưng nguyên tắc cốt lõi vẫn giữ nguyên: hiểu rõ → chuẩn bị đầy đủ → build nhỏ → review → ship.`,
        color: "orange",
      },
    ],
  },
  {
    category: "Model & AI",
    color: "cyan",
    icon: Cpu,
    questions: [
      {
        q: "Làm sao để biết nên dùng model nào cho dự án của tôi?",
        a: `Cách đơn giản nhất: bắt đầu với model mạnh nhất bạn có thể chi trả, rồi hạ xuống nếu thấy không cần thiết.

Model mạnh như Claude Opus 4.7 hoặc GPT-4o xử lý được nhiều thứ phức tạp trong một lần giao việc — phân tích kiến trúc, sinh code nhiều files, debug sâu. Model nhẹ hơn như GPT-4o-mini hoặc Haiku phù hợp với task đơn giản, lặp đi lặp lại: viết test, refactor nhỏ, dịch code.

Nguyên tắc tôi dùng: giao task phù hợp với năng lực model — mạnh thì giao nhiều, yếu thì chia nhỏ.`,
        color: "cyan",
      },
      {
        q: "Khi nào nên dùng Claude Opus thay vì GPT-4o?",
        a: `Opus mạnh hơn trong những trường hợp:
- Phân tích codebase lớn, nhiều files quan hệ phức tạp
- Xử lý công việc cần reasoning sâu, nhiều bước
- Khi bạn cần AI tự đưa ra quyết định thiết kế thay vì chỉ code theo chỉ dẫn
- Debug những lỗi khó, cần hiểu toàn bộ flow

GPT-4o tốt hơn khi:
- Cần tốc độ nhanh, chi phí thấp hơn
- Viết code theo spec đã rõ ràng
- Các task đơn giản, lặp đi lặp lại

Nói chung: dùng Opus khi cần suy nghĩ phức tạp, dùng GPT-4o khi cần thực thi nhanh.`,
        color: "cyan",
      },
      {
        q: "Context window lớn có thực sự quan trọng không?",
        a: `Rất quan trọng. Context window càng lớn, AI càng nhớ được nhiều thông tin về dự án của bạn cùng lúc. Thay vì phải nhắc lại context qua từng prompt, bạn có thể đưa toàn bộ spec vào một lần.

Với dự án lớn, context window nhỏ buộc bạn phải chia nhỏ prompt và nhắc lại context liên tục — vừa tốn token, vừa dễ sai. Model có context window 200K tokens như Opus 4.7 cho phép bạn đưa cả codebase vào một prompt dài nếu cần.`,
        color: "indigo",
      },
    ],
  },
  {
    category: "Build & Code",
    color: "blue",
    icon: Code2,
    questions: [
      {
        q: "Tôi nên chia nhỏ module như thế nào cho vừa sức AI?",
        a: `Mỗi module nên có scope rõ ràng và hoàn thành trong khoảng 1-3 files. Với model mạnh, có thể mở rộng lên 3-5 files nếu chúng liên quan chặt chẽ.

Dấu hiệu module đã quá lớn: AI bắt đầu "hallucinate" — tên function không khớp, import sai, hoặc code không match yêu cầu. Khi thấy dấu hiệu này, chia nhỏ ngay.

Tốt hơn nhiều so với một module lớn thất bại: chia nhỏ thành nhiều module vừa phải, mỗi cái đều chạy đúng từ đầu.`,
        color: "blue",
      },
      {
        q: "Làm sao để AI không hallucinate khi sinh code?",
        a: `Hallucination xảy ra khi AI không có đủ context hoặc scope quá rộng. Cách phòng tránh:

1. Cung cấp context đầy đủ: đưa vào prompt các file liên quan, conventions, và những gì đã có sẵn.

2. Scope chặt chẽ: mỗi prompt chỉ yêu cầu một chức năng cụ thể. Không nói "code cái dashboard đó" mà nói "thêm component Chart vào Dashboard, dùng dữ liệu từ /api/stats".

3. Verify ngay: sau khi AI sinh code, check ngay lập tức — tên function có đúng không, import có tồn tại không, logic có match requirement không.

4. Dùng model mạnh hơn: model yếu hơn hallucinate nhiều hơn với cùng một prompt.`,
        color: "blue",
      },
      {
        q: "Review code bằng cách nào cho hiệu quả?",
        a: `Tôi review theo checklist 5 phút:

1. UI/UX: giao diện có đúng spec không, responsive chưa, có break layout không
2. Logic: function xử lý đúng flow chưa, có edge case bị bỏ qua không
3. Validation: input có được validate không, error handling đủ chưa
4. Auth/Permission: ai được phép dùng chức năng này, có check quyền không
5. Type-safe: TypeScript có báo lỗi không, type đủ strict chưa

Nếu thấy lỗi, sửa ngay — không dồn lại. Dồn lại sẽ quên và tốn thời gian hơn nhiều.`,
        color: "green",
      },
      {
        q: "Tôi nên viết test trước hay sau khi code xong?",
        a: `Với static site như website cá nhân hoặc landing page, tôi thường bỏ qua test vì overhead không đáng giá. Nhưng với dự án có logic nghiệp vụ phức tạp, test là bắt buộc.

Cách tôi làm: viết test trước khi code cho những module quan trọng (core flow), viết test sau cho những module đơn giản (support flow).

Test cần cover:
- Happy path: flow chính hoạt động
- Edge cases: input rỗng, giá trị max, giá trị bất thường
- Error cases: khi có lỗi thì hệ thống xử lý ra sao

Đừng viết test cho mọi thứ — chỉ test những thứ quan trọng. Test coverage 80% không quan trọng bằng test đúng những case người dùng thực sự gặp.`,
        color: "purple",
      },
    ],
  },
  {
    category: "Prompt & Giao tiếp",
    color: "amber",
    icon: Lightbulb,
    questions: [
      {
        q: "Làm sao viết prompt để AI hiểu đúng ý tôi?",
        a: `Prompt tốt có 4 thành phần:

1. Context: cho AI biết bối cảnh — dự án là gì, đang ở đâu trong quy trình, đã có gì rồi
2. Task: yêu cầu cụ thể và rõ ràng — làm gì, không làm gì, output ra sao
3. Constraint: những ràng buộc — dùng công nghệ nào, tuân thủ convention nào, giới hạn nào
4. Format: định dạng output — trả lời bằng gì, có cần explanation không, có cần checklist không

Ví dụ xấu: "Code cho tôi cái trang login"
Ví dụ tốt: "Thêm trang login vào project Next.js 14 đã có sẵn. Dùng shadcn/ui Input + Button. Không thêm dependency mới. Sau khi login thành công redirect về /dashboard. Format: code + brief explanation."

Prompt càng rõ, output càng đúng.`,
        color: "amber",
      },
      {
        q: "Tôi nên giao việc cho AI bằng tiếng Việt hay tiếng Anh?",
        a: `Dùng tiếng Anh nếu có thể. Lý do:

1. Mô hình AI được train chủ yếu bằng tiếng Anh, nên hiểu prompt tiếng Anh tốt hơn, nuance chính xác hơn.

2. Nhiều documentation, Stack Overflow, và code examples bằng tiếng Anh. AI có thể reference chúng tốt hơn.

3. Kết quả code thường tốt hơn khi prompt bằng tiếng Anh.

Tuy nhiên, nếu bạn không thành thạo tiếng Anh hoặc cần giải thích nghiệp vụ phức tạp bằng tiếng Việt, cứ dùng tiếng Việt. Đôi khi context nghiệp vụ bằng tiếng Việt quan trọng hơn ngôn ngữ prompt. Quan trọng nhất là rõ ràng, không phải ngôn ngữ.`,
        color: "amber",
      },
      {
        q: "Khi AI trả lời sai, tôi nên làm gì?",
        a: `Bước 1: Xác định lỗi sai ở đâu — prompt không rõ ràng, context thiếu, hay AI hiểu nhầm?

Bước 2: Sửa prompt. Thay vì nói "sai rồi", hãy chỉ ra cụ thể sai ở đâu và mong đợi gì. Ví dụ:
- Xấu: "Sai rồi, làm lại"
- Tốt: "File này dùng TypeScript nhưng bạn viết bằng JavaScript. Vui lòng viết lại với type definitions đầy đủ cho User, Order, và Product."

Bước 3: Nếu AI cứ sai sau 2-3 lần sửa, có thể model không đủ năng lực cho task đó. Thử dùng model mạnh hơn hoặc chia nhỏ task hơn.

Bước 4: Ghi lại prompt đã dùng và kết quả để tránh lặp lại.`,
        color: "pink",
      },
    ],
  },
  {
    category: "Troubleshooting",
    color: "pink",
    icon: Shield,
    questions: [
      {
        q: "AI tạo ra code bị lỗi liên tục, tôi nên làm gì?",
        a: `Thường có 3 nguyên nhân chính:

1. Prompt không rõ ràng: AI đang đoán ý bạn. Hãy viết lại prompt cụ thể hơn, kèm theo ví dụ nếu có thể.

2. Context dự án thiếu: AI không biết conventions, structure, hoặc dependencies đã có. Đưa thêm context vào prompt.

3. Scope quá rộng: yêu cầu quá nhiều thứ trong một lần. Chia nhỏ ra: thay vì "code toàn bộ trang dashboard", hãy "thêm header navigation vào dashboard page".

Nếu đã thử hết mà vẫn lỗi, có thể vấn đề nằm ở logic của bạn chứ không phải AI. Hãy kiểm tra lại requirement gốc.`,
        color: "pink",
      },
      {
        q: "Dự án của tôi quá lớn, AI không xử lý nổi trong một lần?",
        a: `Với dự án lớn, chiến lược của tôi là chia để trị:

1. Phân tích kiến trúc tổng thể trước (1 prompt lớn với model mạnh) — xác định modules, dependencies, tech stack.

2. Build từng module một, theo thứ tự phụ thuộc — module không phụ thuộc vào ai trước, module phụ thuộc sau.

3. Mỗi module nhỏ và độc lập: có thể test riêng, deploy riêng nếu cần.

4. Dùng model mạnh (Opus 4.7) cho các module phức tạp, model nhẹ cho các module đơn giản.

5. Duy trì spec file ghi lại quyết định thiết kế — giúp AI hiểu context khi chuyển sang module mới.`,
        color: "purple",
      },
    ],
  },
];

const quickAnswers: Record<string, string> = {
  "database": "Tôi bỏ qua phân tích DB kỹ lưỡng vì cấu trúc bên trong sẽ tự điều chỉnh khi code thực tế. Chỉ cần xác định loại DB phù hợp (SQL/NoSQL) là đủ.",
  "model": "Chọn model mạnh nhất bạn chi trả được, rồi hạ xuống nếu thấy dư. Mạnh cho reasoning phức tạp, nhẹ cho task lặp.",
  "module": "1-3 files mỗi module, 3-5 nếu model mạnh và liên quan chặt. Quá lớn → chia nhỏ ngay.",
  "prompt": "Prompt tốt = Context + Task + Constraint + Format. Càng rõ, output càng đúng.",
  "review": "Check 5 thứ: UI, Logic, Validation, Auth, Type-safe. Sửa ngay, không dồn.",
};

export default function QAPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Tất cả");
  const [chatQuery, setChatQuery] = useState("");
  const [chatAnswer, setChatAnswer] = useState<string | null>(null);
  const [chatLoading, setChatLoading] = useState(false);

  const categories = ["Tất cả", ...allQAData.map((c) => c.category)];

  const filteredQA = useMemo(() => {
    let data = allQAData;

    if (activeCategory !== "Tất cả") {
      data = data.filter((c) => c.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      data = data
        .map((cat) => ({
          ...cat,
          questions: cat.questions.filter(
            (item) =>
              item.q.toLowerCase().includes(q) ||
              item.a.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.questions.length > 0);
    }

    return data;
  }, [searchQuery, activeCategory]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatQuery.trim()) return;

    setChatLoading(true);
    setChatAnswer(null);

    setTimeout(() => {
      const q = chatQuery.toLowerCase();

      if (q.includes("database") || q.includes("db")) {
        setChatAnswer(quickAnswers["database"]);
      } else if (q.includes("model") || q.includes("ai") || q.includes("claude") || q.includes("gpt")) {
        setChatAnswer(quickAnswers["model"]);
      } else if (q.includes("module") || q.includes("build") || q.includes("code") || q.includes("chia")) {
        setChatAnswer(quickAnswers["module"]);
      } else if (q.includes("prompt") || q.includes("viết")) {
        setChatAnswer(quickAnswers["prompt"]);
      } else if (q.includes("review") || q.includes("check") || q.includes("test")) {
        setChatAnswer(quickAnswers["review"]);
      } else {
        setChatAnswer(`Tôi chưa có câu trả lời sẵn cho câu hỏi này. Bạn có thể hỏi trực tiếp qua trang Liên hệ, hoặc thử tìm kiếm với từ khóa cụ thể hơn như: "database", "model", "module", "prompt", "review".`);
      }

      setChatLoading(false);
    }, 800);
  };

  const totalQuestions = allQAData.reduce((acc, cat) => acc + cat.questions.length, 0);

  return (
    <div className="min-h-screen">
      <div className="max-w-[60%] sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            Hỏi & Đáp
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Câu hỏi thường gặp về{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Agent
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tổng hợp {totalQuestions} câu hỏi thường gặp về quy trình làm việc với AI Agent.
            Tìm kiếm nhanh hoặc hỏi trực tiếp AI.
          </p>
        </div>

        {/* Quick Ask AI */}
        <div className="mb-10 p-6 rounded-2xl border bg-gradient-to-br from-primary/5 via-background to-purple-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-bold text-base">Hỏi nhanh AI</h2>
                <p className="text-xs text-muted-foreground">Đặt câu hỏi ngắn gọn, nhận câu trả lời tức thì</p>
              </div>
            </div>
            <form onSubmit={handleChatSubmit} className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={chatQuery}
                  onChange={(e) => setChatQuery(e.target.value)}
                  placeholder="VD: Tại sao bỏ qua Database? Chọn model nào?..."
                  className="w-full h-11 pl-10 pr-4 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                disabled={chatLoading || !chatQuery.trim()}
                className="h-11 px-5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                {chatLoading ? (
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                Hỏi
              </button>
            </form>
            {chatAnswer && (
              <div className="mt-4 p-4 rounded-xl border bg-background/80 backdrop-blur">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">Trả lời</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{chatAnswer}</p>
              </div>
            )}
          </div>
        </div>

        {/* Ask Question CTA */}
        <div className="mb-8 p-5 rounded-xl border border-dashed border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 relative overflow-hidden">
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm mb-0.5">Không tìm thấy câu hỏi bạn cần?</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Gửi câu hỏi trực tiếp, tôi sẽ trả lời trong thời gian sớm nhất.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex-shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              Đặt câu hỏi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mb-6 space-y-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm câu hỏi..."
              className="w-full h-11 pl-10 pr-4 rounded-xl border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const catData = allQAData.find((c) => c.category === cat);
              const colorKey = catData?.color ?? "primary";
              const isActive = activeCategory === cat;

              if (cat === "Tất cả") {
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    {cat}
                    <span className="text-[10px] opacity-70">{totalQuestions}</span>
                  </button>
                );
              }

              const pc = phaseColors[colorKey];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? `${pc.bg} ${pc.text} border ${pc.border}`
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                  <span className="text-[10px] opacity-60">({catData?.questions.length})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Q&A Cards */}
        <div className="space-y-8">
          {filteredQA.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-bold mb-2">Không tìm thấy câu hỏi</h3>
              <p className="text-sm text-muted-foreground">Thử từ khóa khác hoặc hỏi trực tiếp qua trang Liên hệ</p>
            </div>
          ) : (
            filteredQA.map((category) => {
              const pc = phaseColors[category.color];
              const CatIcon = category.icon;
              return (
                <div key={category.category} className="space-y-3">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-1">
                    <div className={`w-8 h-8 rounded-lg ${pc.bg} border ${pc.border} flex items-center justify-center`}>
                      <CatIcon className={`w-4 h-4 ${pc.text}`} />
                    </div>
                    <div>
                      <h2 className="font-bold text-base">{category.category}</h2>
                      <span className="text-xs text-muted-foreground">{category.questions.length} câu hỏi</span>
                    </div>
                  </div>

                  {/* Questions */}
                  {category.questions.map((item, i) => {
                    const qc = phaseColors[item.color];
                    return (
                      <details
                        key={i}
                        className="group rounded-2xl border bg-card overflow-hidden transition-all duration-200 open:shadow-lg open:shadow-black/5 open:border-primary/20"
                      >
                        <summary className="flex items-start gap-4 p-5 cursor-pointer select-none list-none hover:bg-muted/20 transition-colors">
                          <div className={`w-10 h-10 rounded-xl ${qc.bg} border ${qc.border} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <HelpCircle className={`w-5 h-5 ${qc.text}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest ${qc.badge} ${qc.badgeText}`}>
                                Câu hỏi
                              </span>
                            </div>
                            <h3 className="text-sm font-bold leading-snug pr-6">{item.q}</h3>
                          </div>
                          <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-3 transition-transform duration-200 group-open:rotate-180" />
                        </summary>

                        <div className="px-5 pb-5 pl-5 sm:pl-[4.5rem]">
                          <div className="relative">
                            <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b ${qc.bg.replace('/10', '')} opacity-60`} />
                            <div className="pl-4">
                              <div className="flex items-center gap-2 mb-3">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest ${qc.bg} ${qc.text} border ${qc.border}`}>
                                  Trả lời
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{item.a}</p>
                            </div>
                          </div>
                        </div>
                      </details>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 rounded-2xl border bg-gradient-to-br from-orange-500/5 via-background to-purple-500/5 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-2">Bạn vẫn còn thắc mắc?</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5 leading-relaxed">
              Nếu bạn có câu hỏi cụ thể về dự án của mình hoặc muốn trao đổi chi tiết hơn,
              hãy liên hệ trực tiếp với tôi.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <MessageSquare className="w-4 h-4" />
              Liên hệ ngay
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
