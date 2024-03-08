import { Hero, CarCatalogue } from '@/components';
import { HomeProps } from '@/types';
import Image from 'next/image';

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue searchParams={searchParams} />
    </main>
  );
}
