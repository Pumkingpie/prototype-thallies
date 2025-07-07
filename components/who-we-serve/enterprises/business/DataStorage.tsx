import { Badge } from '@/components/ui/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { OptimizedLink } from '@/components/OptimizedLink';

const features = [
    "Secure Category 5 facility designed to protect your data",
    "Future-proof and fully-redundant fiber-optic network for reliable connectivity",
    "Colocation services for businesses of all sizes",
    "Public IP address, bandwidth, and power supplied by the service provider to your servers",
    "Customizable deployment options tailored to your specific requirements",
    "Augmented security with customizable private access controls",
    "Expert data center engineers offering personalized consultations",
    "Customizable rack layout for efficient data storage",
    "Scalable solutions to accommodate growing data needs",
    "24/7 monitoring and support for maximum uptime and peace of mind"
];

export function DataStorage() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Mobile: Título y subtítulo */}
            <div className="flex-1 lg:hidden w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-4">
                    Data Storage and Colocation
                </h2>
                <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                    Optimal Conditions for Your Vital Equipment
                </h3>
            </div>

            {/* Mobile: Imagen */}
            <div className="flex-1 lg:hidden w-full">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border-2 border-[#BF0603]">
                    <Image
                        src="/image/enterprise/business/dataStorage.webp"
                        alt="THALLIES Data Storage and Colocation"
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
                            Data Storage and Colocation
                        </h2>
                        <h3 className="text-2xl font-semibold text-[#BF0603] mb-6">
                            Optimal Conditions for Your Vital Equipment
                        </h3>
                    </div>
                    <p className="text-xl text-[#708D81] mb-8 leading-relaxed">
                        THALLIES Communications&apos; state-of-the-art Category 5 facility ensures the utmost security and reliability for your data. Our future-proof and fully-redundant fiber-optic network reinforces data protection and business continuity.

                        Experience our colocation services, providing hosting options tailored to businesses of all sizes. With colocation, store critical business information in a cabinet equipped with a public IP address, bandwidth, and power supplied by our service provider to your servers.

                        Enjoy fully customizable deployment options, including augmented security with customizable private access controls. Our expert data center engineers provide personalized consultations for a customizable rack layout, meeting your specific data storage needs.
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
                        src="/image/enterprise/business/dataStorage.webp"
                        alt="THALLIES Data Storage and Colocation"
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