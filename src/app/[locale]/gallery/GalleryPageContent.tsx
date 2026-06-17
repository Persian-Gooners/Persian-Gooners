'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GalleryGrid from '@/components/GalleryGrid';
import { galleryImages } from '@/data/gallery';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function GalleryPageContent() {
  const { locale } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('gallery.title')} <span className="text-arsenal-gold">{t('gallery.titleHighlight')}</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('gallery.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </div>
  );
}
