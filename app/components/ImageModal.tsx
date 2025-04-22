import React from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null;
}

export default function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl w-full h-full p-4 flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          aria-label="닫기"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 이미지 */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>

        {/* 이미지 정보 */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white text-2xl font-bold mb-2">{image.title}</h3>
          <p className="text-white/90 text-lg">{image.description}</p>
        </div>
      </div>
    </div>
  );
} 