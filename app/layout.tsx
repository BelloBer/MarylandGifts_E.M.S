import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maryland Gifts English Medium School",
  description: "Nurturing young minds for a brighter future",
  icons: {
    icon: [
      { url: '/images/Logo Maryland.png' },
      { url: '/images/Logo Maryland.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/Logo Maryland.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/Logo Maryland.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'