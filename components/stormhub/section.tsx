'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { OptimizedLink } from '@/components/OptimizedLink';

export function Section() {
    return (
        <section id="section-video" className="w-full bg-white py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Left column: Title and info */}
                    <motion.div
                        className="flex-1 text-center lg:text-left min-w-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#001427] mb-6 leading-tight break-words">
                            How does the THALLIES response team act?
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl text-[#223042] mb-6 lg:mb-8 leading-relaxed">
                            Our response team is strategically located nationwide and ready to move to threatened areas, ensuring quick and efficient restoration after any storm or natural disaster.
                        </p>

                        <ul className="space-y-4 mb-6 lg:mb-8 text-left text-[#223042] text-base md:text-lg">
                            <li><b>Proactive measures:</b> We protect critical infrastructure from possible flooding and freezing.</li>
                            <li><b>Preparation checklist:</b> We assign clear roles and responsibilities to each team member, with strategies to operate during emergencies.</li>
                            <li><b>Chain of command:</b> We implement an organizational structure that guarantees continuity of operations and service during any weather event.</li>
                            <li><b>Emergency supplies:</b> We have fuel, generators, and sandbags ready to be deployed when it is safe for the THALLIES team.</li>
                            <li><b>Constant communication:</b> We conduct continuous check-ins with communities and employees to assess damages and begin restoration work immediately.</li>
                        </ul>

                        <OptimizedLink href="/contact" variant="button" size="lg" className="bg-[#BF0603] hover:bg-[#8B0000] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                            Request information
                        </OptimizedLink>
                    </motion.div>

                    {/* Right column: Image instead of video */}
                    <motion.div
                        className="flex-1 w-full max-w-2xl"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full mx-auto">
                            {/* Relevant storm/preparation image */}
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-[#BF0603]/20">
                                <Image
                                    src="/image/stormhub/Service.webp"
                                    alt="Storm preparation"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={85}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
