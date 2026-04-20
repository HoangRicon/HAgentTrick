import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header, Footer } from "@/components/layout";
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
  metadataBase: new URL("https://example.com"),
  title: {
    default: "AI Agent Hướng dẫn",
    template: "%s | AI Agent Hướng dẫn",
  },
  description: "Hướng dẫn sử dụng AI Agent để code từ A-Z. Tìm hiểu cách phân tích yêu cầu, viết prompt, và xây dựng dự án với AI.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    siteName: "AI Agent Hướng dẫn",
    title: "AI Agent Hướng dẫn",
    description: "Hướng dẫn sử dụng AI Agent để code từ A-Z",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Hướng dẫn",
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
    name: "AI Agent Hướng dẫn",
    description: "Hướng dẫn sử dụng AI Agent để code từ A-Z",
    author: {
      "@type": "Person",
      name: "Your Name",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
