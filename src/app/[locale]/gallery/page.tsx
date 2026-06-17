import type { Metadata } from 'next';
import GalleryPageContent from './GalleryPageContent';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Arsenal photo gallery featuring historic moments, trophy celebrations, Emirates Stadium, and fan photos.',
  openGraph: {
    title: 'Persian Gooners | Gallery',
    description: 'Arsenal photo gallery.',
  },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
