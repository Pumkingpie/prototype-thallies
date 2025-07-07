'use client';
import React from "react";
import { motion } from "framer-motion"

interface FeatureInfo {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function Section() {
    const features: FeatureInfo[] = [
        {
            title: "Fiber Optic Technology",
            description: "Experience lightning-fast internet speeds with our cutting-edge fiber optic technology, providing reliable and consistent connectivity for all your digital needs.",
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
                d: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            })),
        },
        {
            title: "Unlimited Data",
            description: "Enjoy unlimited data usage without worrying about caps or restrictions. Stream, download, and browse without limits.",
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
                d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            })),
        },
        {
            title: "24/7 Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions or technical issues you may have.",
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
                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            })),
        },
    ];

    return (
        <div className="w-full bg-[#f2f2f2] py-16">
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#001427]">Why Choose Our Residential Services?</h2>
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