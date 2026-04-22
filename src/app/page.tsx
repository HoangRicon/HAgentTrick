import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Zap,
  Sparkles,
  Code2,
  Users,
  Cpu,
  Target,
  Brain,
  Shield,
  Rocket,
  TrendingUp,
  Clock,
  FileSearch,
  ChevronDown,
  FileText,
  Layers,
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Hiểu nhanh hơn",
    desc: "AI nắm bắt ngữ cảnh dự án tức thì. Không cần giải thích lại kiến trúc, quy tắc, hay convention cho mỗi cuộc trò chuyện mới.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Chính xác hơn",
    desc: "Ngữ cảnh rõ ràng giúp AI sinh code đúng kiến trúc, đúng boundary, đúng convention của dự án — không tự bịa giải pháp.",
    color: "violet",
  },
  {
    icon: Shield,
    title: "Ít lỗi hơn",
    desc: "Review kỹ từng dòng, verify từng module. Lỗi được phát hiện và fix ngay, không tích lũy đến cuối dự án.",
    color: "emerald",
  },
  {
    icon: Rocket,
    title: "Nhanh hơn",
    desc: "Mỗi module chỉ 2-5 files, có checkpoint. Không commit 500 dòng, không mất nhiều giờ debug vì một lỗi nhỏ.",
    color: "orange",
  },
  {
    icon: Target,
    title: "Đúng scope",
    desc: "AI chỉ làm đúng phần được yêu cầu. Không tự thêm tính năng, không lan man, không over-engineering.",
    color: "pink",
  },
  {
    icon: Users,
    title: "Như kỹ sư thật",
    desc: "Biết mình đang làm gì, tại sao, và kiểm soát được mọi dòng code. Không phụ thuộc hoàn toàn vào AI.",
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  blue: { bg: "bg-blue-500/5", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20", iconBg: "bg-blue-500/10" },
  violet: { bg: "bg-violet-500/5", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/20", iconBg: "bg-violet-500/10" },
  emerald: { bg: "bg-emerald-500/5", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/20", iconBg: "bg-emerald-500/10" },
  orange: { bg: "bg-orange-500/5", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20", iconBg: "bg-orange-500/10" },
  pink: { bg: "bg-pink-500/5", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20", iconBg: "bg-pink-500/10" },
  cyan: { bg: "bg-cyan-500/5", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20", iconBg: "bg-cyan-500/10" },
};

const howItWorks = [
  {
    num: "01",
    icon: Cpu,
    title: "Xác định sức mạnh AI",
    desc: "Biết model đang dùng mạnh đến đâu, phân bổ công việc phù hợp.",
    color: "cyan",
  },
  {
    num: "02",
    icon: Brain,
    title: "Phân tích yêu cầu",
    desc: "Xác định actor, entity, ownership, permission trước khi nhờ AI code.",
    color: "blue",
  },
  {
    num: "03",
    icon: FileSearch,
    title: "Chuẩn bị tài nguyên",
    desc: "Bộ luật code, cấu trúc thư mục, phân tích yêu cầu — ngữ cảnh đầy đủ để AI hiểu dự án.",
    color: "violet",
  },
  {
    num: "04",
    icon: FileText,
    title: "Viết Prompt chuẩn",
    desc: "Context + Task + Constraints + Output. Bốn thành phần bắt buộc cho mọi prompt.",
    color: "blue",
  },
  {
    num: "05",
    icon: Code2,
    title: "Build từng Module",
    desc: "Mỗi lần chỉ 2-5 files. Review kỹ trước khi tiếp tục.",
    color: "emerald",
  },
  {
    num: "06",
    icon: Rocket,
    title: "Commit & Ship",
    desc: "Commit nhỏ, commit sớm. Mỗi bước là một checkpoint an toàn.",
    color: "orange",
  },
];

const accentGradientMap: Record<string, string> = {
  cyan: "from-cyan-600 to-cyan-400",
  violet: "from-violet-600 to-violet-400",
  blue: "from-blue-600 to-blue-400",
  emerald: "from-emerald-600 to-emerald-400",
  orange: "from-orange-600 to-orange-400",
};

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ═══════════════════════════════════════ */}
      {/* HERO */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">

        {/* Background layers */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(var(--muted-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--muted-foreground) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.15),transparent)]" />
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Eyebrow */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                HAgentTrick
              </span>
            </div>
          </div>

          {/* Main title */}
          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                Ngữ cảnh đủ
              </span>
              <br />
              <span className="text-foreground">AI tự làm đúng</span>
            </h1>

            {/* Pain point pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {[
                "Prompt 10 lần vẫn sai",
                "AI tự bịa code",
                "Debug cả ngày",
              ].map((pain) => (
                <span
                  key={pain}
                  className="inline-flex items-center px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400 text-xs font-medium"
                >
                  {pain}
                </span>
              ))}
            </div>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mt-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-center">
            <strong className="text-foreground">Không phải viết prompt giỏi.</strong> Mà là xây ngữ cảnh đúng — ranh giới, quy tắc, cấu trúc — để AI sinh code đúng từ lần đầu.
            Không lặp lại. Không debug. Không phải tự sửa lại.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/workflow"
              className="group inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/95 transition-all duration-300"
            >
              <Rocket className="w-4.5 h-4.5" />
              Quy trình thực chiến
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/guide/superpowers"
              className="group inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 hover:opacity-95 transition-all duration-300"
            >
              <Sparkles className="w-4.5 h-4.5" />
              Superpowers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/resources"
              className="group inline-flex items-center gap-2.5 h-12 px-7 rounded-xl border border-border bg-background font-semibold text-sm hover:border-primary/30 hover:bg-accent transition-all duration-300"
            >
              <Zap className="w-4.5 h-4.5" />
              Tài nguyên
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Pill highlights — giải pháp */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Ngữ cảnh đầy đủ", icon: Brain },
              { label: "Code đúng từ đầu", icon: Shield },
              { label: "Review từng bước", icon: Target },
              { label: "Ship nhanh hơn", icon: Rocket },
            ].map((pill) => (
              <div
                key={pill.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/15 bg-violet-500/5 text-muted-foreground text-xs font-medium backdrop-blur-sm transition-all duration-200"
              >
                <pill.icon className="w-3.5 h-3.5 text-violet-500" />
                {pill.label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
          <span className="text-[10px] tracking-widest uppercase font-medium">Kéo xuống</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* BENEFITS */}
      {/* ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/15 bg-violet-500/5 text-violet-600 dark:text-violet-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Thay đổi cách bạn dùng AI
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Đừng prompt giỏi hơn. Hãy xây ngữ cảnh đúng.
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Vấn đề không phải prompt của bạn dở. Mà là bạn chưa cho AI đủ ngữ cảnh để nó hiểu dự án.
              HAgentTrick giúp bạn xây bộ ngữ cảnh đầy đủ — AI sinh code đúng ngay từ lần đầu.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => {
              const c = colorMap[benefit.color];
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`flex items-start gap-4 p-5 rounded-2xl border ${c.border} ${c.bg} hover:shadow-md transition-all duration-300`}
                >
                  <div className={`w-11 h-11 rounded-xl ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5.5 h-5.5 ${c.text}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm mb-1 ${c.text}`}>{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* HOW IT WORKS */}
      {/* ═══════════════════════════════════════ */}
      <section className="py-0 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/15 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
              <Clock className="w-3.5 h-3.5" />
              Quy trình
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              6 bước từ ý tưởng đến sản phẩm
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Không nhảy thẳng vào code. Mỗi bước đều có checkpoint, mỗi module đều được verify.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-3">
            {howItWorks.map((step, i) => {
              const c = colorMap[step.color];
              const grad = accentGradientMap[step.color];
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  {/* Step card */}
                  <div className={`flex items-center gap-4 p-4 sm:p-5 rounded-xl border ${c.border} ${c.bg} flex-1`}>
                    {/* Number */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${grad} shadow-md`}>
                      <span className="text-sm font-black text-white">{step.num}</span>
                    </div>
                    {/* Icon */}
                    <div className={`w-9 h-9 rounded-lg ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4.5 h-4.5 ${c.text}`} />
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm mb-0.5 ${c.text}`}>{step.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {/* Arrow between steps (desktop) */}
                  {i < howItWorks.length - 1 && (
                    <div className="hidden sm:flex items-center justify-center flex-shrink-0 w-8">
                      <div className="h-px w-full bg-gradient-to-r from-transparent to-muted-foreground/20" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* CTA BANNER */}
      {/* ═══════════════════════════════════════ */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-purple-500/10" />
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(var(--muted-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--muted-foreground) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative px-8 sm:px-12 py-12 sm:py-16">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Ngữ cảnh đầy đủ. Code đúng ngay.
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
                  Thay vì ngồi prompt đi prompt lại, hãy xây ngữ cảnh đúng một lần.
                  HAgentTrick cung cấp quy trình, tài nguyên và hướng dẫn để bạn bắt đầu ngay hôm nay.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/workflow"
                    className="group inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/95 transition-all duration-300"
                  >
                    <Rocket className="w-4.5 h-4.5" />
                    Quy trình thực chiến
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <Link
                    href="/resources"
                    className="group inline-flex items-center gap-2.5 h-12 px-7 rounded-xl border border-border bg-background font-semibold text-sm hover:border-primary/30 hover:bg-accent transition-all duration-300"
                  >
                    <Zap className="w-4.5 h-4.5" />
                    Tài nguyên
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <Link
                    href="/guide"
                    className="group inline-flex items-center gap-2.5 h-12 px-7 rounded-xl border border-border bg-background font-semibold text-sm hover:border-primary/30 hover:bg-accent transition-all duration-300"
                  >
                    <BookOpen className="w-4.5 h-4.5" />
                    Hướng dẫn
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
