'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { OptimizedLink } from '@/components/OptimizedLink';

export function Career() {
    return (
        <section id="Section" className="w-full bg-white py-16 md:py-24 overflow-hidden">
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
                            Our Community Impact
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl text-[#223042] mb-6 lg:mb-8 leading-relaxed">
                            At THALLIES, our impact reaches all levels of the community. We are present in homes, schools, and local organizations because we believe that true success is measured by the lives we serve beyond our offices. Learn more about who we are as a company and discover the local initiatives and events we are currently involved in. See what makes THALLIES a prominent and trusted member of your neighborhood.
                        </p>



                        <OptimizedLink href="/residential" variant="button" size="lg" className="bg-[#BF0603] hover:bg-[#8B0000] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                            Learn More
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
                                {/* Overlay rojo semidifuminado */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#BF0603]/80 via-[#BF0603]/40 to-transparent" />
                                {/* Texto y botón centrados */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4 py-4">
                                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white drop-shadow mb-2 sm:mb-4">Ready to make a difference?</h3>
                                    <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 max-w-xs sm:max-w-md mx-auto drop-shadow">Join THALLIES and help us build a better, more connected community. Your talent and passion can power the future!</p>
                                    <OptimizedLink href="/talent-aplications" variant="button" size="lg" className="bg-white/90 hover:bg-white text-[#BF0603] font-bold px-4 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg transition-colors text-sm sm:text-base">
                                        Join our team
                                    </OptimizedLink>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
