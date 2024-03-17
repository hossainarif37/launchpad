import PrimaryButton from '@/components/ui/PrimaryButton';
import React from 'react'

export default function Sticky() {
  return (
    <div
      className=" min-w-[434px] w-[434px] pt-[90px] px-[30px] pb-[70px] rounded-[30px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/sticky-bg.png)" }}
    >
      <h1 className="text-[44px] leading-[52px] font-[900] font-[Mulish] text-center">
        Get started by connecting a wallet
      </h1>
      <p className="mt-[30px] text-center font-[300px] text-[14px] leading-[25px]">
        Connect your wallet to buy tokens of Cogito Protocol and other projects
      </p>
      <div className="mt-[42px] flex justify-center">
        <PrimaryButton>Connect Wallet</PrimaryButton>
      </div>
    </div>
  );
}
