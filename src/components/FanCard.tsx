'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';
import { Immortal } from '@/data/fans';

interface FanCardProps {
  immortal: Immortal;
  index?: number;
}

export default function FanCard({ immortal, index = 0 }: FanCardProps) {
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const isRTL = locale === 'fa';
  const isMural = immortal.type === 'mural';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-gray-50 dark:from-arsenal-darkerGray dark:via-arsenal-darkNavy/30 dark:to-arsenal-darkerGray border border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-arsenal-red/10 dark:hover:shadow-arsenal-red/20 transition-all duration-500 hover:-translate-y-2">
        <div className={`flex flex-col ${isMural ? 'lg:flex-row' : 'lg:flex-row'} ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

          <div className={`relative overflow-hidden ${isMural ? 'lg:w-1/2' : 'lg:w-2/5'} min-h-[280px] lg:min-h-[420px]`}>
            <Image
              src={immortal.photo}
              alt={isRTL ? immortal.nameFa : immortal.nameEn}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              className="absolute top-4 left-4 lg:top-6 lg:left-6"
            >
              <div className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-gradient-to-r from-arsenal-gold via-amber-500 to-arsenal-gold
                text-white font-bold text-xs sm:text-sm tracking-wide
                shadow-lg shadow-arsenal-gold/30
                backdrop-blur-sm
                ${isRTL ? 'font-persian' : ''}
              `}>
                <span className="text-base">👑</span>
                <span>{t('fans.immortalBadge')}</span>
              </div>
            </motion.div>
          </div>

          <div className={`flex flex-col justify-center ${isMural ? 'lg:w-1/2' : 'lg:w-3/5'} p-6 sm:p-8 lg:p-10 ${isRTL ? 'lg:pl-0 lg:pr-12' : 'lg:pl-12 lg:pr-10'}`}>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
            >
              <h3 className={`
                text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2
                bg-clip-text text-transparent bg-gradient-to-r from-arsenal-red via-red-600 to-arsenal-red
                ${isRTL ? 'font-persian' : ''}
              `}>
                {isRTL ? immortal.nameFa : immortal.nameEn}
              </h3>

              <div className="w-16 h-1 bg-gradient-to-r from-arsenal-gold to-amber-400 rounded-full mb-5" />

              {isMural ? (
                <p className={`
                  text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed
                  italic border-l-2 border-arsenal-gold/50 pl-4
                  ${isRTL ? 'font-persian border-l-0 border-r-2 pr-4 pl-0' : ''}
                `}>
                  {isRTL ? immortal.muralDescriptionFa : immortal.muralDescriptionEn}
                </p>
              ) : (
                <p className={`
                  text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed
                  ${isRTL ? 'font-persian' : ''}
                `}>
                  {t('fans.legacyMessage')}
                </p>
              )}

              <div className={`
                flex items-center gap-3 mt-6
                ${isRTL ? 'font-persian' : ''}
              `}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-arsenal-red to-arsenal-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">
                    {isRTL ? immortal.nameFa.charAt(0) : immortal.nameEn.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold">
                    {t('fans.hallOfFame')}
                  </p>
                  <p className="text-xs text-gray-400/70 dark:text-gray-500/70">
                    Persian Gooners
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5 dark:ring-white/5 pointer-events-none" />
      </div>
    </motion.div>
  );
}
