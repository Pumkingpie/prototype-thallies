'use client';

import { motion } from 'framer-motion';

export function MissionVision() {
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
        <section className="mb-20 overflow-hidden">
            <motion.div
                className="grid md:grid-cols-2 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div
                    className="bg-gradient-to-br from-[#001427] to-[#BF0603] text-white p-8 rounded-lg"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-lg">
                        To provide reliable and high-speed internet access,
                        empowering individuals and businesses to reach their full potential
                        in the digital age.
                    </p>
                </motion.div>
                <motion.div
                    className="bg-gradient-to-br from-[#BF0603] to-[#8B0000] text-white p-8 rounded-lg"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-lg">
                        To be the leading internet service provider, recognized for
                        technological innovation, exceptional customer service and
                        commitment to the development of our communities.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
} 