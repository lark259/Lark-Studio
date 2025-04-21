import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '라크네 사진관 | 전문 사진 보정 & 복원 서비스',
  description: '라크네 스튜디오는 전문적인 사진 보정과 복원 서비스를 제공합니다. 영정사진 리터칭부터 오래된 사진 복원까지, 당신의 소중한 순간을 더욱 아름답게 만들어드립니다.',
  keywords: ['사진 보정', '사진 복원', '영정사진', '액자 제작', '포토샵', '리터칭', '서울', '강남'],
  authors: [{ name: 'LACNE Studio' }],
  creator: 'LACNE Studio',
  publisher: 'LACNE Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '라크네 사진관 | 전문 사진 보정 & 복원 서비스',
    description: '라크네 스튜디오는 전문적인 사진 보정과 복원 서비스를 제공합니다.',
    url: 'https://lacne.com',
    siteName: '라크네 사진관',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '라크네 사진관',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'google-site-verification-code',
    naver: 'naver-site-verification-code',
  },
  alternates: {
    canonical: 'https://lacne.com',
  },
}; 