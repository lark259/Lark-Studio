'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 mr-2">
              <svg
                viewBox="0 0 40 40"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 20C8 20 15 10 20 10C25 10 32 20 32 20C32 20 25 30 20 30C15 30 8 20 8 20Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 15L12 12M25 15L28 12M15 25L12 28M25 25L28 28"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">라크네 사진관</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">소개</Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">서비스</Link>
              <Link href="/gallery" className="text-gray-600 hover:text-gray-900">갤러리</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">문의</Link>
            </div>
          </div>
        </div>
        {/* 모바일 메뉴 */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
          <div className="flex flex-col space-y-4">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">소개</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">서비스</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-gray-900">갤러리</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">문의</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 