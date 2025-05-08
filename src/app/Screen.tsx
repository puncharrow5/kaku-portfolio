"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import { FullpageContainer, FullpageSection } from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import CardModal from "@/components/CardModal";
import useResizeHandler from "@/hooks/useResizeHandler";
import MapModal from "@/components/MapModal";

const Nav = dynamic(() => import("@/components/Nav"), {
  ssr: false,
});

const IntroSection = dynamic(() => import("@/components/IntroSection"), {
  ssr: false,
});
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: false,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});
const SkillSection = dynamic(() => import("@/components/SkillSection"), {
  ssr: false,
});
const ProjectSection = dynamic(() => import("@/components/ProjectSection"), {
  ssr: false,
});
const CareerSection = dynamic(() => import("@/components/CareerSection"), {
  ssr: false,
});

export default function Screen() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);

  const { isMobile } = useResizeHandler();

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Nav isMobile={isMobile} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      <CardModal />

      <MapModal />

      <FullpageContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        allowScroll={true}
        transitionDuration={1000}
        onAfterLoad={() => {
          setLoaded(true);
        }}
      >
        <FullpageSection>
          <IntroSection isMobile={isMobile} setActiveIndex={setActiveIndex} />
        </FullpageSection>

        <FullpageSection>
          <AboutSection isMobile={isMobile} />
        </FullpageSection>

        <FullpageSection>
          <CareerSection isMobile={isMobile} />
        </FullpageSection>

        <FullpageSection>
          <SkillSection isMobile={isMobile} setActiveIndex={setActiveIndex} />
        </FullpageSection>

        <FullpageSection>
          <ProjectSection />
        </FullpageSection>

        <FullpageSection>
          <ContactSection />
        </FullpageSection>
      </FullpageContainer>
    </div>
  );
}
