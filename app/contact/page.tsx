'use client';
import React from 'react';
import Image from 'next/image';
import ContactInfo from '../components/ContactInfo';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">연락처</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            {/* 카카오톡 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">카카오톡</h3>
              <p className="text-gray-600">
                <a 
                  href="http://pf.kakao.com/_bEuxfn/friend" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  @라크네사진관
                </a>
              </p>
            </div>

            {/* 전화번호 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">전화번호</h3>
              <p className="text-gray-600">010-8646-3081</p>
            </div>

            {/* 이메일 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">이메일</h3>
              <p className="text-gray-600">sofu234@naver.com</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-center">
              * 빠른 상담을 원하시면 카카오톡으로 문의해주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 