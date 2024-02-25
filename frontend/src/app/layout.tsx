import type { Metadata } from "next"
import { Ubuntu as FontSans } from "next/font/google"
import { twMerge } from "tailwind-merge"
import "./globals.css"

const fontSans = FontSans({
  weight: ["700", "500", "400"],
  subsets: ["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "SoftPet",
  description: "Projeto referente a um teste técnico para uma vaga de estágio"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={twMerge(
          "bg-background min-h-screen px-14 font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
