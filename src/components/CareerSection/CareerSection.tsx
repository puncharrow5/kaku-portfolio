"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import type { Engine } from "tsparticles-engine";

import { realdivisionLight } from "../../../public/images";

interface Props {
  isMobile: boolean;
}

const ParticlesBackground = React.memo(() => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  ParticlesBackground.displayName = "ParticlesBackground";

  return (
    <Particles
      id="tsparticlesDiv2"
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

          move: {
            direction: "right",
            enable: true,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: false,
      }}
    />
  );
});

export default function CareerSection({ isMobile }: Props) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!isIntersecting) {
        return;
      }

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".realdivision",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.75,
          }
        )
        .fromTo(
          ".line",
          {
            width: 0,
          },
          {
            width: "100%",
            duration: 0.5,
            delay: 0.25,
          }
        )
        .fromTo(
          ".circle",
          {
            width: 0,
            height: 0,
          },
          {
            width: "80px",
            height: "80px",
            duration: 0.75,
            ease: "circ.inOut",
          }
        )
        .fromTo(".whatsnext", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    },
    {
      scope: containerRef,
      dependencies: [isIntersecting],
      revertOnUpdate: true,
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.5) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

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
    <div
      ref={containerRef}
      className="relative flex flex-col items-center w-screen min-h-[100svh] px-[40px] md:px-[80px] py-[120px] bg-[#161616] z-0"
    >
      <ParticlesBackground />

      <div className="line absolute w-0 h-[2px] top-[50%] left-0 bg-[#474747] z-[0]" />

      <div className="flex items-center w-full max-w-[1280px] h-full z-[1] gap-x-0 md:gap-x-[40px]">
        <div className="realdivision relative flex flex-col md:flex-1 items-center w-full max-w-[600px] p-[40px] bg-[#F5F3F0] rounded-3xl opacity-0">
          <Image
            src={realdivisionLight}
            className="absolute w-[80%] max-w-[400px] top-[-40px] rounded-2xl shadow-xl"
            alt="리얼디비전 로고"
          />
          <div className="flex flex-col w-full mt-[70px]">
            <p className="text-[30px] font-bold">회사명</p>
            <p className="text-[16px]">리얼디비젼</p>
            <p className="mt-[10px] text-[30px] font-bold">부서</p>
            <p className="text-[16px]">개발팀</p>
            <p className="mt-[10px] text-[30px] font-bold">직책</p>
            <p className="text-[16px]">사원</p>
            <p className="mt-[10px] text-[30px] font-bold">담당 업무</p>
            <p className="text-[16px]">웹 및 앱 서비스 프론트엔드·백엔드 개발</p>
            <p className="mt-[10px] text-[30px] font-bold">재직 기간</p>
            <p className="text-[16px]">2023.11 ~ 2024.08</p>
            <p className="mt-[10px] text-[30px] font-bold">퇴사 사유</p>
            <p className="text-[16px]">폐업으로 인한 퇴사</p>
          </div>
        </div>

        {!isMobile && (
          <div className="relative flex flex-col flex-1 justify-center items-center h-full z-[1]">
            <div className="relative flex flex-col items-center w-full">
              <p className="whatsnext absolute top-[-100px] xl:top-[-140px] text-[40px] xl:text-[60px] text-center leading-[1] text-white font-semibold opacity-0 text-nowrap">
                What&apos;s
                <br />
                Next?
              </p>
              <div className="circle size-0 bg-[#145A74] rounded-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
