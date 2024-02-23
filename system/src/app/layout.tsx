import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/auth";
import { Toaster } from "@/components/ui/toaster";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});

export const metadata: Metadata = {
  title: "SoftPet",
  description: "Sistema de gerenciamento de petshop.",
  creator: "Alexsandro Martins"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <AuthProvider>
        <body className={ubuntu.className}>
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
