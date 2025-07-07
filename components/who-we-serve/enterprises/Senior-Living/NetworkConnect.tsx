import { Badge } from '@/components/ui/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { OptimizedLink } from '@/components/OptimizedLink';

const features = [
    'Community-wide, managed, commercial grade Wi-Fi.',
    'Bandwidth capable of surfing, scanning, streaming and more.',
    'Seamless community-wide roaming for uninterrupted connectivity.',
    'Remote troubleshooting for quick issue resolution.',
    'Customizable network to meet specific senior needs.',
    'Indoor and outdoor access points for increased coverage.',
    'Removes the need for on-site IT management.',
    'Ongoing management and support for optimal performance.',
    'Enhanced privacy settings and ability to block web content.',
    'Residents can stay connected on any device, at any time, and from anywhere within the property.'
];

export function NetworkConnect() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Mobile: Título y subtítulo */}
            <div className="flex-1 lg:hidden w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-4">
                    In-Room and Community-Wide Wi-Fi
                </h2>
                <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                    Any Device, Anywhere, Anytime
                </h3>
            </div>

            {/* Mobile: Imagen */}
            <div className="flex-1 lg:hidden w-full">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border-2 border-[#BF0603]">
                    <Image
                        src="/image/enterprise/Senior-Living/fondo6.webp"
                        alt="THALLIES Senior Living Wi-Fi"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={95}
                    />
                </div>
            </div>

            {/* Desktop: Contenido */}
            <div className="flex-1 lg:pr-8 w-full">
                <div className="text-left">
                    <div className="hidden lg:block">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-4">
                            In-Room and Community-Wide Wi-Fi
                        </h2>
                        <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                            Any Device, Anywhere, Anytime
                        </h3>
                    </div>
                    <p className="text-xl text-[#708D81] mb-8 leading-relaxed">
                        Give residents the freedom to roam their entire community with unrestricted connectivity throughout their community with our wall-to-wall enterprise wireless solutions. Residents are able to stay connected on any device, at any time, and from anywhere within the property. Whether at the pool, fitness center, lobby and more and enjoy seamless Wi-Fi access for all their favorite devices.
                    </p>
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

            {/* Desktop: Imagen */}
            <div className="hidden lg:block flex-1 lg:pl-8">
                <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg border-2 border-[#BF0603]">
                    <Image
                        src="/image/enterprise/Senior-Living/fondo6.webp"
                        alt="THALLIES Senior Living Wi-Fi"
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