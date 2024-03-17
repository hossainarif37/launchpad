import PrimaryButton from "@/components/ui/PrimaryButton";
import React from "react";

export default function Hero() {
  return (
    <div className="pt-12 pb-[96px]">
      <div className="theme-container px-6">
        <div
          style={{ backgroundImage: "url(/mainBanner.png)" }}
          className=" relative  px-[60px] py-[90px] bg-cover rounded-[60px] bg-right-bottom"
        >
          <div className="flex justify-between">
            <div className="">
              <h1 className="max-w-[550px] text-[60px] leading-[75px]">
                Connect your wallet and start exploring
              </h1>
              <div className="mt-[75px]">
                <PrimaryButton>Connect Wallet</PrimaryButton>
              </div>
            </div>
            <img className="absolute right-28 -bottom-8" src="/rocket.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
