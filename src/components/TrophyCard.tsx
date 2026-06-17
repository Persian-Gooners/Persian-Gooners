'use client';

import { motion } from 'framer-motion';
import { Trophy as TrophyIcon } from 'lucide-react';
import { Trophy } from '@/lib/types';

interface TrophyCardProps {
  trophy: Trophy;
  index?: number;
}

export default function TrophyCard({ trophy, index = 0 }: TrophyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card-hover overflow-hidden h-full">
        <div className="p-6 text-center">
          <div className="text-5xl mb-4">{trophy.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {trophy.name}
          </h3>
          <div className="flex items-center justify-center space-x-2 mb-3">
            <TrophyIcon className="w-6 h-6 text-arsenal-gold" />
            <span className="text-3xl font-bold text-arsenal-red">{trophy.count}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {trophy.count === 1 ? 'Title' : 'Titles'}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {trophy.description}
          </p>
          {trophy.years.length > 0 && (
            <div className="flex flex-wrap gap-1 justify-center">
              {trophy.years.map((year) => (
                <span
                  key={year}
                  className="px-2 py-1 bg-arsenal-red/10 text-arsenal-red text-xs rounded-full"
                >
                  {year}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
