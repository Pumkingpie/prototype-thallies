'use client';
import React from "react";
import { motion } from "framer-motion"

interface CardInfo {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function WhyChoose() {
    const cards: CardInfo[] = [
        {
            title: "Reliably Fast Speed",
            description: "Our fiber optic internet doesn't just offer speed; it's built on unwavering reliability, keeping residents connected 'round the clock, on all devices, even during peak hours. No sharing bandwidth with neighbors, each resident enjoys a dedicated fiber line for uninterrupted connectivity with no data caps. Our 100% symmetrical, fiber optic internet provides a smooth digital experience for residents to enjoy.",
            icon: React.createElement('svg', {
                width: 40,
                height: 40,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                className: "text-[#BF0603]"
            }, React.createElement('path', {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13 10V3L4 14h7v7l9-11h-7z"
            })),
        },
        {
            title: "Community-Focused with Community-Wide Savings",
            description: "Our community-centric approach ensures that communities are equipped with a dedicated fiber optic internet network, offering seamless Wi-Fi access points at key areas like the pool and fitness center. Our community partnership allows residents to enjoy faster internet at a fraction of the cost they would individually pay other providers and enjoy bundled telecommunication services at low cost.",
            icon: React.createElement('svg', {
                width: 40,
                height: 40,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                className: "text-[#001427]"
            }, React.createElement('path', {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            })),
        },
        {
            title: "Concierge-Level Customer Service",
            description: "We understand the responsibility an association or neighborhood takes on by entering into a community-wide agreement, so we strive to provide an engaged support system with a dedicated and local team at your service. From a dedicated property Account Manager to local leadership presence in every market we serve, we're here to provide you with hands-on assistance tailored to your community's needs.",
            icon: React.createElement('svg', {
                width: 40,
                height: 40,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                className: "text-[#F4D58D]"
            }, React.createElement('path', {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            })),
        },
    ];

    return (
        <div className="w-full bg-[#f2f2f2] py-16">
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#001427]">Why Choose THALLIES Residential?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={card.title}
                            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 text-center border-2 border-transparent hover:border-[#BF0603] transition-colors"
                            whileHover={{ scale: 1.07 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                        >
                            <div className="mb-4">{card.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-gray-600 text-base">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
} 