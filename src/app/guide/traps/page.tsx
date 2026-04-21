import Link from "next/link";
import type { Metadata } from "next";
import {
  AlertTriangle,
  ChevronRight,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  Shield,
  BrainCircuit,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Những lưu ý bắt buộc",
  description: "Ngữ cảnh quan trọng hơn prompt. Phân tích yêu cầu trước khi code. Đánh giá sức mạnh AI trước khi giao việc. Review cẩn thận mọi thứ AI sinh ra.",
};

const coreRules = [
  {
    icon: BookOpen,
    color: "blue",
    num: "01",
    title: "Ngữ cảnh quan trọng hơn prompt",
    summary: "Đây là lưu ý quan trọng nhất và là nền tảng cho mọi thứ khác.",
    sections: [
      {
        subtitle: "Tại sao ngữ cảnh quan trọng hơn?",
        content:
          "Một prompt tuyệt vời nhưng thiếu ngữ cảnh sẽ cho kết quả tệ hơn một prompt đơn giản nhưng có đầy đủ ngữ cảnh. AI Agent hoạt động dựa trên ngữ cảnh mà nó đã đọc được trong session. Prompt chỉ là cách bạn kích hoạt ngữ cảnh đó thành hành động.",
      },
      {
        subtitle: "Ngữ cảnh đầy đủ giúp AI hiểu được:",
        items: [
          "Cấu trúc dự án hiện tại (thư mục nào chứa gì)",
          "Quy ước đặt tên và style code của dự án",
          "Framework và thư viện đang sử dụng",
          "Các file quan trọng cần tuân thủ (quy tắc code, quy tắc prompt...)",
          "Những gì đã làm và chưa làm",
          "Ràng buộc nghiệp vụ và kỹ thuật",
        ],
      },
      {
        subtitle: "Khi ngữ cảnh đủ, AI có thể:",
        items: [
          "Sinh code đúng kiến trúc ngay từ lần đầu",
          "Hiểu boundary giữa các layer (route, UI, service, data)",
          "Tuân thủ quy ước đặt tên nhất quán",
          "Biết khi nào cần tạo file mới vs sửa file có sẵn",
          "Tránh xung đột với code hiện tại",
        ],
      },
    ],
    keyTakeaway:
      "Cung cấp ngữ cảnh đầy đủ cho AI Agent trước khi đưa ra bất kỳ yêu cầu nào. Đây là bước bắt buộc, không phải tùy chọn.",
  },
  {
    icon: BrainCircuit,
    color: "cyan",
    num: "02",
    title: "Phải đánh giá sức mạnh AI trước khi giao việc",
    summary:
      "AI mạnh thì giao nhiều, AI yếu thì giao ít. Biết giới hạn của model mình dùng để phân bổ công việc phù hợp.",
    sections: [
      {
        subtitle: "Tại sao phải đánh giá sức mạnh AI?",
        content:
          "Mỗi AI model có năng lực khác nhau. Model mạnh (Claude Opus, GPT-4, Gemini Ultra) có thể xử lý nhiều bước phức tạp trong một lần. Model yếu hơn (GPT-3.5, Gemini Flash) cần chia nhỏ hơn, review kỹ hơn. Giao sai mức độ → hoặc là AI quên context, hoặc là lãng phí tiền cho model đắt mà chỉ làm việc đơn giản.",
      },
      {
        subtitle: "Phân loại task theo độ khó:",
        items: [
          "Task đơn giản: sửa lỗi typo, thêm comment, format code, viết unit test đơn giản — AI nào cũng làm được.",
          "Task trung bình: viết API route, tạo component UI, refactor 1-2 files, debug logic — GPT-3.5 trở lên.",
          "Task phức tạp: thiết kế kiến trúc, xây dựng feature nhiều layer, tối ưu performance — cần model mạnh.",
          "Task cực kỳ phức tạp: xây dựng hệ thống lớn, migration phức tạp, security audit — cần model mạnh nhất + human-in-the-loop liên tục.",
        ],
      },
      {
        subtitle: "Nguyên tắc giao việc theo sức mạnh AI:",
        items: [
          "AI mạnh: giao nhiều bước một lần, trust the process nhưng vẫn verify kỹ.",
          "AI trung bình: chia task nhỏ vừa đủ, checkpoint sau mỗi 2-3 task.",
          "AI yếu: mỗi task chỉ 1-2 files, review sát sao từng dòng.",
          "Luôn giữ context window trong tầm kiểm soát — nếu conversation quá dài, AI bắt đầu quên.",
          "Model tốt nhất cho project: Claude Opus 4 / GPT-4o cho architecture, GPT-4o-mini / Claude Sonnet cho implementation.",
        ],
      },
      {
        subtitle: "Nhận biết khi nào AI đang gặp giới hạn:",
        items: [
          "Code bắt đầu inconsistent (đặt tên không nhất quán, style thay đổi giữa chừng)",
          "AI hỏi lại những thứ đã nói ở đầu session",
          "Logic bắt đầu tự mâu thuẫn giữa các file",
          "AI bỏ qua những constraint đã đặt ra ở prompt đầu tiên",
          "Khi gặp những dấu hiệu này → commit/checkpoint, bắt đầu session mới với context summary",
        ],
      },
    ],
    keyTakeaway:
      "Biết sức mạnh AI rồi mới giao việc. Model tốt giao nhiều hơn, model yếu chia nhỏ hơn. Không giao quá sức AI — kết quả sẽ là thảm họa.",
  },
  {
    icon: Target,
    color: "orange",
    num: "03",
    title: "Phải phân tích trước khi code & kiểm soát scope chặt chẽ",
    summary:
      "Nhảy thẳng vào code mà không có spec là cách nhanh nhất để build sai hệ thống. AI dễ dàng thêm tính năng không được yêu cầu — bạn phải kiểm soát.",
    sections: [
      {
        subtitle: "Tại sao phải phân tích trước?",
        content:
          "Khi không phân tích, AI sẽ tự đoán. Và đoán thì thường sai. AI không biết bạn muốn gì nếu bạn không nói rõ. Spec là cách bạn truyền tải chính xác nhất ý định của mình.",
      },
      {
        subtitle: "File phân tích phải có:",
        items: [
          "Actor: ai dùng hệ thống, quyền của họ là gì",
          "Entity: dữ liệu cốt lõi nào, ai tạo, ai xem, ai sửa, ai xóa",
          "Chức năng: tách nhỏ từng action cụ thể",
          "Ownership: dữ liệu thuộc về ai, ai được truy cập",
          "Build order: thứ tự xây dựng hợp lý",
          "Assumptions: giả định nếu đầu vào chưa đủ rõ",
        ],
      },
      {
        subtitle: "Thứ tự build bắt buộc:",
        items: [
          "Auth foundation: đăng nhập, role, session, middleware",
          "Entity foundation: database schema, migration, repository",
          "Layout foundation: app layout, navigation, protected routes",
          "Feature foundation: core features theo build order",
          "Support features: analytics, export, notifications",
        ],
      },
      {
        subtitle: "Dấu hiệu scope đang bị creep:",
        items: [
          "AI tự ý thêm file mà không được yêu cầu",
          "AI sửa file không liên quan đến task hiện tại",
          "AI đề xuất tính năng mới trong quá trình code",
          "Kết quả có nhiều thứ không nằm trong spec ban đầu",
        ],
      },
      {
        subtitle: "Cách kiểm soát scope:",
        items: [
          "Mỗi task chỉ có 1 mục tiêu rõ ràng, không lan man",
          "Nói rõ AI chỉ được sửa những file nào",
          "Không cho AI quyền tự ý thêm tính năng",
          "Nếu AI đề xuất thêm gì, đánh dấu lại và làm sau",
          "Mỗi lần giao tiếp chỉ xử lý 1-2 files",
        ],
      },
    ],
    keyTakeaway:
      "Spec rõ ràng + scope chặt chẽ = code đúng. Không spec → prompt mơ hồ → code lệch scope. Scope creep là kẻ thù của tiến độ.",
  },
  {
    icon: Shield,
    color: "red",
    num: "04",
    title: "Phải verify code từ AI & không phụ thuộc hoàn toàn",
    summary:
      "AI có thể sinh code sai logic, thiếu edge case, hoặc không đúng spec. Không có hệ thống nào hoàn hảo 100%. Biết AI đang làm gì, tại sao, và kiểm tra kết quả.",
    sections: [
      {
        subtitle: "Những gì AI thường sai:",
        items: [
          "Logic nghiệp vụ không đúng với mô tả",
          "Thiếu validate dữ liệu đầu vào",
          "Không xử lý error cases",
          "Sai type hoặc interface",
          "Thiếu auth check hoặc permission check",
          "Tạo file ở sai thư mục hoặc sai cấu trúc",
          "Gọi API sai endpoint hoặc sai method",
        ],
      },
      {
        subtitle: "Phải check những thứ này sau mỗi lần AI sinh code:",
        items: [
          "Logic có đúng với spec không?",
          "Có validate input chưa?",
          "Có handle error chưa?",
          "Có check permission/ownership chưa?",
          "File nằm đúng thư mục chưa?",
          "Import đúng chưa?",
          "Type đúng chưa?",
        ],
      },
      {
        subtitle: "Rủi ro khi quá phụ thuộc AI:",
        items: [
          "Không hiểu code mình đang chạy",
          "Bug xảy ra mà không biết nguyên nhân",
          "Fix bug sai cách, gây ra bug mới",
          "Không thể bảo trì hoặc mở rộng code",
          "Không phát triển được kỹ năng thật",
        ],
      },
      {
        subtitle: "Nguyên tắc khi dùng AI:",
        items: [
          "Luôn đọc và hiểu code AI sinh ra",
          "Đặt câu hỏi 'tại sao' khi AI chọn cách tiếp cận này",
          "Biết code nằm ở đâu, chạy như thế nào",
          "Có thể giải thích code bằng lời nếu được hỏi",
          "Khi có bug, phân tích trước khi nhờ AI fix",
        ],
      },
    ],
    keyTakeaway:
      "Review cẩn thận từng dòng code trước khi commit. Khi AI sinh code xong, đó mới là lúc bạn bắt đầu làm việc chứ không phải kết thúc. AI là công cụ, không phải bộ não.",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; lightBg: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20", lightBg: "bg-blue-500/5" },
  red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20", lightBg: "bg-red-500/5" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20", lightBg: "bg-orange-500/5" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20", lightBg: "bg-purple-500/5" },
  green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20", lightBg: "bg-green-500/5" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20", lightBg: "bg-teal-500/5" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20", lightBg: "bg-cyan-500/5" },
};

export default function TrapsGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/50" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-muted/30 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            Lưu ý quan trọng
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Ngữ cảnh quan trọng hơn{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              prompt
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Đây không phải tips hay best practices. Đây là những lưu ý bắt buộc phải tuân thủ
            nếu bạn muốn AI Agent thật sự hữu ích. Viết prompt hay thôi chưa đủ — ngữ cảnh
            mới quyết định kết quả.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* Core message */}
        <div className="rounded-2xl border border-dashed bg-gradient-to-br from-amber-500/5 via-background to-red-500/5 p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Nguyên tắc vàng</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Prompt dở + ngữ cảnh đủ = kết quả tốt.</strong>{" "}
                Prompt hay + ngữ cảnh thiếu = kết quả không đoán trước được.
                Ngữ cảnh quyết định AI hiểu đúng hay sai, sinh code đúng kiến trúc hay tự bịa.
                Hãy cung cấp đầy đủ ngữ cảnh cho AI trước khi đưa ra bất kỳ yêu cầu nào.
              </p>
            </div>
          </div>
        </div>

        {/* 4 rules */}
        {coreRules.map((rule) => {
          const c = colorMap[rule.color];
          const Icon = rule.icon;
          return (
            <section key={rule.num} className="space-y-4">
              {/* Rule header */}
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-2xl font-bold ${c.text} opacity-60`}>{rule.num}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-5 h-5 ${c.text}`} />
                    <h2 className="text-xl font-bold">{rule.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">{rule.summary}</p>
                </div>
              </div>

              {/* Rule sections */}
              <div className="ml-0 sm:ml-[4.5rem] space-y-4">
                {rule.sections.map((section, si) => (
                  <div key={si} className={`rounded-xl border ${c.lightBg} ${c.border} p-5`}>
                    <h3 className={`text-sm font-bold ${c.text} mb-3`}>{section.subtitle}</h3>
                    {section.content && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                    )}
                    {section.items && (
                      <ul className="space-y-2">
                        {section.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <CheckCircle2 className={`w-4 h-4 ${c.text} flex-shrink-0 mt-0.5`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Key takeaway */}
                <div className={`flex items-start gap-3 p-4 rounded-xl border-l-4 ${c.border} ${c.lightBg}`}>
                  <AlertTriangle className={`w-5 h-5 ${c.text} flex-shrink-0 mt-0.5`} />
                  <p className="text-sm font-medium text-muted-foreground">{rule.keyTakeaway}</p>
                </div>
              </div>
            </section>
          );
        })}

        {/* Download */}
        

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold mb-5">Liên quan</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Phân tích nghiệp vụ", href: "/guide/analysis", desc: "Lưu ý 03: phân tích trước khi code & kiểm soát scope" },
              { label: "Quy tắc viết Prompt", href: "/guide/prompt", desc: "Cấu trúc prompt chuẩn" },
              { label: "Quy trình thực chiến", href: "/workflow", desc: "Workflow đúng cách: Power → Plan → Build → Review → Ship" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all group">
                <div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
