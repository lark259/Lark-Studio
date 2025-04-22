'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // 페이지 변경 시 네비게이션바 자동 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 mr-3">
              <Image
                src="/Lark-Studio/images/logo.png"
                alt="라크네 사진관 로고"
                width={48}
                height={48}
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <span className="text-2xl font-bold text-white">라크네 사진관</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white">소개</Link>
              <Link href="/services" className="text-gray-300 hover:text-white">서비스</Link>
              <Link href="/gallery" className="text-gray-300 hover:text-white">갤러리</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">문의</Link>
            </div>
          </div>
        </div>
        {/* 모바일 메뉴 */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
          <div className="flex flex-col space-y-4">
            <Link href="/about" className="text-gray-300 hover:text-white">소개</Link>
            <Link href="/services" className="text-gray-300 hover:text-white">서비스</Link>
            <Link href="/gallery" className="text-gray-300 hover:text-white">갤러리</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">문의</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 