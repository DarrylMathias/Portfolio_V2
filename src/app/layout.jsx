import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Darryl Mathias | Full-Stack Developer",
  description:
    "Explore the modern, minimalist portfolio of Darryl Mathias — a passionate full-stack developer and software engineer.",
  metadataBase: new URL("https://darrylmathias.vercel.app"),
  openGraph: {
    title: "Darryl Mathias | Portfolio",
    description:
      "Showcasing projects, skills, and experience in full-stack web development.",
    url: "https://darrylmathias.vercel.app",
    siteName: "Darryl Mathias",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darryl Mathias | Portfolio",
    description: "Full-stack developer. Explore projects, skills and more.",
    site: "@DarrylMathias",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights />
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
