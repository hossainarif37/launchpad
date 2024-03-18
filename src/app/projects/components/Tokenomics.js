"use client"

import React from 'react'
import TokenomicsChart from './TokenomicsChart';
import './tokenomicsChart.css'
import Image from 'next/image';
import TokenomicsList from './TokenomicsList';
import { data } from '@/_data/chartData';

export default function Tokenomics() {

    // Calculate the total sum of all values
    const total = data.reduce((sum, item) => sum + parseFloat(item.value.replace(/,/g, '')), 0);

    return (
        <div className="mt-6 flex-grow px-[55px] pt-[23px] pb-[50px] rounded-[30px] bg-[#18182b]">
            <div>
                <h1 className="mt-10 text-[30px] leading-[46px] font-[Mulish] font-bold">
                    Tokenomics
                </h1>
                <h4 className='mt-1 text-[17px] font-medium text-[#7787B1] font-[Prompt]'>Token Allocation:</h4>
            </div>

            {/* Tokenomics Chart */}
            <div className="chart-container mt-5">
                <div className='chart-content'>
                    <TokenomicsChart data={data} />
                </div>

                <div className="center-content flex flex-col items-center justify-center gap-y-5 ">
                    <Image src="/CGV.png" height={50} width={50} alt="Logo" className='rounded-full' />

                    <div className=''>
                        <p className='text-sm text-[#A6B1DE] font-semibold'>Total:</p>
                        <p>1,000,000,000 tokens</p>
                    </div>
                </div>
            </div>

            {/* Tokenomics List */}
            <ul className='grid grid-cols-2 gap-x-20 gap-y-2'>
                {
                    data?.map(item => <TokenomicsList key={item.id} item={item} color={item.color} total={total} />)
                }
            </ul>
        </div>
    );
}
