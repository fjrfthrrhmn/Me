'use client';
import { DotGrid } from '@/components/fragments/Background';
import { Spotlight } from '@/components/fragments/Spotlight';
import Footer from '@/components/layouts/Footer';
import Navigation from '@/components/layouts/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute inset-0 w-full h-full -z-10">
        <DotGrid />
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      </div>

      <Navigation />
      {children}
      <Footer />
    </>
  );
}
