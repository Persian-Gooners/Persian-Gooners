'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function ContactForm() {
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-12 text-center">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>
        <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('contact.sent')}</h3>
        <p className={`text-gray-600 dark:text-gray-400 mb-6 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('contact.sentDesc')}</p>
        <button onClick={() => setIsSubmitted(false)} className={`arsenal-btn ${locale === 'fa' ? 'font-persian' : ''}`}>{t('contact.sendAnother')}</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${locale === 'fa' ? 'font-persian' : ''}`}>
            <User className="w-4 h-4 inline mr-2 rtl:mr-0 rtl:ml-2" />{t('contact.name')}
          </label>
          <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`input-field ${locale === 'fa' ? 'font-persian' : ''}`} placeholder={t('contact.namePlaceholder')} />
        </div>
        <div>
          <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${locale === 'fa' ? 'font-persian' : ''}`}>
            <Mail className="w-4 h-4 inline mr-2 rtl:mr-0 rtl:ml-2" />{t('contact.email')}
          </label>
          <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`input-field ${locale === 'fa' ? 'font-persian' : ''}`} placeholder={t('contact.emailPlaceholder')} />
        </div>
      </div>
      <div className="mb-6">
        <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${locale === 'fa' ? 'font-persian' : ''}`}>
          <MessageSquare className="w-4 h-4 inline mr-2 rtl:mr-0 rtl:ml-2" />{t('contact.subject')}
        </label>
        <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={`input-field ${locale === 'fa' ? 'font-persian' : ''}`} placeholder={t('contact.subjectPlaceholder')} />
      </div>
      <div className="mb-6">
        <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${locale === 'fa' ? 'font-persian' : ''}`}>
          <MessageSquare className="w-4 h-4 inline mr-2 rtl:mr-0 rtl:ml-2" />{t('contact.message')}
        </label>
        <textarea required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`input-field resize-none ${locale === 'fa' ? 'font-persian' : ''}`} placeholder={t('contact.messagePlaceholder')} />
      </div>
      <button type="submit" disabled={isSubmitting} className={`arsenal-btn flex items-center space-x-2 rtl:space-x-reverse disabled:opacity-50 disabled:cursor-not-allowed ${locale === 'fa' ? 'font-persian' : ''}`}>
        {isSubmitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" /><span>{t('contact.sending')}</span></>
        ) : (
          <><Send className="w-5 h-5" /><span>{t('contact.send')}</span></>
        )}
      </button>
    </form>
  );
}
