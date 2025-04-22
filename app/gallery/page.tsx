'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ContactInfo from '../components/ContactInfo';

// 갤러리 이미지 데이터
const galleryImages = [
  {
    src: '/Lark-Studio/images/gallery/portrait2-static.jpg',
    alt: '흑백 인물 사진',
    title: '흑백 인물 사진',
    description: '깊이 있는 흑백 톤과 자연스러운 표정'
  }
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">갤러리</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-600">
          <p>* 이미지에 마우스를 올리면 상세한 작업 내용을 보실 수 있습니다.</p>
          <p>* 실제 작업물은 상담을 통해 더 자세히 보여드립니다.</p>
        </div>
      </div>

      {/* 연락처 정보 */}
      <ContactInfo />
    </main>
  );
} 