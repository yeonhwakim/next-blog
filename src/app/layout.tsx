import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "연화의 블로그", template: "연화의 블로그 | %s" },
  description: "프런트엔드 개발자 연화의 끄적끄적 블로그 입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${"flex flex-col w-full max-w-screen-2xl mx-auto"}`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
