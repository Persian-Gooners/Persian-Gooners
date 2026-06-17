'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { legends } from '@/data/legends';
import { Trophy, Calendar, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LegendCard from '@/components/LegendCard';

export default function LegendsPageContent() {
  const [selectedLegend, setSelectedLegend] = useState<string | null>(null);
  const { locale } = useLanguage();
  const isRtl = locale === 'fa';
  const activeLegend = legends.find((l) => l.id === selectedLegend);

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isRtl ? 'font-persian' : ''}`}>
              {isRtl ? 'تالار' : 'Hall of'} <span className="text-arsenal-gold">{isRtl ? 'اسطوره‌ها' : 'Legends'}</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${isRtl ? 'font-persian' : ''}`}>
              {isRtl
                ? 'بزرگترین بازیکنانی که تاکنون پیراهن آرسنال را پوشیده‌اند.'
                : 'Celebrating the greatest players to ever wear the Arsenal shirt.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {legends.map((legend, index) => (
              <LegendCard
                key={legend.id}
                legend={legend}
                index={index}
                onClick={() => setSelectedLegend(legend.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeLegend && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedLegend(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="min-h-screen py-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setSelectedLegend(null)}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="bg-white dark:bg-arsenal-darkGray rounded-3xl overflow-hidden">
                  <div className="relative aspect-[16/7] bg-gradient-to-br from-arsenal-navy via-arsenal-darkNavy to-arsenal-red overflow-hidden">
                    <img
                      src={activeLegend.photo}
                      alt={activeLegend.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6">
                      <div className="px-4 py-2 bg-arsenal-gold/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full flex items-center gap-2">
                        <StarIcon className="w-4 h-4 fill-current" />
                        <span>{isRtl ? 'اسطوره' : 'Legend'}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                      <h2 className={`text-4xl md:text-5xl font-bold text-white mb-2 ${isRtl ? 'font-persian' : ''}`}>
                        {activeLegend.name}
                      </h2>
                      <p className="text-white/80 text-lg">{activeLegend.fullName}</p>
                      <div className="flex flex-wrap items-center gap-4 mt-3">
                        <span className="text-white/70">{activeLegend.position}</span>
                        <span className="text-white/40">·</span>
                        <div className="flex items-center gap-2">
                          <img src={activeLegend.flagUrl} alt="" className="w-6 h-4 object-cover rounded-sm" />
                          <span className="text-white/70">{isRtl ? activeLegend.nationalityFa : activeLegend.nationality}</span>
                        </div>
                        <span className="text-white/40">·</span>
                        <div className="flex items-center gap-1.5 text-white/70">
                          <Calendar className="w-4 h-4" />
                          <span>{activeLegend.yearsAtClub}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="grid grid-cols-3 gap-4 mb-10">
                      {[
                        { v: activeLegend.appearances, l: isRtl ? 'بازی' : 'Appearances' },
                        { v: activeLegend.goals, l: isRtl ? 'گل' : 'Goals' },
                        { v: activeLegend.assists, l: isRtl ? 'پاس‌گل' : 'Assists' },
                      ].map((s) => (
                        <div key={s.l} className="text-center p-5 bg-gray-50 dark:bg-white/5 rounded-2xl">
                          <div className="text-3xl font-bold text-arsenal-red">{s.v}</div>
                          <div className={`text-sm text-gray-500 dark:text-gray-400 mt-1 ${isRtl ? 'font-persian' : ''}`}>{s.l}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-4 ${isRtl ? 'font-persian' : ''}`}>
                        {isRtl ? 'بیوگرافی' : 'Biography'}
                      </h3>
                      <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${isRtl ? 'font-persian leading-8' : ''}`}>
                        {activeLegend.biography}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-4 ${isRtl ? 'font-persian' : ''}`}>
                        {isRtl ? 'چرا اسطوره آرسنال شد' : 'Why Arsenal Icon'}
                      </h3>
                      <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${isRtl ? 'font-persian leading-8' : ''}`}>
                        {activeLegend.whyIcon}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-4 ${isRtl ? 'font-persian' : ''}`}>
                        {isRtl ? 'افتخارات' : 'Achievements'}
                      </h3>
                      <div className="space-y-2.5">
                        {activeLegend.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-center gap-2.5">
                            <Trophy className="w-4 h-4 text-arsenal-gold flex-shrink-0" />
                            <span className={`text-gray-600 dark:text-gray-400 ${isRtl ? 'font-persian' : ''}`}>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-4 ${isRtl ? 'font-persian' : ''}`}>
                        {isRtl ? 'گاهشمار دوران حرفه‌ای' : 'Career Timeline'}
                      </h3>
                      <div className="space-y-4">
                        {activeLegend.timeline.map((item) => (
                          <div key={item.year} className="flex items-start gap-4">
                            <div className="w-24 flex-shrink-0 text-sm font-bold text-arsenal-red">{item.year}</div>
                            <div className={`flex-1 text-gray-600 dark:text-gray-400 ${isRtl ? 'font-persian' : ''}`}>{item.event}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-4 ${isRtl ? 'font-persian' : ''}`}>
                        {isRtl ? 'میراث' : 'Legacy'}
                      </h3>
                      <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${isRtl ? 'font-persian leading-8' : ''}`}>
                        {activeLegend.legacy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
  );
}
