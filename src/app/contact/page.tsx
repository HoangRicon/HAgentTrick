"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Heart } from "lucide-react";

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
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <button
        onClick={handleCopy}
        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
      >
        {copied ? (
          <>
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Đã copy số tài khoản
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy số tài khoản
          </>
        )}
      </button>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full sm:max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <MessageCircle className="w-4 h-4" />
          Liên hệ
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Liên hệ với{" "}
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            tôi
          </span>
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Bạn có câu hỏi về AI Agent, góp ý cải thiện nội dung, hoặc muốn trao đổi kinh nghiệm?
          Liên hệ trực tiếp qua các kênh bên dưới. Ngoài ra, bạn có thể ủng hộ để mình tiếp tục phát triển thêm các tài nguyên hữu ích cho cộng đồng.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {/* Email */}
        <a
          href="mailto:convitcon12345678@gmail.com"
          className="group flex items-center gap-4 p-5 rounded-xl border bg-card hover:border-primary/40 hover:shadow-md transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6 text-blue-500" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground mb-0.5">Email</div>
            <div className="font-medium text-sm truncate group-hover:text-primary transition-colors">
              convitcon12345678@gmail.com
            </div>
          </div>
        </a>

        {/* Zalo */}
        <a
          href="https://zalo.me/0878836354"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-5 rounded-xl border bg-card hover:border-primary/40 hover:shadow-md transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.937 1.464 5.574 3.821 7.315L2 22l3.809-1.492A10.24 10.24 0 0 0 12 20.487c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2z" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground mb-0.5">Zalo</div>
            <div className="font-medium text-sm group-hover:text-primary transition-colors">
              0878836354
            </div>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:0878836354"
          className="group flex items-center gap-4 p-5 rounded-xl border bg-card hover:border-primary/40 hover:shadow-md transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 text-green-500" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground mb-0.5">Điện thoại</div>
            <div className="font-medium text-sm group-hover:text-primary transition-colors">
              0878836354
            </div>
          </div>
        </a>
      </div>

      {/* QR Code Donation */}
      <div className="max-w-sm mx-auto">
        <div className="rounded-2xl border bg-card overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 p-5 border-b border-border/50">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm">Ủng hộ tôi</div>
              <div className="text-xs text-muted-foreground">VPBANK - 0878836354</div>
            </div>
          </div>

          {/* QR Code */}
          <div className="p-6 flex flex-col items-center">
            <VPBANK_QR />
            <div className="mt-4 text-center">
              <div className="text-xs text-muted-foreground mb-1">Quét mã QR bằng app ngân hàng</div>
              <div className="font-mono text-sm font-medium">0878836354</div>
            </div>
          </div>

          {/* Bank Info */}
          <div className="px-5 pb-5">
            <div className="p-4 rounded-lg bg-muted/50 border border-border/50 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Ngân hàng</span>
                <span className="font-medium">VPBANK</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Số tài khoản</span>
                <span className="font-mono font-medium">0878836354</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tên tài khoản</span>
                <span className="font-medium">DOAN HUY HOANG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
