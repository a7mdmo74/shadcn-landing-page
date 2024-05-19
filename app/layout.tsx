import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import Navbar from '@/components/shared/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shadcn Landing Page',
  description:
    'Shadcn Landing Page built with Next.js, Tailwind CSS and Shadcn UI',
  authors: [
    {
      name: 'a7mdmo74',
      url: 'https://portfolio-a7mdmo74.vercel.app/',
    },
  ],
  keywords: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
