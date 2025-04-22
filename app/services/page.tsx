'use client';
import React from 'react';
import ContactInfo from '../components/ContactInfo';

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">서비스 안내</h1>
        
        <div className="space-y-12">
          {/* 촬영 서비스 */}
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">촬영 서비스</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                자연스러운 표정과 포즈를 담아내는 인물 사진 촬영 서비스를 제공합니다.
                편안한 분위기 속에서 고객님의 가장 아름다운 모습을 담아드립니다.
              </p>
              <ul className="list-disc list-inside space-y-4 ml-4">
                <li>인물 사진 촬영</li>
                <li>프로필 사진 촬영</li>
                <li>가족 사진 촬영</li>
                <li>커플 사진 촬영</li>
              </ul>
            </div>
          </section>

          {/* 보정 서비스 */}
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">보정 서비스</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                자연스러운 보정으로 더욱 돋보이는 사진을 만들어드립니다.
                과도한 보정 없이 본연의 매력을 살리는 것을 중요하게 생각합니다.
              </p>
              <ul className="list-disc list-inside space-y-4 ml-4">
                <li>피부 톤 보정</li>
                <li>색감 보정</li>
                <li>분위기 보정</li>
                <li>특수 효과 보정</li>
              </ul>
            </div>
          </section>

          {/* 가격 안내 */}
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">가격 안내</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="grid gap-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium">기본 촬영 (30분)</span>
                  <span>50,000원</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium">프리미엄 촬영 (1시간)</span>
                  <span>100,000원</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium">기본 보정 (장당)</span>
                  <span>10,000원</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium">프리미엄 보정 (장당)</span>
                  <span>20,000원</span>
                </div>
              </div>
              <p className="text-gray-500 mt-4">
                * 상세한 가격은 상담을 통해 안내해 드립니다.
              </p>
            </div>
          </section>

          {/* 예약 안내 */}
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">예약 안내</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                촬영은 예약제로 진행됩니다. 아래 연락처로 문의해 주시면 상세한 안내를 도와드리겠습니다.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <p className="font-medium">예약 및 문의</p>
                <p>전화: 010-1234-5678</p>
                <p>이메일: contact@larkstudio.com</p>
                <p>카카오톡: @larkstudio</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 연락처 정보 */}
      <ContactInfo />
    </main>
  );
} 