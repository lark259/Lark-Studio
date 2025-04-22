'use client';
import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">문의하기</h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 연락처 정보 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">연락처 정보</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">전화</h3>
                      <p className="text-gray-600">010-8646-3081</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">이메일</h3>
                      <p className="text-gray-600">sofu234@naver.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">주소</h3>
                      <p className="text-gray-600">경기도 수원시 장안구 율전동 182-13 라크네 사진관</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 카카오톡 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">영업시간</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-600">평일</span>
                    <span className="text-gray-900">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">토요일</span>
                    <span className="text-gray-900">10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">일요일/공휴일</span>
                    <span className="text-gray-900">예약제</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">카카오톡 문의</h3>
                  <p className="text-gray-600 mb-4">@라크네 사진관</p>
                  <Image
                    src="/qr-code.png"
                    alt="카카오톡 QR 코드"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* 주의사항 */}
            <div className="mt-12 bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">주의사항</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 모든 작업은 선결제 후 진행됩니다.</li>
                <li>• 작업 시간은 작업량에 따라 달라질 수 있습니다.</li>
                <li>• 이미지는 작업 샘플로 활용될 수 있습니다.</li>
                <li>• 공휴일 작업은 사전 예약이 필요합니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 