import React from "react";
import { OptimizedLink } from '@/components/OptimizedLink';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-[#001427] to-[#BF0603] text-white py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Stay Connected,
                        <span className="block text-[#F4D58D]">Stay Prepared</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Learn how we ensure your safety and service continuity before, during, and after hurricanes. Our fiber-optic network is designed to withstand extreme conditions and our team is ready to support you at all times.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <OptimizedLink href='/contact' variant='button' size="lg" className="bg-[#F4D58D] hover:bg-[#F4D58D]/90 text-[#001427] px-8 py-3 text-lg font-semibold">
                            Send Message
                        </OptimizedLink>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center text-lg">
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6 text-[#F4D58D]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>contact@thallies.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6 text-[#F4D58D]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span>+1 (555) 123-4567</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}