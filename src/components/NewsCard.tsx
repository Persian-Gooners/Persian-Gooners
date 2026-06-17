'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Tag, User, ArrowRight } from 'lucide-react';
import { NewsArticle } from '@/lib/types';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
  index?: number;
}

export default function NewsCard({ article, featured = false, index = 0 }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${featured ? 'col-span-full' : ''}`}
    >
      <Link href={`/news/${article.slug}`}>
        <div className={`glass-card-hover overflow-hidden ${featured ? 'md:flex' : ''}`}>
          <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : ''}`}>
            <div
              className={`bg-gradient-to-br from-arsenal-red/20 to-arsenal-navy/20 ${
                featured ? 'h-64 md:h-96' : 'h-48'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-arsenal-red/40 text-6xl font-bold">PG</span>
              </div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-arsenal-red text-white text-xs font-semibold rounded-full">
                {article.category}
              </span>
            </div>
            {article.trending && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-arsenal-gold text-white text-xs font-semibold rounded-full">
                  Trending
                </span>
              </div>
            )}
          </div>

          <div className={`p-6 ${featured ? 'md:w-1/2 md:p-8 flex flex-col justify-center' : ''}`}>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </span>
              <span className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </span>
            </div>

            <h3
              className={`font-bold text-gray-900 dark:text-white group-hover:text-arsenal-red transition-colors mb-3 ${
                featured ? 'text-2xl md:text-3xl' : 'text-lg'
              }`}
            >
              {article.title}
            </h3>

            <p
              className={`text-gray-600 dark:text-gray-400 mb-4 leading-relaxed ${
                featured ? 'text-lg' : 'text-sm'
              }`}
            >
              {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs rounded-full flex items-center space-x-1"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            <div className="flex items-center text-arsenal-red font-medium group-hover:space-x-2 transition-all">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
