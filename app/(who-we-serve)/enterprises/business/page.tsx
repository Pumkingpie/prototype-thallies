'use client';
import {
    Hero,
    InternetService,
    TVService,
    SecurityService,
    VoiceService,
    DataStorage,
    Section,
    CTA
} from '@/components/who-we-serve/enterprises/business';

export default function BusinessPage() {
    return (
        <main>
            <Hero />
            <div className=" mb-24 ">
                <Section />
            </div>
            {/* Sección de Servicios Empresariales */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#001427] mb-6">
                            THALLIES Business Solutions
                        </h1>
                        <p className="text-xl text-[#708D81] max-w-3xl mx-auto">
                            Discover our comprehensive suite of business services designed to accelerate your business with reliable, customizable, and scalable telecommunications solutions.
                        </p>
                    </div>
                    {/* Internet & Managed Wi-Fi */}
                    <div className="mb-24">
                        <InternetService />
                    </div>
                    {/* TV Business */}
                    <div className="mb-24">
                        <TVService />
                    </div>
                    {/* Voice Business */}
                    <div className="mb-24">
                        <VoiceService />
                    </div>
                    {/* Security Business */}
                    <div className="mb-24">
                        <SecurityService />
                    </div>
                    {/*DataStorage */}
                    <div className='mb-24'>
                        <DataStorage />
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
}
