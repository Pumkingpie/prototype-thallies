'use client';

import {
    Hero,
    Section,
    InternetConnect,
    NetworkConnect,
    TVService,
    VoiceService,
    CTA
} from "@/components/who-we-serve/enterprises/Senior-Living";

export default function SeniorLivingPage() {
    return (
        <main>
            <Hero />
            <div className=" mb-24 ">
                <Section />
            </div>
            {/* Sección de Servicios de Senior Living */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#001427] mb-6">
                            THALLIES Senior Living Solutions
                        </h1>
                        <p className="text-xl text-[#708D81] max-w-3xl mx-auto">
                            Our fiber optic network powers our services and products to provide better and safer care. We are deeply committed to enhancing the daily lives of senior residents with reliable technology and trusted services.
                        </p>
                    </div>
                    {/* Fiber Optic Internet */}
                    <div className="mb-24">
                        <InternetConnect />
                    </div>
                    {/* Community-Wide Wi-Fi */}
                    <div className="mb-24">
                        <NetworkConnect />
                    </div>
                    {/* Interactive TV */}
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

}