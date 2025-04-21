'use client';
import React from 'react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: '웨딩 패키지',
      price: '599,000원',
      description: '웨딩 촬영 2시간, 원본 파일 제공, 보정본 30장, 포토북 1권',
      features: [
        '전문 웨딩 포토그래퍼',
        '스튜디오 및 야외 촬영',
        '헤어 & 메이크업 포함',
        '고급 앨범 제작',
      ],
    },
    {
      id: 2,
      title: '프로필 패키지',
      price: '199,000원',
      description: '프로필 촬영 1시간, 원본 파일 제공, 보정본 10장',
      features: [
        '전문 프로필 포토그래퍼',
        '다양한 컨셉 연출',
        '헤어 & 메이크업 포함',
        '당일 시안 선택',
      ],
    },
    {
      id: 3,
      title: '가족 패키지',
      price: '299,000원',
      description: '가족 촬영 1.5시간, 원본 파일 제공, 보정본 20장',
      features: [
        '전문 가족사진 포토그래퍼',
        '실내/야외 촬영 선택',
        '액자 1개 제공',
        '추가 인원 가능',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">서비스 및 가격</h1>
          <p className="text-xl text-gray-600">최고의 순간을 위한 최상의 서비스를 제공합니다</p>
        </header>

        {/* 서비스 패키지 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 예약 버튼 */}
        <div className="text-center mt-12">
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            예약 문의하기
          </Link>
        </div>

        {/* 네비게이션 */}
        <nav className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← 메인으로 돌아가기
          </Link>
        </nav>
      </div>
    </main>
  );
} 