"use client";

import { useRef } from "react";
import { useRecoilState } from "recoil";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { mapModalState } from "@/recoil/atoms";
import { IoCloseSharp } from "react-icons/io5";
import KakaoMap from "../KakaoMap";

export default function MapModal() {
  const [modal, setModal] = useRecoilState(mapModalState);

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
    setModal({ show: false });
  };

  const handlePreventEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      ref={containerRef}
      onClick={handleCloseModal}
      className={`fixed flex flex-col justify-center items-center w-screen h-[100svh] px-[60px] md:px-[120px] py-[20px] md:py-[80px] bg-black/50 duration-[750ms] cursor-pointer ${
        modal.show ? `opacity-100 z-[99]` : `opacity-0 z-[-1]`
      }`}
    >
      <div
        onClick={handlePreventEvent}
        className="modal relative flex w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-xl cursor-default"
      >
        <div
          onClick={handleCloseModal}
          className="absolute flex justify-center items-center top-[15px] right-[15px] size-[40px] md:size-[50px] bg-[#373737] hover:bg-[#444444] duration-300 rounded-full z-[1] cursor-pointer"
        >
          <IoCloseSharp className="size-[30px] text-white" />
        </div>

        <div className="w-full h-ful rounded-lg overflow-hidden z-[0]">
          <KakaoMap />
        </div>
      </div>
    </div>
  );
}
