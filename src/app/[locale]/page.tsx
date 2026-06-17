'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import NewsCard from '@/components/NewsCard';
import PlayerCard from '@/components/PlayerCard';
import LegendCard from '@/components/LegendCard';
import MatchCard from '@/components/MatchCard';
import TrophyCard from '@/components/TrophyCard';
import FanCard from '@/components/FanCard';
import { featuredNews } from '@/data/news';
import { allPlayers } from '@/data/players';
import { legends } from '@/data/legends';
import { upcomingMatches, recentResults } from '@/data/matches';
import { trophies } from '@/data/achievements';
import { immortals } from '@/data/fans';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowRight, Users, Trophy, Star, Newspaper, Shield, Globe } from 'lucide-react';

const stats = [
  { key: 'leagueTitles', value: '13', icon: Trophy },
  { key: 'faCups', value: '14', icon: Shield },
  { key: 'years', value: '138', icon: Star },
  { key: 'globalFans', value: '100M+', icon: Globe },
];

export default function HomePage() {
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const getHref = (href: string) => `/${locale}${href === '/' ? '' : href}`;

  return (
    <div>
      <Hero />

      <section className="py-20 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-arsenal-red mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className={`text-sm text-gray-500 dark:text-gray-400 ${locale === 'fa' ? 'font-persian' : ''}`}>
                  {t(`history.${stat.key}`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-arsenal-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`section-title gradient-text ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.latestNews')}
            </h2>
            <p className={`section-subtitle max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.latestNewsSub')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredNews.map((article, index) => (
              <NewsCard key={article.id} article={article} featured index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href={getHref('/news')} className={`inline-flex items-center space-x-2 rtl:space-x-reverse arsenal-btn ${locale === 'fa' ? 'font-persian' : ''}`}>
              <span>{t('sections.viewAllNews')}</span>
              <ArrowRight className={`w-4 h-4 ${locale === 'fa' ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`section-title gradient-text ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.featuredPlayers')}
            </h2>
            <p className={`section-subtitle max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.featuredPlayersSub')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPlayers.slice(0, 6).map((player, index) => (
              <PlayerCard key={player.id} player={player} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href={getHref('/squad')} className={`inline-flex items-center space-x-2 rtl:space-x-reverse arsenal-btn ${locale === 'fa' ? 'font-persian' : ''}`}>
              <span>{t('sections.viewFullSquad')}</span>
              <ArrowRight className={`w-4 h-4 ${locale === 'fa' ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-arsenal-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`section-title gradient-text ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.arsenalLegends')}
            </h2>
            <p className={`section-subtitle max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.arsenalLegendsSub')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {legends.slice(0, 3).map((legend, index) => (
              <LegendCard key={legend.id} legend={legend} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href={getHref('/legends')} className={`inline-flex items-center space-x-2 rtl:space-x-reverse arsenal-btn ${locale === 'fa' ? 'font-persian' : ''}`}>
              <span>{t('sections.viewAllLegends')}</span>
              <ArrowRight className={`w-4 h-4 ${locale === 'fa' ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className={`section-title gradient-text mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
                  {t('sections.upcomingFixtures')}
                </h2>
                <p className={`section-subtitle mb-8 ${locale === 'fa' ? 'font-persian' : ''}`}>
                  {t('sections.upcomingFixturesSub')}
                </p>
              </motion.div>

              <div className="space-y-4">
                {upcomingMatches.slice(0, 3).map((match, index) => (
                  <MatchCard key={match.id} match={match} index={index} />
                ))}
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className={`section-title gradient-text mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
                  {t('sections.recentResults')}
                </h2>
                <p className={`section-subtitle mb-8 ${locale === 'fa' ? 'font-persian' : ''}`}>
                  {t('sections.recentResultsSub')}
                </p>
              </motion.div>

              <div className="space-y-4">
                {recentResults.slice(0, 3).map((match, index) => (
                  <MatchCard key={match.id} match={match} index={index} />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href={getHref('/match-center')} className={`inline-flex items-center space-x-2 rtl:space-x-reverse arsenal-btn ${locale === 'fa' ? 'font-persian' : ''}`}>
              <span>{t('sections.visitMatchCenter')}</span>
              <ArrowRight className={`w-4 h-4 ${locale === 'fa' ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-arsenal-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`section-title gradient-text ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.achievements')}
            </h2>
            <p className={`section-subtitle max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.achievementsSub')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trophies.slice(0, 4).map((trophy, index) => (
              <TrophyCard key={trophy.id} trophy={trophy} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href={getHref('/achievements')} className={`inline-flex items-center space-x-2 rtl:space-x-reverse arsenal-btn ${locale === 'fa' ? 'font-persian' : ''}`}>
              <span>{t('sections.viewAllTrophies')}</span>
              <ArrowRight className={`w-4 h-4 ${locale === 'fa' ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`section-title gradient-text ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.fanHighlights')}
            </h2>
            <p className={`section-subtitle max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.fanHighlightsSub')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {immortals.map((immortal, index) => (
              <FanCard key={immortal.id} immortal={immortal} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href={getHref('/fans')} className={`inline-flex items-center space-x-2 rtl:space-x-reverse arsenal-btn ${locale === 'fa' ? 'font-persian' : ''}`}>
              <span>{t('sections.meetOurFans')}</span>
              <ArrowRight className={`w-4 h-4 ${locale === 'fa' ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 text-arsenal-gold mx-auto mb-6" />
            <h2 className={`text-3xl md:text-5xl font-bold text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.joinCommunity')}{' '}
              <span className="text-arsenal-gold">{t('sections.joinCommunity2')}</span>
            </h2>
            <p className={`text-xl text-white/80 mb-8 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('sections.joinDesc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={getHref('/contact')} className={`arsenal-btn flex items-center space-x-2 rtl:space-x-reverse text-lg px-8 py-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
                <span>{t('sections.getInTouch')}</span>
                <ArrowRight className={`w-5 h-5 ${locale === 'fa' ? 'rotate-180' : ''}`} />
              </Link>
              <Link
                href={getHref('/fan-zone')}
                className={`arsenal-btn-outline flex items-center space-x-2 rtl:space-x-reverse text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-gray-900 ${locale === 'fa' ? 'font-persian' : ''}`}
              >
                <span>{t('nav.fanZone')}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
