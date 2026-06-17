'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, Search, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'arsenal', href: '/history', children: [
    { key: 'history', href: '/history' },
    { key: 'squad', href: '/squad' },
    { key: 'legends', href: '/legends' },
    { key: 'achievements', href: '/achievements' },
    { key: 'about', href: '/about' },
  ]},
  { key: 'news', href: '/news' },
  { key: 'matches', href: '/match-center' },
  { key: 'fanZone', href: '/fan-zone' },
  { key: 'persianFans', href: '/fans' },
  { key: 'gallery', href: '/gallery' },
  { key: 'contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, isRtl } = useLanguage();
  const { t } = useTranslation();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHref = (href: string) => `/${locale}${href === '/' ? '' : href}`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-arsenal-darkerGray/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={getHref('/')} className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-arsenal-red rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">PG</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-gray-900 dark:text-white">
                {locale === 'fa' ? 'پرشین ' : 'Persian '}
                <span className="text-arsenal-red">{locale === 'fa' ? 'گونرز' : 'Gooners'}</span>
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-arsenal-red dark:hover:text-arsenal-red transition-colors rounded-lg ${locale === 'fa' ? 'font-persian' : ''}`}>
                    <span>{t(`nav.${item.key}`)}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-arsenal-darkGray rounded-xl shadow-xl border border-gray-100 dark:border-white/10 py-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.key}
                            href={getHref(child.href)}
                            className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-arsenal-red/10 hover:text-arsenal-red transition-colors ${locale === 'fa' ? 'font-persian text-right' : ''}`}
                          >
                            {t(`nav.${child.key}`)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={getHref(item.href)}
                  className={`px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-arsenal-red dark:hover:text-arsenal-red transition-colors rounded-lg ${locale === 'fa' ? 'font-persian' : ''}`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-arsenal-red transition-colors rounded-lg">
              <Search className="w-5 h-5" />
            </button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-arsenal-red transition-colors rounded-lg"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            <div className="relative">
              <button
                onClick={() => setLocale(locale === 'en' ? 'fa' : 'en')}
                className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-arsenal-red transition-colors rounded-lg border border-gray-200 dark:border-white/10"
              >
                <Globe className="w-4 h-4" />
                <span>{locale === 'en' ? 'فارسی' : 'English'}</span>
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-arsenal-red transition-colors rounded-lg"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-arsenal-darkerGray border-t border-gray-100 dark:border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.key}>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.key ? null : item.key)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors ${locale === 'fa' ? 'font-persian' : ''}`}
                    >
                      <span className="font-medium">{t(`nav.${item.key}`)}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.key ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.key && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 rtl:pl-0 rtl:pr-4 space-y-1"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.key}
                              href={getHref(child.href)}
                              onClick={() => setMobileOpen(false)}
                              className={`block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-arsenal-red transition-colors rounded-lg ${locale === 'fa' ? 'font-persian text-right' : ''}`}
                            >
                              {t(`nav.${child.key}`)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.key}
                    href={getHref(item.href)}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors font-medium ${locale === 'fa' ? 'font-persian' : ''}`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
