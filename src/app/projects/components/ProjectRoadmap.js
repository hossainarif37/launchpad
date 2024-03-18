import Image from "next/image";
import React from "react";

export default function ProjectRoadmap() {
  return (
    <div className="flex-grow mt-6 rounded-[30px] bg-[#18182b]">
      <div className="flex p-[50px] justify-between">
        <h1 className=" text-[30px] leading-[46px] font-[Mulish] font-bold ">
          Project Roadmap
        </h1>

        <div className="flex gap-x-2">
          <div className="w-12 h-12  flex justify-center items-center  rounded-full border border-[#333]">
            <img src="/icons/leftArrow.svg" />
          </div>
          <div className="w-12 h-12  flex justify-center items-center rounded-full border border-[#333]">
            <img src="/icons/rightArrow.svg" />
          </div>
        </div>
      </div>

      <div className="flex  px-10">
        <div className="border-t-[2px] border-t-[#4d4d5f]">
          <div className="relative">
            <div className="relative -top-[34px] left-0">
              <img height="80px" width="90px" src="/roadmap-check.svg" />
            </div>
            <div className="ml-7 relative -top-10">
              <div>
                <h1 className="font-medium text-[24px] leading-[31px]">2023 H2</h1>
                <div className="ml-5 text-sm">
                  <ul className="list-disc  space-y-1 mt-1">
                    <li>GCOIN (Cogito’s 1st-generation decentralized stablecoin) launch</li>
                    <li>GCOIN staking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[2px] border-t-[#4d4d5f]">
          <div className="relative">
            <div className="relative -top-[34px] left-0">
              <img height="80px" width="90px" src="/roadmap-check.svg" />
            </div>
            <div className="ml-7 relative -top-10">
              <div className="">
                <h1 className="font-medium text-[24px] leading-[31px]">2023 H2</h1>
                <div className="ml-5 text-sm">
                  <ul className="list-disc space-y-1 mt-1">
                    <li>GCOIN (Cogito’s 1st-generation decentralized stablecoin) launch</li>
                    <li>GCOIN staking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[2px] border-t-[#4d4d5f]">
          <div className="relative">
            <div className="relative -top-[34px] left-0">
              <img height="80px" width="90px" src="/roadmap-check.svg" />
            </div>
            <div className="ml-7 relative -top-10">
              <div>
                <h1 className="font-medium text-[24px] leading-[31px]">2023 H2</h1>
                <div className="ml-5 text-sm">
                  <ul className="list-disc space-y-1 mt-1">
                    <li>GCOIN (Cogito’s 1st-generation decentralized stablecoin) launch</li>
                    <li>GCOIN staking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
