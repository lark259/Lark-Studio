'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './components/theme-toggle';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const galleryImages = [
    { id: 1, src: '/gallery/before1.jpg', alt: '보정 전', type: '보정 전' },
    { id: 2, src: '/gallery/after1.jpg', alt: '보정 후', type: '보정 후' },
    { id: 3, src: '/gallery/before2.jpg', alt: '복원 전', type: '보정 전' },
    { id: 4, src: '/gallery/after2.jpg', alt: '복원 후', type: '보정 후' },
    { id: 5, src: '/gallery/before3.jpg', alt: '영정사진 전', type: '보정 전' },
    { id: 6, src: '/gallery/after3.jpg', alt: '영정사진 후', type: '보정 후' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 네비게이션 바 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">LACNE</Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
                aria-label="메뉴 열기"
              >
                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
                <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Services</a>
                <a href="#gallery" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Gallery</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
              </div>
            </div>
          </div>
          {/* 모바일 메뉴 */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Services</a>
              <a href="#gallery" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 헤더 섹션 */}
      <header className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-black to-transparent"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">LACNE</h1>
          <p className="text-xl md:text-2xl">Professional Photo Retouching Studio</p>
        </div>
      </header>

      {/* 소개 섹션 */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              라크네 스튜디오는 전문적인 사진 보정과 복원 서비스를 제공합니다. 
              영정사진 리터칭부터 오래된 사진 복원까지, 당신의 소중한 순간을 더욱 아름답게 만들어드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">사진 보정</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">전문적인 사진 보정 서비스를 제공합니다.</p>
              <p className="text-2xl font-bold text-blue-600">5,000원~</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">영정사진</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">자연스럽고 품격 있는 영정사진 리터칭</p>
              <p className="text-2xl font-bold text-blue-600">15,000원~</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">사진 복원</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">오래되거나 손상된 사진을 복원합니다.</p>
              <p className="text-2xl font-bold text-blue-600">20,000원~</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">액자 제작</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">고급 원목 프레임의 맞춤형 액자</p>
              <p className="text-2xl font-bold text-blue-600">10,000원~</p>
            </div>
          </div>
        </div>
      </section>

      {/* 갤러리 섹션 */}
      <section id="gallery" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{image.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 작업 과정 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Work Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">상담 및 견적</h3>
              <p className="text-gray-600 dark:text-gray-300">카카오톡이나 전화로 편하게 문의해주세요</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">작업 진행</h3>
              <p className="text-gray-600 dark:text-gray-300">전문가의 섬세한 보정 작업</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">완성 및 전달</h3>
              <p className="text-gray-600 dark:text-gray-300">고품질 결과물 전달</p>
            </div>
          </div>
        </div>
      </section>

      {/* 문의하기 */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h2>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col space-y-4">
                <p className="text-gray-600 dark:text-gray-300">📞 전화: 02-1234-5678</p>
                <p className="text-gray-600 dark:text-gray-300">📱 카카오톡: @lacne</p>
                <p className="text-gray-600 dark:text-gray-300">📧 이메일: info@lacne.com</p>
                <p className="text-gray-600 dark:text-gray-300">📍 주소: 서울특별시 강남구 테헤란로 123</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2024 LACNE Studio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 