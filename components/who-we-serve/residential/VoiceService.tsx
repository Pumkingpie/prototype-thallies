'use client';
import { Badge } from '@/components/ui/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { OptimizedLink } from '@/components/OptimizedLink';

const features = [
    'Unlimited local and long-distance calling within the US and Canada.',
    'Crystal-clear call quality and reliable connectivity.',
    'Redundant server pairs for seamless service.',
    'Advanced voicemail and call forwarding features.',
    'Easy integration with smart home devices.',
    '24/7 customer support for any issues.'
];

export function VoiceService() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Mobile: Title and Subtitle First */}
            <div className="flex-1 lg:hidden w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-4">
                    THALLIES Voice
                </h2>
                <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                    Crystal Clear Communication
                </h3>
            </div>

            {/* Mobile: Image Second */}
            <div className="flex-1 lg:hidden w-full">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border-2 border-[#BF0603]">
                    <Image
                        src="/image/residential/voice.webp"
                        alt="Telefonía residencial THALLIES"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={95}
                        priority
                    />
                </div>
            </div>

            {/* Left Side - Content (Desktop) / Information (Mobile) */}
            <div className="flex-1 lg:pr-8 w-full">
                <div className="text-left">
                    {/* Desktop: Title and Subtitle */}
                    <div className="hidden lg:block">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-4">
                            THALLIES Voice
                        </h2>
                        <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                            Crystal Clear Communication
                        </h3>
                    </div>
                    <p className="text-lg text-[#223042] mb-8 leading-relaxed">
                        Stay connected like never before with THALLIES&apos;s unparalleled voice services. Our advanced phone solutions deliver crystal-clear call quality and reliable connectivity, ensuring you never miss important conversations with family and friends.
                    </p>

                    {/* Features Carousel */}
                    <div className="mb-8">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            spaceBetween={24}
                            slidesPerView={1}
                            className="w-full max-w-md"
                        >
                            {features.map((feature, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="flex items-start bg-white border-2 border-[#BF0603]/30 rounded-lg shadow-lg p-5 hover:shadow-xl transition-all duration-300">
                                        <Badge className="bg-[#BF0603] text-white mr-4 mt-1 flex-shrink-0 text-sm">&#10003;</Badge>
                                        <p className="text-[#001427] text-base font-medium leading-relaxed">{feature}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <OptimizedLink href="/contact" variant="button" size="lg" className="bg-[#BF0603] hover:bg-[#8B0000] text-white px-8 py-3 text-lg font-semibold">
                        Learn More
                    </OptimizedLink>
                </div>
            </div>

            {/* Right Side - Image (Desktop Only) */}
            <div className="hidden lg:block flex-1 lg:pl-8">
                <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg border-2 border-[#BF0603]">
                    <Image
                        src="/image/residential/voice.webp"
                        alt="Telefonía residencial THALLIES"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1200px) 50vw, 33vw"
                        quality={95}
                    />
                </div>
            </div>
        </div>
    );
} 