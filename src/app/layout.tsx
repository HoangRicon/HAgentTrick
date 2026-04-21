import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MainLayout } from "@/components/layout/main-layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://htool.app/hagenttrick"),
  title: {
    default: "HAgentTrick",
    template: "%s | HAgentTrick",
  },
  description: "Hướng dẫn sử dụng AI Agent để code từ A-Z. Tìm hiểu cách phân tích yêu cầu, viết prompt, quy tắc code, và xây dựng dự án với AI.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    siteName: "HAgentTrick",
    title: "HAgentTrick — Hướng dẫn xây dựng ngữ cảnh cho AI Agent",
    description: "Hướng dẫn sử dụng AI Agent để code từ A-Z",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAgentTrick — Hướng dẫn xây dựng ngữ cảnh AI Agent",
    description: "Hướng dẫn sử dụng AI Agent để code từ A-Z",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "HAgentTrick",
    description: "Hướng dẫn sử dụng AI Agent để code từ A-Z",
    author: {
      "@type": "Person",
      name: "Doan Huy Hoang",
    },
  };

  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
