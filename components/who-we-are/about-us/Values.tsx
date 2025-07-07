'use client';

import { motion } from 'framer-motion';

export function Values() {
    const values = [
        {
            title: "Innovation",
            description: "We constantly seek new technologies and solutions to improve our services and stay ahead of the curve.",
            icon: (
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#BF0603]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: "Customer Service",
            description: "Our customers are our priority. We provide 24/7 support and personalized solutions to ensure satisfaction.",
            icon: (
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#001427]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: "Reliability",
            description: "We guarantee a stable and reliable service, with robust infrastructure and preventive maintenance.",
            icon: (
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#F4D03F]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="mb-20 overflow-hidden bg-[#f2f2f2] py-16 w-full">
            <div className="w-full px-4 md:px-8 lg:px-16">
                <motion.h2
                    className="text-4xl font-bold text-[#001427] text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    Our Values
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 text-center border-2 border-transparent hover:border-[#BF0603] transition-colors"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 