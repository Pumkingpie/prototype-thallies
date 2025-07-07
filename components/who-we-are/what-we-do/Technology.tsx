'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const technologies = [
    {
        id: 1,
        title: 'Real FTTH Fiber Optics',
        description: 'Our fiber optics reach directly to your home or business, with no copper cables or intermediate connections. This guarantees maximum speed and reliability.',
        benefits: ['Speeds up to 10 Gbps', 'Low latency', 'Stable, degradation-free connection'],
        icon: '🔗',
        status: 'Available'
    },
    {
        id: 2,
        title: '5G Network',
        description: 'Fifth-generation mobile coverage for maximum speed.',
        benefits: ['Ultra-fast speeds', 'Low latency', 'High capacity'],
        icon: '📶',
        status: 'Expanding'
    },
    {
        id: 3,
        title: 'Cloud Computing',
        description: 'Cloud services for businesses and individuals.',
        benefits: ['Scalability', 'Advanced security', 'Remote access'],
        icon: '☁️',
        status: 'Available'
    },
    {
        id: 4,
        title: 'IoT Solutions',
        description: 'Internet of Things solutions for smart homes.',
        benefits: ['Automation', 'Remote monitoring', 'Energy efficiency'],
        icon: '🏠',
        status: 'Coming soon'
    }
];

const advantages = [
    {
        title: 'National Coverage',
        description: 'Network covering more than 85% of the national territory',
        icon: '🗺️'
    },
    {
        title: '24/7 Support',
        description: 'Technical support available 24 hours a day',
        icon: '🛠️'
    },
    {
        title: 'Fast Installation',
        description: 'Setup in less than 24 hours in covered areas',
        icon: '⚡'
    },
    {
        title: 'Service Guarantee',
        description: 'SLA with compensation for downtime',
        icon: '✅'
    }
];

export const Technology = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Tecnologías */}
                <div className="mb-20">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Cutting-Edge Technology
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We use the most advanced technologies to guarantee the best connectivity experience.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <Card className="hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="text-center">
                                            <div className="text-4xl mb-4">{tech.icon}</div>
                                            <div className="flex justify-center mb-3">
                                                <Badge variant={tech.status === 'Available' ? 'default' : 'secondary'}>
                                                    {tech.status}
                                                </Badge>
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                                {tech.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 text-sm">
                                                {tech.description}
                                            </p>
                                            <ul className="text-left space-y-2">
                                                {tech.benefits.map((benefit, index) => (
                                                    <li key={index} className="text-sm text-gray-600 flex items-center">
                                                        <span className="text-blue-500 mr-2">•</span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Ventajas */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Why Choose Us?
                        </h3>
                        <p className="text-lg text-gray-600">
                            Our competitive advantages that set us apart in the market.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-4">{advantage.icon}</div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {advantage.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {advantage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 bg-gradient-to-r from-[#001427] via-[#23395d] to-indigo-900 rounded-2xl shadow-2xl text-center max-w-3xl mx-auto p-10 relative overflow-hidden">
                    {/* Decorative badge */}
                    <div className="absolute left-1/2 -top-6 transform -translate-x-1/2">
                        <span className="inline-block bg-[#F4D58D] text-[#001427] px-6 py-2 rounded-full font-bold shadow-lg text-sm tracking-widest uppercase">
                            Our Advantage
                        </span>
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-6 mt-6 drop-shadow-lg">Our Network, Our Advantage</h4>
                    <p className="text-lg text-[#F4D58D] mb-4 font-medium">
                        Unlike other providers, we own and manage our own fiber optic network. This allows us to design, maintain, and expand the infrastructure according to our clients needs, guaranteeing a personalized, reliable, and future-ready service.
                    </p>
                    <p className="text-lg text-white/80">
                        Our infrastructure is fully redundant and monitored in real time, allowing us to anticipate and resolve any issues before they affect our users.
                    </p>
                </div>

                {/* Bloques destacados de diferenciales */}
                <div className="mt-20  grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* FTTH real */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-[#0a192f]">
                        <h4 className="text-xl font-bold text-[#0a192f] mb-4">There&apos;s Fiber.<br />Then there&apos;s Fiber-to-the-Home.</h4>
                        <p className="text-[#708D81] text-base">Our FTTH network connects fiber optics directly to your home or business, with no copper cables or intermediate connections. This guarantees higher speed, reliability, and a superior experience compared to other technologies.</p>
                    </div>
                    {/* Increased Bandwidth & No Data Caps */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-[#BF0603]">
                        <h4 className="text-xl font-bold text-[#BF0603] mb-4">Increased Bandwidth & No Data Caps</h4>
                        <p className="text-[#708D81] text-base">Enjoy superior bandwidth and no data caps. Our infrastructure supports multiple devices and demanding applications, allowing you to browse, work, and enjoy without restrictions or surprises on your bill.</p>
                    </div>
                    {/* 100% Symmetrical Speeds */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-[#bfa600]">
                        <h4 className="text-xl font-bold text-[#bfa600] mb-4">100% Symmetrical Speeds</h4>
                        <p className="text-[#708D81] text-base">Upload and download files at the same speed. Our network offers true symmetrical speeds, ideal for video calls, streaming, gaming, and remote work without interruptions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}; 