import { Badge } from '@/components/ui/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { OptimizedLink } from '@/components/OptimizedLink';

const features = [
    'Fast and scalable connectivity for seamless guest experiences.',
    'Secure guest portal with authentication for easy access and network security.',
    'Multiple device support for simultaneous connections.',
    'Property-wide Wi-Fi coverage accommodating high-volume internet usage.',
    'Robust fiber optic network ensuring uninterrupted service during peak usage.',
    'Common Area Wi-Fi for seamless property-wide coverage.',
    'Support for conferences, business retreats and large events.',
    'Future-ready bandwidth scalability for growing hospitality needs.'
];

export function EmailService() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Mobile: Título y subtítulo */}
            <div className="flex-1 lg:hidden w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-4">
                    THALLIES Fiber Optic Internet & Managed Wi-Fi
                </h2>
                <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                    Fast Speeds to Support Hotel Needs
                </h3>
            </div>

            {/* Mobile: Imagen */}
            <div className="flex-1 lg:hidden w-full">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border-2 border-[#BF0603]">
                    <Image
                        src="/image/enterprise/hospitality/Email.webp"
                        alt="THALLIES Hospitality Internet & Wi-Fi"
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
                            THALLIES Fiber Optic Internet & Managed Wi-Fi
                        </h2>
                        <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                            Fast Speeds to Support Hotel Needs
                        </h3>
                    </div>
                    <p className="text-xl text-[#708D81] mb-8 leading-relaxed">
                        Our cutting-edge fiber-optic internet service is specifically designed to cater to the needs of multiple users and devices, ensuring seamless connectivity for guests on the go. Guests experience lightning-fast and reliable speeds that they desire during their travels.
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
                        src="/image/enterprise/hospitality/Email.webp"
                        alt="THALLIES Hospitality Internet & Wi-Fi"
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