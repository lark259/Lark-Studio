'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactInfo from './components/ContactInfo';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          <p className="text-xl md:text-2xl mb-4">전문가의 섬세한 사진 보정</p>
          <p className="text-lg md:text-xl mb-8">당신의 소중한 사진을 더욱 빛나게</p>
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

      {/* 갤러리 미리보기 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">작업 갤러리</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative w-full h-[300px]">
                {isMobile ? (
                  <Image
                    src="/Lark-Studio/images/gallery/portrait1.gif"
                    alt="갤러리 이미지 1"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                ) : (
                  <>
                    <Image
                      src="/Lark-Studio/images/gallery/portrait1-static.jpg"
                      alt="갤러리 이미지 1"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                      priority
                      unoptimized
                    />
                    <Image
                      src="/Lark-Studio/images/gallery/portrait1.gif"
                      alt="갤러리 이미지 1 (움직이는)"
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      priority
                      unoptimized
                    />
                  </>
                )}
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative w-full h-[300px]">
                {isMobile ? (
                  <Image
                    src="/Lark-Studio/images/gallery/portrait2.gif"
                    alt="갤러리 이미지 2"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                ) : (
                  <>
                    <Image
                      src="/Lark-Studio/images/gallery/portrait2-static.jpg"
                      alt="갤러리 이미지 2"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                      priority
                      unoptimized
                    />
                    <Image
                      src="/Lark-Studio/images/gallery/portrait2.gif"
                      alt="갤러리 이미지 2 (움직이는)"
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      priority
                      unoptimized
                    />
                  </>
                )}
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative w-full h-[300px]">
                {isMobile ? (
                  <Image
                    src="/Lark-Studio/images/gallery/portrait3.gif"
                    alt="갤러리 이미지 3"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                ) : (
                  <>
                    <Image
                      src="/Lark-Studio/images/gallery/portrait3-static.jpg"
                      alt="갤러리 이미지 3"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                      priority
                      unoptimized
                    />
                    <Image
                      src="/Lark-Studio/images/gallery/portrait3.gif"
                      alt="갤러리 이미지 3 (움직이는)"
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      priority
                      unoptimized
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link 
              href="/gallery"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <span>더 많은 작업물 보기</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 작업 과정 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">작업 과정</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">1. 상담</h3>
              <p className="text-gray-600">작업 요청사항 상담 및<br />견적 안내</p>
              {/* 화살표 (데스크톱에서만 표시) */}
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-8 text-gray-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💳</span>
              </div>
              <h3 className="text-xl font-bold mb-3">2. 결제</h3>
              <p className="text-gray-600">간편하고 안전한<br />결제 진행</p>
              {/* 화살표 (데스크톱에서만 표시) */}
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-8 text-gray-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">3. 작업</h3>
              <p className="text-gray-600">전문가의 섬세한<br />보정 작업</p>
              {/* 화살표 (데스크톱에서만 표시) */}
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-8 text-gray-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-3">4. 완료</h3>
              <p className="text-gray-600">결과물 전달 및<br />피드백 반영</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>지금 상담하기</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 연락처 정보 */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">연락처 안내</h2>
          <div className="text-center space-y-3">
            <p className="text-gray-600">
              카카오톡: @라크네사진관{' '}
              <a 
                href="http://pf.kakao.com/_bEuxfn/friend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                채널 바로가기
              </a>
            </p>
            <p className="text-gray-600">이메일: sofu234@naver.com</p>
            <p className="text-gray-600">
              <a 
                href="https://forms.gle/C4VyumjL7Hn36j6U9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 underline"
              >
                <span>작업 신청서 작성하기</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </p>
          </div>
          <p className="text-center text-gray-500 mt-8">
            * 빠른 상담을 원하시면 카카오톡으로 문의해주세요.
          </p>
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