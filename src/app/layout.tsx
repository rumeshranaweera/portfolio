import Nav from "@/components/nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import RumeshText from "@/components/rumeshText";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rumesh Ranaweera",
  description: "This is my portfolio page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100`}>
        <RumeshText />
        <Toaster />
        <Nav />
        {children}
      </body>
    </html>
  );
}
