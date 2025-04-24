'use client';
import React from 'react';
import Image from 'next/image';

const galleryItems = [
  { id: 1, image: 'portrait1-static.jpg', title: '인물 보정' },
  { id: 2, image: 'portrait2-static.jpg', title: '영정사진' },
  { id: 3, image: 'portrait3-static.jpg', title: '프로필' },
  { id: 4, image: 'portrait4-static.jpg', title: '인물 보정' },
  { id: 5, image: 'portrait5-static.jpg', title: '프로필' },
  { id: 6, image: 'portrait6-static.jpg', title: '영정사진' },
  { id: 7, image: 'portrait7-static.jpg', title: '인물 보정' },
  { id: 8, image: 'portrait8-static.jpg', title: '프로필' },
  { id: 9, image: 'portrait9-static.jpg', title: '영정사진' },
  { id: 10, image: 'portrait10-static.jpg', title: '인물 보정' },
  { id: 11, image: 'portrait11-static.jpg', title: '프로필' },
  { id: 12, image: 'portrait12-static.jpg', title: '인물 보정' },
  { id: 13, image: 'portrait13-static.jpg', title: '프로필' },
  { id: 14, image: 'portrait14-static.jpg', title: '영정사진' },
  { id: 15, image: 'portrait15-static.jpg', title: '인물 보정' },
  { id: 16, image: 'portrait16-static.jpg', title: '프로필' },
  { id: 17, image: 'portrait17-static.jpg', title: '영정사진' },
  { id: 18, image: 'portrait18-static.jpg', title: '인물 보정' },
  { id: 19, image: 'portrait19-static.jpg', title: '프로필' },
  { id: 20, image: 'portrait20-static.jpg', title: '영정사진' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">작업 갤러리</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative w-full h-[400px]">
                <Image
                  src={`/Lark-Studio/images/gallery/${item.image}`}
                  alt={`갤러리 이미지 ${item.id}`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  priority={item.id <= 6}
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600">
            * 마우스를 올리면 이미지가 확대됩니다.
          </p>
        </div>
      </div>
    </div>
  );
} 