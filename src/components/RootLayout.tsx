import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import StructuredData from '@/components/StructuredData';

type RootLayoutProps = {
  children: ReactNode;
  messages: Record<string, unknown>;
  locale: string;
};

export default function RootLayout({
  children,
  messages,
  locale,
}: RootLayoutProps) {
  return (
    <html lang={locale} className={GeistSans.variable}>
      <body className={GeistSans.className}>
        <StructuredData locale={locale} />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
