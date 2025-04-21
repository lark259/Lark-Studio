'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/Lark-Studio' : '';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={`${basePath}/logo.png`}
            alt="Lacne Studio Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="ml-2 text-xl font-semibold">LACNE</span>
        </Link>
        <div className="flex space-x-4">
          <Link href="/services" className="hover:text-gray-600">Services</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
} 