'use client';
import React from 'react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: '사진 보정',
      price: '5,000원~',
      description: '전문적인 사진 보정 서비스',
      features: [
        '피부 톤/잡티 보정',
        '체형 보정',
        '색감/밝기 보정',
        '배경 보정/교체'
      ],
    },
    {
      id: 2,
      title: '영정사진 리터칭',
      price: '15,000원~',
      description: '전문 영정사진 보정 서비스',
      features: [
        '자연스러운 표정 보정',
        '의상 및 배경 보정',
        '흑백/컬러 변환',
        '고품질 인화 서비스',
        '액자 제작 가능'
      ],
    },
    {
      id: 3,
      title: '손상된 사진 복원',
      price: '20,000원~',
      description: '오래되거나 손상된 사진 복원',
      features: [
        '오래된 사진 복원',
        '찢어진 사진 복구',
        '색바램/변색 보정',
        '흑백사진 복원',
        '누락된 부분 복원'
      ],
    },
    {
      id: 4,
      title: '액자 제작/판매',
      price: '10,000원~',
      description: '고급 액자 제작 및 판매',
      features: [
        '다양한 사이즈 보유',
        '고급 원목 프레임',
        '무반사 아크릴',
        '맞춤형 제작 가능',
        'UV 차단 처리'
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">서비스 및 가격</h1>
          <p className="text-xl text-gray-600">전문적인 보정 기술로 최상의 결과물을 제공합니다</p>
        </header>

        {/* 서비스 패키지 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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