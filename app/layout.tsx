import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Alinea Immobilien GmbH | Exklusive Immobilien in Frankfurt am Main',
  description:
    'Alinea Immobilien GmbH steht für den Ankauf, Verkauf, Verwaltung und die Vermittlung hochwertiger Immobilien in Frankfurt am Main.',
  openGraph: {
    title: 'Alinea Immobilien GmbH',
    description:
      'Ihr Partner für exklusive Immobilien in Frankfurt am Main: Ankauf, Verkauf, Verwaltung und Beratung.',
    url: 'https://alinea-ffm.de',
    siteName: 'Alinea Immobilien GmbH',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://alinea-ffm.de',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
