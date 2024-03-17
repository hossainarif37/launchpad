import Image from 'next/image';
import React from 'react'

export default function MainCard() {
  return (
    <div className="flex-grow pl-[60px] pt-[23px] pr-[60px] pb-[50px] rounded-[30px] bg-[#18182b]">
      <div className="flex gap-[65px]">
        {/* Left */}
        <div className=" flex flex-col items-center pt-8">
          <div className="rounded-2xl overflow-hidden">
            <Image src="/CGV.png" height={150} width={150} alt="Logo" />
          </div>

          {/* Social */}
          <div className="flex items-center gap-6 mt-6">
            <Image
              src="/icons/Discord-white.svg"
              height={20}
              width={20}
              alt="icon"
            />
            <Image
              src="/icons/Twitter-white.svg"
              height={20}
              width={20}
              alt="icon"
            />
            <Image
              src="/icons/Telegram-white.svg"
              height={20}
              width={20}
              alt="icon"
            />
          </div>

          {/* Short info */}
          <div className="pt-4 pr-[30px] pb-[27px] pl-[27px] rounded-[30px] bg-[#212137] mt-6">
            <h4 className="text-center text-[17px] leading-[31px] font-[Prompt]">
              Round 1
            </h4>

            <p className="mt-3 text-[14px] leading-[23px] text-[#7787b1] text-center">
              Ended:
            </p>
            <h5 className="mt-2 text-[1rem] whitespace-nowrap font-medium leading-[21px] text-[#c1cef1]">
              May 30, 2023
            </h5>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <div className="">
            <div className="flex items-center">
              <div className="flex items-center gap-0.5 bg-[#32405a] px-3 rounded-full">
                <img src="/icons/circle.svg" alt="" />
                <p className="text-[14px] leading-[23px] text-[#c1cef1] p-1.5">
                  Closed
                </p>
              </div>
              <p className="ml-[20px] text-[14px] leading-[23px] font-[Prompt]">
                Round 1 of 1
              </p>
            </div>
            <h1 className="mt-6 text-[36px] leading-[44px]  font-[800]">
              Cogito Protocol
            </h1>
            <p className="mt-6 font-[300] text-[14px] leading-[25px] text-[#c1cef1b3] max-w-[450px]">
              Cogito Protocol offers a "stablecoin-as-as-service" framework that
              allows for the creation of AI-driven assets known as
              "tracercoins". Powered by SingularityNET.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="">
                <p className="text-[14px] leading-[25px]  font-[300] text-[#c1cef1b3]">
                  Token allocation:
                </p>
                <h6 className="text-[17px] leading-[15px] mt-1">6,250,000</h6>
              </div>
              <div className="">
                <p className="text-[14px] leading-[25px]  font-[300] text-[#c1cef1b3]">
                  Distribution method:
                </p>
                <h6 className="text-[17px] leading-[15px] mt-1">AIRDROP</h6>
              </div>
              <div className="">
                <p className="text-[14px] leading-[25px]  font-[300] text-[#c1cef1b3]">
                  Vesting period:
                </p>
                <h6 className="text-[17px] leading-[15px] mt-1">
                  15% at TGE and then 18 months linear vesting
                </h6>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="">
                <p className="text-[14px] leading-[25px]  font-[300] text-[#c1cef1b3]">
                  Token Name:
                </p>
                <h6 className="text-[17px] leading-[15px] mt-1">CGV</h6>
              </div>
              <div className="">
                <p className="text-[14px] leading-[25px]  font-[300] text-[#c1cef1b3]">
                  Funding method:
                </p>
                <h6 className="text-[17px] leading-[15px] mt-1">Tokens</h6>
              </div>
              <div className="">
                <p className="text-[14px] leading-[25px]  font-[300] text-[#c1cef1b3]">
                  Lock-up period:
                </p>
                <h6 className="text-[17px] leading-[15px] mt-1">
                  3 months cliff, 18 months linear vesting
                </h6>
              </div>
            </div>

            <div className="mt-14 flex justify-center">
              <div className="flex gap-4">
                <button>
                  <div className="flex px-[21px] py-[15px] gap-[15px] bg-[#4c54f5] rounded-[12px]">
                    <img src="/icons/Link.svg" alt="" />
                    <p className="font-medium text-[14px]">Website</p>
                  </div>
                </button>
                <button>
                  <div className="flex px-[21px] py-[15px] gap-[15px] bg-[#212137] rounded-[12px]">
                    <img src="/icons/Link.svg" alt="" />
                    <p className="font-medium text-[14px]">White Paper</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
