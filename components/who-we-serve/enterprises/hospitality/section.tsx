'use client';
import React from "react";
import { motion } from "framer-motion";

interface FeatureInfo {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function Section() {
    const features: FeatureInfo[] = [
        {
            title: "Telecommunications Partnership",
            description: "Our in-house support team is available 24x7x365, providing hotel management with comprehensive technical support relieving hotel management teams of having to deal with technical troubles.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#BF0603]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: "In-Room Entertainment",
            description: "Enhance guest entertainment with in-room TV Entertainment, designed for modern viewing habits. Guests can easily navigate and enjoy their favorite content, spending less time browsing and more time watching.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#001427]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "Bandwidth Scalability",
            description: "Our foundation is built on a scalable fiber-optic network, providing flexible bandwidth options that can be easily increased to accommodate large conferences, business retreats or the bandwidth needs of the future.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#F4D58D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
            ),
        },

    ];

    return (
        <div className="w-full bg-[#f2f2f2] py-16">
            <section id="Section" className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#001427]">Why THALLIES Fiber Optic Internet for Hospitality?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 text-center border-2 border-transparent hover:border-[#BF0603] transition-colors"
                            whileHover={{ scale: 1.07 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-base">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
} 