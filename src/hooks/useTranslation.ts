'use client';

import { useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/messages/en.json';
import fa from '@/messages/fa.json';

const messages: Record<string, typeof en> = { en, fa };

function getNestedValue(obj: Record<string, any>, path: string): string {
  const keys = path.split('.');
  let current: any = obj;
  for (const key of keys) {
    if (current === undefined || current === null) return path;
    current = current[key];
  }
  return typeof current === 'string' ? current : path;
}

export function useTranslation() {
  const { locale } = useLanguage();

  const t = useCallback(
    (key: string, fallback?: string): string => {
      const msgs = messages[locale] || messages.en;
      return getNestedValue(msgs as Record<string, any>, key) || fallback || key;
    },
    [locale]
  );

  return { t, locale };
}
