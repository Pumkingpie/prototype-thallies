import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Emily R.",
        role: "Network Engineer",
        text: "The fact that we are continuously expanding has opened opportunities for me to grow within the company by taking on extra responsibilities and learning new roles."
    },
    {
        name: "Carlos M.",
        role: "Customer Support Specialist",
        text: "My contributions to the organization have been repeatedly recognized by senior leaders and has awarded me a promotion."
    },
    {
        name: "Samantha T.",
        role: "Community Outreach Coordinator",
        text: "Understanding the vast role that our company plays in our community and others across the nation is a huge value statement for me."
    },
    {
        name: "James L.",
        role: "Field Technician",
        text: "The company as a whole has a ‘family-owned and operated’ environment and it’s truly a pleasure to work with such great teams."
    },
    {
        name: "Priya S.",
        role: "Software Developer",
        text: "I love the innovative spirit here. We’re always encouraged to bring new ideas and push boundaries."
    },
    {
        name: "Michael B.",
        role: "Sales Manager",
        text: "Teamwork is at the heart of everything we do. I always feel supported and valued."
    },
    {
        name: "Ana G.",
        role: "Marketing Specialist",
        text: "Hotwire’s impact in the community makes me proud to be part of the team."
    },
    {
        name: "David P.",
        role: "Project Manager",
        text: "Continuous learning and growth are part of the culture. I’ve advanced my career faster than I imagined."
    },
    {
        name: "Linda W.",
        role: "HR Coordinator",
        text: "The leadership truly cares about our well-being and professional development."
    },
    {
        name: "Oscar F.",
        role: "Installation Technician",
        text: "Every day brings new challenges and opportunities to learn."
    },
    {
        name: "Julia K.",
        role: "Account Executive",
        text: "I feel empowered to make a difference for our customers and our community."
    },
    {
        name: "Brian S.",
        role: "IT Support",
        text: "The collaborative environment makes even the toughest projects enjoyable."
    },
    {
        name: "Nina V.",
        role: "Product Designer",
        text: "Creativity is celebrated here. I’m always inspired by my colleagues."
    },
    {
        name: "Ethan D.",
        role: "Business Analyst",
        text: "I appreciate the transparency and open communication from leadership."
    },
    {
        name: "Sofia M.",
        role: "Finance Associate",
        text: "Hotwire’s commitment to bridging the digital divide is truly inspiring."
    }
];

export function Testimonials() {
    // Duplicamos el array para efecto infinito
    const marqueeTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="w-full py-16 bg-gradient-to-r from-[#001427] via-[#23395d] to-indigo-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-center">Employee Testimonials</h2>
                <div className="relative w-full overflow-x-hidden">
                    <motion.div
                        className="flex gap-8"
                        style={{ width: 'max-content', willChange: 'transform' }}
                        animate={{ x: [0, -100 * testimonials.length] }}
                        transition={{ repeat: Infinity, repeatType: 'loop', duration: testimonials.length * 5, ease: 'linear' }}
                    >
                        {marqueeTestimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 rounded-xl shadow-lg p-8 text-center min-h-[220px] flex flex-col justify-center min-w-[320px] max-w-md mx-2"
                                style={{ flex: '0 0 320px' }}
                            >
                                <p className="text-xl mb-6 font-medium">“{testimonial.text}”</p>
                                <div className="font-semibold text-[#F4D58D]">{testimonial.name}</div>
                                <div className="text-sm text-gray-200">{testimonial.role}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
