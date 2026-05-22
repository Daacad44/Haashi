import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Code With Haashi – Turning ideas into clean, creative code.",
  description:
    "Mohamett Haashi – creative web designer and developer. UI/UX, mobile apps, branding, and digital marketing.",
  openGraph: {
    title: "Code With Haashi",
    description: "Turning ideas into clean, creative code.",
    url: "https://hashitech.great-site.net/",
    siteName: "HashiTech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
