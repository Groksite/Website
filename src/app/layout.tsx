import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CriticalCss from "@/components/CriticalCss";
import SkipToContent from "@/components/SkipToContent";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ClickSpark from "@/components/ClickSpark";
import { LoadingProvider } from "@/contexts/LoadingContext";
import LoadingScreen from "@/components/LoadingScreen";
import LoadingPerformanceMonitor from "@/components/LoadingPerformanceMonitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creative UI/UX Designer | Freelance Design Services",
  description:
    "Professional UI/UX Designer specializing in Notion templates, Canva flyers, and modern web design. Available for hire on Fiverr.",
  keywords:
    "UI/UX Designer, Freelance Designer, Notion Templates, Canva Flyers, Web Design, Graphic Design",
  authors: [{ name: "Creative Designer" }],
  openGraph: {
    title: "Creative UI/UX Designer | Freelance Design Services",
    description:
      "Professional UI/UX Designer specializing in Notion templates, Canva flyers, and modern web design.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative UI/UX Designer | Freelance Design Services",
    description:
      "Professional UI/UX Designer specializing in Notion templates, Canva flyers, and modern web design.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />

        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Resource hints for better loading */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#5a67d8" />
        <meta name="color-scheme" content="light dark" />

        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <CriticalCss />
      <body
        className={`${inter.className} antialiased dark:bg-gray-900 dark:text-gray-100`}
      >
        <LoadingProvider>
          <LoadingScreen />
          <LoadingPerformanceMonitor />
          <SkipToContent />
          <PerformanceMonitor />
          <ClickSpark
            sparkColor="#FFD700"
            sparkSize={12}
            sparkRadius={20}
            sparkCount={10}
            duration={500}
            easing="ease-out"
            extraScale={1.2}
          >
            {children}
          </ClickSpark>
        </LoadingProvider>
      </body>
    </html>
  );
}
