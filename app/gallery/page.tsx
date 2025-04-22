'use client';
import React, { useState, useEffect } from 'react';
import ContactInfo from '../components/ContactInfo';

const galleryImages = [
  {
    staticSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait1-static.jpg",
    gifSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait1.gif",
    alt: "인물 사진 작업",
    title: "인물 사진 보정",
    description: "자연스러운 피부 톤과 디테일을 살린 보정"
  },
  {
    staticSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait2-static.jpg",
    gifSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait2.gif",
    alt: "흑백 인물 사진",
    title: "흑백 인물 사진",
    description: "깊이 있는 흑백 톤과 자연스러운 표정"
  },
  {
    staticSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait3-static.jpg",
    gifSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait3.gif",
    alt: "컬러 인물 사진",
    title: "컬러 인물 사진",
    description: "자연스러운 표정과 따뜻한 색감의 인물 사진"
  },
  {
    staticSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait4-static.jpg",
    gifSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait4.gif",
    alt: "인물 사진 작업",
    title: "인물 사진 작업",
    description: "자연스러운 표정과 분위기를 살린 인물 사진"
  },
  {
    staticSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait5-static.jpg",
    gifSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait5.gif",
    alt: "인물 사진 작업",
    title: "인물 사진 작업",
    description: "자연스러운 표정과 따뜻한 분위기의 인물 사진"
  },
  {
    staticSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait6-static.jpg",
    gifSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait6.gif",
    alt: "인물 사진 작업",
    title: "인물 사진 작업",
    description: "자연스러운 표정과 분위기를 살린 인물 사진"
  },
  {
    staticSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait7-static.jpg",
    gifSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait7-static.gif",
    alt: "인물 사진 작업",
    title: "인물 사진 작업",
    description: "자연스러운 표정과 분위기를 살린 인물 사진"
  },
  {
    staticSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait8-static.jpg",
    gifSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait8-static.gif",
    alt: "인물 사진 작업",
    title: "인물 사진 작업",
    description: "자연스러운 표정과 분위기를 살린 인물 사진"
  },
  {
    staticSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait9-static.jpg",
    gifSrc: "https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait9-static.gif",
    alt: "인물 사진 작업",
    title: "인물 사진 작업",
    description: "자연스러운 표정과 분위기를 살린 인물 사진"
  }
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">갤러리</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            >
              <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={isMobile ? image.gifSrc : (hoveredIndex === index ? image.gifSrc : image.staticSrc)}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                  <p className="text-white/90 text-sm mt-1">{image.description}</p>
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