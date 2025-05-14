"use client";

import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Project, projects } from "@/constants";
import { cardModalState } from "@/recoil/atoms";
import { IoCloseSharp, IoLogoGithub } from "react-icons/io5";
import { HiLink } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";

export default function CardModal() {
  const [modal, setModal] = useRecoilState(cardModalState);

  const [project, setProject] = useState<Project>({
    thumbnail: () => <></>,
    title: "",
    projectType: "",
    period: "",
    summary: "",
    workers: "",
    contribution: "",
    role: "",
    tasks: [],
    stacks: [],
    achievements: [],
    slideImages: [],
    contents: [],
    githubs: [],
    links: [],
  });

  const slideRef = useRef<SwiperRef | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!modal.show) {
        gsap.fromTo(
          ".modal",
          {
            y: 0,
          },
          {
            y: 100,
            duration: 0.75,
          }
        );
      } else {
        gsap.fromTo(
          ".modal",
          {
            y: 100,
          },
          {
            y: 0,
            duration: 0.75,
          }
        );
      }
    },
    {
      scope: containerRef,
      dependencies: [modal.show],
      revertOnUpdate: true,
    }
  );

  const handleCloseModal = () => {
    setModal({ show: false, projectNumber: undefined });
  };

  const handlePreventEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (!modal.show || !modal.projectNumber) {
      return;
    }

    setProject(projects[modal.projectNumber - 1]);
  }, [modal]);

  return (
    <div
      ref={containerRef}
      onClick={handleCloseModal}
      className={`fixed flex flex-col justify-center items-center w-screen h-[100svh] pr-[60px] md:pr-[120px] pl-[20px] md:pl-[120px] py-[20px] md:py-[80px] bg-black/50 duration-[750ms] cursor-pointer ${
        modal.show ? `opacity-100 z-[99]` : `opacity-0 z-[-1]`
      }`}
    >
      <div
        onClick={handlePreventEvent}
        className="modal relative flex flex-col w-full max-w-[1200px] max-h-full md:max-h-[70vh] min-h-[55vh] p-[40px] md:p-[40px] bg-[#373737] rounded-xl cursor-default"
      >
        <div className="absolute flex flex-col top-[0px] right-[-50px] md:right-[-70px] gap-y-[10px] md:gap-y-[20px]">
          <div
            onClick={handleCloseModal}
            className="flex justify-center items-center size-[40px] md:size-[50px] bg-[#373737] hover:bg-[#444444] rounded-full duration-300 cursor-pointer"
          >
            <IoCloseSharp size={30} color="white" />
          </div>

          {project.links?.map((value, index) => (
            <a
              key={`link-${index}`}
              href={value}
              target="_blank"
              className="flex justify-center items-center size-[40px] md:size-[50px] bg-[#373737] hover:bg-[#444444] rounded-full duration-300 cursor-pointer"
            >
              <HiLink
                color="white"
                className="flex justify-center items-center size-[25px] md:size-[30px] rounded-full cursor-pointer"
              />
            </a>
          ))}

          {project.githubs?.map((value, index) => (
            <a key={`github-${index}`} href={value} target="_blank">
              <BsGithub
                color="white"
                className="flex justify-center items-center size-[40px] md:size-[50px] bg-black rounded-full cursor-pointer"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col w-full overflow-y-auto">
          <div className="flex flex-col leading-[1] mb-[10px] lg:mb-[20px]">
            <h3 className="mb-[10px] text-[30px] md:text-[50px] font-semibold text-white leading-[1]">
              {project.title}
            </h3>
            <p className="mb-[10px] text-[14px] md:text-[20px] text-[#989898]">
              {project.projectType}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full h-full gap-x-[40px] overflow-y-auto">
            <div className="flex flex-col flex-1 h-full">
              <div className="flex flex-col h-full pr-0 md:pr-[40px] overflow-clip lg:overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/15 scrollbar-thumb-rounded-full">
                <div className="flex flex-col sm:grid sm:grid-cols-[140px_auto] mb-[20px] gap-y-[5px]">
                  <p className="text-[14px] md:text-[18px] text-white font-semibold">
                    프로젝트 정보
                  </p>
                  <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#F3F3F3]">
                    {project.summary}
                  </p>

                  <p className="text-[14px] md:text-[18px] text-white font-semibold">기간</p>
                  <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#F3F3F3]">
                    {project.period}
                  </p>

                  <p className="text-[14px] md:text-[18px] text-white font-semibold">참여인원</p>
                  <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#F3F3F3]">
                    {project.workers}
                  </p>

                  <p className="text-[14px] md:text-[18px] text-white font-semibold">기여도</p>
                  <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#F3F3F3]">
                    {project.contribution}
                  </p>

                  <p className="text-[14px] md:text-[18px] text-white font-semibold">주요업무</p>
                  <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#F3F3F3]">
                    {project.role}
                  </p>

                  <p className="text-[14px] md:text-[18px] text-white font-semibold">기술스택</p>
                  <div className="flex flex-wrap gap-x-[5px] gap-y-[5px]">
                    {project.stacks.map((project, index) => (
                      <div
                        key={`stack-${index}`}
                        className="px-[8px] text-[10px] sm:text-[12px] md:text-[14px] bg-white rounded-full"
                      >
                        {project}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[14px] md:text-[18px] text-white font-semibold">상세역할</p>
                <ul className="flex flex-col mb-[20px] indent-[-13px] ml-[13px]">
                  {project.tasks.map((value, index) => (
                    <li
                      key={`task-${index + 1}`}
                      className="text-[12px] sm:text-[14px] md:text-[18px] text-[#F3F3F3]"
                    >
                      - {value}
                    </li>
                  ))}
                </ul>

                <p className="text-[14px] md:text-[18px] text-white font-semibold">성과 및 결과</p>
                <ul className="flex flex-col mb-[20px] indent-[-13px] ml-[13px]">
                  {project.achievements.map((value, index) => (
                    <li
                      key={`task-${index + 1}`}
                      className="text-[12px] sm:text-[14px] md:text-[18px] text-[#F3F3F3]"
                    >
                      - {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-[45%] lg:max-w-[600px]">
              <Swiper
                ref={slideRef}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                pagination={true}
                autoplay={{ delay: 5000 }}
                speed={1000}
                className="w-full h-[40vw] max-h-[360px] rounded-xl"
              >
                {project.slideImages.map((value, index) => (
                  <SwiperSlide key={`slide-${index + 1}`}>
                    <Image
                      src={value.src}
                      alt={`프로젝트 이미지-${index + 1}`}
                      fill
                      className="object-cover object-center"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex flex-col flex-1 mt-[20px] pr-[20px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/15 scrollbar-thumb-rounded-full">
                <ul className="flex flex-col indent-[-13px] ml-[13px]">
                  {project.contents.map((value, index) => (
                    <li
                      key={`task-${index + 1}`}
                      className="text-[12px] sm:text-[14px] md:text-[18px] text-[#A3A3A3]"
                    >
                      - {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
