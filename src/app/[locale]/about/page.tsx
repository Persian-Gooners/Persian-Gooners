import type { Metadata } from 'next';
import AboutPageContent from './AboutPageContent';

export const metadata: Metadata = {
  title: 'About Arsenal',
  description:
    'Learn about Arsenal Football Club — its identity, philosophy, rivalries, stadium, academy, and global fanbase.',
  openGraph: {
    title: 'Persian Gooners | About Arsenal',
    description: 'Learn about Arsenal Football Club.',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
