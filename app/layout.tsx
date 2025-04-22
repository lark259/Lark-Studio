import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import ConsultButton from './components/ConsultButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '라크네 사진관',
  description: '당신의 소중한 순간을 더욱 아름답게, 라크네 사진관에서 전문적인 보정 서비스를 제공합니다.',
  metadataBase: new URL('https://lark259.github.io/Lark-Studio/'),
  verification: {
    google: 'WZK1w6SS5k5-nz6OEvmx7fIVj3Dz7v5_-Kjz6FGX9gw',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-site-verification" content="WZK1w6SS5k5-nz6OEvmx7fIVj3Dz7v5_-Kjz6FGX9gw" />
      </head>
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