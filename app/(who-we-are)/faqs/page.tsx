import React from 'react';
import { FAQAccordion } from '../../../components/who-we-are/faq/FAQAccordion';
import Image from 'next/image';
import { Section } from "../../../components/section";

export default function FAQPage() {
    return (
        <main className="w-full min-h-screen bg-white">
            <div className="max-w-2xl mx-auto py-8 md:py-16 px-4 pb-20">
                <div className="flex justify-center mb-6">
                    <Image src="/image/faqs.webp" alt="Decoración FAQ" width={620} height={620} className="object-contain w-64 h-64 md:w-96 md:h-96" />
                </div>
                <FAQAccordion />
            </div>
            <div><Section /></div>
        </main>
    );
} 