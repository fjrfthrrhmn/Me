'use client';
import Footer from '@/components/layouts/Footer';
import Navigation from '@/components/layouts/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
