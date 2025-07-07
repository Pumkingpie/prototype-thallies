import React from 'react';

export function Story() {
    const stats = [
        { number: "10+", label: "Years of Experience" },
        { number: "50K+", label: "Satisfied Customers" },
        { number: "99.9%", label: "Guaranteed Uptime" }
    ];

    return (
        <section className="mb-20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-[#001427] mb-6">
                        Our Story
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Founded with the vision of democratizing access to high-speed internet,
                        our company has been at the forefront of the digital revolution since our inception.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        We started as a small local startup with the dream of connecting every home
                        and business with the power of fiber optics. Today, we are leaders in the
                        telecommunications sector, serving thousands of satisfied customers.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl font-bold text-[#BF0603]">{stat.number}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center overflow-hidden">
                    <span className="text-gray-500">Company Image</span>
                </div>
            </div>
        </section>
    );
} 