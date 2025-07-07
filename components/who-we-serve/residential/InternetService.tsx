import { Badge } from '@/components/ui/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import { OptimizedLink } from '@/components/OptimizedLink';

const features = [
    'Blazing-fast speeds for seamless browsing, streaming, and downloading.',
    'Reliable and stable connection for uninterrupted online activities.',
    'Unlimited data usage without worrying about caps or limitations.',
    'Symmetrical upload and download speeds for efficient sharing and streaming.',
    'Low latency for responsive gaming and smooth video streaming.',
    'Support for multiple devices simultaneously.',
    'Enhanced security measures to protect your online activities.',
    'Future-ready fiber-optic technology for a reliable and advanced internet connection.'
];

export function InternetService() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Mobile: Title and Subtitle First */}
            <div className="flex-1 lg:hidden w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-4">
                    THALLIES Fiber Optic Internet
                </h2>
                <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                    Limitless Connectivity
                </h3>
            </div>

            {/* Mobile: Image Second */}
            <div className="flex-1 lg:hidden w-full">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border-2 border-[#BF0603]">
                    <Image
                        src="/image/residential/conect.webp"
                        alt="THALLIES Fiber Optic Internet"
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
                            THALLIES Fiber Optic Internet
                        </h2>
                        <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                            Limitless Connectivity
                        </h3>
                    </div>
                    <p className="text-xl text-[#708D81] mb-8 leading-relaxed">
                        Experience unparalleled speed with THALLIES Fiber Optic Internet, delivering lightning-fast speeds to every residential home we serve. With a focus on reliability, we ensure residents stay connected at all times, backed by robust reliability features and a network built for seamless performance.
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
                        src="/image/residential/conect.webp"
                        alt="THALLIES Fiber Optic Internet"
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