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
  title: "Darryl Mathias | Full-Stack Developer",
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

  {/* Linkedin */}
  <meta name="twitter:title" content="Darryl Mathias | LinkedIn Profile" />
  <meta name="twitter:description" content="Connect with Darryl Mathias — Full-Stack Developer and Software Engineer. See work experience, skills, and professional background." />
  <meta name="twitter:url" content="https://www.linkedin.com/in/darryl-mathias-020241317/" />
  <meta name="twitter:card" content="summary" />

  {/* GitHub */}
  <meta name="twitter:title" content="Darryl Mathias | GitHub" />
  <meta name="twitter:description" content="Explore open-source projects, contributions, and code snippets by Darryl Mathias. MERN stack, TypeScript, and more." />
  <meta name="twitter:url" content="https://github.com/DarrylMathias" />
  <meta name="twitter:card" content="summary" />

  {/* YouTube */}
  <meta name="twitter:title" content="Darryl Mathias | YouTube Channel" />
  <meta name="twitter:description" content="Watch development tutorials, project walkthroughs, and coding insights from Darryl Mathias — a full-stack web developer." />
  <meta name="twitter:url" content="https://www.youtube.com/channel/UCIgATHMupDeW4f-Q48ufrng" />
  <meta name="twitter:card" content="summary" />

  {/* Quora */}
  <meta name="twitter:title" content="Darryl Mathias | Quora Profile" />
  <meta name="twitter:description" content="Answers from Darryl Mathias on programming, web development, full-stack tools, and tech career advice." />
  <meta name="twitter:url" content="https://www.quora.com/profile/Darryl-Mathias-5" />
  <meta name="twitter:card" content="summary" />

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
