'use client';

import { motion } from 'framer-motion';
import { TimelineEvent } from '@/lib/types';
import { Calendar, ChevronRight } from 'lucide-react';

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const eras = [...new Set(events.map((e) => e.era))];

  return (
    <div className="relative">
      {eras.map((era, eraIndex) => (
        <div key={era} className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-arsenal-red flex items-center space-x-2">
              <Calendar className="w-6 h-6" />
              <span>{era}</span>
            </h3>
          </motion.div>

          <div className="relative ml-8 md:ml-12">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-arsenal-red to-arsenal-navy" />

            {events
              .filter((e) => e.era === era)
              .map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-2 w-4 h-4 bg-arsenal-red rounded-full border-4 border-white dark:border-arsenal-darkerGray transform -translate-x-1/2" />

                  <div className="glass-card p-5 hover-glow">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-arsenal-red/10 text-arsenal-red text-sm font-bold rounded-full">
                        {event.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {event.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
