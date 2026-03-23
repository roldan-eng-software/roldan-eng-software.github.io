import type { Metadata, Viewport } from 'next'
import './globals.css'

const DOMAIN = 'https://roldan-eng-software.vercel.app/'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: 'Roldan Eng Software | Desenvolvimento Custom & Automação Python',
    template: '%s | Roldan Eng Software',
  },
  description:
    'Desenvolvedor especializado em soluções customizadas e automação Python. Transformo desafios técnicos em resultados concretos para sua empresa. Frontend Next.js, Backend Python, Automação de processos.',
  keywords: [
    'desenvolvedor Python',
    'automação Python',
    'desenvolvimento web',
    'Next.js',
    'FastAPI',
    'desenvolvedor fullstack',
    'automação de processos',
    'web scraping',
    'desenvolvimento SaaS',
    'consultoria técnica',
  ],
  authors: [{ name: 'Sandro Roldan', url: DOMAIN }],
  creator: 'Sandro Roldan',
  publisher: 'Roldan Eng Software',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: DOMAIN,
    siteName: 'Roldan Eng Software',
    title: 'Roldan Eng Software | Desenvolvimento Custom & Automação Python',
    description:
      'Desenvolvedor especializado em soluções customizadas e automação Python. Transformo desafios técnicos em resultados concretos para sua empresa.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Roldan Eng Software - Desenvolvimento Custom & Automação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roldan Eng Software | Desenvolvimento Custom & Automação Python',
    description: 'Desenvolvedor especializado em soluções customizadas e automação Python.',
    creator: '@sandro_roldan',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: DOMAIN,
    languages: {
      'pt-BR': DOMAIN,
    },
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
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Roldan Eng Software',
    description:
      'Desenvolvedor especializado em soluções customizadas e automação Python. Transformo desafios técnicos em resultados concretos.',
    url: DOMAIN,
    logo: `${DOMAIN}/og-image.svg`,
    image: `${DOMAIN}/og-image.svg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableHours: 'Mo-Fr 09:00-18:00',
    },
    priceRange: 'R$ 1.500 - R$ 15.000',
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    serviceType: [
      'Desenvolvimento Web',
      'Automação Python',
      'Desenvolvimento Fullstack',
      'Consultoria Técnica',
      'Web Scraping',
    ],
    sameAs: ['https://github.com/sandro-roldan', 'https://linkedin.com/in/sandro-roldan'],
  }

  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" hrefLang="pt-BR" href={DOMAIN} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
