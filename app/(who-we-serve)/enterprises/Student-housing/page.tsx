'use client';

import {
    Hero,
    InternetConnect,
    NetworkConnect,
    Section,
    TVService,
    CTA
} from "@/components/who-we-serve/enterprises/Student-Housing";

export default function StudentHousing() {
    return (
        <main>
            <Hero />
            <div className=" mb-24 ">
                <Section />
            </div>
            {/* Sección de Servicios de Student Housing */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#001427] mb-6">
                            THALLIES Student Housing Solutions
                        </h1>
                        <p className="text-xl text-[#708D81] max-w-3xl mx-auto">
                            With multi-Gigabit internet speeds available to all students, we strive to enhance their academic success and provide an unparalleled amenity experience. Our network is sharper, smarter, and faster, precisely what today&apos;s students need.
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
                    {/* High Definition IPTV */}
                    <div className="mb-24">
                        <TVService />
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );

}