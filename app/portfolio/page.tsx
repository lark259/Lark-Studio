'use client';
import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: '웨딩 촬영',
      description: '행복한 순간을 담은 웨딩 포토',
      imageUrl: '/images/wedding.jpg',
    },
    {
      id: 2,
      title: '프로필 촬영',
      description: '전문적인 프로필 사진',
      imageUrl: '/images/profile.jpg',
    },
    {
      id: 3,
      title: '가족 촬영',
      description: '소중한 가족의 추억',
      imageUrl: '/images/family.jpg',
    },
    // 추가 포트폴리오 항목들...
  ];

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">포트폴리오</h1>
          <p className="text-xl text-gray-600">라크네 사진관의 작품들을 소개합니다</p>
        </header>

        {/* 포트폴리오 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* 이미지는 나중에 추가 */}
                <div className="w-full h-48 bg-gray-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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