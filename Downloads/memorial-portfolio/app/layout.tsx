import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { MobileNav } from "@/components/mobile-nav"
import { MainNav } from "@/components/main-nav"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "라크네 사진관",
  description: "품격 있는 사진 서비스를 제공하는 라크네 사진관입니다.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <div className="h-8 w-8 overflow-hidden rounded-sm">
                    <Image src="/images/logo.png" alt="라크네 사진관 로고" width={32} height={32} />
                  </div>
                  <span className="text-lg font-semibold">라크네 사진관</span>
                </Link>
                <MainNav />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Button asChild size="sm" className="hidden md:flex">
                    <Link href="/contact">문의하기</Link>
                  </Button>
                  <MobileNav />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="w-full border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2025 라크네 사진관. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
                    개인정보처리방침
                  </Link>
                  <Link href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
                    이용약관
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
