import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Roldan Eng Software | Desenvolvimento Custom & Automação Python',
  description: 'Desenvolvedor especializado em soluções customizadas e automação Python. Transformo desafios técnicos em resultados concretos para sua empresa.',
  keywords: ['desenvolvedor', 'Python', 'automação', 'desenvolvimento web', 'Next.js'],
  authors: [{ name: 'Roldan Eng Software' }],
  openGraph: {
    title: 'Roldan Eng Software | Desenvolvimento Custom & Automação Python',
    description: 'Desenvolvedor especializado em soluções customizadas e automação Python.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}