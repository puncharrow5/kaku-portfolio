import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilProvider } from "./recoil-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaku's Portfolio",
  description: "프론트엔드 개발자 오승현의 포트폴리오 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta
          name="google-site-verification"
          content="8XxRGK3LyvLZcw8YfJ3zO1bltCZR1j7DkGY6ggjpGdU"
        />
      </Head>

      <body className={inter.className}>
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
