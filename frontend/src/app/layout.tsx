import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"

const ubuntu = Ubuntu({ weight: ["700", "500", "400"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftPets",
  description: "Projeto referente a um teste técnico para uma vaga de estágio"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
