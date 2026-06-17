'use client';

import Link from 'next/link';
import { Github, Instagram, Heart, ExternalLink, Mail } from 'lucide-react';
import DonateIcon from '@/components/DonateIcon';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const DONATE_URL = 'https://hamibash.com/Arman_COYG';

export default function Footer() {
  const { locale, setLocale } = useLanguage();
  const { t } = useTranslation();

  const getHref = (href: string) => `/${locale}${href === '/' ? '' : href}`;

  const footerLinks = {
    [t('footer.arsenal')]: [
      { name: t('nav.history'), href: '/history' },
      { name: t('nav.squad'), href: '/squad' },
      { name: t('nav.legends'), href: '/legends' },
      { name: t('nav.achievements'), href: '/achievements' },
    ],
    [t('footer.community')]: [
      { name: t('nav.news'), href: '/news' },
      { name: t('nav.fanZone'), href: '/fan-zone' },
      { name: t('nav.persianFans'), href: '/fans' },
      { name: t('nav.gallery'), href: '/gallery' },
    ],
    [t('footer.club')]: [
      { name: t('footer.aboutArsenal'), href: '/about' },
      { name: t('nav.matches'), href: '/match-center' },
      { name: t('nav.contact'), href: '/contact' },
    ],
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href={getHref('/')} className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="w-12 h-12 bg-arsenal-red rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <span className="font-bold text-xl">
                  {locale === 'fa' ? 'پرشین ' : 'Persian '}
                  <span className="text-arsenal-red">{locale === 'fa' ? 'گونرز' : 'Gooners'}</span>
                </span>
                <p className="text-gray-400 text-sm">{t('hero.tagline')}</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a
                href="https://github.com/Arman-Soleimany"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-arsenal-red rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/arman.coyg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-arsenal-red rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.donate')}
                className="w-10 h-10 bg-white/10 hover:bg-arsenal-gold rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <DonateIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:armannewpc@gmail.com"
                className="w-10 h-10 bg-white/10 hover:bg-arsenal-red rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button
                onClick={() => setLocale(locale === 'en' ? 'fa' : 'en')}
                className="w-10 h-10 bg-white/10 hover:bg-arsenal-red rounded-xl flex items-center justify-center transition-all duration-300"
                aria-label={locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
              >
                <span className="text-sm font-semibold">{locale === 'en' ? 'FA' : 'EN'}</span>
              </button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={getHref(link.href)}
                      className="text-gray-400 hover:text-arsenal-red transition-colors flex items-center space-x-1 rtl:space-x-reverse group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Persian Gooners. {t('footer.rights')}
            </p>
            <p className="text-gray-400 text-sm">
              {locale === 'fa' ? (
                <>توسعه داده شده توسط <a
                  href="https://github.com/Arman-Soleimany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-arsenal-red hover:underline mx-1"
                >آرمان سلیمانی</a> طرفدار آرسنال و برنامه نویس وب</>
              ) : (
                <>
                  <span>{t('footer.createdWith')}</span>
                  <Heart className="w-4 h-4 text-arsenal-red mx-1 fill-arsenal-red" />
                  <span>{t('footer.by')}</span>
                  <a
                    href="https://github.com/Arman-Soleimany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-arsenal-red hover:underline mx-1"
                  >
                    Arman Soleimany
                  </a>
                  <span>– {t('footer.arsenalSupporter')}</span>
                </>
              )}
            </p>
          </div>
          <p className="text-gray-500 text-xs text-center mt-4">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
