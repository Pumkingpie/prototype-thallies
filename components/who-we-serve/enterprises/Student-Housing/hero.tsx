import React from 'react';
import Image from 'next/image';
import { OptimizedLink } from '@/components/OptimizedLink';

export function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-[#001427] via-[#001427] to-[#BF0603] text-white py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Lado izquierdo - Contenido */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Graduate To
                            <span className="block text-[#F4D58D]">THALLIES Fiber Optic Internet</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Welcome to the future of technology amenities demanded by students. Our collaboration with student housing management groups ensures that residents have access to the blazing-fast speeds they require, thanks to our cutting-edge fiber-optic network.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <OptimizedLink href="/contact" variant="button" className="bg-[#BF0603] hover:bg-[#8B0000] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                                Get Started
                            </OptimizedLink>
                            <OptimizedLink href='#Section' variant='button' className="border-2 border-white text-white hover:bg-white hover:text-[#001427] px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                                Learn More
                            </OptimizedLink>
                        </div>
                    </div>

                    {/* Lado derecho - Imagen */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-[#F4D58D]">
                            <Image
                                src="/image/enterprise/Student-Housing/Student.webp"
                                alt="THALLIES Student Housing Solutions"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={95}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 