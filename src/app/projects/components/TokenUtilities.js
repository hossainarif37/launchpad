import React from 'react'

export default function TokenUtilities() {
  return (
    <div className="mt-6 flex-grow pl-[60px] pt-[23px] pr-[60px] pb-[50px] rounded-[30px] bg-[#18182b]">
      <h1 className="mt-10 text-[30px] leading-[46px] font-[Mulish] font-bold">
        Token Utilities
      </h1>

      <div
        style={{ backgroundImage: "url(/tokenUtilities.png)" }}
        className="flex flex-col gap-[30px] mt-8 p-[50px] bg-[#212137] rounded-[30px] bg-center"
      >
        <div className="flex gap-6">
          <img height={20} width={20} src="/icons/red-star.svg" alt="" />
          <p className="text-[17px] leading-[31px] font-[Prompt]">
            Index Management - adjusting components and weights of indices
          </p>
        </div>
        <div className="flex gap-6">
          <img height={20} width={20} src="/icons/red-star.svg" alt="" />
          <p className="text-[17px] leading-[31px] font-[Prompt]">
            Treasury management - regulating the allocation of assets to
            different investment portfolios
          </p>
        </div>
        <div className="flex gap-6">
          <img height={20} width={20} src="/icons/red-star.svg" alt="" />
          <p className="text-[17px] leading-[31px] font-[Prompt]">
            Changing the minting and redemption policy for tracercoins
          </p>
        </div>
        <div className="flex gap-6">
          <img height={20} width={20} src="/icons/red-star.svg" alt="" />
          <p className="text-[17px] leading-[31px] font-[Prompt]">
            Voting on launching new tracercoins
          </p>
        </div>
        <div className="flex gap-6">
          <img height={20} width={20} src="/icons/red-star.svg" alt="" />
          <p className="text-[17px] leading-[31px] font-[Prompt]">
            Impacting CGV’s buyback-and-burn mechanisms
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-10">
        <div className="p-[30px]">
          <p className="text-[17px] leading-[31px] text-[#7787b1] font-[Prompt]">
            Vesting period:
          </p>
          <h2 className="text-[24px] leading-[31px] font-[Prompt]">
            15% at TGE and then 18 months linear vesting
          </h2>
        </div>
        <div className="p-[30px]">
          <p className="text-[17px] leading-[31px] text-[#7787b1] font-[Prompt]">
            Lock-up period:
          </p>
          <h2 className="text-[24px] leading-[31px] font-[Prompt]">
            3 months cliff, 18 months linear vesting
          </h2>
        </div>
        <div className="p-[30px]">
          <p className="text-[17px] leading-[31px] text-[#7787b1] font-[Prompt]">
            Public sale token supply:
          </p>
          <h2 className="text-[24px] leading-[31px] font-[Prompt]">
            6,250,000 CGV
          </h2>
          <p className="text-[12px] text-[#c1cef1]">
            0.625% of total token supply
          </p>
        </div>
        <div className="p-[30px]">
          <p className="text-[17px] leading-[31px] text-[#7787b1] font-[Prompt]">
            Token allocation per round:
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[14px] text-[#c1cef1]">Round 1:</p>
            <p className="text-[14px] leading-[25px]">6,250,000 CGV</p>
          </div>
        </div>
      </div>
    </div>
  );
}
