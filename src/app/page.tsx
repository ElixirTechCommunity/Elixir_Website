import React from 'react';
import HeroSection from '@/components/HeroSection';
import ClubsInformation from '@/components/ClubsInformation';
import { JoinUs } from '@/components/JoinUs';
import { ElixirTabs } from '@/components/ElixirTabs';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClubsInformation />
      <ElixirTabs />
      <JoinUs />
    </main>
  );
}
