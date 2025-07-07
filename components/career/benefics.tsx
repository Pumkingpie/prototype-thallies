'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BenefictInfo {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function Benefict() {
    const beneficts: BenefictInfo[] = [
        {
            title: 'Comprehensive Health Insurance',
            description: 'Medical, dental, and vision coverage to keep you and your family healthy.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#0077be" strokeWidth={2} className="mb-2">
                    <rect x="4" y="4" width="16" height="16" rx="8" fill="#0077be" />
                    <path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: '401(k) Retirement Plan',
            description: 'Plan for your future with our competitive 401(k) retirement savings program.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#00b4d8" strokeWidth={2} className="mb-2">
                    <circle cx="12" cy="12" r="10" fill="#00b4d8" />
                    <path d="M8 16l4-8 4 8" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: 'Paid Time Off',
            description: 'Generous paid vacation, holidays, and personal days to recharge and enjoy life.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#ffb703" strokeWidth={2} className="mb-2">
                    <rect x="6" y="6" width="12" height="12" rx="6" fill="#ffb703" />
                    <path d="M12 8v4l3 3" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: 'Career Growth Opportunities',
            description: 'Advance your career with training, mentorship, and promotion from within.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#bf0603" strokeWidth={2} className="mb-2">
                    <path d="M12 2l7 7-7 13-7-13z" fill="#bf0603" />
                    <path d="M12 9v4" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                    <circle cx="12" cy="17" r="1" fill="#fff" />
                </svg>
            )
        },
        {
            title: 'Inclusive & Collaborative Culture',
            description: 'Work in a diverse, supportive, and team-oriented environment.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#23395d" strokeWidth={2} className="mb-2">
                    <circle cx="12" cy="12" r="10" fill="#23395d" />
                    <circle cx="12" cy="10" r="3" fill="#fff" />
                    <path d="M6 18c0-2 4-3 6-3s6 1 6 3" stroke="#fff" strokeWidth={2} />
                </svg>
            )
        },
        {
            title: 'Wellness Programs',
            description: 'Access to wellness initiatives and resources for a healthy lifestyle.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#00b894" strokeWidth={2} className="mb-2">
                    <circle cx="12" cy="12" r="10" fill="#00b894" />
                    <path d="M8 16l4-8 4 8" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: 'Employee Discounts',
            description: 'Exclusive discounts on services and products for employees.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#8B0000" strokeWidth={2} className="mb-2">
                    <rect x="4" y="4" width="16" height="16" rx="8" fill="#8B0000" />
                    <path d="M8 16l8-8" stroke="#fff" strokeWidth={2} />
                </svg>
            )
        },
        {
            title: 'Remote & Flexible Work',
            description: 'Options for remote work and flexible schedules to support work-life balance.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#6c63ff" strokeWidth={2} className="mb-2">
                    <rect x="6" y="6" width="12" height="12" rx="6" fill="#6c63ff" />
                    <path d="M9 12h6" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: 'Professional Development',
            description: 'Workshops, courses, and resources to help you grow professionally.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#ff9800" strokeWidth={2} className="mb-2">
                    <circle cx="12" cy="12" r="10" fill="#ff9800" />
                    <path d="M12 8v8" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: 'Team Events & Recognition',
            description: 'Regular team-building events and employee recognition programs.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#f4d58d" strokeWidth={2} className="mb-2">
                    <circle cx="12" cy="12" r="10" fill="#f4d58d" />
                    <path d="M12 8l3 8-3-2-3 2 3-8z" stroke="#fff" strokeWidth={2} />
                </svg>
            )
        },
        {
            title: 'Community Involvement',
            description: 'Opportunities to give back and participate in community initiatives.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#009688" strokeWidth={2} className="mb-2">
                    <circle cx="12" cy="12" r="10" fill="#009688" />
                    <path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: 'Life Insurance',
            description: 'Peace of mind for you and your loved ones with company-provided life insurance.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#e17055" strokeWidth={2} className="mb-2">
                    <rect x="4" y="4" width="16" height="16" rx="8" fill="#e17055" />
                    <path d="M12 8v8" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: 'Training Programs',
            description: 'Access to ongoing training and learning resources to enhance your skills.',
            icon: (
                <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#1976d2" strokeWidth={2} className="mb-2">
                    <circle cx="12" cy="12" r="10" fill="#1976d2" />
                    <path d="M8 16l4-8 4 8" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
            )
        }
    ];

    // Duplicamos el array para efecto infinito
    const marqueeBenefits = [...beneficts, ...beneficts];

    return (
        <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-12 text-center">Benefits & Perks</h2>
                <div className="relative w-full overflow-x-hidden">
                    <motion.div
                        className="flex gap-8"
                        style={{
                            width: 'max-content',
                            willChange: 'transform',
                        }}
                        animate={{
                            x: [0, -100 * beneficts.length],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: beneficts.length * 4,
                            ease: 'linear',
                        }}
                    >
                        {marqueeBenefits.map((benefict, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center bg-[#f2f2f2] rounded-xl shadow-lg p-8 text-center border-2 border-transparent min-w-[260px] max-w-xs mx-2"
                                style={{ flex: '0 0 260px' }}
                            >
                                {benefict.icon}
                                <h3 className="text-xl font-bold mb-2 text-[#BF0603]">{benefict.title}</h3>
                                <p className="text-gray-700 text-base">{benefict.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
