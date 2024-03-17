"use client"

import React from 'react'
import TokenomicsChart from './TokenomicsChart';
import './tokenomicsChart.css'
import Image from 'next/image';
import DoughnutChart from './DoughnutChart';

export default function Tokenomics() {
    // TokenomicsChart Data
    const tokenomicsChartData = [
        { label: "Category 1", value: 40 },
        { label: "Category 2", value: 30 },
        { label: "Category 3", value: 20 },
    ];

    const data = [
        {
            label: 'Seed Round', value: '47,500,000', color: '#59EECA'
        },
        {
            label: 'Private Round', value: '31,250,000', color: '#1C4EFF'
        },
        {
            label: 'Public Round', value: '28,250,000', color: '#834DF6'
        },
        {
            label: 'DEX Liquidity', value: '15,000,000', color: '#57E76F'
        },
        {
            label: 'Staking & Community Reward', value: '125,000,000', color: '#FDF64F'
        },
        {
            label: 'Partnership/Network Adoption Fund', value: '150,000,000', color: '#FD4F6E'
        },
        {
            label: 'Team & Advisor', value: '160,000,000', color: '#F59D4C'
        },
        {
            label: 'Allocation for Incubator (SingularityNET)', value: '50,000,000', color: '#4C54F5'
        },
        {
            label: 'Ecosystem Development Fund', value: '388,750,000', color: '#D25F5F'
        },
    ];

    return (
        <div className="mt-6 flex-grow pl-[60px] pt-[23px] pr-[60px] pb-[50px] rounded-[30px] bg-[#18182b]">
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

            {/* <div className=' chart-container '>
                <div className='w-[250px] mx-auto'>
                    <DoughnutChart data={data} />
                </div>
                <div className="center-content flex flex-col items-center justify-center gap-y-5 ">
                    <Image src="/CGV.png" height={50} width={50} alt="Logo" className='rounded-full' />

                    <div className=''>
                        <p className='text-sm text-[#A6B1DE] font-semibold'>Total:</p>
                        <p>1,000,000,000 tokens</p>
                    </div>
                </div>
            </div> */}

            {/* <div className="grid grid-cols-2 mt-10">
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
            </div> */}
        </div>
    );
}
