/** @jsxImportSource react */
import type { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 섹션 */}
      <header className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">라크네 사진관</h1>
          <p className="text-xl text-gray-600">전문적인 사진 보정 & 복원 서비스</p>
        </div>
      </header>

      {/* 메인 서비스 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">전문 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">사진 보정</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">5,000원~</p>
              <ul className="text-gray-600 space-y-2">
                <li>• 피부 보정</li>
                <li>• 색감 보정</li>
                <li>• 체형 보정</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">영정사진 리터칭</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">15,000원~</p>
              <ul className="text-gray-600 space-y-2">
                <li>• 표정 자연스럽게 보정</li>
                <li>• 의상 및 배경 보정</li>
                <li>• 고품질 인화 서비스</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">손상된 사진 복원</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">20,000원~</p>
              <ul className="text-gray-600 space-y-2">
                <li>• 오래된 사진 복원</li>
                <li>• 찢어진 사진 복구</li>
                <li>• 색바램 보정</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">액자 판매</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">10,000원~</p>
              <ul className="text-gray-600 space-y-2">
                <li>• 다양한 사이즈</li>
                <li>• 고급 원목 프레임</li>
                <li>• 맞춤형 제작</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 인화 서비스 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">사진 인화</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">4X6</h3>
              <p className="text-blue-600 font-bold">1,000원</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">5X7</h3>
              <p className="text-blue-600 font-bold">2,000원</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">8X10</h3>
              <p className="text-blue-600 font-bold">10,000원</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">11X14</h3>
              <p className="text-blue-600 font-bold">15,000원</p>
            </div>
          </div>
        </div>
      </section>

      {/* 문의하기 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">문의하기</h2>
          <p className="text-xl text-gray-600 mb-8">카카오톡으로 편리하게 문의하세요</p>
          <div className="max-w-xs mx-auto">
            <Image
              src="/qr-code.png"
              alt="카카오톡 QR 코드"
              width={256}
              height={256}
              className="w-full mb-4"
            />
            <p className="text-gray-600">QR코드를 스캔해 주세요</p>
          </div>
        </div>
      </section>

      {/* 연락처 정보 */}
      <footer className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-2">📞 전화: 02-1234-5678</p>
          <p className="text-gray-600 mb-2">📧 이메일: info@larkstudio.com</p>
          <p className="text-gray-600">📍 주소: 서울특별시 강남구 테헤란로 123</p>
        </div>
      </footer>
    </main>
  );
} 