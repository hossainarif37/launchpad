import React from "react";

export default function ProjectDetails() {
  return (
    <div className="mt-6 flex-grow pl-[60px] pt-[23px] pr-[60px] pb-[50px] rounded-[30px] bg-[#18182b]">
      <h1 className="mt-10 text-[30px] leading-[46px] font-[Mulish] font-bold">
        Project Details
      </h1>
      <p className="mt-[65px] font-[300] text-[14px] leading-[25px] text-[#c1cef1b3]">
        The majority of stablecoins are centralized and pegged to fiat with
        ability to adapt to market dynamics, which makes them vulnerable to
        increased regulatory risk, inflation, and a single point of failure.
      </p>
      <p className="mt-[25px] font-[300] text-[14px] leading-[25px] text-[#c1cef1b3]">
        Cogito Protocol offers GCOIN, a decentralized stablecoin that pegs its
        value to the green index, which tracks positive progress towards a green
        economy. GCOIN presents a slow and steady appreciation while avoiding
        the vulnerabilities associated with centralized stablecoins. Cogito
        leverages artificial intelligence / machine learning
      </p>
    </div>
  );
}
