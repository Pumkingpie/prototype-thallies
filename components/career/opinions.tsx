import React from 'react';
import Image from 'next/image';

export function CEOOpinion() {
    return (
        <section className="w-full py-16 bg-gradient-to-b from-[#001427] via-[#23395d] to-indigo-900 flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                        src="/image/enterprise/business/voiceEnterprise.webp"
                        alt="CEO of THALLIES"
                        width={96}
                        height={96}
                        className="object-cover object-center"
                        priority
                    />
                </div>
                <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 italic">
                    “The first people I hired when I founded THALLIES are still with me today—they have been instrumental in our continued growth and success. It’s important to find people who believe in the mission, then give them the opportunity to shine and the freedom to do what they do best. Picking the right people, who care about our purpose and our customers, is key to the culture we’ve built at THALLIES.”
                </blockquote>
                <div className="font-bold text-white text-lg">Alexander Torres</div>
                <div className="text-white/80 text-base">CEO & Co-founder</div>
            </div>
        </section>
    );
}
