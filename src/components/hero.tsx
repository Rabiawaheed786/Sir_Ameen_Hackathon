import React from 'react';
import { Button } from './ui/button';
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[70px] pt-8 lg:pt-[115px] pb-8 lg:pb-[151px] bg-[#F0F2F3]">
      
      {/* First heading div */}
      <div className="flex flex-col gap-6 lg:gap-[24px] text-center lg:text-left">
        <p className="text-sm lg:text-[14px] leading-[14px] tracking-[12%] text-[#272343]">Welcome to chairy</p>
        <h1 className="text-4xl lg:text-[60px] leading-tight lg:leading-[66px] font-bold text-[#272343]">
          Best Furniture <br /> Collection for your <br /> interior.
        </h1>
        <Button className="w-full sm:w-[171px] h-[52px] flex items-center justify-center text-[16px] leading-[17px] gap-[20px] py-[14px] px-[24px] bg-[#029FAE] mt-6 lg:mt-[25px]">
          Shop Now
          <FaArrowRightLong size={24} />
        </Button>
      </div>

      {/* Image div */}
      <div className="mt-8 lg:mt-0 flex justify-center lg:justify-start">
        <Image 
          src="/main.png" 
          alt="chair" 
          width={434} 
          height={584} 
          className="w-full max-w-[434px] lg:max-w-[600px]" 
        />
      </div>

    </section>
  );
}
export default Hero;
