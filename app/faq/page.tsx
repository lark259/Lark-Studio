'use client';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "작업 기간은 얼마나 걸리나요?",
    answer: "기본 보정은 접수 후 1~3일 이내 완료됩니다. (작업량에 따라 변동 가능)"
  },
  {
    question: "파일은 어떻게 전달하나요?",
    answer: "사진 파일은 이메일 또는 카카오톡(오픈채팅 링크 제공)으로 보내주시면 됩니다."
  },
  {
    question: "수정 요청은 몇 번까지 가능한가요?",
    answer: "기본 1회 무료 수정이 가능합니다. (추가 수정은 별도 비용이 발생할 수 있습니다.)"
  },
  {
    question: "어떤 파일 형식을 지원하나요?",
    answer: "JPG, PNG 기본 지원 / 원본 RAW 파일도 가능합니다. (RAW 파일은 별도 추가 요금이 있을 수 있음)"
  },
  {
    question: "결과물은 어떻게 전달되나요?",
    answer: "최종 결과물은 고해상도 JPG 파일로 이메일로 보내드립니다."
  },
  {
    question: "영정사진 리터칭 시 주의사항이 있나요?",
    answer: "가능한 최신 고화질 사진을 보내주시면 더 자연스럽고 품질 높은 결과를 받을 수 있습니다."
  },
  {
    question: "반려동물 사진 보정도 가능한가요?",
    answer: "네, 가능합니다! 반려동물 특유의 표정과 분위기를 살리는 맞춤형 리터칭을 진행합니다."
  },
  {
    question: "보정 스타일을 요청할 수 있나요?",
    answer: "가능합니다. 원하시는 스타일(자연스러운 / 화사한 / 클래식 등)을 신청서 작성 시 요청해주세요."
  },
  {
    question: "급하게 받을 수도 있나요?",
    answer: "네, 긴급 작업 요청(24시간 이내)도 가능하며, 추가 요금이 발생할 수 있습니다."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white">자주 묻는 질문</h1>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">{item.question}</span>
                <span className="text-2xl text-gray-500 dark:text-gray-400">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                  <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            더 궁금하신 점이 있으시다면 카카오톡으로 문의해주세요.
          </p>
          <a
            href="http://pf.kakao.com/_bEuxfn/friend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg transition-colors"
          >
            카카오톡 문의하기
          </a>
        </div>
      </div>
    </div>
  );
} 