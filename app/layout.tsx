import { Inter, Orbitron } from 'next/font/google';
import './globals.css';

// Professional Body Font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// High-Tech Brand Font
const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className={`${inter.className} antialiased transition-colors duration-500`}>
        {children}
      </body>
    </html>
  );
}
