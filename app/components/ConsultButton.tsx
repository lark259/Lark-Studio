'use client';
import React from 'react';

export default function ConsultButton() {
  const handleClick = () => {
    window.open('http://pf.kakao.com/_bEuxfn/friend', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center px-6 py-4 bg-[#4da6ff] hover:bg-[#66b3ff] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      aria-label="카카오톡 상담하기"
    >
      <span className="text-lg font-medium">상담하기</span>
    </button>
  );
} 