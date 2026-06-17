import type { Metadata } from 'next';
import NewsPageContent from './NewsPageContent';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Stay up to date with the latest Arsenal news, transfer updates, match reports, and community stories from Persian Gooners.',
  openGraph: {
    title: 'Persian Gooners | Arsenal News',
    description:
      'Stay up to date with the latest Arsenal news, transfer updates, match reports, and community stories.',
  },
};

export default function NewsPage() {
  return <NewsPageContent />;
}
