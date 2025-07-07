'use client';

import { Navbar } from '@/components/navbar';
import {
    AboutHero,
    Story,
    MissionVision,
    Values,
    Team,
    CTA
} from '@/components/who-we-are/about-us';

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Navbar />

            <AboutHero />

            <main className="py-16">
                <div className="container mx-auto px-4">
                    <Story />
                    <MissionVision />
                    <Values />
                    <Team />
                    <CTA />
                </div>
            </main>
        </div>
    );
} 