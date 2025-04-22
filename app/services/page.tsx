'use client';
import React from 'react';
import ContactInfo from '../components/ContactInfo';

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">서비스 안내</h1>
        
        <div className="space-y-12">
          {/* 일반 포토샵 작업 섹션 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <span>📋</span>
              <span>일반 포토샵 작업</span>
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">기본 보정 – 5,000원</h3>
                <ul className="list-inside space-y-2 text-gray-700">
                  <li>▪ 피부 잡티 제거, 뽀샤시 효과</li>
                  <li>▪ 밝기 / 색감 / 대비 조정</li>
                  <li>▪ 간단한 주름 제거</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">고급 편집 – 10,000원</h3>
                <ul className="list-inside space-y-2 text-gray-700">
                  <li>▪ 얼굴형, 체형 슬림 보정</li>
                  <li>▪ 눈, 코, 턱선 비율 조정</li>
                  <li>▪ 헤어라인 정리</li>
                  <li>▪ 배경 정리, 단순 물체 제거</li>
                  <li>▪ 의상 및 배경 컬러 변경</li>
                  <li>▪ 머리카락, 눈동자 색상 변경</li>
                  <li>▪ 옷 주름 제거 및 정장 합성</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">합성 작업 – 15,000원</h3>
                <ul className="list-inside space-y-2 text-gray-700">
                  <li>▪ 배경 합성 (스튜디오 느낌, 풍경 등)</li>
                  <li>▪ 인물 합성 (여러 컷 합쳐 하나로)</li>
                  <li>▪ 얼굴 교체, 표정 교체</li>
                </ul>
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>※ 사진 난이도 및 요청 내용에 따라 추가 요금이 발생할 수 있습니다.</p>
                <p>※ 작업 전 상담 후 최종 견적 안내드립니다.</p>
              </div>
            </div>
          </section>

          {/* 영정사진 보정 및 액자 가격 섹션 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <span>📋</span>
              <span>영정사진 보정 및 액자 가격</span>
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">영정사진 보정 (기존 사진 리터칭) – 20,000원</h3>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">사진 합성 (일반 사진 → 영정사진화) – 40,000원</h3>
              </div>
            </div>
          </section>

          {/* 액자 포함 패키지 섹션 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <span>📦</span>
              <span>액자 포함 패키지</span>
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">8인치 액자 포함 – 120,000원</h3>
                <p className="text-gray-700">(사진 편집 + 8인치 사진 인화 + 액자)</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">11인치 액자 포함 – 150,000원</h3>
                <p className="text-gray-700">(사진 편집 + 11인치 사진 인화 + 액자)</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">8/11인치 액자 포함 – 180,000원</h3>
                <p className="text-gray-700">(사진 편집 + 8/11인치 사진 인화 + 액자)</p>
              </div>
            </div>
          </section>

          {/* 사진 촬영 섹션 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <span>📋</span>
              <span>사진 촬영</span>
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">증명사진 촬영 – 25,000원</h3>
                <p className="text-gray-700">(9장 인화 및 파일 제공)</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">프로필 사진 촬영 – 100,000원</h3>
                <p className="text-gray-700">(30분 촬영 보정본3장 제공 및 파일 제공)</p>
              </div>
            </div>
          </section>

          {/* 사진 인화 섹션 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <span>📋</span>
              <span>사진 인화</span>
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">4x6</h3>
                  <p className="text-gray-700">1,000원</p>
                </div>
                <div>
                  <h3 className="font-semibold">5x7</h3>
                  <p className="text-gray-700">2,000원</p>
                </div>
                <div>
                  <h3 className="font-semibold">8x10</h3>
                  <p className="text-gray-700">10,000원</p>
                </div>
                <div>
                  <h3 className="font-semibold">11x14</h3>
                  <p className="text-gray-700">15,000원</p>
                </div>
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