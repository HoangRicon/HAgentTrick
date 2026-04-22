"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Heart, Youtube, ExternalLink, Copy, Check } from "lucide-react";

function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className={`inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors ${className}`}>
      {copied ? (
        <><Check className="w-3 h-3 text-green-500" /> Đã copy</>
      ) : (
        <><Copy className="w-3 h-3" /> Copy</>
      )}
    </button>
  );
}

function VPBANK_QR() {
  const [copied, setCopied] = useState(false);
  const qrUrl = "https://img.vietqr.io/image/VPB-0878836354-compact2.png";
  const handleCopy = () => {
    navigator.clipboard.writeText("0878836354");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-xl border bg-white p-3 shadow-sm overflow-hidden">
        <img
          src={qrUrl}
          alt="VPBANK QR Code - 0878836354"
          className="w-52 h-52 object-contain"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </div>
      <button onClick={handleCopy} className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
        {copied ? (
          <><Check className="w-3.5 h-3.5 text-green-500" /> Đã copy số tài khoản</>
        ) : (
          <><Copy className="w-3.5 h-3.5" /> Copy số tài khoản</>
        )}
      </button>
    </div>
  );
}

export default function ContactPage() {
  const socials = [
    {
      href: "mailto:convitcon12345678@gmail.com",
      icon: Mail,
      color: "blue",
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      border: "hover:border-blue-500/40",
      label: "Email",
      value: "convitcon12345678@gmail.com",
      desc: "Gửi email để trao đổi chi tiết",
    },
    {
      href: "https://zalo.me/0878836354",
      icon: MessageCircle,
      color: "blue",
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      border: "hover:border-blue-500/40",
      label: "Zalo",
      value: "0878836354",
      desc: "Nhắn tin nhanh qua Zalo",
    },
    {
      href: "tel:0878836354",
      icon: Phone,
      color: "green",
      bg: "bg-green-500/10",
      text: "text-green-500",
      border: "hover:border-green-500/40",
      label: "Điện thoại",
      value: "0878836354",
      desc: "Gọi trực tiếp nếu cần",
    },
    {
      href: "https://www.youtube.com/@hoangcon18nd",
      icon: Youtube,
      color: "red",
      bg: "bg-red-500/10",
      text: "text-red-500",
      border: "hover:border-red-500/40",
      label: "YouTube",
      value: "@hoangcon18nd",
      desc: "Video hướng dẫn trên YouTube",
      external: true,
    },
  ];

  const faqs = [
    { q: "Mình có nhận dạy / mentoring không?", a: "Hiện tại mình tập trung phát triển nội dung và tài nguyên miễn phí cho cộng đồng. Nếu bạn muốn trao đổi 1-1, inbox qua Zalo nhé." },
    { q: "Mình có nhận làm freelance không?", a: "Tuỳ dự án. Nếu bạn cần hỗ trợ AI Agent workflow, prompt engineering, hoặc xây dựng MVP, inbox chi tiết qua Zalo để mình review." },
    { q: "Mình có bán khóa học không?", a: "Hiện tại tất cả nội dung đều miễn phí. Các video YouTube sẽ hướng dẫn đầy đủ workflow từ A-Z." },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-pink-500/5" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="relative w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              <MessageCircle className="w-4 h-4" />
              Liên hệ
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Kết nối với{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                mình
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Bạn có câu hỏi, góp ý, hoặc muốn trao đổi kinh nghiệm về AI Agent?
              Đừng ngại liên hệ. Ngoài ra, nếu thấy nội dung hữu ích, bạn có thể ủng hộ
              để mình tiếp tục phát triển thêm tài nguyên cho cộng đồng.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* About */}
        <section>
          <div className="rounded-2xl border bg-gradient-to-br from-primary/5 via-violet-500/5 to-pink-500/5 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-bold mb-3">Ý nghĩa của trang web này</h2>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    HAgentTrick bắt đầu từ một câu hỏi đơn giản: <strong className="text-foreground">"Tại sao dùng AI code mà vẫn chậm?"</strong> Sau nhiều lần AI sinh code sai spec, debug cả ngày, và phải viết lại từ đầu — mình nhận ra vấn đề không nằm ở prompt.
                  </p>
                  <p>
                    Vấn đề nằm ở <strong className="text-foreground">ngữ cảnh</strong>. AI không hiểu dự án, không biết ranh giới, không có quy tắc. Khi đó, dù prompt có hay đến đâu, code sinh ra vẫn sai — hoặc vừa sai vừa đẹp, khiến mình càng khó phát hiện.
                  </p>
                  <p>
                    HAgentTrick là nơi mình tổng hợp lại <strong className="text-foreground">quy trình, tài nguyên và hướng dẫn</strong> giúp tận dụng tốt AI Agent. Không phải công thức magic. Mà là cách xây ngữ cảnh đúng — để AI sinh code đúng từ lần đầu.
                  </p>
                  <p>
                    Tất cả nội dung đều <strong className="text-foreground">miễn phí</strong>. Mình làm vì đam mê và muốn đóng góp cho cộng đồng. Nếu thấy hữu ích, bạn có thể ủng hộ mình qua VPBANK hoặc ủng hộ qua YouTube.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section>
          <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-primary" />
            Kênh liên hệ
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 p-5 rounded-xl border bg-card ${s.border} hover:shadow-lg transition-all`}
                >
                  <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${s.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-muted-foreground">{s.label}</span>
                      {s.external && <ExternalLink className="w-3 h-3 text-muted-foreground/50" />}
                    </div>
                    <div className="font-medium text-sm truncate group-hover:text-primary transition-colors">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{s.desc}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* YouTube Banner */}
        <section>
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-red-500/10 via-background to-red-500/5 border-red-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0" />
            <div className="relative p-6 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center shrink-0">
                <Youtube className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base font-bold mb-1">Video hướng dẫn trên YouTube</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Mình sẽ làm video thực hiện toàn bộ quy trình AI Agent từ A-Z trên YouTube.
                  Subscribe và bật thông báo để không bỏ lỡ video mới nhất.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.youtube.com/@hoangcon18nd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-red-500 text-white font-medium text-sm hover:bg-red-600 transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    Truy cập YouTube
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">@hoangcon18nd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Ủng hộ mình
          </h2>
          <div className="max-w-sm mx-auto">
            <div className="rounded-2xl border bg-card overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b border-border/50">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Ủng hộ mình tiếp tục phát triển</div>
                  <div className="text-xs text-muted-foreground">VPBANK - 0878836354</div>
                </div>
              </div>
              <div className="p-6 flex flex-col items-center">
                <VPBANK_QR />
                <div className="mt-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Quét mã QR bằng app ngân hàng</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-mono text-sm font-medium">0878836354</span>
                    <CopyButton text="0878836354" />
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <div className="p-4 rounded-lg bg-muted/50 border border-border/50 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ngân hàng</span>
                    <span className="font-medium">VPBANK</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Số tài khoản</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-medium">0878836354</span>
                      <CopyButton text="0878836354" />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tên tài khoản</span>
                    <span className="font-medium">DOAN HUY HOANG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Thắc mắc thường gặp
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details key={i} className="group rounded-xl border bg-card overflow-hidden">
                <summary className="flex items-start gap-3 p-4 cursor-pointer select-none list-none hover:bg-muted/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item.q}</span>
                </summary>
                <div className="px-4 pb-4 pl-10">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
