'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OptimizedLink } from '@/components/OptimizedLink';

const services = [
    {
        id: 1,
        title: 'FTTH Internet (Fiber to the Home)',
        description: 'Direct fiber optic connection to your home or business, with no intermediaries. Maximum speed and stability.',
        features: ['Up to 10 Gbps', '100% symmetrical speeds', 'No data caps', 'Own network, not leased'],
        badge: 'Most Popular',
        icon: '🌐',
        price: 'From $29.99/mo'
    },
    {
        id: 2,
        title: 'Business Connectivity',
        description: 'Scalable and customized solutions for businesses, with full control and dedicated support.',
        features: ['Dedicated IP', 'Guaranteed SLA', '24/7 support', 'Future-ready scalability'],
        badge: 'Business',
        icon: '🏢',
        price: 'Custom quote'
    },
    {
        id: 3,
        title: 'Integrated Packages',
        description: 'Internet, phone, and TV in a single package, with the best user experience and no signal degradation.',
        features: ['Internet + TV', 'Phone lines', 'Premium channels', 'No signal degradation'],
        badge: 'Savings',
        icon: '📺',
        price: 'From $49.99/mo'
    },
    {
        id: 4,
        title: 'Data & Network Services',
        description: 'Redundant infrastructure, real-time monitoring, and expansion capacity for critical applications.',
        features: ['Full redundancy', '24/7 monitoring', 'Unlimited scalability', 'Control and customization'],
        badge: 'Enterprise',
        icon: '⚡',
        price: 'Custom quote'
    }
];

export const Services = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div id='service' className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-4">
                        Our Main Services
                    </h2>
                    <p className="text-xl text-[#708D81] max-w-3xl mx-auto">
                        We offer comprehensive telecommunications solutions designed to meet the needs of homes and businesses.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md border-[#708D81]/10">
                                <CardContent className="p-6">
                                    <div className="text-center">
                                        <div className="text-4xl mb-4">{service.icon}</div>
                                        <div className="flex justify-center mb-3">
                                            <Badge variant={service.badge === 'Most Popular' ? 'default' : 'secondary'} className={service.badge === 'Most Popular' ? 'bg-[#BF0603] text-white' : 'bg-[#708D81] text-white'}>
                                                {service.badge}
                                            </Badge>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#001427] mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#708D81] mb-4 text-sm">
                                            {service.description}
                                        </p>
                                        <ul className="text-left mb-6 space-y-2">
                                            {service.features.map((feature, index) => (
                                                <li key={index} className="text-sm text-[#708D81] flex items-center">
                                                    <span className="text-[#BF0603] mr-2">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-lg font-semibold text-[#BF0603] mb-4">
                                            {service.price}
                                        </div>
                                        <OptimizedLink href='/contact' variant='button' className="w-full bg-[#F4D58D] hover:bg-[#F4D58D]/90 text-[#001427] font-semibold">
                                            More Information
                                        </OptimizedLink>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}; 