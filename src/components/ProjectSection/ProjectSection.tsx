"use client";

import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { cardModalState } from "@/recoil/atoms/cardModalAtom";
import { projects } from "@/constants";
import { MdOutlineAdsClick } from "react-icons/md";

export default function ProjectSection() {
  const setCardModal = useSetRecoilState(cardModalState);

  const [isIntersecting, setIsIntersecting] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleOpenModal = (projectNumber: number) => () => {
    setCardModal({
      show: true,
      projectNumber,
    });
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
            y: 50,
            opacity: 0,
          },
          { y: 0, opacity: 1, duration: 1 }
        )
        .fromTo(
          ".card",
          {
            y: 50,
            opacity: 0,
          },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 }
        );
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
        if (entry.intersectionRatio > 0) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: [0, 0.1],
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
      className="relative flex flex-col items-center w-screen min-h-[100svh] px-[40px] md:px-[80px] pt-[120px] pb-[180px] md:pb-[200px] bg-[#232323]"
    >
      <h2 className="title mb-[60px] text-[40px] md:text-[50px] lg:text-[72px] text-white font-semibold border-b-2 border-white opacity-0 z-[1]">
        PROJECT .
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center w-full max-w-[1280px] h-full gap-[40px]  z-[1]">
        {projects.map((value, index) => (
          <div
            key={`project-${index + 1}`}
            onClick={handleOpenModal(index + 1)}
            className="card group w-full h-[500px] [perspective:1100px] opacity-0 cursor-pointer"
          >
            {/* 카드 앞면 */}
            <div className="relative w-full h-full duration-1000 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <div className="card-dynamic-size card-front-back flex flex-col">
                {value.thumbnail()}
                <div className="flex flex-col flex-grow justify-between p-[20px]">
                  <div className="flex flex-col">
                    <p className="text-[32px] text-white font-bold leading-[1.2]">{value.title}</p>
                    <p className="text-[14px] text-[#989898]">{value.projectType}</p>
                  </div>

                  <div className="flex flex-wrap gap-x-[8px] gap-y-[7px]">
                    {value.stacks.map((value, index) => (
                      <div
                        key={`stack-${index}`}
                        className="px-[8px] text-[10px] bg-white rounded-full"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 카드 뒷면 */}
              <div className="card-dynamic-size card-front-back rotate-y-180 p-[20px]">
                <div className="relative w-full h-full">
                  <p className="text-[32px] text-white font-bold leading-[1.2]">{value.title}</p>
                  <p className="mb-[10px] text-[14px] text-[#A3A3A3]">{value.period}</p>

                  <ul className="flex flex-col indent-[-13px] ml-[13px] text-[#A3A3A3]">
                    {value.contents.map((value, index) => (
                      <li key={`task-${index + 1}`} className="text-[#A3A3A3]">
                        - {value}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute flex items-center bottom-0 right-0 gap-x-[10px]">
                    <span className="text-[14px] text-white">Click !</span>
                    <MdOutlineAdsClick size={30} color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 w-screen h-[100px] bg-gradient-to-b from-transparent to-[#060608] z-[0]" />
    </div>
  );
}
