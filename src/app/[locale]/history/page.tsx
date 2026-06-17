import type { Metadata } from 'next';
import HistoryPageContent from './HistoryPageContent';

export const metadata: Metadata = {
  title: 'History',
  description:
    'Explore the rich history of Arsenal Football Club from its foundation in 1886 to the present day. From Herbert Chapman to Arsène Wenger to Mikel Arteta.',
  openGraph: {
    title: 'Persian Gooners | Arsenal History',
    description: 'Explore the rich history of Arsenal Football Club.',
  },
};

export default function HistoryPage() {
  return <HistoryPageContent />;
}
