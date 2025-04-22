'use client';
import React from 'react';
import ContactInfo from '../components/ContactInfo';

export default function Gallery() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">갤러리</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group cursor-pointer">
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://raw.githubusercontent.com/lark259/Lark-Studio/main/public/images/gallery/portrait2-static.jpg"
                alt="흑백 인물 사진"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">흑백 인물 사진</h3>
                <p className="text-white/90 text-sm mt-1">깊이 있는 흑백 톤과 자연스러운 표정</p>
              </div>
            </div>
          </div>
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