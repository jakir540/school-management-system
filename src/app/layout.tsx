import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iqra Model Madrasha Management Dashboard",
  description: "Next.js Madrasha Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div>home page </div> */}
        {children}
      </body>
    </html>
  );
}
