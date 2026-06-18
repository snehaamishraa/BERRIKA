import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Berrika | Personalized Nutrition Platform",
  description:
    "Berrika coordinates your meals, trains your cook, manages groceries, and helps you achieve health goals through execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-poppins)] bg-[#FFF8F5]">
        {children}
      </body>
    </html>
  );
}