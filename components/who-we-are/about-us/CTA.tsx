'use client';

import { motion } from 'framer-motion';
import { OptimizedLink } from '@/components/OptimizedLink';

export function CTA() {
    return (
        <section className="mb-20 overflow-hidden">
            <motion.div
                className="bg-gradient-to-r from-[#001427] to-[#BF0603] text-white text-center py-16 px-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Get Started?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied customers who trust us with their internet needs.
                    Get connected today and experience the difference.
                </p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <OptimizedLink
                        href="/contact"
                        variant='button'
                        className="bg-[#F4D58D] text-[#001427] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#F4D03F] transition-colors"
                    >
                        Contact Us Today
                    </OptimizedLink>
                </motion.div>
            </motion.div>
        </section>
    );
} 