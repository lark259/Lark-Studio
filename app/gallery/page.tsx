'use client';
import React from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, src: '/gallery/before1.jpg', alt: '보정 전', type: '보정 전' },
    { id: 2, src: '/gallery/after1.jpg', alt: '보정 후', type: '보정 후' },
    { id: 3, src: '/gallery/before2.jpg', alt: '복원 전', type: '보정 전' },
    { id: 4, src: '/gallery/after2.jpg', alt: '복원 후', type: '보정 후' },
    { id: 5, src: '/gallery/before3.jpg', alt: '영정사진 전', type: '보정 전' },
    { id: 6, src: '/gallery/after3.jpg', alt: '영정사진 후', type: '보정 후' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">갤러리</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative group">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 