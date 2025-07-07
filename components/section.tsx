'use client';
import { Card, CardContent } from './ui/card'
import { motion } from "framer-motion"
import { OptimizedLink } from './OptimizedLink';

export function Section() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Quick Access</h2>
            <motion.div
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Card Contact Support */}
                <Card className="flex flex-col justify-between h-full shadow-lg border-2 border-[#BF0603]">
                    <CardContent className="p-8 flex flex-col items-center justify-between h-full">
                        <h3 className="text-2xl font-bold mb-4 text-[#BF0603] text-center">Need Help from THALLIES?</h3>
                        <p className="text-gray-800 mb-8 text-lg text-center font-medium">
                            Contact our customer support team and we&apos;ll be happy to assist you with any questions or issues you may have.
                        </p>
                        <OptimizedLink href='/contact' variant='button' className="bg-[#BF0603] hover:bg-[#BF0603]/90 text-white px-8 py-2 text-lg font-semibold w-full max-w-xs">
                            Contact Support
                        </OptimizedLink>
                    </CardContent>
                </Card>
                {/* Card Contact Us */}
                <Card className="flex flex-col justify-between h-full shadow-lg border-2  bg-gradient-to-r from-[#001427] via-[#23395d] to-indigo-900">
                    <CardContent className="p-8 flex flex-col items-center justify-between h-full">
                        <h3 className="text-2xl font-bold mb-4 text-[#F4D58D] text-center">Looking to learn more about THALLIES Fiber Optic Internet?</h3>
                        <p className="text-white mb-8 text-lg text-center font-medium">
                            Continue exploring here or contact us to discuss bringing THALLIES Fiber Optic Internet services to your community or business.
                        </p>
                        <OptimizedLink href='/contact' variant='button' className="border-1 border-white text-white hover:bg-white hover:text-[#001427] px-8 py-2 text-lg font-semibold w-full max-w-xs">
                            Contact Us
                        </OptimizedLink>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    )
}
