import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deepali | Full Stack Web Developer',
  description:
    'Full Stack Web Developer delivering end‑to‑end web solutions: UI development, backend APIs, and database integration.',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Deepali', url: 'https://github.com/DEEPALI-2005' }],
  creator: 'Deepali',
  publisher: 'Deepali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepali-portfolio.vercel.app',
    siteName: 'Deepali | Portfolio',
    title: 'Deepali | Full Stack Web Developer',
    description:
      'Full Stack Web Developer delivering end‑to‑end web solutions: UI development, backend APIs, and database integration.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deepali Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepali | Full Stack Web Developer',
    description:
      'Full Stack Web Developer delivering end‑to‑end web solutions: UI development, backend APIs, and database integration.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
