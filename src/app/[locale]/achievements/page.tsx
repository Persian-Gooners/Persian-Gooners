import type { Metadata } from 'next';
import AchievementsPageContent from './AchievementsPageContent';

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Arsenal FC achievements and trophies including Premier League titles, FA Cups, League Cups, Community Shields, and European trophies.',
  openGraph: {
    title: 'Persian Gooners | Arsenal Achievements',
    description: 'Arsenal FC achievements and trophy history.',
  },
};

export default function AchievementsPage() {
  return <AchievementsPageContent />;
}
