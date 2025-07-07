'use client';

import { motion } from 'framer-motion';

export function Team() {
    const team = [
        {
            name: "John Smith",
            position: "CEO & Founder",
            description: "Visionary leader with over 15 years of experience in telecommunications.",
            image: "/image/team1.webp"
        },
        {
            name: "Sarah Johnson",
            position: "CTO",
            description: "Technology expert passionate about innovation and digital transformation.",
            image: "/image/team2.webp"
        },
        {
            name: "Michael Brown",
            position: "Operations Director",
            description: "Ensures smooth operations and exceptional customer service delivery.",
            image: "/image/team3.webp"
        }
    ];

    return (
        <section className="mb-20 overflow-hidden">
            <motion.h2
                className="text-4xl font-bold text-[#001427] text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                Our Leadership Team
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <motion.div
                        key={member.name}
                        className="text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                            <span className="text-gray-500">Photo</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                        <p className="text-[#BF0603] font-semibold mb-4">{member.position}</p>
                        <p className="text-gray-600">{member.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
} 