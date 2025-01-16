import React from 'react';
import Image from "next/image";
import { category_Data } from "@/components/constant/category";

function ImageCard() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {category_Data.map((item, index) => {
        return (
          <div 
            className="relative w-full sm:w-[300px] lg:w-[424px] max-w-[424px] overflow-hidden rounded-lg" 
            key={index}
          >
            <Image 
              src={item.src} 
              alt="image" 
              width={424} 
              height={424} 
              className="w-full h-[300px] sm:h-[424px] object-cover" 
            />

            <div className="absolute bottom-0 left-0 w-full h-[85px] text-white bg-black/70 p-4 rounded-b-lg">
              <h2 className="text-base sm:text-[20px] leading-[22px] font-semibold">
                {item.name}
              </h2>
              <p className="text-xs sm:text-[14px] leading-[15px] mt-2">
                {item.about}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageCard;
