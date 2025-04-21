'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 섹션 */}
      <header className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">라크네 사진관</h1>
          <p className="text-xl text-gray-600">당신의 특별한 순간을 담아내는 프리미엄 포토 스튜디오</p>
        </div>
      </header>

      {/* 메인 내비게이션 */}
      <nav className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/portfolio" className="group">
              <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">포트폴리오</h2>
                <p className="text-gray-600 mb-4">라크네 사진관의 작품들을 감상해보세요</p>
                <span className="text-blue-600 group-hover:text-blue-800">자세히 보기 →</span>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">서비스 및 가격</h2>
                <p className="text-gray-600 mb-4">다양한 촬영 패키지와 가격을 확인하세요</p>
                <span className="text-blue-600 group-hover:text-blue-800">자세히 보기 →</span>
              </div>
            </Link>

            <Link href="/contact" className="group">
              <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">문의하기</h2>
                <p className="text-gray-600 mb-4">촬영 예약 및 상담을 신청하세요</p>
                <span className="text-blue-600 group-hover:text-blue-800">자세히 보기 →</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* 소개 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">라크네 사진관만의 특별함</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">전문 포토그래퍼</h3>
              <p className="text-gray-600">수년간의 경험을 가진 전문 포토그래퍼가 촬영합니다</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">최신 장비</h3>
              <p className="text-gray-600">고품질의 최신 촬영 장비로 완성도 높은 사진을 제공합니다</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">편안한 환경</h3>
              <p className="text-gray-600">편안하고 아늑한 스튜디오에서 즐거운 촬영을 경험하세요</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 