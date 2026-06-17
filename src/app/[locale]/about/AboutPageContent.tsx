'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, Globe, MapPin, Users, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function AboutPageContent() {
  const { locale } = useLanguage();
  const { t } = useTranslation();

  const sections = [
    { icon: Shield, titleKey: 'about.overview', textKey: 'about.overviewText' },
    { icon: Heart, titleKey: 'about.identity', textKey: 'about.identityText' },
    { icon: Trophy, titleKey: 'about.rivalries', textKey: 'about.rivalriesText' },
    { icon: MapPin, titleKey: 'about.stadium', textKey: 'about.stadiumText' },
    { icon: Users, titleKey: 'about.academy', textKey: 'about.academyText' },
    { icon: Globe, titleKey: 'about.global', textKey: 'about.globalText' },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('about.title')} <span className="text-arsenal-gold">{t('about.titleHighlight')}</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div key={section.titleKey} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card p-8">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-arsenal-red/10 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-arsenal-red" />
                    </div>
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 ${locale === 'fa' ? 'font-persian' : ''}`}>{t(section.titleKey)}</h2>
                    <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${locale === 'fa' ? 'font-persian' : ''}`}>{t(section.textKey)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 glass-card p-8 text-center">
            <Heart className="w-12 h-12 text-arsenal-gold mx-auto mb-4" />
            <h2 className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('about.arsenalWay')}</h2>
            <p className={`text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('about.arsenalWayText')}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
