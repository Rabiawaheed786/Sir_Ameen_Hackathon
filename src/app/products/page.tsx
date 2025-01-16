import { Product_Data } from '@/components/constant/productsPage'
import ProductCard from '@/components/productCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import Image from "next/image"

function Page() {
  return (
    <>

      <section className='w-full mt-[57px] px-4 md:px-8'>

        {/* Heading */}
        <div>
          <h1 className='text-[32px] leading-[35px] font-semibold text-[#272343]'>Our Products</h1>
        </div>

        {/* Cards main */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px] mt-[40px]'>
          <ProductCard data={Product_Data} />
        </div>

        {/* Bottom subscribe section */}
        <div className='w-full text-center mt-[173px] py-[100px] bg-[#F0F2F3]'>

          <h1 className='text-[50px] leading-[58px] font-medium '>Or subscribe to the newsletter</h1>

          {/* Input and button */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-[24px] mt-[20px] text-black'>

            <div className='border-b-[2px] border-black w-full sm:w-[643px]'>
              <Input type="email" placeholder="Your email" className='w-full sm:w-[643px] h-[32px] border-none border-b-[2px] text-[16px] py-[15px] px-[20px]' />
            </div>

            <div className='border-b-[2px] border-black sm:ml-[8px] sm:mb-[2px] mt-[12px] sm:mt-0'>
              <Button className='text-[16px] leading-[110%] font-semibold py-[14px] px-[24px] bg-transparent text-black shadow-none'>Subscribe</Button>
            </div>

          </div>

          {/* Heading 2 */}
          <h1 className='text-[50px] leading-[58px] font-medium mt-[70px]'>Follow products and discounts on Instagram</h1>

          {/* Pictures div */}
          <div className='flex flex-wrap items-center justify-center gap-[24px] mt-[60px]'>

            <Image src={"/products/cat2.png"} alt="pic" width={186} height={186} />
            <Image src={"/products/cat1.png"} alt="pic" width={186} height={186} />
            <Image src={"/products/product2.png"} alt="pic" width={186} height={186} />
            <Image src={"/products/product1.png"} alt="pic" width={186} height={186} />
            <Image src={"/products/product3.png"} alt="pic" width={186} height={186} />
            <Image src={"/products/cat3.png"} alt="pic" width={186} height={186} />

          </div>

        </div>

      </section>

    </>
  )
}

export default Page;
