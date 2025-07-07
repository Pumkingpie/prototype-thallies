import React from 'react';
import { Hero, Services, Technology, Process, CTA } from '@/components/who-we-are/what-we-do';

const WhatWeDoPage = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Technology />
            <Process />
            <CTA />
        </div>
    );
};

export default WhatWeDoPage;
