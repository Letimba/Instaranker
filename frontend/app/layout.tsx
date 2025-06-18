import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './../styles/globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InstaRanker',
  description: 'Top Instagram Profile Rankings & Analytics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  );
}
