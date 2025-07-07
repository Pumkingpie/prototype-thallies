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
            title: "Enhanced & Reliable Connectivity",
            description: "By partnering with THALLIES Communications, student housing groups can provide residents with enhanced connectivity options. This includes access to high-speed internet, reliable Wi-Fi connections, and advanced network infrastructure to support the increasing demand for digital resources.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#BF0603]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            ),
        },
        {
            title: "Dedicated Support & Expertise",
            description: "We specialize in delivering optimal network performance, troubleshooting any connectivity issues, and providing technical assistance when needed. This ensures that student housing management can focus on their core responsibilities while leaving the telecom-related aspects to us.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#001427]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: "Connected Community Experience",
            description: "As your dedicated telecommunication partner, we are deeply committed to enhancing the daily lives of student residents providing a community-wide experience like no other. Property-wide connection at the pool, fitness area and study rooms for community living that students desire.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#F4D58D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },

    ];

    return (
        <div className="w-full bg-[#f2f2f2] py-16">
            <section id="Section" className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#001427]">Why THALLIES Fiber Optic Internet for Student Housing?</h2>
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