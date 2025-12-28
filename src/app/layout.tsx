import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tenacity - Jasa Pengerjaan Tugas Kuliah Terpercaya",
  description:
    "Jasa pengerjaan tugas kuliah dengan kualitas terjamin, tepat waktu, dan 100% confidential. Essay, Skripsi, Coding, Analisis Data, dan 90+ kategori lainnya.",
  keywords: [
    "jasa tugas kuliah",
    "bantuan tugas kuliah",
    "jasa skripsi",
    "jasa essay",
    "jasa coding",
    "tugas mahasiswa",
    "tenacity",
  ],
  authors: [{ name: "Tenacity" }],
  openGraph: {
    title: "Tenacity - Jasa Pengerjaan Tugas Kuliah Terpercaya",
    description:
      "Jasa pengerjaan tugas kuliah dengan kualitas terjamin, tepat waktu, dan 100% confidential.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        <main className="bg-white">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
