import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteChrome } from './SiteChrome'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Dr. Jacobo Neuman Praes | Consultor Estratégico & Autor de Esquezofrenia',
    template: '%s | Dr. Jacobo Neuman',
  },
  description:
    'Dr. Jacobo Neuman Praes, autor de "Esquezofrenia: Un manual para una nueva vida". Experto en productividad, calidad y mejora continua para empresas.',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Dr. Jacobo Neuman',
    images: [
      {
        url: '/jacobo-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jacobo Neuman Praes',
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) { 
  return (
    <html lang="es-MX" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <SiteChrome>{children}</SiteChrome>     
      </body>
    </html>
  )
}
