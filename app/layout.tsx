import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liuxiujin.com"),
  title: "XIUJIN｜AI 产品传播、产品交互与 AI 内容生产",
  description:
    "XIUJIN 的个人网站。记录在猿力科技、飞象星球的工作经历，展示 AI 产品传播、教育内容、产品交互与 AI 图文视频工作流相关项目，以及持续进行的个人创作实验。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "XIUJIN｜AI 产品传播、产品交互与 AI 内容生产",
    description:
      "记录 AI 产品传播、教育内容、产品交互与 AI 图文视频工作流相关项目，以及持续进行的个人创作实验。",
    images: [
      {
        url: "/og.png",
        width: 1774,
        height: 887,
        alt: "XIUJIN 个人作品集封面",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XIUJIN｜AI 产品传播、产品交互与 AI 内容生产",
    description: "AI 产品传播、教育内容、产品交互与 AI 内容生产相关项目。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={kanit.variable}>{children}</body>
    </html>
  );
}
