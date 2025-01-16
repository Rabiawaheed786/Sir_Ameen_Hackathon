import React from 'react';
import Image from "next/image";
import ProductCard from './productCard';
import { featureProduct_Data } from "@/components/constant/featureProduct";

function LogoFeature() {
  return (
    <section className="w-full flex flex-col mt-[53px] px-6 lg:px-12">
      
      {/* Logos Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-[106px]">
        <Image src={"/logos/logo1.png"} alt="logo1" width={85} height={87} className="w-[70px] sm:w-[85px]" />
        <Image src={"/logos/logo2.png"} alt="logo2" width={107} height={109} className="w-[80px] sm:w-[107px]" />
        <Image src={"/logos/logo3.png"} alt="logo3" width={135} height={139} className="w-[100px] sm:w-[135px]" />
        <Image src={"/logos/logo4.png"} alt="logo4" width={63} height={65} className="w-[50px] sm:w-[63px]" />
        <Image src={"/logos/logo5.png"} alt="logo5" width={98} height={101} className="w-[75px] sm:w-[98px]" />
        <Image src={"/logos/logo6.png"} alt="logo6" width={113} height={115} className="w-[85px] sm:w-[113px]" />
        <Image src={"/logos/logo7.png"} alt="logo7" width={84} height={87} className="w-[70px] sm:w-[84px]" />
      </div>

      {/* Featured Products Section */}
      <div className="flex flex-col mt-[24px]">
        
        {/* Heading */}
        <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[35px] font-semibold text-[#272343] text-center lg:text-left">
          Featured Products
        </h1>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[40px]">
          {/* Product Card */}
          <ProductCard data={featureProduct_Data} />
        </div>

      </div>

    </section>
  );
}

export default LogoFeature;
