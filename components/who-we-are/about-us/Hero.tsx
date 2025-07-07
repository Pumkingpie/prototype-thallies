'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="pt-20 pb-16 bg-gradient-to-br from-[#001427] to-[#BF0603] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-6"
                        variants={itemVariants}
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-white/90 mb-8"
                        variants={itemVariants}
                    >
                        Connecting communities with cutting-edge technology
                    </motion.p>
                    <motion.div
                        className="w-24 h-1 bg-[#F4D58D] mx-auto"
                        variants={itemVariants}
                    />
                </motion.div>
            </div>
        </section>
    );
} 