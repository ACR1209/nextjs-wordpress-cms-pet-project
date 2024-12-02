import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AACR Store",
  description: "A store with Wordpress, Shopify and NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex flex-col h-screen`}
      >
        <Navbar />
        <div className="px-12 py-8 font-[family-name:var(--font-geist-sans)] flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
