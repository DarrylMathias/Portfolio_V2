import { ThemeProvider } from "@/components/ui/theme-provider";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// const geistSans = Geist({
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   subsets: ["latin"],
// });

const lato = Lato({
  weight: "400",
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
};

export const experimental_ppr = true;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="h-full">
      <body className={`${lato.className} antialiased h-full`}>
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
