'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Play, Trophy, Users, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const getHref = (href: string) => `/${locale}${href === '/' ? '' : href}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-arsenal-red/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-arsenal-navy/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 ${locale === 'fa' ? 'font-persian' : ''}`}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{t('hero.tagline')}</span>
          </motion.div>

          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight ${locale === 'fa' ? 'font-persian' : ''}`}>
            {t('hero.title1')}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-arsenal-red to-arsenal-gold">
              {t('hero.title2')}
            </span>
          </h1>

          <p className={`text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed ${locale === 'fa' ? 'font-persian' : ''}`}>
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Link
              href={getHref('/news')}
              className={`arsenal-btn flex items-center space-x-2 rtl:space-x-reverse text-lg px-8 py-4 ${locale === 'fa' ? 'font-persian' : ''}`}
            >
              <span>{t('hero.latestNews')}</span>
              <ChevronRight className={`w-5 h-5 ${locale === 'fa' ? 'rotate-180' : ''}`} />
            </Link>
            <Link
              href={getHref('/history')}
              className={`arsenal-btn-outline flex items-center space-x-2 rtl:space-x-reverse text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-gray-900 ${locale === 'fa' ? 'font-persian' : ''}`}
            >
              <Play className="w-5 h-5" />
              <span>{t('hero.exploreHistory')}</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-2">
                <Trophy className="w-8 h-8 text-arsenal-gold" />
              </div>
              <div className="text-3xl font-bold text-white">49</div>
              <div className={`text-white/60 text-sm ${locale === 'fa' ? 'font-persian' : ''}`}>
                {t('hero.trophies')}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-arsenal-gold" />
              </div>
              <div className="text-3xl font-bold text-white">138</div>
              <div className={`text-white/60 text-sm ${locale === 'fa' ? 'font-persian' : ''}`}>
                {t('hero.years')}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-arsenal-gold" />
              </div>
              <div className="text-3xl font-bold text-white">∞</div>
              <div className={`text-white/60 text-sm ${locale === 'fa' ? 'font-persian' : ''}`}>
                {t('hero.passion')}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
