"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // 메뉴가 열릴 때 스크롤 방지
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  // 페이지 변경 시 메뉴 닫기
  useEffect(() => {
    closeMenu()
  }, [pathname])

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-50">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">메뉴 {isOpen ? "닫기" : "열기"}</span>
      </Button>

      {/* 모바일 메뉴 오버레이 */}
      {isOpen && <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40" onClick={closeMenu} />}

      {/* 모바일 메뉴 - 상단에서 내려오는 스타일 */}
      <div
        className={`fixed top-0 left-0 right-0 bg-background border-b p-6 transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-y-16" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-4 py-4">
          <Link href="/" className={`text-xl font-semibold ${isActive("/") ? "text-primary" : ""}`} onClick={closeMenu}>
            홈
          </Link>
          <Link
            href="/portfolio"
            className={`text-xl font-semibold ${isActive("/portfolio") ? "text-primary" : ""}`}
            onClick={closeMenu}
          >
            포트폴리오
          </Link>
          <Link
            href="/about"
            className={`text-xl font-semibold ${isActive("/about") ? "text-primary" : ""}`}
            onClick={closeMenu}
          >
            소개
          </Link>
          <Link
            href="/services"
            className={`text-xl font-semibold ${isActive("/services") ? "text-primary" : ""}`}
            onClick={closeMenu}
          >
            서비스
          </Link>
          <Link
            href="/contact"
            className={`text-xl font-semibold ${isActive("/contact") ? "text-primary" : ""}`}
            onClick={closeMenu}
          >
            연락처
          </Link>
          <div className="flex items-center justify-between mt-4">
            <Button asChild onClick={closeMenu}>
              <Link href="/contact">문의하기</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
