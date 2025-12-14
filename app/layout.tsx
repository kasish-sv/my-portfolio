import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/navbar/Footer";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
config.autoAddCss = false;

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kasish's Portfolio",
  description: "A developer portfolio built with Next.js",
  keywords: ["Next.js", "React", "Tailwind", "Lucide"],
  authors: [{ name: "Kasish", url: "https://your-portfolio.com" }],
  openGraph: {
    title: "Kasish's Portfolio",
    description: "A developer portfolio built with Next.js",
    url: "https://your-portfolio.com",
    siteName: "Kasish's Portfolio",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasish's Portfolio",
    description: "A modern web app built with Next.js",
    images: ["/logo.jpeg"],
    creator: "@yourhandle",
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
