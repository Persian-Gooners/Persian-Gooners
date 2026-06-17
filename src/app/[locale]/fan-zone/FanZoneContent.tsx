'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, Brain, Trophy, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const predictions = [
  { match: 'Arsenal vs Chelsea', date: 'Jan 5', prediction: 'Arsenal 2-1 Chelsea' },
  { match: 'Man United vs Arsenal', date: 'Jan 12', prediction: 'Arsenal 2-0 Man United' },
  { match: 'Arsenal vs Tottenham', date: 'Jan 26', prediction: 'Arsenal 3-1 Tottenham' },
];

const polls = [
  { question: { en: "Who is Arsenal's most important player?", fa: 'مهم‌ترین بازیکن آرسنال کیست؟' }, options: [{ text: 'Martin Ødegaard', votes: 35 }, { text: 'Bukayo Saka', votes: 28 }, { text: 'Declan Rice', votes: 22 }, { text: 'William Saliba', votes: 15 }], totalVotes: 100 },
  { question: { en: 'Will Arsenal win the Premier League this season?', fa: 'آیا آرسنال این فصل قهرمان لیگ برتر می‌شود؟' }, options: [{ text: { en: 'Yes, definitely!', fa: 'بله، قطعاً!' }, votes: 45 }, { text: { en: "It's going to be close", fa: 'خیلی نزدیک خواهد بود' }, votes: 35 }, { text: { en: "We'll finish second", fa: 'دوم می‌شویم' }, votes: 15 }, { text: { en: 'Unlikely this year', fa: 'امسال بعید است' }, votes: 5 }], totalVotes: 100 },
];

const quizQuestions = [
  { question: { en: 'How many goals did Thierry Henry score for Arsenal?', fa: 'تیری آنری چند گل برای آرسنال زد؟' }, options: ['185', '200', '228', '250'], correct: 2 },
  { question: { en: 'In what year did Arsenal move to the Emirates Stadium?', fa: 'آرسنال در چه سالی به ورزشگاه امارات نقل مکان کرد؟' }, options: ['2004', '2005', '2006', '2007'], correct: 2 },
  { question: { en: 'Who scored the winning goal in the 2014 FA Cup Final?', fa: 'چه کسی گل پیروزی در فینال جام حذفی ۲۰۱۴ را زد؟' }, options: ['Mesut Özil', 'Santi Cazorla', 'Aaron Ramsey', 'Alexis Sánchez'], correct: 2 },
  { question: { en: 'How many matches did Arsenal lose in the Invincibles season?', fa: 'آرسنال در فصل شکست‌ناپذیرها چند بازی را باخت؟' }, options: ['1', '2', '3', '0'], correct: 3 },
  { question: { en: "Who is Arsenal's all-time top scorer?", fa: 'بهترین گلزن تمام دوران آرسنال کیست؟' }, options: ['Ian Wright', 'Thierry Henry', 'Cliff Bastin', 'Ted Drake'], correct: 1 },
];

export default function FanZoneContent() {
  const [activeSection, setActiveSection] = useState<'predictions' | 'polls' | 'quiz'>('predictions');
  const [quizState, setQuizState] = useState({ currentQuestion: 0, score: 0, answered: false, selectedAnswer: -1, showResult: false });
  const { locale } = useLanguage();
  const { t } = useTranslation();

  const handleQuizAnswer = (index: number) => {
    if (quizState.answered) return;
    const isCorrect = index === quizQuestions[quizState.currentQuestion].correct;
    setQuizState({ ...quizState, answered: true, selectedAnswer: index, score: isCorrect ? quizState.score + 1 : quizState.score });
  };

  const nextQuestion = () => {
    if (quizState.currentQuestion < quizQuestions.length - 1) {
      setQuizState({ ...quizState, currentQuestion: quizState.currentQuestion + 1, answered: false, selectedAnswer: -1 });
    } else {
      setQuizState({ ...quizState, showResult: true });
    }
  };

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-arsenal-navy to-arsenal-darkNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>
              {t('fanZone.title')} <span className="text-arsenal-gold">{t('fanZone.titleHighlight')}</span>
            </h1>
            <p className={`text-xl text-white/70 max-w-2xl mx-auto ${locale === 'fa' ? 'font-persian' : ''}`}>{t('fanZone.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-arsenal-darkerGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'predictions' as const, key: 'fanZone.predictions', icon: Target },
              { id: 'polls' as const, key: 'fanZone.polls', icon: BarChart3 },
              { id: 'quiz' as const, key: 'fanZone.quiz', icon: Brain },
            ].map((section) => (
              <button key={section.id} onClick={() => setActiveSection(section.id)} className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${locale === 'fa' ? 'font-persian' : ''} ${activeSection === section.id ? 'bg-arsenal-red text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                <section.icon className="w-4 h-4" /><span>{t(section.key)}</span>
              </button>
            ))}
          </div>

          {activeSection === 'predictions' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {predictions.map((pred, index) => (
                <motion.div key={pred.match} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="glass-card-hover p-6 text-center">
                  <Target className="w-8 h-8 text-arsenal-red mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{pred.match}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{pred.date}</p>
                  <div className="px-4 py-2 bg-arsenal-red/10 rounded-lg"><span className="text-arsenal-red font-bold">{pred.prediction}</span></div>
                </motion.div>
              ))}
            </div>
          )}

          {activeSection === 'polls' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {polls.map((poll, pollIndex) => (
                <motion.div key={pollIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: pollIndex * 0.1 }} className="glass-card p-6">
                  <h3 className={`text-lg font-bold text-gray-900 dark:text-white mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>{poll.question[locale]}</h3>
                  <div className="space-y-3">
                    {poll.options.map((option, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm text-gray-700 dark:text-gray-300 ${locale === 'fa' ? 'font-persian' : ''}`}>{typeof option.text === 'string' ? option.text : option.text[locale]}</span>
                          <span className="text-sm font-bold text-arsenal-red">{Math.round((option.votes / poll.totalVotes) * 100)}%</span>
                        </div>
                        <div className="h-3 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${(option.votes / poll.totalVotes) * 100}%` }} transition={{ duration: 1, delay: pollIndex * 0.1 + index * 0.1 }} className="h-full bg-arsenal-red rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className={`text-xs text-gray-500 dark:text-gray-400 mt-3 ${locale === 'fa' ? 'font-persian' : ''}`}>{poll.totalVotes} {t('fanZone.votes')}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeSection === 'quiz' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
              <div className="glass-card p-8">
                {!quizState.showResult ? (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-sm text-gray-500 dark:text-gray-400 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('fanZone.question')} {quizState.currentQuestion + 1} {t('fanZone.of')} {quizQuestions.length}</span>
                      <span className="text-sm font-bold text-arsenal-red">{t('fanZone.score')}: {quizState.score}</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full mb-6">
                      <motion.div animate={{ width: `${((quizState.currentQuestion + 1) / quizQuestions.length) * 100}%` }} className="h-full bg-arsenal-red rounded-full" />
                    </div>
                    <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-6 ${locale === 'fa' ? 'font-persian' : ''}`}>{quizQuestions[quizState.currentQuestion].question[locale]}</h3>
                    <div className="space-y-3 mb-6">
                      {quizQuestions[quizState.currentQuestion].options.map((option, index) => (
                        <button key={option} onClick={() => handleQuizAnswer(index)} disabled={quizState.answered} className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${locale === 'fa' ? 'font-persian text-right' : ''} ${quizState.answered ? index === quizQuestions[quizState.currentQuestion].correct ? 'bg-green-500/10 border-2 border-green-500 text-green-700 dark:text-green-400' : index === quizState.selectedAnswer ? 'bg-red-500/10 border-2 border-red-500 text-red-700 dark:text-red-400' : 'bg-gray-50 dark:bg-white/5 text-gray-400' : 'bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 border-2 border-transparent hover:border-arsenal-red/30'}`}>
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-sm font-bold">{String.fromCharCode(65 + index)}</span>
                            <span>{option}</span>
                            {quizState.answered && index === quizQuestions[quizState.currentQuestion].correct && <CheckCircle className="w-5 h-5 text-green-500 ml-auto rtl:ml-0 rtl:mr-auto" />}
                            {quizState.answered && index === quizState.selectedAnswer && index !== quizQuestions[quizState.currentQuestion].correct && <XCircle className="w-5 h-5 text-red-500 ml-auto rtl:ml-0 rtl:mr-auto" />}
                          </div>
                        </button>
                      ))}
                    </div>
                    {quizState.answered && (
                      <button onClick={nextQuestion} className={`arsenal-btn w-full ${locale === 'fa' ? 'font-persian' : ''}`}>
                        {quizState.currentQuestion < quizQuestions.length - 1 ? t('fanZone.nextQuestion') : t('fanZone.seeResults')}
                      </button>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-arsenal-red/10 rounded-full flex items-center justify-center mx-auto mb-6"><Trophy className="w-10 h-10 text-arsenal-gold" /></div>
                    <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-2 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('fanZone.quizComplete')}</h3>
                    <p className={`text-lg text-gray-600 dark:text-gray-400 mb-4 ${locale === 'fa' ? 'font-persian' : ''}`}>{t('fanZone.yourScore')}: {quizState.score} / {quizQuestions.length}</p>
                    <p className={`text-gray-500 dark:text-gray-400 mb-6 ${locale === 'fa' ? 'font-persian' : ''}`}>
                      {quizState.score === quizQuestions.length ? t('fanZone.perfectScore') : quizState.score >= 3 ? t('fanZone.goodScore') : t('fanZone.lowScore')}
                    </p>
                    <button onClick={() => setQuizState({ currentQuestion: 0, score: 0, answered: false, selectedAnswer: -1, showResult: false })} className={`arsenal-btn ${locale === 'fa' ? 'font-persian' : ''}`}>{t('fanZone.tryAgain')}</button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
