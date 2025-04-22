'use client';
import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">소개</h1>
        
        {/* 소개 섹션 */}
        <section className="mb-16">
          <p className="text-lg leading-relaxed mb-6">
            라크네 사진관은 2024년에 설립된 전문 사진 보정 스튜디오입니다.
            고객 한 분 한 분의 소중한 순간을 더욱 완성도 높게 기록해드리기 위해 최상의 서비스를 제공합니다.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            국내외 다양한 프로젝트 경험을 바탕으로, 전문 포토그래퍼와 리터처들이 협업하여
            차별화된 퀄리티를 완성합니다.
            특히 영정사진 보정, 프로필 사진 촬영, 오래된 사진 복원, 반려동물 사진 보정 분야에서
            탁월한 전문성과 높은 만족도를 자랑합니다.
          </p>
        </section>

        {/* 강점 섹션 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">우리의 강점</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-4">•</span>
              전문 포토그래퍼와 리터처의 체계적인 협업
            </li>
            <li className="flex items-start">
              <span className="mr-4">•</span>
              빠르고 정확한 작업 진행
            </li>
            <li className="flex items-start">
              <span className="mr-4">•</span>
              합리적이면서도 명확한 가격 정책
            </li>
            <li className="flex items-start">
              <span className="mr-4">•</span>
              고객 니즈를 반영한 맞춤형 솔루션 제공
            </li>
          </ul>
        </section>

        {/* 전문 분야 섹션 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">전문 분야</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-4">✅</span>
              영정사진 고급 보정
            </li>
            <li className="flex items-start">
              <span className="mr-4">✅</span>
              프로필 사진 촬영 및 리터칭
            </li>
            <li className="flex items-start">
              <span className="mr-4">✅</span>
              오래된 사진 디지털 복원
            </li>
            <li className="flex items-start">
              <span className="mr-4">✅</span>
              반려동물 사진 감성 보정
            </li>
          </ul>
        </section>

        {/* 마무리 섹션 */}
        <section>
          <p className="text-lg leading-relaxed text-center font-medium">
            라크네 사진관은 '완성도'와 '신뢰'를 최우선 가치로 삼습니다.<br />
            고객님의 소중한 기록을, 더욱 빛나는 형태로 남겨드립니다.
          </p>
        </section>
      </div>
    </main>
  );
} 