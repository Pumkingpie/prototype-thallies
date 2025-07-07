'use client'
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Transition } from 'framer-motion';
import Image from 'next/image';
import { OptimizedLink } from '@/components/OptimizedLink';

const transitionConfig: Transition = {
    duration: 0.8,
    ease: 'easeInOut',
    type: 'tween',
};

const slides = [
    {
        bg: '/image/fondo1.webp',
        title: (
            <>
                <span className="block text-[#ffff] mt-2">Speed Meets Service</span>
            </>
        ),
        description:
            "With Fiber Optics by THALLIES",
        buttons: [
            { label: 'Discover the THALLIES Difference', href: '/what-we-do', primary: true },
        ],
    },
    {
        bg: '/image/fondo5.webp',
        title: (
            <>
                <span className="block text-[#F4D58D] mt-2">Award-Winning Gigabit Speeds</span>
            </>
        ),
        description:
            "With our custom-built 100% fiber network, you can build an internet experience to fit your community's needs",
        buttons: [
            { label: 'Explore THALLIES Internet', href: '/residential', primary: true },
        ],
    },
];

export function Hero() {
    const [index, setIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const slide = slides[index];
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Preload images for better LCP
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const preloadImages = async () => {
                const imagePromises = slides.map(slide => {
                    return new Promise((resolve, reject) => {
                        const img = new window.Image();
                        img.onload = resolve;
                        img.onerror = reject;
                        img.src = slide.bg;
                    });
                });

                try {
                    await Promise.all(imagePromises);
                    setImagesLoaded(true);
                } catch {
                    // Silently handle preload errors in production
                    setImagesLoaded(true); // Continue anyway
                }
            };

            preloadImages();
        }
    }, []);

    const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
    const prevSlide = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

    // Swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
        const delta = touchStartX.current - touchEndX.current;
        if (delta > 50) nextSlide();
        if (delta < -50) prevSlide();
    };

    return (
        <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 md:pt-43">
            {/* Preload first image for immediate display */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={slides[0].bg}
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={95}
                />
                {/* Overlay semitransparente para mejorar legibilidad */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <AnimatePresence mode="wait">
                {imagesLoaded && (
                    <motion.div
                        key={index}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={transitionConfig}
                    >
                        <Image
                            src={slide.bg}
                            alt={`Slide ${index + 1} background`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            quality={95}
                            priority={index === 0}
                        />
                        {/* Overlay semitransparente para mejorar legibilidad */}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                <motion.div
                    key={index + '-content'}
                    className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] w-full text-center space-y-8 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ ...transitionConfig, duration: 0.6 }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <motion.h1
                        className="text-6xl md:text-7xl font-bold leading-tight drop-shadow-lg -mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        {slide.title}
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {slide.description}
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {slide.buttons.map((btn, i) => (
                            <OptimizedLink
                                key={i}
                                href={btn.href}
                                variant='button'
                                className="bg-[#BF0603]  text-white  px-12 py-4 text-lg shadow-xl rounded-full font-bold  transition-all duration-300 transform hover:scale-105 min-w-[240px] h-[52px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#BF0603] focus:ring-offset-2"
                            >
                                {btn.label}
                            </OptimizedLink>
                        ))}
                    </motion.div>

                    {/* Indicadores de carrusel (dots) */}
                    <motion.div
                        className="flex gap-2 justify-center mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${index === i ? 'bg-white' : 'bg-transparent'}`}
                                aria-label={`Ir al slide ${i + 1}`}
                            />
                        ))}
                    </motion.div>

                    {/* Controles del carrusel - solo en md o mayor */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/3 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-[#001427] shadow-lg flex items-center justify-center text-2xl font-bold transition-all hover:scale-110 hidden md:flex"
                        aria-label="Slide anterior"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/3 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-[#001427] shadow-lg flex items-center justify-center text-2xl font-bold transition-all hover:scale-110 hidden md:flex"
                        aria-label="Slide siguiente"
                    >
                        &#8594;
                    </button>
                </motion.div>
            </AnimatePresence>
        </section>
    );
} 