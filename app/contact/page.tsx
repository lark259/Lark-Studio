'use client';
import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white">연락처</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* 연락처 정보 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              {/* 카카오톡 */}
              <div className="col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">카카오톡</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <a 
                    href="http://pf.kakao.com/_bEuxfn/friend" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    @라크네사진관
                  </a>
                </p>
              </div>

              {/* 이메일 */}
              <div className="col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">이메일</h3>
                <p className="text-gray-600 dark:text-gray-300">sofu234@naver.com</p>
              </div>

              {/* 작업 신청 폼 */}
              <div className="col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">작업 신청</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <a 
                    href="https://forms.gle/C4VyumjL7Hn36j6U9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    <span>작업 신청서 작성하기</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  * 작업 요청사항과 파일을 함께 보내주세요
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-center">
                * 빠른 상담을 원하시면 카카오톡으로 문의해주세요.
              </p>
            </div>
          </div>

          {/* 고객 안내사항 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6 dark:text-white">
              <span>📢</span>
              <span>고객 안내사항</span>
            </h2>
            
            <div className="space-y-8 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">[1] 주문 및 작업 관련</h3>
                <ul className="space-y-2">
                  <li>• 주문 후 사진 파일을 보내주셔야 작업이 진행됩니다.</li>
                  <li>• 제공하신 사진은 고화질(최소 2000px 이상)을 권장합니다. 화질이 낮을 경우 결과물이 다소 저하될 수 있습니다.</li>
                  <li>• 작업 전 전달하신 사진 및 요청사항에 따라 최적의 결과물을 제공해드립니다.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">[2] 수정 및 요청사항</h3>
                <ul className="space-y-2">
                  <li>• 최초 1회 간단한 수정 요청은 무료로 지원합니다. (예: 밝기, 색감 조정 등)</li>
                  <li>• 이후 추가 수정은 별도의 비용이 발생할 수 있습니다. (수정 1회당 ₩2,000 기준)</li>
                  <li>• 고객 요청으로 인한 큰 변경사항(예: 다른 사진으로 변경 등)은 새 주문으로 간주될 수 있습니다.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">[3] 환불 정책</h3>
                <ul className="space-y-2">
                  <li>• 디지털 콘텐츠 특성상, 작업이 시작된 이후에는 환불이 불가능합니다.</li>
                  <li>• 단, 작업 전(사진 파일 제출 전)에는 100% 환불 가능합니다.</li>
                  <li>• 작업 착수 후 고객 변심에 의한 환불은 불가합니다.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">[4] 파일 및 저작권</h3>
                <ul className="space-y-2">
                  <li>• 완성된 결과물은 개인 사용을 목적으로 제공됩니다.</li>
                  <li>• 상업적 이용(광고, 재판매 등)이 필요한 경우 별도 계약이 필요합니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 