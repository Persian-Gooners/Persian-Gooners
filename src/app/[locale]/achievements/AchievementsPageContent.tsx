'use client';

import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import TrophyCard from '@/components/TrophyCard';
import { timelineEvents, trophies } from '@/data/achievements';
import { Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function AchievementsPageContent() {
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const totalTrophies = trophies.reduce((acc, trophy) => acc + trophy.count, 0);

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('achievements.title')} <span className="text-arsenal-gold">{t('achievements.titleHighlight')}</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('achievements.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card p-8 text-center mb-12">
            <Trophy className="w-16 h-16 text-arsenal-gold mx-auto mb-4" />
            <div className="text-6xl font-bold gradient-text mb-2">{totalTrophies}</div>
            <div className={`text-xl text-gray-600 dark:text-gray-400 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('achievements.totalTrophies')}</div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trophies.map((trophy, index) => (
              <TrophyCard key={trophy.id} trophy={trophy} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-arsenal-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className={`section-title gradient-text ${locale === 'fa' ? 'font-persian' : ''}`}>{t('achievements.invincibles')}</h2>
            <p className={`section-subtitle max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>{t('achievements.invinciblesSub')}</p>
          </motion.div>

          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('achievements.unbeatenSeason')}</h3>
                <p className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
                  {locale === 'fa'
                    ? 'در فصل ۲۰۰۴-۲۰۰۳ لیگ برتر، آرسنال در تمام طول فصل بدون شکست ماند و ۲۶ بازی را برد و ۱۲ بازی را مساوی کرد. این دستاورد فوق‌العاده به آن‌ها لقب «شکست‌ناپذیرها» را داد و همچنان یکی از بزرگترین دستاوردهای تاریخ فوتبال محسوب می‌شود.'
                    : 'In the 2003-04 Premier League season, Arsenal went the entire campaign unbeaten, winning 26 matches and drawing 12. This extraordinary feat earned them the nickname "The Invincibles" and remains one of the greatest achievements in football history.'}
                </p>
                <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${locale === 'fa' ? 'font-persian' : ''}`}>
                  {locale === 'fa'
                    ? 'این تیم به رهبری کاپیتان پاتریک ویه‌را و با درخشش تیری آنری، دنیس برکمپ، روبرتو پیرس و بسیاری دیگر، فوتبال تهاجمی و زیبایی بازی می‌کرد که جهان را مجذوب خود کرد.'
                    : 'Led by captain Patrick Vieira and featuring the brilliance of Thierry Henry, Dennis Bergkamp, Robert Pirès, and many others, this Arsenal team played attractive, attacking football that captivated the world.'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: t('achievements.matchesPlayed'), value: '38' },
                  { label: t('achievements.won'), value: '26' },
                  { label: t('achievements.drawn'), value: '12' },
                  { label: t('achievements.lost'), value: '0' },
                  { label: t('achievements.goalsScored'), value: '73' },
                  { label: t('achievements.goalsConceded'), value: '26' },
                  { label: t('achievements.goalDifference'), value: '+47' },
                  { label: t('achievements.points'), value: '90' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-arsenal-red">{stat.value}</div>
                    <div className={`text-sm text-gray-500 dark:text-gray-400 ${locale === 'fa' ? 'font-persian' : ''}`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className={`section-title gradient-text ${locale === 'fa' ? 'font-persian' : ''}`}>{t('achievements.achievementTimeline')}</h2>
            <p className={`section-subtitle max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>{t('achievements.achievementTimelineSub')}</p>
          </motion.div>
          <Timeline events={timelineEvents.filter((e) => e.title.includes('Double') || e.title.includes('Title') || e.title.includes('Cup') || e.title.includes('Invincibles'))} />
        </div>
      </section>
    </div>
  );
}
