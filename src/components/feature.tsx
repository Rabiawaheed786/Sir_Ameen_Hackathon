import React from 'react';
import { Card } from './ui/card';
import Image from 'next/image';
import { feature_data } from './constant/feature';

function Feature() {
  return (
    <div className="w-full px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {feature_data.map((item, index) => {
        return (
          <Card
            className="h-full w-full shadow-none border-none flex flex-col items-center"
            key={index}
          >
            <div className="w-full h-[263px] overflow-hidden rounded-lg">
              <Image
                src={item.src}
                alt="image"
                width={270}
                height={263}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-[#272343] mt-[15px] w-full">
              <p className="text-[14px] md:text-[16px] leading-[18px] md:leading-[20px]">
                {item.heading}
              </p>

              <h3 className="text-[14px] leading-[16px] font-bold">{item.price}</h3>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default Feature;