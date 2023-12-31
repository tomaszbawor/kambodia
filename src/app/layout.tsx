import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { GameWrapper } from '@/app/_components/GameWrapper';

const inter = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GameWrapper>{children}</GameWrapper>
      </body>
    </html>
  );
}
