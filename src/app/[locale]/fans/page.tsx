import type { Metadata } from 'next';
import FansPageContent from './FansPageContent';

export const metadata: Metadata = {
  title: 'Persian Fans',
  description:
    'Celebrating the passionate Persian Arsenal supporters across Iran, Europe, United Kingdom, Canada, Australia, and the United States.',
  openGraph: {
    title: 'Persian Gooners | Persian Arsenal Fans',
    description: 'Celebrating Persian Arsenal supporters worldwide.',
  },
};

export default function FansPage() {
  return <FansPageContent />;
}
