import { LanguageProvider } from '@/contexts/LanguageContext';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fa' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <LanguageProvider initialLocale="en">
      {children}
    </LanguageProvider>
  );
}
