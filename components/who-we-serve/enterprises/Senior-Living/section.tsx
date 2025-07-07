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
            title: "Lifestyle Enhancing",
            description: "Our high-speed fiber-optic internet connection is designed to enrich the lives of seniors in senior housing. With seamless communication, immersive entertainment, and a world of online possibilities at their fingertips, seniors can enjoy enhanced connectivity, engagement, and convenience for a truly fulfilling lifestyle.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#BF0603]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
        {
            title: "Better Care",
            description: "Delivering the highest level of care to senior residents starts with reliable technology and trusted services. With our dependable THALLIES Fiber Optic internet, residents can rely on continuous health, safety, and security monitoring, while facilities can provide real-time and remote monitoring capabilities for families and caretakers, ensuring peace of mind for all.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#001427]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
            ),
        },
        {
            title: "True Partnership",
            description: "As your dedicated telecommunication partner, we are deeply committed to enhancing the daily lives of senior residents. Our 24/7/365 accessible, US-based call center is always ready to assist and keep you connected. Also, residents can engage in THALLIES education classes, available both in-person and remotely, to unlock the full potential of their products and services.",
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
                <h2 className="text-3xl font-bold mb-12 text-center text-[#001427]">Why THALLIES Fiber Optic Internet for Senior Living?</h2>
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