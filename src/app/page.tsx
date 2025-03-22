'use client';

import { EmptyState } from '@/components/EmptyState';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { WinnerList } from '@/components/WinnerList';
import { useRaffle } from '@/hooks/useRaffle';

export default function Home() {
  const { winners } = useRaffle();

  if (!winners.length) {
    return <EmptyState />;
  }

  return (
    <div>
      <Header />
      <main>
        <WinnerList winners={winners} />
      </main>
      <Footer />
    </div>
  );
}
