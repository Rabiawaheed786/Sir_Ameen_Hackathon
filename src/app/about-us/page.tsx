import { Button } from '@/components/ui/button'
import React from 'react'
import Image from "next/image"
import RevCard from '@/components/revCard'

function Page() {
  return (
    <section className='w-full py-[100px]'>
      {/* About div 1 */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-[29px] px-4'>
        {/* 1 */}
        <div className='bg-[#007580] p-[64px] text-white w-full md:w-[495px]'>
          <h1 className='text-[32px] leading-[38px] font-semibold'>About Us - Comforty</h1>
          <div className='text-[18px] leading-[21px] mt-[12px]'>
            <p>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.</p>
          </div>
          <Button className='w-[179px] h-[56px] bg-[#F9F9F926] mt-[143px] rounded-none'>View collection</Button>
        </div>




        {/* 2 */}
        <div className='w-full md:w-[619px] h-[463px] relative'>
          <Image src={"/products/card5.png"} alt="chair" layout='fill' objectFit='cover' />
        </div>
      </div>

      {/* Div 2 */}
      <div className='mt-[132px]'>
        <h1 className='text-[32px] text-center leading-[35px] font-semibold'>What makes our Brand Different</h1>

        {/* Card review main div */}
        <div className='w-full h-[244px] flex flex-wrap gap-[29px] mt-[48px] justify-center'>
          <RevCard />
        </div>
      </div>

      {/* Div 3 */}
      <div className='mt-[300px]'>
        <h1 className='text-[32px] leading-[35px] font-semibold text-center'>Our Popular Products</h1>

        Product Pictures
        <div className='mt-[43px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
          <div className='h-full'>
            <Image src={"/products/p1.png"} alt="chair" width={630} height={375} />
            <p className='text-[20px] leading-[28px] text-[#2A254B] mt-[24px]'>The Poplar suede sofa</p>
            <h4 className='text-[18px] leading-[27px] text-[#2A254B] mt-[8px]'>$99.00</h4>
          </div>

          <div className='h-full'>
            <Image src={"/products/p2.png"} alt="chair" width={305} height={375} />
            <p className='text-[20px] leading-[28px] text-[#2A254B] mt-[24px]'>The Dandy chair</p>
            <h4 className='text-[18px] leading-[27px] text-[#2A254B] mt-[8px]'>$99.00</h4>
          </div>

          <div className='h-full'>
            <Image src={"/products/p3.png"} alt="chair" width={305} height={375} />
            <p className='text-[20px] leading-[28px] text-[#2A254B] mt-[24px]'>The Dandy chair</p>
            <h4 className='text-[18px] leading-[27px] text-[#2A254B] mt-[8px]'>$99.00</h4>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Page
