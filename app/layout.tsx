import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auro — Skin that glows from within.",
  description:
    "Science-backed skincare, crafted with 100% natural actives. No fillers, no compromise. Just results — in 28 days or your money back.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
