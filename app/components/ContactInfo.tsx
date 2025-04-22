'use client';
import React from 'react';

export default function ContactInfo() {
  return (
    <div className="bg-white mt-16">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">문의하기</h2>
        <div className="text-center space-y-4 text-lg text-gray-600">
          <p>
            <span className="font-medium">카카오톡</span>:{' '}
            <a 
              href="http://pf.kakao.com/_bEuxfn/friend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              @라크네사진관
            </a>
          </p>
          <p>
            <span className="font-medium">이메일</span>: sofu234@naver.com
          </p>
          <p>
            <span className="font-medium">전화</span>: 010-8646-3081
          </p>
        </div>
        <p className="text-center text-gray-500 mt-8">
          * 빠른 상담을 원하시면 카카오톡으로 문의해주세요.
        </p>
      </div>
    </div>
  );
} 