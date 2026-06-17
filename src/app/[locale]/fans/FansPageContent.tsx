'use client';

import { motion } from 'framer-motion';
import FanCard from '@/components/FanCard';
import AudioPlayer from '@/components/AudioPlayer';
import { immortals } from '@/data/fans';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function FansPageContent() {
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const isRTL = locale === 'fa';

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isRTL ? 'font-persian' : ''}`}>
              {t('fans.title')} <span className="text-arsenal-gold">{t('fans.titleHighlight')}</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${isRTL ? 'font-persian' : ''}`}>
              {t('fans.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 bg-gradient-to-b from-arsenal-darkNavy to-white dark:to-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AudioPlayer src="/audio/north-london-forever.mp3" />
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-arsenal-gold" />
              <span className="text-arsenal-gold text-sm font-semibold uppercase tracking-[0.3em]">
                {isRTL ? 'تالار افتخار' : 'Hall of Honor'}
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-arsenal-gold" />
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 ${isRTL ? 'font-persian' : ''}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-arsenal-red via-red-600 to-arsenal-gold">
                {t('fans.immortals')}
              </span>
            </h2>

            <p className={`text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto ${isRTL ? 'font-persian' : ''}`}>
              {t('fans.immortalsSub')}
            </p>

            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-arsenal-red" />
              <div className="w-2 h-2 rounded-full bg-arsenal-gold" />
              <div className="w-2 h-2 rounded-full bg-arsenal-navy" />
            </div>
          </motion.div>

          <div className="space-y-8 lg:space-y-12">
            {immortals.map((immortal, index) => (
              <FanCard key={immortal.id} immortal={immortal} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-arsenal-navy/5 to-arsenal-red/5 dark:from-arsenal-navy/10 dark:to-arsenal-red/10 border border-gray-100 dark:border-white/5">
              <p className={`text-sm text-gray-400 dark:text-gray-500 italic ${isRTL ? 'font-persian' : ''}`}>
                {isRTL ? '«هر اسمی که اینجا ثبت شده، برای همیشه بخشی از تاریخ آرسنال است»' : '"Every name inscribed here is forever part of Arsenal\'s history"'}
              </p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="text-arsenal-red">❤️</span>
                <span className="text-arsenal-gold">🤍</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
