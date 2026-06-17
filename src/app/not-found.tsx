'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function NotFound() {
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const getHref = (href: string) => `/${locale}${href === '/' ? '' : href}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-arsenal-darkerGray">
      <div className="max-w-md mx-auto text-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <div className="text-9xl font-bold gradient-text mb-4">404</div>
          <h1 className={`text-2xl font-bold text-gray-900 dark:text-white mb-2 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('404.title')}</h1>
          <p className={`text-gray-600 dark:text-gray-400 mb-8 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('404.description')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href={getHref('/')} className={`arsenal-btn flex items-center space-x-2 rtl:space-x-reverse ${locale === 'fa' ? 'font-persian' : ''}`}>
              <Home className="w-5 h-5" />
              <span>{t('404.goHome')}</span>
            </Link>
            <button onClick={() => window.history.back()} className={`arsenal-btn-outline flex items-center space-x-2 rtl:space-x-reverse ${locale === 'fa' ? 'font-persian' : ''}`}>
              <ArrowLeft className={`w-5 h-5 ${locale === 'fa' ? 'rotate-180' : ''}`} />
              <span>{t('404.goBack')}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
