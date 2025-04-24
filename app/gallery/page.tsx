'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const galleryItems = [
  { id: 1, static: 'portrait1-static.jpg', gif: 'portrait1.gif', title: '인물 보정' },
  { id: 2, static: 'portrait2-static.jpg', gif: 'portrait2.gif', title: '영정사진' },
  { id: 3, static: 'portrait3-static.jpg', gif: 'portrait3.gif', title: '프로필' },
  { id: 4, static: 'portrait4-static.jpg', gif: 'portrait4.gif', title: '인물 보정' },
  { id: 5, static: 'portrait5-static.jpg', gif: 'portrait5.gif', title: '프로필' },
  { id: 6, static: 'portrait6-static.jpg', gif: 'portrait6.gif', title: '영정사진' },
  { id: 7, static: 'portrait7-static.jpg', gif: 'portrait7.gif', title: '인물 보정' },
  { id: 8, static: 'portrait8-static.jpg', gif: 'portrait8.gif', title: '프로필' }
];

export default function GalleryPage() {
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
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">작업 갤러리</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative w-full h-[400px]">
                {isMobile ? (
                  <Image
                    src={`/Lark-Studio/images/gallery/${item.gif}`}
                    alt={`갤러리 이미지 ${item.id}`}
                    fill
                    className="object-cover"
                    priority={item.id <= 6}
                    unoptimized
                  />
                ) : (
                  <>
                    <Image
                      src={`/Lark-Studio/images/gallery/${item.static}`}
                      alt={`갤러리 이미지 ${item.id}`}
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                      priority={item.id <= 6}
                      unoptimized
                    />
                    <Image
                      src={`/Lark-Studio/images/gallery/${item.gif}`}
                      alt={`갤러리 이미지 ${item.id} (움직이는)`}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      priority={item.id <= 6}
                      unoptimized
                    />
                  </>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600">
            {isMobile ? '* 모바일에서는 자동으로 Before/After가 재생됩니다.' : '* 마우스를 올리면 Before/After를 확인하실 수 있습니다.'}
          </p>
        </div>
      </div>
    </div>
  );
} 