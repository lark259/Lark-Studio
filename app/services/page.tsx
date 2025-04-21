'use client';
import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">서비스 및 가격 안내</h1>
        
        {/* 일반 포토샵 작업 */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">📸 일반 포토샵 작업</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">기본 보정</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">5,000원</p>
              <ul className="text-gray-600 space-y-2">
                <li>• 피부 잡티 제거, 뽀샤시 효과</li>
                <li>• 밝기 / 색감 / 대비 조정</li>
                <li>• 간단한 주름 제거</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">고급 편집</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">10,000원</p>
              <ul className="text-gray-600 space-y-2">
                <li>• 얼굴형, 체형 슬림 보정</li>
                <li>• 눈, 코, 턱선 비율 조정</li>
                <li>• 헤어라인 정리</li>
                <li>• 배경 정리, 단순 물체 제거</li>
                <li>• 의상 및 배경 컬러 변경</li>
                <li>• 머리카락, 눈동자 색상 변경</li>
                <li>• 옷 주름 제거 및 정장 합성</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">합성 작업</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">15,000원</p>
              <ul className="text-gray-600 space-y-2">
                <li>• 배경 합성 (스튜디오, 풍경)</li>
                <li>• 인물 합성 (여러 컷 합치기)</li>
                <li>• 얼굴 교체, 표정 교체</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ※ 사진 난이도 및 요청 내용에 따라 추가 요금이 발생할 수 있습니다.<br />
            ※ 작업 전 상담 후 최종 견적 안내드립니다.
          </p>
        </div>

        {/* 영정사진 보정 및 액자 */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">📋 영정사진 보정 및 액자</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">영정사진 보정</h3>
              <ul className="text-gray-600 space-y-4">
                <li className="flex justify-between items-center">
                  <span>기존 사진 리터칭</span>
                  <span className="font-bold text-blue-600">20,000원</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>일반 사진 → 영정사진화</span>
                  <span className="font-bold text-blue-600">40,000원</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">액자 포함 패키지</h3>
              <ul className="text-gray-600 space-y-4">
                <li className="flex justify-between items-center">
                  <span>8인치 액자 포함</span>
                  <span className="font-bold text-blue-600">120,000원</span>
                </li>
                <li className="text-sm text-gray-500">(사진 편집 + 8인치 사진 인화 + 액자)</li>
                <li className="flex justify-between items-center">
                  <span>11인치 액자 포함</span>
                  <span className="font-bold text-blue-600">150,000원</span>
                </li>
                <li className="text-sm text-gray-500">(사진 편집 + 11인치 사진 인화 + 액자)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 사진 촬영 */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">📋 사진 촬영</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">증명사진 촬영</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">25,000원</p>
              <p className="text-gray-600">9장 인화 및 파일 제공</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">프로필 사진 촬영</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">100,000원</p>
              <p className="text-gray-600">8인치 사진 1장 제공 및 파일 제공</p>
            </div>
          </div>
        </div>

        {/* 사진 인화 */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">📋 사진 인화</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h3 className="font-semibold text-gray-900 mb-2">4x6</h3>
              <p className="text-xl font-bold text-blue-600">1,000원</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h3 className="font-semibold text-gray-900 mb-2">5x7</h3>
              <p className="text-xl font-bold text-blue-600">2,000원</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h3 className="font-semibold text-gray-900 mb-2">8x10</h3>
              <p className="text-xl font-bold text-blue-600">10,000원</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h3 className="font-semibold text-gray-900 mb-2">11x14</h3>
              <p className="text-xl font-bold text-blue-600">15,000원</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 