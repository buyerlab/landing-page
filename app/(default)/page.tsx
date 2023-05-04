export const metadata = {
    title: 'BuyerLab - Capstone Project',
    description: 'A Sponsored INFO Capstone Project by Team BuyerLab',
};

import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Testimonials from '@/components/testimonials';

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturesBlocks />
            <Features />
            <Testimonials />
        </>
    );
}
