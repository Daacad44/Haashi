import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/hashitech.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Code With Haashi – Turning ideas into clean, creative code.",
  description:
    "Mohamett Haashi – creative web designer and developer. UI/UX, mobile apps, branding, and digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="hashitech-site antialiased">{children}</body>
    </html>
  );
}
