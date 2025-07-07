'use client';
import * as Accordion from '@radix-ui/react-accordion';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const faqs = [
    {
        question: 'What are fiber optics, and how do they work?',
        answer: 'Fiber optics are a technology used for transmitting data, voice, and images over long distances through strands of glass or plastic fibers. These fibers carry information in the form of light pulses. Essentially, data is transmitted using light rather than electricity, allowing for faster and more reliable communication.'
    },
    {
        question: 'What is fiber optic internet?',
        answer: 'Fiber optic internet is a high-speed broadband connection that uses thin strands of glass or plastic fibers to transmit data using light signals. It offers significantly faster speeds and greater reliability compared to traditional copper-based internet connections.'
    },
    {
        question: 'How does fiber optic internet work?',
        answer: 'Fiber optic internet works by sending data as pulses of light through optical fibers. These fibers are made of glass or plastic and can transmit data over long distances with minimal signal loss.'
    },
    {
        question: 'What is the installation process like? Where are the fibers installed?',
        answer: 'Our fiber-optic cables are typically installed underground to ensure reliability and minimize environmental impact. Installation involves laying down the fiber-optic cables in designated routes, often alongside existing utility lines or underground conduits. Our expert technicians handle the entire process efficiently and with minimal disruption to the surroundings.'
    },
    {
        question: 'What are the advantages of fiber optic internet?',
        answer: 'Fiber optic internet offers benefits such as ultra-fast speeds, low latency, high reliability, symmetrical upload and download speeds, resistance to interference, and scalability for future needs.',
    },
    {
        question: 'How does fiber optic internet compare to other types of internet connections?',
        answer: 'Fiber optic internet generally outperforms DSL and cable internet in terms of speed, reliability, and latency. It also offers symmetrical speeds, which is not common with DSL and cable.',
    },
    {
        question: 'How do I know if THALLIES is a good fit for me? Do I qualify for THALLIES services? Who are THALLIES customers?',
        answer: 'THALLIES Communications specializes in providing future-proof fiber-optic solutions to businesses, organizations, and HOA and COA communities. If you\'re looking for high-speed internet, reliable phone services, or robust networking solutions for your business or community, THALLIES might be an excellent fit for you. We cater to a wide range of industries and sectors, including education, healthcare, hospitality, and government entities. For more details, or to learn more about how THALLIES products and services might be the ideal solution for you, reach out to us for personalized assistance.',
    },
    {
        question: 'Why Choose THALLIES Fiber?',
        answer: 'THALLIES fiber-optics by THALLIES Communications offers reliable, functional, and expandable internet service by fully utilizing the bandwidth that is only possible through fiber. Built with future-proof technology- no matter how many users or devices are on the network and as more devices start to require more bandwidth to function, THALLIES Fiber will be ready.',
    },
    {
        question: 'Is fiber optic internet more expensive than other types of internet?',
        answer: 'THALLIES optic internet can be more expensive in terms of monthly costs, but it often provides better value for the speed and reliability it offers.',
    },
    {
        question: 'Is fiber optic internet more secure than other types of internet connections?',
        answer: 'Fiber optic internet is generally considered more secure because it\'s difficult to tap into or intercept the light signals traveling through the optical fibers.',
    },
    {
        question: 'What are some common uses for fiber optic internet?',
        answer: 'Fiber optic internet is ideal for activities such as online gaming, 4K/8K streaming, video conferencing, remote work, large file uploads and downloads, and smart home devices.',
    },
    {
        question: 'How do the elements affect the fiber lines?',
        answer: 'Unlike traditional copper-based coaxial cables, which can deteriorate over time due to weather or natural decay, fiber never deteriorates and is capable of withstanding intense weather conditions including the effects of lightning. This means that fiber lines installed today will still be fully operational decades into the future.',
    },
    {
        question: 'Is THALLIES Fiber durable?',
        answer: 'THALLIES Fiber is highly durable and designed to withstand extreme weather conditions. Unlike traditional copper cables, fiber optic cables are resistant to corrosion, electromagnetic interference, and environmental factors. Our fiber infrastructure is built to last decades with minimal maintenance, providing reliable service even in challenging conditions.',
    },
];

export function FAQAccordion() {
    return (
        <Accordion.Root type="single" collapsible className="w-full space-y-4 md:space-y-8">
            {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} question={faq.question} answer={faq.answer} />
            ))}
        </Accordion.Root>
    );
}

function AccordionItem({ value, question, answer }: { value: string; question: string; answer: string }) {
    return (
        <Accordion.Item value={value} className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg md:rounded-2xl shadow-lg border border-[#708D81]/10 overflow-hidden transition-all duration-300">
            <Accordion.Header>
                <Accordion.Trigger className="flex w-full justify-between items-center px-4 md:px-8 py-4 md:py-8 text-lg md:text-2xl font-semibold text-[#001427] hover:text-[#BF0603] transition-colors focus:outline-none">
                    {question}
                    <span className="ml-2 md:ml-4 text-[#BF0603] text-xl md:text-3xl">▼</span>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild>
                <AnimatePresence initial={false}>
                    <motion.div
                        key={value}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.25 } }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 md:px-8 pb-4 md:pb-8 pt-2 text-gray-700 text-base md:text-xl leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Accordion.Content>
        </Accordion.Item>
    );
} 