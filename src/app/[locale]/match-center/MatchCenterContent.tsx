'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MatchCard from '@/components/MatchCard';
import { upcomingMatches, recentResults, leagueTable } from '@/data/matches';
import { getTeamLogo } from '@/data/teamLogos';
import { Calendar, TrendingUp, Table2 } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

type Tab = 'fixtures' | 'results' | 'table';

export default function MatchCenterContent() {
  const [activeTab, setActiveTab] = useState<Tab>('fixtures');
  const { locale } = useLanguage();
  const { t } = useTranslation();

  const tabs: { id: Tab; labelKey: string; icon: typeof Calendar }[] = [
    { id: 'fixtures', labelKey: 'matchCenter.upcomingFixtures', icon: Calendar },
    { id: 'results', labelKey: 'matchCenter.recentResults', icon: TrendingUp },
    { id: 'table', labelKey: 'matchCenter.leagueTable', icon: Table2 },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('matchCenter.title')} <span className="text-arsenal-gold">{t('matchCenter.titleHighlight')}</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('matchCenter.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${locale === 'fa' ? 'font-persian' : ''} ${
                  activeTab === tab.id
                    ? 'bg-arsenal-red text-white'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{t(tab.labelKey)}</span>
              </button>
            ))}
          </div>

          {activeTab === 'fixtures' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match, index) => (
                <MatchCard key={match.id} match={match} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'results' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentResults.map((match, index) => (
                <MatchCard key={match.id} match={match} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'table' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/5">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px]">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-white/10">
                        <th className="pl-4 pr-2 py-3 text-center text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider w-8">#</th>
                        <th className={`px-2 py-3 text-left text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider ${locale === 'fa' ? 'font-persian text-right' : ''}`}>
                        </th>
                        <th className={`px-2 py-3 text-left text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider min-w-[140px] ${locale === 'fa' ? 'font-persian text-right' : ''}`}>
                          {t('matchCenter.team')}
                        </th>
                        <th className="px-3 py-3 text-center text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t('matchCenter.played')}</th>
                        <th className="px-3 py-3 text-center text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t('matchCenter.wonShort')}</th>
                        <th className="px-3 py-3 text-center text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t('matchCenter.drawnShort')}</th>
                        <th className="px-3 py-3 text-center text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t('matchCenter.lostShort')}</th>
                        <th className="px-3 py-3 text-center text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t('matchCenter.goals')}</th>
                        <th className="px-3 py-3 text-center text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t('matchCenter.gd')}</th>
                        <th className="px-3 py-3 text-center text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t('matchCenter.pts')}</th>
                        <th className={`px-3 py-3 text-center text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider ${locale === 'fa' ? 'font-persian' : ''}`}>
                          {locale === 'fa' ? 'فرم' : 'Form'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {leagueTable.map((row) => {
                        const isArsenal = row.team === 'Arsenal';
                        const isHighlighted = row.highlighted;

                        return (
                          <tr
                            key={row.pos}
                            className={`
                              border-b border-gray-100 dark:border-white/5 last:border-0
                              transition-colors
                              ${isHighlighted
                                ? 'bg-gray-100 dark:bg-white/[0.06]'
                                : 'hover:bg-gray-50 dark:hover:bg-white/[0.03]'
                              }
                            `}
                          >
                            <td className="pl-4 pr-2 py-3 text-center">
                              <span className={`text-[13px] font-medium ${isArsenal ? 'text-arsenal-red font-bold' : 'text-gray-500 dark:text-gray-400'}`}>
                                {row.pos}
                              </span>
                            </td>
                            <td className="px-2 py-3">
                              {(() => {
                                const logo = getTeamLogo(row.team);
                                return logo ? (
                                  <div className="w-5 h-5 relative flex-shrink-0">
                                    <Image src={logo} alt={row.team} fill className="object-contain" sizes="20px" />
                                  </div>
                                ) : (
                                  <div className="w-5 h-5 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-[8px] font-bold text-gray-400">{row.team.split(' ').map(w => w[0]).join('').slice(0, 2)}</span>
                                  </div>
                                );
                              })()}
                            </td>
                            <td className={`px-2 py-3 ${locale === 'fa' ? 'text-right' : ''}`}>
                              <span className={`text-[13px] font-medium ${isArsenal ? 'text-arsenal-red font-bold' : isHighlighted ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-900 dark:text-white'}`}>
                                {row.team}
                              </span>
                            </td>
                            <td className="px-3 py-3 text-center text-[13px] text-gray-600 dark:text-gray-400">{row.played}</td>
                            <td className="px-3 py-3 text-center text-[13px] text-gray-600 dark:text-gray-400">{row.won}</td>
                            <td className="px-3 py-3 text-center text-[13px] text-gray-600 dark:text-gray-400">{row.drawn}</td>
                            <td className="px-3 py-3 text-center text-[13px] text-gray-600 dark:text-gray-400">{row.lost}</td>
                            <td className="px-3 py-3 text-center text-[13px] text-gray-600 dark:text-gray-400">
                              {row.gf}-{row.ga}
                            </td>
                            <td className={`px-3 py-3 text-center text-[13px] font-medium ${row.gd > 0 ? 'text-green-600 dark:text-green-400' : row.gd < 0 ? 'text-red-500 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                              {row.gd > 0 ? `+${row.gd}` : row.gd}
                            </td>
                            <td className={`px-3 py-3 text-center text-[13px] font-bold ${isArsenal ? 'text-arsenal-red' : 'text-gray-900 dark:text-white'}`}>
                              {row.pts}
                            </td>
                            <td className="px-3 py-3">
                              <div className={`flex items-center justify-center gap-1 ${locale === 'fa' ? 'flex-row-reverse' : ''}`}>
                                {row.form.map((result, fi) => (
                                  <div
                                    key={fi}
                                    className={`w-[22px] h-[22px] rounded-[4px] text-[10px] font-bold flex items-center justify-center text-white ${
                                      result === 'W' ? 'bg-green-500' : result === 'D' ? 'bg-gray-400' : 'bg-red-500'
                                    }`}
                                  >
                                    {result}
                                  </div>
                                ))}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
