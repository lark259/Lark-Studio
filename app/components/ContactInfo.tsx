import React from 'react';
import Link from 'next/link';

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">연락처 안내</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">운영 시간</h3>
            <p className="text-gray-600 mb-2">평일: 오전 10:00 - 오후 7:00</p>
            <p className="text-gray-600 mb-2">토요일: 오전 10:00 - 오후 5:00</p>
            <p className="text-gray-600">(일요일/공휴일 휴무)</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">상담 문의</h3>
            <div className="space-y-3">
              <p className="text-gray-600">전화: 010-8646-3081</p>
              <p className="text-gray-600">
                카카오톡: @라크네사진관{' '}
                <Link 
                  href="http://pf.kakao.com/_bEuxfn/friend" 
                  target="_blank" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  채널 바로가기
                </Link>
              </p>
              <p className="text-gray-600">이메일: sofu234@naver.com</p>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8">
          * 빠른 상담을 원하시면 카카오톡으로 문의해주세요.
        </p>
      </div>
    </div>
  );
} 