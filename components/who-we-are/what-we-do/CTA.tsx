import React from 'react';
import { OptimizedLink } from '@/components/OptimizedLink';

export const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-[#001427] to-[#BF0603] text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Discover the Difference of a Real Fiber Optic Network
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Take the next step towards limitless connectivity, with real FTTH, dedicated support, and the best user experience. Our team is ready to help you take your connectivity to the next level.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <OptimizedLink href='/contact' variant='button' size="lg" className="bg-[#F4D58D] hover:bg-[#F4D58D]/90 text-[#001427] px-8 py-3 text-lg font-semibold">
                            Request a Quote
                        </OptimizedLink>
                        <OptimizedLink href='/contact' variant="button" size="lg" className="border-1 border-white text-white hover:bg-white hover:text-[#001427] px-8 py-3 text-lg">
                            Talk to an Expert
                        </OptimizedLink>
                    </div>

                    {/* Contact information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <div className="text-3xl mb-4">📞</div>
                            <h3 className="text-lg font-semibold mb-2">Direct Line</h3>
                            <p className="text-white/90">1-800-THALLIES</p>
                            <p className="text-sm text-white/70">Mon-Fri 8AM-8PM</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-4">💬</div>
                            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                            <p className="text-white/90">Available 24/7</p>
                            <p className="text-sm text-white/70">Immediate response</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-4">📧</div>
                            <h3 className="text-lg font-semibold mb-2">Email</h3>
                            <p className="text-white/90">info@thallies.com</p>
                            <p className="text-sm text-white/70">Response within 2h</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 