'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const resources = [
    {
        title: 'Texas Division of Emergency Management',
        content: (
            <div>
                <p><b>Phone:</b> (512) 424-2208</p>
                <p><b>Web:</b> <a href="https://tdem.texas.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">tdem.texas.gov</a></p>
                <p><b>Shelters and Relief:</b> Real-time shelter information during disasters via the American Red Cross or the Texas Hurricane Center.</p>
            </div>
        )
    },
    {
        title: 'Florida Division of Emergency Management',
        content: (
            <div>
                <p><b>Phone:</b> (850) 815-4000</p>
                <p><b>Web:</b> <a href="https://www.floridadisaster.org/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">floridadisaster.org</a></p>
                <p><b>Shelters and Relief:</b> Up-to-date shelter information during active events and disaster preparedness guide.</p>
            </div>
        )
    },
    {
        title: "California Governor's Office of Emergency Services",
        content: (
            <div>
                <p><b>Phone:</b> (916) 845-8510</p>
                <p><b>Web:</b> <a href="https://www.caloes.ca.gov" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">caloes.ca.gov</a></p>
                <p><b>Shelters and Relief:</b> Information about shelters and emergency resources, especially for wildfires.</p>
            </div>
        )
    },
    {
        title: 'North Carolina Division of Emergency Management',
        content: (
            <div>
                <p><b>Phone:</b> (919) 825-2500</p>
                <p><b>Web:</b> <a href="https://www.ncdps.gov/our-organization/emergency-management" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">ncdps.gov</a></p>
                <p><b>Shelters and Relief:</b> NC Shelter Finder App and disaster information center.</p>
            </div>
        )
    },
    {
        title: 'South Carolina Emergency Management Division',
        content: (
            <div>
                <p><b>Phone:</b> (803) 737-8500</p>
                <p><b>Web:</b> <a href="https://www.scemd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">scemd.org</a></p>
                <p><b>Shelters and Relief:</b> Information about shelters and disaster recovery.</p>
            </div>
        )
    },
    {
        title: 'Nevada Division of Emergency Management',
        content: (
            <div>
                <p><b>Phone:</b> (775) 687-0300</p>
                <p><b>Web:</b> <a href="https://dem.nv.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">dem.nv.gov</a></p>
                <p><b>Shelters and Relief:</b> Disaster preparedness information and local resources.</p>
            </div>
        )
    },
    {
        title: 'Pennsylvania Emergency Management Agency',
        content: (
            <div>
                <p><b>Phone:</b> (717) 651-2001</p>
                <p><b>Web:</b> <a href="https://www.pema.pa.gov" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">pema.pa.gov</a></p>
                <p><b>Shelters and Relief:</b> Local Red Cross information and real-time alerts.</p>
            </div>
        )
    },
    {
        title: 'Arizona Department of Emergency and Military Affairs',
        content: (
            <div>
                <p><b>Phone:</b> (602) 267-2700</p>
                <p><b>Web:</b> <a href="https://dema.az.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">dema.az.gov</a></p>
                <p><b>Shelters and Relief:</b> Disaster preparedness information, especially for heatwaves and wildfires.</p>
            </div>
        )
    },
    {
        title: 'Georgia Emergency Management and Homeland Security Agency',
        content: (
            <div>
                <p><b>Phone:</b> (404) 635-7000</p>
                <p><b>Web:</b> <a href="https://gema.georgia.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">gema.georgia.gov</a></p>
                <p><b>Shelters and Relief:</b> Shelter locations and hurricane response resources.</p>
            </div>
        )
    },
];

export default function Resource() {
    const [open, setOpen] = useState<number | null>(null);
    const [openFaq, setOpenFaq] = useState(false);

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#001427] mb-8 text-center">Important Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resources.map((res, idx) => (
                        <div
                            key={res.title}
                            className={`border rounded-lg shadow h-full flex flex-col transition-colors duration-300 ${open === idx ? 'bg-gradient-to-r from-[#e0f2ff]/80 to-[#f0f7ff]/80' : 'bg-white'}`}
                        >
                            <button
                                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-[#001427] focus:outline-none"
                                onClick={() => setOpen(open === idx ? null : idx)}
                            >
                                <span>{res.title}</span>
                                <motion.span
                                    animate={{ rotate: open === idx ? 90 : 0 }}
                                    className="ml-2"
                                    transition={{ duration: 0.2 }}
                                >
                                    ▶
                                </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                                {open === idx && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-4 text-[#223042] text-base rounded-b-lg"
                                    >
                                        {res.content}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                {/* Preguntas frecuentes */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#001427] mt-12 mb-6 text-center">Frequently Asked Questions</h2>
                <div className="max-w-xl mx-auto">
                    <div className={`border rounded-lg shadow h-full flex flex-col transition-colors duration-300 ${openFaq ? 'bg-gradient-to-r from-[#e0f2ff]/80 to-[#f0f7ff]/80' : 'bg-white'}`}>
                        <button
                            className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-[#001427] focus:outline-none"
                            onClick={() => setOpenFaq(openFaq ? false : true)}
                        >
                            <span>What should I do if I lose service during a storm?</span>
                            <motion.span
                                animate={{ rotate: openFaq ? 90 : 0 }}
                                className="ml-2"
                                transition={{ duration: 0.2 }}
                            >
                                ▶
                            </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                            {openFaq && (
                                <motion.div
                                    key="faq-content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-6 pb-4 text-[#223042] text-base rounded-b-lg"
                                >
                                    <p>
                                        If you lose service during a storm, first check that you have power. If the problem persists after power is restored, try restarting your equipment by unplugging it for 30 seconds and plugging it back in. If you still have no service, contact our support center at <b>800-355-5668</b>.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}