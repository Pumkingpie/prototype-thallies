import { Badge } from '@/components/ui/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import { OptimizedLink } from '@/components/OptimizedLink';

const features = [
    'Extensive channel selection, including international and specialty sports packages.',
    'On-demand programming for flexible viewing.',
    'High-quality picture and sound for immersive entertainment.',
    'User-friendly interface for easy navigation.',
    'Flexibility to watch TV from anywhere with an internet connection.',
    'Access to a wide range of apps and add-ons.',
    'Stay updated with live programming, sports, news, and local channels.',
    'Dedicated Community Channel for a connected and informed community.'
];

export function TVService() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Mobile: Title and Subtitle First */}
            <div className="flex-1 lg:hidden w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-4">
                    THALLIES TV
                </h2>
                <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                    Less Searching. More Watching
                </h3>
            </div>

            {/* Mobile: Image Second */}
            <div className="flex-1 lg:hidden w-full">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border-2 border-[#BF0603]">
                    <Image
                        src="/image/residential/tvService.webp"
                        alt="THALLIES TV"
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
                            THALLIES TV
                        </h2>
                        <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                            Less Searching. More Watching
                        </h3>
                    </div>
                    <p className="text-xl text-[#708D81] mb-8 leading-relaxed">
                        Our suite of THALLIES TV products offers the latest, highly intuitive TV technology that features customizable functions with a user-friendly interface that gets viewers right to the content they want to watch. Our advanced TV solutions provide an exceptional entertainment experience with crystal-clear picture quality and seamless navigation.
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
                        src="/image/residential/tvService.webp"
                        alt="THALLIES TV"
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