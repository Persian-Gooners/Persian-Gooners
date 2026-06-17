import type { Metadata } from 'next';
import FanZoneContent from './FanZoneContent';

export const metadata: Metadata = {
  title: 'Fan Zone',
  description:
    'Join the Persian Gooners fan community with match predictions, polls, quizzes, and fan stories.',
  openGraph: {
    title: 'Persian Gooners | Fan Zone',
    description: 'Join the Persian Gooners fan community.',
  },
};

export default function FanZonePage() {
  return <FanZoneContent />;
}
