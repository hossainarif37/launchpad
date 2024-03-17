import Image from "next/image";
import React from "react";

export default function ProjectRoadmap() {
  return (
    <div className="flex-grow mt-6 rounded-[30px] bg-[#18182b]">
      <div className="flex p-[50px]">
        <h1 className=" text-[30px] leading-[46px] font-[Mulish] font-bold ">
          Project Roadmap
        </h1>
      </div>

      <div className="border-t-[2px] border-t-[#4d4d5f]">
        <div className="relative">
          <div className="relative -top-[34px] left-0">
            <img height="80px" width="90px" src="/roadmap-check.svg" />
          </div>
          <div className="ml-7 relative -top-10">
            <h1 className="font-medium text-[24px] leading-[31px]">2023 H2</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
