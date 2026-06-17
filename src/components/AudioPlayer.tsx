'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AudioPlayerProps {
  src: string;
}

const STORAGE = {
  enabled: 'pg-anthem-enabled',
  volume: 'pg-anthem-volume',
  muted: 'pg-anthem-muted',
} as const;

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const { locale, isRtl } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showFallback, setShowFallback] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const isFa = locale === 'fa';

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const savedVolume = localStorage.getItem(STORAGE.volume);
    const savedMuted = localStorage.getItem(STORAGE.muted);
    const savedEnabled = localStorage.getItem(STORAGE.enabled);

    const initVolume = savedVolume ? parseFloat(savedVolume) : 0.7;
    audio.volume = initVolume;
    setVolume(initVolume);

    if (savedMuted === 'true') {
      audio.muted = true;
      setIsMuted(true);
    }

    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('ended', onEnd);

    const tryPlay = savedEnabled !== 'false';
    if (tryPlay) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setShowFallback(true);
      });
    }

    setMounted(true);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('ended', onEnd);
      audio.src = '';
    };
  }, [src]);

  useEffect(() => {
    if (showFallback) {
      const t = setTimeout(() => setShowFallback(false), 6000);
      return () => clearTimeout(t);
    }
  }, [showFallback]);

  useEffect(() => {
    if (!expanded) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [expanded]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem(STORAGE.enabled, 'false');
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        localStorage.setItem(STORAGE.enabled, 'true');
      }).catch(() => {});
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
    localStorage.setItem(STORAGE.muted, (!isMuted).toString());
  }, [isMuted]);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const v = parseFloat(e.target.value);
    audio.volume = v;
    setVolume(v);
    localStorage.setItem(STORAGE.volume, v.toString());
    if (v === 0) {
      audio.muted = true;
      setIsMuted(true);
      localStorage.setItem(STORAGE.muted, 'true');
    } else if (audio.muted) {
      audio.muted = false;
      setIsMuted(false);
      localStorage.setItem(STORAGE.muted, 'false');
    }
  }, []);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = parseFloat(e.target.value);
    setCurrentTime(audio.currentTime);
  }, []);

  const fmt = (t: number) => {
    if (!t || !isFinite(t)) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (!mounted) return null;

  return (
    <>
      {/* Fallback toast */}
      <AnimatePresence>
        {showFallback && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full glass-card text-sm text-gray-600 dark:text-gray-300 shadow-lg"
          >
            <span className={isFa ? 'font-persian' : ''}>
              {isFa ? 'برای پخش سرود روی آیکون صدا کلیک کنید.' : 'Tap the audio button to play the anthem.'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop inline player */}
      <div className="hidden md:flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="glass-card p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2.5 flex-shrink-0 group"
                aria-label={isPlaying ? (isFa ? 'توقف سرود' : 'Pause anthem') : (isFa ? 'پخش سرود' : 'Play anthem')}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isPlaying
                    ? 'bg-arsenal-red shadow-lg shadow-arsenal-red/30'
                    : 'bg-gray-200 dark:bg-white/10 group-hover:bg-gray-300 dark:group-hover:bg-white/20'
                }`}>
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-white" />
                  ) : (
                    <Play className="w-4 h-4 text-arsenal-red ml-0.5" />
                  )}
                </div>
                <span className={`text-sm whitespace-nowrap ${
                  isPlaying ? 'text-arsenal-red font-medium' : 'text-gray-500 dark:text-gray-400'
                } ${isFa ? 'font-persian' : ''}`}>
                  {isPlaying
                    ? (isFa ? '🎵 در حال پخش سرود' : '🎵 Playing Anthem')
                    : (isFa ? '🔇 پخش سرود' : '🔇 Click to Play Anthem')
                  }
                </span>
              </button>

              <div className="flex-1" />

              {isPlaying && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    aria-label={isMuted ? (isFa ? 'فعال کردن صدا' : 'Unmute') : (isFa ? 'بی‌صدا کردن' : 'Mute')}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 accent-arsenal-red cursor-pointer"
                    aria-label={isFa ? 'صدا' : 'Volume'}
                  />
                </div>
              )}
            </div>

            {isPlaying && duration > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400 w-7 text-end tabular-nums">{fmt(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1 h-1 accent-arsenal-red cursor-pointer"
                  aria-label={isFa ? 'پیشرفت سرود' : 'Anthem progress'}
                />
                <span className="text-[10px] text-gray-400 w-7 tabular-nums">{fmt(duration)}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Mobile floating controls */}
      <div className="md:hidden" dir={isRtl ? 'rtl' : 'ltr'}>
        <AnimatePresence>
          {expanded && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, scale: 0.85, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="fixed top-20 right-4 z-50 glass-card p-4 w-52 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-medium text-gray-500 dark:text-gray-400 ${isFa ? 'font-persian' : ''}`}>
                  {isFa ? 'سرود هواداران' : 'Fan Anthem'}
                </span>
                <button
                  onClick={() => setExpanded(false)}
                  className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label={isFa ? 'بستن' : 'Close'}
                >
                  <X className="w-3.5 h-3.5 text-gray-400" />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <button
                  onClick={togglePlay}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 flex-1 ${
                    isPlaying
                      ? 'bg-arsenal-red/10 text-arsenal-red'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300'
                  }`}
                  aria-label={isPlaying ? (isFa ? 'توقف' : 'Pause') : (isFa ? 'پخش' : 'Play')}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className={`text-xs font-medium ${isFa ? 'font-persian' : ''}`}>
                    {isPlaying ? (isFa ? 'توقف' : 'Pause') : (isFa ? 'پخش' : 'Play')}
                  </span>
                </button>
                <button
                  onClick={toggleMute}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isMuted
                      ? 'bg-gray-100 dark:bg-white/5 text-gray-400'
                      : 'bg-arsenal-red/10 text-arsenal-red'
                  }`}
                  aria-label={isMuted ? (isFa ? 'فعال کردن صدا' : 'Unmute') : (isFa ? 'بی‌صدا' : 'Mute')}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <div className="mb-2">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 accent-arsenal-red"
                  aria-label={isFa ? 'صدا' : 'Volume'}
                />
              </div>

              {duration > 0 && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] text-gray-400 tabular-nums">{fmt(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="flex-1 h-1 accent-arsenal-red"
                    aria-label={isFa ? 'پیشرفت' : 'Progress'}
                  />
                  <span className="text-[9px] text-gray-400 tabular-nums">{fmt(duration)}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          onClick={() => setExpanded(!expanded)}
          className={`fixed top-24 right-4 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isPlaying
              ? 'bg-arsenal-red hover:bg-arsenal-darkRed shadow-arsenal-red/30'
              : 'bg-white dark:bg-arsenal-darkGray hover:bg-gray-100 dark:hover:bg-arsenal-darkNavy shadow-black/20 border border-gray-200 dark:border-white/10'
          }`}
          aria-label={isPlaying ? (isFa ? 'کنترل سرود' : 'Anthem controls') : (isFa ? 'پخش سرود' : 'Play anthem')}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-arsenal-red ml-0.5" />
          )}
          {isPlaying && (
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
          )}
        </motion.button>
      </div>
    </>
  );
}
