'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

type Locale = 'en' | 'fa';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dir: 'ltr' | 'rtl';
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem('pg-locale') as Locale | null;
  if (stored && ['en', 'fa'].includes(stored)) return stored;
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('fa')) return 'fa';
  return 'en';
}

export function LanguageProvider({ children, initialLocale = 'en' }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const dir = locale === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
    localStorage.setItem('pg-locale', locale);
    document.cookie = `pg-locale=${locale};path=/;max-age=31536000`;
  }, [locale, mounted]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    const url = new URL(window.location.href);
    const segments = url.pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'fa') {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    window.location.href = segments.join('/') + url.search;
  }, []);

  const value: LanguageContextType = {
    locale,
    setLocale,
    dir: locale === 'fa' ? 'rtl' : 'ltr',
    isRtl: locale === 'fa',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { locale: 'en' as Locale, setLocale: () => {}, dir: 'ltr' as const, isRtl: false };
  }
  return context;
}
