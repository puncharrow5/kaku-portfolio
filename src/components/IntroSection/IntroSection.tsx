"use client";

import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import type { Engine } from "tsparticles-engine";

import { TiArrowDown } from "react-icons/ti";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

interface Props {
  isMobile: boolean;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const ParticlesBackground = React.memo(() => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  ParticlesBackground.displayName = "ParticlesBackground";

  return (
    <Particles
      id="tsparticlesDiv1"
      className="absolute top-0 left-0 w-full h-full"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 120,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },

          size: {
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
});

export default function IntroSection({ isMobile, setActiveIndex }: Props) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClickArrow = () => {
    setActiveIndex(1);
  };

  useGSAP(
    () => {
      if (!isIntersecting) {
        return;
      }

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".title",
          {
            width: "0",
          },
          {
            width: "auto",
            duration: 1,
            delay: 0.5,
          }
        )
        .fromTo(
          ".subtitle",
          {
            y: 0,
            opacity: 0,
          },
          {
            y: -50,
            opacity: 1,
            duration: 0.75,
          }
        )
        .fromTo(
          ".arrow",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            delay: 0.25,
          }
        )
        .fromTo(
          ".arrow",
          { y: 0 },
          {
            y: -20,
            duration: 1,
            yoyo: true,
            repeat: -1,
            ease: "power1",
          }
        );
    },
    {
      scope: containerRef,
      dependencies: [isIntersecting],
      revertOnUpdate: true,
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio > 0.5) {
        setIsIntersecting(true);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative flex w-screen min-h-[100svh] bg-[#000000]">
      <ParticlesBackground />

      <div className="flex flex-col justify-center items-center w-full h-full px-[40px] md:px-[80px] pt-[160px] md:pt-[200px] pb-[120px]">
        <div className="relative flex flex-col justify-center items-center w-full max-w-[1280px] h-full min-h-[440px] sm:min-h-[600px] md:min-h-[700px]">
          <div className="title absolute top-0 left-0 w-0 overflow-hidden">
            <h1 className="text-[44px] sm:text-[60px] md:text-[80px] font-bold leading-[1] text-white">
              KAKU&apos;S
              <br />
              PORTFOLIO
            </h1>
          </div>

          <div className="subtitle relative flex flex-col items-center opacity-0">
            <p className="text-center text-[12px] sm:text-[20px] md:text-[28px] text-gray-100 font-semibold leading-[1.6]">
              환영합니다!
              <br />
              늘 어제보다 더 나은 개발자가 되려고 노력하는
              <br />
              프론트엔드 개발자 오승현의 포트폴리오입니다.
            </p>

            <div className="absolute bottom-[-160px] md:bottom-[-200px] flex items-center mt-[80px] mb-[60px] bg-white px-[20px] md:px-[50px] py-[10px] md:py-[15px] gap-x-[40px] rounded-full">
              <a title="깃허브" href="https://github.com/puncharrow5" target="_blank">
                <FaGithub size={isMobile ? 25 : 40} className="cursor-pointer" />
              </a>
              <a
                title="노션"
                href="https://geode-divan-811.notion.site/a44da1efdf5b47ea8fe12a8f85b216ad"
                target="_blank"
              >
                <SiNotion size={isMobile ? 25 : 40} className="cursor-pointer" />
              </a>
              <a
                title="링크드인"
                href="https://www.linkedin.com/in/oh-seunghyeon-352708307"
                target="_blank"
              >
                <FaLinkedin size={isMobile ? 25 : 40} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <div
          onClick={handleClickArrow}
          className="arrow absolute flex flex-col items-center bottom-[40px] opacity-0 cursor-pointer z-[1]"
        >
          <p className="text-[20px] font-bold text-white">SCROLL DOWN</p>
          <TiArrowDown size={isMobile ? 30 : 40} color="white" />
        </div>

        <div className="absolute bottom-0 w-screen h-[200px] bg-gradient-to-b from-transparent to-[#161616]" />
      </div>
    </div>
  );
}
