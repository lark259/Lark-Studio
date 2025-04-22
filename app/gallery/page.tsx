'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ContactInfo from '../components/ContactInfo';

// 갤러리 이미지 데이터
const galleryImages = [
  {
    src: '/Lark-Studio/images/gallery/portrait1.gif',
    alt: '인물 사진 작업',
    title: '인물 사진 보정',
    description: '자연스러운 피부 톤과 디테일을 살린 보정'
  },
  {
    src: '/Lark-Studio/images/gallery/sample2.gif',
    alt: '샘플 작업 2',
    title: '영정 사진',
    description: '고품질 영정 사진 보정'
  },
  {
    src: '/Lark-Studio/images/gallery/sample3.gif',
    alt: '샘플 작업 3',
    title: '프로필 촬영',
    description: '자연스러운 프로필 촬영'
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
                  unoptimized={hoveredIndex === index}
                  priority={index === 0}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                </div>
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