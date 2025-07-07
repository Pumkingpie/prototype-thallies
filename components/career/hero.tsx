import React from "react";
import { OptimizedLink } from '@/components/OptimizedLink';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-[#001427] to-[#BF0603] text-white py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Become part of the <span className="block text-[#F4D58D]">Hotwire Team!</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Bring your talent, dedication, and passion for technology, and we’ll give you the opportunity to power the future. At Hotwire Communications, we thrive on creativity, innovation, and collaboration—helping you grow while making a real impact in our communities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <OptimizedLink href='#Section' variant='button' size="lg" className="bg-[#F4D58D] hover:bg-[#F4D58D]/90 text-[#001427] px-8 py-3 text-lg font-semibold">
                            Join US
                        </OptimizedLink>
                    </div>
                </div>
            </div>
        </section>
    );
}