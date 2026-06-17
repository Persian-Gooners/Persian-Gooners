'use client';

import { motion } from 'framer-motion';
import { User, Calendar, Ruler, Weight } from 'lucide-react';
import { Player } from '@/lib/types';

interface PlayerCardProps {
  player: Player;
  index?: number;
}

export default function PlayerCard({ player, index = 0 }: PlayerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card-hover overflow-hidden relative">
        <div className="relative h-64 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy overflow-hidden">
          <img
            src={player.photo}
            alt={player.name}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-6xl font-bold text-white/10">{player.number}</div>
              <User className="w-16 h-16 text-white/20 mx-auto mt-2" />
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 bg-arsenal-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">{player.number}</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <span className="px-3 py-1 bg-arsenal-gold/90 text-white text-xs font-semibold rounded-full">
              {player.position}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-arsenal-red transition-colors">
              {player.name}
            </h3>
            <img
              src={player.flagUrl}
              alt={player.nationality}
              className="w-6 h-4 object-cover rounded-sm"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1 mt-1">
            <span>{player.nationality}</span>
          </p>

          {player.onLoan && (
            <div className="mt-2">
              <span className="px-2 py-1 bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
                On Loan → {player.loanClub}
              </span>
            </div>
          )}

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="text-center p-2 bg-gray-50 dark:bg-white/5 rounded-lg">
              <div className="text-lg font-bold text-arsenal-red">{player.appearances}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Apps</div>
            </div>
            <div className="text-center p-2 bg-gray-50 dark:bg-white/5 rounded-lg">
              <div className="text-lg font-bold text-arsenal-red">{player.goals}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Goals</div>
            </div>
            <div className="text-center p-2 bg-gray-50 dark:bg-white/5 rounded-lg">
              <div className="text-lg font-bold text-arsenal-red">{player.assists}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Assists</div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-white/10 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center space-x-1">
              <Ruler className="w-4 h-4" />
              <span>{player.height}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Weight className="w-4 h-4" />
              <span>{player.weight}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Joined {player.joinedYear}</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
