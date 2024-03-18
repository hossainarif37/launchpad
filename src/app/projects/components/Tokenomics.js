"use client"

import React from 'react'
import TokenomicsChart from './TokenomicsChart';
import './tokenomicsChart.css'
import Image from 'next/image';
import TokenomicsList from './TokenomicsList';

export default function Tokenomics() {

    const data = [
        {
            id: 1, label: 'Seed Round', value: '47,500,000', color: '#59EECA'
        },
        {
            id: 2, label: 'Private Round', value: '31,250,000', color: '#1C4EFF'
        },
        {
            id: 3, label: 'Public Round', value: '28,250,000', color: '#834DF6'
        },
        {
            id: 4, label: 'DEX Liquidity', value: '15,000,000', color: '#57E76F'
        },
        {
            id: 5, label: 'Staking & Community Reward', value: '125,000,000', color: '#FDF64F'
        },
        {
            id: 6, label: 'Partnership/Network Adoption Fund', value: '150,000,000', color: '#FD4F6E'
        },
        {
            id: 7, label: 'Team & Advisor', value: '160,000,000', color: '#F59D4C'
        },
        {
            id: 8, label: 'Allocation for Incubator (SingularityNET)', value: '50,000,000', color: '#4C54F5'
        },
        {
            id: 9, label: 'Ecosystem Development Fund', value: '388,750,000', color: '#D25F5F'
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

            {/* Tokenomics List */}
            <ul>
                {
                    data?.map(item => <TokenomicsList key={item.id} item={item} />)
                }
            </ul>
        </div>
    );
}
