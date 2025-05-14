import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilProvider } from "./recoil-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaku's Portfolio",
  description: "프론트엔드 개발자 오승현의 포트폴리오 페이지입니다.",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
