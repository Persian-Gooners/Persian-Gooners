'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PlayerCard from '@/components/PlayerCard';
import { getSquadCategories, getSquadTitle } from '@/data/players';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SquadPageContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { locale } = useLanguage();

  const categories = getSquadCategories();
  const allPlayers = categories.flatMap((c) => c.players);
  const title = getSquadTitle(locale);

  const tabs = [
    { name: locale === 'fa' ? 'همه' : 'All', key: 'all', players: allPlayers },
    ...categories.map((c) => ({
      name: locale === 'fa' ? c.nameFa : c.nameEn,
      key: c.key,
      players: c.players,
    })),
  ];

  const currentPlayers = tabs.find((t) => t.key === activeCategory)?.players || [];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {title} <span className="text-arsenal-gold">2025/26</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {locale === 'fa'
                ? 'با بازیکنان تیم اول آرسنال آشنا شوید'
                : 'Meet the Arsenal first team squad for the 2025/26 season'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${locale === 'fa' ? 'font-persian' : ''} ${
                  activeCategory === tab.key
                    ? 'bg-arsenal-red text-white'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                {tab.name} ({tab.players.length})
              </button>
            ))}
          </div>

          {activeCategory === 'all' ? (
            <div className="space-y-12">
              {categories.map((section) => (
                <div key={section.key}>
                  <h2 className={`text-2xl font-bold text-gray-900 dark:text-white mb-6 ${locale === 'fa' ? 'font-persian' : ''}`}>
                    {locale === 'fa' ? section.nameFa : section.nameEn}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {section.players.map((player, index) => (
                      <PlayerCard key={player.id} player={player} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentPlayers.map((player, index) => (
                <PlayerCard key={player.id} player={player} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
