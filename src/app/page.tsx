import React from 'react';
import HeroSection from '@/components/HeroSection';
import ClubsInformation from '@/components/ClubsInformation';
import { JoinUs } from '@/components/JoinUs';
import { TabsDemo } from '@/components/Tabs';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <ClubsInformation />
      <TabsDemo />
      <JoinUs />
      <Footer />
    </main>
  );
}
