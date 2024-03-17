import React from "react";

export default function KeyFeatures() {
  return (
    <div className="flex-grow mt-6 pl-[60px] p-[50px] rounded-[30px] key-features">
      <h1 className=" text-[30px] leading-[46px] font-[Mulish] font-bold text-[#050518]">
        Key Features
      </h1>
      <div className="grid grid-cols-2 gap-[12px] mt-[30px]">
        <div className="py-[26px] px-[24px] rounded-[30px] bg-white">
          <h3 className="text-[20px] font-medium leading-[37px] text-[#212137]">
            Artificial Intelligence that stabilizes protocol’s mechanisms.
          </h3>
        </div>
        <div className="py-[26px] px-[24px] rounded-[30px] bg-white">
          <h3 className="text-[20px] font-medium leading-[37px] text-[#212137]">
            Research-driven design, which was simulated using stochastic and
            quantitative methods.
          </h3>
        </div>
        <div className="py-[26px] px-[24px] rounded-[30px] bg-white">
          <h3 className="text-[20px] font-medium leading-[37px] text-[#212137]">
            Risk-weighted reserve backing.
          </h3>
        </div>
        <div className="py-[26px] px-[24px] rounded-[30px] bg-white">
          <h3 className="text-[20px] font-medium leading-[37px] text-[#212137]">
            Algorithmic stabilization mechanisms with Capital Adequacy Ratio as
            Cogito’s foundation.
          </h3>
        </div>
      </div>
    </div>
  );
}
