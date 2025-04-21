'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 네비게이션 바 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="라크네 사진관 로고"
                width={40}
                height={40}
                className="mr-2"
                priority
                loading="eager"
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

      {/* 헤더 섹션 */}
      <header className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-black to-transparent"></div>
        <div className="relative z-10 text-center text-white">
          <div className="mb-6">
            <Image
              src="/images/logo.png"
              alt="라크네 사진관 로고"
              width={120}
              height={120}
              className="mx-auto"
              priority
              loading="eager"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">라크네 사진관</h1>
          <p className="text-xl md:text-2xl mb-8">당신의 소중한 순간을 더욱 아름답게</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              서비스 보기
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              문의하기
            </Link>
          </div>
        </div>
      </header>

      {/* 서비스 미리보기 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">주요 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">사진 보정</h3>
              <p className="text-gray-600 mb-6">전문가의 섬세한 보정으로 더욱 아름답게</p>
              <Link href="/services" className="text-blue-600 hover:text-blue-800">자세히 보기 →</Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">영정사진</h3>
              <p className="text-gray-600 mb-6">고품질 영정사진 제작 및 보정</p>
              <Link href="/services" className="text-blue-600 hover:text-blue-800">자세히 보기 →</Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">프로필 촬영</h3>
              <p className="text-gray-600 mb-6">당신의 매력을 돋보이게 하는 프로필</p>
              <Link href="/services" className="text-blue-600 hover:text-blue-800">자세히 보기 →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2024 라크네 사진관. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 