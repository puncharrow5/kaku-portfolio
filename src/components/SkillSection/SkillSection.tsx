"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { techStacks } from "@/constants/teckStack";
import { nodeFolderIcon, publicFolderIcon, srcFolderIcon, tsxIcon } from "../../../public/images";
import { FaFolderOpen, FaFolder } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  isMobile: boolean;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function SkillSection({ isMobile, setActiveIndex }: Props) {
  const [skillType, setSkillType] = useState(1);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isTabOpen, setIsTabOpen] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (id: number) => () => {
    setActiveIndex(id);
  };

  const handleChangeType = (id: number) => () => {
    if (!isTabOpen) {
      return;
    }

    if (isMobile) {
      setIsTabOpen(false);
    }

    setSkillType(id);
  };

  const handleClickTab = () => {
    setIsTabOpen(!isTabOpen);
  };

  useGSAP(
    () => {
      if (!isIntersecting) return;

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".vscode",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          }
        )
        .fromTo(
          ".skillType",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1.25,
          },
          "<"
        )
        .fromTo(
          ".underline",
          {
            width: 0,
          },
          {
            width: "100%",
            duration: 1.5,
            ease: "circ.inOut",
          },
          "<"
        )
        .fromTo(
          ".skill",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
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

  useGSAP(
    () => {
      if (!isIntersecting) return;

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".skillType",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1.5,
          },
          "<"
        )
        .fromTo(
          ".underline",
          {
            width: 0,
          },
          {
            width: "100%",
            duration: 1.25,
            ease: "circ.inOut",
          },
          "<"
        )
        .fromTo(
          ".skill",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1",
          }
        );
    },
    {
      scope: containerRef,
      dependencies: [skillType],
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

  useEffect(() => {
    if (isMobile) {
      setIsTabOpen(false);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col justify-center items-center w-screen min-h-[100svh] md:py-[240px] md:px-[80px] bg-[#161616]"
    >
      <div className="relative flex flex-col md:flex-row w-full md:max-w-[1280px] h-full gap-[20px]">
        {!isMobile && (
          <>
            <div
              className={`absolute bottom-[-100px] left-[-200px] size-[500px] bg-red-700/60 rounded-full blur-3xl duration-[1500ms] delay-300 z-0 ${
                isIntersecting ? `opacity-100` : `opacity-0`
              }`}
            />
            <div
              className={`absolute top-[-100px] right-[-240px] size-[600px] bg-yellow-400/60 rounded-full blur-3xl duration-[1500ms] delay-300 z-0 ${
                isIntersecting ? `opacity-100` : `opacity-0`
              }`}
            />
          </>
        )}
        <div className="vscode relative flex flex-col w-full md:max-w-[1280px] h-full md:min-h-[620px] border-[1px] border-[#2B2B2B] md:rounded-md opacity-0">
          <div className="flex justify-center items-center h-[45px] bg-[#1F1F1F] border-[1px] border-[#2B2B2B] md:rounded-t-md">
            <div className="absolute flex left-[20px] gap-x-[8px]">
              <div className="size-[11px] bg-[#FE5F57] rounded-full" />
              <div className="size-[11px] bg-[#FEBB2E] rounded-full" />
              <div className="size-[11px] bg-[#27C840] rounded-full" />
            </div>

            <div className="w-[50%] max-w-[400px] h-[30px] bg-[#2A2A2A] text-center text-[#9D9D9D] border-[1px] border-[#474747] rounded-lg">
              kaku-portfolio
            </div>
          </div>

          <div className="relative flex flex-row h-full bg-[#181818] rounded-b-md">
            <div
              className={`absolute md:static h-full py-[10px] bg-[#1F1F1F] border-r-[1px] border-[#2B2B2B] ${
                isTabOpen ? `w-full md:w-[240px]` : `w-[32px]`
              } duration-500 overflow-hidden whitespace-nowrap z-[1]`}
            >
              <div
                onClick={handleClickTab}
                className="flex items-center mb-[5px] ml-[5px] text-[18px] text-[#CBCBCB] font-bold cursor-pointer"
              >
                <IoIosArrowDown
                  color="#BFBFBF"
                  size={25}
                  className={`min-w-[25px] mr-[10px] ${
                    isTabOpen ? `rotate-0` : `-rotate-90`
                  } duration-500`}
                />
                <span>KAKU-PORTFOLIO</span>
              </div>

              <div className="flex items-center mb-[3px] ml-[30px]">
                <IoIosArrowDown
                  color="#BFBFBF"
                  size={15}
                  className="min-w-[15px] mr-[5px] -rotate-90"
                />
                <Image
                  src={nodeFolderIcon}
                  className="w-[16px] min-w-[16px] mr-[10px]"
                  alt="폴더 아이콘"
                />
                <span className="text-[14px] text-[#7D7D7D]">node_modules</span>
              </div>
              <div className="flex items-center mb-[3px] ml-[30px]">
                <IoIosArrowDown
                  color="#BFBFBF"
                  size={15}
                  className="min-w-[15px] mr-[5px] -rotate-90"
                />
                <Image
                  src={publicFolderIcon}
                  className="w-[16px] min-w-[16px] mr-[10px]"
                  alt="폴더 아이콘"
                />
                <span className="text-[14px] text-[#C2C2C2]">public</span>
              </div>

              <div className="flex items-center mb-[3px] ml-[45px]">
                <IoIosArrowDown color="#BFBFBF" size={15} className="min-w-[15px] mr-[5px]" />
                <Image
                  src={srcFolderIcon}
                  className="w-[16px] min-w-[16px] mr-[10px]"
                  alt="폴더 아이콘"
                />
                <span className="text-[14px] text-[#C2C2C2]">src</span>
              </div>

              <div className="flex items-center mb-[3px] ml-[30px]">
                <IoIosArrowDown
                  color="#BFBFBF"
                  size={15}
                  className="min-w-[15px] mr-[3px] -rotate-90"
                />
                <FaFolder color="#90A4AF" className="w-[13px] min-w-[13px] mr-[10px]" />
                <span
                  onClick={handleScroll(0)}
                  className="text-[14px] text-[#C2C2C2] cursor-pointer"
                >
                  intro
                </span>
              </div>
              <div className="flex items-center mb-[3px] ml-[30px]">
                <IoIosArrowDown
                  color="#BFBFBF"
                  size={15}
                  className="min-w-[15px] mr-[3px] -rotate-90"
                />
                <FaFolder color="#90A4AF" className="w-[13px] min-w-[13px] mr-[10px]" />
                <span
                  onClick={handleScroll(1)}
                  className="text-[14px] text-[#C2C2C2] cursor-pointer"
                >
                  about
                </span>
              </div>
              <div className="flex items-center mb-[3px] ml-[30px]">
                <IoIosArrowDown
                  color="#BFBFBF"
                  size={15}
                  className="min-w-[15px] mr-[3px] -rotate-90"
                />
                <FaFolder color="#90A4AF" className="w-[13px] min-w-[13px] mr-[10px]" />
                <span
                  onClick={handleScroll(2)}
                  className="text-[14px] text-[#C2C2C2] cursor-pointer"
                >
                  career
                </span>
              </div>

              <div className="flex items-center mb-[3px] ml-[30px]">
                <IoIosArrowDown
                  color="#BFBFBF"
                  size={15}
                  className="w-[15px] min-w-[15px] mr-[5px]"
                />
                <FaFolderOpen color="#90A4AF" className="w-[15px] min-w-[15px] mr-[10px]" />
                <span className="text-[14px] text-[#C2C2C2] cursor-pointer">skill</span>
              </div>

              {techStacks.map((value) => (
                <div
                  key={value.id}
                  onClick={handleChangeType(value.id)}
                  className={`flex items-center pl-[55px] py-[3px] w-full ${
                    isTabOpen ? `cursor-pointer` : `cursor-default`
                  }  ${
                    isTabOpen && skillType === value.id ? ` bg-[#37373D]` : `bg-transparent`
                  } duration-500`}
                >
                  <Image
                    src={tsxIcon}
                    className="w-[16px] min-w-[16px] mr-[8px]"
                    alt="리액트 아이콘"
                  />
                  <span className="text-[14px] text-[#C2C2C2]">{value.type}.tsx</span>
                </div>
              ))}

              <div className="flex items-center mb-[3px] ml-[30px]">
                <IoIosArrowDown
                  color="#BFBFBF"
                  size={15}
                  className="min-w-[15px] mr-[3px] -rotate-90"
                />
                <FaFolder color="#90A4AF" className="w-[13px] min-w-[13px] mr-[10px]" />
                <span
                  onClick={handleScroll(4)}
                  className="text-[14px] text-[#C2C2C2] cursor-pointer"
                >
                  project
                </span>
              </div>
              <div className="flex items-center ml-[30px]">
                <IoIosArrowDown
                  color="#BFBFBF"
                  size={15}
                  className="min-w-[15px] mr-[3px] -rotate-90"
                />
                <FaFolder color="#90A4AF" className="w-[13px] min-w-[13px] mr-[10px]" />
                <span
                  onClick={handleScroll(5)}
                  className="text-[14px] text-[#C2C2C2] cursor-pointer"
                >
                  contact
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 w-fit pr-[30px] pl-[60px] md:pl-[30px] py-[10px]">
              <div className="skillType relative mb-[20px] md:mb-[40px] pb-[5px] opacity-0">
                <p className="text-[36px] md:text-[40px] lg:text-[50px] text-white font-bold">
                  {techStacks[skillType - 1].title}
                </p>
                <div className="underline border-b-[1px] border-[#474747]" />
              </div>
              <div className="flex flex-wrap justify-center mb-[60px] md:mb-[40px] gap-x-[15px] md:gap-x-[20px] gap-y-[15px] md:gap-y-[20px]">
                {isIntersecting &&
                  techStacks[skillType - 1].skills?.map((value, index) => (
                    <div
                      key={`skill-${index}`}
                      className="skill flex items-center justify-between px-[10px] md:px-[15px] py-[8px] md:py-[10px] gap-x-[10px] md:gap-x-[20px] bg-white border-2 border-[#0A88D1] rounded-lg  opacity-0"
                    >
                      {value.icon()}
                      <span className="text-[14px] md:text-[22px]">{value.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-screen h-[100px] bg-gradient-to-b from-transparent to-[#232323]" />
    </div>
  );
}
