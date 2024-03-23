import { ubuntu } from "@/fonts/ubuntu";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoftPet",
  description: "Uma aplicação de gerenciamento de pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
