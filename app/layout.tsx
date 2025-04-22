import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import ConsultButton from './components/ConsultButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '라크네 사진관',
  description: '자연스러운 표정과 포즈를 담아내는 인물 사진 전문 스튜디오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
        <ConsultButton />
      </body>
    </html>
  );
} 