import { footerLinks, socialMediaLinks } from "@/_data/menu";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className=" ">
      <div className="theme-container px-6 pt-16 border-t border-t-[#293150]">
        <div className="flex justify-between">
          {/* Section 1 */}
          <div>
            <div className="logo">
              <Image src="/logo.svg" height={31} width={133} alt="Lunchpad" />
            </div>
            <p className="mt-6 text-[14px] text-[#c1cef1b3]">
              Assisting early-stage startups attain
            </p>
            <p className="mt-2 text-[14px] text-[#c1cef1b3]">
              speed, scale and edge.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex gap-4">
            {socialMediaLinks.map((social, index) => (
              <div
                className="flex justify-center items-center h-[34px] w-[34px] border-[2px] border-[#4c54f5] rounded-md"
                key={index}
              >
                <img src={`/icons/${social.iconSrc}`} />
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <div className="flex flex-col">
            <div className="flex max-w-[420px] flex-wrap justify-end gap-[25px]">
              {footerLinks.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="flex gap-1 whitespace-nowrap text-[#fd4f6e] font-medium">
                  {item.title}{" "}
                  {item.href && (
                    <Image
                      height={24}
                      width={24}
                      src="/icons/arrow-right-up.svg"
                      alt="Arrow"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className=" mt-2 flex max-w-[520px] flex-wrap justify-end gap-[25px]">
              {footerLinks.slice(3, 6).map((item, index) => (
                <div
                  key={index}
                  className="flex gap-1 whitespace-nowrap text-[#fd4f6e] font-medium">
                  {item.title}{" "}
                  {item.href && (
                    <Image
                      height={24}
                      width={24}
                      src="/icons/arrow-right-up.svg"
                      alt="Arrow"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Section 4 */}
        <div className="flex justify-between items-center mt-[55px] mb-[30px]">
          <p className=" text-[14px] leading-[24px] text-[#c1cef180] max-w-[325px]">
            Using Smart Contracts, Tokens, and Crypto is always a risk. DYOR
            before investing.
          </p>
          <p className="text-[14px] leading-[24px] text-[#c1cef180] max-w-[325px]">
            © 2022 Genius X - all rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
