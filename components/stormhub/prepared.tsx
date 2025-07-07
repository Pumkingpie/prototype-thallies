'use client';
import React from "react";
import { motion } from "framer-motion";

interface FeatureInfo {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function Prepared() {
    const features: FeatureInfo[] = [
        {
            title: "Resilient Fiber-Optic Network",
            description: "Our network is designed to withstand strong winds, flooding, and extreme temperatures, ensuring your services remain active as long as there is power.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#BF0603]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: "24/7 Monitoring",
            description: "Our engineers monitor the network in real time from hurricane-proof facilities, proactively anticipating and resolving issues.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#001427]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
        {
            title: "Customer Service Always Available",
            description: "Our customer service centers operate 24/7, even during storms, to provide you with immediate support.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#F4D58D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: "Rapid Response Team",
            description: "We have strategically located teams ready to quickly restore services after a storm, prioritizing the most affected areas.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#BF0603]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" stroke="#BF0603" strokeWidth="2" fill="none" />
                </svg>
            ),
        },
        {
            title: "Preparation and Communication",
            description: "We maintain constant communication and conduct community and employee check-ins to assess damages and begin restoration as soon as possible.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#001427]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v-6m0 0l-3 3m3-3l3 3" />
                </svg>
            ),
        },
    ];

    return (
        <div className="w-full bg-[#f2f2f2] py-16">
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#001427]">Prepared for Any Storm</h2>
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