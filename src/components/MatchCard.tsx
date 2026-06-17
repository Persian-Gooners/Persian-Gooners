'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import { Match } from '@/lib/types';
import { getTeamLogo } from '@/data/teamLogos';

interface MatchCardProps {
  match: Match;
  index?: number;
}

function TeamBadge({ name }: { name: string }) {
  const logo = getTeamLogo(name);
  return (
    <div className="flex flex-col items-center gap-2">
      {logo ? (
        <div className="w-10 h-10 relative flex-shrink-0">
          <Image src={logo} alt={name} fill className="object-contain" sizes="40px" />
        </div>
      ) : (
        <div className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
            {name.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </span>
        </div>
      )}
      <div className="text-center flex-1">
        <div className="text-lg font-bold text-gray-900 dark:text-white">
          {name}
        </div>
      </div>
    </div>
  );
}

export default function MatchCard({ match, index = 0 }: MatchCardProps) {
  const isWin =
    !match.isUpcoming && match.homeScore !== undefined && match.awayScore !== undefined
      ? (match.homeTeam === 'Arsenal' && match.homeScore > match.awayScore) ||
        (match.awayTeam === 'Arsenal' && match.awayScore > match.homeScore)
      : false;

  const isDraw =
    !match.isUpcoming && match.homeScore !== undefined && match.awayScore !== undefined
      ? match.homeScore === match.awayScore
      : false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card-hover overflow-hidden">
        <div className="p-1">
          <div
            className={`h-1 ${
              isWin ? 'bg-green-500' : isDraw ? 'bg-yellow-500' : 'bg-arsenal-red'
            }`}
          />
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(match.date).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </span>
            <span>{match.time}</span>
          </div>

          <div className="text-center mb-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{match.competition}</div>
            <div className="flex items-center justify-center gap-3">
              <TeamBadge name={match.homeTeam} />
              <div className="flex items-center justify-center w-14 h-10 rounded-xl bg-gray-200 dark:bg-white/10 border border-gray-300 dark:border-white/10 flex-shrink-0">
                {!match.isUpcoming && match.homeScore !== undefined ? (
                  <span className="text-base font-bold text-gray-900 dark:text-white">
                    {match.homeScore}-{match.awayScore}
                  </span>
                ) : (
                  <span className="text-sm font-bold text-gray-500 dark:text-gray-400">VS</span>
                )}
              </div>
              <TeamBadge name={match.awayTeam} />
            </div>
          </div>

          <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{match.venue}</span>
          </div>

          {match.stats && (
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(match.stats).map(([key, value]) => (
                  <div key={key} className="flex items-center text-sm">
                    <span className="w-8 text-right font-medium text-gray-900 dark:text-white">
                      {value.home}
                    </span>
                    <div className="flex-1 mx-3">
                      <div className="flex h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-white/10">
                        <div
                          className="bg-arsenal-red"
                          style={{ width: `${(value.home / (value.home + value.away || 1)) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="w-24 text-center text-xs text-gray-500 dark:text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <div className="flex-1 mx-3">
                      <div className="flex h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-white/10">
                        <div
                          className="bg-arsenal-navy ml-auto"
                          style={{ width: `${(value.away / (value.home + value.away || 1)) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="w-8 text-left font-medium text-gray-900 dark:text-white">
                      {value.away}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isWin && (
            <div className="mt-4 flex items-center justify-center">
              <span className="px-4 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full flex items-center space-x-1">
                <Trophy className="w-4 h-4" />
                <span>Arsenal Win</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
