import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Datagaze",
  description: "Datagaze UI",
};

import { ModalProvider } from "@/context/ModalContext";
import TalkWithSalesModal from "@/components/layout/TalkWithSalesModal";
import GetDemoModal from "@/components/layout/GetDemoModal";
import I18nProvider from "@/components/providers/I18nProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f7f7f8] font-sans">
        <I18nProvider>
          <ModalProvider>
            <Navbar />
            {children}
            <Footer />
            <TalkWithSalesModal />
            <GetDemoModal />
          </ModalProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
