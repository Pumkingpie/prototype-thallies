'use client';
import {
    Hero,
    Section,
    TVService,
    EmailService,
    VoiceService,
    CTA
} from "@/components/who-we-serve/enterprises/hospitality";

export default function HospitalityPage() {
    return (
        <main>
            <Hero />
            <div className=" mb-24 ">
                <Section />
            </div>
            {/* Sección de Servicios de Hospitality */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#001427] mb-6">
                            THALLIES Hospitality Solutions
                        </h1>
                        <p className="text-xl text-[#708D81] max-w-3xl mx-auto">
                            Discover our comprehensive suite of hospitality services designed to enhance guest experience and streamline hotel operations with cutting-edge technology.
                        </p>
                    </div>
                    {/* Internet & Managed Wi-Fi */}
                    <div className="mb-24">
                        <EmailService />
                    </div>
                    {/* TV Entertainment */}
                    <div className="mb-24">
                        <TVService />
                    </div>
                    {/* Voice Services */}
                    <div className="mb-24">
                        <VoiceService />
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );

};