import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Back() {
  return (
    <div className="flex items-center p-2.5 gap-2 cursor-pointer">
      <Image height={20} width={20} src="/icons/back.svg" alt="Back" />
      <p className="font-medium text-[1rem] leading-[21px] font-[Prompt] text-[#c1cef1]">
        <Link href="/">Back</Link>
      </p>
    </div>
  );
}
