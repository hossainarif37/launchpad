"use client";

import React, { useState } from "react";

export default function Projects() {
  const [activeItem, setActiveItem] = useState("All");

  const items = ["All", "Upcoming", "Closed", "Active"];
  return (
    <div className="theme-container px-6">
      {/* Top Section */}
      <div className="flex justify-between items-end">
        <div className="">
          <h1 className="text-[47px] font-semibold font-[Prompt] py-1">
            Projects
          </h1>
          <p className="text-[14px] font-[300] leading-[25px] text-[#c1cef1b3] mt-2">
            Browse public sales of promising Cardano projects
          </p>
        </div>

        <div className="flex items-center">
          {items.map((item, index) => (
            <button
              onClick={() => setActiveItem(item)}
              className={`font-semibold text-[15px] leading-[44px] font-[Prompt] px-[17px] ${
                activeItem === item
                  ? " rounded-[12px] bg-[#4c54f5]"
                  : "text-[#c1cef1b3] cursor-pointer hover:bg-[#FFFFFF14]"
              } `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mt-12 grid grid-cols-3 gap-6 mb-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export function ProjectCard() {
  return (
    <div className="bg-[#18182b] pt-[33px] px-10 pb-5 rounded-[30px]">
      <div className="flex items-center">
        <img src="/GENSX.png" height="78px" width="78px" alt="" />
        <div className="ml-6">
          <h2 className="text-[24px] leading-[31px] font-medium">Genius X</h2>
          <div className="ml-0.5 flex">
            <img height="14px" width="14px" src="/icons/circle.svg" alt="" />
            <p className="px-3 text-[12px] whitespace-nowrap ">Closed</p>
          </div>
        </div>
      </div>
      <p className="pt-[34px] text-[14px] leading-[25px] text-[#c1cef1]">
        Genius X is the first and only tokenized, blockchain-agnostic business
        accelerator and curated launchpad for fully-vetted, early-stage
        blockchain startups. Genius X’s mission is to create a more
        decentralized and inclusive future built by the brightest minds
        utilizing blockchain technology.
      </p>
      <div className="mt-1 pt-6">
        <div className="flex justify-between">
          <p className="text-[14px] text-[#c1cef1] leading-[25px] font-[300]">
            Max raise:
          </p>
          <p className="text-[14px]  leading-[25px] font-[300]">
            622,222.08 ADA
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[14px] text-[#c1cef1] leading-[25px] font-[300]">
            Token allocation:
          </p>
          <p className="text-[14px]  leading-[25px] font-[300]">
            19,444,440 GENSX
          </p>
        </div>
      </div>

      <div className="mt-[29px] pt-4 px-[30px] pb-[27px] bg-[#212137] rounded-[30px]">
        <h3 className="text-[17px] leading-[31px]">Round 1</h3>
        <div className="mt-2.5">
          <p className="text-[14px] leading-[23px] text-[#7787b1]">Ended</p>
          <h4 className="mt-[7px] font-[300] text-[23px] text-[#c1cef1]">
            Jul 1, 2023
          </h4>
        </div>
      </div>

      <div className="flex justify-center mt-[34px]">
        <div className="flex items-center gap-3">
          <div className="h-[47px] w-[47px] flex items-center justify-center bg-[#212137] hover:bg-[#4c54f5] shadow-[#4c54f5 0px 0px 10px] rounded-full cursor-pointer">
            <img src="/icons/Discord-white.svg" alt="" />
          </div>
          <div className="h-[47px] w-[47px] flex items-center justify-center bg-[#212137] hover:bg-[#4c54f5] shadow-[#4c54f5 0px 0px 10px] rounded-full cursor-pointer">
            <img src="/icons/Twitter-white.svg" alt="" />
          </div>
          <div className="h-[47px] w-[47px] flex items-center justify-center bg-[#212137] hover:bg-[#4c54f5] shadow-[#4c54f5 0px 0px 10px] rounded-full cursor-pointer">
            <img src="/icons/Telegram-white.svg" alt="" />
          </div>
          <div className="h-[47px] w-[47px] flex items-center justify-center bg-[#212137] hover:bg-[#4c54f5] shadow-[#4c54f5 0px 0px 10px] rounded-full cursor-pointer">
            <img src="/icons/Link.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
