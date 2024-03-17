import Image from "next/image";
import React from "react";

export default function Community() {
  return (
    <div className="flex-grow mt-20 pl-[60px] p-[50px] rounded-[30px] bg-[#18182b]">
      <h1 className=" text-[30px] leading-[46px] font-[Mulish] font-bold ">
        Community
      </h1>

      <div className="mt-[30px]">
        <button className="p-3">
          <div className="w-[146px] bg-[#464655] rounded-[12px] flex flex-col items-center py-4">
            <Image
              height={22}
              width={22}
              src="/icons/Twitter-white.svg"
              alt=""
            />
            <p className="leading-[1.5] mt-2">Twitter</p>
          </div>
        </button>
        <button className="p-3">
          <div className="w-[146px] bg-[#464655] rounded-[12px] flex flex-col items-center py-4">
            <Image
              height={22}
              width={22}
              src="/icons/Discord-white.svg"
              alt=""
            />
            <p className="leading-[1.5] mt-2">Twitter</p>
          </div>
        </button>
        <button className="p-3">
          <div className="w-[146px] bg-[#464655] rounded-[12px] flex flex-col items-center py-4">
            <Image
              height={22}
              width={22}
              src="/icons/Telegram-white.svg"
              alt=""
            />
            <p className="leading-[1.5] mt-2">Twitter</p>
          </div>
        </button>
      </div>
    </div>
  );
}
