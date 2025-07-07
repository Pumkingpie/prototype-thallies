'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { OptimizedLink } from '@/components/OptimizedLink';

const steps = [
    {
        id: 1,
        title: 'Personalized Consultation',
        description: 'Our team analyzes your specific needs to design the best connectivity solution.',
        icon: '📞',
        details: ['Requirements analysis', 'Coverage evaluation', 'Custom proposal']
    },
    {
        id: 2,
        title: 'Planning',
        description: 'We create a tailored implementation plan, ensuring maximum efficiency and scalability.',
        icon: '📋',
        details: ['Solution design', 'Installation schedule', 'Service configuration']
    },
    {
        id: 3,
        title: 'Installation',
        description: 'Professional and fast installation, with connectivity tests and minimal disruption.',
        icon: '🔧',
        details: ['Equipment installation', 'Network configuration', 'Connectivity tests']
    },
    {
        id: 4,
        title: 'Activation',
        description: 'We activate your service and provide proactive 24/7 support with constant monitoring.',
        icon: '✅',
        details: ['Service activation', 'User training', 'Post-installation support']
    }
];

export const Process = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-4">
                        Contracting Process
                    </h2>
                    <p className="text-xl text-[#708D81] max-w-3xl mx-auto">
                        A simple and transparent process so you can have your service up and running quickly.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Línea de conexión */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#708D81] transform -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-[#708D81]/20">
                                    <CardContent className="p-6 text-center">
                                        <div className="relative mb-6">
                                            <div className="w-16 h-16 bg-[#BF0603] rounded-full flex items-center justify-center mx-auto text-2xl text-white font-bold">
                                                {step.id}
                                            </div>
                                            <div className="absolute -top-2 -right-2 text-3xl">
                                                {step.icon}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-semibold text-[#001427] mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#708D81] mb-4 text-sm">
                                            {step.description}
                                        </p>

                                        <ul className="text-left space-y-2 mb-6">
                                            {step.details.map((detail, detailIndex) => (
                                                <li key={detailIndex} className="text-sm text-[#708D81] flex items-center">
                                                    <span className="text-[#BF0603] mr-2">•</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>

                                        {index === steps.length - 1 && (
                                            <OptimizedLink href='/contact' variant='button' className="w-full bg-[#F4D58D] hover:bg-[#F4D58D]/90 text-[#001427] font-semibold">
                                                Get Started Now
                                            </OptimizedLink>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Información adicional */}
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-[#708D81]/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#BF0603] mb-2">24h</div>
                            <p className="text-[#708D81]">Average installation time</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#BF0603] mb-2">99.9%</div>
                            <p className="text-[#708D81]">Guaranteed uptime</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#BF0603] mb-2">24/7</div>
                            <p className="text-[#708D81]">Technical support available</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 