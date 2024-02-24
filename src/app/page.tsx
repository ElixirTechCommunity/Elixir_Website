import React from 'react';
import HeroSection from '@/components/HeroSection';
import ClubsInformation from '@/components/ClubsInformation';
import { JoinUs } from '@/components/JoinUs';
import { TabsDemo } from '@/components/Tabs';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClubsInformation />
      <TabsDemo />
      <JoinUs />
    </main>
  );
}
