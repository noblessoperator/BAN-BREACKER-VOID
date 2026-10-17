// BAN BREAKER/app/layout.tsx

import type { Metadata } from 'next';
import { Poppins, Orbitron } from 'next/font/google';
import { ThemeProvider } from '../components/layout/ThemeProvider';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'BanBreaker - Heavstal Tech™ Unban Solutions',
  description: "The premium unban tool by Heavstal Tech™, helping you restore your WhatsApp account and group access effectively.",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${orbitron.variable} font-poppins`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark-yellow"
          themes={['dark-blue', 'dark-yellow', 'dark-red']}
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}