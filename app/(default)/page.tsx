export const metadata = {
    title: 'BuyerLab - Capstone Project',
    description: 'A Sponsored INFO Capstone Project by Team BuyerLab',
};

import Hero from '@/components/hero';
import Features from '@/components/features';
import Stakeholders from '@/components/stakeholders';
import Retailers from '@/components/retailers';
import Team from '@/components/team';
import Timeline from '@/components/timeline';

export default function Home() {
    return (
        <>
            <Hero />
            <Stakeholders />
            <Timeline />
            <Features />
            <Retailers />
            <Team />
        </>
    );
}
