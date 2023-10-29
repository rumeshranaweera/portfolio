import Nav from "@/components/nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import RumeshText from "@/components/rumeshText";
import FloatingShape from "../components/floatingShape";

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
  console.log(inter.className, inter.style);
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased scroll-m-4 @apply scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-900"
    >
      <body
        className={`${inter.className} bg-[url(https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png)]`}
      >
        <Toaster />
        <Nav />
        <FloatingShape />
        {children}
        <RumeshText />
      </body>
    </html>
  );
}
