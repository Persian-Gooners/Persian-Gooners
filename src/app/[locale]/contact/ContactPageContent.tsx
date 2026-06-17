'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import DonateIcon from '@/components/DonateIcon';
import { Github, Instagram, Mail, ExternalLink, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const DONATE_URL = 'https://hamibash.com/Arman_COYG';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Arman-Soleimany', icon: Github, handle: '@Arman-Soleimany' },
  { name: 'Instagram', href: 'https://www.instagram.com/arman.coyg/', icon: Instagram, handle: '@arman.coyg' },
  { name: 'Email', href: 'mailto:armannewpc@gmail.com', icon: Mail, handle: 'armannewpc@gmail.com' },
];

export default function ContactPageContent() {
  const { locale } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('contact.title')} <span className="text-arsenal-gold">{t('contact.titleHighlight')}</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h2 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('contact.contactInfo')}</h2>
                  <p className={`text-gray-600 dark:text-gray-400 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('contact.contactDesc')}</p>
                </div>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="glass-card-hover p-4 flex items-center space-x-4 rtl:space-x-reverse group">
                      <div className="w-12 h-12 bg-arsenal-red/10 rounded-xl flex items-center justify-center group-hover:bg-arsenal-red/20 transition-colors">
                        <link.icon className="w-6 h-6 text-arsenal-red" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white">{link.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{link.handle}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-arsenal-red transition-colors" />
                    </a>
                  ))}
                  <a
                    href={DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('contact.donate')}
                    className="glass-card-hover p-4 flex items-center space-x-4 rtl:space-x-reverse group"
                  >
                    <div className="w-12 h-12 bg-arsenal-gold/10 rounded-xl flex items-center justify-center group-hover:bg-arsenal-gold/20 transition-colors">
                      <DonateIcon className="w-6 h-6 text-arsenal-gold" />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold text-gray-900 dark:text-white ${locale === 'fa' ? 'font-persian' : ''}`}>{t('contact.donateTitle')}</div>
                      <div className={`text-sm text-gray-500 dark:text-gray-400 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('contact.donateDesc')}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-arsenal-gold transition-colors" />
                  </a>
                </div>
                <div className="glass-card p-6">
                  <h3 className={`font-bold text-gray-900 dark:text-white mb-3 flex items-center space-x-2 rtl:space-x-reverse ${locale === 'fa' ? 'font-persian' : ''}`}>
                    <MessageCircle className="w-5 h-5 text-arsenal-red" />
                    <span>{t('contact.communitySubmissions')}</span>
                  </h3>
                  <p className={`text-sm text-gray-600 dark:text-gray-400 mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('contact.communitySubmissionsDesc')}</p>
                  <div className="space-y-2">
                    {[t('contact.fanStories'), t('contact.matchPredictions'), t('contact.photos'), t('contact.partnerships')].map((item) => (
                      <div key={item} className={`flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400 ${locale === 'fa' ? 'font-persian' : ''}`}>
                        <span className="w-1.5 h-1.5 bg-arsenal-red rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className={`text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2 rtl:space-x-reverse ${locale === 'fa' ? 'font-persian' : ''}`}>
                  <Send className="w-6 h-6 text-arsenal-red" />
                  <span>{t('contact.sendMessage')}</span>
                </h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
