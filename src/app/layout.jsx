import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Darryl Mathias | Full-Stack Developer & Software Engineer Portfolio",
  description: "Explore the modern, minimalist portfolio of Darryl Mathias — a passionate full-stack developer and software engineer. Showcasing projects, skills, and experience in web development, React, and more.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Explore the modern, minimalist portfolio of Darryl Mathias — a passionate full-stack developer and software engineer. Showcasing projects, skills, and experience in web development, React, and more." />
  <meta name="keywords"
    content="darryl, darryl mathias, mathias, home, skills, projects, contacts, web development, development website, web designing, web designing websites, web designing web, Darryl portfolio, Portfolio website, html css projects" />
  <meta name="author" content="Darryl Mathias" />
  <link rel="canonical" href="https://darrylmathias.vercel.app" />
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights/>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem = "false"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
