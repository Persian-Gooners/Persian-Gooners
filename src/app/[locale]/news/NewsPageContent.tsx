'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import NewsCard from '@/components/NewsCard';
import { newsArticles, newsCategories } from '@/data/news';
import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function NewsPageContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { locale } = useLanguage();
  const { t } = useTranslation();

  const categoryMap: Record<string, string> = {
    'All': t('news.categories.all'),
    'First Team': t('news.categories.firstTeam'),
    'Transfers': t('news.categories.transfers'),
    'Academy': t('news.categories.academy'),
    'Match Reports': t('news.categories.matchReports'),
    'Community': t('news.categories.community'),
    'Opinion': t('news.categories.opinion'),
  };

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('news.title')} <span className="text-arsenal-gold">{t('news.titleHighlight')}</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('news.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${locale === 'fa' ? 'font-persian' : ''} ${
                    activeCategory === category
                      ? 'bg-arsenal-red text-white'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  {categoryMap[category] || category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={t('news.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`input-field pl-10 rtl:pl-4 rtl:pr-10 ${locale === 'fa' ? 'font-persian' : ''}`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className={`text-gray-500 dark:text-gray-400 text-lg ${locale === 'fa' ? 'font-persian' : ''}`}>
                {t('sections.noResults')}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
