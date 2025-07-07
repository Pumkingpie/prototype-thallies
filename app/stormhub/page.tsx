'use client';

import Hero from "@/components/stormhub/hero";
import Weather from "@/components/stormhub/weather";
import Resource from "@/components/stormhub/resources";
import { Prepared } from "@/components/stormhub";
import { Section } from "@/components/stormhub";
import { Benefict } from "@/components/stormhub";

export default function StormHubPage() {
    return (
        <main>
            <Hero />
            <Prepared />
            <Section />
            <Benefict />
            <Weather />
            <Resource />
        </main>
    );
}