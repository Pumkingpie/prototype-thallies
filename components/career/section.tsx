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
            title: "Dynamic",
            description: "At Hotwire Communications, we thrive on creativity and momentum, turning ideas into action together. Real progress comes from continuous learning and a shared drive to improve.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#BF0603]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: "Innovative",
            description: "We encourage each other to explore new ideas and bring a fresh, creative approach to develop solutions that push the boundaries of what’s possible.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#001427]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
        {
            title: "Collaborative",
            description: "Teamwork is built into everything we do. From everyday problem-solving to big-picture innovation, we support and trust each other to achieve the best solutions.",
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#F4D58D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="w-full bg-[#f2f2f2] py-16">
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#001427]">Our Culture & Values</h2>
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