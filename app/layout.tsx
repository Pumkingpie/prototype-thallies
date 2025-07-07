import { FC, PropsWithChildren } from "react";
import './globals.css';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NavigationProgress } from "@/components/NavigationProgress";
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Thallies - Telecommunications Solutions',
  description: 'Discover innovative telecommunications solutions that connect communities and empower businesses with fiber-optic internet and bundled services.',
  keywords: 'telecommunications, fiber optic, internet, business solutions, residential services',
  authors: [{ name: 'Thallies' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Thallies - Telecommunications Solutions',
    description: 'Discover innovative telecommunications solutions that connect communities and empower businesses.',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <NavigationProgress />
        <Navbar />
        <main className="pt-16 min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;