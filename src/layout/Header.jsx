import { menu } from "@/_data/menu";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className=" border-b border-b-[#293150] ">
      <div className="flex justify-between items-center px-6 py-4 theme-container ">
        <div className="flex items-center">
          <div className="logo">
            <Image src="/logo.svg" height={31} width={133} alt="Lunchpad" />
          </div>
          <div className="flex ml-20 mr-10">
            {menu.map((item, index) => (
              <div className="py-1.5 px-4 cursor-pointer font-medium font-[Prompt] hover:bg-white hover:bg-opacity-10">
                <Link href={item.href}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
        <PrimaryButton>Connect Wallet</PrimaryButton>
      </div>
    </div>
  );
}
