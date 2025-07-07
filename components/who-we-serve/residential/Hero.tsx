import Image from 'next/image';
import { OptimizedLink } from '@/components/OptimizedLink';

export function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-[#001427] via-[#001427] to-[#BF0603] text-white py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Side - Content */}
                    <div className="flex-1 text-center lg:text-left min-w-0">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight break-words">
                            Residential
                            <span className="block text-[#F4D58D]">Fiber Solutions</span>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Experience lightning-fast internet speeds with our cutting-edge fiber optic technology, providing reliable and consistent connectivity for all your digital needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <OptimizedLink href="/contact" variant="button" className="bg-[#BF0603] hover:bg-[#8B0000] text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-colors whitespace-nowrap">
                                Get Started
                            </OptimizedLink>
                            <OptimizedLink href='#section-video' variant='button' className="border-2 border-white text-white hover:bg-white hover:text-[#001427] px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-colors whitespace-nowrap">
                                Learn More
                            </OptimizedLink>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-[#F4D58D]">
                            <Image
                                src="/image/residential/hero.webp"
                                alt="THALLIES Residential Fiber Solutions"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                                quality={85}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 