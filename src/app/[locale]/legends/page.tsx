import type { Metadata } from 'next';
import LegendsPageContent from './LegendsPageContent';

export const metadata: Metadata = {
  title: 'Legends',
  description:
    'Celebrate the greatest Arsenal legends including Thierry Henry, Dennis Bergkamp, Ian Wright, Patrick Vieira, Mesut Özil, Arsène Wenger, Herbert Chapman, Tony Adams, and Robert Pires.',
  openGraph: {
    title: 'Persian Gooners | Arsenal Legends',
    description: 'Celebrate the greatest Arsenal legends of all time.',
  },
};

export default function LegendsPage() {
  return <LegendsPageContent />;
}
