'use client';

import { motion } from 'framer-motion';

interface BenefictInfo {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function Benefict() {
    const beneficts: BenefictInfo[] = [
        {
            title: 'Water Resistance',
            description: 'Fiber-optic cables do not conduct electricity and are resistant to moisture, preventing short circuits.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#0077be" strokeWidth={2} className="mb-2">
                    <path d="M12 3C12 3 5 10.5 5 15a7 7 0 0014 0C19 10.5 12 3 12 3z" />
                    <circle cx="12" cy="15" r="3" fill="#0077be" />
                </svg>
            )
        },
        {
            title: 'Wind Resistance',
            description: 'They are lightweight and flexible, less prone to damage from strong winds.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#00b4d8" strokeWidth={2} className="mb-2">
                    <path d="M4 12h12a4 4 0 100-8 4 4 0 00-4 4" />
                    <path d="M2 16h16a4 4 0 110 8 4 4 0 01-4-4" />
                </svg>
            )
        },
        {
            title: 'Extreme Temperature Tolerance',
            description: 'They operate efficiently across a wide range of temperatures without signal degradation.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#ffb703" strokeWidth={2} className="mb-2">
                    <circle cx="12" cy="12" r="5" fill="#ffb703" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
            )
        },
        {
            title: 'Safety',
            description: 'Since they do not conduct electricity, they eliminate fire and electric shock risks, making them safer to install and maintain.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#bf0603" strokeWidth={2} className="mb-2">
                    <path d="M12 2l7 7-7 13-7-13z" fill="#bf0603" />
                    <path d="M12 9v4" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                    <circle cx="12" cy="17" r="1" fill="#fff" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-12 text-center">Benefits of Fiber-Optic Technology Against Weather Conditions</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {beneficts.map((benefict, idx) => (
                        <motion.div
                            key={benefict.title}
                            className="flex flex-col items-center bg-[#f2f2f2] rounded-xl shadow-lg p-8 text-center border-2 border-transparent hover:border-[#BF0603] transition-colors"
                            whileHover={{ scale: 1.07 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                        >
                            {benefict.icon}
                            <h3 className="text-xl font-bold mb-2 text-[#BF0603]">{benefict.title}</h3>
                            <p className="text-gray-700 text-base">{benefict.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
