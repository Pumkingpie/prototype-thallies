'use client';

import { Hero } from '@/components/who-we-serve/residential/Hero';
import { Section } from '@/components/who-we-serve/residential/section';
import { SingleFamilyCTA } from '@/components/who-we-serve/residential/SingleFamilyCTA';
import { WhyChoose } from '@/components/who-we-serve/residential/WhyChoose';
import { InternetService, TVService, SecurityService, VoiceService, SectionVideo } from '@/components/who-we-serve/residential';

export default function ResidentialPage() {
    return (
        <main>
            <Hero />
            <SectionVideo />
            <Section />
            {/* Services Section */}
            <section className="py-16 md:py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001427] mb-4 md:mb-6 break-words">
                            Our Residential Services
                        </h2>
                        <p className="text-lg md:text-xl text-[#708D81] max-w-3xl mx-auto leading-relaxed">
                            Discover our comprehensive suite of residential services designed to enhance your home connectivity and entertainment experience.
                        </p>
                    </div>

                    {/* Internet Service */}
                    <div className="mb-20 md:mb-24">
                        <InternetService />
                    </div>

                    {/* TV Service */}
                    <div className="mb-20 md:mb-24">
                        <TVService />
                    </div>

                    {/* Voice Service */}
                    <div className="mb-20 md:mb-24">
                        <VoiceService />
                    </div>

                    {/* Security Service */}
                    <div className="mb-20 md:mb-24">
                        <SecurityService />
                    </div>
                </div>
            </section>

            <WhyChoose />
            <SingleFamilyCTA />
        </main>
    );
} 