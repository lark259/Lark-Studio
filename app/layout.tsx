import { Inter } from 'next/font/google';
import './globals.css';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 