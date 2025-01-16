import React from 'react'
import { Card } from './ui/card';
import { revCard_data } from './constant/revCard';
import { FaCheck } from "react-icons/fa6";

function RevCard() {
  return (
    <>
        {revCard_data.map((item, index) => {
            return (
                <Card className='h-full w-full sm:w-[309px] md:w-[280px] lg:w-[309px] flex flex-col gap-[12px] bg-[#F9F9F9] p-[24px] sm:p-[32px] md:p-[40px]' key={index}>
                    <div>
                        <FaCheck size={24} color='#007580'/>
                    </div>

                    <h1 className='text-[18px] sm:text-[20px] leading-[28px] text-[#007580]'>
                        {item.heading}
                    </h1>

                    <p className='text-[14px] sm:text-[16px] leading-[24px] text-[#007580]'>
                        {item.deatils}
                    </p>
                </Card>
            )
        })}
    </>
  )
}

export default RevCard;
