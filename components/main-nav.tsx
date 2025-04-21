"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="hidden md:flex gap-6">
      <Link
        href="/portfolio"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isActive("/portfolio") ? "text-primary font-semibold" : "text-foreground/80"
        }`}
      >
        포트폴리오
      </Link>
      <Link
        href="/about"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isActive("/about") ? "text-primary font-semibold" : "text-foreground/80"
        }`}
      >
        소개
      </Link>
      <Link
        href="/services"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isActive("/services") ? "text-primary font-semibold" : "text-foreground/80"
        }`}
      >
        서비스
      </Link>
      <Link
        href="/contact"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isActive("/contact") ? "text-primary font-semibold" : "text-foreground/80"
        }`}
      >
        연락처
      </Link>
    </nav>
  )
}
