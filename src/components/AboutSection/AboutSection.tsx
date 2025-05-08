"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { interests } from "@/constants";
import { profileMimoticon } from "../../../public/images";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { RiFileDownloadFill, RiGlobalLine } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { useSetRecoilState } from "recoil";
import { mapModalState } from "@/recoil/atoms";

interface Props {
  isMobile: boolean;
}

export default function AboutSection({ isMobile }: Props) {
  const setMapModal = useSetRecoilState(mapModalState);

  const [isIntersecting, setIsIntersecting] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleOpenMap = () => {
    setMapModal({
      show: true,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.2) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
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
      className="flex flex-col items-center justify-center w-screen min-h-[100dvh] px-[40px] md:px-[80px] py-[120px] bg-[#161616] overflow-hidden"
    >
      <div className="relative flex flex-col md:flex-row w-full max-w-[500px] md:max-w-[1280px] gap-[20px]">
        <div
          className={`absolute top-[-50px] left-[-200px] size-[600px] bg-blue-700/60 rounded-full blur-3xl duration-[1500ms] delay-300 z-0 ${
            isIntersecting ? `opacity-100` : `opacity-0`
          }`}
        />
        <div
          className={`absolute bottom-[-50px] right-[-240px] size-[700px] bg-yellow-400/60 rounded-full blur-3xl duration-[1500ms] delay-300 z-0 ${
            isIntersecting ? `opacity-100` : `opacity-0`
          }`}
        />

        <div className="flex w-full md:w-[320px] h-full p-[20px] bg-[#F5F3F0] rounded-xl z-[1]">
          <div className="flex flex-row md:flex-col w-full h-full gap-[30px] overflow-x-auto overflow-y-hidden">
            <div className="flex flex-col">
              <div className="flex size-[180px] md:size-[220px] xl:size-[280px] mb-[10px] md:mb-0 bg-[#8DECB4] rounded-xl">
                <Image
                  src={profileMimoticon}
                  alt="프로필 미모티콘"
                  className="translate-y-[15px] md:translate-y-[18px] xl:translate-y-[24px]"
                />
              </div>
              {isMobile && (
                <div className="leading-[1]">
                  <p className="mb-[3px] text-[20px] md:text-[26px] font-bold">오승현</p>
                  <p className="text-[12px] md:text-[16px] text-[#9c9c9c]">Seunghyeon Oh</p>
                </div>
              )}
            </div>

            <div className="flex flex-col leading-[1] justify-center">
              {!isMobile && (
                <div>
                  <p className="mb-[5px] text-[20px] md:text-[26px] font-bold">오승현</p>
                  <p className="mb-[30px] text-[16px] text-[#9c9c9c]">Seunghyeon Oh</p>
                </div>
              )}

              <div className="flex items-center w-fit gap-x-[5px] md:gap-x-[10px] mb-[12px] md:mb-[15px] cursor-default">
                <RiGlobalLine size={30} />
                <div className="flex flex-col gap-y-[4px]">
                  <p className="text-[14px] md:text-[16px]">대한민국</p>
                  <p className="text-[10px] md:text-[12px] text-[#9c9c9c]">Republic of Korea</p>
                </div>
              </div>

              <div
                onClick={handleOpenMap}
                className="flex items-center w-fit gap-x-[5px] md:gap-x-[10px] mb-[12px] md:mb-[15px] cursor-pointer"
              >
                <IoLocationSharp size={30} />
                <div className="flex flex-col gap-y-[4px]">
                  <p className="text-[14px] md:text-[16px]">서울특별시 성동구</p>
                  <p className="text-[10px] md:text-[12px] text-[#9c9c9c]">Seongdong-gu, Seoul</p>
                </div>
              </div>

              <div className="flex items-center w-fit gap-x-[5px] md:gap-x-[10px] mb-[12px] md:mb-[15px] cursor-default">
                <LuCalendarDays size={30} />
                <p className="text-[14px] md:text-[16px]">1996. 03. 21</p>
              </div>

              <a
                title="이메일"
                href="mailto:seunghyeon9696@gmail.com"
                className="flex items-center w-fit gap-x-[5px] md:gap-x-[10px] mb-[12px] md:mb-[15px]"
              >
                <IoMail size={30} />
                <p className="text-[14px] md:text-[16px]">osh4761@hanmail.net</p>
              </a>

              <a
                title="전화번호"
                href="sms:+8210-2291-4761"
                className="flex items-center w-fit gap-x-[5px] md:gap-x-[10px] mb-[12px] md:mb-[15px]"
              >
                <MdOutlinePhoneIphone size={30} />
                <p className="text-[14px] md:text-[16px]">(+82)-10-2291-4761</p>
              </a>

              <a
                title="경력기술서"
                download
                href="/files/오승현_경력기술서.pdf"
                className="group flex items-center w-fit gap-x-[5px] md:gap-x-[10px]"
              >
                <RiFileDownloadFill size={30} />
                <p className="text-[14px] md:text-[16px]">경력기술서</p>
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 w-full h-full p-[30px] gap-x-[40px] bg-[#F5F3F0] rounded-xl z-[1]">
          <div className="flex flex-col">
            <p className="mb-[15px] lg:mb-[20px] text-[40px] xl:text-[50px] font-bold leading-[1]">
              ABOUT .
            </p>
            <p className="mb-[20px] lg:mb-[40px] text-[14px] md:text-[16px]">
              늘 새로운 것을 탐구하고 받아들일 준비가 되어있는 프론트엔드 개발자 오승현입니다.
              빠르게 변화하는 기술 환경 속에서 사용자들이 쾌적하고 효율적인 웹/앱 애플리케이션을
              경험할 수 있도록 만드는 것이 저의 목표입니다.
            </p>

            <p className="mb-[10px] md:mb-[15px] lg:mb-[20px] text-[30px] xl:text-[36px] font-bold leading-[1]">
              Experience
            </p>
            <p className="mb-[5px] text-[18px] lg:text-[20px] font-bold">리얼디비전(로디언즈)</p>
            <p className="text-[14px] md:text-[16px] leading-[1]">웹 / 앱 개발</p>
            <p className="mb-[20px] lg:mb-[30px] text-[14px] md:text-[16px] text-[#9c9c9c]">
              2023. 11. 1 ~ 2024. 08. 31
            </p>

            <p className="mb-[10px] md:mb-[15px] lg:mb-[20px] text-[30px] xl:text-[36px] font-bold leading-[1]">
              Education
            </p>
            <p className="mb-[5px] text-[18px] lg:text-[20px] font-bold">세종대학교</p>
            <p className="text-[14px] md:text-[16px] leading-[1]">나노신소재공학과 (3.52 / 4.5)</p>
            <p className="mb-[5px] text-[14px] md:text-[16px] text-[#9c9c9c]">
              2015. 03 ~ 2022. 02
            </p>

            <p className="text-[18px] lg:text-[20px] font-bold">서울현대고등학교</p>
            <p className="mb-[20px] lg:mb-0 xl:mb-0 text-[14px] md:text-[16px] text-[#9c9c9c]">
              2012. 03 ~ 2015. 02
            </p>
          </div>

          <div className="flex flex-col">
            <p className="mb-[10px] md:mb-[15px] lg:mb-[20px] text-[30px] xl:text-[36px] font-bold leading-[1]">
              Strengths
            </p>
            <p className="text-[18px] lg:text-[20px] font-bold">- Adaptability</p>
            <p className="mb-[10px] text-[14px] md:text-[16px]">
              새로운 환경속에서도 빠르게 적응하는 개발자입니다. 이전 회사에서도 입사한 후 빠르게
              팀과 녹아들고 업무를 파악하여 비교적 빠르게 실무에 투입된 경험이 있습니다.
            </p>

            <p className="text-[18px] lg:text-[20px] font-bold">- Cooperation</p>
            <p className="mb-[10px] text-[14px] md:text-[16px]">
              함께 일하는 사람들과 늘 원만하고 좋은관계를 유지했고, 또 그럴 수 있도록 늘 노력하는
              개발자입니다. 개발팀 팀원들 뿐만 아니라, 함께 협업하는 기획팀, 디자인팀 그리고
              인프라팀과도 좋은 관계를 유지했으며, 그 외 업무와 관련이 없는 타 부서와의 관계에서도
              늘 좋은 인상을 주려고 노력했습니다.
            </p>

            <p className="text-[18px] lg:text-[20px] font-bold">- Fast Learner</p>
            <p className="mb-[20px] lg:mb-[30px] text-[14px] md:text-[16px]">
              어떤 기술이든 빠르게 습득할 수 있는 개발자입니다. 이전 개발팀에서 사용하던 기술스택이
              대부분 처음 사용하는 기술들이였음에도 빠른 속도로 해당 기술들을 실무에서 사용 가능한
              수준으로 학습했습니다. 또한, 앱 개발도 처음하는 경험에도 불구하고 굉장히 빠르게
              익숙해져 프로젝트에 투입되었습니다.
            </p>

            <p className="mb-[15px] lg:mb-[20px] text-[30px] xl:text-[36px] font-bold leading-[1]">
              Interests
            </p>

            <div className="flex flex-wrap gap-[15px] mb-[10px]">
              {interests.map((value, index) => (
                <div
                  key={`interest_${index}`}
                  className="relative group flex justify-center items-center rounded-full size-[50px] cursor-pointer"
                  style={{ backgroundColor: value.color ?? "#e6e6e6" }}
                >
                  {value.icon()}
                  <div className="absolute bottom-[-22px] bg-white border-[1px] font-bold border-black rounded-full px-[10px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[10px] duration-500 z-[1]">
                    {value.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
