import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marvel NeuralMed',
  description:
    'Project created by Maria Eduarda Furtado. The idea of the project was projected by the company called NeuralMed with the goal to challenge me to a position.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-spider-man-head.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
