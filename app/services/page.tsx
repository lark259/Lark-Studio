'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 1,
      title: '웨딩 촬영',
      description: '신랑 신부님의 아름다운 순간을 담아내는 웨딩 촬영 서비스입니다.',
      price: '500,000원~',
      includes: ['본식 스냅', '야외 촬영', '원본 파일 제공', '보정 이미지 20장'],
    },
    {
      id: 2,
      title: '프로필 촬영',
      description: '개인의 매력을 돋보이게 하는 프로필 촬영 서비스입니다.',
      price: '200,000원~',
      includes: ['스튜디오 촬영', '의상 2벌 변경', '원본 파일 제공', '보정 이미지 10장'],
    },
    {
      id: 3,
      title: '가족 촬영',
      description: '소중한 가족의 추억을 담아내는 가족 촬영 서비스입니다.',
      price: '300,000원~',
      includes: ['실내/야외 촬영', '원본 파일 제공', '보정 이미지 15장', '액자 1개'],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      {/* 서비스 소개 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">서비스 안내</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <p className="text-xl font-bold text-gray-900 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="mt-8 inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  예약 문의하기
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 문의하기 섹션 */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">문의하기</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">연락처</h3>
                <p className="text-gray-600 mb-2">전화: 02-1234-5678</p>
                <p className="text-gray-600 mb-2">이메일: info@lacne.com</p>
                <p className="text-gray-600">주소: 서울시 강남구 테헤란로 123</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">영업시간</h3>
                <p className="text-gray-600 mb-2">평일: 10:00 - 19:00</p>
                <p className="text-gray-600 mb-2">토요일: 10:00 - 17:00</p>
                <p className="text-gray-600">일요일 및 공휴일: 예약제</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 