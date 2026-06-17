'use client';

import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import TrophyCard from '@/components/TrophyCard';
import { timelineEvents, trophies, clubStats } from '@/data/achievements';
import { Calendar, MapPin, Users, Trophy, Star, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const eras = [
  {
    nameKey: 'Club Foundation',
    period: '1886 - 1925',
    description: {
      en: 'Arsenal was founded as Dial Square in 1886 by workers at the Royal Arsenal in Woolwich. The club went through several name changes before becoming Arsenal, and moved to Highbury in 1913.',
      fa: 'آرسنال در سال ۱۸۸۶ توسط کارگران رویال آرسنال در وولویچ به عنوان دایال اسکویر تأسیس شد. این باشگاه قبل از تبدیل شدن به آرسنال چندین بار تغییر نام داد و در سال ۱۹۱۳ به هایبوری نقل مکان کرد.',
    },
    highlights: {
      en: ['Founded as Dial Square (1886)', 'Renamed Royal Arsenal', 'Moved to Highbury (1913)'],
      fa: ['تأسیس به عنوان دایال اسکویر (۱۸۸۶)', 'تغییر نام به رویال آرسنال', 'انتقال به هایبوری (۱۹۱۳)'],
    },
  },
  {
    nameKey: 'Herbert Chapman Era',
    period: '1925 - 1934',
    description: {
      en: 'Herbert Chapman revolutionized Arsenal and English football. He introduced the WM formation, signed legendary players, and led Arsenal to their first major trophies.',
      fa: 'هربرت چپمن آرسنال و فوتبال انگلیس را متحول کرد. او تشکیل WM را معرفی کرد، بازیکنان اسطوره‌ای را استخدام کرد و آرسنال را به اولین جام‌های بزرگ رساند.',
    },
    highlights: {
      en: ['First League Title (1931)', 'First FA Cup (1930)', 'Four league titles in five years'],
      fa: ['اولین قهرمانی لیگ (۱۹۳۱)', 'اولین جام حذفی (۱۹۳۰)', 'چهار قهرمانی لیگ در پنج سال'],
    },
  },
  {
    nameKey: 'Arsène Wenger Era',
    period: '1996 - 2018',
    description: {
      en: 'Arsène Wenger transformed Arsenal into one of Europe\'s elite clubs. His innovations in training, nutrition, and tactics changed English football forever. The Invincibles season remains his crowning glory.',
      fa: 'آرسن ونگر آرسنال را به یکی از باشگاه‌هایelite اروپا تبدیل کرد. نوآوری‌های او در تمرین، تغذیه و تاکتیک فوتبال انگلیس را برای همیشه تغییر داد. فصل شکست‌ناپذیرها همچنان افتخار بزرگ اوست.',
    },
    highlights: {
      en: ['The Invincibles (2003-04)', 'Three Premier League titles', 'Seven FA Cups'],
      fa: ['شکست‌ناپذیرها (۲۰۰۴-۲۰۰۳)', 'سه قهرمانی لیگ برتر', 'هفت جام حذفی'],
    },
  },
  {
    nameKey: 'Emirates Stadium Era',
    period: '2006 - Present',
    description: {
      en: 'The move to the 60,000-seat Emirates Stadium marked a new chapter for Arsenal. While initially challenging, the move provided the financial foundation for the club\'s continued growth.',
      fa: 'انتقال به ورزشگاه ۶۰,۰۰۰ نفری امارات فصل جدیدی را برای آرسنال آغاز کرد. اگرچه در ابتدا چالش‌برانگیز بود، اما این انتقال پایه مالی رشد مستمر باشگاه را فراهم کرد.',
    },
    highlights: {
      en: ['New 60,000-seat stadium', 'Record 14th FA Cup (2020)', 'Return to title contention'],
      fa: ['ورزشگاه جدید ۶۰,۰۰۰ نفری', 'رکورد ۱۴مین جام حذفی (۲۰۲۰)', 'بازگشت به رقابت قهرمانی'],
    },
  },
  {
    nameKey: 'Mikel Arteta Era',
    period: '2019 - Present',
    description: {
      en: 'Mikel Arteta has restored Arsenal to genuine title contenders. His tactical innovations, youth development, and recruitment have created one of the most exciting squads in Europe.',
      fa: 'میکل آرتتا آرسنال را به رقیب واقعی قهرمانی تبدیل کرده است. نوآوری‌های تاکتیکی، توسعه جوانان و جذب بازیکنان او یکی از هیجان‌انگیزترین تیم‌های اروپا را ایجاد کرده است.',
    },
    highlights: {
      en: ['FA Cup triumph (2020)', 'Title challengers', 'Young, exciting squad'],
      fa: ['قهرمانی جام حذفی (۲۰۲۰)', 'رقیبان قهرمانی', 'تیم جوان و هیجان‌انگیز'],
    },
  },
];

export default function HistoryPageContent() {
  const { locale } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('history.title')} <span className="text-arsenal-gold">{t('history.titleHighlight')}</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('history.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Trophy, label: t('history.leagueTitles'), value: clubStats.leagueTitles },
              { icon: Award, label: t('history.faCups'), value: clubStats.faCups },
              { icon: Star, label: t('history.communityShields'), value: clubStats.communityShields },
              { icon: Calendar, label: 'Founded', value: clubStats.founded },
              { icon: MapPin, label: t('history.stadiumCapacity'), value: clubStats.capacity.toLocaleString() },
              { icon: Users, label: 'Manager', value: clubStats.manager, isText: true },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <stat.icon className="w-6 h-6 text-arsenal-red mx-auto mb-2" />
                <div className={`font-bold text-gray-900 dark:text-white ${stat.isText ? 'text-sm' : 'text-xl'}`}>
                  {stat.value}
                </div>
                <div className={`text-xs text-gray-500 dark:text-gray-400 ${locale === 'fa' ? 'font-persian' : ''}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-arsenal-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className={`section-title gradient-text ${locale === 'fa' ? 'font-persian' : ''}`}>{t('history.eras')}</h2>
            <p className={`section-subtitle max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>{t('history.erasSub')}</p>
          </motion.div>

          <div className="space-y-12">
            {eras.map((era, index) => (
              <motion.div
                key={era.nameKey}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="px-4 py-2 bg-arsenal-red/10 rounded-xl">
                      <span className="text-arsenal-red font-bold">{era.period}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 ${locale === 'fa' ? 'font-persian' : ''}`}>
                      {era.nameKey}
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-400 mb-4 leading-relaxed ${locale === 'fa' ? 'font-persian' : ''}`}>
                      {era.description[locale]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {era.highlights[locale].map((highlight) => (
                        <span key={highlight} className={`px-3 py-1 bg-arsenal-gold/10 text-arsenal-gold text-sm rounded-full ${locale === 'fa' ? 'font-persian' : ''}`}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className={`section-title gradient-text ${locale === 'fa' ? 'font-persian' : ''}`}>{t('history.timeline')}</h2>
            <p className={`section-subtitle max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>{t('history.timelineSub')}</p>
          </motion.div>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-arsenal-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className={`section-title gradient-text ${locale === 'fa' ? 'font-persian' : ''}`}>{t('history.trophyCabinet')}</h2>
            <p className={`section-subtitle max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>{t('history.trophyCabinetSub')}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trophies.map((trophy, index) => (
              <TrophyCard key={trophy.id} trophy={trophy} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
