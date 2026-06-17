import type { Metadata } from 'next';
import SquadPageContent from './SquadPageContent';

export const metadata: Metadata = {
  title: 'Squad',
  description:
    'Meet the current Arsenal squad. Player profiles, statistics, positions, and more from Persian Gooners.',
  openGraph: {
    title: 'Persian Gooners | Arsenal Squad',
    description: 'Meet the current Arsenal squad. Player profiles, statistics, and more.',
  },
};

export default function SquadPage() {
  return <SquadPageContent />;
}
