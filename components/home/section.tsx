'use client';
import React from "react";
import { motion } from "framer-motion"

interface CardInfo {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function Section() {
    const cards: CardInfo[] = [
        {
            title: "Fast Performance",
            description: "Not just fast, consistently fast. We understand settling for slow, unreliable internet is no longer an option. So, we built a highly dependable fiber optic internet network that delivers lightning-fast speeds directly to each customer. With no bandwidth sharing and 100% symmetrical speeds, customers enjoy a smooth online experience at all times, on all devices, even during peak hours.",
            icon: (
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#BF0603]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: "Concierge-Level Customer Service",
            description: "We recognize that the telecom industry hasn't always been praised for its customer service, so we set out to create a company that puts our valued customers at the heart of everything we do. Our core mission is to provide an unparalleled VIP customer experience to each of our customers from day one with dedicated and continuous support.",
            icon: (
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#001427]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2V7a2 2 0 10-4 0v2c0 1.104.896 2 2 2zm6 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2v-5a6 6 0 1112 0z" />
                </svg>
            ),
        },
        {
            title: "Cutting-Edge Technology",
            description: "As piloting leaders in fiber optic internet, we're committed to delivering cutting-edge technology. Our goal is to elevate everyday experiences with our ever-evolving suite of THALLIES Solutions. Plus, our network effortlessly scales as bandwidth needs grow, so customers never worry about staying ahead of technology demands. We're already paving the way!",
            icon: (
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#F4D03F]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636A9 9 0 105.636 18.364 9 9 0 0018.364 5.636z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5l3 3" />
                </svg>
            ),
        },
    ];

    return (
        <div className="w-full bg-[#f2f2f2] py-16">
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#001427]">Why Choose Us?</h2>
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

