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
  title: {
    default: "Darryl Mathias",
    template: "%s | Darryl Mathias",
  },
  description: "Welcome to the personal portfolio of Darryl Mathias — full stack developer, creative coder, and tech enthusiast.",
  metadataBase: new URL("https://darrylmathias.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://darrylmathias.vercel.app",
    siteName: "Darryl Mathias",
    title: "Darryl Mathias | Portfolio",
    description: "Welcome to the personal portfolio of Darryl Mathias — full stack developer, creative coder, and tech enthusiast.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Darryl Mathias Portfolio Preview",
      },
    ],
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
