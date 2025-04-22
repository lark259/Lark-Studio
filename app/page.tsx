'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactInfo from './components/ContactInfo';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <header className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-black to-transparent"></div>
        <div className="relative z-10 text-center text-white">
          <div className="mb-8">
            <Image
              src="/Lark-Studio/images/main-logo.png"
              alt="라크네 사진관 로고"
              width={240}
              height={240}
              className="mx-auto"
              priority
              unoptimized
            />
          </div>
          <h1 className="text-8xl md:text-9xl font-bold mb-4">라크네 사진관</h1>
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

      {/* 연락처 정보 */}
      <ContactInfo />

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2024 라크네 사진관. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 