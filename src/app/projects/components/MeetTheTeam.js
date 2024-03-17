import Image from "next/image";
import React from "react";

export default function MeetTheTeam() {
  return (
    <div className="flex-grow mt-6 pl-[60px] p-[50px] rounded-[30px] bg-[#18182b]">
      <h1 className=" text-[30px] leading-[46px] font-[Mulish] font-bold ">
        Meet the Team
      </h1>

      <div className="mt-[48px]">
        <div className="grid grid-cols-3 gap-[30px]">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </div>
  );
}

export function TeamCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[143px] w-[143px] rounded-full overflow-hidden">
        <Image src="/Cloris-Chen.jpg" height={143} width={143} alt="Image" />
      </div>
      <h2 className="mt-[30px] text-[20px] leading-[37px] font-medium text-center">
        Cloris Chen
      </h2>
      <p className="text-[14px] leading-[25px] font-[300] text-[#c1cef1b3] text-center">
        CEO
      </p>

      <div className="flex justify-center items-center">
        <div className="flex gap-2 mt-4">
          <button>
            <div className="flex justify-center items-center h-[27px] w-[27px] border-[2px] border-[#4c54f5] rounded-[8px]">
              <Image
                src="/icons/Discord.svg"
                height={15}
                width={15}
                alt="icon"
              />
            </div>
          </button>
          <button>
            <div className="flex justify-center items-center h-[27px] w-[27px] border-[2px] border-[#4c54f5] rounded-[8px]">
              <Image
                src="/icons/Telegram.svg"
                height={15}
                width={15}
                alt="icon"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
