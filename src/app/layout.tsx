import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepInterview - AI-Powered Interview Preparation",
  description: "Prepare for your next interview with AI-driven real-world scenarios, expert insights, and personalized practice sessions.",
  keywords: "interview preparation, AI interview coach, real-world interview scenarios, job interview tips, mock interviews, career growth",
  robots: "index, follow"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.variable} antialiased pattern`}
      >
        {children}
        <Toaster
          toastOptions={{
            className: "toast",
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
          closeButton={false}
          position="top-right"
          richColors
        />
      </body>
    </html>
  );
}
