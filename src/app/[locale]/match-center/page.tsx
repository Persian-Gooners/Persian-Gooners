import type { Metadata } from 'next';
import MatchCenterContent from './MatchCenterContent';

export const metadata: Metadata = {
  title: 'Match Center',
  description:
    'Arsenal match center featuring upcoming fixtures, recent results, match statistics, and league standings.',
  openGraph: {
    title: 'Persian Gooners | Match Center',
    description: 'Arsenal match center with fixtures, results, and stats.',
  },
};

export default function MatchCenterPage() {
  return <MatchCenterContent />;
}
