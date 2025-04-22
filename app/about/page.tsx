'use client';
import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* 소개 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">라크네 사진관 소개</h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  라크네 사진관은 2024년에 설립된 전문 사진 보정 스튜디오입니다. 
                  우리는 고객 한 분 한 분의 소중한 순간을 더욱 아름답게 만들어드리기 위해 
                  최선을 다하고 있습니다.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  전문 포토그래퍼와 리터처들이 모여 최고의 퀄리티를 제공하며,
                  특히 영정사진과 프로필 사진 분야에서 많은 경험과 노하우를 보유하고 있습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">우리의 강점</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        전문 포토그래퍼의 섬세한 보정
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        빠른 작업 처리 시간
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        합리적인 가격
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        고객 맞춤 서비스
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">전문 분야</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        영정사진 보정
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        프로필 사진 촬영
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        웨딩 사진 보정
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        오래된 사진 복원
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 작업 과정 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">작업 과정</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">상담 및 견적</h3>
              <p className="text-gray-600">카카오톡이나 전화로 편하게 문의해주세요</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">작업 진행</h3>
              <p className="text-gray-600">전문가의 섬세한 보정 작업</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">완성 및 전달</h3>
              <p className="text-gray-600">고품질 결과물 전달</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 