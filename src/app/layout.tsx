import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import QueryProvider from '@/components/QueryProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: 'Persian Gooners | Arsenal Fan Community',
    template: '%s | Persian Gooners',
  },
  description:
    'The home of Persian Arsenal supporters featuring news, history, legends, squad information, and fan stories.',
  keywords: [
    'Arsenal',
    'Persian Gooners',
    'Iran',
    'Gooners',
    'Arsenal FC',
    'Premier League',
    'Fan Community',
    'Persian Arsenal',
    'Gooner',
    'Football',
  ],
  authors: [{ name: 'Arman Soleimany' }],
  creator: 'Arman Soleimany',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fa_IR',
    siteName: 'Persian Gooners',
    title: 'Persian Gooners | Arsenal Fan Community',
    description:
      'The home of Persian Arsenal supporters featuring news, history, legends, squad information, and fan stories.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Persian Gooners - Arsenal Fan Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Persian Gooners | Arsenal Fan Community',
    description:
      'The home of Persian Arsenal supporters featuring news, history, legends, squad information, and fan stories.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Persian Gooners',
              description:
                'The home of Persian Arsenal supporters featuring news, history, legends, squad information, and fan stories.',
              url: 'https://persian-gooners.com',
              inLanguage: ['en', 'fa'],
              publisher: {
                '@type': 'Organization',
                name: 'Persian Gooners',
                logo: {
                  '@type': 'ImageObject',
                  url: '/logo.png',
                },
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
          <QueryProvider>
            <LanguageProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </LanguageProvider>
          </QueryProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
