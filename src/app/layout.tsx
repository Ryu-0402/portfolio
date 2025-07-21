import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "永井琉 | Portfolio",
  description: "永井琉のプログラミングスキルをまとめたポートフォリオサイト",
  keywords:["永井琉","永井琉　ポートフォリオ"],
  authors:[{name:"永井琉"}],
  creator:"永井琉",
  openGraph:{
    title: "永井琉 | Portfolio",
    description: "永井琉のプログラミングスキルをまとめたポートフォリオサイト",
    url:"",
    siteName:"永井琉　ポートフォリオ",
    locale:"ja_JP",
    type:"website",
  },
  twitter:{
    card:"summary_large_image",
    title:"永井琉　ポートフォリオ",
    description:"永井琉のプログラミングスキルをまとめたポートフォリオサイト",
    creator:"@RyuN_0402",
  },
  icons:{
    icon:"/portfolio-fabicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" 
      className="overflow-x-hidden
      bg-[#021428]"
      style={{}}>
        
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  relative`}
        style={{
        }}
      >
        {children}
      </body>
    </html>
  );
}
