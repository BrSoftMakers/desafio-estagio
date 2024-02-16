import type { Metadata } from "next"
import "./globals.css"

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
      <body>{children}</body>
    </html>
  )
}
