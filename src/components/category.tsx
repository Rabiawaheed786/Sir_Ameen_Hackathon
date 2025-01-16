import React from 'react';
import ImageCard from './imageCard';
import Image from 'next/image';

function Category() {
  return (
    <section className="w-full mt-[136px] px-4 md:px-8">
      {/* heading */}
      <h1 className="text-[24px] md:text-[32px] leading-[30px] md:leading-[35px] font-semibold text-[#272343] text-center md:text-left">
        Top categories
      </h1>

      {/* Images main div */}
      <div className="w-full flex flex-wrap gap-[24px] mt-[40px] justify-center">
        <ImageCard />
      </div>

      {/* bottom pictures */}
      <div className="w-full grid gap-[16px] mt-[40px] md:mt-[80px] lg:grid-cols-2">
        {/* First full half picture */}
        <div className="w-full">
          <Image
            src="/products/card1.png"
            alt="picture"
            width={648}
            height={648}
            className="w-full h-auto"
          />
        </div>

        {/* Smaller pictures in a grid */}
        <div className="grid grid-cols-2 gap-[16px]">
          <Image
            src="/products/card2.png"
            alt="chair2"
            width={312}
            height={312}
            className="w-full h-auto"
          />
          <Image
            src="/products/card3.png"
            alt="chair3"
            width={312}
            height={312}
            className="w-full h-auto"
          />
          <Image
            src="/products/card4.png"
            alt="chair4"
            width={312}
            height={312}
            className="w-full h-auto"
          />
          <Image
            src="/products/card5.png"
            alt="chair5"
            width={312}
            height={312}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Category;
