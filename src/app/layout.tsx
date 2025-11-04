import type { Metadata } from 'next';
import '../theme.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'To-Doリスト',
  description: 'Next.js + TypeScript + Storybookで構築されたTodoアプリケーション',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
