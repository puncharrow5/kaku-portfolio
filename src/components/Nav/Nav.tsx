"use client";

import { Dispatch, SetStateAction } from "react";

import { navItems } from "@/constants/navItem";

interface Props {
  isMobile: boolean;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function Nav({ isMobile, activeIndex, setActiveIndex }: Props) {
  const handleScroll = (id: number) => () => {
    setActiveIndex(id);
  };

  return (
    <>
      {!isMobile && (
        <div
          className={`fixed flex justify-center w-full h-[60px] md:h-[80px] bg-[#1d1d1d] bg-opacity-40 backdrop-blur-md border-b-[1px] border-[#fff]/10 duration-1000 z-10 ${
            activeIndex === 0 ? `top-0` : `top-[-140px]`
          }`}
        >
          {navItems.map((value) => (
            <div key={`navTop_${value.id}`} className="flex items-center">
              {value.id !== 0 && (
                <div className="w-[2px] h-[16px] mx-[10px] md:mx-[20px] bg-gray-500" />
              )}

              <div
                key={value.id}
                onClick={handleScroll(value.id)}
                className="group relative font-bold text-[14px] md:text-[20px] text-white cursor-pointer"
              >
                <p>{value.name}</p>
                <div className="absolute bottom-[-5px] w-0 h-[2px] bg-white rounded-full group-hover:w-full duration-500" />
              </div>
            </div>
          ))}
        </div>
      )}

      <div
        className={`fixed flex max-w-[90%] px-[10px] md:px-[20px] py-[5px] md:py-[10px] rounded-full bg-white shadow-xl duration-1000 z-10 ${
          activeIndex === 0 ? `bottom-[-100px]` : `bottom-[20px]`
        }`}
      >
        {navItems.map((value) => (
          <div key={`navBottom_${value.id}`} className="flex items-center">
            {value.id !== 0 && (
              <div className="w-[2px] h-[16px] mx-[5px] md:mx-[20px] bg-gray-500" />
            )}

            <div
              onClick={handleScroll(value.id)}
              className="group relative flex justify-center cursor-pointer"
            >
              <div
                className={`p-1 border-2 rounded-lg duration-500 ${
                  value.id === activeIndex ? `border-black` : `border-transparent`
                }`}
              >
                {isMobile ? value.mobileIcon() : value.icon()}
              </div>
              <div
                onClick={handleScroll(value.id)}
                className="absolute bottom-[30px] md:bottom-[40px] px-[10px] bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] duration-500"
              >
                {value.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
