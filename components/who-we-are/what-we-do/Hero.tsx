'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { OptimizedLink } from '@/components/OptimizedLink';

export const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#001427] to-[#BF0603] text-white py-20 lg:py-32">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Revolutionizing Connectivity
                        <span className="block text-[#F4D58D]">with Next-Generation Fiber Optics</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                    >
                        We are pioneers in fiber optic internet deployment, connecting communities and businesses with cutting-edge technology, unmatched speed, and reliability.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <OptimizedLink href='/contact' variant='button' size="lg" className="bg-[#F4D58D] hover:bg-[#F4D58D]/90 text-[#001427] px-8 py-3 text-lg font-semibold">
                            Request a Quote
                        </OptimizedLink>
                        <OptimizedLink href='#service' variant="button" size="lg" className=" border-1 border-white text-white hover:bg-white hover:text-[#001427] px-8 py-3 text-lg">
                            Explore our Services
                        </OptimizedLink>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}; 