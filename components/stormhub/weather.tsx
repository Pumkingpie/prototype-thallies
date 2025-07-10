'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
    {
        label: "Before Storm",
        content: (
            <div className="text-[#223042] text-base md:text-lg space-y-4">
                <div>
                    <h3 className="font-bold mb-1">Preparation Efforts</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Network Reinforcement: We proactively strengthen our fiber-optic network.</li>
                        <li>Reinforcing Infrastructure: Enhanced protection for fiber-optic lines to withstand high winds and flooding.</li>
                        <li>Backup Systems: Installation of backup power systems at critical network points to maintain service during power outages.</li>
                        <li>Maintenance Checks: Ensuring network reliability.</li>
                        <li>Routine Inspections: Regular checks and maintenance of fiber-optic network and equipment.</li>
                        <li>Protective Measures: Applying protective coatings and installing conduits to safeguard fiber-optic cables.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-1">Customer Guidance</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Develop a Plan: Create a family emergency plan, including communication strategies and evacuation routes.</li>
                        <li>Emergency Kit: Gather essential supplies such as water, non-perishable food, medications, and important documents.</li>
                        <li>Emergency Contacts: Set up a list of emergency contacts and share it with family members.</li>
                        <li>Device Charging: Keep mobile devices, battery backups, and power banks fully charged.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        label: "During Storm",
        content: (
            <div className="text-[#223042] text-base md:text-lg space-y-4">
                <div>
                    <h3 className="font-bold mb-1">Operational Measures</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Network Monitoring: Continuous real-time monitoring of our fiber-optic network.</li>
                        <li>Rapid Response Teams: Deployment-ready teams to address any network issues swiftly.</li>
                        <li>Updates: Receive real-time updates through text messages, emails, and our social media channels.</li>
                        <li>Storm Tracker: Utilize our <a href="https://www.nhc.noaa.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">interactive storm tracker</a> to monitor the hurricane&apos;s progress and impact on our service areas.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-1">Safety Tips for Customers</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Local Emergency Services: Have contact information for local emergency management offices readily available.</li>
                        <li>Customer Service line: Reach us at <b>800-355-5668</b> for any service-related inquiries.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        label: "After Storm",
        content: (
            <div className="text-[#223042] text-base md:text-lg space-y-4">
                <div>
                    <h3 className="font-bold mb-1">Restoration Efforts</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Rapid Assessment: Use of tools and field teams for quick damage assessment.</li>
                        <li>Priority Repairs: Prioritizing repairs based on the extent of damage and the number of affected customers.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-1">We&quot;ll Keep You Updated</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Estimated Timelines: Providing estimated restoration times based on damage assessments.</li>
                    </ul>
                </div>
            </div>
        )
    },
];

export default function Weather() {
    const [selected, setSelected] = useState(0);

    return (
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#001427] to-indigo-900">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Real-time hurricane and storm updates</h2>
                <div className="w-full flex justify-center mb-8">
                    <iframe
                        id="nhc1"
                        width="320"
                        height="280"
                        scrolling="no"
                        frameBorder="0"
                        src="https://www.nhc.noaa.gov/widgets/nhc_widget.shtml"
                        title="NHC Hurricane Widget"
                        className="bg-white rounded-lg shadow-lg border-2 border-white"
                    ></iframe>
                </div>
                {/* Smooth Tabs */}
                <div className="w-full max-w-2xl">
                    <div className="flex bg-white rounded-lg shadow overflow-hidden mb-4">
                        {tabs.map((tab, idx) => (
                            <button
                                key={tab.label}
                                onClick={() => setSelected(idx)}
                                className={`flex-1 py-3 px-4 text-center font-semibold transition-colors duration-200 relative z-10 ${selected === idx ? 'text-[#BF0603]' : 'text-[#223042]'}`}
                                style={{ outline: 'none' }}
                            >
                                {tab.label}
                                {selected === idx && (
                                    <motion.div
                                        layoutId="tab-underline"
                                        className="absolute left-0 right-0 bottom-0 h-1 bg-[#BF0603] rounded-t"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 min-h-[100px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selected}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {tabs[selected].content}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}