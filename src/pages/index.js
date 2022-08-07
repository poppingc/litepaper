import Charts from '@/components/home/charts';
import HomeFeatured from '@/components/home/featured';
import HomeHero from '@/components/home/hero';
import HomeHeroBottom from '@/components/home/hero-bottom';
import HomeMeet from '@/components/home/meet';
import HomeReceiveUpdate from '@/components/home/receive-update';
import HomeRoadmap from '@/components/home/roadmap';
import HomeTeam from '@/components/home/team';
import HomeTokenomics from '@/components/home/tokenomics';
import HomeVision from '@/components/home/vision';
import HomeWhat from '@/components/home/what';
import HomeWhy from '@/components/home/why';
import Line from '@/components/line';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeHeroBottom />
      <Line />
      <HomeWhat />
      <Line />
      <HomeWhy />
      <Line />
      <HomeVision />
      <Line />
      <HomeMeet />
      <Line />
      <HomeTokenomics />
      <Line />
      <Charts />
      <Line />
      <HomeTeam />
      <Line />
      <HomeFeatured />
      <Line />
      <HomeRoadmap />
      <Line />
      <HomeReceiveUpdate />
    </>
  );
}
