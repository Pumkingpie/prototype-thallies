'use client';

import Hero from "@/components/career/hero";
import { Section } from "@/components/career/section";
import { CEOOpinion } from "@/components/career/opinions";
import { Career } from "@/components/career/career";
import { Benefict } from "@/components/career/benefics";
import { Testimonials } from "@/components/career/testimonials";

export default function CareerPage() {
    return (
        <main>
            <Hero />
            <Section />
            <CEOOpinion />
            <Career />
            <Testimonials />
            <Benefict />
        </main>
    );
}