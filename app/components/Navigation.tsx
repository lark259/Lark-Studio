'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { basePath } from '@/lib/basePath';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/nav-logo.png"
              alt="라크네 사진관 로고"
              width={40}
              height={40}
              className="mr-2"
              unoptimized
            />
            <span className="text-2xl font-bold text-gray-900">라크네 사진관</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">소개</Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">서비스</Link>
              <Link href="/gallery" className="text-gray-600 hover:text-gray-900">갤러리</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">문의</Link>
            </div>
          </div>
        </div>
        {/* 모바일 메뉴 */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
          <div className="flex flex-col space-y-4">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">소개</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">서비스</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-gray-900">갤러리</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">문의</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 