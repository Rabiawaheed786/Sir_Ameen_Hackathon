import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FiShoppingCart } from 'react-icons/fi';
import Feature from '@/components/feature';

function Page() {
  return (
    <>
      <section className="px-4 md:px-8 lg:px-16">

        {/* First Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-[111px] items-center">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src="/products/product2.png"
              alt="Library Stool Chair"
              width={675}
              height={607}
              className="w-full h-auto md:max-w-[675px]"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-start md:items-start text-center md:text-left">
            <h1 className="text-[36px] md:text-[48px] lg:text-[60px] leading-[1.2] font-bold text-[#272343]">
              Library Stool <br /> Chair
            </h1>

            <Button className="text-[18px] md:text-[20px] font-semibold text-white bg-[#029FAE] mt-[16px] md:mt-[32px] rounded-full py-2 px-6 md:px-8">
              $20.00 USD
            </Button>

            <div className="w-full md:w-[400px] text-[16px] md:text-[18px] leading-[1.5] text-[#272343] pt-[24px] md:pt-[37px] border-t-[1px] mt-[24px] md:mt-[37px]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
                adipiscing.
              </p>
            </div>

            <Button className="w-full md:w-[212px] h-[50px] md:h-[63px] flex items-center justify-center gap-[9px] text-[#FFFFFF] bg-[#029FAE] mt-[24px] md:mt-[32px] rounded-full">
              <FiShoppingCart size={24} md={29} color="white" />
              <p className="text-[16px] md:text-[20px] leading-[22px] font-medium">
                Add To Cart
              </p>
            </Button>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="w-full mt-[80px] md:mt-[123px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-[20px] md:text-[28px] font-bold text-[#000000]">
              Featured Products
            </h1>
            <p className="text-[16px] md:text-[18px] underline mt-4 md:mt-0">
              View all
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[40px] md:mt-[69px]">
            <Feature />
            <Feature />
            <Feature />
            <Feature />
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;

