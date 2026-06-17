import type { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Persian Gooners. Contact us for community submissions, partnerships, or general inquiries.',
  openGraph: {
    title: 'Persian Gooners | Contact',
    description: 'Get in touch with Persian Gooners.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
