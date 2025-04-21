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
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="라크네 사진관 로고"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">라크네 사진관</span>
            </Link>
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
                <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">소개</a>
                <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">서비스</a>
                <a href="#gallery" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">갤러리</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">문의</a>
              </div>
            </div>
          </div>
          {/* 모바일 메뉴 */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">소개</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">서비스</a>
              <a href="#gallery" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">갤러리</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">문의</a>
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
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">라크네 사진관</h1>
          <p className="text-xl md:text-2xl">당신의 소중한 순간을 더욱 아름답게</p>
        </div>
      </header>

      {/* 소개 섹션 */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">소개</h2>
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
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">서비스 및 가격 안내</h2>
          
          {/* 일반 포토샵 작업 */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">📸 일반 포토샵 작업</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">기본 보정</h4>
                <p className="text-2xl font-bold text-blue-600 mb-4">5,000원</p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• 피부 잡티 제거, 뽀샤시 효과</li>
                  <li>• 밝기 / 색감 / 대비 조정</li>
                  <li>• 간단한 주름 제거</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">고급 편집</h4>
                <p className="text-2xl font-bold text-blue-600 mb-4">10,000원</p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• 얼굴형, 체형 슬림 보정</li>
                  <li>• 눈, 코, 턱선 비율 조정</li>
                  <li>• 헤어라인 정리</li>
                  <li>• 배경 정리, 단순 물체 제거</li>
                  <li>• 의상 및 배경 컬러 변경</li>
                  <li>• 머리카락, 눈동자 색상 변경</li>
                  <li>• 옷 주름 제거 및 정장 합성</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">합성 작업</h4>
                <p className="text-2xl font-bold text-blue-600 mb-4">15,000원</p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• 배경 합성 (스튜디오, 풍경)</li>
                  <li>• 인물 합성 (여러 컷 합치기)</li>
                  <li>• 얼굴 교체, 표정 교체</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              ※ 사진 난이도 및 요청 내용에 따라 추가 요금이 발생할 수 있습니다.<br />
              ※ 작업 전 상담 후 최종 견적 안내드립니다.
            </p>
          </div>

          {/* 영정사진 보정 및 액자 */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">📋 영정사진 보정 및 액자</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">영정사진 보정</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-4">
                  <li className="flex justify-between items-center">
                    <span>기존 사진 리터칭</span>
                    <span className="font-bold text-blue-600">20,000원</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>일반 사진 → 영정사진화</span>
                    <span className="font-bold text-blue-600">40,000원</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">액자 포함 패키지</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-4">
                  <li className="flex justify-between items-center">
                    <span>8인치 액자 포함</span>
                    <span className="font-bold text-blue-600">120,000원</span>
                  </li>
                  <li className="text-sm text-gray-500">(사진 편집 + 8인치 사진 인화 + 액자)</li>
                  <li className="flex justify-between items-center">
                    <span>11인치 액자 포함</span>
                    <span className="font-bold text-blue-600">150,000원</span>
                  </li>
                  <li className="text-sm text-gray-500">(사진 편집 + 11인치 사진 인화 + 액자)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 사진 촬영 */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">📋 사진 촬영</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">증명사진 촬영</h4>
                <p className="text-2xl font-bold text-blue-600 mb-2">25,000원</p>
                <p className="text-gray-600 dark:text-gray-300">9장 인화 및 파일 제공</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">프로필 사진 촬영</h4>
                <p className="text-2xl font-bold text-blue-600 mb-2">100,000원</p>
                <p className="text-gray-600 dark:text-gray-300">8인치 사진 1장 제공 및 파일 제공</p>
              </div>
            </div>
          </div>

          {/* 사진 인화 */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">📋 사진 인화</h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">4x6</h4>
                <p className="text-xl font-bold text-blue-600">1,000원</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">5x7</h4>
                <p className="text-xl font-bold text-blue-600">2,000원</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">8x10</h4>
                <p className="text-xl font-bold text-blue-600">10,000원</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">11x14</h4>
                <p className="text-xl font-bold text-blue-600">15,000원</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 갤러리 섹션 */}
      <section id="gallery" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">갤러리</h2>
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
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">문의하기</h2>
          <div className="max-w-lg mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex flex-col space-y-4">
                <p className="text-gray-600 dark:text-gray-300">📞 전화: 010-8646-3081</p>
                <p className="text-gray-600 dark:text-gray-300">📱 카카오톡: @라크네 사진관</p>
                <p className="text-gray-600 dark:text-gray-300">📧 이메일: sofu234@naver.com</p>
                <p className="text-gray-600 dark:text-gray-300">📍 주소: 경기도 수원시 장안구 율전동 182-13 라크네 사진관</p>
              </div>
              <div className="mt-8">
                <p className="text-gray-600 dark:text-gray-300 mb-4">카카오톡으로 편하게 문의해주세요</p>
                <Image
                  src="/qr-code.png"
                  alt="카카오톡 QR 코드"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2024 라크네 사진관. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">✔ 이미지는 작업 샘플로 활용될 수 있습니다.</p>
          <p className="text-sm text-gray-500">✔ 모든 작업은 선결제 후 진행됩니다.</p>
        </div>
      </footer>
    </main>
  );
} 