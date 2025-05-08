"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import BeatLoader from "react-spinners/BeatLoader";

import { isValidEmail } from "@/utils/valid";
import { mapModalState } from "@/recoil/atoms";
import { IoIosMail } from "react-icons/io";
import { HiMiniMapPin } from "react-icons/hi2";
import { SiNotion } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";

const ParticlesBackground = React.memo(() => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  ParticlesBackground.displayName = "ParticlesBackground";

  return (
    <Particles
      id="tsparticlesDiv3"
      className="absolute top-0 left-0 w-full h-full"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          links: { color: "#ffffff", distance: 100, enable: true, opacity: 0.2, width: 1 },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 600 }, value: 120 },
          opacity: { anim: { enable: true, speed: 1, opacity_min: 0.05 } },
          size: { value: 1 },
        },
        detectRetina: true,
      }}
    />
  );
});

export default function ContactSection() {
  const setMapModal = useSetRecoilState(mapModalState);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contactEmail, setContactEmail] = useState({
    email: "",
    content: "",
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContactEmail((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const handleSubmit = async () => {
    if (!contactEmail.email.trim().length) {
      return alert("이메일을 입력해주세요.");
    }
    if (!isValidEmail(contactEmail.email)) {
      return alert("올바른 이메일 형식이 아닙니다.");
    }
    if (contactEmail.content.length < 10) {
      return alert("보내실 메세지 내용은 10자 이상 작성해주세요.");
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactEmail),
      });

      const post = await response.json();

      if (post.status === 200) {
        setContactEmail({ content: "", email: "" });
        alert("메일이 전송됐습니다.");
      } else {
        alert(post.message);
      }
    } catch (error) {
      alert("메일 전송 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenMap = () => {
    setMapModal({
      show: true,
    });
  };

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
      className="relative flex flex-col justify-center items-center w-screen min-h-[100svh] px-[40px] md:px-[80px] py-[120px] bg-[#000000]"
    >
      <ParticlesBackground />

      <div className="flex flex-col sm:flex-row w-full max-w-[1000px] h-full sm:max-h-[600px] bg-[#F5F3F0] bg-opacity-20 backdrop-blur-sm rounded-xl border-[1px] border-[#fff]/30">
        <div className="flex flex-col flex-1 p-[30px] gap-y-[15px]">
          <h2 className="mb-[20px] text-[30px] sm:text-[40px] text-white leading-[1]">CONTACT</h2>

          <input
            value={contactEmail.email}
            onChange={handleChange("email")}
            type="email"
            placeholder="Email"
            className="w-full h-[60px] p-[20px] text-[14px] sm:text-[18px] text-white bg-black bg-opacity-60 backdrop-blur-sm focus:bg-opacity-80 duration-300 outline-none rounded-lg "
          />
          <textarea
            value={contactEmail.content}
            onChange={handleChange("content")}
            className="lg:flex-1 w-full min-h-[300px] h-full px-[20px] py-[15px] mb-[15px] text-[14px] sm:text-[18px] text-white  bg-black bg-opacity-60 backdrop-blur-sm focus:bg-opacity-80 duration-300 rounded-lg outline-none resize-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/15 scrollbar-thumb-rounded-full"
            placeholder="Leave your message..."
          />

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`flex justify-center items-center w-full h-[60px] p-[10px] text-[14px] sm:text-[20px] text-white rounded-lg duration-300 ${
              isLoading
                ? "bg-[#1ca55570] cursor-default"
                : "bg-[#1ca555] hover:bg-[#23CE6B] cursor-pointer"
            }`}
          >
            {isLoading ? (
              <BeatLoader size={10} margin={5} color="#fff" speedMultiplier={0.75} />
            ) : (
              <p>SUBMIT</p>
            )}
          </button>
        </div>

        <div className="sm:flex grid grid-cols-3 sm:flex-col justify-around sm:justify-center items-center w-full sm:w-auto h-auto px-0 sm:px-[20px] py-[20px] sm:py-0 gap-y-[20px] bg-black bg-opacity-20 backdrop-blur-sm rounded-r-none sm:rounded-r-xl round-b-xl sm:rounded-b-none">
          <div className="group relative flex justify-center">
            <a
              title="이메일"
              href="mailto:seunghyeon9696@gmail.com"
              className="group flex justify-center items-center w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] text-white bg-[#363636] group-hover:bg-[#1ca555] rounded-lg duration-500 z-[1]"
            >
              <IoIosMail className="size-[36px] sm:size-[50px]" />
            </a>

            <div className="absolute bottom-[-30px] group-hover:bottom-[-40px] px-[10px] py-[5px] bg-white text-[14px] font-bold rounded-lg opacity-0 group-hover:opacity-100 duration-500 whitespace-nowrap z-[2] ">
              seunghyeon9696@gmail.com
            </div>
          </div>

          <div className="group relative flex justify-center">
            <a
              title="전화번호"
              href="sms:+8210-2291-4761"
              className="group flex justify-center items-center w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] text-white bg-[#363636] group-hover:bg-[#1ca555] rounded-lg duration-500 z-[1]"
            >
              <MdOutlinePhoneIphone className="size-[36px] sm:size-[50px]" />
            </a>
            <div className="absolute bottom-[-30px] group-hover:bottom-[-40px] px-[10px] py-[5px] bg-white text-[14px] font-bold rounded-lg opacity-0 group-hover:opacity-100 duration-500 whitespace-nowrap z-[2]">
              (+82)-10-2291-4761
            </div>
          </div>

          <div className="group relative flex justify-center">
            <div
              onClick={handleOpenMap}
              className="group flex justify-center items-center w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] text-white bg-[#363636] group-hover:bg-[#1ca555] rounded-lg duration-500 cursor-pointer z-[1]"
            >
              <HiMiniMapPin className="size-[36px] sm:size-[50px]" />
            </div>
            <div className="absolute bottom-[-30px] group-hover:bottom-[-40px] px-[10px] py-[5px] bg-white text-[14px] font-bold rounded-lg opacity-0 group-hover:opacity-100 duration-500 whitespace-nowrap z-[2]">
              Seongdong-gu, Seoul
            </div>
          </div>

          <div className="group relative flex justify-center">
            <a
              title="깃허브"
              href="https://github.com/puncharrow5"
              target="_blank"
              className="group flex justify-center items-center w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] text-white bg-[#363636] group-hover:bg-[#1ca555] rounded-lg duration-500 z-[1]"
            >
              <FaGithub className="size-[30px] sm:size-[45px]" />
            </a>
            <div className="absolute bottom-[-30px] group-hover:bottom-[-40px] px-[10px] py-[5px] bg-white text-[14px] font-bold rounded-lg opacity-0 group-hover:opacity-100 duration-500 whitespace-nowrap z-[2]">
              Github
            </div>
          </div>

          <div className="group relative flex justify-center">
            <a
              title="노션"
              href="https://geode-divan-811.notion.site/a44da1efdf5b47ea8fe12a8f85b216ad"
              target="_blank"
              className="group flex justify-center items-center w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] text-white bg-[#363636] group-hover:bg-[#1ca555] rounded-lg duration-500 z-[1]"
            >
              <SiNotion className="size-[30px] sm:size-[45px]" />
            </a>
            <div className="absolute bottom-[-30px] group-hover:bottom-[-40px] px-[10px] py-[5px] bg-white text-[14px] font-bold rounded-lg opacity-0 group-hover:opacity-100 duration-500 whitespace-nowrap z-[2]">
              Notion
            </div>
          </div>

          <div className="group relative flex justify-center">
            <a
              title="링크드인"
              href="https://www.linkedin.com/in/oh-seunghyeon-352708307"
              target="_blank"
              className="group flex justify-center items-center w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] text-white bg-[#363636] group-hover:bg-[#1ca555] rounded-lg duration-500 z-[1]"
            >
              <FaLinkedin className="size-[30px] sm:size-[45px]" />
            </a>
            <div className="absolute bottom-[-30px] group-hover:bottom-[-40px] px-[10px] py-[5px] bg-white text-[14px] font-bold rounded-lg opacity-0 group-hover:opacity-100 duration-500 whitespace-nowrap z-[2]">
              LinkedIn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
