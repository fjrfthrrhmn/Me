'use client';
import { DotGrid } from '@/components/fragments/Background';
import Footer from '@/components/layouts/Footer';
import Navigation from '@/components/layouts/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute inset-0 w-full h-full -z-50">
        <DotGrid />
      </div>
      <Navigation />
      {children}
      {/* <Footer /> */}
    </>
  );
}
