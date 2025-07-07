'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { OptimizedLink } from '@/components/OptimizedLink';

export function SectionVideo() {
    return (
        <section id="section-video" className="w-full bg-white py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Columna izquierda: Título e información */}
                    <motion.div
                        className="flex-1 text-center lg:text-left min-w-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#001427] mb-6 leading-tight break-words">
                            Revolutionizing Fiber Optic Internet
                            <span className="block text-[#BF0603]">for Your Community</span>
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl text-[#223042] mb-6 lg:mb-8 leading-relaxed">
                            Welcome to THALLIES Residential, where we revolutionized community-wide fiber-optic internet & bundled telecommunication services for Residential Communities, Homeowner Associations, Condo Associations and neighborhoods.
                        </p>

                        <p className="text-base md:text-lg lg:text-xl text-[#223042] mb-6 lg:mb-8 leading-relaxed">
                            We provide commercial-grade internet speeds at a fraction of the cost residents currently pay other providers. With our true Fiber-to-the-Home connection, each resident enjoys a direct fiber line that is scalable to meet evolving needs, along with access to bundled telecommunication services & products including IPTV, VoIP and more!
                        </p>

                        <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#BF0603] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-[#001427] font-medium text-sm md:text-base">Commercial-grade internet speeds</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#BF0603] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-[#001427] font-medium text-sm md:text-base">True Fiber-to-the-Home connection</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#BF0603] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-[#001427] font-medium text-sm md:text-base">Scalable to meet evolving needs</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#BF0603] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-[#001427] font-medium text-sm md:text-base">Bundled services: IPTV, VoIP & more</span>
                            </div>
                        </div>

                        <OptimizedLink href="/contact" variant="button" size="lg" className="bg-[#BF0603] hover:bg-[#8B0000] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                            Install Request
                        </OptimizedLink>
                    </motion.div>

                    {/* Columna derecha: Video */}
                    <motion.div
                        className="flex-1 w-full max-w-2xl"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full mx-auto">
                            {/* Contenedor del video con proporción 16:9 */}
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-[#BF0603]/20">
                                {/* Thumbnail del video usando Next.js Image */}
                                <Image
                                    src="/image/fondo1.webp"
                                    alt="THALLIES Fiber Video Thumbnail"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={85}
                                />

                                {/* Overlay semitransparente */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#001427]/60 to-[#BF0603]/60 flex items-center justify-center">
                                    <div className="text-center text-white px-4">
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                            <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-base md:text-lg font-semibold">Video de THALLIES Fiber</p>
                                        <p className="text-xs md:text-sm opacity-80">Experiencia de conectividad</p>
                                    </div>
                                </div>

                                {/* Botón de play overlay */}
                                <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-300 group">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-[#BF0603] ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </button>
                            </div>

                            {/* Indicador de duración */}
                            <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 bg-black/70 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                                2:45
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
