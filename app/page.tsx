import React from "react";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/section";
import { Section as HomeSection } from "@/components/home/section";
import { UsCoverageMap } from "@/components/home/UsCoveragemap";
import WhoServe from "@/components/home/WhoServe";

const home = () => {
  return (
    <div>
      <section>
        <div>
          <Hero />
        </div>
      </section>
      <Section />
      <HomeSection />
      <UsCoverageMap />
      <WhoServe />
      <section>
        <div></div>
      </section>
    </div>
  );
};

export default home;