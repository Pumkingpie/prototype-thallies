'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { OptimizedLink } from '../OptimizedLink';

export default function WhoServe() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col items-center">
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#001427]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Who We Serve
            </motion.h2>
            <motion.p
                className="text-xl md:text-2xl text-center mb-12 max-w-2xl text-[#223042]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                Whether you oversee multifamily properties, a chain of retail businesses, or somewhere in between,
                we recognize the crucial role telecommunications services play in your day to day operations and we are committed to being your connectivity partner.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl">
                {/* Card 1: Imagen */}
                <motion.div
                    className="bg-white rounded-xl shadow-md flex items-center justify-center p-4 min-h-[16rem] md:min-h-[18rem] relative order-1 sm:order-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Image
                        src="/image/residential/young-man.webp"
                        alt="Personas"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                    />
                </motion.div>
                {/* Card 2: Imagen */}
                <motion.div
                    className="bg-white rounded-xl shadow-md flex items-center justify-center p-4 min-h-[16rem] md:min-h-[18rem] relative order-3 sm:order-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Image
                        src="/image/enterprise/reunion-home.webp"
                        alt="Empresas"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </motion.div>
                {/* Card 3: Texto + Botón */}
                <motion.div
                    className="bg-gradient-to-br from-[#001427] to-[#BF0603] rounded-xl shadow-md flex flex-col items-center justify-between p-8 md:p-10 min-h-[18rem] md:min-h-[20rem] order-2 sm:order-3"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="text-center flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Soluciones para Personas</h3>
                        <p className="text-white/90 text-lg md:text-xl text-center">THALLIES offers community-wide fiber-optic internet and bundled telecommunication services, including Wi-Fi, TV services, home phone, security, and home automation. These services are available to residential communities, homeowner associations, master-planned communities, condo associations, and neighborhoods at half the cost tenants would pay to other providers for lower speeds.</p>
                    </div>
                    <div className="mt-8">
                        <OptimizedLink href="/residential" className="bg-white text-[#001427] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#BF0603] hover:text-white transition-colors text-lg inline-block">Explore Residential</OptimizedLink>
                    </div>
                </motion.div>
                {/* Card 4: Texto + Botón */}
                <motion.div
                    className="bg-gradient-to-br from-[#BF0603] to-[#8B0000] rounded-xl shadow-md flex flex-col items-center justify-between p-8 md:p-10 min-h-[18rem] md:min-h-[20rem] order-4 sm:order-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="text-center flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Soluciones para Empresas</h3>
                        <p className="text-white/90 text-lg md:text-xl text-center">THALLIES Enterprise offers scalable technology solutions, including managed Wi-Fi, business TV services, digital phone services, and security systems. These solutions are tailored to meet the needs of various industries and business sizes, including small-to-medium sized businesses, resorts and hotels, student housing, senior living facilities, venues and stadiums, and the public sector.</p>
                    </div>
                    <div className="mt-8">
                        <OptimizedLink href="/enterprises/business" className="bg-white text-[#001427] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#BF0603] hover:text-white transition-colors text-lg inline-block">Explore Enterprise</OptimizedLink>
                    </div>
                </motion.div>
            </div>
            {/* Responsive: en móvil solo mostrar la card 1 y card 3, luego la 2 y la 4 */}
            <style jsx>{`
                @media (max-width: 639px) {
                    .order-3, .order-4 {
                        margin-top: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}
