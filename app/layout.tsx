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
  title: "XIUJIN — AI × 教育 × 3D 互动创作者",
  description: "秀金的个人作品集：AI 产品原型、互动学习体验、3D 可视化与创意自动化。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "XIUJIN — AI × 教育 × 3D 互动创作者",
    description: "秀金的个人作品集：AI 产品原型、互动学习体验、3D 可视化与创意自动化。",
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
    title: "XIUJIN — AI × 教育 × 3D 互动创作者",
    description: "AI 产品原型、互动学习体验、3D 可视化与创意自动化。",
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
