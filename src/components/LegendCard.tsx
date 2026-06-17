'use client';

import { motion } from 'framer-motion';
import { Star, Calendar, ArrowRight } from 'lucide-react';
import { Legend } from '@/lib/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface LegendCardProps {
  legend: Legend;
  index?: number;
  onClick?: () => void;
}

export default function LegendCard({ legend, index = 0, onClick }: LegendCardProps) {
  const { locale } = useLanguage();
  const isRtl = locale === 'fa';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="glass-card-hover overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[3/4] bg-gradient-to-br from-arsenal-navy via-arsenal-darkNavy to-arsenal-red overflow-hidden">
          <img
            src={legend.photo}
            alt={legend.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
            <div className="px-3 py-1.5 bg-arsenal-gold/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
              <Star className="w-3 h-3 fill-current" />
              <span>{isRtl ? 'اسطوره' : 'Legend'}</span>
            </div>
          </div>

          <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
            <img
              src={legend.flagUrl}
              alt={legend.nationality}
              className="w-8 h-6 object-cover rounded-sm shadow-lg"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">{legend.name}</h3>
            <p className="text-white/80 text-sm font-medium">{legend.position}</p>
            <div className="flex items-center gap-2 mt-2">
              <img src={legend.flagUrl} alt="" className="w-5 h-3.5 object-cover rounded-sm" />
              <span className="text-white/60 text-sm">{isRtl ? legend.nationalityFa : legend.nationality}</span>
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span>{legend.yearsAtClub}</span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[{ v: legend.appearances, k: isRtl ? 'بازی' : 'Apps' }, { v: legend.goals, k: isRtl ? 'گل' : 'Goals' }, { v: legend.assists, k: isRtl ? 'پاس‌گل' : 'Assists' }].map((s) => (
              <div key={s.k} className="text-center p-3 bg-gray-50 dark:bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-arsenal-red">{s.v}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.k}</div>
              </div>
            ))}
          </div>

          <p className={`text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-1 ${isRtl ? 'font-persian leading-relaxed' : ''}`}>
            {legend.biography}
          </p>

          <div className="flex items-center text-arsenal-red font-medium text-sm mt-auto pt-2 border-t border-gray-100 dark:border-white/5">
            <span>{isRtl ? 'مشاهده پروفایل کامل' : 'View Full Profile'}</span>
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
